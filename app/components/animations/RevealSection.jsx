"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";


const RevealSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(
      el,
      {
        y: 60,
        opacity: 0,
        filter: "blur(8px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );
  }, []);

  return <div ref={ref}>{children}</div>;
};

export default RevealSection;
