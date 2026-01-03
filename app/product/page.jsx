import React from 'react'
import Navbar from '../components/navBar/NavBar'
import ProductBanner from '../components/mainproduct/productBanner/ProductBanner'
import Footer from '../components/home/Footer/Footer'
import ProductDetails from '../components/mainproduct/productDescription/ProductDetails'
import About from '../components/mainproduct/about/About'
import WatchFeatures from '../components/mainproduct/features/WatchFeatures'
import Quote from '../components/mainproduct/quote/Quote'
import SecondQuote from '../components/mainproduct/Quote2/SecondQuote'
import Subscribe from '../components/mainproduct/subscribe/Subscribe'
function page() {
  return (
    <>
      <Navbar />  
      <div className='overflow-hidden'>
      <ProductBanner />
      <ProductDetails />
      <About />
      <WatchFeatures />
      <Quote />
      <SecondQuote/>
      <Subscribe />
      </div>

     
      <Footer />
    </>
  )
}

export default page