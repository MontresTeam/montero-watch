"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/app/components/navBar/NavBar";
import Footer from "@/app/components/home/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FaArrowLeft } from "react-icons/fa6";
import InnerBlog1 from "@/public/images/Blog/innerBlog1.jpg";
import Blog5 from "@/public/images/Blog/gmt2.png";
import Blog6 from "@/public/images/Blog/gmt3.jpg";
import Blog7 from "@/public/images/Blog/gmt11.jpg";

const Page = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <ScrollAnimation animationClass="animate-fade-in">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8 sm:pb-12">
          <div className="mx-auto max-w-7xl">
            {/* TOP BAR */}
            <div className="mb-8 sm:mb-10 flex items-center gap-4 sm:gap-6">
              {/* BACK BUTTON - Fixed to go back to reviews page */}
              <Link
                href="/reviews" // Changed from "/review" to "/reviews" (assuming this is your reviews page)
                className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-gray-300 transition-all duration-300 hover:bg-gray-100 hover:border-gray-400"
              >
                <FaArrowLeft className="text-xs sm:text-sm" />
              </Link>

              {/* DATE */}
              <span className="text-xs sm:text-sm text-gray-400">
                Date&nbsp;&nbsp;20 Dec 2025
              </span>
            </div>

            {/* TITLE */}
            <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black max-w-5xl">
              Montero GMT – Exclusive Production Update
            </h1>
          </div>
        </section>
      </ScrollAnimation>

      {/* HERO IMAGE - Fixed with proper image configuration */}
      <ScrollAnimation animationClass="animate-slide-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="relative h-[280px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-lg">
              <Image
                src={InnerBlog1} // Ensure this image is high-resolution in your public folder
                alt="Montero GMT Hero - Exclusive Production Update"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover"
                quality={90} // Increased quality
                placeholder="blur" // Add blur placeholder if image supports it
              />
            </div>
            {/* Optional: Add image caption */}
            <p className="text-xs text-gray-500 mt-2 text-center italic">
              Montero GMT - Final Production Sample
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* BLOG CONTENT */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-5 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p>By Montero Watches</p>

              <hr className="my-6 border-gray-300" />

              <p>Welcome Back, Montero Community</p>

              <p>
                Thank you for your continued trust and patience. Were excited
                to share a new exclusive production update for the Montero GMT,
                following weeks of intensive refinement, testing, and
                collaboration.
              </p>

              <p>
                Over the past period, our focus has been on enhancing
                legibility, night visibility, and overall functional precision,
                while maintaining the distinctive identity that defines Montero.
              </p>

              <p>
                Below are the latest confirmed updates now locked into
                production.
              </p>

              {/* Enhanced Lume Section */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                Enhanced Super-LumiNova – Clearer, Stronger, More Purposeful
              </h2>
              <p>
                We ve refined the lume application to ensure superior night-time
                readability while preserving visual balance during the day.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Earth map: Only the land areas are treated with Super-LumiNova
                  for improved contrast and a cleaner night appearance.
                </li>
                <li>Blue Edition: Emits a blue lume glow at night.</li>
                <li>Green Edition: Emits a green lume glow at night.</li>
                <li>
                  GMT Red Pointer: Now larger, more legible, and filled with
                  red lume for instant GMT reference.
                </li>
              </ul>

              {/* GMT Hand Visibility */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                Improved GMT Hand Visibility
              </h2>
              <p>
                The red GMT pointer has been intentionally enlarged to improve
                readability across time zones, especially in low-light
                conditions.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Faster GMT recognition</li>
                <li>Balanced dial proportions</li>
                <li>Enhanced night performance</li>
              </ul>

              {/* Buckle Design */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                Refined Buckle Design – Minimal & Elegant
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>The buckle will feature the Montero logo only</li>
                <li>
                  All additional markings have been removed for a refined finish
                </li>
              </ul>

              {/* GMT Crown */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                GMT Crown Optimization
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  The GMT crown will be partially or fully hidden, depending on
                  final ergonomic validation
                </li>
                <li>This improves wearability without affecting functionality</li>
              </ul>

              {/* Caseback */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                Screw-Down Caseback – Finalized
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Improved durability</li>
                <li>Secure construction</li>
                <li>Long-term reliability</li>
                <li>Limited Edition serial numbering</li>
                <li>Clear English & Arabic lettering</li>
                <li>
                  Optimized font size and engraving depth for clarity
                </li>
              </ul>

              {/* GMT Function */}
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl mt-8">
                GMT Function – Fully Verified
              </h2>
              <p>
                We confirm that the GMT mechanism is working accurately and
                independently, ensuring correct time zone tracking without
                interference.
              </p>
              <p>
                This was a critical functional checkpoint and is now fully
                validated.
              </p>

              <p className="mt-6">
                We ll continue sharing transparent updates as we move closer to
                delivery.
              </p>

              <p>Thank you for being part of the Montero journey</p>

              <p className="mt-6 font-cormorant text-lg">
                Montero Watches
                <br />
                Designed for explorers. Built for precision.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* POPULAR POST SECTION - Fixed links to connect properly */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 sm:mb-12 flex items-center justify-between">
              <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl">
                Popular Posts
              </h2>

              <Link href="/reviews"> {/* Fixed to /reviews */}
                <button className="bg-black text-white px-5 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm rounded-md transition-all duration-300 hover:bg-gray-800 active:scale-95">
                  View All
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
              <ScrollAnimation animationClass="animate-slide-in-up" delay={0}>
                <BlogCard
                  img={Blog5}
                  category="Watches"
                  date="9 March 2025"
                  title="The Evolution of GMT Watches: A Comprehensive Guide"
                  desc="Explore the history and technical advancements of GMT watches, from their origins to modern innovations."
                  href="/reviews/gmt-evolution" // Added href prop
                />
              </ScrollAnimation>

              <ScrollAnimation animationClass="animate-slide-in-up" delay={100}>
                <BlogCard
                  img={Blog6}
                  category="Design"
                  date="8 March 2025"
                  title="Montero Design Philosophy: Where Tradition Meets Innovation"
                  desc="Discover how Montero combines traditional watchmaking techniques with modern design principles."
                  href="/reviews/design-philosophy" // Added href prop
                />
              </ScrollAnimation>

              <ScrollAnimation animationClass="animate-slide-in-up" delay={200}>
                <BlogCard
                  img={Blog7}
                  category="Technology"
                  date="7 March 2025"
                  title="Advanced Lume Technology in Modern Watchmaking"
                  desc="Understanding the science behind Super-LumiNova and how it enhances watch legibility in all conditions."
                  href="/reviews/lume-technology" // Added href prop
                />
              </ScrollAnimation>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* SUBSCRIBE SECTION */}
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
              {/* LEFT TEXT */}
                <div>
                  <h2 className="font-cormorant text-2xl sm:text-3xl lg:text-4xl xl:text-5xl transition-colors duration-300 hover:text-gray-700">
                    Subscribe for Exclusive Updates
                  </h2>

                  <p className="mt-3 sm:mt-4 lg:mt-6 max-w-md text-xs sm:text-sm lg:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                    Join our mailing list to receive early access,
                    limited-edition alerts, and insider updates directly from
                    the Montero team.
                  </p>
                </div>

              {/* RIGHT FORM */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center bg-gray-100 px-4 py-3 sm:py-4 w-full rounded-md transition-all duration-300 hover:bg-gray-200">
                    <Mail className="mr-4" />
                    <input
                      type="email"
                      placeholder="Enter your e-mail"
                      className="bg-transparent outline-none w-full text-xs sm:text-sm placeholder:text-gray-400"
                    />
                  </div>

                  <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap rounded-md transition-all duration-300 hover:bg-gray-800 active:scale-95">
                    Subscribe Now
                  </button>
                </div>
            </div>
          </div>
        </section>

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
      className={`transition-all duration-700 ease-out ${
        isVisible ? animationClass : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

/* ================= BLOG CARD COMPONENT - Updated ================= */
function BlogCard({ img, category, date, title, desc, href = "#" }) {
  return (
    <Link href={href} className="group cursor-pointer block">
      <div className="relative h-[220px] sm:h-[240px] lg:h-[260px] w-full overflow-hidden rounded-lg">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          quality={85}
        />
      </div>

      <div className="mt-4 sm:mt-5 flex gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
        <span className="transition-colors duration-300 hover:text-gray-700">
          {category}
        </span>
        <span>•</span>
        <span>{date}</span>
      </div>

      <h3 className="mt-2 sm:mt-3 font-mona text-base sm:text-lg lg:text-xl leading-snug transition-colors duration-300 group-hover:text-gray-700">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
        {desc}
      </p>

      <div className="mt-3 sm:mt-4 inline-block text-xs sm:text-sm text-blue-600 transition-all duration-300 hover:text-blue-700 hover:underline group-hover:translate-x-1">
        Read More...
      </div>
    </Link>
  );
}