"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import { toast } from "react-toastify";

import Logo from "@/public/images/Logo/LogoFooter.png";
import BgIcon from "@/public/images/Home/BgFooterLogo.png";
import Instagram from "@/public/icons/home/instagram.png";
import Whatsapp from "@/public/icons/home/whatsapp.png";
import ThreadsIcon from "@/public/icons/home/x.png";
import YoutubeIcon from "@/public/icons/home/sm_5b01250f7fc22.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/user/subscribe", { email });
      toast.success(response.data.message || "Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      const errorMessage = error.response?.data?.error || error.response?.data?.message || "An error occurred. Please try again later.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Background Decorative Icon */}
      <Image
        src={BgIcon}
        alt="Background Icon"
        className="absolute left-0 bottom-0 w-32 sm:w-48 md:w-64 opacity-50 pointer-events-none"
      />

      {/* Logo */}
      <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center items-center px-4">
        <Image
          src={Logo}
          alt="Montero Logo"
          className="w-48 sm:w-64 md:w-80"
          priority
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-10 pb-8 sm:pb-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* LEFT */}
          <div>
            <h4 className="text-white text-lg sm:text-xl mb-3 sm:mb-4 font-medium">
              Get in Touch
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              If you have any questions about your order, warranty, or Montero
              products, we’re here to help.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h4 className="text-white text-lg sm:text-xl mb-3 sm:mb-4 font-medium md:hidden">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-6 gap-y-3 text-sm">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <Link href="/product" className="hover:text-white transition">Products</Link>
              <Link href="/about" className="hover:text-white transition">About Us</Link>
              <Link href="/review" className="hover:text-white transition">Blog</Link>
              <Link href="/gallery" className="hover:text-white transition">Gallery</Link>
              <Link href="/contact" className="hover:text-white transition">Contact Us</Link>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h4 className="text-white text-lg sm:text-xl mb-3 sm:mb-4 font-medium">
              Stay Updated
            </h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-0 sm:gap-2 max-w-md group">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent border border-white/20 px-4 py-3.5 text-sm w-full outline-none focus:border-white focus:ring-1 focus:ring-white/10 transition-all placeholder:text-gray-600 rounded-lg sm:rounded-r-none"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="bg-white text-black px-8 py-3.5 text-sm font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-lg sm:rounded-l-none mt-2 sm:mt-0 shadow-lg active:scale-95"
              >
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
            <p className="text-gray-500 text-[10px] sm:text-xs mt-3 pl-1 italic">
              Subscribe to get updates on new products and exclusive offers.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-white/20" />

        {/* SOCIAL LINKS */}
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-sm mb-6">
            Connect with us on social media
          </p>

          <div className="flex gap-6">
            {/* Instagram */}
            <Link
              href="https://www.instagram.com/montero.watch/"
              target="_blank"
              className="hover:opacity-70 transition p-2 rounded-full hover:bg-white/10"
            >
              <Image src={Instagram} alt="Instagram" width={20} height={20} />
            </Link>

            {/* Threads */}
            <Link
              href="https://www.threads.com/@montero.watch"
              target="_blank"
              className="hover:opacity-70 transition p-2 rounded-full hover:bg-white/10"
            >
              <Image src={ThreadsIcon} alt="Threads" width={20} height={20} />
            </Link>

            {/* WhatsApp */}
            <Link
              href="https://wa.me/97142671124"
              target="_blank"
              className="hover:opacity-70 transition p-2 rounded-full hover:bg-white/10"
            >
              <Image src={Whatsapp} alt="WhatsApp" width={20} height={20} />
            </Link>

            {/* YouTube */}
            <Link
              href="https://www.youtube.com/@MontresOfficial"
              target="_blank"
              className="hover:opacity-70 transition p-2 rounded-full hover:bg-white/10"
            >
              <Image src={YoutubeIcon} alt="YouTube" width={20} height={20} />
            </Link>
          </div>

          {/* COPYRIGHT */}
          <div className="mt-8 pt-6 border-t border-white/10 w-full">
            <p className="text-center text-xs text-gray-500">
              © {new Date().getFullYear()} Montero. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
