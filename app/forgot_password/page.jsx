"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import star from "../../public/images/contact/star.png";
import Navbar from '../components/navBar/NavBar';
import Footer from '../components/home/Footer/Footer';
import { forgotPassword } from '../../actions/auth';
import { toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';

export default function page() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await forgotPassword(email);
            toast.success(t("passwordResetLinkSent"));
            router.push("/forgot_password/sent");
        } catch (error) {
            toast.error(error.response?.data?.message || t("somethingWentWrong"));
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

                    {/* Step 1 – Active */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-black bg-white">
                        <Image src={star} alt="Step 1" width={30} height={30} />
                    </div>

                    {/* Line */}
                    <div className="w-16 sm:w-24 h-1 bg-gray-100" />

                    {/* Step 2 */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full  bg-gray-100">
                        <Image src={star} alt="Step 2" width={30} height={30} />
                    </div>

                    {/* Line */}
                    <div className="w-16 sm:w-24 h-1 bg-gray-100" />

                    {/* Step 3 */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full  bg-gray-100">
                        <Image src={star} alt="Step 3" width={30} height={30} />
                    </div>

                </div>


                {/* Heading Section */}
                <div className="text-center mb-6 sm:mb-8">
                    <h1 className="font-cormorant text-3xl sm:text-4xl text-neutral-900 mb-3 sm:mb-4">{t("forgotYourPassword")}</h1>
                    <p className="monaSans text-neutral-500 text-[15px] sm:text-[17.1px] leading-[100%] tracking-[-0.01em] font-light">
                        {t("resetPasswordDesc")}
                    </p>
                </div>

                {/* Form Section */}
                <form onSubmit={handleSubmit} className="w-full max-w-sm sm:max-w-md space-y-4 sm:space-y-6">
                    <div className="relative">
                        <input
                            type="email"
                            placeholder={t("emailId")}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-neutral-50 border border-neutral-200 px-4 sm:px-5 py-3 sm:py-4 monaSans text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
                        />
                    </div>
                    <button
                        disabled={loading}
                        className="w-full bg-black text-white font-medium py-4 sm:py-5 text-xs sm:text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-neutral-800 shadow-xl shadow-neutral-100 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? t("sendingBtn") : t("resetPassword")}
                    </button>
                </form>
            </div>
            <Footer />
        </div>

    );
}