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
          {/* LEFT: Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-start flex-1">
            <button
              onClick={() => setIsMobileMenuOpen((p) => !p)}
              className="flex items-center text-gray-700 hover:text-black transition"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* CENTER: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:static md:left-auto md:transform-none flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src={Logo} 
                alt="Logo" 
                width={140} 
                height={50} 
                priority 
                className="md:w-180 md:h-70"
              />
            </Link>
          </div>

          {/* RIGHT: Desktop Navigation + Mobile Controls */}
          <div className="flex items-center justify-end flex-1 md:flex-none">
            <div className="flex items-center gap-4 md:gap-5">
              {/* LANGUAGE - DESKTOP */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setIsLangOpen((p) => !p)}
                  className="flex items-center gap-1 text-[13px] font-medium text-gray-600 hover:text-black transition"
                >
                  <Image src={Glob} alt="Lang" width={18} height={18} />
                  {selectedLang}
                  <FaChevronDown
                    className={`text-[10px] transition ${
                      isLangOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLangOpen && (
                  <div
                    ref={langRef}
                    className="absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-sm z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setSelectedLang(lang);
                          setIsLangOpen(false);
                        }}
                        className="w-full px-3 py-2 text-left text-[13px] font-medium hover:bg-gray-100"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* USER SECTION - DESKTOP */}
              <div className="relative hidden md:block" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen((p) => !p)}
                  className="flex items-center gap-2 hover:opacity-80 transition"
                >
                  <FaRegUser size={16} className="text-gray-700" />
                  <FaChevronDown
                    className={`text-[10px] transition ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* DROPDOWN FOR DESKTOP */}
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 z-[9999]">
                    <Dropdown onClose={() => setIsDropdownOpen(false)} />
                  </div>
                )}
              </div>

              {/* SIGN IN - DESKTOP */}
              <Link
                href="/signup"
                className={`
                  hidden md:block rounded-full px-6 py-[6px]
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

              {/* MOBILE RIGHT SIDE */}
              <div className="md:hidden flex items-center gap-3">
                {/* LANGUAGE - MOBILE */}
                <div className="relative" ref={langRef}>
                  <button
                    onClick={() => setIsLangOpen((p) => !p)}
                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100 transition"
                  >
                    <Image src={Glob} alt="Lang" width={16} height={16} />
                  </button>

                  {isLangOpen && (
                    <div className="absolute right-0 top-10 w-24 bg-white border rounded-md shadow-sm z-50">
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => {
                            setSelectedLang(lang);
                            setIsLangOpen(false);
                          }}
                          className="w-full px-3 py-2 text-left text-sm font-medium hover:bg-gray-100"
                        >
                          {lang}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* USER AVATAR & DROPDOWN - MOBILE */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen((p) => !p)}
                    className="flex items-center hover:opacity-80 transition"
                  >
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                      <Image
                        src={Avatar}
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="object-cover"
                      />
                    </div>
                  </button>

                  {/* DROPDOWN FOR MOBILE */}
                  {isDropdownOpen && (
                    <div className="fixed top-0 left-0 w-full h-full z-[9999]">
                      <Dropdown onClose={() => setIsDropdownOpen(false)} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* LEFT MENU - DESKTOP */}
      <div className="hidden md:flex items-center justify-center gap-8 py-3 border-t border-neutral-100">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`
                text-[13px] font-semibold tracking-wide relative group
                transition-colors duration-200
                ${isActive ? "text-black" : "text-gray-500 hover:text-black"}
              `}
            >
              {link.name}

              {/* ACTIVE / HOVER UNDERLINE */}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[1px] bg-black transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                `}
              />
            </Link>
          );
        })}
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
                className={`text-base font-medium py-2 ${
                  isActive 
                    ? "text-black border-l-2 border-black pl-3" 
                    : "text-gray-600 hover:text-black pl-3 hover:border-l-2 hover:border-gray-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* SIGN IN - MOBILE */}
          <div className="mt-6 pt-4 border-t border-gray-200">
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