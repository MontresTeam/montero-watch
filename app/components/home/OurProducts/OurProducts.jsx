"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      className="relative min-h-screen bg-white flex flex-col justify-center py-24"
    >
      {/* TOP LABEL */}
      <HomeButton text="Our Products" />

      {/* TITLE */}
      {/* <div className="max-w-4xl mx-auto text-center space-y-5 px-4 mt-16">
        <h2 className="font-display font-bold text-3xl md:text-4xl">
          Choose Your Montero Edition
        </h2>
        <p className="text-lg text-gray-600">
          Montero is available in two collectible editions — each designed with
          its own identity while sharing the same world-time DNA and craftsmanship.
        </p>
      </div> */}

      <HOmeTittle title={"Choose Your Montero Edition"} description={"Montero is available in two collectible editions — each designed with its own identity while sharing the same world-time DNA and craftsmanship."}  />

      {/* CTA */}
      <div className="flex justify-center mt-8">
        <button
          ref={ctaRef}
          className="bg-black text-white px-10 py-3 rounded-full text-base font-medium hover:opacity-80 transition"
        >
          View Details
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div
        ref={contentRef}
        className="max-w-7xl mx-auto  w-full "
      >
        <div className="flex justify-between gap-16 ">
          {/* LEFT PRODUCT */}
          <div className="product-item  grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* TEXT */}
            <div className="space-y-3">
              <h3 className="text-2xl font-semibold">
                English Edition
              </h3>
              <p className="text-gray-600">
                A refined international version with a crisp white & blue dial
                inspired by modern minimalism.
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
          <div className="product-item grid grid-cols-1 md:grid-cols-2 items-center gap-8">
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
            <div className="space-y-3 order-1 md:order-2">
              <h3 className="text-2xl font-semibold">
                Arabic Edition
              </h3>
              <p className="text-gray-600">
                A bold blue dial with Eastern Arabic numerals inspired by regional
                identity and oceanic depth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
