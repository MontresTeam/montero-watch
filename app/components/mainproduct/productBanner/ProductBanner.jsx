import React from "react";
import Image from "next/image";
import WatchDisplay from "./WatchDisplay";

function ProductBanner() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/Bg.png')" }}
      />

      {/* SOLID OVERLAY */}
      <div className="absolute inset-0 bg-[#22374F]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 lg:pt-32 flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
        {/* LEFT TEXT */}
        <div className="space-y-6 w-full lg:w-[55%] mt-0 sm:mt-10 text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1
            // ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-serif leading-tight"
          >
            A World Time Watch Inspired
            by Global Beaches
          </h1>

          <p className="max-w-md font-Monasans font-light text-lg sm:text-xl md:text-2xl text-gray-300">
            Crafted for explorers, dreamers, and lovers of the world’s most
            iconic beaches
          </p>

          <button
            className="px-8 py-3 sm:px-10 sm:py-4 rounded-full text-black bg-white border border-white font-medium text-sm sm:text-base hover:scale-105 transition"
          >
            Pre-Order Now
          </button>
        </div>
        {/* Right section - Watch Display */}
        <WatchDisplay />

      </div>

      {/* DECORATIVE BUBBLES */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <Image
          src="/images/MainProducts/Bubles 1.png"
          alt="Decorative Bubbles"
          width={400}
          height={300}
          className="opacity-80"
        />
      </div>
    </section>
  );
}

export default ProductBanner;
