"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter, useParams } from 'next/navigation';
import star from "../../../public/images/contact/star.png";
import Navbar from '../../components/navBar/NavBar';
import Footer from '../../components/home/Footer/Footer';
import { resetPassword, validateResetToken } from "../../../actions/auth";
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function ResetPasswordPage() {
    const router = useRouter();
    const params = useParams(); // Get token from URL
    const { token } = params;

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Validate token on component mount
    useEffect(() => {
        const checkToken = async () => {
            if (!token) return;
            try {
                await validateResetToken(token);
            } catch (err) {
                // If token invalid/expired, redirect immediately
                router.push('/reset-password/failed');
            }
        };
        checkToken();
    }, [token, router]);

    const validateForm = () => {
        if (!password || !confirmPassword) {
            setError("Both fields are required.");
            return false;
        }
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return false;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!validateForm()) return;

        setLoading(true);

        try {
            await resetPassword(token, password);
            toast.success("Password reset successfully!");
            router.push('/reset-password/success');
        } catch (err) {
            console.error("Reset password error:", err);
            toast.error(err.response?.data?.message || "Failed to reset password.");
            // Optional: redirect to failed page if token is invalid
            if (err.response?.status === 400 || err.response?.status === 404) {
                router.push('/reset-password/failed');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
                {/* Progress Bar */}
                <div className="flex items-center justify-center mb-8 sm:mb-12">
                    {/* Step 1 */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black bg-white">
                        <Image src={star} alt="Step 1" width={30} height={30} />
                    </div>

                    {/* Line */}
                    <div className="w-16 sm:w-24 h-1 bg-gray-100" />

                    {/* Step 2 – Active */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black bg-white">
                        <Image src={star} alt="Step 2" width={30} height={30} />
                    </div>

                    {/* Line */}
                    <div className="w-16 sm:w-24 h-1 bg-gray-100" />

                    {/* Step 3 */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100">
                        <Image src={star} alt="Step 3" width={30} height={30} />
                    </div>
                </div>

                {/* Heading Section */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="font-cormorant text-3xl sm:text-4xl text-neutral-900 mb-3 sm:mb-4">Reset your password</h1>
                    <p className="monaSans text-neutral-500 text-[15px] sm:text-[17.1px] leading-[100%] tracking-[-0.01em] font-light">
                        Reset your password securely and step back into the <br className="hidden sm:block" /> timeless Montero experience.
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6">
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="New password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full bg-neutral-50 border px-4 sm:px-5 py-3 sm:py-4 monaSans text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors ${error && !password ? 'border-red-500' : 'border-neutral-200'}`}
                        />
                        <span className="block mt-1 sm:mt-2 text-[10px] sm:text-xs text-neutral-500">Must be at least 8 characters long</span>
                    </div>
                    <div className="relative">
                        <input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full bg-neutral-50 border px-4 sm:px-5 py-3 sm:py-4 monaSans text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors ${error && !confirmPassword ? 'border-red-500' : 'border-neutral-200'}`}
                        />
                        <span className="block mt-1 sm:mt-2 text-[10px] sm:text-xs text-neutral-500">Must be at least 8 characters long</span>
                    </div>

                    {error && (
                        <div className="text-red-500 text-sm text-center">
                            {error}
                        </div>
                    )}

                    <button
                        disabled={loading}
                        className="w-full bg-black text-white font-medium py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-neutral-800 shadow-xl shadow-neutral-100 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? "Resetting..." : "Reset password"}
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}
