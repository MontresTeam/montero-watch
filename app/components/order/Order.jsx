import React from "react";
import Image from "next/image";
import { IoCloseCircleOutline } from "react-icons/io5";
import newCurrencySymbol from '../../../public/images/newSymbole.png';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import TmaraPayment from '../../../public/images/Tamara.jpeg';

function Order() {
  return (
    <div className="container mx-auto px-3 py-4 sm:py-6 md:py-8 lg:py-12 max-w-7xl">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
        {/* Left Column - Billing Address */}
        <div className="bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl lg:col-span-5">
          <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
            Billing Address
          </h2>

          <form className="space-y-2.5 sm:space-y-3 md:space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name..."
                className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                Phone Number
              </label>
              <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2">
                <div className="relative w-full sm:w-auto sm:min-w-[120px]">
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none pr-8">
                    <option>UAE (+971)</option>
                    <option>SAU (+966)</option>
                    <option>KWT (+965)</option>
                    <option>QAT (+974)</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">
                    ▼
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="55 123 4567"
                  className="flex-1 bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                Address
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
              />
            </div>

            {/* Country & State */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  Country
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none text-gray-700">
                    <option value="" disabled>Select country</option>
                    <option>United Arab Emirates</option>
                    <option>Saudi Arabia</option>
                    <option>Kuwait</option>
                    <option>Qatar</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">
                    ▼
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  State/Emirate
                </label>
                <div className="relative">
                  <select className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none text-gray-700">
                    <option value="" disabled>Select state</option>
                    <option>Dubai</option>
                    <option>Abu Dhabi</option>
                    <option>Sharjah</option>
                    <option>Riyadh</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">
                    ▼
                  </div>
                </div>
              </div>
            </div>

            {/* City & Zip Code */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  City
                </label>
                <input
                  type="text"
                  placeholder="Enter your city"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  Zip/Postal Code
                </label>
                <input
                  type="text"
                  placeholder="Enter postal code"
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                />
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="pt-3 sm:pt-4 md:pt-6">
              <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-gray-200">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                  Payment Method
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Credit/Debit Card Option */}
                  <label className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="mt-0.5 sm:mt-1 w-4 h-4 text-black border-gray-300 focus:ring-black flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                        <div className="min-w-0">
                          <span className="font-medium text-gray-900 text-sm sm:text-base">Credit/Debit Card</span>
                          <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight">
                            Pay with Visa, Mastercard, or Amex
                          </p>
                        </div>
                        <div className="flex gap-1.5 sm:gap-2 mt-1 sm:mt-0">
                          <FaCcVisa className="text-xl sm:text-2xl text-blue-900 flex-shrink-0" />
                          <FaCcMastercard className="text-xl sm:text-2xl text-red-600 flex-shrink-0" />
                          <FaCcAmex className="text-xl sm:text-2xl text-blue-600 flex-shrink-0" />
                        </div>
                      </div>
                    </div>
                  </label>

                  {/* Tamara Option */}
                  <label className="flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 border border-gray-200 rounded-lg hover:border-gray-300 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      className="mt-0.5 sm:mt-1 w-4 h-4 text-black border-gray-300 focus:ring-black flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                        <div className="min-w-0">
                          <span className="font-medium text-gray-900 text-sm sm:text-base">Pay with Tamara</span>
                          <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight">
                            Pay in 4 interest-free installments
                          </p>
                        </div>
                        <div className="relative w-14 h-5 sm:w-16 sm:h-6 mt-1 sm:mt-0">
                          <Image
                            src={TmaraPayment}
                            alt="Tamara Payment"
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 56px, 64px"
                          />
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Right Column - Your Order */}
        <div className="bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl lg:col-span-7">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                Your Order
              </h2>

              {/* Order Items Container */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {/* Product Card */}
                <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm relative group">
                  <button 
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#9B1111] hover:text-red-600 transition-colors z-10 bg-white rounded-full p-0.5"
                    aria-label="Remove item"
                  >
                    <IoCloseCircleOutline size={18} className="sm:size-5 md:size-6" />
                  </button>
                  
                  <div className="flex gap-3 sm:gap-4">
                    {/* Product Image */}
                    <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                      <Image
                        src="/images/MainProducts/blueWatch/blue-watch1.png"
                        alt="Montero Watch"
                        width={96}
                        height={96}
                        className="object-contain w-full h-full"
                        priority
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      {/* Product Title & Price */}
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2 sm:mb-3">
                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg pr-8 sm:pr-10 line-clamp-2">
                          Montero English Edition
                        </h3>
                        <div className="flex items-center text-base sm:text-lg md:text-xl font-bold text-gray-900">
                          <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1.5 flex-shrink-0">
                            <Image
                              src={newCurrencySymbol}
                              alt="Currency"
                              fill
                              className="object-contain"
                              sizes="(max-width: 640px) 14px, (max-width: 768px) 16px, 20px"
                            />
                          </div>
                          <span>860</span>
                        </div>
                      </div>
                      
                      {/* Product Features */}
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0"></span>
                          <span className="text-xs text-gray-600 truncate">Sapphire Crystal</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0"></span>
                          <span className="text-xs text-gray-600 truncate">5 ATM Water Resistance</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0"></span>
                          <span className="text-xs text-gray-600 truncate">Seiko NH34 GMT Movement</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-900 flex-shrink-0"></span>
                          <span className="text-xs text-gray-600 truncate">World-Time Bezel Concept</span>
                        </div>
                      </div>
                      
                      {/* Quantity Control & Delivery Estimate */}
                      <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 pt-3 border-t border-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                              Quantity:
                            </span>
                            <div className="flex items-center border border-gray-200 rounded-md bg-white">
                              <button 
                                className="px-2.5 py-1 text-gray-500 hover:text-black transition-colors"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="px-2.5 py-1 text-sm text-gray-700 font-medium min-w-[2rem] text-center border-x border-gray-200">
                                2
                              </span>
                              <button 
                                className="px-2.5 py-1 text-gray-500 hover:text-black transition-colors"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                            <div className="flex flex-col">
                              <span className="text-xs text-gray-500">Delivery estimate:</span>
                              <span className="text-sm font-medium text-gray-900">March 2026</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-xs text-gray-500 mb-1">Item Total</div>
                          <div className="flex items-center justify-end text-base sm:text-lg font-bold text-gray-900">
                            <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0">
                              <Image
                                src={newCurrencySymbol}
                                alt="Currency"
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 14px, (max-width: 768px) 16px"
                              />
                            </div>
                            <span>1,720</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4 sm:mb-5">
                  Order Summary
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-700">Subtotal</span>
                      <span className="text-xs text-gray-500">(2 items)</span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-900">
                      <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5">
                        <Image
                          src={newCurrencySymbol}
                          alt="Currency"
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 14px, (max-width: 768px) 16px"
                        />
                      </div>
                      1,720
                    </div>
                  </div>
                  
                  {/* Delivery */}
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-700">Delivery</span>
                      <span className="text-xs text-gray-500">Standard shipping</span>
                    </div>
                    <div className="flex items-center text-sm font-medium text-gray-900">
                      <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5">
                        <Image
                          src={newCurrencySymbol}
                          alt="Currency"
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 14px, (max-width: 768px) 16px"
                        />
                      </div>
                     00.00
                    </div>
                  </div>
                  
                  {/* Estimated Delivery */}
                  <div className="flex justify-between items-center py-3 border-y border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-sm text-gray-700">Estimated Delivery</span>
                      <span className="text-xs text-gray-500">All items in this order</span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-900">March 2026</span>
                    </div>
                  </div>
                  
                  {/* Total */}
                  <div className="flex justify-between items-center pt-3">
                    <div className="flex flex-col">
                      <span className="text-base sm:text-lg font-bold text-gray-900">Total</span>
                     
                    </div>
                    <div className="flex items-center text-lg sm:text-xl font-bold text-gray-900">
                      <div className="relative w-4 h-4 sm:w-5 sm:h-5 mr-2">
                        <Image
                          src={newCurrencySymbol}
                          alt="Currency"
                          fill
                          className="object-contain"
                          sizes="(max-width: 640px) 16px, (max-width: 768px) 20px"
                        />
                      </div>
                      1,730
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons & Security Note */}
            <div className="mt-6 sm:mt-8">
              {/* Action Buttons */}
              <div className="flex flex-col-reverse xs:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                <button className="flex-1 xs:flex-none px-5 sm:px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors xs:min-w-[140px]">
                  Cancel Order
                </button>
                <button className="flex-1 px-5 sm:px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                  <span>Place Order & Pay</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              
              {/* Security Note */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="bg-green-50 rounded-full p-1.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 mb-1">Secure Payment</p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Your payment is secure and encrypted with 256-bit SSL. We never store your credit card details. 
                      All transactions are processed through secure payment gateways.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;