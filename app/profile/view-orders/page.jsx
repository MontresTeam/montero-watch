"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FiPackage, FiTruck, FiCheckCircle, FiArrowLeft, FiArrowRight, FiExternalLink, FiClock } from "react-icons/fi";
import { useAuth } from "@/context/AuthContext";
import api from "@/lib/api";
import "@/lib/i18n";

function ViewOrdersPage() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();
    const { t, i18n } = useTranslation();
    const isAr = i18n.language?.toLowerCase().startsWith("ar");

    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            if (!user) return;

            try {
                const userId = user.id || user._id;
                const { data } = await api.get(`/order/view-orders/${userId}`);
                if (data.success) {
                    setOrders(data.orders);
                }
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (!authLoading) {
            fetchOrders();
        }
    }, [user, authLoading]);

    if (authLoading || isLoading) {
        return (
            <div className="flex h-[60vh] items-center justify-center">
                <div className="animate-pulse flex flex-col items-center gap-4">
                    <div className="w-10 h-10 rounded-full border-2 border-stone-200 border-t-stone-900 animate-spin" />
                    <span className="text-stone-400 tracking-[0.25em] uppercase text-[10px]">
                        {t("loading") || "Loading..."}
                    </span>
                </div>
            </div>
        );
    }

    if (!user) {
        if (typeof window !== "undefined") router.push("/login");
        return null;
    }

    return (
        <div className={`w-full max-w-6xl mx-auto space-y-10 relative ${isAr ? "lang-ar text-right" : "text-left"}`} dir={isAr ? "rtl" : "ltr"}>

            {/* Top Corner Action */}
            <div className={`absolute top-0 ${isAr ? "left-0" : "right-0"} z-10`}>
                <button
                    onClick={() => router.push("/profile")}
                    className="p-3 bg-stone-50 text-stone-900 rounded-full border border-stone-200 shadow-sm hover:bg-stone-900 hover:text-white transition-all duration-300"
                    aria-label={t("backToProfile") || "Back"}
                >
                    {isAr ? <FiArrowLeft size={22} /> : <FiArrowRight size={22} />}
                </button>
            </div>

            {/* Header Section */}
            <section className="pb-10 border-b border-stone-100">
                <div className="space-y-2">
                    <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-400 uppercase block">
                        {t("monteroExperience") || "Montero Experience"}
                    </span>
                    <h1 className="font-cormorant text-3xl md:text-5xl font-medium text-stone-900 leading-tight">
                        {t("myOrders") || "My Orders"}
                    </h1>
                    <p className="text-stone-500 text-sm tracking-wide">
                        {t("orderHistoryDesc") || "Manage your collection and track active shipments."}
                    </p>
                </div>
            </section>

            {/* Orders List */}
            <div className="space-y-8">
                {orders && orders.length > 0 ? (
                    orders.map((order) => (
                        <div
                            key={order.orderId}
                            className="group bg-white rounded-[2rem] border border-stone-100 overflow-hidden hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500"
                        >
                            <div className="flex flex-col lg:flex-row">

                                {/* Product Visual */}
                                <div className="lg:w-72 h-64 lg:h-auto bg-stone-50 relative overflow-hidden group-hover:bg-stone-100 transition-colors duration-500">
                                    <Image
                                        src={order.image}
                                        alt={order.orderName}
                                        fill
                                        className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-stone-900/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Info Area */}
                                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between space-y-8">

                                    {/* Row 1: Status and ID */}
                                    <div className="flex flex-wrap justify-between items-start gap-4">
                                        <div className="space-y-1">
                                            <div className="flex flex-wrap items-center gap-3">
                                                <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-stone-900">
                                                    {order.orderName}
                                                </h3>
                                                <span className={`
                          px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest flex items-center gap-2
                          ${order.status === "DELIVERED" || order.status === "COMPLETED"
                                                        ? "bg-emerald-50 text-emerald-600 border border-emerald-100"
                                                        : "bg-stone-900 text-white"
                                                    }
                        `}>
                                                    {order.status === "DELIVERED" || order.status === "COMPLETED" ? (
                                                        <FiCheckCircle />
                                                    ) : (
                                                        <FiClock className="animate-pulse" />
                                                    )}
                                                    {order.status}
                                                </span>
                                            </div>
                                            <p className="text-[11px] text-stone-400 font-mono tracking-wider">
                                                {order.reference}
                                            </p>
                                            <p className="text-stone-500 text-sm italic">
                                                {order.description}
                                            </p>
                                        </div>

                                        <div className={`${isAr ? "text-left" : "text-right"}`}>
                                            <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-1">
                                                {t("total") || "Amount"}
                                            </p>
                                            <p className="text-2xl font-cormorant text-stone-900 font-medium">
                                                {order.total}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Row 2: Timeline Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 border-t border-stone-50">
                                        <div className="space-y-1.5">
                                            <label className="block text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold">
                                                {t("orderDate") || "Ordered"}
                                            </label>
                                            <div className="text-[14px] text-stone-800 font-medium flex items-center gap-2">
                                                <FiPackage className="text-stone-300" />
                                                {order.orderDate}
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="block text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold">
                                                {t(order.secondaryDateLabel.toLowerCase()) || order.secondaryDateLabel}
                                            </label>
                                            <div className="text-[14px] text-stone-800 font-medium flex items-center gap-2">
                                                <FiTruck className="text-stone-300" />
                                                March 01, 2026
                                            </div>
                                        </div>

                                        <div className="flex items-end lg:justify-end pt-4 lg:pt-0">
                                            <button
                                                disabled
                                                className="w-full sm:w-auto bg-stone-200 text-stone-400 px-8 py-3.5 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] cursor-not-allowed flex items-center justify-center gap-2"
                                            >
                                                {t("trackOrder") || "Track Shipment"}
                                                <FiExternalLink />
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="w-full bg-stone-50 border-t border-stone-100 p-4 text-center">
                                <p className="text-[12px] text-stone-500 font-medium tracking-wide">
                                    {t("deliveryStartInfo") || "Delivery has commenced as scheduled in March 2026. Tracking details will be provided once your order is dispatched."}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="py-20 text-center space-y-4 bg-stone-50/50 rounded-[2rem] border border-stone-100 border-dashed">
                        <FiPackage size={40} className="mx-auto text-stone-200" />
                        <p className="text-stone-400 font-medium italic">
                            {t("noOrdersFound") || "Your collection is waiting to begin."}
                        </p>
                        <button
                            onClick={() => router.push("/product")}
                            className="text-[10px] font-bold uppercase tracking-widest border border-stone-200 px-6 py-3 rounded-full bg-stone-900 text-white transition-all shadow-sm"
                        >
                            {t("discoverCollection") || "Discover The Collection"}
                        </button>
                    </div>
                )}
            </div>

            {/* Concierge Assistance */}
            <div className="p-10 border border-stone-100 rounded-[2.5rem] bg-stone-50/50 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2 text-center md:text-left">
                    <h4 className="text-[12px] font-black uppercase tracking-[0.25em] text-stone-900">
                        {t("needOrderAssistance") || "Questions Regarding Your Order?"}
                    </h4>
                    <p className="text-[14px] text-stone-400 leading-relaxed max-w-lg italic">
                        {t("conciergeDesc") || "Our concierge team is at your disposal for any delivery or custom requests."}
                    </p>
                </div>
                <button className="whitespace-nowrap bg-white text-stone-900 border border-stone-200 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white hover:border-stone-900 transition-all shadow-sm active:scale-95">
                    {t("contactConcierge") || "Concierge Support"}
                </button>
            </div>

        </div>
    );
}

export default ViewOrdersPage;
