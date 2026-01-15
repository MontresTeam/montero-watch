"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/components/navBar/NavBar";
import Comparison1 from "@/public/images/Comparison/comparisonFirst.jpg";
import Comparison2 from "@/public/images/Comparison/comparison2.png";
import Comparison3 from "@/public/images/Comparison/comparison3.png";
import Comparison4 from "@/public/images/Comparison/comparison4.jpg";
import Comparison5 from "@/public/images/Comparison/comparison5.jpg";
import Footer from "@/app/components/home/Footer/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={Comparison1}
          alt="Hero"
          fill
          priority
          className="object-cover object-[center_10%] transition-transform duration-[8000ms] ease-out hover:scale-105"
        />
      </section>

      {/* ================= COMPARE SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-6 py-28">
          <div className="mx-auto max-w-6xl text-center">
            {/* TAG */}
            <ScrollAnimation animationClass="animate-fade-in-up" delay={100}>
              <button className="inline-block bg-gray-200 px-4 py-1 text-xs sm:text-sm text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.96] active:shadow-inner">
                Compare
              </button>
            </ScrollAnimation>

            {/* TITLE */}
            <ScrollAnimation animationClass="animate-fade-in-up" delay={200}>
              <h2 className="font-cormorant text-4xl md:text-5xl text-black mt-6">
                Compare the Craft of Time
              </h2>
            </ScrollAnimation>

            {/* DESCRIPTION */}
            <ScrollAnimation animationClass="animate-fade-in-up" delay={300}>
              <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-relaxed text-sm md:text-base">
                Montero was born from a deep appreciation for the world, its
                diversity, and the timeless beauty of global coastlines. Each
                detail of the watch carries inspiration from the beaches that
                have shaped culture, adventure, and unforgettable memories.
                <br />
                <br />
                From Ibiza to Bali, Miami to Bora Bora, the Montero world-time
                concept celebrates the connection between people and place. It
                is more than a watch — it is a reminder that every moment holds
                a new horizon.
              </p>
            </ScrollAnimation>

            {/* WATCHES */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
              {/* ENGLISH EDITION */}
              <ScrollAnimation
                animationClass="animate-slide-in-left"
                delay={400}
              >
                <div className="text-center">
                  <h3 className="font-cormorant text-2xl mb-6">
                    Montero English Edition
                  </h3>

                  <div className="relative mx-auto w-[260px] h-[360px]">
                    <Image
                      src={Comparison2}
                      alt="Montero English Edition"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* ARAB EDITION */}
              <ScrollAnimation
                animationClass="animate-slide-in-right"
                delay={400}
              >
                <div className="text-center">
                  <h3 className="font-cormorant text-2xl mb-6">
                    Montero Arab Edition
                  </h3>

                  <div className="relative mx-auto w-[260px] h-[360px]">
                    <Image
                      src={Comparison3}
                      alt="Montero Arab Edition"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-6 py-28">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* TOP LEFT IMAGE */}
            <ScrollAnimation animationClass="animate-slide-in-left">
              <div className="relative h-[320px] md:h-[360px] w-full">
                <Image
                  src={Comparison4}
                  alt="Montero English Edition"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>

            {/* TOP RIGHT CONTENT */}
            <ScrollAnimation animationClass="animate-slide-in-right">
              <div>
                <h3 className="font-cormorant text-2xl mb-4">
                  Montero English Edition
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Montero is available in two collectible editions each designed
                  with its own identity while sharing the same world-time DNA
                  and craftsmanship.
                </p>

                <ul className="grid grid-cols-2 gap-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Case size
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Movement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Materials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Straps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2596be] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Delivery Window
                  </li>
                </ul>

                <Link href="/product/english">
              <button className="mt-6 sm:mt-8 rounded-full border border-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                Pre-Order Now
              </button>
              </Link>
              </div>
            </ScrollAnimation>

            {/* BOTTOM LEFT CONTENT */}
            <ScrollAnimation animationClass="animate-slide-in-left">
              <div>
                <h3 className="font-cormorant text-2xl mb-4">
                  Time is the vehicle that carries everything into nothing  
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  Montero is available in two collectible editions each designed
                  with its own identity while sharing the same world-time DNA
                  and craftsmanship.
                </p>

                <ul className="grid grid-cols-2 gap-y-3 text-sm text-gray-700 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Case size
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Movement
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Materials
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Warranty
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Straps
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#15493b] text-2xl leading-none">
                      ●
                    </span>{" "}
                    Delivery Window
                  </li>
                </ul>

                <Link href="/product/arabic">
              <button className="mt-6 sm:mt-8 rounded-full border border-black px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm transition-all duration-300 hover:bg-black hover:text-white active:scale-95">
                Pre-Order Now
              </button>
              </Link>
              </div>
            </ScrollAnimation>

            {/* BOTTOM RIGHT IMAGE */}
            <ScrollAnimation animationClass="animate-slide-in-right">
              <div className="relative h-[320px] md:h-[360px] w-full">
                <Image
                  src={Comparison5}
                  alt="Montero Arab Edition"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* SUBSCRIBE ROW */}
              <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
                {/* LEFT TEXT */}
                  <div>
                    <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
                      Subscribe for Exclusive Updates
                    </h2>

                    <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                      Join our mailing list to receive early access,
                      limited-edition alerts, and insider updates directly from
                      the Montero team.
                    </p>
                  </div>

                {/* RIGHT */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-1">
                    <div className="flex items-center bg-gray-200 px-4 py-3 w-full">
                      <span className="mr-3 text-gray-500">✉</span>
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="bg-transparent outline-none w-full text-xs sm:text-sm"
                      />
                    </div>

                    <button className="bg-black text-white px-6 sm:px-8 py-3 text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition">
                      Subscribe Now
                    </button>
                  </div>
              </div>
          </div>
        </section>

      <Footer />

      <style jsx global>{``}</style>
    </>
  );
};

export default page;

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
