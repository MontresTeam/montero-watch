"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { sendContactMessage } from "../../../actions/contact";

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        subject: "New Contact Message",
        message: `Phone: ${formData.phone || "N/A"}\n\n${formData.message}`,
      };

      await sendContactMessage(payload);

      toast.success("Message sent successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* HEADING */}
      <div className="mb-8 sm:mb-10 max-w-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 font-cormorant tracking-tight mb-3 leading-tight">
          Where Time Meets Conversation
        </h2>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed Mona Sans">
          Let’s align our constellations! Reach out and let the magic of
          collaboration illuminate our skies.
        </p>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 Mona Sans">
        {/* NAME */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full bg-[#F2F2F2] border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full bg-[#F2F2F2] border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
          />
        </div>

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full bg-[#F2F2F2] border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
        />

        {/* PHONE */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full bg-[#F2F2F2] border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400"
        />

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full bg-[#F2F2F2] border border-gray-300 px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 placeholder:text-gray-400 resize-none"
        />

        {/* BUTTON */}
        <div className="flex justify-end pt-2">
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-8 py-3 rounded-sm hover:opacity-80 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Subscribe Now"}
          </button>
        </div>
      </form>
    </div>
  );
}
