"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";

import Blog1 from "@/public/images/Blog/blog1.jpg";
import Blog2 from "@/public/images/Blog/gmt2.png";
import Blog3 from "@/public/images/Blog/gmt3.jpg";
import Blog4 from "@/public/images/Blog/gmt4.jpg";
import Blog5 from "@/public/images/Blog/gmt5.png";
import Blog6 from "@/public/images/Blog/gmt1.jpg";
import Blog7 from "@/public/images/Blog/gmt6.png";
import Blog8 from '@/public/images/Blog/gmt11.jpg';

import { Mail } from "lucide-react";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={Blog1}
            alt="Montero GMT Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_10%] transition-transform duration-[8000ms] ease-out hover:scale-105"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-700" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center text-white animate-fade-in-up">
            <h1 className="font-cormorant text-[clamp(2rem,6vw,4rem)] leading-tight">
              Montero GMT – Exclusive Production Update
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg opacity-90 px-4 leading-relaxed">
              Enhanced Lume, Refined Details & Final Engineering Improvements
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1.5 text-xs sm:text-sm rounded-full">
              Production Update
            </span>

            <h2 className="font-cormorant mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-5xl">
              Welcome Back, Montero Community
            </h2>

            <p className="mt-6 text-sm sm:text-base text-gray-600 leading-relaxed">
              Thank you for your continued trust and patience. We re excited to
              share a new exclusive production update for the Montero GMT,
              following weeks of intensive refinement, testing, and
              collaboration.
              <br />
              <br />
              Our focus has been on enhancing legibility, night visibility, and
              overall functional precision — while maintaining the distinctive
              identity that defines Montero.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= CONTENT BLOCKS ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            <BlogCard
              img={Blog2}
              category="Lume Upgrade"
              date="Production Locked"
              title="Enhanced Super-LumiNova"
              desc="Only land areas of the earth map receive lume for higher contrast. Blue Edition emits blue lume, Green Edition emits green lume."
            />

            <BlogCard
              img={Blog3}
              category="GMT Function"
              date="Verified"
              title="Improved GMT Hand Visibility"
              desc="The enlarged red GMT pointer ensures faster recognition, balanced proportions, and improved night performance."
            />

            <BlogCard
              img={Blog4}
              category="Design Refinement"
              date="Finalized"
              title="Refined Buckle Design"
              desc="The buckle now features only the Montero logo. All additional markings have been removed for clean finish."
            />

            <BlogCard
              img={Blog5}
              category="Ergonomics"
              date="Optimized"
              title="GMT Crown Optimization"
              desc="The GMT crown will be partially or fully hidden depending on final ergonomic validation."
            />

            <BlogCard
              img={Blog6}
              category="Construction"
              date="Confirmed"
              title="Screw-Down Caseback"
              desc="A screw-down caseback ensures durability and reliability with limited edition serial numbering."
            />

            <BlogCard
              img={Blog7}
              category="Performance"
              date="Tested"
              title="GMT Mechanism Fully Verified"
              desc="The GMT function operates independently and accurately across time zones."
            />

            <BlogCard
              img={Blog8}
              category="Engineering"
              date="Completed"
              title="Movement Precision Tuned"
              desc="Advanced calibration ensures ±2 seconds per day accuracy in all conditions."
            />

            <BlogCard
              img={Blog2}
              category="Materials"
              date="Upgraded"
              title="Premium Ceramic Bezel"
              desc="Scratch-resistant ceramic bezel with enhanced color retention and clarity."
            />
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= SUBSCRIBE ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-14 sm:pb-18 lg:pb-20">
          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            
            {/* LEFT */}
            <div>
              <h2 className="font-cormorant text-[1.65rem] sm:text-[2.1rem] lg:text-[2.6rem] leading-tight">
                Stay Connected with Montero
              </h2>
              <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-gray-600 leading-relaxed">
                Receive transparent updates, early access announcements, and
                limited-edition alerts directly from the Montero team.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex items-center bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 w-full">
                <Mail className="mr-3 h-[18px] w-[18px] text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="bg-transparent outline-none w-full text-sm sm:text-base placeholder-gray-500"
                />
              </div>

              <button className="bg-black text-white px-5 py-3 text-sm sm:text-base whitespace-nowrap rounded-lg hover:opacity-90 transition-all duration-300 font-medium">
                Subscribe Now
              </button>
            </div>

          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </>
  );
}

/* ================= SCROLL ANIMATION ================= */
function ScrollAnimation({ children, animationClass, delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, [delay]);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ${isVisible ? animationClass : "opacity-0 translate-y-8"}`}
    >
      {children}
    </div>
  );
}

/* ================= BLOG CARD ================= */
function BlogCard({ img, category, date, title, desc }) {
  return (
    <div className="group cursor-pointer hover:-translate-y-1 transition-all duration-300">
      <div className="relative h-[180px] sm:h-[200px] md:h-[220px] w-full overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="mt-4 sm:mt-5 flex gap-2 text-xs text-gray-500">
        <span className="font-medium bg-gray-100 px-2 py-1 rounded">{category}</span>
        <span className="flex items-center">•</span>
        <span className="text-gray-400">{date}</span>
      </div>

      <h3 className="mt-3 font-mona text-base sm:text-lg font-semibold line-clamp-2">
        {title}
      </h3>

      <p className="mt-2 text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
        {desc}
      </p>
      
      <div className="mt-3 pt-3 border-t border-gray-100">
        <span className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
          Read more →
        </span>
      </div>
    </div>
  );
}