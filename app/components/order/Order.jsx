import React from 'react';
import Image from 'next/image';
import { IoCloseCircleOutline } from "react-icons/io5";

function Order() {
    return (
        <div className="container mx-auto px-4 py-8 md:py-16 max-w-7xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Left Column - Billing Address */}
                <div className="bg-gray-50 p-6 md:p-8 rounded-2xl lg:col-span-5">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Billing Address</h2>

                    <form className="space-y-4">
                        {/* Full Name */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1.5 pl-1">Full Name</label>
                            <input
                                type="text"
                                placeholder="Enter your name..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1.5 pl-1">Phone Number</label>
                            <div className="flex gap-2">
                                <div className="relative">
                                    <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 appearance-none pr-8 w-[80px]">
                                        <option>UAE</option>
                                    </select>
                                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">▼</div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="+97 1559 86286"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                                />
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1.5 pl-1">Address</label>
                            <input
                                type="text"
                                placeholder="Enter your address"
                                className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                            />
                        </div>

                        {/* Country & State */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1.5 pl-1">Country</label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 appearance-none text-gray-400">
                                        <option>Select your country</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">▼</div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1.5 pl-1">State</label>
                                <div className="relative">
                                    <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 appearance-none text-gray-400">
                                        <option>Select your state</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">▼</div>
                                </div>
                            </div>
                        </div>

                        {/* City & Zip Code */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-gray-600 mb-1.5 pl-1">City</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-600 mb-1.5 pl-1">Zip/ Post code</label>
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                                />
                            </div>
                        </div>

                        {/* Delivery Address Selection */}
                        <div>
                            <label className="block text-sm text-gray-600 mb-1.5 pl-1">Select the Delivery Address</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Enter your name..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                                />
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div className="pt-6">
                            <div className='bg-white p-6 rounded-xl'>
                                <h3 className="text-base font-bold text-gray-900 mb-4">Payment Method</h3>
                                <div className="flex gap-4 items-center">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="payment" className="w-4 h-4 text-black border-gray-300 focus:ring-black" />
                                        <div className="h-6 w-16 bg-[#ffeed9] flex items-center justify-center rounded px-1">
                                            <span className="font-bold text-xs" style={{ color: '#fcb61a' }}>tamara</span>
                                        </div>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="payment" className="w-4 h-4 text-black border-gray-300 focus:ring-black" />
                                        <div className="h-6 w-16 bg-[#ccfce5] flex items-center justify-center rounded px-1">
                                            <span className="font-bold text-xs" style={{ color: '#00d082' }}>tabby</span>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Right Column - Your Order */}
                <div className="bg-gray-50 p-6 md:p-10 rounded-2xl h-fit lg:col-span-7">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Your Order</h2>

                    {/* Product Card */}
                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative mb-8">
                        <button className="absolute top-4 right-4 text-[#9B1111] hover:text-red-600">
                            <IoCloseCircleOutline size={24} />
                        </button>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="w-full md:w-32 h-32 flex-shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2 relative">
                                <Image
                                    src="/images/MainProducts/blueWatch/blue-watch1.png"
                                    alt="Montero Watch"
                                    width={100}
                                    height={100}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                            <div className="flex-1 pt-2">
                                <h3 className="font-semibold text-gray-900 text-lg mb-2">Montero English Edition</h3>
                                <div className="text-xl font-bold text-gray-900 mb-4">฿ 860</div>

                                <div className="flex flex-col sm:flex-row justify-between items-end gap-4 mb-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                                            Sapphire Crystal
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                                            5 ATM Water Resistance
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                                            Seiko NH34 GMT Movement
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-900"></span>
                                            World-Time Bezel Concept
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center gap-1 flex-shrink-0'>
                                        <span className="text-[10px] text-gray-400 uppercase tracking-wide">Quantity</span>
                                        <div className="flex items-center border border-gray-200 rounded-md bg-white">
                                            <button className="px-3 py-1 text-gray-500 hover:text-black">-</button>
                                            <span className="px-2 text-sm text-gray-700 font-medium">2</span>
                                            <button className="px-3 py-1 text-gray-500 hover:text-black">+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Coupon Code */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">Coupon Code</h3>
                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Enter your code..."
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 placeholder-gray-300"
                            />
                            <button className="bg-white border border-gray-900 text-gray-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                                Apply Code
                            </button>
                        </div>
                    </div>

                    {/* Totals */}
                    <div className="space-y-4 border-b border-gray-200 pb-8 mb-8">
                        <div className="flex justify-between items-center text-gray-600">
                            <span className="text-base text-gray-700">Subtotal</span>
                            <span className="text-base font-medium text-gray-900">฿ 1,720</span>
                        </div>
                        <div className="flex justify-between items-center text-gray-600">
                            <span className="text-base text-gray-700">Delivery</span>
                            <span className="text-base font-medium text-gray-900">฿ 10.00</span>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mb-10">
                        <span className="text-xl font-medium text-gray-900">Total</span>
                        <span className="text-xl font-bold text-gray-900">฿ 1,730</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 justify-end">
                        <button className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-none text-sm font-medium hover:bg-gray-50 transition-colors min-w-[120px]">
                            Cancel
                        </button>
                        <button className="px-8 py-3 bg-black text-white rounded-none text-sm font-medium hover:bg-gray-800 transition-colors min-w-[120px]">
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order