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
import Blog8 from "@/public/images/Blog/gmt11.jpg";

import { Mail, ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-[65vh] sm:h-screen w-full overflow-hidden">
        <Image
          src={Blog1}
          alt="Montero GMT Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white">
            <h1 className="font-cormorant text-[clamp(1.75rem,5vw,3.5rem)]">
              Montero GMT – Exclusive Production Update
            </h1>
            <p className="mt-4 text-sm sm:text-base opacity-90">
              Enhanced Lume, Refined Details & Final Engineering Improvements
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 py-14">
          <div className="mx-auto max-w-3xl text-center">

            <h2 className="font-cormorant mt-6 text-3xl">
              Welcome Back, Montero Community
            </h2>

            <p className="mt-5 text-gray-600 text-sm leading-relaxed">
              Thank you for your continued trust and patience. We&apos;re excited
              to share a new exclusive production update for the Montero GMT.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= BLOG GRID ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 pb-20">
          <div className="mx-auto max-w-7xl">

            <div className="text-center mb-12">
              <h2 className="font-cormorant text-3xl">
                Latest Updates & Features
              </h2>
              <p className="mt-2 text-gray-600 text-sm max-w-xl mx-auto">
                Explore the latest refinements and improvements in the Montero GMT
              </p>
            </div>

            {/* 🔥 FIXED GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              <BlogCard img={Blog2} category="Lume Upgrade" date="Production Locked"
                title="Enhanced Super-LumiNova"
                desc="Only land areas receive lume for higher contrast." />

              <BlogCard img={Blog3} category="GMT Function" date="Verified"
                title="Improved GMT Hand Visibility"
                desc="Enlarged red GMT pointer improves recognition." />

              <BlogCard img={Blog4} category="Design Refinement" date="Finalized"
                title="Refined Buckle Design"
                desc="Clean buckle with Montero logo only." />

              <BlogCard img={Blog5} category="Ergonomics" date="Optimized"
                title="GMT Crown Optimization"
                desc="Partially hidden crown for better comfort." />

              <BlogCard img={Blog6} category="Construction" date="Confirmed"
                title="Screw-Down Caseback"
                desc="Durable caseback with limited serial numbers." />

              <BlogCard img={Blog7} category="Performance" date="Tested"
                title="GMT Mechanism Verified"
                desc="Independent and accurate time zone tracking." />

              <BlogCard img={Blog8} category="Engineering" date="Completed"
                title="Movement Precision Tuned"
                desc="±2 seconds per day accuracy." />

              <BlogCard img={Blog2} category="Materials" date="Upgraded"
                title="Ceramic Bezel"
                desc="Scratch-resistant ceramic bezel." />
            </div>
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </>
  );
}

/* ================= SCROLL ANIMATION ================= */
function ScrollAnimation({ children, animationClass }) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.15 }
    );
    ref.current && observer.observe(ref.current);
  }, []);

  return (
    <div ref={ref} className={`${show ? animationClass : "opacity-0 translate-y-6"} transition-all duration-700`}>
      {children}
    </div>
  );
}

/* ================= BLOG CARD ================= */
function BlogCard({ img, category, date, title, desc }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition">

      {/* ✅ IMAGE FIX */}
      <div className="relative w-full aspect-[4/3] bg-gray-100">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 25vw"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex gap-2 text-[11px] text-gray-500 mb-2">
          <span className="bg-gray-100 px-2 py-1 rounded">{category}</span>
          <span>{date}</span>
        </div>

        <h3 className="font-semibold text-sm mb-2 line-clamp-2">
          {title}
        </h3>

        <p className={`text-xs text-gray-600 leading-relaxed ${open ? "" : "line-clamp-3"}`}>
          {desc}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="mt-3 text-xs text-gray-500 hover:text-black flex items-center gap-1"
        >
          {open ? "Read less" : "Read more"}
          <ArrowRight className={`h-3 w-3 ${open && "rotate-90"}`} />
        </button>
      </div>
    </div>
  );
}
