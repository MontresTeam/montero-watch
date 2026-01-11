"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import gsap from "gsap";

import Dropdown from "./Dropdown";

import Avatar from "../../../public/images/Avatar.png";
import Logo from "@/public/images/Logo/LogoNav.png";
import Glob from "@/public/icons/home/glob.png";

const Navbar = () => {
  const pathname = usePathname();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const langRef = useRef(null);
  const dropdownRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/review" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const languages = ["EN", "AR"];

  // CLOSE DROPDOWN WHEN CLICKING OUTSIDE
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // MOBILE MENU ANIMATION
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      });
    }
  }, [isMobileMenuOpen]);

  // LANGUAGE DROPDOWN
  useEffect(() => {
    if (!langRef.current || !isLangOpen) return;

    gsap.fromTo(
      langRef.current,
      { opacity: 0, scale: 0.95, y: -4 },
      { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power2.out" }
    );
  }, [isLangOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 font-mona border-b border-neutral-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-[6%]">
        <div className="relative h-16 flex items-center justify-between">
          {/* LEFT SECTION - MOBILE MENU & DESKTOP NAV */}
          <div className="flex items-center gap-8">
            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="md:hidden flex items-center justify-center w-8 h-8"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* DESKTOP NAVIGATION */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`
                      text-[13px] font-semibold tracking-wide relative
                      transition-colors duration-200
                      ${
                        isActive
                          ? "text-black"
                          : "text-gray-500 hover:text-black"
                      }
                    `}
                  >
                    {link.name}
                    <span
                      className={`
                        absolute left-0 -bottom-1 h-[1px] bg-black transition-all duration-300
                        ${isActive ? "w-full" : "w-0 hover:w-full"}
                      `}
                    />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CENTER LOGO - Responsive positioning */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex-shrink-0"
          >
            <Image
              src={Logo}
              alt="Logo"
              width={180}
              height={70}
              priority
              className="w-[140px] md:w-[180px] h-auto"
            />
          </Link>

          {/* RIGHT SECTION - User actions */}
          <div className="flex items-center gap-4 md:gap-5">
            {/* LANGUAGE SELECTOR - Desktop only */}
            <div className="relative hidden md:flex items-center">
              <button
                onClick={() => setIsLangOpen((p) => !p)}
                className="flex items-center gap-2 text-[13px] font-medium text-gray-600 hover:text-black transition px-2 py-1 rounded hover:bg-gray-50"
                aria-label="Language selector"
              >
                <Image src={Glob} alt="Language" width={16} height={16} />
                <span className="min-w-[24px] text-center">{selectedLang}</span>
                <FaChevronDown
                  className={`text-[10px] transition ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isLangOpen && (
                <div
                  ref={langRef}
                  className="absolute right-0 top-full mt-1 w-20 bg-white border rounded-md shadow-sm z-50"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className="w-full px-4 py-2 text-left text-[13px] font-medium hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* USER SECTION - Desktop */}
            <div className="relative hidden md:flex items-center gap-3">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen((p) => !p)}
                  className="flex items-center gap-2 px-2 py-1 rounded hover:bg-gray-50"
                  aria-label="User menu"
                >
                  <FaRegUser size={16} className="text-gray-700" />
                  <FaChevronDown
                    className={`text-[10px] transition ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 z-[999]">
                    <Dropdown onClose={() => setIsDropdownOpen(false)} />
                  </div>
                )}
              </div>

              <Link
                href="/signup"
                className={`
                  rounded-full px-6 py-2
                  text-[13px] font-medium transition whitespace-nowrap
                  ${
                    pathname === "/signup"
                      ? "bg-black text-white"
                      : "border border-black hover:bg-black hover:text-white"
                  }
                `}
              >
                Sign In
              </Link>
            </div>

            {/* MOBILE RIGHT SECTION */}
            <div className="md:hidden flex items-center gap-3">
              {/* LANGUAGE - Mobile */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen((p) => !p)}
                  className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-50"
                  aria-label="Language selector"
                >
                  <Image src={Glob} alt="Language" width={18} height={18} />
                </button>

                {isLangOpen && (
                  <div
                    ref={langRef}
                    className="absolute right-0 top-full mt-1 w-20 bg-white border rounded-md shadow-sm z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className="w-full px-4 py-2 text-left text-sm font-medium hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* USER AVATAR & DROPDOWN - Mobile */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen((p) => !p)}
                  className="flex items-center gap-1"
                  aria-label="User menu"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-100">
                    <Image
                      src={Avatar}
                      alt="User Avatar"
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>
                  <FaChevronDown
                    className={`text-[10px] transition ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 z-[999]">
                    <Dropdown onClose={() => setIsDropdownOpen(false)} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden bg-white border-t"
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
                className={`py-2 text-base font-medium ${
                  isActive
                    ? "text-black border-l-4 border-black pl-3"
                    : "text-gray-600 hover:text-black"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* SIGN IN - Mobile (in menu) */}
          <div className="pt-4 mt-2 border-t">
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`
                block rounded-full px-6 py-3 text-center
                text-sm font-medium transition
                ${
                  pathname === "/signup"
                    ? "bg-black text-white"
                    : "border border-black hover:bg-black hover:text-white"
                }
              `}
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;