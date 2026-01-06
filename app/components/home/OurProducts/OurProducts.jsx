"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link'

import WatchBlue from "@/public/images/Home/watch1.png";
import WatchGreen from "@/public/images/Home/watch2.png";
import HomeButton from "../../ui/HomeButton/HomeButton";
import HOmeTittle from "../../ui/HomeTitle/HOmeTittle";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".product-item", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.25,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          once: true,
        },
      });

      gsap.from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-white flex flex-col justify-center py-24 px-4 md:px-8"
    >
      {/* TITLE */}
      <div ref={titleRef} className="max-w-4xl mx-auto text-center">
        <h1 className="font-cormorant font-normal text-[48px] md:text-[61px] leading-[130%] tracking-tightest">
          Choose Your Montero Edition
        </h1>

<p className="
  mt-6
  leading-[170%]
  tracking-[0.015em]
  text-gray-700
  text-center
  max-w-3xl
  mx-auto
">
  Montero is available in two collectible editions, each designed with its own
  identity while sharing the same world-time DNA and craftsmanship.
</p>




      </div>

      {/* CTA */}
      <div className="flex justify-center mt-8">
        <Link href="/product">
        <button
          ref={ctaRef}
          className="bg-black text-white px-10 py-3 rounded-full text-base font-medium hover:opacity-80 transition"
        >
          View Details
        </button>
        </Link>
      </div>

      {/* PRODUCT GRID */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto w-full mt-16"
      >
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* LEFT PRODUCT */}
          <div className="product-item grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* TEXT */}
            <div className="space-y-3 text-center md:text-left">
              <h3 className="text-2xl font-semibold">English Edition</h3>
              <p className="text-gray-600">
                A refined international version with a crisp white & blue dial inspired by modern minimalism.
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center md:justify-end">
              <Image
                src={WatchBlue}
                alt="Blue Watch"
                className="w-full max-w-[360px] object-contain"
                priority
              />
            </div>
          </div>

          {/* RIGHT PRODUCT */}
          <div className="product-item grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-12 md:mt-0">
            {/* IMAGE */}
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <Image
                src={WatchGreen}
                alt="Green Watch"
                className="w-full max-w-[360px] object-contain"
                priority
              />
            </div>

            {/* TEXT */}
            <div className="space-y-3 order-1 md:order-2 text-center md:text-left">
              <h3 className="text-2xl font-semibold">Arabic Edition</h3>
              <p className="text-gray-600">
                A bold blue dial with Eastern Arabic numerals inspired by regional identity and oceanic depth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
