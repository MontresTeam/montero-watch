"use client";

import React from "react";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className={`bg-white text-black min-h-screen flex flex-col ${isAr ? "font-sans" : "font-sans"}`}>
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center md:text-start">
            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              {t("privacyPolicyTitle")}
            </h1>
            <p className="font-mona text-sm md:text-base text-gray-500">
              {t("lastUpdated")}
            </p>
          </div>

          {/* Intro */}
          <section className="mb-10 font-mona text-base md:text-lg text-gray-700 leading-relaxed space-y-4 text-start">
            <p>{t("ppIntro1")}</p>
            <p>{t("ppIntro2")}</p>
          </section>

          {/* Sections */}
          <div className="space-y-10 font-mona text-base md:text-lg text-gray-800 leading-relaxed text-start">

            {/* 1 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection1Title")}
              </h2>
              <p>
                <strong className="font-medium text-black">{t("ppSection1Label1")}:</strong> {t("ppSection1Value1")}<br />
                <strong className="font-medium text-black">{t("ppSection1Label2")}:</strong> {t("ppSection1Value2")}<br />
                <strong className="font-medium text-black">{t("ppSection1Label3")}:</strong> {t("ppSection1Value3")}
              </p>
              <p className="mt-2">
                {t("ppSection1Content4")}
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection2Title")}
              </h2>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-2 marker:text-gray-400`}>
                <li>{t("ppSec2Item1")}</li>
                <li>{t("ppSec2Item2")}</li>
                <li>{t("ppSec2Item3")}</li>
                <li>{t("ppSec2Item4")}</li>
                <li>{t("ppSec2Item5")}</li>
                <li>{t("ppSec2Item6")}</li>
                <li>{t("ppSec2Item7")}</li>
                <li>{t("ppSec2Item8")}</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection3Title")}
              </h2>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-2 marker:text-gray-400`}>
                <li>{t("ppSec3Item1")}</li>
                <li>{t("ppSec3Item2")}</li>
                <li>{t("ppSec3Item3")}</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection4Title")}
              </h2>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-2 marker:text-gray-400`}>
                <li>{t("ppSec4Item1")}</li>
                <li>{t("ppSec4Item2")}</li>
                <li>{t("ppSec4Item3")}</li>
                <li>{t("ppSec4Item4")}</li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection5Title")}
              </h2>
              <p className="mb-3">{t("ppSection5Intro")}</p>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-2 marker:text-gray-400`}>
                <li>{t("ppSec5Item1")}</li>
                <li>{t("ppSec5Item2")}</li>
                <li>{t("ppSec5Item3")}</li>
                <li>{t("ppSec5Item4")}</li>
                <li>{t("ppSec5Item5")}</li>
                <li>{t("ppSec5Item6")}</li>
              </ul>
              <p className="mt-3">
                {t("ppSection5Outro")}
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection6Title")}
              </h2>
              <p>
                {t("ppSection6Content")}
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection7Title")}
              </h2>
              <p className="mb-3">{t("ppSection7Intro")}</p>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-2 marker:text-gray-400`}>
                <li>{t("ppSec7Item1")}</li>
                <li>{t("ppSec7Item2")}</li>
                <li>{t("ppSec7Item3")}</li>
                <li>{t("ppSec7Item4")}</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection8Title")}
              </h2>
              <p className="mb-3">{t("ppSection8Intro")}</p>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-2 marker:text-gray-400`}>
                <li>{t("ppSec8Item1")}</li>
                <li>{t("ppSec8Item2")}</li>
                <li>{t("ppSec8Item3")}</li>
              </ul>
              <p className="mt-3">
                {t("ppSection8Outro")}
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection9Title")}
              </h2>
              <p>
                {t("ppSection9Content")}
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection10Title")}
              </h2>
              <p className="mb-3">{t("ppSection10Intro")}</p>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-2 marker:text-gray-400`}>
                <li>{t("ppSec10Item1")}</li>
                <li>{t("ppSec10Item2")}</li>
                <li>{t("ppSec10Item3")}</li>
                <li>{t("ppSec10Item4")}</li>
              </ul>
              <p className="mt-3">
                {t("ppSection10Prefix")} <a href="mailto:support@monterowatch.com" className="underline hover:text-black">support@monterowatch.com</a>{t("ppSection10Suffix")}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {t("ppSection10Outro2")}
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection11Title")}
              </h2>
              <p>
                {t("ppSection11Content")}
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection12Title")}
              </h2>
              <p>
                {t("ppSection12Content")}
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection13Title")}
              </h2>
              <p>
                {t("ppSection13Content")}
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection14Title")}
              </h2>
              <p>
                {t("ppSection14Content")}
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection15Title")}
              </h2>
              <p>
                {t("ppSection15Content")}
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="font-cormorant text-2xl md:text-3xl font-medium mb-4 text-black text-start">
                {t("ppSection16Title")}
              </h2>
              <p>
                <strong className="font-medium text-black">{t("ppSection16Label1")}:</strong> <a href="mailto:sales@monterowatch.com" className="underline hover:text-black">sales@monterowatch.com</a>
              </p>
              <p className="mt-2">
                <strong className="font-medium text-black">{t("ppSection16Label2")}:</strong> {t("ppSection16Value2")}
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
