"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navBar/NavBar";
import Comparison1 from "@/public/images/Comparison/comparisonFirst.jpg";
import Comparison2 from "@/public/images/Comparison/comparison2.png";
import Comparison3 from "@/public/images/Comparison/comparison3.png";
import Comparison4 from "@/public/images/Comparison/comparison4.jpg";
import Comparison5 from "@/public/images/Comparison/comparison5.jpg";
import Footer from "@/app/components/home/Footer/Footer";
import api from "@/lib/api";
import { toast } from "react-toastify";

const page = () => {
  const { t } = useTranslation();
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
      const errorMessage =
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Failed to subscribe";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden">
  <Image
    src={Comparison1}
    alt="Hero"
    fill
    priority
    sizes="(max-width: 640px) 100vw,
           (max-width: 768px) 100vw,
           (max-width: 1024px) 100vw,
           100vw"
    className="object-cover object-center"
  />

  {/* Optional subtle overlay */}
  <div className="absolute inset-0 bg-black/10 pointer-events-none" />
</section>
      {/* ================= COMPARE SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-6 py-28">
          <div className="mx-auto max-w-6xl text-center">
            {/* TAG */}
            <ScrollAnimation animationClass="animate-fade-in-up" delay={100}>
              <button className="inline-block bg-gray-200 px-4 py-1 text-xs sm:text-sm text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.96] active:shadow-inner">
                {t("comparison")}
              </button>
            </ScrollAnimation>

            {/* TITLE */}
            <ScrollAnimation animationClass="animate-fade-in-up" delay={200}>
              <h2 className="font-cormorant text-4xl md:text-5xl text-black mt-6">
                {t("compareTheCraft")}
              </h2>
            </ScrollAnimation>

            {/* DESCRIPTION */}
            <ScrollAnimation animationClass="animate-fade-in-up" delay={300}>
              <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
                {t("monteroComparisonText1")}
                <br />
                <br />
                {t("monteroComparisonText2")}
              </p>
            </ScrollAnimation>

            {/* WATCHES */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {/* ENGLISH EDITION */}
              <ScrollAnimation
                animationClass="animate-slide-in-left"
                delay={400}
              >
                <div className="text-center">
                  <h3 className="font-cormorant text-2xl mb-6">
                    {t("monteroEnglishEdition")}
                  </h3>

                  <div className="relative mx-auto w-[260px] h-[360px]">
                    <Image
                      src={Comparison2}
                      alt="Montero English Edition"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* ARAB EDITION */}
              <ScrollAnimation
                animationClass="animate-slide-in-right"
                delay={400}
              >
                <div className="text-center">
                  <h3 className="font-cormorant text-2xl mb-6">
                    {t("monteroArabEdition")}
                  </h3>

                  <div className="relative mx-auto w-[260px] h-[360px]">
                    <Image
                      src={Comparison3}
                      alt="Montero Arab Edition"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-6 py-28">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* TOP LEFT IMAGE */}
            <ScrollAnimation animationClass="animate-slide-in-left">
              <div className="relative h-[320px] md:h-[360px] w-full">
                <Image
                  src={Comparison4}
                  alt="Montero English Edition"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>

            {/* TOP RIGHT CONTENT */}
            <ScrollAnimation animationClass="animate-slide-in-right">
              <div>
                <h3 className="font-cormorant text-2xl mb-4">
                  {t("monteroEnglishEdition")}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {t("comparisonDescription")}
                </p>

                <ul className="grid grid-cols-2 gap-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("caseSize")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("movement")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("materials")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("warranty")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("straps")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("deliveryWindow")}
                  </li>
                </ul>

                <Link href="/product/english">
                  <button className="mt-6 sm:mt-8 rounded-full border border-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                    Pre-Order Now
                  </button>
                </Link>
              </div>
            </ScrollAnimation>

            {/* BOTTOM LEFT CONTENT */}
            <ScrollAnimation animationClass="animate-slide-in-left">
              <div>
                <h3 className="font-cormorant text-2xl mb-4">
                  {t("monteroArabEdition")}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {t("comparisonDescription")}
                </p>

                <ul className="grid grid-cols-2 gap-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("caseSize")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("movement")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("materials")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("warranty")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("straps")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    {t("deliveryWindowAr")}
                  </li>
                </ul>

                <Link href="/product/arabic">
                  <button className="mt-6 sm:mt-8 rounded-full border border-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                    Pre-Order Now
                  </button>
                </Link>
              </div>
            </ScrollAnimation>

            {/* BOTTOM RIGHT IMAGE */}
            <ScrollAnimation animationClass="animate-slide-in-right">
              <div className="relative h-[320px] md:h-[360px] w-full">
                <Image
                  src={Comparison5}
                  alt="Montero Arab Edition"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* SUBSCRIBE ROW */}
          <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
            {/* LEFT TEXT */}
            <div>
              <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
                {t("subscribeForExclusive")}
              </h2>

              <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                {t("subscribeMailingList")}
              </p>
            </div>

            {/* RIGHT */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-1"
            >
              <div className="flex items-center bg-gray-200 px-4 py-3 w-full">
                <span className="mr-3 text-gray-500">✉</span>
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
                className="bg-black text-white px-6 sm:px-8 py-3 text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition"
              >
                {t("subscribeBtn")}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{``}</style>
    </>
  );
};

export default page;

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
      },
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
      className={`transition-all duration-700 ease-out ${
        isVisible ? animationClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
