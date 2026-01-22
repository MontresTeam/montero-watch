"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import api from "@/lib/api";
import { toast } from "react-toastify";

const faqs = [
  {
    question: "Do the watches come with a warranty?",
    answer:
      "Yes, all Montero watches come with an international warranty covering manufacturing defects.",
  },
  {
    question: "Are the watches scratch-resistant?",
    answer:
      "Our watches use scratch-resistant sapphire crystal to ensure durability.",
  },
  {
    question: "What materials are used to make your watches?",
    answer:
      "We use premium stainless steel, sapphire crystal, and genuine leather straps.",
  },
  {
    question: "How can I place an order?",
    answer:
      "Orders can be placed directly through our website during product launches.",
  },
];

export default function FaqAndSubscribe() {
  const [openIndex, setOpenIndex] = useState(null);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("/user/subscribe", { email });
      toast.success(response.data.message || "Subscribed successfully!");
      setEmail("");
    } catch (error) {
      const errorMessage = error.response?.data?.error || error.response?.data?.message || "An error occurred.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* FAQ SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-28">

          {/* LEFT */}
          <div>
            <h2 className="text-4xl mb-6 font-cormorant font-bold">
              Frequently Asked Question
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Each beach was chosen for its cultural significance, beauty, and
              global reputation — together forming the emotional core of
              Montero.
            </p>

            <p className="text-gray-600 leading-relaxed max-w-md mt-4">
              Each beach was chosen for its cultural significance, beauty, and
              global reputation — together forming the emotional core of
              Montero.
            </p>
          </div>

          {/* RIGHT FAQ */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className=" text-black pb-4"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[#1B263B] font-medium">
                    {faq.question}
                  </span>

                  <span
                    className={`text-xl transition-transform ${openIndex === index ? "rotate-45" : ""
                      }`}
                  >
                    +
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* SUBSCRIBE SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <div>
            <h2 className="font-cormorant text-4xl mb-4">
              Subscribe for Exclusive Updates
            </h2>

            <p className="text-gray-600 max-w-md">
              Join our mailing list to receive early access, limited-edition
              alerts, and insider updates directly from the Montero team.
            </p>
          </div>

          {/* RIGHT */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center bg-gray-100 border border-gray-200 focus-within:border-black focus-within:ring-1 focus-within:ring-black/5 px-4 py-3 w-full transition-all group">
              <Mail className="mr-4 text-gray-400 group-focus-within:text-black transition-colors" size={20} />
              <input
                type="email"
                required
                placeholder="Enter your e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent outline-none w-full text-sm placeholder:text-gray-400"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-8 py-3 whitespace-nowrap hover:bg-gray-900 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md font-medium"
            >
              {loading ? "..." : "Subscribe Now"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
