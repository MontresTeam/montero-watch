"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";

export default function Subscribe() {
  return (
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl">
          {/* SUBSCRIBE ROW */}
            <div className="mt-6 sm:mt-8 lg:mt-10 grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
              {/* LEFT TEXT */}
                <div>
                  <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
                    Subscribe for Exclusive Updates
                  </h2>

                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                    Join our mailing list to receive early access, limited-edition
                    alerts, and insider updates directly from the Montero team.
                  </p>
                </div>

              {/* RIGHT */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center bg-gray-200 px-4 py-3 w-full">
                    <Mail className="mr-4" />
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="bg-transparent outline-none w-full text-xs sm:text-sm"
                    />
                  </div>

                  <button className="bg-black text-white px-6 sm:px-8 py-3 text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition">
                    Subscribe Now
                  </button>
                </div>
            </div>
        </div>
      </section>
  );
}

function ScrollAnimation({ children, animationClass, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-opacity ${
        isVisible ? animationClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
