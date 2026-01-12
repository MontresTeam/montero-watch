"use client";

import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircleIcon, XCircleIcon, ClockIcon } from "@heroicons/react/24/outline";
import { getOrderStatus } from "@/actions/order";

function SuccessContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");
    const [status, setStatus] = useState("checking"); // checking, paid, pending, error
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        if (!orderId) {
            setStatus("error");
            return;
        }

        const checkStatus = async () => {
            try {
                const data = await getOrderStatus(orderId);
                console.log("Status check data:", data);
                if (data.paymentStatus === "paid") {
                    setStatus("paid");
                } else {
                    setStatus("pending");
                    // Try again after 3 seconds if still pending, up to 10 times
                    if (attempts < 10) {
                        setTimeout(() => setAttempts(prev => prev + 1), 3000);
                    }
                }
            } catch (error) {
                console.error("Error checking order status:", error);
                setStatus("error");
            }
        };

        checkStatus();
    }, [orderId, attempts]);

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
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

                <h1 className="text-3xl font-extrabold text-gray-900 mb-2 font-serif">
                    {status === "paid" ? "Payment Successful!" :
                        status === "error" ? "Something went wrong" :
                            "Verifying Payment..."}
                </h1>
                <p className="text-gray-600 mb-8">
                    {status === "paid" ? "Thank you for your purchase. Your order has been placed successfully." :
                        status === "pending" ? "We're verifying your payment. This might take a few seconds..." :
                            status === "error" ? "We couldn't verify your order status. Please check your email or contact support." :
                                "Please wait while we confirm your transaction."}
                </p>

                {orderId && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-8 inline-block">
                        <span className="text-sm text-gray-500 block mb-1 uppercase tracking-wider">Order Reference</span>
                        <span className="text-lg font-mono font-bold text-gray-900">{orderId}</span>
                    </div>
                )}

                <div className="space-y-4">
                    {status === "paid" && (
                        <Link
                            href="/"
                            className="block w-full bg-black text-white px-6 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors"
                        >
                            Continue Shopping
                        </Link>
                    )}
                    <Link
                        href="/account/orders"
                        className="block w-full bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-none font-medium hover:bg-gray-50 transition-colors"
                    >
                        View Your Orders
                    </Link>
                </div>

                {status === "paid" && (
                    <p className="mt-8 text-sm text-gray-400">
                        A confirmation email has been sent to your inbox.
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
