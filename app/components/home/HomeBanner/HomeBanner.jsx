"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import WatchImage from "@/public/images/Home/bannerWatch.png";
import LeftArrow from "@/public/images/Home/bannerleft.png";
import RightArrow from "@/public/images/Home/bannerrigth.png";

gsap.registerPlugin(ScrollTrigger);

export default function HomeBanner() {
  const sectionRef = useRef(null);

  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const rightTextRef = useRef(null);
  const leftFeatureRef = useRef(null);
  const watchRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ───────────── INTRO ANIMATION ───────────── */
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
      })
        .from(
          descRef.current,
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.6"
        )
        .from(
          buttonRef.current,
          { y: 30, opacity: 0, duration: 0.6 },
          "-=0.4"
        )
        .from(
          rightTextRef.current,
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.3"
        )
        .from(
          watchRef.current,
          { x: 120, opacity: 0, duration: 1.2 },
          "-=0.4"
        )
        .from(
          leftFeatureRef.current,
          { y: 40, opacity: 0, duration: 0.8 },
          "-=0.6"
        );

      /* ───────────── WATCH PARALLAX ───────────── */
      gsap.to(watchRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden text-white"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/Bg.png')" }}
      />

      {/* COLOR OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#083654]/90 via-[#06283D]/90 to-[#031A2A]/95" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-24 lg:pt-32 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT TEXT */}
        <div className="space-y-6">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-display leading-tight"
          >
            A World Time Watch Inspired <br className="hidden sm:block" />
            by Global Beaches
          </h1>

          <p ref={descRef} className="max-w-md text-gray-300">
            Crafted for explorers, dreamers, and lovers of the world’s most
            iconic beaches
          </p>

          <button
            className="px-6 py-3 rounded-full  text-white border-white border font-medium hover:scale-105 transition"
          >
            Pre-Order Now
          </button>
        </div>

        {/* RIGHT TEXT */}
        <div className="relative hidden lg:block">
          <div
            ref={rightTextRef}
            className="absolute top-24 right-0 max-w-xs"
          >
            <h4 className="font-semibold">Elegant Timekeeping</h4>
            <p className="text-sm text-gray-300">
              Precision inspired by the world
            </p>
          </div>
        </div>
      </div>

      {/* LEFT ARROW IMAGE */}
      <div className="absolute top-[25%] right-[23%] hidden lg:block z-10">
        <Image src={LeftArrow} alt="Left Arrow" />
      </div>

      {/* RIGHT ARROW IMAGE */}
      <div className="absolute bottom-[18%] left-[30%] hidden lg:block z-10">
        <Image src={RightArrow} alt="Right Arrow" />
      </div>

      {/* WATCH IMAGE */}
      <div
        ref={watchRef}
        className="absolute bottom-0 right-0 w-[100%] sm:w-[85%] lg:w-[55%] z-10"
      >
        <Image
          src={WatchImage}
          alt="World Time Watch"
          priority
          className="object-contain"
        />
      </div>

      {/* LEFT FEATURE */}
      <div
        ref={leftFeatureRef}
        className="absolute bottom-[20%] left-[10%] hidden lg:block z-10 max-w-xs"
      >
        <h4 className="font-semibold">Elegant Timekeeping</h4>
        <p className="text-sm text-gray-300">
          Designed for precision and beauty
        </p>
      </div>
    </section>
  );
}
