import React from 'react'
import Order from '../components/order/Order'
import Navbar from '../components/navBar/NavBar'
import Footer from '../components/home/Footer/Footer'
function page() {
    return (
        <div className='bg-white min-h-screen py-6'>
            <Navbar />
            <Order />
            <Footer />
        </div>
    )
}

export default page