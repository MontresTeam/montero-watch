"use client";

import { useState } from 'react'
import { toast } from 'react-toastify';
import { sendContactMessage } from "../../../actions/contact";

export default function Form() {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { placeholder, value } = e.target;
        const nameMap = {
            'Last Name': 'lastName',
            'First Name': 'firstName',
            'Email': 'email',
            'Phone Number': 'phone',
            'Message': 'message'
        };
        setFormData(prev => ({
            ...prev,
            [nameMap[placeholder]]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.firstName || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields.");
            return;
        }

        setLoading(true);
        try {
            const contactPayload = {
                name: `${formData.firstName} ${formData.lastName}`.trim(),
                email: formData.email,
                subject: "New Contact Message",
                message: `Phone: ${formData.phone || 'N/A'}\n\n${formData.message}`
            };

            await sendContactMessage(contactPayload);
            toast.success("Message sent successfully!");
            setFormData({
                lastName: '',
                firstName: '',
                email: '',
                phone: '',
                message: ''
            });
        } catch (error) {
            const errMsg = error?.response?.data?.message || "Something went wrong. Please try again.";
            toast.error(errMsg);
        } finally {
            setLoading(false);
        }
    };

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

            <form onSubmit={handleSubmit} className="space-y-4 Mona Sans">
                {/* Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 font-light"
                    />
                    <input
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 font-light"
                    />
                </div>

                {/* Email */}
                <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 font-light"
                />

                {/* Phone */}
                <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 font-light"
                />

                {/* Message */}
                <textarea
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3 rounded-md outline-none focus:ring-1 focus:ring-gray-300 transition placeholder:text-gray-400 resize-none font-light"
                />

                {/* Button */}
                <div className="flex justify-end pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-black text-white px-8 py-3 rounded-sm hover:opacity-80 transition text-sm font-medium disabled:opacity-50"
                    >
                        {loading ? 'Sending...' : 'Subscribe Now'}
                    </button>
                </div>
            </form>
        </div>
    )
}