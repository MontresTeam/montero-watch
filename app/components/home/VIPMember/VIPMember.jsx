"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import VipImage from "@/public/images/Home/VipImage.png";

const VIPMember = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch  mx-auto  py-16"
    >
      {/* LEFT CONTENT */}
      <div className="bg-[#1A1E28] text-white p-12  pl-20 flex flex-col ">
        <div>
          <h2 className="text-3xl md:text-4xl font-cormorant mb-3">
            {t("joinVIPClub")}
          </h2>

          <p className="font-body font-extralight mb-6 max-w-lg">
            {t("vipClubDesc")}
          </p>

          {/* POINTS */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white" />
              <p>{t("voteOnEditions")}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white" />
              <p>{t("earlyAccess")}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white" />
              <p>{t("specialPricing")}</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white" />
              <p>{t("exclusiveUpdates")}</p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button className="border border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-blue-600 transition w-fit">
          {t("becomeVIPMember")}
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex max-h-[400px] items-center justify-center bg-gray-100">
        <Image
          src={VipImage}
          alt="VIP Member"
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default VIPMember;
