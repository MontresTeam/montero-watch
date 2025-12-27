"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HOmeTittle from "../../ui/HomeTitle/HOmeTittle";
import Image from "next/image";
import MapImage from "@/public/images/Home/map.png";

gsap.registerPlugin(ScrollTrigger);

const Locations = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top title animation
      gsap.from(".locations-title-top", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".locations-title-top",
          start: "top 85%",
          once: true,
        },
      });

      // Map image animation
      gsap.from(".locations-map", {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".locations-map",
          start: "top 80%",
          once: true,
        },
      });

      // Bottom title animation
      gsap.from(".locations-title-bottom", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".locations-title-bottom",
          start: "top 85%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Top Title */}
      <div className="locations-title-top">
        <HOmeTittle
          title="The Eight Beaches That Inspired Montero"
          description="Each beach was chosen for its cultural significance, beauty, and global reputation — together forming the emotional core of Montero."
        />
      </div>

      {/* Map Image */}
      <div className="max-w-7xl mx-auto px-4 py-20 about-images">
        <Image
          src={MapImage}
          width={1200}
          height={800}
          alt="locations"
          className="locations-map mb-10 w-full h-auto"
        />
      </div>

      {/* Bottom Title */}
      <div
        className="max-w-4xl mx-auto text-center space-y-5 px-4 mt-16"
      >
        <p className="text-lg text-gray-600">
          Together, these beaches form Montero’s world map — connecting you to
          memories, destinations, and future adventures.
        </p>
      </div>
    </div>
  );
};

export default Locations;
