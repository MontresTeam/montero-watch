"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";
import Navbar from "../../components/navBar/NavBar";
import Footer from "../../components/home/Footer/Footer";
import productImg from "../../../public/images/BlueWatch/productBlue1.png";

// Mock Data for Orders
const orders = [
    {
        id: "ORD-7782-XY",
        productName: "Montero Blue Edition",
        status: "Shipped",
        date: "March 20, 2025",
        estimatedDelivery: "March 25, 2025",
        image: productImg,
        price: "$590.00",
    },
    {
        id: "ORD-9921-AB",
        productName: "Montero Green Edition",
        status: "Delivered",
        date: "February 14, 2025",
        estimatedDelivery: "February 18, 2025",
        image: productImg, // Using same image for demo or generic
        price: "$590.00",
    },
];

function DashboardPage() {
    const router = useRouter();
    const { t, i18n } = useTranslation();
    const isAr = i18n.language?.toLowerCase() === "ar";

    // Helper for translations with fallback
    const getTrans = (key, fallback) => {
        const val = t(key);
        return val && val !== key ? val : fallback;
    };

    return (
        <>
            <Navbar />

            <div className={`min-h-screen bg-neutral-50 pt-28 pb-20 ${isAr ? "lang-ar" : ""}`} dir={isAr ? "rtl" : "ltr"}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                        <div>
                            <h1 className="font-cormorant text-3xl md:text-4xl text-neutral-900 font-bold mb-2">
                                {getTrans("myOrders", "My Orders")}
                            </h1>
                            <p className="text-neutral-500 text-sm md:text-base">
                                {getTrans("trackMessages", "Track your shipments and view order history.")}
                            </p>
                        </div>

                        {/* Optional: Filter or Back to Profile */}
                        <button
                            onClick={() => router.push("/profile")}
                            className="self-start md:self-auto text-sm font-medium text-neutral-600 hover:text-neutral-900 transition flex items-center gap-2"
                        >
                            {isAr ? <i className="fa-solid fa-arrow-right"></i> : <i className="fa-solid fa-arrow-left"></i>}
                            {getTrans("backToProfile", "Back to Profile")}
                        </button>
                    </div>

                    {/* Orders List */}
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div
                                key={order.id}
                                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-neutral-100 transition hover:shadow-md flex flex-col md:flex-row gap-6 items-start md:items-center"
                            >
                                {/* Product Image */}
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-neutral-50 rounded-xl overflow-hidden flex-shrink-0 border border-neutral-100 relative">
                                    <Image
                                        src={order.image}
                                        alt={order.productName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Order Details */}
                                <div className="flex-grow space-y-3 w-full">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                        <div>
                                            <h3 className="font-cormorant text-xl font-bold text-neutral-900">
                                                {order.productName}
                                            </h3>
                                            <p className="text-xs text-neutral-400 font-mono mt-1">
                                                ID: {order.id}
                                            </p>
                                        </div>
                                        <span className={`
                      inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
                      ${order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-50 text-blue-700"}
                    `}>
                                            <span className={`w-1.5 h-1.5 rounded-full mr-2 ${order.status === "Delivered" ? "bg-green-600" : "bg-blue-600"}`}></span>
                                            {order.status}
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm mt-4 border-t border-neutral-50 pt-3">
                                        <div>
                                            <p className="text-neutral-400 text-xs mb-1">{getTrans("orderDate", "Order Date")}</p>
                                            <p className="text-neutral-800 font-medium">{order.date}</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-400 text-xs mb-1">{getTrans("estDelivery", "Est. Delivery")}</p>
                                            <p className="text-neutral-800 font-medium">{order.estimatedDelivery}</p>
                                        </div>
                                        <div>
                                            <p className="text-neutral-400 text-xs mb-1">{getTrans("total", "Total")}</p>
                                            <p className="text-neutral-800 font-medium">{order.price}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <div className="w-full md:w-auto flex-shrink-0 pt-2 md:pt-0">
                                    <button
                                        onClick={() => router.push("/profile/dashboard/tracking")} // Link to the tracking page
                                        className="w-full md:w-auto bg-neutral-900 hover:bg-neutral-800 text-white px-6 py-3 rounded-xl text-sm font-medium transition shadow-lg shadow-neutral-200 flex items-center justify-center gap-2"
                                    >
                                        <i className="fa-solid fa-crosshairs"></i>
                                        {getTrans("trackOrder", "Track Order")}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default DashboardPage;
