"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/navBar/NavBar';
import Footer from '../../components/home/Footer/Footer';

import { useTranslation } from 'react-i18next';

export default function ForgotPasswordSentPage() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";
    const router = useRouter();

    return (
        <div className={isAr ? "lang-ar" : ""}>
            <Navbar />
            <div className="min-h-screen w-full bg-neutral-50 flex items-center justify-center px-4 sm:px-6">
                <div className="w-full max-w-md bg-white border border-neutral-200 rounded-xl px-6 sm:px-8 py-10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]">

                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="h-10 w-10 rounded-full bg-neutral-100 text-neutral-700 flex items-center justify-center text-lg font-medium">
                            ✉
                        </div>
                    </div>

                    {/* Text */}
                    <div className="text-center mb-8">
                        <h1 className="font-cormorant text-2xl sm:text-3xl text-neutral-900 mb-3">
                            {t("resetLinkSent")}
                        </h1>

                        <p className="monaSans text-neutral-500 text-sm sm:text-base leading-relaxed font-light">
                            {t("resetLinkSentDesc")}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                        {/* Open Gmail */}
                        <a
                            href="https://mail.google.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center border border-neutral-300 text-neutral-700
                            py-3.5 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium
                            transition-all duration-200
                            hover:bg-neutral-100"
                        >
                            {t("openGmail")}
                        </a>

                        {/* Return to Login */}
                        <button
                            onClick={() => router.push("/login")}
                            className="w-full bg-black text-white py-4 text-xs sm:text-sm
                            uppercase tracking-[0.25em] font-medium
                            transition-all duration-200
                            hover:bg-neutral-800
                            active:scale-[0.98]"
                        >
                            {t("backToLogin")}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
