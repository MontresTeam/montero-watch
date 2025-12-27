"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

// Images
import Logo from "@/public/images/Logo/LogoNav.png";
import Glob from "@/public/icons/home/glob.png";
import Cart from "@/public/icons/home/cart.png";

const Navbar = () => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const mobileMenuRef = useRef(null);
  const langRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "About Us", href: "/about" },
    { name: "Review", href: "/review" },
    { name: "Contact Us", href: "/contact" },
  ];

  const languages = ["EN", "AR"];

  /* ================= MOBILE MENU ANIMATION ================= */
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [isMobileMenuOpen]);

  /* ================= LANGUAGE DROPDOWN ANIMATION ================= */
  useEffect(() => {
    if (!langRef.current) return;

    if (isLangOpen) {
      gsap.fromTo(
        langRef.current,
        { opacity: 0, scale: 0.95, y: -5 },
        { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" }
      );
    }
  }, [isLangOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 font-body">
      <div className="mx-auto px-4 sm:px-6 lg:px-[5%]">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT LINKS (DESKTOP) */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors ${
                    isActive
                      ? "text-black text-lg font-semibold"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image src={Logo} alt="Logo" width={200} height={100} />
          </Link>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* LANGUAGE (DESKTOP) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 px-2 py-1 rounded hover:bg-gray-100"
              >
                <Image src={Glob} alt="Lang" width={18} height={18} />
                {selectedLang}
                <FaChevronDown className={`text-xs transition ${isLangOpen ? "rotate-180" : ""}`} />
              </button>

              {isLangOpen && (
                <div
                  ref={langRef}
                  className="absolute right-0 mt-2 w-24 bg-white border rounded-lg shadow-lg overflow-hidden"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-gray-100"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CART */}
            <button className="px-2 py-1 rounded hover:bg-gray-100">
              <Image src={Cart} alt="Cart" width={20} height={20} />
            </button>

            {/* SIGN UP */}
            <Link
              href="/signup"
              className={`hidden sm:block border border-black rounded-full px-8 py-1 transition ${
                pathname === "/signup"
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
              }`}
            >
              Sign Up
            </Link>

            {/* MOBILE TOGGLE */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden bg-white border-t shadow-lg"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="flex flex-col px-6 py-5 space-y-4">

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg ${
                  isActive ? "font-semibold text-black" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* MOBILE LANGUAGE */}
          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 mb-2">Language</p>
            <div className="flex gap-3">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-4 py-1 rounded-full border ${
                    selectedLang === lang
                      ? "bg-black text-white border-black"
                      : "border-gray-300"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* MOBILE SIGN UP */}
          <Link
            href="/signup"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 text-center border border-black rounded-full py-2 hover:bg-black hover:text-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
