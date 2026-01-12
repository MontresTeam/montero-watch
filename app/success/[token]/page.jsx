"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import star from "./../../../public/images/contact/star.png";
import { verifyEmail } from "../../../actions/auth";
import { toast } from 'react-toastify';

import Footer from "../../components/home/Footer/Footer";
import Navbar from "../../components/navBar/NavBar";

export default function VerificationPage() {
    const router = useRouter();
    const params = useParams();
    const [status, setStatus] = useState('verifying'); // 'verifying', 'success', 'error'
    const [message, setMessage] = useState('Please wait while we verify your email...');

    useEffect(() => {
        const performVerification = async () => {
            if (!params?.token) return;

            try {
                const response = await verifyEmail(params.token);
                setStatus('success');
                setMessage(response.message || "Email verified successfully. You can now log in.");
                toast.success("Email verified successfully!");
            } catch (error) {
                setStatus('error');
                const errMsg = error?.response?.data?.message || error?.message || "Verification failed";
                setMessage(errMsg);
                toast.error(errMsg);
            }
        };

        performVerification();
    }, [params?.token]);

    return (
        <>
            <Navbar />
            <div className="min-h-screen w-full bg-neutral-50 flex items-center justify-center px-4 sm:px-6">
  <div className="w-full max-w-md bg-white border border-neutral-200 rounded-xl px-6 sm:px-8 py-10 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.15)]">

    {/* Status Indicator */}
    <div className="flex justify-center mb-6">
      {status === "verifying" && (
        <div className="h-10 w-10 rounded-full border-2 border-neutral-300 border-t-black animate-spin" />
      )}

      {status === "success" && (
        <div className="h-10 w-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-lg font-medium">
          ✓
        </div>
      )}

      {status === "error" && (
        <div className="h-10 w-10 rounded-full bg-red-100 text-red-700 flex items-center justify-center text-lg font-medium">
          ✕
        </div>
      )}
    </div>

    {/* Title + Message */}
    <div className="text-center mb-8">
      <h1 className="font-cormorant text-2xl sm:text-3xl text-neutral-900 uppercase tracking-widest mb-3">
        {status === "verifying"
          ? "Verifying"
          : status === "success"
          ? "Verification Complete"
          : "Verification Failed"}
      </h1>

      <p className="monaSans text-neutral-500 text-sm sm:text-base leading-relaxed">
        {message}
      </p>
    </div>

    {/* Primary Action */}
    <button
      disabled={status === "verifying"}
      onClick={() => router.push(status === "success" ? "/login" : "/")}
      className="w-full bg-black text-white py-4 text-xs sm:text-sm
        uppercase tracking-[0.25em] font-medium
        transition-all duration-200
        hover:bg-neutral-800
        disabled:opacity-40 disabled:cursor-not-allowed
        active:scale-[0.98]"
    >
      {status === "success" ? "Proceed to Login" : "Return Home"}
    </button>

    {/* Secondary Action */}
    {status === "error" && (
      <div className="mt-6 text-center">
        <button
          onClick={() => router.push("/signup")}
          className="text-xs uppercase tracking-widest text-neutral-500 hover:text-black transition"
        >
          Create a new account
        </button>
      </div>
    )}
  </div>
</div>

            <Footer />
        </>
    );
}
