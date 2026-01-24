"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import newcurrency from "../../../public/images/dbff981dfc9f1a8358f03cc8ee71583a164e6ffc.png";
import Link from "next/link";
import { Mail } from "lucide-react";
import Green1 from "@/public/images/GreenWatch/productGreen1.png";
import Green2 from "@/public/images/GreenWatch/Arabic edition.png";
import Green3 from "@/public/images/GreenWatch/productGreen3.png";
import Green6 from "@/public/images/GreenWatch/productGreen6.png";
import Green7 from "@/public/images/GreenWatch/productGreen7.jpg";
import Blue2 from "@/public/images/BlueWatch/productBlue2.png";
import newCurrency from '@/public/images/newSymbole.png'
import Watch1 from "@/public/images/Home/watch1.png";
import Watch2 from "@/public/images/Home/watch2.png";

import { useRouter } from "next/navigation";
import { useCurrency } from "@/context/CurrencyContext";
import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";
import api from "@/lib/api";
import { toast } from "react-toastify";

const Page = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/user/subscribe", { email });
      toast.success(response.data.message || "Subscribed successfully!");
      setEmail("");
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.response?.data?.message || "Failed to subscribe";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Integrated logic from Tail for Product ID
  const ARABIC_PRODUCT_ID = "696294b5d2b02c0550d276d1";

  const handlePreOrder = () => {
    router.push(`/order?productId=${ARABIC_PRODUCT_ID}`);
  };

  const faqs = [
    t("faq1ArabicEditionAr"),
    t("faq2ArabicEditionAr"),
    t("faq3ArabicEditionAr"),
    t("faq4ArabicEditionAr"),
  ];

  return (
    <>
      <Navbar />

      {/* First Section - Hero */}
      <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a5647] via-[#0f3d30] to-[#0a2920]">
        {/* Decorative Elements - Mobile Optimized */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 sm:top-10 md:top-20 right-4 sm:right-10 md:right-20 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-emerald-400 rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
          <div className="absolute bottom-4 sm:bottom-10 md:bottom-20 left-4 sm:left-10 md:left-20 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-teal-600 rounded-full blur-xl sm:blur-2xl md:blur-3xl"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-8 sm:py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 sm:gap-8 lg:gap-12">
            <div className="w-full lg:max-w-xl text-center lg:text-left z-10 order-2 lg:order-1 px-2 sm:px-0">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-cormorant text-white leading-tight mb-3 sm:mb-4 md:mb-6 mobile-heading">
                {t("arabicEditionHeroAr")}
              </h1>

              <p className="text-sm font-body font-extralight sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed mobile-text max-w-2xl mx-auto lg:mx-0">
                {t("arabicEditionHeroSubAr")}
              </p>

              <button
                href={`/order?productId=${ARABIC_PRODUCT_ID}`}
                onClick={handlePreOrder}
                className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                {t("preOrderNow")}
              </button>
            </div>

            {/* Right Watch Image */}
            <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[700px] aspect-square order-1 lg:order-2">
              <div className="absolute inset-0 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-2xl"></div>

              <div className="relative w-full h-full scale-110 sm:scale-125 lg:scale-138">
                <Image
                  src={Green1}
                  alt="Green World Time Watch"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
      </section>

      {/* Second Section - Montero Arabic Edition */}
      <section className="relative w-full min-h-fit bg-gray-50 flex items-center justify-center py-6 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center px-2 sm:px-4">
            {/* Title */}
            <h2 className="mt-2 sm:mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-cormorant text-gray-900 mb-3 sm:mb-4 mobile-heading">
              {t("arabicRegionalEditionAr")}
            </h2>

            {/* Watch Image */}
            <div className="relative mb-3 sm:mb-4 overflow-hidden">
              <div
                className="relative transform scale-200 z-10 w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto h-[160px] sm:h-[240px] md:h-[300px] lg:h-[360px]"
              >
                <Image
                  src={Green2}
                  alt="Montero Arabic Regional Edition Watch"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Version Selector - Montero Section */}
            <div className="flex justify-center gap-4 mb-6 z-20">
              {/* English Blue Option */}
              <Link href="/product/english" className="group relative">
                <div className="w-14 h-14 rounded-lg overflow-hidden border border-gray-200 bg-white group-hover:border-blue-500 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                  <Image src={Watch1} alt="English Edition" fill className="object-contain p-1" />
                </div>
              </Link>

              {/* Arabic Green Option (Active) */}
              <div className="relative cursor-pointer group">
                <div className="w-14 h-14 rounded-lg overflow-hidden border-2 border-emerald-600 bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:border-emerald-500">
                  <Image src={Watch2} alt="Arabic Edition" fill className="object-contain p-1" />
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="max-w-6xl mx-auto mb-4 sm:mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 place-items-center">
                {[
                  t("sapphireCrystalFeatureAr"),
                  t("seikoMovementAr"),
                  t("waterResistanceAr"),
                  t("stainlessSteelCaseAr"),
                  t("worldTimeBeachAr"),
                ].map((item) => (
                  <div key={item} className="flex items-center justify-center sm:justify-start gap-2 w-full max-w-xs sm:max-w-none">
                    <span className="w-2 h-2 bg-[#2596be] rounded-full flex-shrink-0"></span>
                    <p className="text-gray-700 text-xs sm:text-sm text-center sm:text-left mobile-small-text">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6 px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2596be] rounded-full"></span>
                <p className="text-gray-700 text-xs sm:text-sm text-center mobile-small-text">
                  {t("sapphireDurabilityAr")}
                </p>
              </div>

              <div className="w-2 h-2 bg-[#2596be] rounded-full hidden sm:block"></div>

              <p className="text-gray-700 text-xs sm:text-sm text-center mobile-small-text">
                {t("gmtGlobalSyncAr")}
              </p>
            </div>

            {/* Price & Order Button */}
            <div className="flex flex-col items-center gap-2 mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">{formatPrice(799)}</span>
                <span className="text-xl text-gray-400 line-through">{formatPrice(860)}</span>
                <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded">7% {t("off")}</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">{t("pricePreOrder", { price: formatPrice(860) })}</p>
            </div>

            {/* Order Button - HEAD Style, Integrated with Product ID */}
            <Link href={`/order?productId=${ARABIC_PRODUCT_ID}`}>
              <button className="bg-black text-white px-10 sm:px-12 py-3.5 rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2 justify-center">
                <span>{t("preOrderNow")}</span>
              </button>
            </Link>
            <br />

            {/* Limited Edition Badge */}
            <div className="inline-flex items-center gap-3 mt-3 sm:mt-4">
              <span className="px-3 py-1 text-xs tracking-widest font-semibold text-red-700 border border-red-600 uppercase bg-white/90 backdrop-blur-sm">
                {t("limitedEditionBadgeAr")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Technical Specifications */}
      <section className="bg-white py-10 sm:py-14 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
          {/* Title - Always visible */}
          <div className="w-full text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant text-gray-900 mb-2 sm:mb-3 mobile-heading">
              {t("technicalSpecsAr")}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto lg:mx-0 mobile-text">
              {t("seikoDescriptionAr")}
            </p>
          </div>

          {/* Mobile/Tablet View - Stack layout */}
          <div className="lg:hidden mt-8 space-y-8">
            {/* Watch Image Container with Rectangle Background */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
              {/* Main Watch Image */}
              <div className="relative z-10 w-full h-full max-w-xs sm:max-w-sm md:max-w-md flex items-center justify-center">
                <Image
                  src={Green3}
                  alt="Montero Watch"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Specifications List - Mobile */}
            <div className="space-y-4 px-2">
              {[
                t("stainlessSteelCase"),
                t("polishedBrushedSpecAr"),
                t("caseThicknessSpecAr"),
                t("diameterSpecAr"),
                t("arabicDialSpecAr"),
                t("arabicSpecialEditionAr"),
              ].map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 pb-3 border-b border-gray-200"
                >
                  <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                  <p className="text-sm text-gray-700 flex-1 mobile-small-text">{spec}</p>
                </div>
              ))}
            </div>

            {/* Limited Edition Text - Mobile */}
            <div className="text-center sm:text-left pt-6">
              <p className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-200 leading-tight mobile-heading">
                {t("limitedEditionTextAr")}
              </p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-200 mobile-heading">
                {t("oneOf150Ar")}
              </p>
            </div>
          </div>

          {/* Desktop View - Original positioned layout */}
          <div className="hidden lg:block min-h-[700px]">
            {/* RIGHT TOP SPEC */}
            <div className="absolute right-[120px] top-36">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[160px]">
                  {t("stainlessSteelCase")}
                </p>
                <span className="w-56 h-px bg-gray-300" />
              </div>
            </div>

            {/* LEFT MIDDLE SPECS */}
            <div className="absolute left-[480px] top-72 space-y-16">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[220px]">
                  {t("polishedBrushedSpecAr")}
                </p>
                <span className="w-64 h-px bg-gray-300" />
              </div>

              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[240px]">
                  {t("caseThicknessSpecAr")}
                </p>
                <span className="w-72 h-px bg-gray-300" />
              </div>
            </div>

            {/* FADED TEXT */}
            <div className="absolute left-12 bottom-40 pointer-events-none">
              <p className="text-6xl font-serif text-gray-200 leading-none">
                {t("limitedEditionTextAr")}
              </p>
              <p className="text-5xl font-serif text-gray-200">{t("oneOf150Ar")}</p>
            </div>

            {/* BOTTOM LEFT SPEC */}
            <div className="absolute left-[620px] bottom-10">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[140px]">
                  {t("diameterSpecAr")}
                </p>
                <span className="w-64 h-px bg-gray-300" />
              </div>
            </div>

            {/* Arabic Edition Spec */}
            <div className="absolute right-[120px] bottom-36">
              <div className="flex items-center gap-4">
                <span className="w-2 h-2 bg-black rounded-full" />
                <p className="text-sm text-gray-700 w-[180px]">
                  {t("arabicDialSpecAr")}
                </p>
                <span className="w-56 h-px bg-gray-300" />
              </div>
            </div>

            {/* WATCH IMAGE - Desktop */}
            <div className="absolute left-[800px] top-[-250px] w-[900px] h-[1250px] z-10">
              <Image
                src={Green3}
                alt="Montero Watch"
                fill
                priority
                className="object-contain -rotate-[70deg] scale-110 transition-transform duration-700 ease-out"
                sizes="900px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - How to Set */}
      <section className="bg-white py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant text-gray-900 mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left mobile-heading">
            {t("howToSetTitleAr")}
          </h2>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1">
              {/* Section 1 */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4 mobile-small-text">
                  {t("section1TitleAr")}
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("pullCrownAr")}
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("rotateHandsAr")}
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("pushCrownAr")}
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4 mobile-small-text">
                  {t("section2TitleAr")}
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("pullCrownPosition1Ar")}
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("rotateClockwiseAr")}
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("setTimeZoneAr")}
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
                <h3 className="text-sm sm:text-base font-medium text-gray-900 mb-3 sm:mb-4 mobile-small-text">
                  {t("section3TitleAr")}
                </h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("beachCorrespondsAr")}
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("chooseBeachAr")}
                  </li>
                  <li className="flex gap-2 sm:gap-3">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-1.5 sm:mt-2 bg-black rounded-full flex-shrink-0"></span>
                    {t("arabicNumeralsTraditionalAr")}
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[420px] flex items-center justify-center order-1 lg:order-2 mb-4 lg:mb-0">
              <div className="relative w-full h-full max-w-sm md:max-w-md rounded-xl overflow-hidden shadow-lg">
                {/* Image */}
                <video
                  src="/images/Gallery/galleryV.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster="/images/Gallery/poster.jpg"
                  aria-label="Watch setting tutorial video"
                />
                {/* Play button overlay for mobile */}
                <div className="absolute inset-0 flex items-center justify-center lg:hidden">
                  <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Split Image/Text */}
      <section className="w-full flex flex-col lg:flex-row relative">
        {/* LEFT — Image with Gradient Fade */}
        <div className="relative w-full lg:w-1/2 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[531px]">
          <Image
            src={Green7}
            alt="Arabic Edition Watch Design"
            fill
            className="object-cover object-center lg:object-left"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-[#1A1E28]/90"></div>
        </div>

        {/* RIGHT — Content */}
        <div className="w-full lg:w-1/2 bg-[#1A1E28] flex flex-col justify-center px-4 sm:px-6 lg:px-12 xl:px-20 py-8 sm:py-12 lg:py-0">
          <div className="max-w-xl space-y-4 sm:space-y-6 lg:space-y-8 mx-auto lg:mx-0">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-cormorant leading-tight text-white text-center lg:text-left mobile-heading">
              {t("worldTimeWatchWithArabicAr")}
            </h2>

            <p className="font-light text-base sm:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed text-center lg:text-left mobile-text">
              {t("withArabicNumeralsAr")}
            </p>

            {/* Mobile-only CTA */}
            <div className="lg:hidden pt-4">
              <Link href={`/order?productId=${ARABIC_PRODUCT_ID}`} className="inline-block w-full">
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors w-full flex items-center justify-center gap-2 min-h-[44px]">
                  <div className="relative w-4 h-4">
                    <Image
                      src={newcurrency}
                      alt="Currency Symbol"
                      fill
                      className="object-contain"
                      sizes="20px"
                    />
                  </div>
                  <span>{t("orderArabicEditionAr")}</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 - Testimonials */}
      <section className="bg-white py-10 sm:py-14 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col lg:grid lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-1 text-center lg:text-left">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 mobile-small-text">{t("clientFeedbackAr")}</p>

              <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-snug mobile-heading">
                {t("whatTheySayAr")}
              </h2>

              <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0 mobile-small-text">
                {t("membersFeedbackAr")}
              </p>

              {/* Arrows */}
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <button
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors min-w-[44px] min-h-[44px]"
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
            </div>

            {/* TESTIMONIAL CARDS */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {/* CARD */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="border-b lg:border-b-0 pb-4 sm:pb-6 lg:pb-0">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3 sm:mb-4 justify-center sm:justify-start">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-orange-500 text-xs sm:text-sm">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 mobile-small-text">
                    {t("testimonialTextAr")}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={Green6}
                        alt={i === 0 ? t("ahmadAlFarsi") : i === 1 ? t("miranaMarci") : t("saraKhalid")}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-gray-900 mobile-small-text">
                        {i === 0
                          ? t("ahmadAlFarsi")
                          : i === 1
                            ? t("miranaMarci")
                            : t("saraKhalid")}
                      </p>
                      <p className="text-xs text-gray-500 mobile-small-text">{t("verifiedBuyerAr")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 - FAQ + SUBSCRIBE */}
      <section className="bg-white py-10 sm:py-14 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* FAQ ROW */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
            {/* LEFT TEXT */}
            <div className="text-center lg:text-left">
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-gray-700 mobile-heading">
                {t("frequentlyAskedQuestionAr")}
              </h2>

              <p className="mt-3 sm:mt-4 lg:mt-6 max-w-md text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed transition-opacity duration-300 hover:opacity-80 mx-auto lg:mx-0 mobile-text">
                {t("faqDescriptionAr")}
              </p>
            </div>

            {/* RIGHT FAQ LIST */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 w-full">
              {faqs.map((q, i) => (
                <div
                  key={i}
                  className="border-b border-gray-200 pb-3 sm:pb-4 transition-all duration-300 hover:border-gray-400"
                >
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between text-left text-xs sm:text-sm lg:text-base text-black transition-colors duration-300 hover:text-gray-600 py-2 mobile-small-text"
                    aria-expanded={open === i}
                    aria-controls={`faq-answer-${i}`}
                  >
                    <span className="pr-4">{q}</span>
                    <span
                      className="text-lg sm:text-xl flex-shrink-0 transition-transform duration-300 min-w-[24px] min-h-[24px] flex items-center justify-center"
                      style={{
                        transform:
                          open === i ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      {open === i ? "−" : "+"}
                    </span>
                  </button>

                  {open === i && (
                    <p
                      id={`faq-answer-${i}`}
                      className="mt-2 sm:mt-3 lg:mt-4 max-w-md text-xs sm:text-sm text-gray-600 mobile-small-text"
                    >
                      {t("faqWarrantyAr")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SUBSCRIBE ROW */}
          <div className="mt-8 sm:mt-12 lg:mt-20 xl:mt-24 flex flex-col lg:grid lg:grid-cols-2 items-center gap-6 sm:gap-8 lg:gap-12">
            {/* LEFT TEXT */}
            <div className="text-center lg:text-left">
              <h2 className="font-cormorant text-xl sm:text-2xl lg:text-3xl xl:text-4xl transition-colors duration-300 hover:text-gray-700 mobile-heading">
                {t("subscribeExclusiveArabicAr")}
              </h2>

              <p className="mt-2 sm:mt-3 lg:mt-4 max-w-md text-xs sm:text-sm lg:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed mx-auto lg:mx-0 mobile-text">
                {t("subscribeMailingListArabicAr")}
              </p>
            </div>

            {/* RIGHT */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4 w-full max-w-md lg:max-w-none mx-auto lg:mx-0">
              <div className="flex items-center bg-gray-100 px-3 sm:px-4 py-2 sm:py-3 w-full rounded-lg">
                <Mail className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5 text-gray-500 flex-shrink-0" />
                <input
                  type="email"
                  placeholder={t("enterEmail")}
                  className="bg-transparent outline-none w-full text-xs sm:text-sm placeholder:text-gray-500 mobile-small-text"
                  aria-label="Email address for subscription"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition rounded-lg min-h-[44px] disabled:opacity-50"
              >
                {loading ? t("loading") : t("subscribeBtn")}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;

/* ================= SCROLL ANIMATION COMPONENT ================= */
function ScrollAnimation({ children, animationClass, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-opacity ${isVisible ? animationClass : "opacity-0"
        }`}
    >
      {children}
    </div>
  );
}
