import React from 'react';
import { FiMail } from 'react-icons/fi';

export default function Subscribe() {
    return (
        
        <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 max-w-xl space-y-4 ml-20">
                <h2 className="font-cormorant text-5xl md:text-6xl text-black font-light leading-tight">
                    Subscribe for Exclusive Updates
                </h2>
                <p className="Mona Sans text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-md">
                    Join our mailing list to receive early access, limited-edition alerts, and insider updates directly from the Montero team.
                </p>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2 flex justify-start lg:justify-end mr-30">
                <div className="flex w-full max-w-2xl gap-5 h-[60px]">
                    <div className="flex-1 bg-[#E6E6E6] flex items-center px-6 h-full">
                        <FiMail className="text-xl text-gray-500 mr-4" />
                        <input
                            type="email"
                            placeholder="Enter your e-mail"
                            className="bg-transparent w-full outline-none text-gray-800 placeholder-gray-500 Mona Sans text-sm font-light h-full"
                        />
                    </div>
                    <button className="bg-black text-white px-10 Mona Sans text-sm font-normal h-full whitespace-nowrap hover:bg-gray-900 transition-colors">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </section>
    );
}
