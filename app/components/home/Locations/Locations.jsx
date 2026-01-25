"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";

import HOmeTittle from "../../ui/HomeTitle/HOmeTittle";
import Image from "next/image";
import MapImage from "@/public/images/Home/map.png";

gsap.registerPlugin(ScrollTrigger);

const Locations = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef(null);

  // Get current language
  const currentLanguage = i18n.language || 'en';


  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top title animation
      gsap.from(".locations-title-top", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".locations-title-top",
          start: "top 85%",
          once: true,
        },
      });

      // Map image animation
      gsap.from(".locations-map", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".locations-map",
          start: "top 80%",
          once: true,
        },
      });

      // Bottom title animation
      gsap.from(".locations-title-bottom", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".locations-title-bottom",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Top Title */}
      <div className="locations-title-top">
        <HOmeTittle
          title={t("eightBeachesTitle")}
          description={t("eightBeachesDesc")}
        />
      </div>

      {/* Map Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        <Image
          src={MapImage}
          width={1200}
          height={800}
          alt={currentLanguage === 'ar' ? 'خريطة المواقع' : 'locations map'}
          className="locations-map mb-6 sm:mb-8 lg:mb-10 w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>

      {/* Bottom Title */}
      <div
        className="max-w-4xl mx-auto text-center space-y-5 px-4 mt-8"
      >
        <p className="text-lg text-gray-600 font-body font-extralight">
          {t("beachesWorldMap")}
        </p>
      </div>
    </div>
  );
};

export default Locations;
