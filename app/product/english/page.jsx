"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import EnglishEditionMain from "@/public/images/DSC08237-3-Photoroom (1).png";
import Blue1 from "@/public/images/BlueWatch/productBlue1.png";
import Blue2 from "@/public/images/BlueWatch/productBlue2.png";
import Blue3 from "@/public/images/BlueWatch/productBlue3.png";
import Blue4 from "@/public/images/BlueWatch/productBlue4.jpg";
import Green6 from "@/public/images/GreenWatch/productGreen6.png";
import Watch1 from "@/public/images/Home/watch1.png";
import Watch2 from "@/public/images/Home/watch2.png";
import { useRouter } from "next/navigation";
import { useCurrency } from "@/context/CurrencyContext";

import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";
import api from "@/lib/api";
import { toast } from "react-toastify";

import Sub3 from '../../../public/images/BlueWatch/sub/DSC08241-4.png'
import Sub4 from '../../../public/images/BlueWatch/sub/DSC08296-3.png'
import Sub5 from '../../../public/images/BlueWatch/sub/DSC08471-3.png'
import Sub6 from '../../../public/images/BlueWatch/sub/DSC08504-4.png'
import Sub7 from '../../../public/images/BlueWatch/sub/DSC08511-4.png'
import Sub8 from '../../../public/images/BlueWatch/sub/DSC08526-3.png'

