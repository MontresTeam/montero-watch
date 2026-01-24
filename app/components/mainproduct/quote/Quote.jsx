"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import blueprint from "../../../../public/images/MainProducts/bluePrint.png";
import Link from "next/link";
import RevealSection from "../../animations/RevealSection";

export default function Quote() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language?.startsWith("ar");

  return (
    <section className={`w-full flex flex-col ${isAr ? "lg:flex-row-reverse" : "lg:flex-row"} relative`}>
      {/* LEFT — Image with Gradient Fade */}
      <div className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] flex items-center overflow-hidden bg-[#EAEAEA]">
        <Image
          src={blueprint}
          alt="Blueprint"
          fill
          className={`
            object-contain 
             ${isAr ? "object-center lg:object-right" : "object-center lg:object-left"}
            px-4 lg:px-0
            scale-100 lg:scale-[1.2]
          `}
        />
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${isAr
              ? "lg:bg-gradient-to-l"
              : "lg:bg-gradient-to-r"
            } from-transparent via-transparent to-[#7F7E62]`}
        />
      </div>

      {/* RIGHT — Content */}
      <div className={`w-full lg:w-1/2 bg-[#7F7E62] flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-16 lg:py-0 ${isAr ? "text-right" : "text-left"}`}>
        <div className="max-w-xl space-y-6 sm:space-y-8 mx-auto lg:mx-0">
          <RevealSection delay={0.1}>
            <h2
              className="font-cormorant font-light 
             text-3xl sm:text-4xl lg:text-5xl 
             leading-[1.2] text-white"
            >
              {t("productHeroTitle")}
            </h2>
          </RevealSection>

          <RevealSection delay={0.3}>
            <p
              className="mona-sanas
             text-base sm:text-lg
             text-white/90 leading-relaxed font-light"
            >
              {t("productHeroSub")}
            </p>
          </RevealSection>

          <RevealSection delay={0.5}>
            <Link href="/product/comparison">
              <button
                className={`mt-4 sm:mt-6 inline-flex items-center justify-center
                         px-8 py-3
                         border border-white/70
                         text-white font-light
                         rounded-full
                         hover:bg-white hover:text-[#7F7E62]
                         transition-all duration-300 ${isAr ? "flex-row-reverse" : ""}`}
              >
                {t("comparison")}
              </button>
            </Link>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
