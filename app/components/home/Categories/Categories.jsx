"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ArabicImg from "@/public/images/Home/leftitemarabic.png";
import EnglishImg from "@/public/images/Home/englishedition.png";

gsap.registerPlugin(ScrollTrigger);

const Categories = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftCardRef.current, {
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftCardRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(rightCardRef.current, {
        x: 120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightCardRef.current,
          start: "top 80%",
          once: true,
        },
      });

      gsap.from(".center-content", {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(".bottom-text", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.2,
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
    <section ref={sectionRef} className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row gap-8">

        {/* ===== LEFT CARD ===== */}
        <div
          ref={leftCardRef}
          className="group relative flex-1 h-[320px] overflow-hidden"
        >
          <Image
            src={ArabicImg}
            alt="Arabic Edition"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="center-content absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-4">
            <Link href="/product/arabic">
              <button
                className="
                  border border-white text-white
                  px-6 py-2 rounded-full text-sm font-medium
                  opacity-0 translate-y-3
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out
                "
              >
                {t("preOrderNow")}
              </button>
            </Link>

            <h3 className="text-white text-2xl ">
              {t("exploreArabicEdition")}
            </h3>
            <p className="text-gray-200 font-body font-extralight">
              {t("exploreArabicDesc")}
            </p>
          </div>

          <div className="absolute bottom-2 right-4">
            <span className="bottom-text text-white text-sm font-medium">
              {t("only150Pieces")}
            </span>
          </div>
        </div>

        {/* ===== RIGHT CARD ===== */}
        <div
          ref={rightCardRef}
          className="group relative flex-1 h-[320px] overflow-hidden"
        >
          <Image
            src={EnglishImg}
            alt="English Edition"
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

          <div className="center-content absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-4">
            <Link href="/product/english">
              <button
                className="
                  border border-white text-white
                  px-6 py-2 rounded-full text-sm font-medium
                  opacity-0 translate-y-3
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-300 ease-out
                "
              >
                {t("preOrderNow")}
              </button>
            </Link>

            <h3 className="text-white text-2xl">
              {t("exploreEnglishEdition")}
            </h3>

            <p className="text-gray-200 max-w-md font-body font-extralight">
              {t("exploreEnglishDesc")}
            </p>
          </div>

          <div className="absolute bottom-2 right-4">
            <span className="bottom-text text-white text-sm font-medium">
              {t("only150Pieces")}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Categories;
