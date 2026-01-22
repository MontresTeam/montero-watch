"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import star from "./../../../public/images/contact/star.png";

import Footer from "../../components/home/Footer/Footer";
import Navbar from "../../components/navBar/NavBar";

import { useTranslation } from "react-i18next";

export default function ResetPasswordFailedPage() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";
    const router = useRouter();

    return (
        <div className={isAr ? "lang-ar" : ""}>
            <Navbar />
            <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-8 sm:py-12">
                {/* Progress Bar - keeping it but maybe show error state? */}
                <div className="flex items-center justify-center mb-8 sm:mb-12">
                    {/* Step 1 */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black bg-white">
                        <Image src={star} alt="Step 1" width={30} height={30} />
                    </div>

                    {/* Line */}
                    <div className="w-16 sm:w-24 h-1 bg-gray-100" />

                    {/* Step 2 */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black bg-white">
                        <Image src={star} alt="Step 2" width={30} height={30} />
                    </div>

                    {/* Line */}
                    <div className="w-16 sm:w-24 h-1 bg-gray-100" />

                    {/* Step 3 */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-red-500 bg-white">
                        <span className="text-red-500 text-xl">✕</span>
                    </div>
                </div>

                {/* Heading Section */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="font-cormorant text-3xl sm:text-4xl text-red-600 mb-3 sm:mb-4">{t("passwordResetFailed")}</h1>
                    <p className="monaSans text-neutral-500 text-[15px] sm:text-[17.1px] leading-[100%] tracking-[-0.01em] font-light">
                        {t("resetLinkInvalid")}
                    </p>
                </div>

                {/* Button Section */}
                <button
                    onClick={() => router.push('/forgot_password')}
                    className="w-full max-w-xs bg-black text-white font-medium py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-neutral-800 shadow-xl shadow-neutral-100 active:scale-[0.98]"
                >
                    {t("tryAgain")}
                </button>
            </div>
            <Footer />
        </div>
    );
}
