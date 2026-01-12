"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/24/outline";

function CancelContent() {
    const searchParams = useSearchParams();
    const orderId = searchParams.get("orderId");

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-red-100 p-3 rounded-full">
                        <XCircleIcon className="h-12 w-12 text-red-600" aria-hidden="true" />
                    </div>
                </div>

                <h1 className="text-3xl font-extrabold text-gray-900 mb-2 font-serif">
                    Payment Cancelled
                </h1>
                <p className="text-gray-600 mb-8">
                    Your payment process was cancelled or failed. No charges were made.
                </p>

                {orderId && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-8 inline-block">
                        <span className="text-sm text-gray-500 block mb-1 uppercase tracking-wider">Order Reference</span>
                        <span className="text-lg font-mono font-bold text-gray-900">{orderId}</span>
                    </div>
                )}

                <div className="space-y-4">
                    <Link
                        href="/order"
                        className="block w-full bg-black text-white px-6 py-3 rounded-none font-medium hover:bg-gray-800 transition-colors"
                    >
                        Try Again
                    </Link>
                    <Link
                        href="/"
                        className="block w-full bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-none font-medium hover:bg-gray-50 transition-colors"
                    >
                        Back to Home
                    </Link>
                </div>

                <p className="mt-8 text-sm text-gray-400">
                    Need help? <Link href="/contact" className="underline hover:text-gray-600">Contact our support team</Link>
                </p>
            </div>
        </div>
    );
}

export default function PaymentCancelPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
            </div>
        }>
            <CancelContent />
        </Suspense>
    );
}
