"use client";

import React from 'react';
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import { useTranslation } from "react-i18next";

const TermsAndConditions = () => {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    return (
        <div className={`bg-white min-h-screen flex flex-col ${isAr ? 'font-arabic' : 'font-mona'} text-[#1a1a1a]`} dir={isAr ? "rtl" : "ltr"}>
            <Navbar />

            <main className="flex-grow pt-32 pb-24 px-5 sm:px-8 md:px-12 lg:px-16 w-full max-w-5xl mx-auto">
                {/* Header Section */}
                <header className="mb-14 md:mb-20 text-center md:text-start border-b border-gray-100 pb-8 md:pb-12">
                    <h1 className={`text-4xl sm:text-5xl md:text-6xl font-medium mb-4 tracking-tight leading-tight ${isAr ? '' : 'font-cormorant'}`}>
                        {t("termsTitle")}
                    </h1>
                    <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">
                        {t("lastUpdated")}
                    </p>
                </header>

                {/* Introduction */}
                <section className="mb-16 max-w-3xl">
                    <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8">
                        {isAr ? (
                            <>
                                مرحباً بكم في <span className="font-semibold text-gray-900">مونتيرو</span>. تحكم هذه الشروط والأحكام ("الشروط") استخدامكم لموقعنا الإلكتروني،
                                <span className="font-medium"> monterowatch.com</span> ("الموقع")، وشراء منتجاتنا. من خلال الدخول إلى الموقع أو استخدامه، فإنكم توافقون على الالتزام بهذه الشروط.
                            </>
                        ) : (
                            <>
                                Welcome to <span className="font-semibold text-black">Montero</span>. These Terms & Conditions (“Terms”) govern your use of our website,
                                <span className="font-medium text-black"> monterowatch.com</span> (the “Site”), and the purchase of our products. By accessing or using the Site, you agree to be bound by these Terms.
                            </>
                        )}
                    </p>
                    <div className="bg-[#FAFAFA] xpx-6 py-5 px-6 rounded-sm border-l-2 border-black">
                        <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                            {t("termsDisclaimer")}
                        </p>
                    </div>
                </section>

                {/* Terms Content */}
                <div className="space-y-16">

                    {/* Section 1 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>01</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection1")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-5 text-gray-600 leading-chill text-base md:text-lg`}>
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
                            <div className="bg-[#f9f9f9] p-6 rounded-lg text-sm md:text-base border border-gray-100">
                                <p className="mb-3 break-words">
                                    <strong className="text-black font-semibold uppercase text-xs tracking-wider block mb-1">{t("termsRegisteredAddress")}</strong>
                                    {t("termsAddress")}
                                </p>
                                <p className="break-words">
                                    <strong className="text-black font-semibold uppercase text-xs tracking-wider block mb-1">{t("termsContact")}</strong>
                                    <a href="mailto:support@monterowatch.com" className="text-black underline decoration-gray-300 hover:decoration-black transition-all">support@monterowatch.com</a>
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>02</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection2")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <p>{t("termsSection2Content")}</p>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>03</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection3")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-6 text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <ul className="list-none space-y-6">
                                <li>
                                    <strong className="text-black block mb-2 font-medium">{t("termsAcceptance")}</strong>
                                    {t("termsAcceptanceContent")}
                                </li>
                                <li>
                                    <strong className="text-black block mb-2 font-medium">{t("termsPreOrders")}</strong>
                                    {t("termsPreOrdersContent")}
                                </li>
                                <li>
                                    <strong className="text-black block mb-2 font-medium">{t("termsPricing")}</strong>
                                    {t("termsPricingContent")}
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>04</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection4")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <p>{t("termsSection4Content")}</p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>05</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection5")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-6 text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <p>{t("termsSection5Content")}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                <div className="bg-[#FAFAFA] p-6 rounded-md border border-gray-100">
                                    <h3 className="font-semibold text-black mb-3">{t("termsCustomsDuties")}</h3>
                                    <p className="text-sm md:text-base leading-relaxed text-gray-500">{t("termsCustomsDutiesContent")}</p>
                                </div>
                                <div className="bg-[#FAFAFA] p-6 rounded-md border border-gray-100">
                                    <h3 className="font-semibold text-black mb-3">{t("termsDeliveryIssues")}</h3>
                                    <p className="text-sm md:text-base leading-relaxed text-gray-500">{t("termsDeliveryIssuesContent")}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>06</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection6")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <p>{t("termsSection6Content")}</p>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>07</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection7")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <p>{t("termsSection7Content")}</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>08</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection8")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <p>{t("termsSection8Content")}</p>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>09</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection9")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <p>{t("termsSection9Content")}</p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section>
                        <div className="flex items-baseline mb-4 md:mb-5">
                            <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>10</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection10")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
                            <p>{t("termsSection10Content")}</p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="bg-[#1a1a1a] text-white p-8 md:p-12 rounded-xl mt-20">
                        <div className="flex items-baseline mb-6">
                            <span className={`text-sm font-bold text-gray-500 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>11</span>
                            <h2 className={`text-2xl md:text-3xl font-medium text-white ${isAr ? '' : 'font-cormorant'}`}>
                                {t("termsSection11")}
                            </h2>
                        </div>
                        <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-6 text-sm md:text-base leading-relaxed`}>
                            <p className="text-gray-300">
                                {t("termsSection11Content1")} <a href="mailto:support@monterowatch.com" className="text-white underline decoration-gray-500 hover:decoration-white transition-all">support@monterowatch.com</a>
                            </p>
                            <address className="not-italic md:w-fit bg-[#252525] p-6 rounded-lg border border-[#333]">
                                <strong className="block text-base md:text-lg mb-2 text-white font-medium">{t("termsAddressLabel")}</strong>
                                <span className="block text-gray-400">{t("termsAddressLine1")}</span>
                                <span className="block text-gray-400">{t("termsAddressLine2")}</span>
                            </address>
                        </div>
                    </section>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;