"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function FaqAndSubscribe() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = t("home.faq.list", { returnObjects: true });

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* FAQ SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28">

          {/* LEFT */}
          <div>
            <h2 className="font-serif text-4xl mb-6">
              {t("home.faq.title")}
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md">
              {t("home.faq.desc")}
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-6">
            {Array.isArray(faqs) && faqs.map((faq, index) => (
              <div
                key={index}
                className=" text-black pb-4"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[#1B263B] font-medium">
                    {faq.question}
                  </span>

                  <span
                    className={`text-xl transition-transform ${openIndex === index ? "rotate-45" : ""
                      }`}
                  >
                    +
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SUBSCRIBE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h2 className="font-serif text-4xl mb-4">
              {t("home.subscribe2.title")}
            </h2>

            <p className="text-gray-600 max-w-md">
              {t("home.subscribe2.desc")}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center bg-gray-200 px-4 py-3 w-full">
              <span className="mr-3 text-gray-500">✉</span>
              <input
                type="email"
                placeholder={t("home.subscribe2.placeholder")}
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            <button className="bg-black text-white px-8 py-3 whitespace-nowrap hover:opacity-90 transition">
              {t("home.subscribe2.button")}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
