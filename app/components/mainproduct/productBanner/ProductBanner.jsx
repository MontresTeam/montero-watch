"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import WatchDisplay from "./WatchDisplay";
import gsap from "gsap";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

function ProductBanner() {
  const { t } = useTranslation();
  const router = useRouter();
  const [isSwapped, setIsSwapped] = useState(false);
  const textRef = useRef(null);

  const handlePreOrder = () => {
    if (isSwapped) {
      router.push("/product/arabic");
    } else {
      router.push("/product/english");
    }
  };

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power4.out", delay: 0.5 }
    );
  }, []);

  return (
    <section className="relative min-h-screen py-2 sm:py-4 overflow-hidden text-white bg-black">
      {/* BASE BLACK BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* BACKGROUND IMAGE - Blue */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isSwapped ? "opacity-0" : "opacity-100"
        }`}
        style={{ backgroundImage: "url('/images/Home/Bg2.png')" }}
      />

      {/* BACKGROUND IMAGE - Green */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
          isSwapped ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundImage: "url('/images/Home/bg1.png')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-8 sm:mt-[40px] sm:pt-12 lg:pt-16 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
        {/* LEFT TEXT */}
        <div
          ref={textRef}
          className="space-y-6 w-full lg:w-[55%] mt-8 sm:mt-6 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          <h1
            className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-cormorant leading-tight"
          >
            {t("productHeroTitle")}
          </h1>

          <p className="max-w-md font-Monasans font-light text-lg sm:text-xl md:text-2xl text-gray-300">
            {t("productHeroSub")}
          </p>

          <button
            onClick={handlePreOrder}
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-black bg-white border border-white font-medium text-sm sm:text-base hover:scale-105 transition"
          >
            {t("preOrderNow")}
          </button>
        </div>

        {/* RIGHT SECTION - WATCH */}
        <WatchDisplay isSwapped={isSwapped} setIsSwapped={setIsSwapped} />
      </div>

      {/* DECORATIVE BUBBLES */}
      <div className="absolute bottom-6 left-6 hidden md:block">
        <Image
          src="/images/MainProducts/Bubles 1.png"
          alt="Decorative Bubbles"
          width={400}
          height={300}
          className="opacity-80"
        />
      </div>
    </section>
  );
}

export default ProductBanner;
