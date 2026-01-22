"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import blueprint from "../../../../public/images/MainProducts/bluePrint.png";
import Link from "next/link";
import RevealSection from "../../animations/RevealSection";

export default function Quote() {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col lg:flex-row relative">
      {/* LEFT — Image with Gradient Fade */}
      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[435px] flex items-center overflow-hidden">
        <Image
          src={blueprint}
          alt="Blueprint"
          fill
          className="
            object-contain object-left
            px-1 lg:px-2
            scale-[1.2]
          "
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#7F7E62]" />
      </div>

      {/* RIGHT — Content */}
      <div className="w-full lg:w-1/2 bg-[#7F7E62] flex flex-col justify-center px-8 lg:px-20 py-16 lg:py-0">
        <div className="max-w-xl space-y-8">
          <RevealSection delay={0.1}>
            <h2
              className="font-cormorant font-light 
             text-3xl md:text-4xl lg:text-5xl 
             leading-[1.1] text-white"
            >
              {t("productHeroTitle")}
            </h2>
          </RevealSection>

          <RevealSection delay={0.3}>
            <p
              className="mona-sanas
             text-base md:text-lg
             text-white/90 leading-relaxed"
            >
              {t("productHeroSub")}
            </p>
          </RevealSection>

          <RevealSection delay={0.5}>
            <Link href="/product/comparison">
              <button
                className="mt-6 inline-flex items-center justify-center
                         px-8 py-3
                         border border-white/70
                         text-white font-light
                         rounded-full
                         hover:bg-white hover:text-[#7F7E62]
                         transition-all duration-300"
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
