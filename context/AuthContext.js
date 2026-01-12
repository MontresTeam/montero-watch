"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { loginUser, registerUser, logoutUser, checkSession } from "../actions/auth";
import api from "../lib/api";
import { toast } from "react-toastify";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const initialized = React.useRef(false);

    // Load user on mount (try refresh)
    useEffect(() => {
        if (initialized.current) return;
        initialized.current = true;

        const initSession = async () => {
            try {
                const data = await checkSession();
                setUser(data.user);
                api.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
            } catch (error) {
                console.error("Session initialization failed:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initSession();
    }, []);

    const login = React.useCallback(async (email, password, redirectTo) => {
        try {
            const data = await loginUser(email, password);
            setUser(data.user);
            api.defaults.headers.common["Authorization"] = `Bearer ${data.accessToken}`;
            toast.success("Login successful!");
            router.push(redirectTo || "/"); // Redirect to provided path or home
            return data;
        } catch (error) {
            throw error;
        }
    }, [router]);

    const register = React.useCallback(async (userData) => {
        try {
            const data = await registerUser(userData);
            router.push("/login");
            return data;
        } catch (error) {
            throw error;
        }
    }, [router]);

    const logout = React.useCallback(async () => {
        try {
            await logoutUser();
            setUser(null);
            delete api.defaults.headers.common["Authorization"];
            router.push("/login");
        } catch (error) {
            console.error("Logout failed", error);
        }
    }, [router]);

    const googleLogin = React.useCallback(() => {
        window.location.href = `${api.defaults.baseURL}/auth/google`;
    }, []);

    const facebookLogin = React.useCallback(() => {
        window.location.href = `${api.defaults.baseURL}/auth/facebook`;
    }, []);

    const setAccessToken = React.useCallback((token) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }, []);

    const value = React.useMemo(() => ({
        user,
        login,
        register,
        logout,
        loading,
        googleLogin,
        facebookLogin,
        setAccessToken,
        setUser
    }), [user, login, register, logout, loading, googleLogin, facebookLogin, setAccessToken]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
