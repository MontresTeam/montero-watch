import React from 'react'
import Navbar from '../components/navBar/NavBar'
import Loginpage from '../components/login/LoginPage'
import Footer from '../components/home/Footer/Footer'

function page() {
  return (
    <>
      <Navbar />
      <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <Loginpage />
      </React.Suspense>
      <Footer />
    </>
  )
}

export default page