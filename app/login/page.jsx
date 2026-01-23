"use client";

import React from 'react'
import Navbar from '../components/navBar/NavBar'
import Loginpage from '../components/login/LoginPage'
import Footer from '../components/home/Footer/Footer'
import { useTranslation } from 'react-i18next'

function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { i18n, t } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className={isAr ? "lang-ar" : ""}>
      <Navbar />
      <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">{t("loading")}</div>}>
        <Loginpage />
      </React.Suspense>
      <Footer />
    </div>
  )
}

export default page