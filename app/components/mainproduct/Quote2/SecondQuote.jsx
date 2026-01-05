"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

// Watch images
import bluewatchFront from "../../../../public/images/MainProducts/blueWatch/DSC08237-3-Photoroom.png";
import bluewatchBack from "../../../../public/images/MainProducts/blueWatch/DSC08241-3 (1).png";

import greenwatchFront from "../../../../public/images/MainProducts/greenWatch/gw1.png";
import greenwatchBack from "../../../../public/images/MainProducts/greenWatch/gw2.png";

function SecondQuote() {
  const watches = [
    { front: greenwatchFront, back: greenwatchBack, color: "#0E4A66" },
    { front: bluewatchFront, back: bluewatchBack, color: "#1A1A1A" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch watches every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % watches.length);
    }, 3000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  const currentWatch = watches[currentIndex];

  return (
    <section className="bg-white px-4 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Side - Watches */}
        <div className="flex-1 w-full relative flex flex-col items-center">

          {/* Watch Images Container */}
          <div className="flex justify-center items-center gap-6 md:gap-12 relative z-10">
            {/* Front View */}
            <div className="relative w-[160px] md:w-[280px] aspect-[3/5] drop-shadow-2xl overflow-hidden">
              <Image
                key={currentWatch.front.src} // key forces smooth image transition
                src={currentWatch.front}
                alt="Watch Front View"
                fill
                className="object-contain transition-transform duration-1000 ease-in-out transform hover:scale-105"
                sizes="(max-width: 768px) 160px, 280px"
                priority
              />
            </div>

            {/* Back View */}
            <div className="relative w-[160px] md:w-[280px] aspect-[3/5] drop-shadow-2xl overflow-hidden">
              <Image
                key={currentWatch.back.src}
                src={currentWatch.back}
                alt="Watch Back View"
                fill
                className="object-contain transition-transform duration-1000 ease-in-out transform hover:scale-105"
                sizes="(max-width: 768px) 160px, 280px"
              />
            </div>
          </div>

          {/* Color/Pagination Dots */}
          <div className="flex items-center gap-4 mt-8 md:mt-12">
            {watches.map((watch, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-6 h-6 rounded-full border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 ${idx === currentIndex
                    ? `bg-[${watch.color}] border-[${watch.color}]`
                    : "bg-white border-gray-400 hover:border-gray-900"
                  }`}
                aria-label={`Select ${idx === 0 ? "Green" : "Blue"} Watch`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="flex-1 w-full max-w-xl text-center lg:text-left mt-12 lg:mt-0">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6">
            A World Time Watch Inspired <br className="hidden md:block" />
            by Global Beaches
          </h2>

          <p className="monospace text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            Crafted for explorers, dreamers, and lovers of the world s most iconic beaches
          </p>

          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium tracking-wide text-[#1A1A1A] border border-[#1A1A1A] rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:border-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A]">
            <span className="absolute inset-0 w-full h-full bg-[#1A1A1A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></span>
            <span className="relative z-10">Pre-Order Now</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SecondQuote;
