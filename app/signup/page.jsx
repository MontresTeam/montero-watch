"use client";

import React from 'react'
import Navbar from '../components/navBar/NavBar'
import Signup from '../components/signup/page'
import Footer from '../components/home/Footer/Footer'
import { useTranslation } from 'react-i18next'

function page() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  return (
    <div className={isAr ? "lang-ar" : ""}>
      <Navbar />
      <Signup />
      <Footer />
    </div>
  )
}

export default page