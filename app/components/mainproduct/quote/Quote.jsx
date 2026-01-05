"use client";

import React from "react";
import Image from "next/image";
import blueprint from "../../../../public/images/MainProducts/bluePrint.png";
import Link from "next/link";
import RevealSection from "../../animations/RevealSection";

export default function Quote() {
  return (
    <section className="w-full flex flex-col lg:flex-row relative">
      {/* LEFT — Image with Gradient Fade */}
      <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[531px]">
        <Image
          src={blueprint}
          alt="Blueprint"
          fill
          className="object-cover object-left"
        />
        {/* Gradient Overlay to fade into the right side color */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#7F7E62]" />
      </div>

      {/* RIGHT — Content */}
      <div className="w-full lg:w-1/2 bg-[#7F7E62] flex flex-col justify-center px-8 lg:px-20 py-16 lg:py-0">
        <div className="max-w-xl space-y-8">
          <RevealSection delay={0.1}>
            <h2
              className="font-cormorant font-light 
                   text-4xl md:text-5xl lg:text-6xl 
                   leading-[1.1] text-white"
            >
              A World Time Watch Inspired by Global Beaches
            </h2>
          </RevealSection>

          <RevealSection delay={0.3}>
            <p
              className="Mona Sans font-light 
                  text-xl md:text-2xl 
                  text-white/90 leading-relaxed"
            >
              Crafted for explorers, dreamers, and lovers of the world s most
              iconic beaches
            </p>
          </RevealSection>

          {/* BUTTON */}
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
                Comparison
              </button>
            </Link>
          </RevealSection>
        </div>
      </div>
    </section>
  );
}
