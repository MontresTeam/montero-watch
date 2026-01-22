"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";
import "@/lib/i18n";

import { getOrderStatus } from "@/actions/order";
import { useEffect, useState } from "react";

function FailedContent() {
    const { t, i18n } = useTranslation();
    const isAr = i18n.language === "ar";
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const [productId, setProductId] = useState(null);
    const [loadingOrder, setLoadingOrder] = useState(false);

    useEffect(() => {
        if (orderId) {
            const fetchOrder = async () => {
                setLoadingOrder(true);
                try {
                    const data = await getOrderStatus(orderId);
                    if (data && data.items && data.items.length > 0) {
                        const id = data.items[0].productId?._id || data.items[0].productId;
                        setProductId(id);
                    }
                } catch (error) {
                    console.error("Error fetching order for retry:", error);
                } finally {
                    setLoadingOrder(false);
                }
            };
            fetchOrder();
        }
    }, [orderId]);

    const retryUrl = productId ? `/order?productId=${productId}` : "/order";

    return (
        <div className={`min-h-screen bg-white flex items-center justify-center px-4 ${isAr ? "lang-ar" : ""}`}>
            <div className="max-w-md w-full text-center">
                <div className="flex justify-center mb-8">
                    <div className="bg-red-50 p-4 rounded-full">
                        <XCircleIcon className="h-10 w-10 text-red-500" aria-hidden="true" />
                    </div>
                </div>

                <h1 className="text-3xl sm:text-4xl font-cormorant text-gray-900 mb-2">
                    {t("paymentFailed")}
                </h1>
                <p className="monaSans text-neutral-400 text-sm sm:text-[15px] leading-relaxed tracking-tight font-light mb-10 px-6">
                    {t("paymentFailedDesc")}
                </p>

                {orderId && (
                    <div className="bg-neutral-50/50 border border-neutral-100 rounded-xl px-10 py-5 mb-10 inline-block shadow-sm">
                        <span className="text-[10px] text-neutral-400 block mb-2 uppercase tracking-[0.25em] font-semibold">{t("orderReference")}</span>
                        <span className="text-sm font-mono font-bold text-neutral-900 tracking-widest">{orderId}</span>
                    </div>
                )}

                <div className="flex flex-col gap-3 max-w-sm mx-auto">
                    <Link
                        href={retryUrl}
                        className={`w-full bg-black text-white py-4 text-xs sm:text-sm uppercase tracking-[0.3em] font-medium transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98] flex items-center justify-center ${loadingOrder ? 'opacity-50 pointer-events-none' : ''}`}
                    >
                        {loadingOrder ? (
                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                            t("retryPayment")
                        )}
                    </Link>
                    <Link
                        href="/"
                        className="w-full border border-neutral-200 text-neutral-800 py-4 text-xs sm:text-sm uppercase tracking-[0.3em] font-medium transition-all duration-200 hover:bg-neutral-50 flex items-center justify-center"
                    >
                        {t("backToHome")}
                    </Link>
                </div>

                <div className="mt-12 monaSans text-neutral-400 text-sm">
                    {t("needHelp")} <Link href="/contact" className="text-neutral-900 underline underline-offset-8 decoration-neutral-300 hover:decoration-black transition-all">{t("contactSupport")}</Link>
                </div>
            </div>
        </div>
    );
}

export default function PaymentFailedPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        }>
            <FailedContent />
        </Suspense>
    );
}
