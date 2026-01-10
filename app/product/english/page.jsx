"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import Blue1 from "@/public/images/BlueWatch/productBlue1.png";
import Blue2 from "@/public/images/BlueWatch/productBlue2.png";
import Blue3 from "@/public/images/BlueWatch/productBlue3.png";
import Blue4 from "@/public/images/BlueWatch/productBlue4.jpg";
import Green6 from "@/public/images/GreenWatch/productGreen6.png";
import White from "@/public/images/BlueWatch/whiteShadow.png";
import newcurrency from "../../../public/images/dbff981dfc9f1a8358f03cc8ee71583a164e6ffc.png";
import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";

const ScrollAnimation = ({ children, animationClass }) => children;

const Page = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const faqs = [
    {
      question: "Do the watches come with a warranty?",
      answer:
        "Yes, all Montero watches come with a comprehensive 2-year international warranty covering manufacturing defects.",
    },
    {
      question: "Are the watches scratch-resistant?",
      answer:
        "Yes, all Montero watches feature sapphire crystal glass which is highly scratch-resistant and durable.",
    },
    {
      question: "What materials are used to make your watches?",
      answer:
        "We use 316L stainless steel cases, sapphire crystal, genuine leather straps, and Seiko NH34 GMT movements.",
    },
    {
      question: "How can I place an order?",
      answer:
        "You can place an order directly through our website, or contact our customer service for personalized assistance.",
    },
  ];

  const testimonials = [
    {
      name: "Mirana Marci",
      role: "Watch Enthusiast",
      text: "I recently purchased the Montero watch, and I'm extremely satisfied. The design looks premium, the build quality is solid, and it feels very comfortable on the wrist. Perfect for both formal and casual wear.",
      rating: 5,
      image: Green6,
    },
    {
      name: "Alex Johnson",
      role: "World Traveler",
      text: "The GMT function with beach time zones is genius! As someone who travels frequently, this watch has become my essential companion. The build quality is exceptional.",
      rating: 5,
      image: Green6,
    },
    {
      name: "Sarah Chen",
      role: "Collector",
      text: "The attention to detail on this timepiece is remarkable. From the sapphire crystal to the Seiko movement, everything feels premium. Limited edition pieces like this are rare finds.",
      rating: 5,
      image: Green6,
    },
  ];

  const features = [
    "Sapphire Crystal",
    "Seiko NH34 GMT Movement",
    "5 ATM Water Resistance",
    "Stainless Steel Case",
    "World-Time Beach Concept",
  ];

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-[#004770] via-[#0C2636] to-[#000106]">
          {/* Decorative Elements - Optimized for performance */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-48 h-48 bg-emerald-400 rounded-full blur-3xl md:top-20 md:right-20 md:w-96 md:h-96 animate-pulse-slow"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-teal-600 rounded-full blur-3xl md:bottom-20 md:left-20 md:w-96 md:h-96 animate-pulse-slow delay-1000"></div>
          </div>

          {/* Content Container */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center py-8 md:py-12 lg:py-0">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-12">
              {/* Left Content */}
              <div className="max-w-xl text-center lg:text-left z-10 order-2 lg:order-1 pt-8 lg:pt-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-cormorant text-white leading-tight mb-4 sm:mb-6">
                  A World Time Watch Inspired by Global Beaches
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed font-light max-w-lg mx-auto lg:mx-0">
                  Crafted for explorers, dreamers, and lovers of the
                  world&apos;s most iconic beaches
                </p>
              </div>

              {/* Right Watch Image */}
              <div className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[600px] aspect-square order-1 lg:order-2 mx-auto">
                <div className="absolute inset-0 bg-gradient-radial from-emerald-400/20 to-transparent rounded-full blur-2xl"></div>

                <div className="relative w-full h-full">
                  <Image
                    src={Blue1}
                    alt="Montero English Edition World Time Watch"
                    fill
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 640px) 280px, (max-width: 768px) 350px, (max-width: 1024px) 450px, 600px"
                    quality={90}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
        </section>
      </ScrollAnimation>

      {/* ================= MONTERO EDITION SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="relative w-full bg-gray-50 py-6 sm:py-8 lg:py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-cormorant text-gray-900 mb-2 sm:mb-3">
                Montero English Edition
              </h2>

              <div className="relative mb-3 sm:mb-4">
                <div className="relative z-10 w-full max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto h-48 sm:h-64 md:h-80 lg:h-[26rem]">
                  <Image
                    src={Blue2}
                    alt="Montero English Edition Watch"
                    fill
                    priority
                    quality={90}
                    sizes="(max-width: 640px) 420px, (max-width: 768px) 620px, (max-width: 1024px) 760px, 900px"
                    className="object-contain transition-transform duration-500 hover:scale-[1.06]"
                  />
                </div>
              </div>

              {/* Features Grid */}
              <div className="max-w-6xl mx-auto mb-3 sm:mb-4 px-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3 place-items-center">
                  {features.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#2596be] rounded-full"></span>
                      <p className="text-gray-700 text-xs sm:text-sm text-center">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Features */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 px-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2596be] rounded-full"></span>
                  <p className="text-gray-700 text-xs sm:text-sm text-center">
                    Sapphire crystal for durability
                  </p>
                </div>

                <p className="text-gray-700 text-xs sm:text-sm text-center">
                  GMT function for global synchrony
                </p>
              </div>

              {/* Order Button */}
              <div className="mb-4 sm:mb-5">
                <Link href="/order">
                  <button className="bg-black text-white px-8 sm:px-10 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 active:scale-95 inline-flex items-center gap-3 shadow-lg">
                    <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                      <Image
                        src={newcurrency}
                        alt="Currency Symbol"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-sm sm:text-base">860 Order Now</span>
                  </button>
                </Link>
              </div>

              {/* Limited Edition Badge */}
              <div className="inline-flex items-center gap-2">
                <span className="px-4 py-1.5 text-xs tracking-widest font-semibold text-red-700 border-2 border-red-600 rounded-full uppercase">
                  Limited Edition
                </span>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= TECHNICAL SPECIFICATIONS SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white py-12 sm:py-16 lg:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative">
            {/* Title */}
            <div className="max-w-xl mb-8 sm:mb-12 lg:mb-0">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant text-gray-900 mb-3">
                Technical Specifications
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Seiko NH34 GMT – reliable, accurate, and trusted by global
                enthusiasts.
              </p>
            </div>

            {/* Mobile/Tablet View */}
            <div className="lg:hidden relative min-h-[500px] sm:min-h-[600px] mt-12">
              {/* Specifications positioned around the rotated image */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-black rounded-full"></span>
                  <p className="text-xs sm:text-sm text-gray-700 text-center font-medium">
                    316L Stainless Steel
                  </p>
                </div>
              </div>

              <div className="absolute top-1/3 right-4 sm:right-8 transform -translate-y-1/2 z-10">
                <div className="flex items-center justify-end gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-xs sm:text-sm text-gray-700 text-right font-medium">
                    Polished & Brushed Finish
                  </p>
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-black rounded-full"></span>
                </div>
              </div>

              <div className="absolute top-2/3 left-4 sm:left-8 transform -translate-y-1/2 z-10">
                <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-black rounded-full"></span>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">
                    Thickness: 13mm
                  </p>
                </div>
              </div>

              <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex items-center justify-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-black rounded-full"></span>
                  <p className="text-xs sm:text-sm text-gray-700 text-center font-medium">
                    Diameter: 41mm
                  </p>
                </div>
              </div>

              {/* Rotated Watch Image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[360px] h-[360px] sm:h-[460px]">
                <Image
                  src={Blue3}
                  alt="Montero Watch Technical View"
                  fill
                  className="object-contain -rotate-[20deg] sm:-rotate-[30deg]"
                  sizes="(max-width: 640px) 280px, 360px"
                  quality={85}
                />
              </div>

              {/* Limited Edition Text */}
              <div className="absolute bottom-6 left-4 pointer-events-none">
                <p className="text-xl sm:text-2xl font-serif text-gray-200 leading-none">
                  LIMITED EDITION
                </p>
                <p className="text-lg sm:text-xl font-serif text-gray-200">
                  ONE OF 150
                </p>
              </div>
            </div>

            {/* Desktop View */}
            <div className="hidden lg:block min-h-[700px]">
              {/* RIGHT TOP SPEC */}
              <div className="absolute right-[120px] top-36">
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  <p className="text-sm text-gray-700 w-[160px]">
                    316L Stainless Steel
                  </p>
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
                    Case Thickness: 13mm
                  </p>
                  <span className="w-72 h-px bg-gray-300" />
                </div>
              </div>

              {/* FADED TEXT */}
              <div className="absolute left-12 bottom-40 pointer-events-none">
                <p className="text-5xl xl:text-6xl font-serif text-gray-200 leading-none">
                  LIMITED EDITION
                </p>
                <p className="text-4xl xl:text-5xl font-serif text-gray-200">
                  ONE OF 150
                </p>
              </div>

              {/* BOTTOM LEFT SPEC */}
              <div className="absolute left-[620px] bottom-10">
                <div className="flex items-center gap-4">
                  <span className="w-2 h-2 bg-black rounded-full" />
                  <p className="text-sm text-gray-700 w-[140px]">
                    Diameter: 41mm
                  </p>
                  <span className="w-64 h-px bg-gray-300" />
                </div>
              </div>

              {/* WATCH IMAGE */}
              <div className="absolute left-[750px] top-[-200px] w-[800px] h-[1150px] xl:left-[800px] xl:w-[900px] xl:h-[1250px]">
                <Image
                  src={Blue3}
                  alt="Montero Watch Detailed View"
                  fill
                  priority
                  className="object-contain -rotate-[70deg] scale-110"
                  sizes="900px"
                  quality={85}
                />
              </div>
            </div>
          </div>

          {/* Floating Image */}
          <div className="flex justify-end mt-8 lg:mt-0">
            <span className="inline-block w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mr-4 lg:mr-44 ml-4 lg:ml-12 relative top-4 overflow-hidden">
              <Image
                src={White}
                alt="Montero Watch Side View"
                fill
                className="object-contain rotate-[0.5deg] scale-110"
                sizes="(max-width: 1024px) 160px, 192px"
                quality={85}
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-transparent via-white/70 to-white"></span>
            </span>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= HOW TO SET SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-cormorant text-gray-900 mb-8 sm:mb-12 text-center lg:text-left">
              How to Set Your Montero Watch
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* LEFT CONTENT */}
              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    title: "Section 1 – Setting Local Time",
                    items: [
                      "Pull the crown to Position 2",
                      "Rotate to adjust the main hour and minute hands",
                      "Push the crown back to lock",
                    ],
                  },
                  {
                    title: "Section 2 – Setting GMT Hand",
                    items: [
                      "Pull the crown to Position 1",
                      "Rotate clockwise to move the GMT hand in 1-hour increments",
                      "Set it to a second time zone of your choice",
                    ],
                  },
                  {
                    title: "Section 3 – Using the Beach Time System",
                    items: [
                      "Each beach on the dial corresponds to its GMT offset",
                      "Choose the beach you want, match its time zone with your GMT hand, and enjoy instant global reference.",
                    ],
                  },
                ].map((section, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 bg-[#2596be] rounded-full flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* RIGHT VIDEO */}
              <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl">
                <video
                  src="/images/Gallery/galleryV.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  aria-label="Instructional video on setting your Montero watch"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                  Watch Tutorial
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= SPLIT IMAGE/TEXT SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="w-full flex flex-col lg:flex-row relative">
          {/* LEFT — Image */}
          <div className="relative w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[531px]">
            <Image
              src={Blue4}
              alt="Montero Watch Design Blueprint"
              fill
              className="object-cover lg:object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1A1E28] via-transparent to-transparent"></div>
          </div>

          {/* RIGHT — Content */}
          <div className="w-full lg:w-1/2 bg-[#1A1E28] flex items-center px-4 sm:px-6 lg:px-12 xl:px-20 py-12 lg:py-0">
            <div className="max-w-xl mx-auto lg:mx-0">
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4 sm:mb-6">
                A World Time Watch Inspired by Global Beaches
              </h2>

              <p className="font-light text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed mb-6">
                Crafted for explorers, dreamers, and lovers of the world&apos;s
                most iconic beaches
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white py-12 sm:py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-sm text-gray-500 mb-2">Client Feedback</p>

                <h2 className="text-2xl sm:text-3xl font-cormorant text-gray-900 mb-4 sm:mb-6 leading-snug">
                  What They Say After Using Our Product
                </h2>

                <p className="text-gray-600 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
                  Hear from our community of watch enthusiasts and world
                  travelers.
                </p>

                {/* Arrows */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrevTestimonial}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors duration-300"
                    aria-label="Previous testimonial"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNextTestimonial}
                    className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors duration-300"
                    aria-label="Next testimonial"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* TESTIMONIAL CARDS */}
              <div className="lg:col-span-3">
                {/* Mobile Carousel */}
                <div className="lg:hidden">
                  <div className="pb-6 border-b">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map(
                        (_, j) => (
                          <span key={j} className="text-yellow-500 text-sm">
                            ★
                          </span>
                        )
                      )}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {testimonials[currentTestimonial].text}
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {testimonials[currentTestimonial].name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonials[currentTestimonial].role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Dots Indicator */}
                  <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentTestimonial(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === currentTestimonial
                            ? "bg-black"
                            : "bg-gray-300"
                        }`}
                        aria-label={`Go to testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Desktop Grid */}
                <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {testimonials.map((testimonial, i) => (
                    <div
                      key={i}
                      className="pb-8 hover:transform hover:scale-[1.02] transition-transform duration-300"
                    >
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, j) => (
                          <span key={j} className="text-yellow-500 text-sm">
                            ★
                          </span>
                        ))}
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-4">
                        {testimonial.text}
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="40px"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= FAQ + SUBSCRIBE ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-24">
          <div className="mx-auto max-w-7xl">
            {/* FAQ ROW */}
            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-16 md:grid-cols-2 items-start">
              {/* LEFT TEXT */}
              <ScrollAnimation animationClass="animate-slide-in-left">
                <div>
                  <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-gray-700">
                    Frequently Asked Question
                  </h2>

                  <p className="mt-3 sm:mt-4 lg:mt-6 max-w-md text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed transition-opacity duration-300 hover:opacity-80">
                    Each beach was chosen for its cultural significance, beauty,
                    and global reputation — together forming the emotional core
                    of Montero Arabic Edition.
                  </p>
                </div>
              </ScrollAnimation>

              {/* RIGHT FAQ LIST */}
              <ScrollAnimation animationClass="animate-slide-in-right">
                <div className="space-y-3 sm:space-y-4 lg:space-y-6">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="border-b border-gray-200 pb-3 sm:pb-4 transition-all duration-300 hover:border-gray-400"
                    >
                      <button
                        onClick={() => setOpen(open === i ? null : i)}
                        className="flex w-full items-center justify-between text-left text-xs sm:text-sm lg:text-base text-black transition-colors duration-300 hover:text-gray-600"
                      >
                        <span className="pr-4">{faq.question}</span>
                        <span
                          className="text-lg sm:text-xl flex-shrink-0 transition-transform duration-300"
                          style={{
                            transform:
                              open === i ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        >
                          {open === i ? "−" : "+"}
                        </span>
                      </button>

                      {open === i && (
                        <p className="mt-2 sm:mt-3 lg:mt-4 max-w-md text-xs sm:text-sm text-gray-600 animate-fade-in-down">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollAnimation>
            </div>

            {/* SUBSCRIBE ROW */}
            <ScrollAnimation animationClass="animate-fade-in-up">
              <div className="mt-8 sm:mt-12 lg:mt-24 grid grid-cols-1 items-center gap-6 sm:gap-8 lg:gap-12 md:grid-cols-2">
                {/* LEFT TEXT */}
                <ScrollAnimation animationClass="animate-slide-in-left">
                  <div>
                    <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-gray-700">
                      Subscribe for Exclusive Updates
                    </h2>

                    <p className="mt-2 sm:mt-3 lg:mt-4 max-w-md text-xs sm:text-sm lg:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                      Join our mailing list to receive early access,
                      limited-edition alerts, and insider updates directly from
                      the Montero Arabic Edition team.
                    </p>
                  </div>
                </ScrollAnimation>

                {/* RIGHT */}
                <ScrollAnimation animationClass="animate-slide-in-right">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
                    <div className="flex items-center bg-gray-200 px-3 sm:px-4 py-2 sm:py-3 w-full">
                      <Mail className="mr-2 sm:mr-3 w-4 h-4 sm:w-5 sm:h-5" />
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        className="bg-transparent outline-none w-full text-xs sm:text-sm placeholder:text-gray-500"
                      />
                    </div>

                    <button className="bg-black text-white px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition">
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