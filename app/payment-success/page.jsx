"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function SuccessContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircleIcon className="h-12 w-12 text-green-600" aria-hidden="true" />
                    </div>
                </div>

                <h1 className="text-3xl font-extrabold text-gray-900 mb-2 font-serif">
                    Payment Successful!
                </h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your order has been placed successfully.
                </p>

                {orderId && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-8 inline-block">
                        <span className="text-sm text-gray-500 block mb-1 uppercase tracking-wider">Order Reference</span>
                        <span className="text-lg font-mono font-bold text-gray-900">{orderId}</span>
                    </div>
                )}

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="block w-full bg-black text-white px-6 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors"
                    >
                        Continue Shopping
                    </Link>
                    <Link
                        href="/account/orders"
                        className="block w-full bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-none font-medium hover:bg-gray-50 transition-colors"
                    >
                        View Your Orders
                    </Link>
                </div>

                <p className="mt-8 text-sm text-gray-400">
                    A confirmation email has been sent to your inbox.
                </p>
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
