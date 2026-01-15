"use client";

import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  baseOpacity = 0.15,
  blurStrength = 6,
  stagger = 0.05,
  start = "top bottom",
  end = "bottom center",
  className = "",
}) {
  const containerRef = useRef(null);

  // Split text into words
  const splitText = useMemo(() => {
    if (typeof children !== "string") return children;

    return children.split(/(\s+)/).map((word, index) =>
      word.trim() ? (
        <span className="sr-word" key={index}>
          {word}
        </span>
      ) : (
        word
      )
    );
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll(".sr-word");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { opacity: baseOpacity, filter: `blur(${blurStrength}px)` },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [baseOpacity, blurStrength, stagger, start, end]);

  return (
    <div ref={containerRef} className={className}>
      {splitText}
    </div>
  );
}
