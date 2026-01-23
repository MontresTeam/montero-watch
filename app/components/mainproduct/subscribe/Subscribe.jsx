"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import api from "@/lib/api";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export default function Subscribe() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language?.startsWith("ar");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error(t("fillRequired"));
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/user/subscribe", { email });
      toast.success(response.data.message || t("successMessage"));
      setEmail("");
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.response?.data?.message || t("errorMessage");
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10" dir={isAr ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-7xl">
        {/* SUBSCRIBE ROW */}
        <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
          {/* LEFT TEXT */}
          <div className={isAr ? "text-right" : "text-left"}>
            <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
              {t("subscribeHeading")}
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
              {t("subscribeDesc")}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
            <div className={`flex items-center bg-gray-100 border border-gray-200 focus-within:border-black focus-within:ring-1 focus-within:ring-black/5 px-4 py-3.5 w-full transition-all group`}>
              <Mail className={`${isAr ? 'ml-3' : 'mr-3'} text-gray-400 group-focus-within:text-black transition-colors`} size={18} />
              <input
                type="email"
                required
                placeholder={t("emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`bg-transparent outline-none w-full text-sm placeholder:text-gray-400 ${isAr ? 'text-right' : 'text-left'}`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-10 py-3.5 text-sm font-medium whitespace-nowrap hover:bg-gray-900 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            >
              {loading ? t("sending") : t("subscribeBtn")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ScrollAnimation({ children, animationClass, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-opacity ${isVisible ? animationClass : "opacity-0"
        }`}
    >
      {children}
    </div>
  );
}
