"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link'  
import Bubles from "@/public/images/Home/bubles.png";
import Clock from "@/public/images/Home/clock.png";

const UpcomingReleases = () => {
  // ⏱ Target time (6h 20m from load)
  const targetTime = Date.now() + 6 * 60 * 60 * 1000 + 20 * 60 * 1000;

  const getTimeLeft = () => {
    const diff = targetTime - Date.now();
    return {
      hours: Math.max(0, Math.floor(diff / (1000 * 60 * 60))),
      minutes: Math.max(0, Math.floor((diff / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((diff / 1000) % 60)),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full py-24 overflow-hidden bg-gradient-to-br from-[#0e1320] via-[#12192a] to-[#0b0f1a]">
      
      {/* Bubble Background Image */}
      <Image
        src={Bubles}
        alt="Bubbles"
        className="absolute max-w-[100px] left-3 top-0 opacity-40 pointer-events-none"
      />
      {/* Clock Image */}
          <div className="absolute -bottom-24 left-0 opacity-70 hidden lg:block  ">
            <Image src={Clock} alt="Clock" width={150} />
          </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="relative z-10 pl-12">
          <h2 className="text-white font-serif text-4xl md:text-5xl  mb-6">
            Already Released 
          </h2>

          <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
            Discover what’s next for Montero. Get early previews and reserve your
            spot for the next limited edition.
          </p>

          <Link href="/contact">
          <button className="px-8 py-3 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition">
            Join the List
          </button>
          </Link>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex flex-col items-center lg:items-end">
          
          

          {/* Countdown Boxes */}
          <div className="flex gap-4 w-full  justify-center">
            {/* <TimeBox value={timeLeft.hours} label="Hours" /> */}
            <TimeBox value={0} label="Hours" />
            {/* <TimeBox value={timeLeft.minutes} label="Minutes" /> */}
            <TimeBox value={0} label="Minutes" />
            {/* <TimeBox value={timeLeft.seconds} label="Seconds" /> */}
            <TimeBox value={0} label="Seconds" />
          </div>

          <p className="mt-6 text-sm font-semibold  text-center w-full text-gray-300">
            {/* Upcoming collections */}
            Already Released 
          </p>
        </div>
      </div>
    </section>
  );
};

const TimeBox = ({ value, label }) => (
  <div className="w-24 h-24 bg-white rounded-2xl flex flex-col items-center justify-center shadow-xl">
    <span className="text-3xl font-semibold text-black">
      {String(value).padStart(2, "0")}
    </span>
    <span className="text-xs text-gray-500 mt-1">{label}</span>
  </div>
);

export default UpcomingReleases;
