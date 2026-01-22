"use client"
import React from 'react'
import ImgContainer from './ImgContainer'
import Form from './Form'
import { useTranslation } from 'react-i18next'
import "@/lib/i18n";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language?.toLowerCase() === 'ar';

  return (
    <section className={`w-full bg-white py-6 sm:py-8 md:py-12 overflow-hidden ${isAr ? 'lang-ar' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile heading */}
        <div className="lg:hidden mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-light text-gray-900 font-cormorant tracking-tight mb-2">
            {t("getInTouch")}
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            {t("reachOut")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* LEFT COLUMN - Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden">
              <ImgContainer />
              {/* Gradient overlay for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:from-black/10"></div>

              {/* Text overlay for mobile */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white font-cormorant mb-1 sm:mb-2">
                  {t("timeConversation")}
                </h2>
                <p className="text-white/90 text-xs sm:text-sm md:text-base">
                  {t("alignConstellations")}
                </p>
              </div>
            </div>

            {/* Additional info for mobile */}
            <div className="lg:hidden mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-2 h-2 bg-black rounded-full mt-1.5"></div>
                <p className="text-xs sm:text-sm text-gray-600">{t("quickResponse")}</p>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-1.5"></div>
                <p className="text-xs sm:text-sm text-gray-600">{t("personalizedConsultation")}</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Form Section */}
          <div className="order-1 lg:order-2">
            {/* Desktop form */}
            <div className="hidden lg:block">
              <Form />
            </div>

            {/* Mobile form */}
            <div className="lg:hidden">
              <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-1 sm:mb-2">
                    {t("sendMessage")}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    {t("fillForm")}
                  </p>
                </div>
                <Form />
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 sm:mt-10 lg:mt-16 pt-6 border-t border-gray-100">
          <p className="text-center text-xs sm:text-sm text-gray-400 px-4">
            {t("privacyNote")}
          </p>
        </div>
      </div>
    </section>
  )
}