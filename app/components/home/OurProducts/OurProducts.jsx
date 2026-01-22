"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import WatchBlue from "@/public/images/Home/watch1.png";
import WatchGreen from "@/public/images/Home/watch2.png";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".product-item", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white flex flex-col justify-center py-16 md:py-24 px-4 sm:px-6 md:px-8"
    >
      {/* TITLE */}
      <div ref={titleRef} className="max-w-4xl mx-auto text-center mb-8 md:mb-0">
        <h1 className="font-cormorant font-normal text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[61px] leading-[120%] md:leading-[130%] tracking-tightest px-2">
          {t("chooseYourMontero")}
        </h1>

        <p
          className="
          mt-3 md:mt-3
          leading-[150%] md:leading-[160%]
          tracking-[0.015em]
          text-center
          max-w-3xl
          mx-auto
          font-body font-extralight
          text-sm sm:text-base md:text-[16px]
          px-4 sm:px-6 md:px-0
        "
        >
          {t("monteroEditionsText")}
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center mt-6 md:mt-8 mb-10 md:mb-0">
        <Link href="/product" className="block w-full sm:w-auto text-center">
          <button
            ref={ctaRef}
            className="bg-black text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3 rounded-full text-sm sm:text-base font-medium hover:opacity-80 transition w-full sm:w-auto"
          >
            {t("viewDetails")}
          </button>
        </Link>
      </div>

      {/* PRODUCT GRID */}
      <div ref={contentRef} className="max-w-7xl mx-auto w-full mt-10 md:mt-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-16">
          {/* LEFT PRODUCT */}
          <div className="product-item">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-8">
              {/* TEXT */}
              <div className="space-y-3 text-center md:text-left order-2 md:order-1 px-4 sm:px-6 md:px-0">
                <h3 className="text-xl sm:text-2xl md:text-2xl">{t("englishEdition")}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-[15px]">
                  {t("englishEditionDesc")}
                </p>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center md:justify-end order-1 md:order-2">
                <Image
                  src={WatchBlue}
                  alt="Blue Watch"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT PRODUCT */}
          <div className="product-item mt-8 md:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-8">
              {/* IMAGE */}
              <div className="flex justify-center md:justify-start order-1 md:order-1">
                <Image
                  src={WatchGreen}
                  alt="Green Watch"
                  className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] object-contain"
                  priority
                />
              </div>

              {/* TEXT */}
              <div className="space-y-3 order-2 md:order-2 text-center md:text-left px-4 sm:px-6 md:px-0">
                <h3 className="text-xl sm:text-2xl md:text-2xl">{t("arabicEdition")}</h3>
                <p className="text-gray-600 text-sm sm:text-base md:text-[15px]">
                  {t("arabicEditionDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;