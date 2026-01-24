"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircleIcon, XCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
import { getOrderStatus } from "@/actions/order";

import { useTranslation } from "react-i18next";
import "@/lib/i18n";

function SuccessContent() {
    const { t, i18n } = useTranslation();
    const router = useRouter();
    const isAr = i18n.language === "ar";
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const [status, setStatus] = useState("checking"); // checking, paid, pending, error
    const [timeLeft, setTimeLeft] = useState(360); // 6 minutes in seconds
    const [attempts, setAttempts] = useState(0);
    const MAX_ATTEMPTS = 72; // Polling 72 times (72 * 5s = 360s)

    // Smooth second-by-second countdown
    useEffect(() => {
        if (status !== "checking" && status !== "pending") return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [status]);

    // Redirect when time runs out
    useEffect(() => {
        if (timeLeft === 0 && (status === "checking" || status === "pending")) {
            router.push(`/payment-failed?orderId=${orderId}`);
        }
    }, [timeLeft, status, orderId, router]);

    // Status polling every 5 seconds
    useEffect(() => {
        if (!orderId) {
            setStatus("error");
            return;
        }

        if (status === "paid" || status === "error") return;

        const checkStatus = async () => {
            try {
                const data = await getOrderStatus(orderId);
                console.log("Status check data:", data);
                if (data.paymentStatus === "paid") {
                    setStatus("paid");
                } else if (data.paymentStatus === "failed") {
                    router.push(`/payment-failed?orderId=${orderId}`);
                } else {
                    setStatus("pending");
                    if (attempts < MAX_ATTEMPTS) {
                        setTimeout(() => setAttempts(prev => prev + 1), 5000);
                    }
                }
            } catch (error) {
                console.error("Error checking order status:", error);
                // Don't set error state immediately, keep trying until timeout
            }
        };

        checkStatus();
    }, [orderId, attempts]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className={`min-h-screen bg-white flex items-center justify-center px-4 ${isAr ? "lang-ar" : ""}`}>
            <div className="max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    {status === "checking" || status === "pending" ? (
                        <div className="bg-blue-100 p-3 rounded-full animate-pulse">
                            <ClockIcon className="h-12 w-12 text-blue-600" aria-hidden="true" />
                        </div>
                    ) : status === "paid" ? (
                        <div className="bg-green-100 p-3 rounded-full">
                            <CheckCircleIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
                        </div>
                    ) : (
                        <div className="bg-red-100 p-3 rounded-full">
                            <XCircleIcon className="h-12 w-12 text-red-600" aria-hidden="true" />
                        </div>
                    )}
                </div>

                <h1 className="text-3xl sm:text-4xl font-cormorant text-gray-900 mb-4">
                    {status === "paid" ? t("paymentSuccessful") :
                        status === "error" ? t("somethingWentWrong") :
                            t("verifyingPayment")}
                </h1>
                <p className="monaSans text-neutral-500 text-[15px] sm:text-[17.1px] leading-relaxed tracking-tight font-light mb-8">
                    {status === "paid" ? t("paymentSuccessDesc") :
                        status === "pending" ? t("verifyingPaymentDesc") :
                            status === "error" ? t("couldntVerifyOrder") :
                                t("pleaseWaitConfirm")}
                </p>

                {(status === "checking" || status === "pending") && (
                    <div className="mb-10 flex flex-col items-center animate-fade-in">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-2 font-medium">Verification Window</span>
                        <div className="flex items-center gap-3 bg-neutral-50 px-6 py-3 rounded-full border border-neutral-100 shadow-sm">
                            <span className="text-xl font-mono font-bold text-neutral-900 tracking-widest">
                                {formatTime(timeLeft)}
                            </span>
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse" />
                        </div>
                    </div>
                )}

                {orderId && (
                    <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-6 py-4 mb-10 inline-block shadow-sm">
                        <span className="text-[10px] text-neutral-400 block mb-1 uppercase tracking-[0.2em] font-medium">{t("orderReference")}</span>
                        <span className="text-sm font-mono font-bold text-neutral-900 tracking-wider ">{orderId}</span>
                    </div>
                )}

                <div className="flex flex-col gap-3">
                    {status === "paid" && (
                        <>
                            <Link
                                href="/"
                                className="w-full bg-black text-white py-4 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:bg-neutral-800 active:scale-[0.98] flex items-center justify-center"
                            >
                                {t("continueShopping")}
                            </Link>
                            <Link
                                href="/profile/view-orders"
                                className="w-full bg-white text-black border border-neutral-200 py-4 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium transition-all duration-300 hover:bg-neutral-50 active:scale-[0.98] flex items-center justify-center"
                            >
                                {t("viewYourOrders") || "View Orders"}
                            </Link>
                        </>
                    )}

                </div>

                {status === "paid" && (
                    <p className="mt-8 text-sm text-gray-400">
                        {t("confirmationEmailSent")}
                    </p>
                )}
            </div>
        </div>
    );
}

export default function PaymentSuccessPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        }>
            <SuccessContent />
        </Suspense>
    );
}
