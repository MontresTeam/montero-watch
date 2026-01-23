"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import api from "@/lib/api";
import { toast } from "react-toastify";
import { Mail } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import InnerBlog1 from "@/public/images/Blog/innerBlog1.jpg";
import Blog5 from "@/public/images/Blog/gmt2.png";
import Blog6 from "@/public/images/Blog/gmt3.jpg";
import Blog7 from "@/public/images/Blog/gmt11.jpg";

const Page = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/user/subscribe", { email });
      toast.success(response.data.message || "Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      const errorMessage = error.response?.data?.error || error.response?.data?.message || "An error occurred. Please try again later.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={isAr ? "lang-ar" : ""}>
      <Navbar />

      {/* HERO SECTION */}
      <ScrollAnimation animationClass="animate-fade-in">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
          <div className="mx-auto max-w-7xl">
            {/* TOP BAR */}
            <div className="mb-8 sm:mb-10 flex items-center gap-4 sm:gap-6">
              {/* BACK BUTTON - Fixed to go back to reviews page */}
              <Link
                href="/reviews" // Changed from "/review" to "/reviews" (assuming this is your reviews page)
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:bg-gray-100 hover:border-gray-400"
              >
                <FaArrowLeft className="text-xs sm:text-sm" />
              </Link>

              {/* DATE */}
              <span className="text-xs sm:text-sm text-gray-400">
                {t("date", { defaultValue: "Date" })}&nbsp;&nbsp;{t("heroDate")}
              </span>
            </div>

            {/* TITLE */}
            <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black max-w-5xl">
              {t("reviewHeroTitle")}
            </h1>
          </div>
        </section>
      </ScrollAnimation>

      {/* HERO IMAGE - Fixed with proper image configuration */}
      <ScrollAnimation animationClass="animate-slide-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-lg">
              <Image
                src={InnerBlog1} // Ensure this image is high-resolution in your public folder
                alt={t("heroAlt")}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
                quality={90} // Increased quality
                placeholder="blur" // Add blur placeholder if image supports it
              />
            </div>
            {/* Optional: Add image caption */}
            <p className="text-xs text-gray-500 mt-2 text-center italic">
              {t("heroImageCaption", { defaultValue: "Montero GMT - Final Production Sample" })}
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* BLOG CONTENT */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-5 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>{t("byMontero")}</p>

              <hr className="my-6 border-gray-300" />

              <p>{t("welcomeMontero")}</p>

              <p>
                {t("monteroIntro1", { defaultValue: "Thank you for your continued trust and patience. Were excited to share a new exclusive production update for the Montero GMT, following weeks of intensive refinement, testing, and collaboration." })}
              </p>

              <p>
                {t("monteroIntro2", { defaultValue: "Over the past period, our focus has been on enhancing legibility, night visibility, and overall functional precision, while maintaining the distinctive identity that defines Montero." })}
              </p>

              <p>
                {t("monteroIntro3", { defaultValue: "Below are the latest confirmed updates now locked into production." })}
              </p>

              {/* Enhanced Lume Section */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                {t("lumeHeading")}
              </h2>
              <p>
                {t("lumeText", { defaultValue: "We ve refined the lume application to ensure superior night-time readability while preserving visual balance during the day." })}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {t("lumeListItem1", { defaultValue: "Earth map: Only the land areas are treated with Super-LumiNova for improved contrast and a cleaner night appearance." })}
                </li>
                <li>{t("lumeListItem2", { defaultValue: "Blue Edition: Emits a blue lume glow at night." })}</li>
                <li>{t("lumeListItem3", { defaultValue: "Green Edition: Emits a green lume glow at night." })}</li>
                <li>
                  {t("lumeListItem4", { defaultValue: "GMT Red Pointer: Now larger, more legible, and filled with red lume for instant GMT reference." })}
                </li>
              </ul>

              {/* GMT Hand Visibility */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                {t("gmtVisibilityHeading")}
              </h2>
              <p>
                {t("gmtHandText", { defaultValue: "The red GMT pointer has been intentionally enlarged to improve readability across time zones, especially in low-light conditions." })}
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>{t("gmtListItem1", { defaultValue: "Faster GMT recognition" })}</li>
                <li>{t("gmtListItem2", { defaultValue: "Balanced dial proportions" })}</li>
                <li>{t("gmtListItem3", { defaultValue: "Enhanced night performance" })}</li>
              </ul>

              {/* Buckle Design */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                {t("buckleHeading")}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{t("buckleListItem1", { defaultValue: "The buckle will feature the Montero logo only" })}</li>
                <li>
                  {t("buckleListItem2", { defaultValue: "All additional markings have been removed for a refined finish" })}
                </li>
              </ul>

              {/* GMT Crown */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                {t("crownHeading")}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  {t("crownListItem1", { defaultValue: "The GMT crown will be partially or fully hidden, depending on final ergonomic validation" })}
                </li>
                <li>{t("crownListItem2", { defaultValue: "This improves wearability without affecting functionality" })}</li>
              </ul>

              {/* Caseback */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                {t("casebackHeading")}
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{t("casebackListItem1", { defaultValue: "Improved durability" })}</li>
                <li>{t("casebackListItem2", { defaultValue: "Secure construction" })}</li>
                <li>{t("casebackListItem3", { defaultValue: "Long-term reliability" })}</li>
                <li>{t("casebackListItem4", { defaultValue: "Limited Edition serial numbering" })}</li>
                <li>{t("casebackListItem5", { defaultValue: "Clear English & Arabic lettering" })}</li>
                <li>
                  {t("casebackListItem6", { defaultValue: "Optimized font size and engraving depth for clarity" })}
                </li>
              </ul>

              {/* GMT Function */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                {t("mechanismHeading")}
              </h2>
              <p>
                {t("mechanismText1", { defaultValue: "We confirm that the GMT mechanism is working accurately and independently, ensuring correct time zone tracking without interference." })}
              </p>
              <p>
                {t("mechanismText2", { defaultValue: "This was a critical functional checkpoint and is now fully validated." })}
              </p>

              <p className="mt-6">
                {t("closingUpdate", { defaultValue: "We ll continue sharing transparent updates as we move closer to delivery." })}
              </p>

              <p>{t("partOfJourney", { defaultValue: "Thank you for being part of the Montero journey" })}</p>

              <p className="mt-6 font-cormorant text-lg">
                {t("byMontero")}
                <br />
                {t("tagline")}
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* POPULAR POST SECTION - Fixed links to connect properly */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 sm:mb-12 flex items-center justify-between">
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl">
                {t("popularPosts")}
              </h2>

              <Link href="/reviews"> {/* Fixed to /reviews */}
                <button className="bg-black text-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-md transition-all duration-300 hover:bg-gray-800 active:scale-95">
                  {t("viewAll")}
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
              <ScrollAnimation animationClass="animate-slide-in-up" delay={0}>
                <BlogCard
                  img={Blog5}
                  category={t("watches")}
                  date={t("blogDate1")}
                  title={t("blogTitle1")}
                  desc={t("blogDesc1")}
                  href="/reviews/gmt-evolution" // Added href prop
                />
              </ScrollAnimation>

              <ScrollAnimation animationClass="animate-slide-in-up" delay={100}>
                <BlogCard
                  img={Blog6}
                  category={t("design")}
                  date={t("blogDate2")}
                  title={t("blogTitle2")}
                  desc={t("blogDesc2")}
                  href="/reviews/design-philosophy" // Added href prop
                />
              </ScrollAnimation>

              <ScrollAnimation animationClass="animate-slide-in-up" delay={200}>
                <BlogCard
                  img={Blog7}
                  category={t("technology")}
                  date={t("blogDate3")}
                  title={t("blogTitle3")}
                  desc={t("blogDesc3")}
                  href="/reviews/lume-technology" // Added href prop
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* SUBSCRIBE SECTION */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
            {/* LEFT TEXT */}
            <div>
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-gray-700">
                {t("subscribeHeading")}
              </h2>

              <div className="mt-3 sm:mt-4 lg:mt-6 max-w-md text-xs sm:text-sm lg:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                {t("subscribeDesc")}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex items-center bg-gray-100 px-4 py-3 sm:py-4 w-full rounded-md transition-all duration-300 hover:bg-gray-200">
                <Mail className="mr-4" />
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  className="bg-transparent outline-none w-full text-xs sm:text-sm placeholder:text-gray-400"
                />
              </div>

              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap rounded-md transition-all duration-300 hover:bg-gray-800 active:scale-95">
                {t("subscribeBtn")}
              </button>
            </div>

            {/* RIGHT FORM */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
              <div className="flex items-center bg-gray-100 border border-gray-200 focus-within:border-black focus-within:ring-1 focus-within:ring-black/5 px-4 py-3 sm:py-4 w-full md:min-w-[300px] rounded-md transition-all duration-300 group">
                <Mail className="mr-4 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
                <input
                  type="email"
                  required
                  placeholder="Enter your e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent outline-none w-full text-xs sm:text-sm placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-8 sm:px-10 py-3 sm:py-4 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-md transition-all duration-300 hover:bg-gray-900 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                {loading ? "..." : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>
      </section>

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
      className={`transition-all duration-700 ease-out ${isVisible ? animationClass : "opacity-0"
        }`}
    >
      {children}
    </div>
  );
}

/* ================= BLOG CARD COMPONENT - Updated ================= */
function BlogCard({ img, category, date, title, desc, href = "#" }) {
  const { t } = useTranslation();
  return (
    <Link href={href} className="group cursor-pointer block">
      <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          quality={85}
        />
      </div>

      <div className="mt-4 sm:mt-5 flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
        <span className="transition-colors duration-300 hover:text-gray-700">
          {category}
        </span>
        <span>•</span>
        <span>{date}</span>
      </div>

      <h3 className="mt-2 sm:mt-3 font-mona text-base sm:text-lg lg:text-xl leading-snug transition-colors duration-300 group-hover:text-gray-700">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
        {desc}
      </p>

      <div className="mt-3 sm:mt-4 inline-block text-xs sm:text-sm text-blue-600 transition-all duration-300 hover:text-blue-700 hover:underline group-hover:translate-x-1">
        {t("readMore")}...
      </div>
    </Link>
  );
}