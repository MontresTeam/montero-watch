"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

import Blog1 from "@/public/images/Blog/blog1.jpg";
import Blog2 from "@/public/images/Blog/gmt2.png";
import Blog3 from "@/public/images/Blog/gmt3.jpg";
import Blog4 from "@/public/images/Blog/gmt4.jpg";
import Blog5 from "@/public/images/Blog/gmt5.png";
import Blog6 from "@/public/images/Blog/gmt1.jpg";
import Blog7 from "@/public/images/Blog/gmt6.png";
import Blog8 from "@/public/images/Blog/gmt11.jpg";

import { Mail, ArrowRight } from "lucide-react";

export default function Page() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language?.toLowerCase() === "ar";

  return (
    <div className={isAr ? "lang-ar" : ""}>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] sm:h-[75vh] w-full overflow-hidden">
        <Image
          src={Blog1}
          alt="Montero GMT Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white">
            <h1 className="font-cormorant text-[clamp(2rem,6vw,4.5rem)] leading-tight">
              {t("reviewHeroTitle")}
            </h1>
            <p className="mt-6 text-sm sm:text-lg opacity-90 max-w-2xl mx-auto font-light tracking-wide">
              {t("reviewHeroSub")}
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 py-20 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-cormorant text-3xl sm:text-5xl mb-8">
              {t("welcomeMontero")}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {t("recentUpdateText")}
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= BLOG GRID ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 pb-28">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="font-cormorant text-3xl sm:text-5xl mb-4">
                {t("updatesTitle")}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
                {t("updatesDesc")}
              </p>
            </div>

            {/* 🔥 FIXED GRID */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              <BlogCard
                img={Blog2}
                category={t("lumeUpgrade")}
                date={t("productionLocked")}
                title={t("lumeTitle")}
                desc={t("lumeDesc")}
                href="/review/blog#lume"
              />

              <BlogCard
                img={Blog3}
                category={t("gmtFunction")}
                date={t("verified")}
                title={t("gmtTitle")}
                desc={t("gmtDesc")}
                href="/review/blog#mechanism"
              />

              <BlogCard
                img={Blog4}
                category={t("designRefinement")}
                date={t("finalized")}
                title={t("buckleTitle")}
                desc={t("buckleDesc")}
                href="/review/blog#buckle"
              />

              <BlogCard
                img={Blog5}
                category={t("ergonomics")}
                date={t("optimized")}
                title={t("crownTitle")}
                desc={t("crownDesc")}
                href="/review/blog#crown"
              />

              <BlogCard
                img={Blog6}
                category={t("construction")}
                date={t("confirmed")}
                title={t("casebackTitle")}
                desc={t("casebackDesc")}
                href="/review/blog#caseback"
              />

              <BlogCard
                img={Blog7}
                category={t("performance")}
                date={t("tested")}
                title={t("mechanismTitle")}
                desc={t("mechanismDesc")}
                href="/review/blog#mechanism"
              />

              <BlogCard
                img={Blog8}
                category={t("engineering")}
                date={t("completed")}
                title={t("precisionTitle")}
                desc={t("precisionDesc")}
                href="/review/blog"
              />

              <BlogCard
                img={Blog2}
                category={t("materials")}
                date={t("upgraded")}
                title={t("ceramicTitle")}
                desc={t("ceramicDesc")}
                href="/review/blog"
              />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </div>
  );
}

/* ================= SCROLL ANIMATION ================= */
function ScrollAnimation({ children, animationClass }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${show ? animationClass : "opacity-0 translate-y-10"
        } transition-all duration-1000 ease-out`}
    >
      {children}
    </div>
  );
}

/* ================= BLOG CARD ================= */
function BlogCard({ img, category, date, title, desc, href }) {
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

        {/* Wishlist Icon */}
        <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white hover:text-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
        </button>
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
