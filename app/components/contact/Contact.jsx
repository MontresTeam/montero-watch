import React from 'react'
import ImgContainer from './ImgContainer'
import Form from './Form'

export default function Contact() {
  return (
    <section className="w-full bg-white py-6 sm:py-8 md:py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile heading */}
        <div className="lg:hidden mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-light text-gray-900 font-cormorant tracking-tight mb-2">
            Get In Touch
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            Reach out and let s start a conversation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* LEFT COLUMN - Image Section */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[280px] xs:h-[320px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-md sm:shadow-lg">
              <ImgContainer />
              {/* Gradient overlay for mobile */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:from-black/10"></div>
              
              {/* Text overlay for mobile */}
              <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-white font-cormorant mb-1 sm:mb-2">
                  Where Time Meets Conversation
                </h2>
                <p className="text-white/90 text-xs sm:text-sm md:text-base">
                  Let s align our constellations together
                </p>
              </div>
            </div>
            
            {/* Additional info for mobile */}
            <div className="lg:hidden mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-50 rounded-lg">
              <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                <div className="w-2 h-2 bg-black rounded-full mt-1.5"></div>
                <p className="text-xs sm:text-sm text-gray-600">Quick response within 24 hours</p>
              </div>
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-2 h-2 bg-black rounded-full mt-1.5"></div>
                <p className="text-xs sm:text-sm text-gray-600">Personalized consultation available</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Form Section */}
          <div className="order-1 lg:order-2">
            {/* Desktop form */}
            <div className="hidden lg:block">
              <Form />
            </div>
            
            {/* Mobile form */}
            <div className="lg:hidden">
              <div className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-900 mb-1 sm:mb-2">
                    Send a Message
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base">
                    Fill out the form below and we ll get back to you
                  </p>
                </div>
                <Form />
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-8 sm:mt-10 lg:mt-16 pt-6 border-t border-gray-100">
          <p className="text-center text-xs sm:text-sm text-gray-400 px-4">
            We respect your privacy and never share your information
          </p>
        </div>
      </div>
    </section>
  )
}