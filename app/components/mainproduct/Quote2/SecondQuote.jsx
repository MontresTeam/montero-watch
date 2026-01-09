"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Watch images
import bluewatchFront from "../../../../public/images/MainProducts/blueWatch/DSC08237-3-Photoroom.png";
import bluewatchBack from "../../../../public/images/MainProducts/blueWatch/DSC08241-3 (1).png";

import greenwatchFront from "../../../../public/images/MainProducts/greenWatch/gw1.png";
import greenwatchBack from "../../../../public/images/MainProducts/greenWatch/gw2.png";

import { useRouter } from "next/navigation";

function SecondQuote() {
  const router = useRouter();

  const watches = [
    { front: greenwatchFront, back: greenwatchBack, color: "#297D61" }, // GREEN
    { front: bluewatchFront, back: bluewatchBack, color: "#004770" },   // BLUE
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePreOrder = () => {
    if (currentIndex === 1) {
      router.push("/product/english");
    } else {
      router.push("/product/arabic");
    }
  };

  // Auto switch
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % watches.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentWatch = watches[currentIndex];

  return (
    <section className="bg-white px-4 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* LEFT */}
        <div className="flex-1 w-full relative flex flex-col items-center">

          {/* WATCHES */}
          <div className="flex justify-center items-center gap-6 md:gap-12 relative z-10">
            <div className="relative w-[160px] md:w-[280px] aspect-[3/5] drop-shadow-2xl">
              <Image
                key={currentWatch.front.src}
                src={currentWatch.front}
                alt="Watch Front"
                fill
                className="object-contain transition-transform duration-1000 hover:scale-105"
                priority
              />
            </div>

            <div className="relative w-[160px] md:w-[280px] aspect-[3/5] drop-shadow-2xl">
              <Image
                key={currentWatch.back.src}
                src={currentWatch.back}
                alt="Watch Back"
                fill
                className="object-contain transition-transform duration-1000 hover:scale-105"
              />
            </div>
          </div>

          {/* ✅ FIXED COLOR DOTS */}
          <div className="flex items-center gap-4 mt-8 md:mt-12">
            {watches.map((watch, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Select ${idx === 0 ? "Green" : "Blue"} Watch`}
                className={`w-6 h-6 rounded-full border transition-transform hover:scale-110 focus:outline-none ${
                  idx === currentIndex
                    ? "scale-110"
                    : "bg-white border-gray-400 hover:border-gray-900"
                }`}
                style={
                  idx === currentIndex
                    ? {
                        backgroundColor: watch.color,
                        borderColor: watch.color,
                      }
                    : {}
                }
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 w-full max-w-xl text-center lg:text-left mt-12 lg:mt-0">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6">
            A World Time Watch Inspired
            <br />
            by Global Beaches
          </h2>

          <p className="monospace text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            Crafted for explorers, dreamers, and lovers of the world’s most iconic beaches
          </p>

          <button
            onClick={handlePreOrder}
            className="group relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium tracking-wide text-[#1A1A1A] border border-[#1A1A1A] rounded-full overflow-hidden transition-all duration-300 hover:text-white"
          >
            <span className="absolute inset-0 bg-[#1A1A1A] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            <span className="relative z-10">Pre-Order Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SecondQuote;
