"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import api from "@/lib/api";
import { toast } from "react-toastify";
import { Mail, ArrowRight } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import InnerBlog1 from "@/public/images/Blog/innerBlog1.jpg";
import Blog5 from "@/public/images/Blog/gmt2.png";
import Blog6 from "@/public/images/Blog/gmt3.jpg";
import Blog7 from "@/public/images/Blog/gmt11.jpg";

const Page = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";
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
              {/* BACK BUTTON - Fixed to go back to review page */}
              <Link
                href="/review"
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

      {/* HERO IMAGE */}
      <ScrollAnimation animationClass="animate-slide-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={InnerBlog1}
                alt={t("heroAlt")}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
                quality={100}
              />
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center italic tracking-wide">
              {t("heroImageCaption", { defaultValue: "Montero GMT - Final Production Sample" })}
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* BLOG CONTENT */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8 sm:space-y-10 text-gray-700 text-base sm:text-lg leading-relaxed font-light">
              <p className="font-medium text-black">{t("byMontero")}</p>

              <hr className="border-gray-100" />

              <p className="text-xl sm:text-2xl font-cormorant italic text-gray-800">
                {t("welcomeMontero")}
              </p>

              <p>
                {t("monteroIntro1")}
              </p>

              <p>
                {t("monteroIntro2")}
              </p>

              <p>
                {t("monteroIntro3")}
              </p>

              {/* Enhanced Lume Section */}
              <div id="lume" className="pt-8 scroll-mt-24">
                <h2 className="font-cormorant text-2xl sm:text-4xl mb-6 text-black border-l-4 border-black pl-6">
                  {t("lumeHeading")}
                </h2>
                <p className="mb-4">
                  {t("lumeText")}
                </p>
                <ul className="space-y-3 pl-6">
                  {["lumeListItem1", "lumeListItem2", "lumeListItem3", "lumeListItem4"].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-black mt-1.5">•</span>
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GMT Hand Visibility */}
              <div id="gmt" className="pt-8 scroll-mt-24">
                <h2 className="font-cormorant text-2xl sm:text-4xl mb-6 text-black border-l-4 border-black pl-6">
                  {t("gmtVisibilityHeading")}
                </h2>
                <p className="mb-4">
                  {t("gmtHandText")}
                </p>
                <ul className="space-y-3 pl-6">
                  {["gmtListItem1", "gmtListItem2", "gmtListItem3"].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-black mt-1.5">•</span>
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buckle Design */}
              <div id="buckle" className="pt-8 scroll-mt-24">
                <h2 className="font-cormorant text-2xl sm:text-4xl mb-6 text-black border-l-4 border-black pl-6">
                  {t("buckleHeading")}
                </h2>
                <ul className="space-y-3 pl-6">
                  {["buckleListItem1", "buckleListItem2"].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-black mt-1.5">•</span>
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GMT Crown */}
              <div id="crown" className="pt-8 scroll-mt-24">
                <h2 className="font-cormorant text-2xl sm:text-4xl mb-6 text-black border-l-4 border-black pl-6">
                  {t("crownHeading")}
                </h2>
                <ul className="space-y-3 pl-6">
                  {["crownListItem1", "crownListItem2"].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-black mt-1.5">•</span>
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Caseback */}
              <div id="caseback" className="pt-8 scroll-mt-24">
                <h2 className="font-cormorant text-2xl sm:text-4xl mb-6 text-black border-l-4 border-black pl-6">
                  {t("casebackHeading")}
                </h2>
                <ul className="space-y-3 pl-6">
                  {["casebackListItem1", "casebackListItem2", "casebackListItem3", "casebackListItem4", "casebackListItem5", "casebackListItem6"].map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-black mt-1.5">•</span>
                      <span>{t(item)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* GMT Function */}
              <div id="mechanism" className="pt-8 scroll-mt-24">
                <h2 className="font-cormorant text-2xl sm:text-4xl mb-6 text-black border-l-4 border-black pl-6">
                  {t("mechanismHeading")}
                </h2>
                <p className="mb-4">
                  {t("mechanismText1")}
                </p>
                <p>
                  {t("mechanismText2")}
                </p>
              </div>

              <div className="pt-10 space-y-4">
                <p className="italic">
                  {t("closingUpdate")}
                </p>
                <p className="font-medium">{t("partOfJourney")}</p>
              </div>

              <div className="pt-12">
                <p className="font-cormorant text-2xl leading-tight">
                  {t("byMontero")}
                  <br />
                  <span className="text-gray-400 text-lg font-light">{t("tagline")}</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* POPULAR POST SECTION */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-gray-50 px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-end justify-between">
              <div>
                <h2 className="font-cormorant text-3xl sm:text-5xl mb-4">
                  {t("popularPosts")}
                </h2>
                <div className="h-1 w-20 bg-black" />
              </div>

              <Link href="/review">
                <button className="border border-black text-black px-8 py-3 text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-500">
                  {t("viewAll")}
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              <BlogCard
                img={Blog5}
                category={t("watches")}
                date={t("blogDate1")}
                title={t("blogTitle1")}
                desc={t("blogDesc1")}
                href="/review/blog"
              />
              <BlogCard
                img={Blog6}
                category={t("design")}
                date={t("blogDate2")}
                title={t("blogTitle2")}
                desc={t("blogDesc2")}
                href="/review/blog"
              />
              <BlogCard
                img={Blog7}
                category={t("technology")}
                date={t("blogDate3")}
                title={t("blogTitle3")}
                desc={t("blogDesc3")}
                href="/review/blog"
              />
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
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
              <div className="flex items-center bg-gray-100 border border-gray-200 focus-within:border-black focus-within:ring-1 focus-within:ring-black/5 px-4 py-3 sm:py-4 w-full md:min-w-[300px] rounded-md transition-all duration-300 group">
                <Mail className="mr-4 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
                <input
                  type="email"
                  required
                  placeholder={t("emailPlaceholder")}
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
                {loading ? t("loading") : t("subscribeBtn")}
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

/* ================= BLOG CARD COMPONENT ================= */
function BlogCard({ img, category, date, title, desc, href = "#" }) {
  const { t } = useTranslation();

  return (
    <Link
      href={href}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
    >
      {/* IMAGE */}
      <div className="relative w-full aspect-square overflow-hidden bg-white p-4">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width:640px) 50vw, (max-width:1024px) 50vw, 25vw"
          className="object-contain transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/[0.02] group-hover:bg-black/0 transition-colors" />


      </div>

      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 gap-2">
          <span className="bg-gray-100 text-gray-600 text-[9px] sm:text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full w-fit">
            {category}
          </span>
          <span className="text-[10px] sm:text-[11px] text-gray-400 font-light">{date}</span>
        </div>

        <h3 className="font-semibold text-sm sm:text-lg mb-2 leading-tight group-hover:text-gray-700 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="text-[11px] sm:text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4 sm:mb-6 font-light">
          {desc}
        </p>

        <div className="flex items-center gap-2 text-[10px] sm:text-xs font-medium uppercase tracking-wider text-black group-hover:gap-4 transition-all">
          {t("readMore")}
          <ArrowRight className="h-3 sm:h-3.5 w-3 sm:w-3.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}