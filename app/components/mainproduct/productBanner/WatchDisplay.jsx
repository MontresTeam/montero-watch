"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import blueWatch from "@/public/images/MainProducts/blueWatch/blueWatch2.png";
import greenWatch from "@/public/images/MainProducts/greenWatch/green-watch1.png";

function WatchDisplay({ isSwapped, setIsSwapped }) {
  const mainRef = useRef(null);
  const smallRef = useRef(null);
  const topArrowRef = useRef(null);
  const bottomArrowRef = useRef(null);

  // Arrow animation
  useEffect(() => {
    const arrows = [topArrowRef.current, bottomArrowRef.current];

    gsap.fromTo(
      arrows,
      { strokeDashoffset: 1000, strokeDasharray: 1000, opacity: 0 },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        stagger: 0.4,
      }
    );

    gsap.to(arrows, {
      y: "+=10",
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.4,
    });

    const interval = setInterval(() => {
      gsap.to([mainRef.current, smallRef.current], {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => setIsSwapped((prev) => !prev),
      });
    }, 4500);

    return () => {
      clearInterval(interval);
      gsap.killTweensOf(arrows);
    };
  }, [setIsSwapped]);

  // Watch in animation
  useEffect(() => {
    gsap.fromTo(
      mainRef.current,
      { opacity: 0, scale: 0.95, x: 60 },
      { opacity: 1, scale: 1, x: 0, duration: 1.4, ease: "power3.out" }
    );

    gsap.fromTo(
      smallRef.current,
      { opacity: 0, scale: 0.9, x: 40 },
      { opacity: 0.9, scale: 1, x: 0, duration: 1.2, ease: "power3.out" }
    );
  }, [isSwapped]);

  const mainImage = isSwapped ? greenWatch : blueWatch;
  const smallImage = isSwapped ? blueWatch : greenWatch;

  return (
    <div className="relative w-full md:w-[70%] h-[500px] sm:h-[600px] lg:h-[850px]">
      {/* SMALL WATCH */}
      <div
        ref={smallRef}
        className="absolute left-2 sm:left-4 md:left-6 lg:left-10 top-1/2 -translate-y-1/2 z-10 rotate-12 sm:rotate-15 md:rotate-20"
      >
        <Image
          src={smallImage}
          alt="Secondary Watch"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain opacity-90 blur-[1px]"
        />
      </div>

      {/* TOP ARROW */}
      <svg
        className="absolute left-14 sm:left-16 lg:left-24 top-[28%] w-36 h-20 lg:w-[220px] lg:h-[100px]"
        viewBox="0 0 220 140"
      >
        <path
          ref={topArrowRef}
          d="M 10 110 Q 110 10, 210 80"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6,6"
        />
      </svg>

      {/* MAIN WATCH */}
      <div
        ref={mainRef}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
      >
        <Image
          src={mainImage}
          alt="Main Watch"
          className="
    w-[320px] h-[320px]
    sm:w-[380px] sm:h-[380px]
    md:w-[520px] md:h-[520px]
    lg:w-[720px] lg:h-[720px]
    xl:w-[780px] xl:h-[780px]
    ml-[60px] md:ml-[100px] lg:ml-[160px]
    mt-[20px] md:mt-[40px] lg:mt-[60px]
    object-contain
    rotate-[30deg]
  "
        />


      </div>

      {/* BOTTOM ARROW */}
      <svg
        className="absolute left-18 sm:left-20 lg:left-28 top-[58%] w-40 h-24 lg:w-[220px] lg:h-[100px]"
        viewBox="0 0 240 160"
      >
        <path
          ref={bottomArrowRef}
          d="M 10 20 Q 120 140, 230 70"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6,6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default WatchDisplay;
