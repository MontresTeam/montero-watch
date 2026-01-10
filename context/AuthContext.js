"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginUser, registerUser, logoutUser, checkSession } from "../actions/auth";
import api from "../lib/api"; // Keep api for interceptor setup if needed, or remove if not used directly

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Load user on mount (try refresh)
    useEffect(() => {
        const initSession = async () => {
            try {
                const data = await checkSession();
                setUser(data.user);
                api.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initSession();
    }, []);

    const login = async (email, password) => {
        try {
            const data = await loginUser(email, password);
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
            const data = await registerUser(userData);
            router.push("/login");
            return data;
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await logoutUser();
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
