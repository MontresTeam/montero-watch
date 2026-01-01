"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";

import About1 from "@/public/images/About/about1.jpg";
import About2 from "@/public/images/About/about2.jpg";
import About3 from "@/public/images/About/about3.jpg";
import About4 from "@/public/images/About/about4.jpg";
import About5 from "@/public/images/About/about5.jpg";
import About6 from "@/public/images/About/about6.jpg";

export default function Page() {
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

      {/* ================= HERO ================= */}
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src={About1}
          alt="Hero"
          fill
          priority
          className="object-cover object-[center_10%] transition-transform duration-[8000ms] ease-out hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 transition-opacity duration-700" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white animate-fade-in-up">
            <h1 className="font-cormorant text-[clamp(2rem,6vw,4rem)]">
              A World Time Watch Inspired by Global Beaches
            </h1>
            <p className="font-mona mt-4 opacity-90 animate-fade-in-up-delayed">
              Crafted for explorers, dreamers, and lovers of the world's iconic
              beaches
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="animate-slide-in-left">
            <button className="inline-block bg-gray-200 px-4 py-1 text-sm font-mona text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.96] active:shadow-inner">
              About us
            </button>
            <h2 className="font-cormorant mt-6 text-4xl md:text-5xl transition-colors duration-300 hover:text-gray-700">
              The Story Behind Montero
            </h2>
            <p className="font-mona mt-6 max-w-xl text-gray-700 transition-opacity duration-300 hover:opacity-80">
              Montero was born from a deep appreciation for the world, its
              diversity, and the timeless beauty of global coastlines.
            </p>
          </div>

          <div className="relative h-[520px] animate-slide-in-right overflow-hidden group">
            <Image 
              src={About2} 
              alt="About" 
              fill 
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
            />
          </div>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-white px-6 pt-12 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <ValueCard
            img={About3}
            title="Adventure"
            text="For those who never stop exploring"
          />
          <ValueCard
            img={About4}
            title="Precision"
            text="Powered by reliable world-time engineering"
          />
          <ValueCard
            img={About5}
            title="Culture"
            text="Celebrating iconic beaches across the globe"
          />
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-start justify-between">
            <div className="animate-fade-in">
              <button className="inline-block bg-gray-200 px-4 py-1 text-sm font-mona text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-300 hover:shadow-md hover:-translate-y-0.5 active:scale-[0.96] active:shadow-inner">
                Our Team
              </button>
              <h2 className="font-cormorant mt-6 text-4xl md:text-5xl transition-colors duration-300 hover:text-gray-700">
                The People Behind Montero
              </h2>
              <p className="font-mona mt-4 max-w-md text-gray-600 transition-opacity duration-300 hover:opacity-80">
                Crafted by passionate professionals committed to precision and
                quality
              </p>
            </div>

            <div className="hidden md:flex gap-3 animate-fade-in-delayed">
              <button className="h-10 w-10 rounded-full border transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5 active:scale-95">←</button>
              <button className="h-10 w-10 rounded-full border transition-all duration-300 hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5 active:scale-95">→</button>
            </div>
          </div>

          <div className="mt-16 flex gap-6 overflow-x-auto pb-4">
            <div className="min-w-[300px] bg-[#0f1e33] p-8 text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-slide-in-up">
              <h3 className="font-cormorant text-xl">Della R. Thomas</h3>
              <p className="font-mona text-sm opacity-80">CEO</p>
              <p className="font-mona mt-6 text-sm opacity-70">
                Each beach was chosen for its cultural significance and beauty —
                forming the emotional core of Montero.
              </p>
            </div>

            <TeamCard img={About6} name="Della R. Thomas" role="CEO" />
            <TeamCard img={About6} name="Della R. Thomas" role="CEO" />
            <TeamCard img={About6} name="Della R. Thomas" role="CEO" />
          </div>
        </div>
      </section>

      {/* ================= FAQ + SUBSCRIBE ================= */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          {/* FAQ ROW */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 items-start">
            {/* LEFT TEXT */}
            <div className="animate-slide-in-left">
              <h2 className="font-cormorant text-4xl md:text-5xl transition-colors duration-300 hover:text-gray-700">
                Frequently Asked Question
              </h2>

              <p className="font-mona mt-6 max-w-md text-gray-600 leading-relaxed transition-opacity duration-300 hover:opacity-80">
                Each beach was chosen for its cultural significance, beauty, and
                global reputation — together forming the emotional core of
                Montero. Each beach was chosen for its cultural significance,
                beauty, and global reputation — together forming the emotional
                core of Montero.
              </p>
            </div>

            {/* RIGHT FAQ LIST */}
            <div className="space-y-6 animate-slide-in-right">
              {faqs.map((q, i) => (
                <div key={i} className="border-b border-gray-200 pb-4 transition-all duration-300 hover:border-gray-400">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between text-left font-mona text-black transition-colors duration-300 hover:text-gray-600"
                  >
                    <span>{q}</span>
                    <span className="text-xl transition-transform duration-300" style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      {open === i ? "−" : "+"}
                    </span>
                  </button>

                  {open === i && (
                    <p className="mt-4 max-w-md text-sm text-gray-600 animate-fade-in-down">
                      Yes, all Montero watches come with a comprehensive
                      warranty covering manufacturing defects.
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SUBSCRIBE ROW */}
          <div className="mt-32 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* LEFT TEXT */}
            <div className="animate-slide-in-left">
              <h2 className="font-cormorant text-4xl md:text-5xl transition-colors duration-300 hover:text-gray-700">
                Subscribe for Exclusive Updates
              </h2>

              <p className="font-mona mt-4 max-w-md text-gray-600 transition-opacity duration-300 hover:opacity-80">
                Join our mailing list to receive early access, limited-edition
                alerts, and insider updates directly from the Montero team.
              </p>
            </div>

            {/* RIGHT INPUT */}
            <div className="flex w-full max-w-xl animate-slide-in-right">
              <div className="flex w-full items-center bg-gray-200 px-4 transition-all duration-300 hover:bg-gray-300">
                <span className="mr-3 text-gray-500 transition-transform duration-300 hover:scale-110">✉</span>
                <input
                  type="email"
                  placeholder="Enter your e-mail"
                  className="w-full bg-transparent py-4 text-sm outline-none placeholder:text-gray-500 transition-all duration-300 focus:placeholder:opacity-60"
                />
              </div>

              <button className="bg-black px-8 text-sm text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

     
    </>
  );
}

/* ================= COMPONENTS ================= */

function ValueCard({ img, title, text }) {
  return (
    <div className="relative h-[420px] overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-in-up">
      <Image 
        src={img} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-black/40 transition-all duration-500 group-hover:bg-black/30" />
      <div className="absolute bottom-6 left-6 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
        <h3 className="font-cormorant text-2xl transition-all duration-300">{title}</h3>
        <p className="font-mona text-sm transition-all duration-300">{text}</p>
      </div>
    </div>
  );
}

function TeamCard({ img, name, role }) {
  return (
    <div className="relative min-w-[260px] h-[360px] overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-in-up">
      <Image 
        src={img} 
        alt={name} 
        fill 
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-500 group-hover:from-black/60" />
      <div className="absolute bottom-6 left-6 text-white transition-transform duration-500 group-hover:translate-y-[-8px]">
        <h4 className="font-cormorant transition-all duration-300">{name}</h4>
        <p className="font-mona text-sm opacity-80 transition-all duration-300">{role}</p>
      </div>
    </div>
  );
}