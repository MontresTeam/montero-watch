"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { getProfile } from "../../actions/auth";
import { toast } from "react-toastify";

function AuthSuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { setAccessToken, setUser } = useAuth();

    useEffect(() => {
        const token = searchParams.get("token");

        if (token) {
            const completeLogin = async () => {
                try {
                    // Set the token for subsequent requests
                    setAccessToken(token);

                    // Fetch user data directly with the access token we just got
                    const data = await getProfile();
                    setUser(data.user);

                    toast.success("Login successful!");
                    router.push("/");
                } catch (error) {
                    console.error("Auth success error:", error);
                    toast.error("Authentication failed. Please try again.");
                    router.push("/login");
                }
            };

            completeLogin();
        } else {
            router.push("/login");
        }
    }, [searchParams, router, setAccessToken, setUser]);

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 rounded-full border-4 border-neutral-200 border-t-black animate-spin" />
            <p className="monaSans text-neutral-500 animate-pulse">Completing authentication...</p>
        </div>
    );
}

export default function AuthSuccess() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <Suspense fallback={
                <div className="flex flex-col items-center gap-4">
                    <div className="h-12 w-12 rounded-full border-4 border-neutral-200 border-t-black animate-spin" />
                    <p className="monaSans text-neutral-500 animate-pulse">Loading...</p>
                </div>
            }>
                <AuthSuccessContent />
            </Suspense>
        </div>
    );
}
