"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Watch images
import bluewatchFront from "../../../../public/images/MainProducts/blueWatch/DSC08237-3-Photoroom.png";
import bluewatchBack from "../../../../public/images/MainProducts/blueWatch/DSC08241-3 (1).png";

import greenwatchFront from "../../../../public/images/MainProducts/greenWatch/gw1.png";
import greenwatchBack from "../../../../public/images/MainProducts/greenWatch/gw2.png";

import { useRouter } from "next/navigation";

function SecondQuote() {
  const { t } = useTranslation();
  const router = useRouter();

  const watches = [
    { front: greenwatchFront, back: greenwatchBack, color: "#297D61" }, // GREEN
    { front: bluewatchFront, back: bluewatchBack, color: "#004770" },   // BLUE
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreOrder = () => {
    if (currentIndex === 1) {
      router.push("/product/english");
    } else {
      router.push("/product/arabic");
    }
  };

  // Auto switch
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % watches.length);
    }, 5000); // Slower interval for better UX
    return () => clearInterval(interval);
  }, []);

  const currentWatch = watches[currentIndex];

  return (
    <section className="bg-white px-4 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* LEFT */}
        <div className="flex-1 w-full relative flex flex-col items-center">

          {/* WATCHES - SMOOTH TRANSITION */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-12 relative z-10 w-full max-w-[600px] h-[300px] sm:h-[400px] md:h-[500px]">
            {/* Front Image Container */}
            <div className="relative w-[45%] h-full">
              {watches.map((watch, idx) => (
                <div
                  key={`front-${idx}`}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <Image
                    src={watch.front}
                    alt="Watch Front"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>

            {/* Back Image Container */}
            <div className="relative w-[45%] h-full">
              {watches.map((watch, idx) => (
                <div
                  key={`back-${idx}`}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                    }`}
                >
                  <Image
                    src={watch.back}
                    alt="Watch Back"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ✅ FIXED COLOR DOTS */}
          <div className="flex items-center gap-4 mt-8 md:mt-12 z-20">
            {watches.map((watch, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Select ${idx === 0 ? "Green" : "Blue"} Watch`}
                className={`w-6 h-6 rounded-full border transition-all duration-300 focus:outline-none ${idx === currentIndex
                    ? "scale-110 ring-2 ring-offset-2 ring-gray-300"
                    : "bg-white border-gray-400 hover:border-gray-900 scale-100"
                  }`}
                style={{
                  backgroundColor: watch.color,
                  borderColor: watch.color,
                }}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 w-full max-w-xl text-center lg:text-left mt-8 lg:mt-0 px-4">
          <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6 transition-all duration-500">
            {t("productHeroTitle")}
          </h2>

          <p className="monospace text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0 transition-all duration-500">
            {t("productHeroSub")}
          </p>

          <button
            onClick={handlePreOrder}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium tracking-wide text-[#1A1A1A] border border-[#1A1A1A] rounded-full overflow-hidden transition-all duration-300 hover:text-white"
          >
            <span className="absolute inset-0 bg-[#1A1A1A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
            <span className="relative z-10">{t("preOrderNow")}</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SecondQuote;
