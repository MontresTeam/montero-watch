"use client";

import React from "react";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className={`bg-white text-[#1a1a1a] min-h-screen flex flex-col ${isAr ? "font-arabic" : "font-mona"}`} dir={isAr ? "rtl" : "ltr"}>
      <Navbar />

      <main className="flex-grow pt-32 pb-24 px-5 sm:px-8 md:px-12 lg:px-16 w-full max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-14 md:mb-20 text-center md:text-start border-b border-gray-100 pb-8 md:pb-12">
          <h1 className={`text-4xl sm:text-5xl md:text-6xl font-medium mb-4 tracking-tight leading-tight ${isAr ? '' : 'font-cormorant'}`}>
            {t("privacyPolicyTitle")}
          </h1>
          <p className="text-sm text-gray-400 uppercase tracking-widest font-medium">
            {t("lastUpdated")}
          </p>
        </header>

        {/* Intro */}
        <section className="mb-16 max-w-3xl">
          <div className={`text-lg md:text-xl leading-relaxed text-gray-600 space-y-6 ${isAr ? 'text-right' : 'text-left'}`}>
            <p>{t("ppIntro1")}</p>
            <p>{t("ppIntro2")}</p>
          </div>
        </section>

        {/* Sections Container */}
        <div className={`space-y-16 ${isAr ? 'text-right' : 'text-left'}`}>

          {/* 1 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>01</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection1Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-5 text-gray-600 leading-relaxed text-base md:text-lg`}>
              <div className="bg-[#f9f9f9] p-6 rounded-lg text-sm md:text-base border border-gray-100 space-y-2">
                <p>
                  <strong className="font-semibold text-black">{t("ppSection1Label1")}:</strong> {t("ppSection1Value1")}
                </p>
                <p>
                  <strong className="font-semibold text-black">{t("ppSection1Label2")}:</strong> {t("ppSection1Value2")}
                </p>
                <p>
                  <strong className="font-semibold text-black">{t("ppSection1Label3")}:</strong> {t("ppSection1Value3")}
                </p>
              </div>
              <p>{t("ppSection1Content4")}</p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>02</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection2Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-3 marker:text-gray-300 custom-bullets`}>
                <li>{t("ppSec2Item1")}</li>
                <li>{t("ppSec2Item2")}</li>
                <li>{t("ppSec2Item3")}</li>
                <li>{t("ppSec2Item4")}</li>
                <li>{t("ppSec2Item5")}</li>
                <li>{t("ppSec2Item6")}</li>
                <li>{t("ppSec2Item7")}</li>
                <li>{t("ppSec2Item8")}</li>
              </ul>
            </div>
          </section>

          {/* 3 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>03</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection3Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-3 marker:text-gray-300`}>
                <li>{t("ppSec3Item1")}</li>
                <li>{t("ppSec3Item2")}</li>
                <li>{t("ppSec3Item3")}</li>
              </ul>
            </div>
          </section>

          {/* 4 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>04</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection4Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-3 marker:text-gray-300`}>
                <li>{t("ppSec4Item1")}</li>
                <li>{t("ppSec4Item2")}</li>
                <li>{t("ppSec4Item3")}</li>
                <li>{t("ppSec4Item4")}</li>
              </ul>
            </div>
          </section>

          {/* 5 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>05</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection5Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-5 text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection5Intro")}</p>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-3 marker:text-gray-300`}>
                <li>{t("ppSec5Item1")}</li>
                <li>{t("ppSec5Item2")}</li>
                <li>{t("ppSec5Item3")}</li>
                <li>{t("ppSec5Item4")}</li>
                <li>{t("ppSec5Item5")}</li>
                <li>{t("ppSec5Item6")}</li>
              </ul>
              <p>{t("ppSection5Outro")}</p>
            </div>
          </section>

          {/* 6 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>06</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection6Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection6Content")}</p>
            </div>
          </section>

          {/* 7 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>07</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection7Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-5 text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection7Intro")}</p>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-3 marker:text-gray-300`}>
                <li>{t("ppSec7Item1")}</li>
                <li>{t("ppSec7Item2")}</li>
                <li>{t("ppSec7Item3")}</li>
                <li>{t("ppSec7Item4")}</li>
              </ul>
            </div>
          </section>

          {/* 8 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>08</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection8Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-5 text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection8Intro")}</p>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-3 marker:text-gray-300`}>
                <li>{t("ppSec8Item1")}</li>
                <li>{t("ppSec8Item2")}</li>
                <li>{t("ppSec8Item3")}</li>
              </ul>
              <p>{t("ppSection8Outro")}</p>
            </div>
          </section>

          {/* 9 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>09</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection9Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection9Content")}</p>
            </div>
          </section>

          {/* 10 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>10</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection10Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-5 text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection10Intro")}</p>
              <ul className={`list-disc ${isAr ? "pr-5" : "pl-5"} space-y-3 marker:text-gray-300`}>
                <li>{t("ppSec10Item1")}</li>
                <li>{t("ppSec10Item2")}</li>
                <li>{t("ppSec10Item3")}</li>
                <li>{t("ppSec10Item4")}</li>
              </ul>
              <p>
                {t("ppSection10Prefix")} <a href="mailto:support@monterowatch.com" className="text-black underline decoration-gray-300 hover:decoration-black transition-all">support@monterowatch.com</a>{t("ppSection10Suffix")}
              </p>
              <p className="text-sm text-gray-400">
                {t("ppSection10Outro2")}
              </p>
            </div>
          </section>

          {/* 11 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>11</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection11Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection11Content")}</p>
            </div>
          </section>

          {/* 12 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>12</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection12Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection12Content")}</p>
            </div>
          </section>

          {/* 13 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>13</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection13Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection13Content")}</p>
            </div>
          </section>

          {/* 14 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>14</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection14Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection14Content")}</p>
            </div>
          </section>

          {/* 15 */}
          <section>
            <div className="flex items-baseline mb-4 md:mb-5">
              <span className={`text-sm font-bold text-gray-300 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>15</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-black ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection15Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} text-gray-600 leading-relaxed text-base md:text-lg`}>
              <p>{t("ppSection15Content")}</p>
            </div>
          </section>

          {/* 16 */}
          <section className="bg-[#1a1a1a] text-white p-8 md:p-12 rounded-xl mt-20">
            <div className="flex items-baseline mb-6">
              <span className={`text-sm font-bold text-gray-500 select-none ${isAr ? 'ml-4' : 'mr-4 font-mona'}`}>16</span>
              <h2 className={`text-2xl md:text-3xl font-medium text-white ${isAr ? '' : 'font-cormorant'}`}>
                {t("ppSection16Title")}
              </h2>
            </div>
            <div className={`${isAr ? 'md:pr-10' : 'md:pl-10'} space-y-3 text-sm md:text-base leading-relaxed`}>
              <p>
                <strong className="font-semibold text-white">{t("ppSection16Label1")}:</strong> <a href="mailto:sales@monterowatch.com" className="text-white underline decoration-gray-500 hover:decoration-white transition-all">sales@monterowatch.com</a>
              </p>
              <p>
                <strong className="font-semibold text-white">{t("ppSection16Label2")}:</strong> {t("ppSection16Value2")}
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
