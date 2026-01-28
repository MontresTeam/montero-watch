import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Right() {
  const { t } = useTranslation();
  return (
    <div
      className="
        w-full h-full
        flex flex-col justify-center
        items-center lg:items-start
        text-center lg:text-left
        px-6 sm:px-8 lg:px-12
        space-y-6 sm:space-y-7
        bg-white
      "
    >
      {/* HEADING */}
      <h2
        className="
          font-cormorant
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          text-neutral-900
          leading-[1.15]
          tracking-tight
          max-w-lg
        "
      >
        {t("timeVehicle")}
      </h2>

      {/* DESCRIPTION */}
      <p
        className="
          font-body
          font-extralight
          text-neutral-600
          text-sm sm:text-base
          leading-[1.6]
          max-w-md
        "
      >
        {t("monteroEditionsText")}
      </p>

      {/* CTA */}
      <div className="pt-2">
        <Link href="/product/english">
          <button
            className="
              rounded-full
              border border-neutral-900
              px-8 py-3
              text-[11px] sm:text-xs
              font-medium
              uppercase
              tracking-widest
              transition-all duration-300
              hover:bg-neutral-900 hover:text-white
            "
          >
            {t("preOrderNow")}
          </button>
        </Link>
      </div>
    </div>
  );
}
