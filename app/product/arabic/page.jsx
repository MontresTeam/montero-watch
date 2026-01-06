"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import Link from "next/link";

import Green1 from "@/public/images/GreenWatch/productGreen1.png";
import Green2 from "@/public/images/GreenWatch/productGreen2.png";
import Green3 from "@/public/images/GreenWatch/productGreen3.png";
import Green6 from "@/public/images/GreenWatch/productGreen6.png";
import Green7 from "@/public/images/GreenWatch/productGreen7.jpg";

import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(null);

  const faqs = [
    "Do the watches come with a warranty?",
    "Are the watches scratch-resistant?",
    "What materials are used to make your watches?",
    "How can I place an order?",
  ];
  return (
    <>
      <Navbar />
      {/* First Section */}
      {/* ================= HERO SECTION ================= */}
            <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#1a5647] via-[#0f3d30] to-[#0a2920]">
              {/* Decorative Elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-emerald-400 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-teal-600 rounded-full blur-3xl"></div>
              </div>
      
              {/* Content Container */}
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-12 lg:py-0">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
                  {/* Left Content */}
                  <div className="max-w-xl text-center lg:text-left z-10 order-2 lg:order-1">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif text-white leading-tight mb-4 sm:mb-6">
                      A World Time Watch Inspired by Global Beaches
                    </h1>
      
                    <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed">
                      Crafted for explorers, dreamers, and lovers of the world's most iconic beaches
                    </p>
      
                    <button
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Pre-Order Now
                    </button>
                  </div>
      
                  {/* Right Watch Image */}
                  <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[700px] aspect-square order-1 lg:order-2">
                    <div className="absolute inset-0 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-2xl"></div>
                    <div className="relative w-full h-full transform scale-110 sm:scale-125 lg:scale-138 hover:scale-115 transition-transform duration-500">
                      <Image
                        src={Green1}
                        alt="Green World Time Watch"
                        fill
                        className="object-contain drop-shadow-2xl"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
      
              {/* Bottom gradient fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
            </section>

      {/* Second Section */}
      <section>
        <div className="relative w-full min-h-screen bg-gray-50 flex items-center justify-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Title */}
              <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 mb-8">
                Montero Arabic Edition
              </h2>

              {/* Watch Image with Background Text */}
              <div className="relative mb-12">
                {/* Background Text */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-4xl lg:text-6xl font-serif text-gray-200 tracking-wider -translate-y-12">
                    LIMITED EDITION ONE OF
                  </p>
                </div> */}

                {/* Watch Image */}
                <div className="relative z-10 w-full max-w-2xl mx-auto h-[400px] translate-y-10">
                  <Image
                    src={Green2}
                    alt="Montero Arabic Edition Watch"
                    fill
                    priority
                    className="
      object-contain
      rotate-[-70deg]
      sm:rotate-[-85deg]
      lg:rotate-[-95deg]
      transition-transform duration-500
    "
                  />
                </div>
              </div>

              {/* Features Grid */}
              <div className="max-w-6xl mx-auto mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 place-items-center">
                  {[
                    "Sapphire Crystal",
                    "Seiko NH34 GMT Movement",
                    "5 ATM Water Resistance",
                    "Stainless Steel Case",
                    "World-Time Beach Concept",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#1a5647] rounded-full"></span>
                      <p className="text-gray-700 text-sm text-center">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-8">
                <div className="flex items-center gap-2 lg:col-span-1 md:col-span-1 col-span-2 justify-center">
                  <span className="w-2 h-2 bg-[#1a5647] rounded-full"></span>
                  <p className="text-gray-700 text-sm text-center">
                    Sapphire crystal for durability
                  </p>
                </div>
                <div className="w-2 h-2 bg-[#1a5647] rounded-full"></div>
                <p className="text-gray-700 text-sm">
                  GMT function for global synchrony
                </p>
              </div>

              {/* Order Button */}
              <Link href="/order">
              <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
                <span className="text-xl">₽</span>
                <span>859 Order Now</span>
              </button> 
              </Link><br />  <br />
              <h1 className="inline-flex items-center gap-3">
                <span className="px-3 py-1 text-xs tracking-widest font-semibold text-red-700 border border-red-600 uppercase">
                  Limited Edition
                </span>
              </h1>
            </div>
          </div>
        </div> 
      </section>

      {/* Section    3 */}
      {/* ================= TECHNICAL SPECIFICATIONS SECTION ================= */}
            <section className="bg-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
                {/* Title - Always visible */}
                <div className="max-w-md mb-8 sm:mb-0">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-900 mb-3">
                    Technical Specifications
                  </h2>
                  <p className="text-sm text-gray-600">
                    Seiko NH34 GMT – reliable, accurate, and trusted by global enthusiasts.
                  </p>
                </div>
      
                {/* Mobile/Tablet View - Stack layout */}
                <div className="lg:hidden mt-8 space-y-8">
                  {/* Watch Image - Mobile */}
                  <div className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center">
                    <Image
                      src={Green3}
                      alt="Montero Watch"
                      fill
                      className="object-contain"
                    />
                  </div>
      
                  {/* Specifications List - Mobile */}
                  <div className="space-y-4">
                    {[
                      "Stainless Steel",
                      "Polished & brushed finishing",
                      "Case Thickness: 14.8mm",
                      "Diameter: 41 mm",
                    ].map((spec, i) => (
                      <div key={i} className="flex items-center gap-3 pb-3 border-b border-gray-200">
                        <span className="w-2 h-2 bg-black rounded-full flex-shrink-0"></span>
                        <p className="text-sm text-gray-700">{spec}</p>
                      </div>
                    ))}
                  </div>
      
                  {/* Limited Edition Text - Mobile */}
                  <div className="text-center sm:text-left pt-4">
                    <p className="text-4xl sm:text-5xl font-serif text-gray-200 leading-tight">
                      LIMITED EDITION
                    </p>
                    <p className="text-3xl sm:text-4xl font-serif text-gray-200">ONE OF 150</p>
                  </div>
                </div>
      
                {/* Desktop View - Original positioned layout */}
                <div className="hidden lg:block min-h-[700px]">
                  {/* RIGHT TOP SPEC */}
                  <div className="absolute right-[120px] top-36">
                    <div className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-black rounded-full" />
                      <p className="text-sm text-gray-700 w-[160px]">Stainless Steel</p>
                      <span className="w-56 h-px bg-gray-300" />
                    </div>
                  </div>
      
                  {/* LEFT MIDDLE SPECS */}
                  <div className="absolute left-[480px] top-72 space-y-16">
                    <div className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-black rounded-full" />
                      <p className="text-sm text-gray-700 w-[220px]">
                        Polished & brushed finishing
                      </p>
                      <span className="w-64 h-px bg-gray-300" />
                    </div>
      
                    <div className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-black rounded-full" />
                      <p className="text-sm text-gray-700 w-[240px]">
                        Case Thickness: 14.8mm
                      </p>
                      <span className="w-72 h-px bg-gray-300" />
                    </div>
                  </div>
      
                  {/* FADED TEXT */}
                  <div className="absolute left-12 bottom-40 pointer-events-none">
                    <p className="text-6xl font-serif text-gray-200 leading-none">
                      LIMITED EDITION
                    </p>
                    <p className="text-5xl font-serif text-gray-200">ONE OF 150</p>
                  </div>
      
                  {/* BOTTOM LEFT SPEC */}
                  <div className="absolute left-[620px] bottom-10">
                    <div className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-black rounded-full" />
                      <p className="text-sm text-gray-700 w-[140px]">Diameter: 41 mm</p>
                      <span className="w-64 h-px bg-gray-300" />
                    </div>
                  </div>
      
                  {/* WATCH IMAGE - Desktop */}
                  <div className="absolute left-[800px] top-[-250px] w-[900px] h-[1250px]">
                    <Image
                      src={Green3}
                      alt="Montero Watch"
                      fill
                      priority
                      className="object-contain -rotate-[70deg] scale-110 transition-transform duration-700 ease-out"
                    />
                  </div>
                </div>
              </div>
            </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Title */}
          <h2 className="text-3xl lg:text-4xl font-serif text-gray-900 mb-12">
            How to Set Your Montero Watch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              {/* Section 1 */}
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-4">
                  Section 1 Setting Local Time
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                    Pull the crown to Position 2
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                    Rotate to adjust the main hour and minute hands
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                    Push the crown back to lock
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-4">
                  Section 2 – Setting GMT Hand
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                    Pull the crown to Position 1
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                    Rotate clockwise to move the GMT hand in 1-hour increments
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                    Set it to a second time zone of your choice
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 className="text-base font-medium text-gray-900 mb-4">
                  Section 3 – Using the Beach Time System
                </h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                    Each beach on the dial corresponds to its GMT offset
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 bg-black rounded-full"></span>
                    Choose the beach you want, match its time zone with your GMT
                    hand, and enjoy instant global reference.
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full h-[420px] flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                {/* Image */}
                <video
                  src="/images/Gallery/galleryV.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  alt="Watch Setting Video"
                  className="w-full h-full object-cover"
                />

                {/* Play Button */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-white flex items-center justify-center bg-black/30">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-white ml-1"></div>
            </div>
          </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row relative">
        {/* LEFT — Image with Gradient Fade */}
        <div className="relative w-full lg:w-1/2 h-[400px] lg:h-[531px]">
          <Image
            src={Green7}
            alt="Blueprint"
            fill
            className="object-cover object-left"
          />
          {/* Gradient Overlay to fade into the right side color */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1A1E28]" />
        </div>

        {/* RIGHT — Content */}
        <div className="w-full lg:w-1/2 bg-[#1A1E28] flex flex-col justify-center px-8 lg:px-20 py-16 lg:py-0">
          <div className="max-w-xl space-y-8">
            <h2
              className="font-cormorant md:text-5xl
                   leading-[1.1] text-white"
            >
              A World Time Watch Inspired by Global Beaches
            </h2>

            <p
              className="Mona Sans font-light 
                  text-xl md:text-2xl 
                  text-white/90 leading-relaxed"
            >
              Crafted for explorers, dreamers, and lovers of the world's most
              iconic beaches
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-start">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-1">
              <p className="text-sm text-gray-500 mb-3">Client Feedback</p>

              <h2 className="text-3xl font-serif text-gray-900 mb-6 leading-snug">
                What They Say After Using Our Product
              </h2>

              <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                Many of our members have started their earlier careers with us.
              </p>

              {/* Arrows */}
              <div className="flex items-center gap-4">
                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center">
                  ←
                </button>
                <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                  →
                </button>
              </div>
            </div>

            {/* TESTIMONIAL CARDS */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* CARD */}
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="border-b pb-8">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-orange-500 text-sm">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    I recently purchased the Montero watch, and I'm extremely
                    satisfied. The design looks premium, the build quality is
                    solid, and it feels very comfortable on the wrist. Perfect
                    for both formal and casual wear.
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={Green6}
                        alt="Mirana Marci"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Mirana Marci
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= FAQ + SUBSCRIBE ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* FAQ ROW */}
            <div className="grid grid-cols-1 gap-8 lg:gap-16 md:grid-cols-2 items-start">
              {/* LEFT TEXT */}
              <ScrollAnimation animationClass="animate-slide-in-left">
                <div>
                  <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
                    Frequently Asked Question
                  </h2>

                  <p className="mt-4 sm:mt-6 max-w-md text-sm sm:text-base text-gray-600 leading-relaxed transition-opacity duration-300 hover:opacity-80">
                    Each beach was chosen for its cultural significance, beauty,
                    and global reputation — together forming the emotional core
                    of Montero. Each beach was chosen for its cultural
                    significance, beauty, and global reputation — together
                    forming the emotional core of Montero.
                  </p>
                </div>
              </ScrollAnimation>

              {/* RIGHT FAQ LIST */}
              <ScrollAnimation animationClass="animate-slide-in-right">
                <div className="space-y-4 sm:space-y-6">
                  {faqs.map((q, i) => (
                    <div
                      key={i}
                      className="border-b border-gray-200 pb-3 sm:pb-4 transition-all duration-300 hover:border-gray-400"
                    >
                      <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="flex w-full items-center justify-between text-left text-sm sm:text-base text-black transition-colors duration-300 hover:text-gray-600"
                      >
                        <span className="pr-4">{q}</span>
                        <span
                          className="text-xl flex-shrink-0 transition-transform duration-300"
                          style={{
                            transform:
                              open === i ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          {open === i ? "−" : "+"}
                        </span>
                      </button>

                      {open === i && (
                        <p className="mt-3 sm:mt-4 max-w-md text-xs sm:text-sm text-gray-600 animate-fade-in-down">
                          Yes, all Montero watches come with a comprehensive
                          warranty covering manufacturing defects.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

            {/* SUBSCRIBE ROW */}
            <ScrollAnimation animationClass="animate-fade-in-up">
              <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
                {/* LEFT TEXT */}
                <ScrollAnimation animationClass="animate-slide-in-left">
                  <div>
                    <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
                      Subscribe for Exclusive Updates
                    </h2>

                    <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                      Join our mailing list to receive early access,
                      limited-edition alerts, and insider updates directly from
                      the Montero team.
                    </p>
                  </div>
                </ScrollAnimation>

                {/* RIGHT */}
                <ScrollAnimation animationClass="animate-slide-in-right">
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <div className="flex items-center bg-gray-200 px-4 py-3 w-full">
                      <span className="mr-3 text-gray-500">✉</span>
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
                </ScrollAnimation>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </>
  );
};

export default Page;

/* ================= SCROLL ANIMATION COMPONENT ================= */
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