const Page = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const router = useRouter();
  const { formatPrice } = useCurrency();
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Gallery Images for English Edition
  const englishGallery = [
    EnglishEditionMain,
    Blue2,
    Sub3,
    Sub4,
    Sub5,
    Sub6,
    Sub7,
    Sub8

   
  ];

  const [selectedImage, setSelectedImage] = useState(EnglishEditionMain);

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

  // Integrated Product ID from Tail
  const ENGLISH_PRODUCT_ID = "696293d7aed7103263e01fb5";

  const handlePreOrder = () => {
    router.push(`/order?productId=${ENGLISH_PRODUCT_ID}`);
  };

  const faqs = [
    t("faq1ArabicEditionAr"),
    t("faq2ArabicEditionAr"),
    t("faq3ArabicEditionAr"),
    t("faq4ArabicEditionAr"),
  ];

  return (
    <div className={isAr ? "lang-ar" : ""}>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="relative w-full min-h-screen overflow-hidden bg-[linear-gradient(104.09deg,#004770_1.87%,#0C2636_49.7%,#000106_100.38%)]">
          {/* Decorative Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-400 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-teal-600 rounded-full blur-3xl"></div>
          </div>

          {/* Content Container */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-8 sm:py-12 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 sm:gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="w-full lg:max-w-xl text-center lg:text-left z-10 order-2 lg:order-1 px-2 sm:px-0">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-cormorant text-white leading-tight mb-3 sm:mb-4 md:mb-6 mobile-heading">
                  {t("productHeroTitle")}
                </h1>

                <p className="text-sm font-body font-extralight sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                  {t("productHeroSub")}
                </p>

                <button
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
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
                    src={Blue1}
                    alt="English Edition Watch"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </section>
      </ScrollAnimation>

      {/* ================= MONTERO EDITION SECTION (Professional PDP Layout) ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="relative w-full min-h-fit bg-gray-50 py-12 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Mobile Title - Visible only on mobile */}
            <div className="lg:hidden text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-cormorant text-gray-900 leading-tight">
                {t("monteroEnglishEdition")}
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start justify-center">
              {/* Left Column: Interactive Product Gallery */}
              <div className="w-full lg:w-[45%] flex flex-col lg:flex-row gap-3 sm:gap-4">
                {/* Thumbnails - Left Side on Desktop, Bottom Row on Mobile */}
                <div className="order-2 lg:order-1 w-full lg:w-auto overflow-x-auto lg:overflow-x-visible">
                  <div className="flex flex-row lg:flex-col gap-2 lg:gap-3 py-2 justify-center lg:justify-start">
                    {englishGallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedImage(img)}
                        className={`relative flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 shadow-sm ${selectedImage === img
                          ? "border-blue-600 ring-4 ring-blue-50 scale-105"
                          : "border-transparent bg-white hover:border-blue-200"
                          }`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-contain p-0.5"
                          sizes="80px"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Main Image Viewer */}
                <div className="order-1 lg:order-2 w-full lg:flex-1 relative aspect-square group">
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex items-center justify-center">
                    <Image
                      src={selectedImage}
                      alt="Montero English Edition"
                      fill
                      priority
                      className="object-contain p-6 sm:p-12 transition-all duration-1000 ease-out transform group-hover:scale-110"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    {/* Premium Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 bg-blue-600/10 backdrop-blur-md border border-blue-600/20 rounded-full">
                      <span className="text-[9px] font-bold text-blue-700 tracking-[0.2em] uppercase">
                        English Global Edition
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Information & Actions */}
              <div className="w-full lg:w-[55%] text-center lg:text-left space-y-8">
                {/* Desktop Title & Pricing Note */}
                <div className="space-y-4">
                  <h2 className="hidden lg:block text-3xl sm:text-4xl lg:text-5xl font-cormorant text-gray-900 leading-tight">
                    {t("monteroEnglishEdition")}
                  </h2>

                  <div className="space-y-1 pt-2">
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      Pre-order Price (Official Price: {formatPrice(860)})
                    </p>
                    <div className="flex items-center justify-center lg:justify-start gap-3">
                      <span className="text-4xl font-bold text-gray-900">{formatPrice(799)}</span>
                      <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm">7% OFF</span>
                    </div>
                  </div>
                </div>

                {/* Version Selector */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t("chooseYourMontero")}</p>
                  <div className="flex justify-center lg:justify-start gap-6">
                    {/* English Blue Option (Active) */}
                    <div className="relative group cursor-pointer">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-blue-600 bg-white shadow-md shadow-blue-100 scale-105 transition-all">
                        <Image src={Watch1} alt="English Edition" fill className="object-contain p-2" />
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-blue-600">English</span>
                    </div>

                    {/* Arabic Green Option */}
                    <Link href="/product/arabic" className="group relative">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border border-gray-200 bg-white group-hover:border-emerald-500 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
                        <Image src={Watch2} alt="Arabic Edition" fill className="object-contain p-2" />
                      </div>
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-medium text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">Arabic</span>
                    </Link>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-6 pt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-y-4">
                    {[
                      t("sapphireCrystal"),
                      t("seikoMovementAr"),
                      t("waterResistanceAr"),
                      t("stainlessSteel"),
                      t("worldTimeBeachAr"),
                    ].map((item) => (
                      <div key={item} className="flex items-center justify-center lg:justify-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        </div>
                        <p className="text-gray-700 text-sm font-medium">{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Additional Highlights */}
                  <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start">
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                      <p className="text-[11px] text-gray-500 uppercase tracking-tighter">{t("sapphireDurabilityAr")}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                      <p className="text-[11px] text-gray-500 uppercase tracking-tighter">{t("gmtGlobalSyncAr")}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4 pt-6">
                  <Link href={`/order?productId=${ENGLISH_PRODUCT_ID}`} className="block">
                    <button className="w-full bg-black text-white px-8 py-5 rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-[1.02] shadow-2xl flex items-center justify-center gap-3 active:scale-95 group">
                      <span>{t("preOrderNow")}</span>
                      <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>

                  <div className="flex items-center justify-center lg:justify-start gap-4">
                    <span className="px-4 py-1.5 text-[10px] tracking-[0.2em] font-bold text-red-700 border border-red-200 uppercase bg-red-50 rounded-sm">
                      {t("limitedEdition")}
                    </span>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">{t("oneOf150")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= TECHNICAL SPECIFICATIONS SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
            {/* Title - Always visible */}
            <div className="max-w-md mb-8 sm:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant text-gray-900 mb-3">
                {t("technicalSpecsAr")}
              </h2>
              <p className="text-sm text-gray-600">
                {t("seikoDescriptionAr")}
              </p>
            </div>

            {/* Mobile/Tablet View - Stack layout */}
            <div className="lg:hidden mt-8 space-y-8">
              {/* Watch Image - Mobile */}
              <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
                <Image
                  src={Blue3}
                  alt="Montero Watch"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Specifications List - Mobile */}
              <div className="space-y-4">
                {[
                  t("stainlessSteel"),
                  t("polishedBrushedSpecAr"),
                  t("caseThicknessEngSpec"),
                  t("diameterSpecAr"),
                ].map((spec, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 pb-3 border-b border-gray-200"
                  >
                    <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                    <p className="text-sm text-gray-700">{spec}</p>
                  </div>
                ))}
              </div>

              {/* Limited Edition Text - Mobile */}
              <div className="text-center sm:text-left pt-4">
                <p className="text-4xl sm:text-5xl font-serif text-gray-200 leading-tight">
                  {t("limitedEdition")}
                </p>
                <p className="text-3xl sm:text-4xl font-serif text-gray-200">
                  {t("oneOf150")}
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
                    {t("stainlessSteel")}
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
                    {t("caseThicknessEngSpec")}
                  </p>
                  <span className="w-72 h-px bg-gray-300" />
                </div>
              </div>

              {/* FADED TEXT */}
              <div className="absolute left-12 bottom-40 pointer-events-none">
                <p className="text-6xl font-serif text-gray-200 leading-none">
                  {t("limitedEdition")}
                </p>
                <p className="text-5xl font-serif text-gray-200">{t("oneOf150")}</p>
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

              {/* WATCH IMAGE - Desktop */}
              <div className="absolute left-[800px] top-[-250px] w-[900px] h-[1250px]">
                <Image
                  src={Blue3}
                  alt="Montero Watch"
                  fill
                  priority
                  className="object-contain -rotate-[70deg] scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= HOW TO SET SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant text-gray-900 mb-8 sm:mb-12">
              {t("howToSetTitleAr")}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* LEFT CONTENT */}
              <div className="space-y-8 sm:space-y-10 order-2 lg:order-1">
                {/* Section 1 */}
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                    {t("section1TitleAr")}
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <li className="flex gap-3">
                      <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                      <span>{t("pullCrownAr")}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                      <span>{t("rotateHandsAr")}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                      <span>{t("pushCrownAr")}</span>
                    </li>
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                    {t("section2TitleAr")}
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <li className="flex gap-3">
                      <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                      <span>{t("pullCrownPosition1Ar")}</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                      <span>
                        {t("rotateClockwiseAr")}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                      <span>{t("setTimeZoneAr")}</span>
                    </li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                    {t("section3TitleAr")}
                  </h3>
                  <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                    <li className="flex gap-3">
                      <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                      <span>
                        {t("beachCorrespondsAr")}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="w-2 h-2 mt-2 bg-black rounded-full flex-shrink-0"></span>
                      <span>
                        {t("chooseBeachAr")}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT VIDEO */}
              <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[420px] flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full h-full max-w-md mx-auto">
                  <video
                    src="/images/Gallery/galleryV.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= SPLIT IMAGE/TEXT SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="w-full flex flex-col lg:flex-row relative">
          {/* LEFT — Image with Gradient Fade */}
          <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[531px]">
            <Image
              src={Blue4}
              alt="Blueprint"
              fill
              className="object-cover object-center lg:object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent to-[#1A1E28]" />
          </div>

          {/* RIGHT — Content */}
          <div className="w-full lg:w-1/2 bg-[#1A1E28] flex flex-col justify-center px-6 sm:px-8 lg:px-20 py-12 sm:py-16 lg:py-0">
            <div className="max-w-xl space-y-6 sm:space-y-8">
              <h2 className="font-serif text-3xl sm:text-4xl font-cormorant lg:text-5xl leading-tight text-white">
                {t("productHeroTitle")}
              </h2>

              <p className="font-light text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed">
                {t("productHeroSub")}
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
              {/* LEFT CONTENT */}
              <div className="lg:col-span-1">
                <p className="text-sm text-gray-500 mb-3">{t("clientFeedbackAr")}</p>

                <h2 className="text-2xl sm:text-3xl font-serif text-gray-900 mb-4 sm:mb-6 leading-snug">
                  {t("whatTheySayAr")}
                </h2>

                <p className="text-gray-600 text-sm mb-6 sm:mb-8 leading-relaxed">
                  {t("membersFeedbackAr")}
                </p>

                {/* Arrows */}
                <div className="flex items-center gap-4">
                  <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition">
                    ←
                  </button>
                  <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition">
                    →
                  </button>
                </div>
              </div>

              {/* TESTIMONIAL CARDS */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="border-b pb-6 sm:pb-8">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <span key={j} className="text-orange-500 text-sm">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {t("testimonialEngEdition")}
                    </p>

                    {/* User */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={Green6}
                          alt={i === 0 ? t("ahmadAlFarsi") : i === 1 ? t("miranaMarci") : t("saraKhalid")}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm font-medium text-gray-900">
                        {i === 0 ? t("ahmadAlFarsi") : i === 1 ? t("miranaMarci") : t("saraKhalid")}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= FAQ + SUBSCRIBE ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* FAQ ROW */}
            <div className="grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 items-start">
              {/* LEFT TEXT */}
              <ScrollAnimation animationClass="animate-slide-in-left">
                <div>
                  <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
                    {t("frequentlyAskedQuestionAr")}
                  </h2>

                  <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base text-gray-600 leading-relaxed transition-opacity duration-300 hover:opacity-80">
                    {t("faqDescriptionAr")}
                  </p>
                </div>
              </ScrollAnimation>

              {/* RIGHT FAQ LIST */}
              <ScrollAnimation animationClass="animate-slide-in-right">
                <div className="space-y-4 sm:space-y-6">
                  {faqs.map((q, i) => (
                    <div
                      key={i}
                      className="border-b border-gray-200 pb-3 sm:pb-4 transition-all duration-300 hover:border-gray-400"
                    >
                      <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="flex w-full items-center justify-between text-left text-sm sm:text-base text-black transition-colors duration-300 hover:text-gray-600"
                      >
                        <span className="pr-4">{q}</span>
                        <span
                          className="text-xl flex-shrink-0 transition-transform duration-300"
                          style={{
                            transform:
                              open === i ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          {open === i ? "−" : "+"}
                        </span>
                      </button>

                      {open === i && (
                        <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-sm text-gray-600 animate-fade-in-down">
                          {t("faqWarrantyAr")}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

            {/* SUBSCRIBE ROW */}
            <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
              {/* LEFT TEXT */}
              <div>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
                  {t("subscribeExclusiveArabicAr")}
                </h2>

                <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                  {t("subscribeMailingListArabicAr")}
                </p>
              </div>

              {/* RIGHT */}
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <div className="flex items-center bg-gray-200 px-4 py-3 w-full sm:flex-1">
                  <Mail className="mr-4" />
                  <input
                    type="email"
                    required
                    placeholder={t("enterEmail")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent outline-none w-full text-xs sm:text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-black text-white px-6 sm:px-8 py-3 text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? t("loading") : t("subscribeBtn")}
                </button>
              </form>

            </div>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </div>
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
