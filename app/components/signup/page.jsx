"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../../public/images/signupImg.jpg';
import { useAuth } from '../../../context/AuthContext';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

export default function SignupPage() {
    const { t } = useTranslation();
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { register, googleLogin, facebookLogin } = useAuth();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    const validateForm = () => {
        const errors = {};
        if (!name.trim()) errors.name = t("nameRequired");

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            errors.email = t("emailRequired");
        } else if (!emailRegex.test(email)) {
            errors.email = t("invalidEmail");
        }

        if (!password) {
            errors.password = t("passwordRequired");
        } else if (password.length < 6) {
            errors.password = t("passwordMinChar");
        }

        setFieldErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        if (loading) return;

        setError("");
        if (!validateForm()) {
            toast.error(t("fixValidationErrors"));
            return;
        }

        setLoading(true);
        try {
            const response = await register({ name, email, password });

            console.log("✅ Register response:", response);
            toast.success(t("accountCreatedSuccess"));

            // optional: log specific fields if backend sends them
            console.log("Message:", response?.message);
            console.log("User:", response?.user);

            router.push("/signup/verify");
        } catch (err) {
            console.error("❌ Register error:", err);
            const msg = err?.response?.data?.message || err?.message || t("registrationFailed") || "Registration failed";
            toast.error(msg);
            setError(msg);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="mt-8 min-h-screen w-full bg-white flex items-center justify-center overflow-x-hidden pt-10 md:pt-0">
            <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-12 lg:py-0">

                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full max-w-[500px] aspect-square overflow-hidden shadow-2xl rounded-sm group">
                        <Image
                            src={img}
                            alt="Montero Watch Premium Display"
                            fill
                            sizes="(max-width: 1024px) 100vw, 500px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-neutral-900/5" />
                    </div>
                </div>

                {/* Form Section */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-md mx-auto">
                    <header className="mb-8 text-center lg:text-left">
                        <h1 className="font-cormorant text-4xl md:text-5xl text-neutral-900 leading-tight mb-4 tracking-wide">
                            {t("signUpHeader")}
                        </h1>
                        <p className="monaSans text-neutral-500 text-sm md:text-base leading-relaxed tracking-tight max-w-sm">
                            {t("signInDesc")}
                        </p>
                    </header>



                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Name Input */}
                        <div className="relative">
                            <input
                                type="text"
                                placeholder={t("name")}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full bg-neutral-50 border px-5 py-4 monaSans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors ${fieldErrors.name ? "border-red-500" : "border-neutral-200"}`}
                            />
                            {fieldErrors.name && <p className="text-red-500 text-xs mt-1 absolute">{fieldErrors.name}</p>}
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder={t("emailId")}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full bg-neutral-50 border px-5 py-4 monaSans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors ${fieldErrors.email ? "border-red-500" : "border-neutral-200"}`}
                            />
                            {fieldErrors.email && <p className="text-red-500 text-xs mt-1 absolute">{fieldErrors.email}</p>}
                        </div>

                        {/* Password Input */}
                        <div className="relative group">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder={t("password")}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={`w-full bg-neutral-50 border px-5 py-4 monaSans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors ${fieldErrors.password ? "border-red-500" : "border-neutral-200"}`}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 transition-colors"
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
                            {fieldErrors.password && <p className="text-red-500 text-xs mt-1 absolute -bottom-5">{fieldErrors.password}</p>}
                        </div>

                        <div className="flex items-center justify-between pb-2">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="w-4 h-4 border-neutral-300 rounded focus:ring-black accent-black transition-all" />
                                <span className="monaSans text-xs text-neutral-600 group-hover:text-neutral-900 transition-colors">{t("keepMeSignedIn")}</span>
                            </label>
                        </div>
                        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`
        w-full bg-black text-white font-medium py-5 text-sm
        uppercase tracking-[0.2em] transition-all duration-300
        shadow-xl shadow-neutral-100 active:scale-[0.98]
        disabled:cursor-not-allowed disabled:bg-neutral-700
        ${!loading && "hover:bg-neutral-800"}
      `}
                        >
                            {loading ? t("creatingAccount") : t("signUp")}
                        </button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-neutral-100 text-center lg:text-left">
                        <p className="monaSans text-sm text-neutral-500 tracking-tight">
                            {t("alreadyHaveAccount")}{" "}
                            <Link
                                href="/login"
                                className="text-neutral-900  hover:text-neutral-600 transition-colors underline-offset-4 hover:underline"
                            >
                                {t("signIn")}
                            </Link>
                        </p>
                    </div>

                    <footer className="mt-10 text-center space-y-8">
                        <div className="relative flex items-center justify-center">
                            <div className="w-full h-px bg-neutral-100" />
                            <span className="absolute bg-white px-4 monaSans text-xs text-neutral-400 uppercase tracking-widest">{t("or")}</span>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <button
                                onClick={googleLogin}
                                className="flex-1 flex items-center justify-center border border-neutral-200 py-3.5 hover:bg-neutral-50 transition-all duration-300 rounded-sm"
                            >
                                <i className="fa-brands fa-google text-xl"></i>
                            </button>
                            <button
                                onClick={facebookLogin}
                                className="flex-1 flex items-center justify-center border border-neutral-200 py-3.5 hover:bg-neutral-50 transition-all duration-300 rounded-sm"
                            >
                                <i className="fa-brands fa-facebook text-xl"></i>
                            </button>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}