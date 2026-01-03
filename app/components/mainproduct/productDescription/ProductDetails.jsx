import React from 'react'
import Right from './Right'
import Left from './Left'

function ProductDetails() {
  return (
    <section className="w-full h-auto min-h-screen lg:h-screen bg-white overflow-hidden py-12 md:py-0">
      <div className="flex h-full w-full max-w-7xl mx-auto flex-col lg:flex-row items-stretch">

        {/* LEFT — 65% */}
        <div className="h-1/2 lg:h-full w-full lg:w-[65%] ml-10">
          <Left />
        </div>

        {/* RIGHT — 35% */}
        <div className="h-1/2 lg:h-full w-full lg:w-[35%] flex items-center justify-center">
          <Right />
        </div>

      </div>
    </section>
  )
}

export default ProductDetails
