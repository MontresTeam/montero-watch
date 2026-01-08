"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import Link from 'next/link'
import Blog1 from "@/public/images/Blog/blog1.jpg";
import Blog2 from "@/public/images/Blog/blog2.jpg";
import Blog3 from "@/public/images/Blog/blog3.jpg";
import Blog4 from "@/public/images/Blog/blog4.jpg";
import Blog5 from "@/public/images/Blog/blog5.jpg";
import Blog6 from "@/public/images/Blog/blog6.jpg";
import Blog7 from "@/public/images/Blog/blog7.jpg";

import { Mail } from "lucide-react";

export default function Page() {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={Blog1}
          alt="Hero"
          fill
          priority
          className="object-cover object-[center_10%] transition-transform duration-[8000ms] ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-700" />
        <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-center text-white animate-fade-in-up">
            <h1 className="font-cormorant text-[clamp(2rem,6vw,4rem)] leading-tight">
              From the Montero Journal
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg opacity-90 animate-fade-in-up-delayed px-4 leading-relaxed">
              Montero Journal brings you stories inspired by time, design, and
              craftsmanship. Discover insights into watchmaking, style, and
              modern precision. Each article reflects our passion for quality
              and detail. Explore the world of Montero beyond the watch.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BLOG INTRO ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
          <button className="inline-block bg-gray-200 px-4 py-1 text-xs sm:text-sm">
          Blog
          </button>

            <h2 className="font-cormorant mt-6 sm:mt-8 text-3xl sm:text-4xl lg:text-5xl">
              Latest insights and trends
            </h2>

            <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600 max-w-xl mx-auto leading-relaxed px-4">
              Stay updated with the latest insights, design trends, and
              craftsmanship stories from the world of Montero watches.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= BLOG CARDS ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation animationClass="animate-slide-in-up" delay={0}>
              <Link href="review/blog">
                <BlogCard
                img={Blog2}
                category="Travel"
                date="11 March 2023"
                title="Train Or Bus Journey? Which one suits?"
                desc="The choice between a train or bus journey depends on various factors such as the distance of the journey, the available time, the cost, and personal preferences."
              />
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-up" delay={100}>
              <Link href="/review/blog">
                <BlogCard
                img={Blog3}
                category="Design"
                date="11 March 2023"
                title="Best Website to research for your next project"
                desc="Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs."
              />
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-up" delay={200}>
              <Link href="review/blog">
                <BlogCard
                img={Blog4}
                category="Sports"
                date="10 March 2023"
                title="How to Be a Dancer in 2023 with proper skills?"
                desc="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
              />
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-up" delay={0}>
              <Link href="review/blog">
                <BlogCard
                img={Blog5}
                category="Sports"
                date="10 March 2023"
                title="How to Be a Dancer in 2023 with proper skills?"
                desc="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
              />
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-up" delay={100}>
              <Link href="review/blog">
                <BlogCard
                img={Blog6}
                category="Sports"
                date="10 March 2023"
                title="How to Be a Dancer in 2023 with proper skills?"
                desc="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
              />
              </Link>
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-up" delay={200}>
              <Link href="review/blog">
                <BlogCard
                img={Blog7}
                category="Sports"
                date="10 March 2023"
                title="How to Be a Dancer in 2023 with proper skills?"
                desc="Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."
              />
              </Link>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= SUBSCRIBE SECTION ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-28">
          <div className="mx-auto max-w-7xl">
            {/* SUBSCRIBE ROW */}
            <div className="grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
              {/* LEFT TEXT */}
              <ScrollAnimation animationClass="animate-slide-in-left">
                <div>
                  <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl transition-colors duration-300 hover:text-gray-700">
                    Subscribe for Exclusive Updates
                  </h2>

                  <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-gray-600 transition-opacity duration-300 hover:opacity-80 leading-relaxed">
                    Join our mailing list to receive early access, limited-edition
                    alerts, and insider updates directly from the Montero team.
                  </p>
                </div>
              </ScrollAnimation>

              {/* RIGHT */}
              <ScrollAnimation animationClass="animate-slide-in-right">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex items-center bg-gray-200 px-4 py-3 w-full">
                    <Mail className="mr-4" />
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
          </div>
        </section>
      </ScrollAnimation>

      <Footer />
    </>
  );
}

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
      className={`transition-opacity ${isVisible ? animationClass : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

/* ================= BLOG CARD COMPONENT ================= */
function BlogCard({ img, category, date, title, desc }) {
  return (
    <div className="group">
      <div className="relative h-[200px] sm:h-[220px] lg:h-[240px] w-full overflow-hidden rounded-xl">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4 sm:mt-5 flex gap-3 text-xs sm:text-sm text-gray-500">
        <span>{category}</span>
        <span>•</span>
        <span>{date}</span>
      </div>

      <h3 className="mt-2 sm:mt-3 font-mona text-lg sm:text-xl leading-snug transition-colors duration-300 hover:text-gray-700">
        {title}
      </h3>

      <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
        {desc}
      </p>

      <a
        href="#"
        className="mt-3 sm:mt-4 inline-block text-xs sm:text-sm text-blue-600 hover:underline transition-colors duration-300"
      >
        Read More...
      </a>
    </div>
  );
}