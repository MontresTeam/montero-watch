"use client";

import ScrollReveal from "../../ScrollReveal/ScrollReveal";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 flex justify-center overflow-hidden">
      <div className="max-w-[1200px] w-full text-center flex flex-col items-center gap-5 sm:gap-6 md:gap-7 lg:gap-8">

        {/* Heading (NO animation) */}
        <h2 className="font-cormorant font-light text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] xl:text-[64px] leading-[1.15] sm:leading-[1.1] text-neutral-900 px-2">
          {t("monteroArabEditionTitle")}
        </h2>

        {/* Animated paragraph */}
        <p className="font-cormorant font-light text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[1.5] sm:leading-[1.45] md:leading-[1.4] text-neutral-900 max-w-[1100px] antialiased px-2">
          <ScrollReveal>
            {t("monteroAboutText")}
          </ScrollReveal>
        </p>
      </div>
    </section>
  );
}
