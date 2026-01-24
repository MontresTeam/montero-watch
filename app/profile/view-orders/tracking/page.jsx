"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "@/lib/i18n"; // Ensure i18n is initialized
import Navbar from "../../../components/navBar/NavBar";
import Footer from "../../../components/home/Footer/Footer";

// You might usually import icons from 'backArrow' or similar if you have them,
// but for 'tracking' specifically, we can use FontAwesome (available in layout) or simple SVGs.
// Since the layout has FontAwesome, we will use it for status icons.

const steps = [
    { status: "ordered", label: "Order Placed", icon: "fa-box", date: "Jan 20, 2025" },
    { status: "shipped", label: "Shipped", icon: "fa-plane-departure", date: "Jan 21, 2025" },
    { status: "out_for_delivery", label: "Out for Delivery", icon: "fa-truck-fast", date: "Jan 23, 2025" },
    { status: "delivered", label: "Delivered", icon: "fa-check-circle", date: "Unknown" }, // 'Unknown' or future date
];

// Mock Data for demonstration
const mockTrackingData = {
    trackingId: "DHL-123456789",
    provider: "DHL Express",
    currentStatus: 2, // 0: ordered, 1: shipped, 2: out_for_delivery, 3: delivered
    estimatedDelivery: "Jan 23, 2025 - 08:00 PM",
    history: [
        { time: "10:30 AM", date: "Jan 23, 2025", location: "Dubai, UAE", activity: "Out for delivery with courier" },
        { time: "06:45 AM", date: "Jan 23, 2025", location: "Dubai, UAE", activity: "Arrived at Delivery Facility" },
        { time: "09:00 PM", date: "Jan 21, 2025", location: "Riyadh, KSA", activity: "Departed from Sort Facility" },
        { time: "02:00 PM", date: "Jan 20, 2025", location: "Riyadh, KSA", activity: "Shipment picked up" },
    ],
};

