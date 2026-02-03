"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Image from "next/image";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import TmaraPayment from '../../../public/images/Tamara.jpeg';
import TabbyPayment from '../../../public/images/tabby.png';
import { useSearchParams, useRouter } from "next/navigation";
import api from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

function OrderContent() {
  const { t } = useTranslation();
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
  const [fieldErrors, setFieldErrors] = useState({});
  const [formError, setFormError] = useState(null);

  const countryCodes = [
    { code: "+971", country: "United Arab Emirates", iso: "AE" },
    { code: "+966", country: "Saudi Arabia", iso: "SA" },
    { code: "+965", country: "Kuwait", iso: "KW" },
    { code: "+974", country: "Qatar", iso: "QA" },
    { code: "+973", country: "Bahrain", iso: "BH" },
    { code: "+968", country: "Oman", iso: "OM" },
    { code: "+962", country: "Jordan", iso: "JO" },
    { code: "+961", country: "Lebanon", iso: "LB" },
    { code: "+963", country: "Syria", iso: "SY" },
    { code: "+964", country: "Iraq", iso: "IQ" },
    { code: "+98", country: "Iran", iso: "IR" },
    { code: "+967", country: "Yemen", iso: "YE" },
    { code: "+972", country: "Israel", iso: "IL" },
    { code: "+970", country: "Palestine", iso: "PS" },
    { code: "+90", country: "Turkey", iso: "TR" },

    // ≡ƒç╕≡ƒçª South Asia
    { code: "+91", country: "India", iso: "IN" },
    { code: "+92", country: "Pakistan", iso: "PK" },
    { code: "+880", country: "Bangladesh", iso: "BD" },
    { code: "+94", country: "Sri Lanka", iso: "LK" },
    { code: "+977", country: "Nepal", iso: "NP" },
    { code: "+975", country: "Bhutan", iso: "BT" },
    { code: "+960", country: "Maldives", iso: "MV" },
    { code: "+93", country: "Afghanistan", iso: "AF" },

    // ≡ƒç¿≡ƒç│ East
    { code: "+86", country: "China", iso: "CN" },
    { code: "+81", country: "Japan", iso: "JP" },
    { code: "+82", country: "South Korea", iso: "KR" },
    { code: "+850", country: "North Korea", iso: "KP" },
    { code: "+976", country: "Mongolia", iso: "MN" },
    { code: "+886", country: "Taiwan", iso: "TW" },

    // ≡ƒç╕≡ƒç¼ Southeast Asia
    { code: "+65", country: "Singapore", iso: "SG" },
    { code: "+60", country: "Malaysia", iso: "MY" },
    { code: "+62", country: "Indonesia", iso: "ID" },
    { code: "+66", country: "Thailand", iso: "TH" },
    { code: "+63", country: "Philippines", iso: "PH" },
    { code: "+84", country: "Vietnam", iso: "VN" },
    { code: "+855", country: "Cambodia", iso: "KH" },
    { code: "+856", country: "Laos", iso: "LA" },
    { code: "+95", country: "Myanmar", iso: "MM" },
    { code: "+673", country: "Brunei", iso: "BN" },
    { code: "+670", country: "Timor-Leste", iso: "TL" },

    // ≡ƒç░≡ƒç┐ Central Asia
    { code: "+7", country: "Kazakhstan", iso: "KZ" },
    { code: "+998", country: "Uzbekistan", iso: "UZ" },
    { code: "+993", country: "Turkmenistan", iso: "TM" },
    { code: "+996", country: "Kyrgyzstan", iso: "KG" },
    { code: "+992", country: "Tajikistan", iso: "TJ" },

    // ≡ƒç¿≡ƒç╛ Caucasus
    { code: "+374", country: "Armenia", iso: "AM" },
    { code: "+994", country: "Azerbaijan", iso: "AZ" },
    { code: "+995", country: "Georgia", iso: "GE" },

    // ≡ƒç╕≡ƒçª Middle East
    { code: "+967", country: "Yemen", iso: "YE" },
    { code: "+972", country: "Israel", iso: "IL" },
    { code: "+970", country: "Palestine", iso: "PS" },
    { code: "+962", country: "Jordan", iso: "JO" },
    { code: "+961", country: "Lebanon", iso: "LB" },
    { code: "+963", country: "Syria", iso: "SY" },
    { code: "+964", country: "Iraq", iso: "IQ" },
    { code: "+98", country: "Iran", iso: "IR" },
    { code: "+973", country: "Bahrain", iso: "BH" },
    { code: "+968", country: "Oman", iso: "OM" },
    { code: "+43", country: "Austria", iso: "AT" },
    { code: "+32", country: "Belgium", iso: "BE" },
    { code: "+359", country: "Bulgaria", iso: "BG" },
    { code: "+385", country: "Croatia", iso: "HR" },
    { code: "+357", country: "Cyprus", iso: "CY" },
    { code: "+420", country: "Czech Republic", iso: "CZ" },
    { code: "+45", country: "Denmark", iso: "DK" },
    { code: "+372", country: "Estonia", iso: "EE" },
    { code: "+358", country: "Finland", iso: "FI" },
    { code: "+33", country: "France", iso: "FR" },
    { code: "+49", country: "Germany", iso: "DE" },
    { code: "+30", country: "Greece", iso: "GR" },
    { code: "+36", country: "Hungary", iso: "HU" },
    { code: "+354", country: "Iceland", iso: "IS" },
    { code: "+353", country: "Ireland", iso: "IE" },
    { code: "+39", country: "Italy", iso: "IT" },
    { code: "+371", country: "Latvia", iso: "LV" },
    { code: "+370", country: "Lithuania", iso: "LT" },
    { code: "+352", country: "Luxembourg", iso: "LU" },
    { code: "+356", country: "Malta", iso: "MT" },
    { code: "+31", country: "Netherlands", iso: "NL" },
    { code: "+47", country: "Norway", iso: "NO" },
    { code: "+48", country: "Poland", iso: "PL" },
    { code: "+351", country: "Portugal", iso: "PT" },
    { code: "+40", country: "Romania", iso: "RO" },
    { code: "+7", country: "Russia", iso: "RU" },
    { code: "+421", country: "Slovakia", iso: "SK" },
    { code: "+386", country: "Slovenia", iso: "SI" },
    { code: "+34", country: "Spain", iso: "ES" },
    { code: "+46", country: "Sweden", iso: "SE" },
    { code: "+41", country: "Switzerland", iso: "CH" },
    { code: "+44", country: "United Kingdom", iso: "GB" },
    { code: "+380", country: "Ukraine", iso: "UA" },
    { code: "+1", country: "United States", iso: "US" },
    { code: "+1", country: "Canada", iso: "CA" },
    { code: "+52", country: "Mexico", iso: "MX" },

    // Central America
    { code: "+502", country: "Guatemala", iso: "GT" },
    { code: "+503", country: "El Salvador", iso: "SV" },
    { code: "+504", country: "Honduras", iso: "HN" },
    { code: "+505", country: "Nicaragua", iso: "NI" },
    { code: "+506", country: "Costa Rica", iso: "CR" },
    { code: "+507", country: "Panama", iso: "PA" },

    // Caribbean (main ones)
    { code: "+1-809", country: "Dominican Republic", iso: "DO" },
    { code: "+1-876", country: "Jamaica", iso: "JM" },
    { code: "+1-868", country: "Trinidad and Tobago", iso: "TT" },
    { code: "+1-246", country: "Barbados", iso: "BB" },
    { code: "+1-242", country: "Bahamas", iso: "BS" },

    // South America
    { code: "+54", country: "Argentina", iso: "AR" },
    { code: "+55", country: "Brazil", iso: "BR" },
    { code: "+56", country: "Chile", iso: "CL" },
    { code: "+57", country: "Colombia", iso: "CO" },
    { code: "+58", country: "Venezuela", iso: "VE" },
    { code: "+51", country: "Peru", iso: "PE" },
    { code: "+593", country: "Ecuador", iso: "EC" },
    { code: "+591", country: "Bolivia", iso: "BO" },
    { code: "+595", country: "Paraguay", iso: "PY" },
    { code: "+598", country: "Uruguay", iso: "UY" }
  ];

  const [selectedCountryCode, setSelectedCountryCode] = useState("+971");
  const [isCodeDropdownOpen, setIsCodeDropdownOpen] = useState(false);
  const [codeSearchTerm, setCodeSearchTerm] = useState("");

  const filteredCountryCodes = countryCodes.filter(c =>
    c.country.toLowerCase().includes(codeSearchTerm.toLowerCase()) ||
    c.code.includes(codeSearchTerm)
  );

  const handleCountryCodeSelect = (item) => {
    setSelectedCountryCode(item.code);

    // Check if the selected country supports Tamara
    const isTamaraSupported = ["+971", "+966", "+973"].includes(item.code);

    setFormData(prev => ({
      ...prev,
      country: item.country,
      // If currently selected payment is Tamara but new country doesn't support it, switch to stripe
      paymentMethod: (prev.paymentMethod === 'tamara' && !isTamaraSupported) ? 'stripe' : prev.paymentMethod
    }));

    setIsCodeDropdownOpen(false);
    setCodeSearchTerm("");
    // Clear error if exists
    if (fieldErrors.country) {
      setFieldErrors(prev => ({ ...prev, country: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName?.trim()) errors.firstName = t("firstNameRequired");
    if (!formData.lastName?.trim()) errors.lastName = t("lastNameRequired");
    if (!formData.email?.trim()) {
      errors.email = t("emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t("invalidEmail");
    }
    if (!formData.phone?.trim()) {
      errors.phone = t("phoneRequired");
    } else if (!/^\d{5,15}$/.test(formData.phone.replace(/[\s-]/g, ""))) {
      errors.phone = t("invalidPhone");
    }
    if (!formData.address?.trim()) errors.address = t("addressRequired");
    if (!formData.city?.trim()) errors.city = t("cityRequired");
    if (!formData.country) errors.country = t("countryRequired");

    if (Object.keys(errors).length > 0) {
      setFormError(t("pleaseReviewFields"));
      setFieldErrors(errors);
      return false;
    }

    setFormError(null);
    setFieldErrors({});
    return true;
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsCodeDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!authLoading && !user) {
      toast.info(t("pleaseSignIn"));
      router.push(`/login?redirect=/order?productId=${productId}`);
    }
  }, [user, authLoading, router, productId, t]);

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
    paymentMethod: "tamara",
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
        setError(t("noProductSelected"));
        setLoading(false);
        return;
      }

      try {
        const response = await api.get(`/product/${productId}`);
        if (response.data.success) {
          setProduct(response.data.product);
        } else {
          setError(t("productNotFound"));
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError(t("failedToLoadProduct"));
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
    // Clear error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault(); // In case it's in a form
    if (submitting) return;

    if (!validateForm()) {
      toast.error(t("pleaseReviewFields"), {
        icon: "ΓÜá∩╕Å",
      });
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
          phone: `${selectedCountryCode}${formData.phone.replace(/[\s-]/g, "")}`,
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
          phone: `${selectedCountryCode}${formData.phone.replace(/[\s-]/g, "")}`,
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
        toast.success(t("orderInitiated"));
        if (response.data.checkoutUrl) {
          window.location.href = response.data.checkoutUrl;
        } else {
          router.push(`/payment-success?orderId=${response.data.order?._id || response.data.orderId}`);
        }
      } else {
        toast.error(response.data.message || t("failedToCreateOrder"));
      }
    } catch (err) {
      console.error("Order error:", err.response?.data || err.message);
      toast.error(err.response?.data?.message || t("orderError"));
    } finally {
      setSubmitting(false);
    }
  };

  const renderOrderButtons = (isTop = false) => (
    <div className={`mt-4 ${isTop ? 'mb-6' : 'mb-8'}`}>
      {formError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg flex items-center gap-2 text-red-600 animate-in fade-in slide-in-from-top-1 duration-300">
          <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <p className="text-xs font-medium">{formError}</p>
        </div>
      )}
      <div className="flex flex-col-reverse xs:flex-row gap-3 sm:gap-4">
        <button
          type="button"
          onClick={() => window.history.back()}
          className="flex-1 xs:flex-none px-5 sm:px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors xs:min-w-[140px]"
        >
          {t("cancelOrder")}
        </button>
        <button
          type="submit"
          disabled={submitting}
          className={`flex-1 px-5 sm:px-6 py-3 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          <span>{submitting ? t("processing") : t("placeOrderPay")}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
      {formData.paymentMethod === "tamara" && (
        <p className="text-xs text-gray-500 text-center mt-3 italic">
          {t("chargedInAED")}
        </p>
      )}
    </div>
  );

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
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{t("oops")}</h2>
        <p className="text-gray-600">{error || t("productNotFound")}</p>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
        >
          {t("goBack")}
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
        <span className="text-sm font-medium">{t("backToProduct")}</span>
      </button>

      <form onSubmit={(e) => handlePlaceOrder(e)}> {/* Wrap in form for enter key submission if desired */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Left Column - Billing Address */}
          <div className="bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl lg:col-span-5 order-2 lg:order-1">
            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {t("billingAddress")}
            </h2>

            <div className="space-y-2.5 sm:space-y-3 md:space-y-4">
              {/* Full Name Split for integration */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  {t("fullName")}
                </label>
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={t("firstName")}
                      className={`w-full bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 ${fieldErrors.firstName ? 'border-red-500' : 'border-gray-200'}`}
                    />
                    {fieldErrors.firstName && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.firstName}</p>}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={t("lastName")}
                      className={`w-full bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 ${fieldErrors.lastName ? 'border-red-500' : 'border-gray-200'}`}
                    />
                    {fieldErrors.lastName && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.lastName}</p>}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  {t("emailAddress")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  readOnly
                  className={`w-full bg-gray-100 border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm text-gray-500 cursor-not-allowed focus:outline-none ${fieldErrors.email ? 'border-red-500' : 'border-gray-200'}`}
                />
                {fieldErrors.email && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.email}</p>}
              </div>

              {/* Phone Number - HEAD styles with Tail data */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  {t("phoneNumber")}
                </label>
                <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 relative" ref={dropdownRef}>
                  <div className="relative w-full sm:w-auto sm:min-w-[160px]">
                    <div
                      onClick={() => setIsCodeDropdownOpen(!isCodeDropdownOpen)}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 cursor-pointer flex justify-between items-center"
                    >
                      <span className="truncate">
                        {countryCodes.find(c => c.code === selectedCountryCode && c.iso === (countryCodes.find(curr => curr.code === selectedCountryCode)?.iso))?.iso || ""} {selectedCountryCode}
                      </span>

                    </div>

                    {isCodeDropdownOpen && (
                      <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto w-full sm:w-64">
                        <div className="p-2 sticky top-0 bg-white border-b border-gray-100">
                          <input
                            type="text"
                            placeholder={t("searchPlaceholder")}
                            value={codeSearchTerm}
                            onChange={(e) => setCodeSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full px-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-black"
                          />
                        </div>
                        <div className="py-1">
                          {filteredCountryCodes.length > 0 ? (
                            filteredCountryCodes.map((item, idx) => (
                              <button
                                key={`${item.iso}-${item.code}-${idx}`}
                                type="button"
                                onClick={() => handleCountryCodeSelect(item)}
                                className="w-full px-4 py-2.5 text-xs text-left hover:bg-gray-50 flex items-center justify-between border-b border-gray-50 last:border-0"
                              >
                                <span className="font-medium text-gray-900">{item.country}</span>
                                <span className="text-gray-500">{item.code}</span>
                              </button>
                            ))
                          ) : (
                            <div className="px-4 py-3 text-xs text-gray-400 text-center italic">
                              No results found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="55 123 4567"
                      className={`w-full bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 ${fieldErrors.phone ? 'border-red-500' : 'border-gray-200'}`}
                    />
                  </div>
                </div>
                {fieldErrors.phone && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.phone}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                  {t("address")}
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder={t("streetAddress")}
                  className={`w-full bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 ${fieldErrors.address ? 'border-red-500' : 'border-gray-200'}`}
                />
                {fieldErrors.address && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.address}</p>}
              </div>

              {/* Country & State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                    {t("country")}
                  </label>
                  <div className="relative">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className={`w-full bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent appearance-none text-gray-700 ${fieldErrors.country ? 'border-red-500' : 'border-gray-200'}`}
                    >
                      <option value="" disabled>{t("selectCountry")}</option>
                      {[...new Set(countryCodes.map(c => c.country))].sort().map(countryName => (
                        <option key={countryName} value={countryName}>{countryName}</option>
                      ))}
                    </select>

                  </div>
                  {fieldErrors.country && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.country}</p>}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                    {t("stateEmirate")}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder={t("dubai")}
                      className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              {/* City & Zip Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                    {t("city")}
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder={t("enterYourCity")}
                    className={`w-full bg-white border rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400 ${fieldErrors.city ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {fieldErrors.city && <p className="text-red-500 text-[10px] mt-1">{fieldErrors.city}</p>}
                </div>
                <div>
                  <label className="block text-xs sm:text-sm text-gray-600 mb-1 pl-1">
                    {t("zipPostalCode")}
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder={t("enterPostalCode")}
                    className="w-full bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Payment Method Section - HEAD Styles with Tail Logic */}
              <div className="pt-3 sm:pt-4 md:pt-6">
                <div className="bg-white p-3 sm:p-4 md:p-6 rounded-xl border border-gray-200">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-3 sm:mb-4">
                    {t("paymentMethod")}
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
                            <span className="font-medium text-gray-900 text-sm sm:text-base">{t("creditDebitCard")}</span>
                            <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight">
                              {t("payWithCards")}
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
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-900 text-sm sm:text-base">{t("payWithTamara")}</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight">
                              {t("payIn4Installments")}
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

                    {/* Tabby Option */}
                    <label className={`flex items-start gap-2.5 sm:gap-3 p-2.5 sm:p-3 border rounded-lg transition-colors opacity-60 cursor-not-allowed bg-gray-50 border-gray-200`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="tabby"
                        checked={false}
                        onChange={() => { }}
                        disabled={true}
                        className="mt-0.5 sm:mt-1 w-4 h-4 text-gray-400 border-gray-300 shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-2">
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-gray-500 text-sm sm:text-base">Tabby</span>
                              <span className="text-[10px] bg-gray-200 text-gray-600 px-1.5 py-0.5 rounded font-medium">Integration Ongoing</span>
                            </div>
                            <p className="text-xs text-gray-500 mt-0.5 sm:mt-1 leading-tight">
                              {t("payIn4Installments")}
                            </p>
                          </div>
                          <div className="relative w-14 h-5 sm:w-16 sm:h-6 mt-1 sm:mt-0 opacity-60">
                            <Image
                              src={TabbyPayment}
                              alt="Tabby Payment"
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

                {/* Mobile-only checkout buttons after payment method */}
                <div className="lg:hidden">
                  {renderOrderButtons()}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Your Order */}
          <div className="bg-gray-50 p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl lg:rounded-2xl lg:col-span-7 order-1 lg:order-2">
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                  {t("yourOrder")}
                </h2>


                {/* Order Items Container */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {/* Product Card */}
                  <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm relative group">


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
                          <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg line-clamp-2">
                            {t(product.name)}
                          </h3>

                        </div>

                        {/* Product Features */}
                        <div className="grid grid-cols-1 xs:grid-cols-2 gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                          {product.features?.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-900 shrink-0"></span>
                              <span className="text-xs text-gray-600 truncate">{t(feature)}</span>
                            </div>
                          ))}
                        </div>

                        {/* Quantity Control & Delivery Estimate */}
                        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-3 pt-3 border-t border-gray-100">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-gray-500 uppercase tracking-wide font-medium">
                                {t("quantityLabel")}
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
                                <span className="text-xs text-gray-500">{t("deliveryEstimate")}</span>
                                <span className="text-sm font-medium text-gray-900">{t("march2026")}</span>
                              </div>
                            </div>
                          </div>

                          <div className="text-right shrink-0">
                            <div className="text-xs text-gray-500 mb-1">{t("itemTotal")}</div>
                            <div className="flex flex-col items-end">
                              {discountAmount > 0 && (
                                <div className="text-[10px] sm:text-xs text-gray-400 line-through leading-none mb-0.5">
                                  {formatPrice(originalSubtotal)}
                                </div>
                              )}
                              <div className="text-base sm:text-lg font-bold text-gray-900 leading-none">
                                {formatPrice(subtotal)}
                              </div>
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
                    {t("orderSummary")}
                  </h3>

                  <div className="space-y-3 sm:space-y-4">
                    {/* Subtotal Calculation */}
                    <div className="space-y-2">
                      {/* Retail Price */}
                      <div className="flex justify-between items-center text-gray-500">
                        <span className="text-sm">{t("retailPrice") || "Retail Price"}</span>
                        <span className="text-sm line-through">{formatPrice(originalSubtotal)}</span>
                      </div>

                      {/* Discount */}
                      <div className="flex justify-between items-center text-red-600 bg-red-50/50 p-2.5 rounded-lg border border-red-100/50">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold">{t("preOrderDiscount")}</span>
                          <span className="text-[10px] opacity-80 uppercase tracking-wider">{t("offRetailPrice")}</span>
                        </div>
                        <div className="flex items-center text-sm font-bold">
                          -{formatPrice(discountAmount)}
                        </div>
                      </div>

                      {/* Net Subtotal */}
                      <div className="flex justify-between items-center py-2 border-t border-gray-100 mt-1">
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{t("subtotal")}</span>
                          <span className="text-[10px] text-gray-500">({quantity} {t("items")})</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">{formatPrice(subtotal)}</span>
                      </div>
                    </div>

                    {/* Delivery */}
                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-700">{t("delivery")}</span>
                        <span className="text-xs text-gray-500">{t("standardShipping")}</span>
                      </div>
                      <div className="flex items-center text-sm font-medium text-gray-900">
                        {calculating ? "..." : formatPrice(shippingFee)}
                      </div>
                    </div>

                    {/* Order Total Highlight */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-2">
                      <div className="flex flex-col">
                        <span className="text-base font-bold text-gray-900 uppercase tracking-tight">{t("total")}</span>
                        <span className="text-[10px] text-gray-400 font-normal">{t("vatIncluded") || "VAT included"}</span>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
                          {calculating ? "..." : formatPrice(total)}
                        </span>
                        {discountAmount > 0 && (
                          <span className="text-[10px] text-green-600 font-bold mt-1 bg-green-50 px-1.5 py-0.5 rounded">
                            {t("youSaved") || "You Saved"} {formatPrice(discountAmount)}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Estimated Delivery */}
                    <div className="flex justify-between items-center py-3 border-y border-gray-100 mt-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-700">{t("estimatedDelivery")}</span>
                        <span className="text-xs text-gray-500">{t("allItemsInOrder")}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-gray-900">{t("march2026")}</span>
                      </div>
                    </div>

                  </div>

                  {/* Desktop-only checkout buttons */}
                  <div className="hidden lg:block">
                    {renderOrderButtons()}
                  </div>

                  {/* Security Note */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-start gap-3">
                      <div className="bg-green-50 rounded-full p-1.5 shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900 mb-1">{t("securePayment")}</div>
                        <div className="text-xs text-gray-600 leading-relaxed">
                          {t("securePaymentDesc")}
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
