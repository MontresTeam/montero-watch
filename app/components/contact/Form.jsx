import React from 'react'

export default function Form() {
    return (
        <div className="w-full max-w-2xl mx-auto px-6 py-12">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 font-cormorant">
                    Where Time Meets Conversation
                </h2>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-md mx-auto Mona Sans">
                    Let's align our constellations! Reach out and let the magic
                    of collaboration illuminate our skies.
                </p>
            </div>

            <form className="space-y-4 Mona Sans">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 font-light"
                    />
                    <input
                        type="text"
                        placeholder="First Name"
                        className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 font-light"
                    />
                </div>

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 font-light"
                />

                {/* Phone */}
                <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 font-light"
                />

                {/* Message */}
                <textarea
                    placeholder="Message"
                    rows={5}
                    className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 resize-none font-light"
                />

                {/* Button */}
                <div className="flex justify-end pt-2">
                    <button
                        type="button"
                        className="bg-black text-white px-8 py-3 rounded-sm hover:opacity-80 transition text-sm font-medium"
                    >
                        Subscribe Now
                    </button>
                </div>
            </form>
        </div>
    )
}