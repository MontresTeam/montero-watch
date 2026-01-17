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

        let timeoutId;

        const checkStatus = async () => {
            try {
                const data = await getOrderStatus(orderId);
                console.log("Status check data:", data);
                if (data.paymentStatus === "paid") {
                    setStatus("paid");
                } else {
                    setStatus("pending");
                    if (attempts < 20) {
                        timeoutId = setTimeout(() => setAttempts(prev => prev + 1), 3000);
                    } else {
                        setStatus("error");
                    }
                }
            } catch (error) {
                console.error("Error checking order status:", error);
                if (attempts < 20) {
                    timeoutId = setTimeout(() => setAttempts(prev => prev + 1), 3000);
                } else {
                    setStatus("error");
                }
            }
        };

        checkStatus();

        return () => {
            if (timeoutId) clearTimeout(timeoutId);
        };
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
                        status === "error" ? "Verification Incomplete" :
                            "Verifying Payment..."}
                </h1>
                <p className="text-gray-600 mb-8">
                    {status === "paid" ? "Thank you for your purchase. Your order has been placed successfully." :
                        status === "pending" || status === "checking" ? "We're confirming your transaction with the provider. This usually takes a few seconds..." :
                            "We couldn't automatically verify your payment status within the time limit. Don't worry, your order is likely safe."}
                </p>

                {orderId && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-8 inline-block border border-gray-100">
                        <span className="text-xs text-gray-400 block mb-1 uppercase tracking-widest font-semibold">Order Reference</span>
                        <span className="text-lg font-mono font-bold text-gray-900">{orderId}</span>
                    </div>
                )}

                <div className="space-y-4">
                    {status === "paid" ? (
                        <Link
                            href="/"
                            className="block w-full bg-black text-white px-6 py-4 rounded-none font-medium hover:bg-gray-800 transition-all transform hover:scale-[1.01] active:scale-[0.99] text-center"
                        >
                            Continue Shopping
                        </Link>
                    ) : status === "error" ? (
                        <button
                            onClick={() => window.location.reload()}
                            className="block w-full bg-black text-white px-6 py-4 rounded-none font-medium hover:bg-gray-800 transition-colors text-center"
                        >
                            Retry Verification
                        </button>
                    ) : (
                        <div className="py-2">
                            <div className="w-full bg-gray-100 h-1 overflow-hidden">
                                <div className="bg-blue-600 h-full animate-progress-fast"></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-2 italic">Checking secure payment channel...</p>
                        </div>
                    )}

                    <Link
                        href="/account/orders"
                        className="block w-full bg-white border border-gray-200 text-gray-900 px-6 py-4 rounded-none font-medium hover:bg-gray-50 transition-colors text-center"
                    >
                        View My Orders
                    </Link>
                </div>

                {status === "paid" && (
                    <p className="mt-8 text-sm text-gray-400">
                        A confirmation email has been sent to your inbox.
                    </p>
                )}

                {status === "error" && (
                    <div className="mt-10 p-6 bg-red-50 text-left border-l-4 border-red-500">
                        <h3 className="text-red-800 font-bold mb-2">Still Verifying?</h3>
                        <p className="text-sm text-red-700 space-y-2">
                            Payments can sometimes take a few minutes to process.
                            If you've received a confirmation from your bank but this page hasn't updated:
                        </p>
                        <ul className="text-sm text-red-700 list-disc ml-5 mt-2 space-y-1">
                            <li>Check your email for an order confirmation</li>
                            <li>Visit 'My Orders' in a few minutes</li>
                            <li>Contact support at <span className="font-semibold">support@montres.ae</span></li>
                        </ul>
                    </div>
                )}

                {(status === "pending" || status === "checking") && attempts > 5 && (
                    <div className="mt-8 p-4 bg-blue-50 text-blue-800 rounded-lg text-sm animate-fade-in">
                        Taking longer than expected? The payment provider might be slow.
                        Please don't close this window.
                    </div>
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
