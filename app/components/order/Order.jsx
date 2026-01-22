"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { IoCloseCircleOutline, IoArrowBackOutline } from "react-icons/io5";
import newCurrencySymbol from '../../../public/images/newSymbole.png';
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import TmaraPayment from '../../../public/images/Tamara.jpeg';
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  const { user, loading: authLoading } = useAuth();
  const { formatPrice, currency } = useCurrency();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      toast.info("Please sign in to continue with your order");
      router.push(`/login?redirect=/order?productId=${productId}`);
    }
  }, [user, authLoading, router, productId]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "United Arab Emirates",
    zipCode: "",
    paymentMethod: "stripe",
  });

  // Keep email synced if user loads later
  useEffect(() => {
    if (user?.email) {
      setFormData(prev => ({ ...prev, email: user.email }));
    }
  }, [user]);

  const [shippingFee, setShippingFee] = useState(0);
  const [orderTotal, setOrderTotal] = useState(0);
  const [calculating, setCalculating] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      // Logic from Tail, but fallback to HEAD dummy data if no ID provided for UI testing? 
      // User asked for Integrations: Tail. So we stick to Tail logic.
      if (!productId) {
        // If no product ID, we might just load dummy data to show the HEAD style UI?
        // But Integrations:Tail implies we want the real backend logic.
        // However, if the user just wants to see the styles, this might block them.
        // Let's assume we proceed with Tail logic, but maybe default to a dummy product if dev/testing?
        // No, strict instructions: Integration Tail.
        setError("No product selected");
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/product/${productId}`);
        if (response.data.success) {
          setProduct(response.data.product);
        } else {
          setError("Product not found");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  // Handle dynamic shipping calculation
  useEffect(() => {
    if (!product || !formData.country) return;

    const calculateTotals = async () => {
      setCalculating(true);
      try {
        const response = await api.post("/order/stripe/create-checkout", {
          items: [{ productId, quantity }],
          shippingAddress: { country: formData.country, city: formData.city || "Dubai", address1: "temp" },
          currency: currency,
          calculateOnly: true
        });

        if (response.data.success) {
          setShippingFee(response.data.shippingFee);
          setOrderTotal(response.data.total);
        }
      } catch (err) {
        console.error("Calculation error:", err);
      } finally {
        setCalculating(false);
      }
    };

    const timer = setTimeout(calculateTotals, 500);
    return () => clearTimeout(timer);
  }, [formData.country, formData.city, quantity, product, productId]);

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // In case it's in a form
    if (submitting) return;

    // Basic Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.country) {
      toast.error("Please fill in all required fields");
      return;
    }

    setSubmitting(true);
    try {
      const orderPayload = {
        items: [{ productId, quantity }],
        currency: currency,
        shippingAddress: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          address1: formData.address,
          postalCode: formData.zipCode,
        },
        billingAddress: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          state: formData.state,
          city: formData.city,
          address1: formData.address,
          postalCode: formData.zipCode,
        },
        paymentMethod: formData.paymentMethod,
      };

      const endpoint = formData.paymentMethod === "stripe"
        ? "/order/stripe/create-checkout"
        : "/order/tamara/create-checkout";

      const response = await api.post(endpoint, orderPayload);

      if (response.data.success) {
        toast.success("Order initiated! Redirecting to payment...");
        if (response.data.checkoutUrl) {
          window.location.href = response.data.checkoutUrl;
        } else {
          router.push(`/payment-success?orderId=${response.data.order?._id || response.data.orderId}`);
        }
      } else {
        toast.error(response.data.message || "Failed to create order");
      }
    } catch (err) {
      console.error("Order error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || "An error occurred while placing order");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading || authLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!user) return null; // Prevent showing content if not logged in

  if (error || !product) {
    // Styling the error state with HEAD-ish generic container if needed, or kept simple
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Oops!</h2>
        <p className="text-gray-600">{error || "Product not found"}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  const subtotal = (product.salePrice || product.price || 0) * quantity;
  const originalSubtotal = (product.price || 860) * quantity;
  const discountAmount = originalSubtotal - subtotal;
  // Use backend total if available, else fallback to frontend subtotal
  const total = orderTotal || (subtotal + shippingFee);

  // HEAD Styles applied to the structure
  return (
    <div className="container mx-auto px-3 py-4 mt-5 sm:py-6 md:py-8 lg:py-12 max-w-7xl">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6 group"
      >
        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
          <IoArrowBackOutline size={20} />
        </div>
        <span className="text-sm font-medium">Back to Product</span>
      </button>

      <form onSubmit={(e) => handlePlaceOrder(e)}> {/* Wrap in form for enter key submission if desired */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Left Column - Billing Address */}
          <div className="bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl lg:col-span-5">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              Billing Address
            </h2>

            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {/* Full Name Split for integration */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  Full Name
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className="w-full bg-gray-100 border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm text-gray-500 cursor-not-allowed focus:outline-none"
                  required
                />
              </div>

              {/* Phone Number - HEAD styles with Tail data */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  Phone Number
                </label>
                <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2">
                  <div className="relative w-full sm:w-auto sm:min-w-[120px]">
                    <select className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none pr-8">
                      <option>UAE (+971)</option>
                      <option>SAU (+966)</option>
                      <option>KWT (+965)</option>
                      <option>QAT (+974)</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">
                      ▼
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="55 123 4567"
                    className="flex-1 bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Street address, building name..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                  required
                />
              </div>

              {/* Country & State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                    Country
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none text-gray-700"
                    >
                      <option value="" disabled>Select country</option>
                      <option>United Arab Emirates</option>
                      <option>Saudi Arabia</option>
                      <option>Kuwait</option>
                      <option>Qatar</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-gray-500">
                      ▼
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                    State/Emirate
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="Dubai"
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* City & Zip Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="Enter your city"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                    Zip/Postal Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="Enter postal code"
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Payment Method Section - HEAD Styles with Tail Logic */}
              <div className="pt-3 sm:pt-4 md:pt-6">
                <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                    Payment Method
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {/* Stripe/Card Option */}
                    <label className={`flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 border rounded-lg cursor-pointer transition-colors ${formData.paymentMethod === 'stripe' ? 'border-gray-800 ring-1 ring-gray-800' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="stripe"
                        checked={formData.paymentMethod === 'stripe'}
                        onChange={handleInputChange}
                        className="mt-0.5 sm:mt-1 w-4 h-4 text-black border-gray-300 focus:ring-black shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                          <div className="min-w-0">
                            <span className="font-medium text-gray-900 text-sm sm:text-base">Credit/Debit Card</span>
                            <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight">
                              Pay with Visa, Mastercard, or Amex
                            </p>
                          </div>
                          <div className="flex gap-1.5 sm:gap-2 mt-1 sm:mt-0">
                            <FaCcVisa className="text-xl sm:text-2xl text-blue-900 shrink-0" />
                            <FaCcMastercard className="text-xl sm:text-2xl text-red-600 shrink-0" />
                            <FaCcAmex className="text-xl sm:text-2xl text-blue-600 shrink-0" />
                          </div>
                        </div>
                      </div>
                    </label>

                    {/* Tamara Option */}
                    <label className={`flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 border rounded-lg cursor-pointer transition-colors ${formData.paymentMethod === 'tamara' ? 'border-gray-800 ring-1 ring-gray-800' : 'border-gray-200 hover:border-gray-300'}`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="tamara"
                        checked={formData.paymentMethod === 'tamara'}
                        onChange={handleInputChange}
                        className="mt-0.5 sm:mt-1 w-4 h-4 text-black border-gray-300 focus:ring-black shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                          <div className="min-w-0">
                            <span className="font-medium text-gray-900 text-sm sm:text-base">Pay with Tamara</span>
                            <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight">
                              Pay in 4 interest-free installments
                            </p>
                          </div>
                          <div className="relative w-14 h-5 sm:w-16 sm:h-6 mt-1 sm:mt-0">
                            <Image
                              src={TmaraPayment}
                              alt="Tamara Payment"
                              fill
                              className="object-contain"
                              sizes="(max-width: 640px) 56px, 64px"
                            />
                          </div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Your Order */}
          <div className="bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl lg:col-span-7">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                  Your Order
                </h2>

                {/* Order Items Container */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {/* Product Card */}
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm relative group">
                    <button
                      type="button"
                      onClick={() => window.history.back()}
                      className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[#9B1111] hover:text-red-600 transition-colors z-10 bg-white rounded-full p-0.5"
                      aria-label="Remove item"
                    >

                    </button>

                    <div className="flex gap-3 sm:gap-4">
                      {/* Product Image */}
                      <div className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                        <Image
                          src={product.images?.[0]?.url || "/images/placeholder.png"}
                          alt={product.name}
                          width={96}
                          height={96}
                          className="object-contain w-full h-full"
                          priority
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        {/* Product Title & Price */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2 sm:mb-3">
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg pr-8 sm:pr-10 line-clamp-2">
                            {product.name}
                          </h3>
                          <div className="flex items-center text-base sm:text-lg md:text-xl font-bold text-gray-900">
                            {formatPrice(product.price || 860)}
                          </div>
                        </div>

                        {/* Product Features */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {product.features?.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-900 shrink-0"></span>
                              <span className="text-xs text-gray-600 truncate">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Quantity Control & Delivery Estimate */}
                        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 pt-3 border-t border-gray-100">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                Quantity:
                              </span>
                              <div className="flex items-center border border-gray-200 rounded-md bg-white">
                                <button
                                  type="button"
                                  onClick={() => handleQuantityChange(-1)}
                                  className="px-2.5 py-1 text-gray-500 hover:text-black transition-colors"
                                  aria-label="Decrease quantity"
                                >
                                  -
                                </button>
                                <span className="px-2.5 py-1 text-sm text-gray-700 font-medium min-w-[2rem] text-center border-x border-gray-200">
                                  {quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => handleQuantityChange(1)}
                                  className="px-2.5 py-1 text-gray-500 hover:text-black transition-colors"
                                  aria-label="Increase quantity"
                                >
                                  +
                                </button>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Delivery estimate:</span>
                                <span className="text-sm font-medium text-gray-900">March 2026</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-xs text-gray-500 mb-1">Item Total</div>
                            <div className="flex items-center justify-end text-base sm:text-lg font-bold text-gray-900">
                              {formatPrice(originalSubtotal)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary Section */}
                <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-4 sm:mb-5">
                    Order Summary
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {/* Subtotal */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-700">Subtotal</span>
                        <span className="text-xs text-gray-500">({quantity} items)</span>
                      </div>
                      <div className="flex items-center text-sm font-medium text-gray-900">
                        {formatPrice(originalSubtotal)}
                      </div>
                    </div>

                    {/* Delivery */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-700">Delivery</span>
                        <span className="text-xs text-gray-500">Standard shipping</span>
                      </div>
                      <div className="flex items-center text-sm font-medium text-gray-900">
                        {calculating ? "..." : formatPrice(shippingFee)}
                      </div>
                    </div>

                    {/* Discount */}
                    <div className="flex justify-between items-center text-red-600 bg-red-50/50 p-2 rounded-lg border border-red-100/50">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold">Pre-Order Discount</span>
                        <span className="text-xs opacity-80">7% off retail price</span>
                      </div>
                      <div className="flex items-center text-sm font-bold">
                        -{formatPrice(discountAmount)}
                      </div>
                    </div>

                    {/* Estimated Delivery */}
                    <div className="flex justify-between items-center py-3 border-y border-gray-100">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-700">Estimated Delivery</span>
                        <span className="text-xs text-gray-500">All items in this order</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-900">March 2026</span>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="flex justify-between items-center pt-3">
                      <div className="flex flex-col">
                        <span className="text-base sm:text-lg font-bold text-gray-900">Total</span>
                        <span className="text-[10px] text-gray-500 italic">Subtotal - Discount + Delivery</span>
                      </div>
                      <div className="flex items-center text-lg sm:text-xl font-bold text-gray-900">
                        {formatPrice(total)}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 sm:mt-8">
                    <div className="flex flex-col-reverse xs:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <button
                        type="button"
                        onClick={() => window.history.back()}
                        className="flex-1 xs:flex-none px-5 sm:px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors xs:min-w-[140px]"
                      >
                        Cancel Order
                      </button>
                      <button
                        type="submit"
                        disabled={submitting}
                        className={`flex-1 px-5 sm:px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        <span>{submitting ? 'Processing...' : 'Place Order & Pay'}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>

                    {formData.paymentMethod === "tamara" && (
                      <p className="text-xs text-gray-500 text-center mb-6 -mt-4 italic">
                        You will be charged in AED at the current exchange rate.
                      </p>
                    )}

                    {/* Security Note */}
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-50 rounded-full p-1.5 shrink-0">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-900 mb-1">Secure Payment</p>
                          <p className="text-xs text-gray-600 leading-relaxed">
                            Your payment is secure and encrypted with 256-bit SSL. We never store your credit card details.
                            All transactions are processed through secure payment gateways.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

function Order() {
  return (
    <Suspense fallback={
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    }>
      <OrderContent />
    </Suspense>
  );
}

export default Order;