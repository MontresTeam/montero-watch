import React from "react";
import Image from "next/image";

function SecondQuote() {
  return (
    <section className="bg-white px-4 py-16 md:py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Side - Watches */}
        <div className="flex-1 w-full relative flex flex-col items-center">

          {/* Watch Images Container */}
          <div className="flex justify-center items-center gap-6 md:gap-12 relative z-10">
            {/* Front View */}
            <div className="relative w-[160px] md:w-[280px] aspect-[3/5] drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out">
              <Image
                src="/images/MainProducts/greenWatch/gw1.png"
                alt="Green World Timer Watch Front"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 280px"
                priority
              />
            </div>

            {/* Back View */}
            <div className="relative w-[160px] md:w-[280px] aspect-[3/5] drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out delay-100">
              <Image
                src="/images/MainProducts/greenWatch/gw2.png"
                alt="Green World Timer Watch Back"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 160px, 280px"
              />
            </div>
          </div>

          {/* Color/Pagination Dots */}
          <div className="flex items-center gap-4 mt-8 md:mt-12">
            <button className="w-6 h-6 rounded-full bg-[#0E4A66] border border-[#0E4A66] transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E4A66]" aria-label="Select Blue Color"></button>
            <button className="w-6 h-6 rounded-full border border-gray-400 hover:border-gray-900 transition-colors hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" aria-label="Select White Color"></button>
          </div>

        </div>

        {/* Right Side - Content */}
        <div className="flex-1 w-full max-w-xl text-center lg:text-left">
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] leading-[1.1] mb-6">
            A World Time Watch Inspired <br className="hidden md:block" />
            by Global Beaches
          </h2>

          <p className="monospace text-gray-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            Crafted for explorers, dreamers, and lovers of the world's most iconic beaches
          </p>

          <button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-lg font-medium tracking-wide text-[#1A1A1A] border border-[#1A1A1A] rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:border-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1A1A1A]">
            <span className="absolute inset-0 w-full h-full bg-[#1A1A1A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ease-out"></span>
            <span className="relative z-10">Pre-Order Now</span>
          </button>
        </div>

      </div>
    </section>
  );
}

export default SecondQuote;