import ScrollReveal from "../../ScrollReveal/ScrollReveal";

export default function About() {
  return (
    <section className="w-full bg-white py-8 md:py-16 px-4 flex justify-center overflow-hidden">
      <div className="max-w-[1200px] text-center flex flex-col items-center gap-8">
        
        {/* Heading (NO animation) */}
        <h2 className="font-cormorant font-light text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-neutral-900">
          Montero Arab Edition
        </h2>

        {/* Animated paragraph */}
        <p className="font-cormorant font-light text-[22px] md:text-[28px] lg:text-[32px] leading-[1.4] text-neutral-900 max-w-[1100px] antialiased">
          <ScrollReveal>
            Montero brings together the spirit of travel and the precision of
            world-time functionality. Inspired by eight global beaches, each
            with its own story and time zone, Montero is designed to accompany
            you wherever your journey leads.
          </ScrollReveal>
        </p>
      </div>
    </section>
  );
}
