"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomeButton = ({ text }) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(buttonRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 85%",
          once: true,
        },
      });
    }, buttonRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className=" flex justify-center mt-3">
      <span
        ref={buttonRef}
        className="px-6 py-2 bg-gray-200 text-black text-sm font-medium rounded"
      >
        {text}
      </span>
    </div>
  );
};

export default HomeButton;
