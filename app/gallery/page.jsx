"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import Link from "next/link";

import Gallery1 from "@/public/images/Gallery/gallary1.jpg";
import Gallery2 from "@/public/images/Gallery/gallary2.png";
import Gallery3 from "@/public/images/Gallery/gallary3.png";
import Gallery4 from "@/public/images/Gallery/gallary4.jpg";
import Gallery5 from "@/public/images/Gallery/gallary5.jpg";
import Gallery6 from "@/public/images/Gallery/gallary6.jpg";
import Gallery7 from "@/public/images/Gallery/gallary7.jpg";
import Gallery8 from "@/public/images/Gallery/gallary8.jpg";

// Reusable ScrollAnimation Component
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
      className={`transition-all duration-700 ease-out ${
        isVisible ? animationClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Navbar />

      {/* ================= HERO / FEATURE SECTION ================= */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 items-center gap-8 sm:gap-12 lg:gap-16 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <ScrollAnimation animationClass="animate-slide-in-left">
            <div>
              <h1 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-black">
                A World Time Watch Inspired <br className="hidden sm:block" />
                by Global Beaches
              </h1>

              <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base text-gray-600 leading-relaxed">
                Crafted for explorers, dreamers, and lovers of the world s most
                iconic beaches
              </p>

              <Link href="/product">
                <button className="mt-6 sm:mt-8 rounded-full bg-gray-200 px-6 sm:px-8 py-3 text-sm sm:text-base text-gray-800 shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-md active:scale-95">
                  Pre-Order Now
                </button>
              </Link>
            </div>
          </ScrollAnimation>

          {/* RIGHT IMAGE */}
          <ScrollAnimation animationClass="animate-slide-in-right">
            <div className="relative h-[280px] sm:h-[360px] md:h-[420px] lg:h-[520px] w-full overflow-hidden">
              <Image
                src={Gallery1}
                alt="World Time Watch"
                fill
                className="object-cover"
              />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ================= PRODUCT EDITIONS ================= */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 md:grid-cols-2">
          {/* CARD 1 */}
          <ScrollAnimation animationClass="animate-fade-in-up" delay={100}>
            <div className="bg-[#f5f5f3] p-6 sm:p-8 lg:p-10 text-center rounded-lg transition-transform duration-300 hover:scale-105">
              <div className="relative mx-auto h-[240px] sm:h-[280px] md:h-[320px] w-full max-w-[220px] sm:max-w-[260px]">
                <Image
                  src={Gallery2}
                  alt="Montero English Edition"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-cormorant mt-6 sm:mt-8 lg:mt-10 text-xl sm:text-2xl lg:text-3xl text-black">
                Montero English Edition
              </h3>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                Crafted for explorers, dreamers, and lovers of the world s most
                iconic beaches
              </p>

              <Link href="/product/english">
                <button className="mt-6 sm:mt-8 rounded-full border border-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                  Pre-Order Now
                </button>
              </Link>
            </div>
          </ScrollAnimation>

          {/* CARD 2 */}
          <ScrollAnimation animationClass="animate-fade-in-up" delay={200}>
            <div className="bg-[#f5f5f3] p-6 sm:p-8 lg:p-10 text-center rounded-lg transition-transform duration-300 hover:scale-105">
              <div className="relative mx-auto h-[240px] sm:h-[280px] md:h-[320px] w-full max-w-[220px] sm:max-w-[260px]">
                <Image
                  src={Gallery3}
                  alt="Montero Arab Edition"
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="font-cormorant mt-6 sm:mt-8 lg:mt-10 text-xl sm:text-2xl lg:text-3xl text-black">
                Montero Arab Edition
              </h3>

              <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
                Crafted for explorers, dreamers, and lovers of the world s most
                iconic beaches
              </p>

              <Link href="/product/arabic">
                <button className="mt-6 sm:mt-8 rounded-full border border-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                  Pre-Order Now
                </button>
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* ================= IMAGE GALLERY SECTION ================= */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          {/* TITLE */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-cormorant text-3xl sm:text-4xl md:text-5xl text-black">
              A World Time Watch Inspired <br className="hidden sm:block" />
              by Global Beaches
            </h2>

            <p className="mt-3 text-sm text-gray-600">
              Crafted for explorers, dreamers, and lovers of the world s most
              iconic beaches
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* ROW 1 */}
            <div className="relative h-[300px] md:h-[340px] overflow-hidden">
              <Image
                src={Gallery4}
                alt="Gallery"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[300px] md:h-[340px] overflow-hidden">
              <Image
                src={Gallery5}
                alt="Gallery"
                fill
                className="object-cover"
              />
            </div>

            {/* ROW 2 */}
            <div className="relative h-[260px] md:h-[300px] overflow-hidden">
              <Image
                src={Gallery6}
                alt="Gallery"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[260px] md:h-[300px] overflow-hidden">
              <Image
                src={Gallery7}
                alt="Gallery"
                fill
                className="object-cover"
              />
            </div>

            {/* ROW 3 – FULL WIDTH */}
            <div className="relative h-[320px] md:h-[420px] md:col-span-2 overflow-hidden">
              <video
                src={Gallery8}
                poster="/images/Gallery/gallary8.jpg"
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

      {/* ================= SUBSCRIBE SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
              {/* LEFT TEXT */}
              <ScrollAnimation animationClass="animate-slide-in-left">
                <div>
                  <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-black transition-colors duration-300 hover:text-gray-700">
                    Subscribe for Exclusive Updates
                  </h2>

                  <p className="mt-3 sm:mt-4 lg:mt-6 max-w-md text-xs sm:text-sm lg:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                    Join our mailing list to receive early access,
                    limited-edition alerts, and insider updates directly from
                    the Montero team.
                  </p>
                </div>
              </ScrollAnimation>

              {/* RIGHT FORM */}
              <ScrollAnimation animationClass="animate-slide-in-right">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center bg-gray-100 px-4 py-3 sm:py-4 w-full rounded-md transition-all duration-300 hover:bg-gray-200 focus-within:ring-2 focus-within:ring-gray-400">
                    <span className="mr-3 text-gray-500 text-lg">✉</span>
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="bg-transparent outline-none w-full text-xs sm:text-sm placeholder:text-gray-400"
                    />
                  </div>

                  <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap rounded-md transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-95">
                    Subscribe Now
                  </button>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </>
  );
}
