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

import { useTranslation } from 'react-i18next';

export default function ResetPasswordPage() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";
    const router = useRouter();
    const params = useParams(); // Get token from URL
    const { token } = params;

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
            setError(t("bothFieldsRequired"));
            return false;
        }
        if (password.length < 8) {
            setError(t("mustBe8Chars"));
            return false;
        }
        if (password !== confirmPassword) {
            setError(t("passwordsDoNotMatch"));
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
            toast.success(t("passwordUpdatedSuccess"));
            router.push('/reset-password/success');
        } catch (err) {
            console.error("Reset password error:", err);
            toast.error(err.response?.data?.message || t("failedToResetPassword"));
            // Optional: redirect to failed page if token is invalid
            if (err.response?.status === 400 || err.response?.status === 404) {
                router.push('/reset-password/failed');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={isAr ? "lang-ar" : ""}>
            <Navbar />
            <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 pt-24 pb-12 lg:pt-32 lg:pb-24">
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
                    <h1 className="font-cormorant text-3xl sm:text-4xl text-neutral-900 mb-3 sm:mb-4">{t("resetYourPassword")}</h1>
                    <p className="monaSans text-neutral-500 text-[15px] sm:text-[17.1px] leading-[100%] tracking-[-0.01em] font-light">
                        {t("resetPasswordDesc")}
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6">
                    <div>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder={t("newPassword")}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full bg-neutral-50 border px-4 sm:px-5 py-3 sm:py-4 monaSans text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors ${error && !password ? 'border-red-500' : 'border-neutral-200'}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 transition-colors"
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <span className="block mt-1 sm:mt-2 text-[10px] sm:text-xs text-neutral-500">{t("mustBe8Chars")}</span>
                    </div>
                    <div>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder={t("confirmPassword")}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={`w-full bg-neutral-50 border px-4 sm:px-5 py-3 sm:py-4 monaSans text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors ${error && !confirmPassword ? 'border-red-500' : 'border-neutral-200'}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 transition-colors"
                            >
                                {showConfirmPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                        <line x1="1" y1="1" x2="23" y2="23"></line>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <span className="block mt-1 sm:mt-2 text-[10px] sm:text-xs text-neutral-500">{t("mustBe8Chars")}</span>
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
                        {loading ? t("resetting") : t("resetPassword")}
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
}
