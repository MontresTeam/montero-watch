import React from "react";

export default function About() {
  return (
    <section className="w-full bg-white py-8 md:py-16 px-1 flex justify-center items-center overflow-hidden">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center gap-8 md:gap-12">
        {/* Heading */}
        <h2 className="font-cormorant font-light text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-neutral-900 tracking-tight">
          Montero Arab Edition
        </h2>

        {/* Paragraph */}
        <p className="font-cormorant font-light text-[22px] md:text-[28px] lg:text-[32px] leading-[1.4] text-neutral-900 max-w-[1100px] antialiased">
          Montero brings together the spirit of travel and the precision of
          world-time functionality. Inspired by eight global beaches,{" "}
          <span className="text-neutral-400/80">
            each with its own story and time zone, Montero is designed to
            accompany you wherever your journey leads.
          </span>
        </p>
      </div>
    </section>
  );
}