function TrackingPage() {
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const isAr = i18n.language?.toLowerCase() === "ar";

    const [trackingInput, setTrackingInput] = useState("");
    const [trackingResult, setTrackingResult] = useState(mockTrackingData); // Default showing data for demo

    // Dynamic Translations for static text (assuming keys might not exist, using fallbacks)
    const getTrans = (key, fallback) => {
        const val = t(key);
        return val && val !== key ? val : fallback;
    };

    const handleSearch = (e) => {
        e.preventDefault();
        // Simulate search
        console.log("Searching for:", trackingInput);
        // In real app, fetch data here.
    };

    return (
        <>
            <Navbar />

            <div className={`min-h-screen bg-neutral-50 pt-24 pb-12 ${isAr ? "lang-ar" : ""}`} dir={isAr ? "rtl" : "ltr"}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

                    {/* Header Section */}
                    <div className="mb-10 text-center">
                        <h1 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                            {getTrans("trackYourOrder", "Track Your Order")}
                        </h1>
                        <p className="text-neutral-500 max-w-lg mx-auto">
                            {getTrans("trackOrderDesc", "Enter your tracking number below to see the current status of your shipment.")}
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100 mb-10">
                        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-grow">
                                <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 ml-1">
                                    {getTrans("trackingNumber", "Tracking Number")}
                                </label>
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="e.g. DHL-123456789"
                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-5 py-4 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-neutral-400 transition"
                                        value={trackingInput}
                                        onChange={(e) => setTrackingInput(e.target.value)}
                                    />
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400">
                                        <i className="fa-solid fa-barcode text-xl"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="sm:self-end">
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-neutral-800 transition shadow-lg shadow-neutral-200"
                                >
                                    {getTrans("trackButton", "Track Order")}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Result Section (Dashboard) */}
                    {trackingResult && (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Left Column: Status & Timeline */}
                            <div className="lg:col-span-2 space-y-8">

                                {/* Status Card */}
                                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-100">
                                    <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
                                        <div>
                                            <h2 className="text-lg font-semibold text-neutral-900 mb-1">
                                                {getTrans("shipmentStatus", "Shipment Status")}
                                            </h2>
                                            <p className="text-neutral-500 text-sm">
                                                {getTrans("trackingId", "ID")}: <span className="font-mono text-neutral-900">{trackingResult.trackingId}</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-3 bg-neutral-50 px-4 py-2 rounded-lg border border-neutral-100">
                                            <span className="text-2xl text-[#d40511]"><i className="fa-brands fa-dhl"></i></span> {/* DHL Color/Icon */}
                                            <span className="font-bold text-neutral-900">{trackingResult.provider}</span>
                                        </div>
                                    </div>

                                    {/* Visual Stepper */}
                                    <div className="relative">
                                        {/* Progress Line (Connecting) */}
                                        <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-neutral-100 md:hidden"></div>
                                        <div className="hidden md:block absolute top-[24px] left-0 right-0 h-[2px] bg-neutral-100"></div>

                                        {/* Active Progress Line (Dynamic width based on status) */}
                                        <div
                                            className="hidden md:block absolute top-[24px] left-0 h-[2px] bg-neutral-900 transition-all duration-700"
                                            style={{ width: `${(trackingResult.currentStatus / (steps.length - 1)) * 100}%` }}
                                        ></div>

                                        <div className="flex flex-col md:flex-row justify-between relative z-10 gap-8 md:gap-0">
                                            {steps.map((step, index) => {
                                                const isActive = index <= trackingResult.currentStatus;
                                                const isCurrent = index === trackingResult.currentStatus;

                                                return (
                                                    <div key={index} className="flex md:flex-col items-center gap-4 md:gap-2 relative">
                                                        {/* Icon Circle */}
                                                        <div className={`
                              flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 transition-all duration-300 flex-shrink-0 bg-white
                              ${isActive ? "border-neutral-900 text-neutral-900" : "border-neutral-200 text-neutral-300"}
                              ${isCurrent ? "ring-4 ring-neutral-100 scale-110" : ""}
                            `}>
                                                            <i className={`fa-solid ${step.icon} ${isActive ? "opacity-100" : "opacity-50"} md:text-lg`}></i>
                                                        </div>

                                                        {/* Text */}
                                                        <div className="md:text-center text-left">
                                                            <p className={`text-sm font-semibold transition-colors ${isActive ? "text-neutral-900" : "text-neutral-400"}`}>
                                                                {getTrans(step.status, step.label)}
                                                            </p>
                                                            <p className="text-xs text-neutral-400 mt-1">{step.date}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                {/* Detailed History */}
                                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-neutral-100">
                                    <h3 className="font-cormorant text-2xl text-neutral-900 mb-6">
                                        {getTrans("detailedHistory", "Detailed History")}
                                    </h3>
                                    <div className="relative border-l-2 border-neutral-100 ml-3 space-y-8 pl-8 py-2">
                                        {trackingResult.history.map((event, i) => (
                                            <div key={i} className="relative">
                                                {/* Dot */}
                                                <div className="absolute -left-[41px] top-1.5 w-5 h-5 bg-white border-2 border-neutral-300 rounded-full flex items-center justify-center">
                                                    {i === 0 && <div className="w-2.5 h-2.5 bg-neutral-900 rounded-full"></div>}
                                                </div>

                                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                                                    <div>
                                                        <p className="text-neutral-900 font-medium text-base">{event.activity}</p>
                                                        <p className="text-neutral-500 text-sm mt-1">{event.location}</p>
                                                    </div>
                                                    <div className="text-right sm:text-right text-left">
                                                        <p className="text-neutral-900 text-sm font-semibold">{event.time}</p>
                                                        <p className="text-neutral-400 text-xs">{event.date}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Info Cards */}
                            <div className="space-y-6">

                                {/* Estimate Delivery */}
                                <div className="bg-neutral-900 text-white p-6 rounded-2xl shadow-lg relative overflow-hidden">
                                    <div className="relative z-10">
                                        <p className="text-neutral-400 text-sm mb-2 uppercase tracking-wide">
                                            {getTrans("estimatedDelivery", "Estimated Delivery")}
                                        </p>
                                        <h3 className="text-2xl font-bold font-cormorant mb-1">
                                            {trackingResult.estimatedDelivery}
                                        </h3>
                                        <p className="text-neutral-400 text-sm">
                                            {getTrans("byEndOfDay", "By End of Day")}
                                        </p>
                                    </div>
                                    {/* Decorative element */}
                                    <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                                </div>

                                {/* Receiver Info (Mock) */}
                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100">
                                    <h4 className="text-sm font-bold text-neutral-900 uppercase mb-4 tracking-wide border-b border-neutral-100 pb-2">
                                        {getTrans("deliveryDetails", "Delivery Details")}
                                    </h4>
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-xs text-neutral-400 uppercase mb-1">{getTrans("receiver", "Receiver")}</p>
                                            <p className="text-sm text-neutral-800 font-medium">Farhan Montero</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-neutral-400 uppercase mb-1">{getTrans("address", "Destination")}</p>
                                            <p className="text-sm text-neutral-800 font-medium">Downtown Dubai, Blvd Plaza, Tower 1<br />Dubai, UAE</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Helpful Links */}
                                <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                                    <h4 className="text-sm font-bold text-neutral-900 uppercase mb-4 tracking-wide">
                                        {getTrans("needHelp", "Need Help?")}
                                    </h4>
                                    <ul className="space-y-3">
                                        <li>
                                            <a href="#" className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition group">
                                                <span className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:border-neutral-900 transition">
                                                    <i className="fa-solid fa-phone text-xs"></i>
                                                </span>
                                                Customer Support
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition group">
                                                <span className="w-8 h-8 rounded-full bg-white border border-neutral-200 flex items-center justify-center group-hover:border-neutral-900 transition">
                                                    <i className="fa-solid fa-envelope text-xs"></i>
                                                </span>
                                                Email Updates
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TrackingPage;
