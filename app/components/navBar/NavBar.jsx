"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaBars, FaTimes, FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useCurrency, SUPPORTED_CURRENCIES } from "@/context/CurrencyContext";
import Image from "next/image";
import gsap from "gsap";

import Dropdown from "./Dropdown";
import "@/lib/i18n";
import { useTranslation } from "react-i18next";

import Avatar from "../../../public/images/Avatar.png";
import Logo from "@/public/images/Logo/LogoNav.png";
import Glob from "@/public/icons/home/glob.png";

const Navbar = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const { currency, setCurrency } = useCurrency();

  const { t, i18n } = useTranslation();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMobileCurrencyOpen, setIsMobileCurrencyOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (i18n.language) {
      setSelectedLang(i18n.language.toLowerCase());
    }
  }, [i18n.language]);

  // Sync HTML lang attribute and layout direction
  useEffect(() => {
    if (!mounted) return;
    const lang = i18n.language?.toLowerCase() || "en";
    document.documentElement.lang = lang;
    // Set direction to RTL for Arabic, otherwise LTR
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [i18n.language, mounted]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const langRef = useRef(null);
  const currencyRef = useRef(null);


  const navLinks = [
    { name: t("home"), href: "/" },
    { name: t("products"), href: "/product" },
    { name: t("aboutUs"), href: "/about" },
    { name: t("blog"), href: "/review/blog" },
    { name: t("gallery"), href: "/gallery" },
    { name: t("contactUs"), href: "/contact" },
  ];

  const languages = ["en", "ar"];

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

  /* CURRENCY DROPDOWN */
  useEffect(() => {
    if (!currencyRef.current || !isCurrencyOpen) return;

    gsap.fromTo(
      currencyRef.current,
      { opacity: 0, scale: 0.95, y: -4 },
      { opacity: 1, scale: 1, y: 0, duration: 0.2, ease: "power2.out" }
    );
  }, [isCurrencyOpen]);

  /* CLICK OUTSIDE TO CLOSE MENUS */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsLangOpen(false);
        setIsCurrencyOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 w-full bg-white z-50 font-mona ${selectedLang === 'ar' ? 'lang-ar' : ''}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-[6%]">
        <div className={`relative h-16 flex items-center justify-between ${selectedLang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
          {/* LEFT MENU (Visually Left even in AR) */}
          <div className={`hidden md:flex items-center gap-6`}>
            {mounted && navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                pathname.startsWith(`/en${link.href}`) ||
                pathname.startsWith(`/ar${link.href}`) ||
                pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-[13px] tracking-wide group py-2"
                >
                  <span
                    className={`transition-all duration-300 ${isActive
                      ? "font-semibold text-black"
                      : "font-light text-gray-500 group-hover:text-black"
                      }`}
                  >
                    {link.name}
                  </span>

                  <span
                    className={`absolute bottom-1 h-[1.5px] bg-black transition-all duration-300 
                      ${selectedLang === 'ar' ? 'right-0' : 'left-0'} 
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
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
                onClick={() => {
                  setIsLangOpen((p) => !p);
                  setIsCurrencyOpen(false);
                  setIsDropdownOpen(false);
                }}
                className="flex items-center gap-1 text-[13px] font-light text-gray-700"
              >
                <Image src={Glob} alt="Lang" width={18} height={18} />
                {mounted ? selectedLang.toUpperCase() : "EN"}
                <FaChevronDown
                  className={`text-[10px] transition ${isLangOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isLangOpen && (
                <div
                  ref={langRef}
                  className={`absolute ${selectedLang === 'ar' ? 'left-0' : 'right-0'} mt-2 w-24 bg-white border rounded-md shadow-sm z-50`}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setSelectedLang(lang);
                        i18n.changeLanguage(lang);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-3 py-2 ${selectedLang === 'ar' ? 'text-right' : 'text-left'} text-[13px] font-light hover:bg-gray-100`}
                    >
                      {lang.toUpperCase()}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CURRENCY (DESKTOP) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => {
                  setIsCurrencyOpen((p) => !p);
                  setIsLangOpen(false);
                  setIsDropdownOpen(false);
                }}
                className="flex items-center gap-1 text-[13px] font-light text-gray-700 min-w-[50px]"
              >
                <span className="w-[18px] text-center font-medium">
                  {mounted ? (currency === "USD" ? "$" : currency === "EUR" ? "€" : currency === "GBP" ? "£" : currency === "AED" ? "د.إ" : "¤") : "$"}
                </span>
                {mounted ? currency : "USD"}
                <FaChevronDown
                  className={`text-[10px] transition ${isCurrencyOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {isCurrencyOpen && (
                <div
                  ref={currencyRef}
                  className={`absolute ${selectedLang === 'ar' ? 'left-0' : 'right-0'} mt-2 w-32 max-h-60 overflow-y-auto bg-white border rounded-md shadow-lg z-50 scrollbar-thin scrollbar-thumb-gray-200`}
                >
                  <div className="py-1">
                    {SUPPORTED_CURRENCIES.map((curr) => (
                      <button
                        key={curr}
                        onClick={() => {
                          setCurrency(curr);
                          setIsCurrencyOpen(false);
                        }}
                        className={`w-full px-4 py-2 ${selectedLang === 'ar' ? 'text-right' : 'text-left'} text-[13px] font-light transition-colors ${currency === curr ? "bg-gray-100 font-medium" : "hover:bg-gray-50 text-gray-600"
                          }`}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* USER PROFILE/ICON (DESKTOP) */}
            <div className="hidden md:block">
              {mounted && (user ? (
                <button
                  onClick={() => {
                    setIsDropdownOpen((p) => !p);
                    setIsCurrencyOpen(false);
                    setIsLangOpen(false);
                  }}
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
                  onClick={() => {
                    setIsDropdownOpen((p) => !p);
                    setIsCurrencyOpen(false);
                    setIsLangOpen(false);
                  }}
                  className="flex items-center"
                >
                  <FaRegUser size={16} className="text-gray-700" />
                </button>
              ))}
            </div>

            {/* SIGN IN */}
            {mounted && !user && (
              <Link
                href="/login"
                className={`hidden sm:block border border-black rounded-full px-6 py-[6px] text-[13px] font-light transition ${pathname === "/login"
                  ? "bg-black text-white"
                  : "hover:bg-black hover:text-white"
                  }`}
              >
                {t("signIn")}
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
                  src={(mounted && user?.profilePic) || Avatar}
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
                <div className={`hidden md:block absolute ${selectedLang === 'ar' ? 'left-0' : 'right-0'} top-10 z-[999]`}>
                  <Dropdown onClose={() => setIsDropdownOpen(false)} />
                </div>

                {/* MOBILE */}
                <div className={`md:hidden absolute ${selectedLang === 'ar' ? 'left-0' : 'right-0'} top-14 z-[999]`}>
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
        <div className={`flex flex-col px-6 py-5 gap-4 ${selectedLang === 'ar' ? 'items-start text-right' : 'items-start text-left'}`}>
          {mounted && navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-light w-full block ${isActive ? "text-black" : "text-gray-600"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="border-t pt-4 w-full">
            <div className={`text-sm text-gray-500 mb-2 ${selectedLang === 'ar' ? 'text-right' : 'text-left'}`}>{t("language")}</div>
            <div className={`flex gap-3 ${selectedLang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLang(lang);
                    i18n.changeLanguage(lang);
                  }}
                  className={`px-4 py-1 rounded-full border text-sm ${mounted && selectedLang === lang
                    ? "bg-black text-white border-black"
                    : "border-gray-300"
                    }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t pt-4 w-full">
            <button
              onClick={() => setIsMobileCurrencyOpen(!isMobileCurrencyOpen)}
              className={`flex items-center justify-between w-full py-1 ${selectedLang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <span className={`text-sm text-gray-500 ${selectedLang === 'ar' ? 'text-right' : 'text-left'}`}>{t("currency")}</span>
              <div className={`flex items-center gap-2 ${selectedLang === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-sm font-medium uppercase text-black">{mounted ? currency : "USD"}</span>
                <FaChevronDown
                  className={`text-[10px] text-gray-500 transition-transform duration-300 ${isMobileCurrencyOpen ? "rotate-180" : ""}`}
                />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileCurrencyOpen ? "max-h-60 opacity-100 mt-3" : "max-h-0 opacity-0"}`}
            >
              <div className={`grid grid-cols-3 gap-2 ${selectedLang === 'ar' ? 'text-right' : 'text-left'}`}>
                {SUPPORTED_CURRENCIES.map((curr) => (
                  <button
                    key={curr}
                    onClick={() => {
                      setCurrency(curr);
                      setIsMobileCurrencyOpen(false);
                    }}
                    className={`px-2 py-2 rounded-md text-[13px] border text-center transition-colors ${mounted && currency === curr
                      ? "bg-black text-white border-black"
                      : "border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {mounted && !user && (
            <Link
              href="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 block w-full text-center border border-black rounded-full py-2 hover:bg-black hover:text-white"
            >
              {t("signIn")}
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
