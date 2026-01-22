"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FaqAndSubscribe() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: t("faqQuestion1"),
      answer: t("faqAnswer1"),
    },
    {
      question: t("faqQuestion2"),
      answer: t("faqAnswer2"),
    },
    {
      question: t("faqQuestion3"),
      answer: t("faqAnswer3"),
    },
    {
      question: t("faqQuestion4"),
      answer: t("faqAnswer4"),
    },
  ];

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
            <h2 className="text-4xl mb-6 font-cormorant font-bold">
              {t("frequentlyAskedQuestion")}
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md">
              {t("eightBeachesDesc")}
            </p>

            <p className="text-gray-600 leading-relaxed max-w-md mt-4">
              {t("eightBeachesDesc")}
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
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
            <h2 className="font-cormorant text-4xl mb-4">
              {t("subscribeForExclusive")}
            </h2>

            <p className="text-gray-600 max-w-md">
              {t("subscribeMailingList")}
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center bg-gray-200 px-4 py-3 w-full">
              <Mail className="mr-4" />
              <input
                type="email"
                placeholder={t("enterEmail")}
                className="bg-transparent outline-none w-full text-sm"
              />
            </div>

            <button className="bg-black text-white px-8 py-3 whitespace-nowrap hover:opacity-90 transition">
              {t("subscribeBtn")}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
