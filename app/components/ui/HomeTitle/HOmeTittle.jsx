"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HOmeTittle = ({ title, description }) => {
  const wrapperRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(descRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="max-w-4xl mx-auto text-center space-y-5 px-4 mt-16"
    >
      <h2
        ref={titleRef}
        className="font-display font-extralight text-3xl md:text-4xl"
      >
        {title}
      </h2>

      <p
        ref={descRef}
        className="text-lg font-body font-extralight text-gray-600"
      >
        {description}
      </p>
    </div>
  );
};

export default HOmeTittle;
