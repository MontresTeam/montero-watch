"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";

// ICONS
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

import About1 from "@/public/images/About/gmt compass image.jpg";
import About2 from "@/public/images/About/gmt compass image2.jpg";
import About3 from "@/public/images/About/about3.jpg";
import About4 from "@/public/images/About/about4.jpg";
import About5 from "@/public/images/About/about5.jpg";
import About6 from "@/public/images/About/about6.jpeg";

import api from "@/lib/api";
import { toast } from "react-toastify";
import { Mail } from "lucide-react";

export default function Page() {
  const [open, setOpen] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/user/subscribe", { email });
      toast.success(response.data.message || "Subscribed successfully!");
      setEmail("");
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.response?.data?.message || "Failed to subscribe";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    "Do the watches come with a warranty?",
    "Are the watches scratch-resistant?",
    "What materials are used to make your watches?",
    "How can I place an order?",
  ];

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="relative h-screen w-full overflow-hidden">
          <Image
            src={About1}
            alt="Hero"
            fill
            priority
            className="object-cover object-[center_10%] transition-transform duration-[8000ms] ease-out hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-700" />
          <div className="relative z-10 flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl text-center text-white animate-fade-in-up">
              <h1 className="font-cormorant text-[clamp(1.6rem,5vw,3.2rem)] leading-[1.15]">
                A World Time Watch Inspired by Global Beaches
              </h1>

              <p className="mt-2 text-sm sm:text-base lg:text-lg opacity-90 animate-fade-in-up-delayed">
                Crafted for explorers, dreamers, and lovers of the world’s
                iconic beaches
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= ABOUT ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2">
            <ScrollAnimation animationClass="animate-slide-in-left">
              <div>
                <button className="inline-block bg-gray-200 px-4 py-1 text-xs sm:text-sm text-gray-700 shadow-sm">
                  About us
                </button>

                <h2 className="font-cormorant mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl">
                  The Story Behind Montero
                </h2>

                <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-gray-700 leading-relaxed">
                  Montero was born from a passion for time, travel, and
                  exploration. Inspired by iconic beaches, global journeys, and
                  the freedom of adventure, Montero represents moments where
                  time is lived, not rushed. Backed by over 35 years of
                  watchmaking experience, Montero focuses on what truly matters
                  - quality, reliability, and thoughtful design. Each Montero
                  watch blends precise engineering with purposeful detail,
                  created for those who value craftsmanship and believe time is
                  measured through experiences. Montero is not just about where
                  time takes you, it’s about choosing your direction before
                  time.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-right">
              <div className="relative h-[260px] sm:h-[340px] lg:h-[460px] overflow-hidden group">
                <Image
                  src={About2}
                  alt="About"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= VALUES ================= */}
      <ScrollAnimation animationClass="animate-fade-in-up">
        <section className="bg-white px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-8 sm:pb-10 lg:pb-12">
          <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
            <ScrollAnimation animationClass="animate-slide-in-up" delay={0}>
              <ValueCard
                img={About3}
                title="Adventure"
                text="For those who never stop exploring"
              />
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-up" delay={200}>
              <ValueCard
                img={About4}
                title="Precision"
                text="Powered by reliable world-time engineering"
              />
            </ScrollAnimation>

            <ScrollAnimation animationClass="animate-slide-in-up" delay={400}>
              <ValueCard
                img={About5}
                title="Culture"
                text="Celebrating iconic beaches across the globe"
              />
            </ScrollAnimation>
          </div>
        </section>
      </ScrollAnimation>

      {/* ================= FAQ + SUBSCRIBE ================= */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-7xl">
          {/* FAQ ROW */}
          <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2 items-start">
            {/* LEFT TEXT */}
            <ScrollAnimation animationClass="animate-slide-in-left">
              <div>
                <h2 className="font-cormorant text-3xl sm:text-4xl lg:text-5xl">
                  Frequently Asked Question
                </h2>

                <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base text-gray-600 leading-relaxed">
                  Each beach was chosen for its cultural significance, beauty,
                  and global reputation — together forming the emotional core
                  of Montero.
                </p>
              </div>
            </ScrollAnimation>

            {/* RIGHT FAQ LIST */}
            <ScrollAnimation animationClass="animate-slide-in-right">
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((q, i) => (
                  <div
                    key={i}
                    className="border-b border-gray-200 pb-3 transition-all duration-300 hover:border-gray-400"
                  >
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="flex w-full items-center justify-between text-left text-sm sm:text-base text-black"
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
                      <p className="mt-2 sm:mt-3 max-w-md text-xs sm:text-sm text-gray-600 animate-fade-in-down">
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
          <div className="mt-16 sm:mt-24 lg:mt-32 grid grid-cols-1 items-center gap-8 lg:gap-12 md:grid-cols-2">
            {/* LEFT TEXT */}
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

            {/* RIGHT */}
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex items-center bg-gray-200 px-4 py-3 w-full">
                <Mail className="mr-4" />
                <input
                  type="email"
                  required
                  placeholder="Enter your e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent outline-none w-full text-xs sm:text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-6 sm:px-8 py-3 text-xs sm:text-sm whitespace-nowrap hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe Now"}
              </button>
            </form>
          </div>
        </div>
      </section>

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
      className={`transition-opacity ${isVisible ? animationClass : "opacity-0"
        }`}
    >
      {children}
    </div>
  );
}

/* ================= COMPONENTS ================= */

function BlueInfoCard() {
  return (
    <div className="w-[300px] sm:w-[320px] h-[360px] sm:h-[400px] bg-[#0f1e33] p-6 sm:p-8 text-white flex flex-col justify-between transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <div>
        <h3 className="font-cormorant text-xl">Della R. Thomas</h3>
        <p className="text-sm opacity-80">CEO</p>

        <p className="mt-6 text-sm opacity-70 leading-relaxed">
          Each beach was chosen for its cultural significance, beauty, and
          global reputation — together forming the emotional core of Montero.
        </p>
      </div>

      <div className="flex gap-5 text-lg opacity-80">
        <FaInstagram className="cursor-pointer hover:scale-110 transition" />
        <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
        <FaXTwitter className="cursor-pointer hover:scale-110 transition" />
      </div>
    </div>
  );
}

function TeamGroupCard({ img }) {
  return (
    <div className="relative w-[520px] sm:w-[580px] lg:w-[620px] h-[360px] sm:h-[400px] overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      <Image
        src={img}
        alt="Team"
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-500" />

      {/* PEOPLE DETAILS */}
    </div>
  );
}

function ValueCard({ img, title, text }) {
  return (
    <div className="relative h-[280px] sm:h-[350px] lg:h-[420px] overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      {" "}
      <Image
        src={img}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />{" "}
      <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/30" />{" "}
      <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
        {" "}
        <h3 className="font-mona text-xl sm:text-2xl transition-all duration-300">
          {title}
        </h3>{" "}
        <p className="text-xs sm:text-sm transition-all duration-300 mt-1">
          {text}
        </p>{" "}
      </div>{" "}
    </div>
  );
}
