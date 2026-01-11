"use client";

import Image from "next/image";
import Link from "next/link";

import Logo from "@/public/images/Logo/LogoFooter.png";
import BgIcon from "@/public/images/Home/BgFooterLogo.png";
import Instagram from "@/public/icons/home/instagram.png";
import Whatsapp from "@/public/icons/home/whatsapp.png";
import X from "@/public/icons/home/x.png";

const Footer = () => {
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
          {/* LEFT - Get in Touch */}
          <div className="px-2 sm:px-0">
            <h4 className="text-white text-lg sm:text-xl mb-3 sm:mb-4 font-medium">
              Get in Touch
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              If you have any questions about your order, warranty, or Montero
              products, we re here to help.
            </p>
          </div>

          {/* CENTER - Navigation Links */}
          <div className="px-2 sm:px-0">
            <h4 className="text-white text-lg sm:text-xl mb-3 sm:mb-4 font-medium md:hidden">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-sm">
              <Link
                href="/"
                className="hover:text-white transition text-xs sm:text-sm py-1"
              >
                Home
              </Link>
              <Link
                href="/product"
                className="hover:text-white transition text-xs sm:text-sm py-1"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="hover:text-white transition text-xs sm:text-sm py-1"
              >
                About Us
              </Link>
              <Link
                href="/review"
                className="hover:text-white transition text-xs sm:text-sm py-1"
              >
                Blog
              </Link>
              <Link
                href="/gallery"
                className="hover:text-white transition text-xs sm:text-sm py-1"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition text-xs sm:text-sm py-1"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* RIGHT - Newsletter */}
          <div className="px-2 sm:px-0 md:col-span-2 lg:col-span-1">
            <h4 className="text-white text-lg sm:text-xl mb-3 sm:mb-4 font-medium">
              Stay Updated
            </h4>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-transparent border border-gray-600 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm w-full outline-none focus:border-white transition placeholder-gray-500"
              />
              <button className="border border-white px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm hover:bg-white hover:text-black transition whitespace-nowrap min-w-[100px]">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-2 sm:mt-3">
              Subscribe to get updates on new products and offers
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-8 sm:my-10 md:my-12 lg:my-14 border-t border-white/20" />

        {/* BOTTOM - Social Links */}
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 text-center">
            Connect with us on social media
          </p>
          <div className="flex justify-center gap-5 sm:gap-6">
            <Link
              href="#"
              className="hover:opacity-70 transition p-2 hover:bg-white/10 rounded-full"
            >
              <Image
                src={Instagram}
                alt="Instagram"
                width={18}
                height={18}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </Link>
            <Link
              href="#"
              className="hover:opacity-70 transition p-2 hover:bg-white/10 rounded-full"
            >
              <Image
                src={Whatsapp}
                alt="WhatsApp"
                width={18}
                height={18}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </Link>
            <Link
              href="#"
              className="hover:opacity-70 transition p-2 hover:bg-white/10 rounded-full"
            >
              <Image
                src={X}
                alt="X"
                width={18}
                height={18}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </Link>
          </div>

          {/* Copyright */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 w-full">
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
