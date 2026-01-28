"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import api from "@/lib/api";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

import Logo from "@/public/images/Logo/LogoFooter.png";
import BgIcon from "@/public/images/Home/BgFooterLogo.png";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language?.startsWith("ar");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error(isAr ? "يرجى إدخال بريد إلكتروني صالح" : "Please enter a valid email address");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/user/subscribe", { email });
      toast.success(response.data.message || (isAr ? "شكراً لاشتراكك!" : "Thank you for subscribing!"));
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      const errorMessage = error.response?.data?.error || error.response?.data?.message || (isAr ? "حدث خطأ. يرجى المحاولة مرة أخرى لاحقاً." : "An error occurred. Please try again later.");
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-[#050505] text-gray-300 overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      {/* Background Decorative Icon */}
      <Image
        src={BgIcon}
        alt="Background Icon"
        className={`absolute ${isAr ? 'right-0' : 'left-0'} bottom-0 w-32 sm:w-48 md:w-64 opacity-20 pointer-events-none grayscale`}
      />

      {/* Logo Section */}
      <div className="mt-16 sm:mt-24 flex justify-center items-center px-4 relative z-10">
        <Image
          src={Logo}
          alt="Montero Logo"
          className="w-48 sm:w-64 md:w-80 hover:opacity-90 transition-opacity duration-300"
          priority
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16 md:py-20">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24 items-start">

          {/* LEFT - About/Contact */}
          <div className="space-y-6">
            <h4 className="text-white text-xl font-semibold tracking-wider uppercase border-b border-white/10 pb-2 inline-block">
              {t('footerGetInTouch')}
            </h4>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed max-w-sm">
              {t('footerGetInTouchDesc')}
            </p>
          </div>

          {/* CENTER - Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white text-xl font-semibold tracking-wider uppercase border-b border-white/10 pb-2 inline-block">
              {t('footerQuickLinks')}
            </h4>
            <div className={`grid grid-cols-2 gap-x-8 gap-y-4 text-sm sm:text-base`}>
              <Link href="/" className="hover:text-white transition-colors duration-200">{t('home')}</Link>
              <Link href="/product" className="hover:text-white transition-colors duration-200">{t('products')}</Link>
              <Link href="/about" className="hover:text-white transition-colors duration-200">{t('aboutUs')}</Link>
              <Link href="/review/blog" className="hover:text-white transition-colors duration-200">{t('blog')}</Link>
              <Link href="/gallery" className="hover:text-white transition-colors duration-200">{t('gallery')}</Link>
              <Link href="/contact" className="hover:text-white transition-colors duration-200">{t('contactUs')}</Link>
            </div>
          </div>

          {/* RIGHT - Subscribe */}
          <div className="space-y-6">
            <h4 className="text-white text-xl font-semibold tracking-wider uppercase border-b border-white/10 pb-2 inline-block">
              {t('footerStayUpdated')}
            </h4>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div className="relative group">
                  <input
                    type="email"
                    placeholder={t('footerSubscribePlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`bg-black/40 border border-white/10 px-4 py-4 text-sm w-full outline-none focus:border-white/40 focus:ring-1 focus:ring-white/5 transition-all placeholder:text-gray-600 rounded-xl ${isAr ? 'text-right' : 'text-left'}`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-white text-black w-full py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-xl active:scale-95 flex items-center justify-center gap-2"
                >
                  {loading ? t('footerSubscribing') : t('footerSubscribeBtn')}
                </button>
              </form>
              <p className={`text-gray-500 text-[11px] mt-4 leading-relaxed ${isAr ? 'text-right' : 'text-left'}`}>
                {t('footerSubscribeDesc')}
              </p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 border-t border-white/5" />

        {/* SOCIAL LINKS & COPYRIGHT */}
        <div className="flex flex-col items-center space-y-10">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-8 tracking-widest uppercase">
              {t('footerConnectSocial')}
            </p>

            <div className="flex gap-8">
              <Link
                href="https://www.instagram.com/montero.watch/"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                aria-label="Instagram"
              >
                <FaInstagram size={26} />
              </Link>

              <Link
                href="https://www.threads.net/@montero.watch"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                aria-label="Threads"
              >
                <RiTwitterXFill size={26} />
              </Link>

              <Link
                href="https://wa.me/97142671124"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={26} />
              </Link>

              <Link
                href="https://www.youtube.com/@MontresOfficial"
                target="_blank"
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                aria-label="YouTube"
              >
                <FaYoutube size={26} />
              </Link>
            </div>
          </div>

          <div className="w-full pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-600 tracking-wide order-2 md:order-1">
              {t('footerCopyright', { year: new Date().getFullYear() })}
            </p>
            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-600 order-1 md:order-2">
              <Link href="/components/privacyPolicy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
              <Link href="/components/termsConditions" className="hover:text-gray-400 transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

