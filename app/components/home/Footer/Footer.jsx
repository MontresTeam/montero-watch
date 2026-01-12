"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import Logo from "@/public/images/Logo/LogoFooter.png";
import BgIcon from "@/public/images/Home/BgFooterLogo.png";
import Instagram from "@/public/icons/home/instagram.png";
import Whatsapp from "@/public/icons/home/whatsapp.png";
import X from "@/public/icons/home/x.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Background Decorative Icon */}

      <Image
        src={BgIcon}
        alt="Background Icon"
        className="absolute left-0 bottom-0  pointer-events-none"
      />
      <div className=" mt-20 flex justify-center items-center">
        <Image src={Logo} alt="Montero Logo" className="mb-3 w-80" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-2 pb-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* LEFT */}
          <div>
            <h4 className="text-white mb-4">{t("footer.getInTouch")}</h4>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              {t("footer.desc")}
            </p>
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center text-center">
            <div className="mt-6 grid grid-cols-2 gap-x-10 gap-y-3 text-sm">
              <Link href="/" className="hover:text-white transition">
                {t("footer.links.home")}
              </Link>
              <Link href="/product" className="hover:text-white transition">
                {t("footer.links.products")}
              </Link>
              <Link href="/about" className="hover:text-white transition">
                {t("footer.links.about")}
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                {t("footer.links.contact")}
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <h4 className="text-white mb-4">{t("footer.subscribe.title")}</h4>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder={t("footer.subscribe.placeholder")}
                className="bg-transparent border border-gray-600 px-4 py-2 text-sm w-full outline-none focus:border-white transition"
              />
              <button className="border border-white px-6 py-2 text-sm hover:bg-white hover:text-black transition">
                {t("footer.subscribe.submit")}
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 border-t border-white/20" />

        {/* BOTTOM */}
        <div className="flex justify-center gap-6">
          <Link href="#" className="hover:opacity-70 transition">
            <Image src={Instagram} alt="Instagram" width={18} />
          </Link>
          <Link href="#" className="hover:opacity-70 transition">
            <Image src={Whatsapp} alt="WhatsApp" width={18} />
          </Link>
          <Link href="#" className="hover:opacity-70 transition">
            <Image src={X} alt="X" width={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//