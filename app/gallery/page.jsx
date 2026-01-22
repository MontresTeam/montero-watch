"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import api from "@/lib/api";

import Gallery1 from "@/public/images/Gallery/gallary1.jpg";
import Gallery2 from "@/public/images/Gallery/gallary2.png";
import Gallery3 from "@/public/images/Gallery/gallary3.png";
import Gallery4 from "@/public/images/Gallery/gallary4.jpg";
import Gallery5 from "@/public/images/Gallery/gallary5.jpg";
import Gallery6 from "@/public/images/Gallery/gallary6.jpg";
import Gallery7 from "@/public/images/Gallery/gallary7.jpg";
import Gallery8 from "@/public/images/Gallery/gallary8.jpg";

/* ---------------- Scroll Animation ---------------- */
function ScrollAnimation({ children, animationClass, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? animationClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ---------------- Page ---------------- */
export default function Page() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return toast.error(t("emailRequired"));

    setLoading(true);
    try {
      const res = await api.post("/user/subscribe", { email });
      toast.success(res.data?.message || t("subscribeSuccess"));
      setEmail("");
    } catch (err) {
      toast.error(
        err.response?.data?.message || t("subscribeFailed")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-28 pb-8">
          <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animationClass="animate-slide-in-left">
              <div>
                <h1 className="font-cormorant text-4xl lg:text-6xl">
                  {t("galleryHeroTitle")}
                </h1>
                <p className="mt-6 max-w-md text-gray-600">
                  {t("galleryHeroSub")}
                </p>
                <Link href="/product">
                  <button className="mt-8 rounded-full bg-gray-200 px-8 py-3 hover:bg-gray-300">
                    {t("subscribeBtn")}
                  </button>
                </Link>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-right">
              <div className="relative h-[420px] w-full">
                <Image src={Gallery1} alt="Hero" fill className="object-cover" />
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= PRODUCT EDITIONS ================= */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12">
          {[{
            img: Gallery2,
            title: "monteroEnglishEdition",
            link: "/product/english"
          },{
            img: Gallery3,
            title: "monteroArabEdition",
            link: "/product/arabic"
          }].map((item, i) => (
            <ScrollAnimation key={i} animationClass="animate-fade-in-up" delay={i * 150}>
              <div className="bg-[#f5f5f3] p-10 text-center rounded-lg hover:scale-105 transition">
                <div className="relative h-[300px] mx-auto">
                  <Image src={item.img} alt="" fill className="object-contain" />
                </div>
                <h3 className="font-cormorant mt-8 text-3xl">
                  {t(item.title)}
                </h3>
                <p className="mt-4 text-gray-600">
                  {t("galleryHeroSub")}
                </p>
                <Link href={item.link}>
                  <button className="mt-8 rounded-full border px-8 py-3 hover:bg-black hover:text-white">
                    {t("subscribeBtn")}
                  </button>
                </Link>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-cormorant text-4xl text-center">
            {t("galleryMainTitle")}
          </h2>
          <p className="mt-4 text-center text-gray-600">
            {t("galleryMainSub")}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[Gallery4, Gallery5, Gallery6, Gallery7].map((img, i) => (
              <div key={i} className="relative h-[300px]">
                <Image src={img} alt="" fill className="object-cover" />
              </div>
            ))}

            <div className="relative h-[420px] md:col-span-2">
              <video
                src={Gallery8}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUBSCRIBE ================= */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-cormorant text-4xl">
              {t("subscribeHeading")}
            </h2>
            <p className="mt-4 text-gray-600">
              {t("subscribeDesc")}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex gap-4">
            <div className="flex items-center bg-gray-100 px-4 py-3 flex-1 rounded-md">
              <Mail className="mr-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("emailPlaceholder")}
                className="bg-transparent outline-none w-full"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-8 rounded-md disabled:opacity-50"
            >
              {loading ? t("loading") : t("subscribeBtn")}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
