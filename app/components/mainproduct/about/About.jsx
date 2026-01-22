"use client";

import ScrollReveal from "../../ScrollReveal/ScrollReveal";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 flex justify-center overflow-hidden">
      <div className="max-w-[1200px] text-center flex flex-col items-center gap-8">
        
        {/* Heading (NO animation) */}
        <h2 className="font-cormorant font-light text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-neutral-900">
          {t("monteroArabEditionTitle")}
        </h2>

        {/* Animated paragraph */}
        <p className="font-cormorant font-light text-[22px] md:text-[28px] lg:text-[32px] leading-[1.4] text-neutral-900 max-w-[1100px] antialiased">
          <ScrollReveal>
            {t("monteroAboutText")}
          </ScrollReveal>
        </p>
      </div>
    </section>
  );
}
