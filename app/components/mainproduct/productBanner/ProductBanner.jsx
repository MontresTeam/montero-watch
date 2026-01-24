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
    <section className="relative min-h-screen py-2 sm:py-4 overflow-hidden text-white bg-black flex items-center">
      {/* BASE BLACK BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      {/* BACKGROUND IMAGE - Blue */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isSwapped ? "opacity-0" : "opacity-100"
          }`}
        style={{ backgroundImage: "url('/images/Home/Bg2.png')" }}
      />

      {/* BACKGROUND IMAGE - Green */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isSwapped ? "opacity-100" : "opacity-0"
          }`}
        style={{ backgroundImage: "url('/images/Home/bg1.png')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0 mt-8 sm:mt-0">

        {/* LEFT TEXT SECTION */}
        <div
          ref={textRef}
          className="order-2 lg:order-1 w-full lg:w-[45%] text-center lg:text-left flex flex-col items-center lg:items-start space-y-6 lg:space-y-8"
        >
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-cormorant leading-tight">
            {t("productHeroTitle")}
          </h1>

          <p className="max-w-md font-Monasans font-light text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed">
            {t("productHeroSub")}
          </p>

          <button
            onClick={handlePreOrder}
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-black bg-white border border-white font-medium text-sm sm:text-base hover:scale-105 transition shadow-lg hover:shadow-xl"
          >
            {t("preOrderNow")}
          </button>
        </div>

        {/* RIGHT SECTION - WATCH */}
        <div className="order-1 lg:order-2 w-full lg:w-[55%] flex justify-center lg:justify-end">
          <WatchDisplay isSwapped={isSwapped} setIsSwapped={setIsSwapped} />
        </div>
      </div>

      {/* DECORATIVE BUBBLES */}
      <div className="absolute bottom-6 left-6 hidden md:block z-20">
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
