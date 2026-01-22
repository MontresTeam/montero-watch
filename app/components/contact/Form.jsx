"use client";

import { useState } from 'react'
import { toast } from 'react-toastify';
import { sendContactMessage } from "../../../actions/contact";
import { useTranslation } from 'react-i18next';
import "@/lib/i18n";

export default function Form() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language?.toLowerCase() === 'ar';

  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { placeholder, value, name } = e.target;
    // Map placeholders or use name attribute if available
    const key = name || {
      'Doe': 'lastName',
      'John': 'firstName',
      'you@example.com': 'email',
      '(123) 456-7890': 'phone',
      'Type your message here...': 'message'
    }[placeholder];

    if (key) {
      setFormData(prev => ({
        ...prev,
        [key]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      toast.error(t("fillRequired"));
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
      toast.success(t("successMessage"));
      setFormData({
        lastName: '',
        firstName: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      const errMsg = error?.response?.data?.message || t("errorMessage");
      toast.error(errMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 ${isAr ? 'lang-ar' : ''}`}>
      <div className="mb-8 sm:mb-10 max-w-xl">
        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-900 font-cormorant tracking-tight mb-3 sm:mb-4 leading-tight">
          {t("timeConversation")}
        </h2>

        {/* SUBHEADING */}
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-sans">
          {t("reachOut")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 Mona Sans">
        {/* Name Row - Stack vertically on mobile */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              {t("firstName")}
            </label>
            <input
              type="text"
              name="firstName"
              placeholder={t("firstName")}
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3.5 sm:py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition placeholder:text-gray-400 font-light text-base sm:text-sm min-h-[52px] sm:min-h-[48px]"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              {t("lastName")}
            </label>
            <input
              type="text"
              name="lastName"
              placeholder={t("lastName")}
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3.5 sm:py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition placeholder:text-gray-400 font-light text-base sm:text-sm min-h-[52px] sm:min-h-[48px]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
            {t("email")}
          </label>
          <input
            type="email"
            name="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3.5 sm:py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition placeholder:text-gray-400 font-light text-base sm:text-sm min-h-[52px] sm:min-h-[48px]"
          />
        </div>

        {/* Phone */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
            {t("phone")}
          </label>
          <input
            type="tel"
            name="phone"
            placeholder="+123 456 7890"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3.5 sm:py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition placeholder:text-gray-400 font-light text-base sm:text-sm min-h-[52px] sm:min-h-[48px]"
          />
        </div>

        {/* Message */}
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
            {t("message")}
          </label>
          <textarea
            name="message"
            placeholder={t("messagePlaceholder")}
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full bg-[#F2F2F2] border border-gray-300 text-gray-700 px-4 py-3.5 sm:py-3 rounded-md outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition placeholder:text-gray-400 resize-y font-light text-base sm:text-sm min-h-[120px]"
          />
        </div>

        {/* Button - Full width on mobile, right-aligned on larger screens */}
        <div className="flex flex-col sm:flex-row sm:justify-end pt-2 sm:pt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-4 sm:py-3 rounded-sm hover:opacity-90 active:opacity-80 transition text-sm sm:text-base font-medium min-h-[52px] sm:min-h-[48px] touch-manipulation disabled:opacity-50"
          >
            {loading ? t("sending") : t("sendNow")}
          </button>
        </div>

        {/* Optional: Add a small note for mobile users */}
        <p className="text-xs text-gray-400 text-center sm:text-left mt-4 sm:mt-2">
          {t("tapField")}
        </p>
      </form>
    </div>
  );
}