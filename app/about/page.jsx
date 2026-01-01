"use client";

import Image from "next/image";
import Navbar from "../components/navBar/NavBar";

import About1 from "@/public/images/About/about1.jpg";
import About2 from "@/public/images/About/about2.jpg";
import About3 from "@/public/images/About/about3.jpg";
import About4 from "@/public/images/About/about4.jpg";
import About5 from "@/public/images/About/about5.jpg";
import About6 from "@/public/images/About/about6.jpg";

export default function Page() {
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
          className="object-cover object-[center_10%]"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <div className="max-w-3xl text-center text-white">
            <h1 className="font-cormorant text-[clamp(2rem,6vw,4rem)]">
              A World Time Watch Inspired by Global Beaches
            </h1>
            <p className="font-mona mt-4 opacity-90">
              Crafted for explorers, dreamers, and lovers of the world’s iconic beaches
            </p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <button
              className="
                inline-block bg-gray-200 px-4 py-1 text-sm font-mona text-gray-700
                shadow-sm transition-all duration-150 ease-out
                active:scale-[0.96] active:bg-gray-300 active:shadow-inner
                focus:outline-none
              "
            >
              About us
            </button>
            <h2 className="font-cormorant mt-6 text-4xl md:text-5xl">
              The Story Behind Montero
            </h2>
            <p className="font-mona mt-6 max-w-xl text-gray-700">
              Montero was born from a deep appreciation for the world, its diversity,
              and the timeless beauty of global coastlines.
            </p>
          </div>

          <div className="relative h-[520px]">
            <Image src={About2} alt="About" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ================= VALUES CARDS ================= */}
      <section className="bg-white px-6 pt-12 pb-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
          <ValueCard img={About3} title="Adventure" text="For those who never stop exploring" />
          <ValueCard img={About4} title="Precision" text="Powered by reliable world-time engineering" />
          <ValueCard img={About5} title="Culture" text="Celebrating iconic beaches across the globe" />
        </div>
      </section>

      {/* ================= OUR TEAM ================= */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <div className="flex items-start justify-between">
            <div>
              <button
              className="
                inline-block bg-gray-200 px-4 py-1 text-sm font-mona text-gray-700
                shadow-sm transition-all duration-150 ease-out
                active:scale-[0.96] active:bg-gray-300 active:shadow-inner
                focus:outline-none
              "
            >
              Our Team
            </button>
              <h2 className="font-cormorant mt-6 text-4xl md:text-5xl">
                The People Behind Montero
              </h2>
              <p className="font-mona mt-4 max-w-md text-gray-600">
                Crafted by passionate professionals committed to precision and quality
              </p>
            </div>

            <div className="hidden md:flex gap-3">
              <button className="h-10 w-10 rounded-full border">←</button>
              <button className="h-10 w-10 rounded-full border">→</button>
            </div>
          </div>

          {/* TEAM ROW */}
          <div className="mt-16 flex gap-6 overflow-x-auto pb-4">

            {/* INFO CARD */}
            <div className="min-w-[300px] bg-[#0f1e33] p-8 text-white">
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
    </>
  );
}

/* ================= COMPONENTS ================= */

function ValueCard({ img, title, text }) {
  return (
    <div className="relative h-[420px] overflow-hidden">
      <Image src={img} alt={title} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-6 left-6 text-white">
        <h3 className="font-cormorant text-2xl">{title}</h3>
        <p className="font-mona text-sm">{text}</p>
      </div>
    </div>
  );
}

function TeamCard({ img, name, role }) {
  return (
    <div className="relative min-w-[260px] h-[360px] overflow-hidden">
      <Image src={img} alt={name} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-6 left-6 text-white">
        <h4 className="font-cormorant">{name}</h4>
        <p className="font-mona text-sm opacity-80">{role}</p>
      </div>
    </div>
  );
}
