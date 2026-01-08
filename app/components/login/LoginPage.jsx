"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import img from "../../../public/images/loginimg.jpg";
import { useAuth } from "../../../context/AuthContext";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="mt-6 min-h-screen w-full bg-white flex items-center justify-center overflow-x-hidden pt-10 md:pt-0">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-12 lg:py-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="relative w-full max-w-[500px] aspect-square overflow-hidden shadow-2xl rounded-sm group">
            <Image
              src={img}
              alt="Montero Watch Premium Display"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-neutral-900/5" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center max-w-md mx-auto">
          <header className="mb-8 text-center lg:text-left">
            <h1 className="font-cormorant text-4xl md:text-5xl text-neutral-900 leading-tight mb-4 tracking-wide">
              Sign In Account
            </h1>
            <p className="monaSans text-neutral-500 text-sm md:text-base leading-relaxed tracking-tight max-w-sm">
              Let&apos;s align our constellations! Reach out and let the magic
              of collaboration illuminate our skies.
            </p>
          </header>

          {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 px-5 py-4 monaSans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
            </div>

            {/* Password Input */}
            <div className="relative group">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-neutral-50 border border-neutral-200 px-5 py-4 monaSans text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between pb-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 border-neutral-300 rounded focus:ring-black accent-black transition-all"
                />
                <span className="monaSans text-xs text-neutral-600 group-hover:text-neutral-900 transition-colors">
                  Keep me signed in
                </span>
              </label>
              <Link
                href="/forgot_password"
                className="monaSans text-xs text-neutral-500 hover:text-neutral-900 transition-all border-b border-neutral-400 hover:border-neutral-900"
              >
                Forgot your password
              </Link>
            </div>

            <button className="w-full bg-black text-white font-medium py-5 text-sm uppercase tracking-[0.2em] transition-all duration-300 hover:bg-neutral-800 shadow-xl shadow-neutral-100 active:scale-[0.98]">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center lg:text-left">
            <Link
              href="/signup"
              className="monaSans text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              Create account
            </Link>
          </div>

          <footer className="mt-10 text-center space-y-8">
            <div className="relative flex items-center justify-center">
              <div className="w-full h-px bg-neutral-100" />
              <span className="absolute bg-white px-4 monaSans text-xs text-neutral-400 uppercase tracking-widest">
                Or
              </span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button className="flex-1 flex items-center justify-center border border-neutral-200 py-3.5 hover:bg-neutral-50 transition-all duration-300 rounded-sm">
                <svg width="20" height="20" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                </svg>
              </button>
              <button className="flex-1 flex items-center justify-center border border-neutral-200 py-3.5 hover:bg-neutral-50 transition-all duration-300 rounded-sm">
                <i className="fa-brands fa-apple text-xl"></i>
              </button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
