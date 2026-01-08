"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../lib/axios";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user on mount (try refresh)
    useEffect(() => {
        const checkUser = async () => {
            try {
                // Attempt to refresh token directly to see if we have a valid session
                const { data } = await api.post("/refresh");
                // If successful, we have a valid access token (handled by interceptor/axios default headers)
                // We might want to fetch user details here if the refresh endpoint doesn't return them
                // For now assuming refresh might verify session. 
                // If your refresh endpoint only returns accessToken, you might need a /me endpoint or decode token.
                // Let's assume for now we just mark as logged in if refresh works.
                // Better: decode token or fetch user profile. 
                // Given the code, login returns { user, accessToken }. refresh returns { accessToken }.

                // Since we don't have a /me endpoint in the code I saw, we might rely on localStorage for *user info* only (not token), 
                // OR we can decode the accessToken.
                // For security, just knowing we have a token is enough to be "logged in" for now.
                setUser({ isAuthenticated: true });
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkUser();
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await api.post("/login", { email, password });
            setUser(data.user);
            api.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
            router.push("/"); // Redirect to home/dashboard
            return data;
        } catch (error) {
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const { data } = await api.post("/register", userData);
            // Automatically login after register? Or redirect to login?
            // Usually redirect to login or auto-login.
            // Let's return data for the component to decide.
            return data;
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await api.post("/logout");
            setUser(null);
            delete api.defaults.headers.common["Authorization"];
            router.push("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
