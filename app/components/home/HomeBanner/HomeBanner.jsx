"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useTranslation } from "react-i18next";

// Images
import WatchImage from "@/public/images/Home/bannerWatch.png";
import LeftArrow from "@/public/images/Home/bannerleft.png";
import RightArrow from "@/public/images/Home/bannerrigth.png";

gsap.registerPlugin(ScrollTrigger);

export default function HomeBanner() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const rightTextRef = useRef(null);
  const leftFeatureRef = useRef(null);
  const watchRef = useRef(null);
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(watchRef.current, {
        x: 120,
        opacity: 0,
        duration: 1.3,
      })
        .from(
          leftArrowRef.current,
          {
            x: 40,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.6"
        )
        .from(
          rightArrowRef.current,
          {
            x: -40,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.6"
        )
        .from(
          leftFeatureRef.current,
          {
            x: -40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          rightTextRef.current,
          {
            x: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.6"
        )
        .from(
          titleRef.current,
          {
            x: -60,
            opacity: 0,
            duration: 0.9,
          },
          "-=0.3"
        )
        .from(
          descRef.current,
          {
            x: -40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.6"
        )
        .from(
          buttonRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.5"
        );

      gsap.to(watchRef.current, {
        y: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      dir="ltr"
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* BACKGROUND */}
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#004770] via-[#0C2636] to-[#000106]" />

      {/* Reduced bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />


      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-24 lg:pt-32 flex flex-col lg:flex-row">
        {/* LEFT TEXT */}
        <div className="space-y-6 w-full lg:w-[55%] mt-10">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl font-cormorant leading-tight"
          >
            {t("homeBannerTitle")}
          </h1>

          <p
            ref={descRef}
            className="max-w-md font-Monasans font-light text-[24px] text-gray-300"
          >
            {t("homeBannerDesc")}
          </p>

          <Link href="/product">
            <button
              ref={buttonRef}
              className="px-6 py-3 rounded-full text-black bg-white border border-white font-medium hover:scale-105 transition"
            >
              {t("preOrderNow")}
            </button>
          </Link>
        </div>

        {/* RIGHT TEXT - Top Feature */}
        <div className="relative w-full lg:w-[45%] pointer-events-none lg:pointer-events-auto">
          <div ref={rightTextRef} className="absolute top-[44%] right-[5%] lg:top-24 lg:right-0 max-w-[150px] lg:max-w-xs text-right lg:text-left z-20">
            <h4 className="font-semibold text-sm lg:text-base">{t("elegantTimekeeping")}</h4>
            <p className="text-xs lg:text-sm text-gray-300">
              {t("precisionInspired")}
            </p>
          </div>
        </div>
      </div>

      {/* LEFT ARROW (Top Arrow on Mobile) */}
      <div
        ref={leftArrowRef}
        className="absolute top-[54%] right-[5%] lg:top-[32%] lg:right-[25%] block z-10 w-24 h-24 lg:w-36 lg:h-36"
      >
        <Image
          src={LeftArrow}
          alt="Left Arrow"
          fill
          className="object-contain scale-125 lg:scale-150 -rotate-15 lg:rotate-0"
        />
      </div>

      {/* RIGHT ARROW (Bottom Arrow on Mobile) */}
      <div
        ref={rightArrowRef}
        className="absolute bottom-[15%] left-[8%] lg:bottom-[24%] lg:left-[50%] block z-10 w-16 h-16 lg:w-24 lg:h-24 overflow-visible"
      >
        <Image
          src={RightArrow}
          alt="Right Arrow"
          fill
          className="object-contain scale-150 lg:scale-[2.8] rotate-12 lg:rotate-0"
        />
      </div>

      {/* WATCH */}
      <div
        ref={watchRef}
        className="absolute bottom-0 right-0 w-[100%] sm:w-[85%] lg:w-[55%] z-10"
      >
        <Image
          src={WatchImage}
          alt="World Time Watch"
          priority
          className="object-contain"
        />
      </div>

      {/* LEFT FEATURE (Bottom Feature) */}
      <div
        ref={leftFeatureRef}
        className="absolute bottom-[25%] left-[5%] lg:bottom-[20%] lg:left-[38%] block z-20 max-w-[150px] lg:max-w-xs"
      >
        <h4 className="font-semibold text-sm lg:text-base">{t("elegantTimekeeping")}</h4>
        <p className="text-xs lg:text-sm text-gray-300">
          {t("designedForPrecision")}
        </p>
      </div>
    </section>
  );
}
