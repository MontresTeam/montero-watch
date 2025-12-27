"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutHome = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        {
          y: 50,
          opacity: 0,
          filter: "blur(6px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true, // ✅ play only once (recommended)
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        px-6 sm:px-10 lg:px-16
        py-16 sm:py-20 lg:py-28
        bg-white
        overflow-hidden
      "
    >
      <p
        ref={textRef}
        className="
          max-w-6xl mx-auto
          font-display
          text-xl sm:text-2xl md:text-3xl lg:text-4xl
          font-bold
          leading-snug sm:leading-normal
          text-center
          text-black
        "
      >
        Montero brings together the spirit of travel and the precision of
        world-time functionality. Inspired by eight global beaches,
        <span className="text-[#929292] font-medium">
          {" "}
          each with its own story and time zone, Montero is designed to
          accompany you wherever your journey leads.
        </span>
      </p>
    </section>
  );
};

export default AboutHome;
