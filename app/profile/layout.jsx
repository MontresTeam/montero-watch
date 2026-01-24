"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FiUser, FiShoppingBag, FiMenu, FiX, FiLogOut } from "react-icons/fi";
import Navbar from "../components/navBar/NavBar";
import Footer from "../components/home/Footer/Footer";
import { useAuth } from "@/context/AuthContext";

export default function ProfileLayout({ children }) {
  const { t, i18n } = useTranslation();
  const { logout } = useAuth();
  const pathname = usePathname();
  const isAr = i18n.language?.startsWith("ar");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    {
      label: t("profile") || "Profile",
      href: "/profile",
      icon: <FiUser />,
    },
    {
      label: t("orders") || "Orders",
      href: "/profile/view-orders",
      icon: <FiShoppingBag />,
    },
  ];

  return (
    <div className={`min-h-screen bg-stone-50 flex flex-col ${isAr ? "lang-ar" : ""}`}>
      {/* NAVBAR */}
      <div className="z-[100] relative">
        <Navbar />
      </div>

      <div className="flex flex-1 pt-16 relative px-0 md:px-4 pb-4">
        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsSidebarOpen((v) => !v)}
          className={`
            md:hidden fixed z-[70] bottom-8
            ${isAr ? "left-6" : "right-6"}
            w-12 h-12 rounded-full
            bg-stone-900 text-white shadow-2xl
            flex items-center justify-center
            active:scale-95 transition-all duration-300
          `}
        >
          {isSidebarOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>

        {/* OVERLAY */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-stone-900/30 backdrop-blur-sm z-[30] md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* SIDEBAR */}
        <aside
          className={`
            fixed md:sticky top-16 z-[40]
            h-[calc(100vh-64px)] w-64
            bg-white/95 backdrop-blur-md
            transition-all duration-500
            ${isSidebarOpen
              ? "translate-x-0 opacity-100 shadow-2xl"
              : isAr
                ? "translate-x-full opacity-0 md:opacity-100"
                : "-translate-x-full opacity-0 md:opacity-100"
            }
            md:translate-x-0
            ${isAr ? "right-0 border-l border-stone-100" : "left-0 border-r border-stone-100"}
            md:rounded-2xl md:mt-4 md:h-[calc(100vh-100px)]
          `}
        >
          <div className="flex flex-col h-full px-6 py-8">
            {/* HEADER */}
            <div className="mb-12 text-center">
              <div className="flex items-center justify-center gap-3 mb-2.5">

              </div>
              <h2 className="text-[28px] font-cormorant font-medium text-stone-900 leading-tight">
                {t("myAccount") || "My Account"}
              </h2>
            </div>

            {/* NAV */}
            <nav className="space-y-1 flex-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`
                      group flex items-center gap-3 px-4 py-3 rounded-xl
                      text-[14px] font-medium transition-all duration-300
                      ${isActive
                        ? "bg-stone-900 text-white shadow-md"
                        : "text-stone-500 hover:bg-stone-50 hover:text-stone-900"
                      }
                    `}
                  >
                    <span
                      className={`text-[18px] transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-stone-200" : "text-stone-400"
                        }`}
                    >
                      {item.icon}
                    </span>
                    <span className="tracking-tight">{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* LOGOUT BUTTON */}
            <div className="mt-4 pt-4 border-t border-stone-100/50">
              <button
                onClick={logout}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 rounded-xl
                  text-[14px] font-medium transition-all duration-300
                  text-red-500 hover:bg-red-50 hover:text-red-600
                  ${isAr ? "flex-row-reverse text-right" : "text-left"}
                `}
              >
                <FiLogOut className="text-[18px]" />
                <span className="tracking-tight">{t("logout") || "Logout"}</span>
              </button>
            </div>

            {/* FOOTER */}
            <div className="mt-6 pt-6 border-t border-stone-100">
              <p
                className={`text-[12px] text-stone-400 leading-relaxed ${isAr ? "text-right" : "text-left"
                  }`}
              >
                {t("premiumExperience") || "Experience the art of time."}
              </p>
            </div>
          </div>
        </aside>

        {/* MAIN */}
        <main className="flex-1 min-w-0 transition-all duration-500">
          <div className="h-full px-0 md:px-4">
            <div className="bg-white border border-stone-100 md:rounded-3xl p-6 md:p-10 min-h-[calc(100vh-140px)] shadow-sm md:mt-4">
              {children}
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
