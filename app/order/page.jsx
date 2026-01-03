import React from 'react'
import Order from '../components/order/Order'
import Navbar from '../components/navBar/NavBar'
import Footer from '../components/home/Footer/Footer'
function page() {
    return (
        <>
            <Navbar />
            <Order />
            <Footer />
        </>
    )
}

export default page