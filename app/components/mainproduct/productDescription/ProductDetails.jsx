"use client";

import React, { useEffect, useRef } from 'react'
import Right from './Right'
import Left from './Left'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ProductDetails() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Left Reveal
    gsap.fromTo(leftRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          once: true
        }
      }
    );

    // Right Reveal
    gsap.fromTo(rightRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          once: true
        }
      }
    );
  }, []);

  return (
    <section className="w-full h-auto min-h-screen lg:h-screen bg-white overflow-hidden py-12 md:py-0">
      <div className="flex h-full w-full max-w-7xl mx-auto flex-col lg:flex-row items-stretch">

        {/* LEFT — 65% */}
        <div ref={leftRef} className="h-1/2 lg:h-full w-full lg:w-[65%] ml-10">
          <Left />
        </div>

        {/* RIGHT — 35% */}
        <div ref={rightRef} className="h-1/2 lg:h-full w-full lg:w-[35%] flex items-center justify-center">
          <Right />
        </div>

      </div>
    </section>
  )
}

export default ProductDetails
