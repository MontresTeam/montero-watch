"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import gsap from "gsap";

import Dropdown from "./Dropdown";

import Avatar from "../../../public/images/Avatar.png";
import Logo from "@/public/images/Logo/LogoNav.png";
import Glob from "@/public/icons/home/glob.png";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const langRef = useRef(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/product" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/review" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  const languages = ["EN", "AR"];

  /* MOBILE MENU ANIMATION */
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

  /* LANGUAGE DROPDOWN */
  useEffect(() => {
    if (!langRef.current || !isLangOpen) return;

    gsap.fromTo(
      langRef.current,
      { opacity: 0, scale: 0.95, y: -4 },
      { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power2.out" }
    );
  }, [isLangOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 font-mona">
      <div className="mx-auto px-4 sm:px-6 lg:px-[6%]">
        <div className="relative h-16 flex items-center justify-between">
          {/* LEFT MENU */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[13px] tracking-wide group"
                >
                  <span
                    className={`transition-all duration-300 ${
                      isActive
                        ? "font-semibold text-black"
                        : "font-light text-gray-500 group-hover:text-black"
                    }`}
                  >
                    {link.name}
                  </span>

                  {/* UNDERLINE */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1.5px] bg-black transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </Link>
              );
            })}
          </div>

          {/* LOGO */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src={Logo}
              alt="Logo"
              width={190}
              height={80}
              style={{ height: "auto" }}
              priority
            />
          </Link>

          {/* RIGHT SIDE */}
          <div className="relative flex items-center gap-5">
            {/* LANGUAGE (DESKTOP) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen((p) => !p)}
                className="flex items-center gap-1 text-[13px] font-light text-gray-700"
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
                  className="absolute right-0 mt-2 w-24 bg-white border rounded-md shadow-sm"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        setIsLangOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-[13px] font-light hover:bg-gray-100"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* USER PROFILE/ICON (DESKTOP) */}
            <div className="hidden md:block">
              {user ? (
                <button
                  onClick={() => setIsDropdownOpen((p) => !p)}
                  className="flex items-center gap-2"
                >
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-gray-200">
                    <Image
                      src={user.profilePic || Avatar}
                      alt="Profile"
                      width={36}
                      height={36}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => setIsDropdownOpen((p) => !p)}
                  className="flex items-center"
                >
                  <FaRegUser size={16} className="text-gray-700" />
                </button>
              )}
            </div>

            {/* SIGN IN */}
            {!user && (
              <Link
                href="/login"
                className={`hidden sm:block border border-black rounded-full px-6 py-[6px] text-[13px] font-light transition ${
                  pathname === "/login"
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`}
              >
                Sign In
              </Link>
            )}

            {/* MOBILE RIGHT */}
            <div className="md:hidden flex items-center gap-3">
              {/* AVATAR (MOBILE) */}
              <button
                onClick={() => setIsDropdownOpen((p) => !p)}
                className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200"
              >
                <Image
                  src={user?.profilePic || Avatar}
                  alt="User Avatar"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full"
                />
              </button>

              {/* TOGGLE */}
              <button onClick={() => setIsMobileMenuOpen((p) => !p)}>
                {isMobileMenuOpen ? (
                  <FaTimes size={20} />
                ) : (
                  <FaBars size={20} />
                )}
              </button>
            </div>

            {/* 🔥 SHARED DROPDOWN (ONE INSTANCE) */}
            {isDropdownOpen && (
              <>
                {/* DESKTOP */}
                <div className="hidden md:block absolute right-0 top-10 z-[999]">
                  <Dropdown onClose={() => setIsDropdownOpen(false)} />
                </div>

                {/* MOBILE */}
                <div className="md:hidden absolute right-0 top-14 z-[999]">
                  <Dropdown onClose={() => setIsDropdownOpen(false)} />
                </div>
              </>
            )}
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
                className={`text-base font-light ${
                  isActive ? "text-black" : "text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="border-t pt-4">
            <p className="text-sm text-gray-500 mb-2">Language</p>
            <div className="flex gap-3">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLang(lang)}
                  className={`px-4 py-1 rounded-full border text-sm ${
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

          {!user && (
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 text-center border border-black rounded-full py-2 hover:bg-black hover:text-white"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
