"use client";

import React from 'react';
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    return (
        <div className={`bg-white min-h-screen ${isAr ? 'font-arabic' : 'font-sans'} flex flex-col`} dir={isAr ? "rtl" : "ltr"}>
            <Navbar />
            <div className="flex-grow pt-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-24 text-gray-800">
                    {/* Header Section */}
                    <header className="mb-10 md:mb-12 border-b border-gray-200 pb-6 md:pb-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">
                            {t("termsTitle")}
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500 font-medium">
                            {t("lastUpdated")}
                        </p>
                    </header>

                    {/* Introduction */}
                    <section className="mb-8 md:mb-10">
                        <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6">
                            {isAr ? (
                                <>
                                    مرحباً بكم في <span className="font-semibold text-gray-900">مونتيرو</span>. تحكم هذه الشروط والأحكام ("الشروط") استخدامكم لموقعنا الإلكتروني،
                                    <span className="font-medium"> monterowatch.com</span> ("الموقع")، وشراء منتجاتنا. من خلال الدخول إلى الموقع أو استخدامه، فإنكم توافقون على الالتزام بهذه الشروط.
                                </>
                            ) : (
                                <>
                                    Welcome to <span className="font-semibold text-gray-900">Montero</span>. These Terms & Conditions (“Terms”) govern your use of our website,
                                    <span className="font-medium"> monterowatch.com</span> (the “Site”), and the purchase of our products. By accessing or using the Site, you agree to be bound by these Terms.
                                </>
                            )}
                        </p>
                        <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-medium bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-100">
                            {t("termsDisclaimer")}
                        </p>
                    </section>

                    {/* Terms Content */}
                    <div className="space-y-10 md:space-y-12">

                        {/* Section 1 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>1</span>
                                {t("termsSection1")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>
                                    {isAr ? (
                                        <>
                                            يتم تشغيل الموقع بواسطة <strong>مونتيرو</strong>، وهي علامة تجارية تابعة لشركة <strong>مونتريس للتجارة ذ.م.م</strong>، وهي شركة مسجلة في الإمارات العربية المتحدة.
                                        </>
                                    ) : (
                                        <>
                                            The Site is operated by <strong>Montero</strong>, a brand of <strong>Montres Trading L.L.C</strong>, a company registered in the United Arab Emirates.
                                        </>
                                    )}
                                </p>
                                <div className="bg-gray-50 p-4 sm:p-6 rounded-lg text-sm border border-gray-100">
                                    <p className="mb-2 break-all sm:break-normal">
                                        <strong className="text-gray-900">{t("termsRegisteredAddress")}</strong> {t("termsAddress")}
                                    </p>
                                    <p className="break-all sm:break-normal">
                                        <strong className="text-gray-900">{t("termsContact")}</strong> <a href="mailto:support@monterowatch.com" className="text-blue-600 hover:underline">support@monterowatch.com</a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>2</span>
                                {t("termsSection2")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>{t("termsSection2Content")}</p>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>3</span>
                                {t("termsSection3")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <ul className="list-none space-y-4">
                                    <li>
                                        <strong className="text-gray-900 block mb-1">{t("termsAcceptance")}</strong>
                                        {t("termsAcceptanceContent")}
                                    </li>
                                    <li>
                                        <strong className="text-gray-900 block mb-1">{t("termsPreOrders")}</strong>
                                        {t("termsPreOrdersContent")}
                                    </li>
                                    <li>
                                        <strong className="text-gray-900 block mb-1">{t("termsPricing")}</strong>
                                        {t("termsPricingContent")}
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>4</span>
                                {t("termsSection4")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>{t("termsSection4Content")}</p>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>5</span>
                                {t("termsSection5")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>{t("termsSection5Content")}</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-4">
                                    <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">{t("termsCustomsDuties")}</h3>
                                        <p className="text-sm">{t("termsCustomsDutiesContent")}</p>
                                    </div>
                                    <div className="bg-gray-50 p-4 sm:p-5 rounded-lg border border-gray-100">
                                        <h3 className="font-semibold text-gray-900 mb-2">{t("termsDeliveryIssues")}</h3>
                                        <p className="text-sm">{t("termsDeliveryIssuesContent")}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>6</span>
                                {t("termsSection6")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>{t("termsSection6Content")}</p>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>7</span>
                                {t("termsSection7")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>{t("termsSection7Content")}</p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>8</span>
                                {t("termsSection8")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>{t("termsSection8Content")}</p>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>9</span>
                                {t("termsSection9")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>{t("termsSection9Content")}</p>
                            </div>
                        </section>

                        {/* Section 10 */}
                        <section>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 md:mb-4 flex items-center">
                                <span className={`bg-gray-900 text-white text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>10</span>
                                {t("termsSection10")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} text-gray-600 leading-relaxed text-sm sm:text-base`}>
                                <p>{t("termsSection10Content")}</p>
                            </div>
                        </section>

                        {/* Section 11 */}
                        <section className="bg-gray-900 text-white p-6 sm:p-8 rounded-xl sm:rounded-2xl mt-12 sm:mt-16">
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center">
                                <span className={`bg-white text-gray-900 text-xs sm:text-sm font-bold rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center ${isAr ? 'ml-3' : 'mr-3'} shrink-0`}>11</span>
                                {t("termsSection11")}
                            </h2>
                            <div className={`${isAr ? 'pr-0 md:pr-11' : 'pl-0 md:pl-11'} space-y-4 sm:space-y-6 text-sm sm:text-base`}>
                                <p className="text-gray-300">
                                    {t("termsSection11Content1")} <a href="mailto:support@monterowatch.com" className="text-white underline hover:text-gray-200 transition-colors">support@monterowatch.com</a>
                                </p>
                                <address className="not-italic bg-gray-800 p-5 sm:p-6 rounded-lg sm:rounded-xl border border-gray-700">
                                    <strong className="block text-base sm:text-lg mb-2 text-white">{t("termsAddressLabel")}</strong>
                                    <span className="block text-gray-400">{t("termsAddressLine1")}</span>
                                    <span className="block text-gray-400">{t("termsAddressLine2")}</span>
                                </address>
                            </div>
                        </section>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;