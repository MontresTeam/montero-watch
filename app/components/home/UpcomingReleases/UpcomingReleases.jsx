"use client";

import React from "react";
import Image from "next/image";
import Link from 'next/link'
import { useTranslation } from "react-i18next";
import Bubles from "@/public/images/Home/bubles.png";
import Clock from "@/public/images/Home/clock.png";

const UpcomingReleases = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full py-12 md:py-24 overflow-hidden bg-gradient-to-br from-[#0e1320] via-[#12192a] to-[#0b0f1a]">

      {/* Bubble Background Image - Mobile adjusted */}
      <Image
        src={Bubles}
        alt="Bubbles"
        className="absolute max-w-[60px] md:max-w-[100px] left-3 md:left-3 top-0 opacity-40 pointer-events-none"
        priority
      />

      {/* Clock Image - Mobile hidden, tablet+ visible */}
      <div className="absolute -bottom-16 md:-bottom-24 left-0 opacity-70 hidden md:block">
        <Image src={Clock} alt="Clock" width={100} className="md:w-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">

        {/* LEFT CONTENT - Mobile centered */}
        <div className="relative z-10 px-4 md:pl-12 text-center md:text-left">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 font-cormorant">
            {t("alreadyReleased")}
          </h2>

          <p className="text-gray-400 max-w-md mx-auto md:mx-0 mb-6 md:mb-8 leading-relaxed font-body font-extralight text-sm md:text-base">
            {t("upcomingDesc")}
          </p>

          <Link href="/contact" className="inline-block">
            <button className="px-6 md:px-8 py-2.5 md:py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition text-sm md:text-base">
              {t("joinTheList")}
            </button>
          </Link>
        </div>

        {/* RIGHT CONTENT - Mobile centered */}
        <div className="relative flex flex-col items-center">

          {/* Static Time Boxes - Since already released */}
          <div className="flex gap-3 md:gap-4 w-full justify-center">
            <TimeBox value={0} label={t("hours")} />
            <TimeBox value={0} label={t("minutes")} />
            <TimeBox value={0} label={t("seconds")} />
          </div>

          <p className="mt-4 md:mt-6 text-sm text-center w-full text-gray-300 font-medium md:font-semibold">
            {t("alreadyReleased")}
          </p>
        </div>
      </div>
    </section>
  );
};

const TimeBox = ({ value, label }) => (
  <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white rounded-xl md:rounded-2xl flex flex-col items-center justify-center shadow-lg md:shadow-xl">
    <span className="text-xl md:text-2xl lg:text-3xl font-semibold text-black">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1">{label}</span>
  </div>
);

export default UpcomingReleases;