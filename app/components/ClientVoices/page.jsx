"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const videos = [
  "https://www.youtube.com/embed/RvFvfoztjNo",
  "https://www.youtube.com/embed/RaDTuqW6kkA",
  "https://www.youtube.com/embed/CZwg2KEwBCQ",
];

const ClientVoices = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* CENTERED REVIEW BUTTON */}
        <div className="flex justify-center -mt-6 mb-4">
          <button className="bg-gray-200 px-4 py-1 text-xs sm:text-sm text-gray-700">
            {t("review")}
          </button>
        </div>

        {/* Header */}
        <div className="text-center mb-14">
          <h2
            style={{ fontWeight: 500 }}
            className="font-cormorant text-4xl lg:text-5xl text-gray-900 mb-4"
          >
            {t("voicesOurClients")}
          </h2>

          <p className="text-sm text-gray-500 max-w-md mx-auto">
            {t("clientsExperienceText")}
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((src, index) => (
            <div key={index} className="relative h-[520px] overflow-hidden">
              <iframe
                src={src}
                title={`Client review ${index + 1}`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientVoices;
