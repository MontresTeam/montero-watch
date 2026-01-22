"use client";

import React from 'react'
import Order from '../components/order/Order'
import Navbar from '../components/navBar/NavBar'
import Footer from '../components/home/Footer/Footer'
import { useTranslation } from 'react-i18next'

function page() {
    const { i18n } = useTranslation();
    const isAr = i18n.language === "ar";

    return (
        <div className={isAr ? "lang-ar" : ""}>
            <Navbar />
            <Order />
            <Footer />
        </div>
    )
}

export default page