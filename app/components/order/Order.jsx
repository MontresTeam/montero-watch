"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
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

    // 🇸🇦 South Asia
    { code: "+91", country: "India", iso: "IN" },
    { code: "+92", country: "Pakistan", iso: "PK" },
    { code: "+880", country: "Bangladesh", iso: "BD" },
    { code: "+94", country: "Sri Lanka", iso: "LK" },
    { code: "+977", country: "Nepal", iso: "NP" },
    { code: "+975", country: "Bhutan", iso: "BT" },
    { code: "+960", country: "Maldives", iso: "MV" },
    { code: "+93", country: "Afghanistan", iso: "AF" },

    // 🇨🇳 East Asia
    { code: "+86", country: "China", iso: "CN" },
    { code: "+81", country: "Japan", iso: "JP" },
    { code: "+82", country: "South Korea", iso: "KR" },
    { code: "+850", country: "North Korea", iso: "KP" },
    { code: "+976", country: "Mongolia", iso: "MN" },
    { code: "+886", country: "Taiwan", iso: "TW" },

    // 🇸🇬 Southeast Asia
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

    // 🇰🇿 Central Asia
    { code: "+7", country: "Kazakhstan", iso: "KZ" },
    { code: "+998", country: "Uzbekistan", iso: "UZ" },
    { code: "+993", country: "Turkmenistan", iso: "TM" },
    { code: "+996", country: "Kyrgyzstan", iso: "KG" },
    { code: "+992", country: "Tajikistan", iso: "TJ" },

    // 🇨🇾 Caucasus
    { code: "+374", country: "Armenia", iso: "AM" },
    { code: "+994", country: "Azerbaijan", iso: "AZ" },
    { code: "+995", country: "Georgia", iso: "GE" },

    // 🇸🇦 Middle East
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
    setFormData(prev => ({ ...prev, country: item.country }));
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
        icon: "⚠️",
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
    <div className="container mx-auto px-3 py-4 mt-5 sm:py-6 md:py-8 lg:py-12 max-w-7xl font-mona">
      {/* Back Button */}
      <button
        type="button"
        onClick={() => window.history.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors mb-6 group"
      >
        <div className="p-2 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
          <IoArrowBackOutline size={20} />
        </div>
        <span className="text-sm font-medium uppercase tracking-widest font-black">{t("backToProduct")}</span>
      </button>

      <form onSubmit={(e) => handlePlaceOrder(e)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">

          {/* Right Column - Your Order (First on mobile, Second on desktop) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-gray-50/50 backdrop-blur-sm p-4 sm:p-6 lg:p-10 rounded-2xl border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-md">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-6 flex items-center gap-3 uppercase tracking-tight">
                <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm shadow-lg">1</span>
                {t("yourOrder")}
              </h2>

              {/* Order Items Container */}
              <div className="space-y-4 mb-8">
                {/* Product Card */}
                <div className="bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm relative group hover:shadow-md transition-all duration-300">
                  <button
                    type="button"
                    onClick={() => window.history.back()}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-red-600 transition-colors z-10 bg-white rounded-full p-1.5 shadow-sm border border-gray-100"
                    aria-label="Remove item"
                  >
                    <IoCloseCircleOutline size={22} />
                  </button>

                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Product Image */}
                    <div className="w-full sm:w-32 lg:w-40 h-48 sm:h-32 lg:h-40 shrink-0 bg-gray-50 rounded-xl flex items-center justify-center p-4">
                      <Image
                        src={product.images?.[0]?.url || "/images/placeholder.png"}
                        alt={product.name}
                        width={160}
                        height={160}
                        className="object-contain w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                        priority
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between font-mona">
                      <div>
                        {/* Product Title & Price */}
                        <div className="flex flex-col xs:flex-row xs:items-start justify-between gap-3 mb-4">
                          <h3 className="font-black text-gray-900 text-lg sm:text-xl md:text-2xl pr-8 sm:pr-10 leading-none uppercase tracking-tighter">
                            {t(product.name)}
                          </h3>
                          <div className="text-2xl sm:text-3xl font-black text-black">
                            {formatPrice(product.price || 860)}
                          </div>
                        </div>

                        {/* Product Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 bg-gray-50/80 p-4 rounded-xl border border-gray-100/50">
                          {product.features?.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2.5">
                              <div className="w-1.5 h-1.5 rounded-full bg-black/20 group-hover:bg-blue-600 transition-colors shrink-0"></div>
                              <span className="text-xs sm:text-sm text-gray-600 font-bold uppercase tracking-wide">
                                {t(feature)}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quantity Control & Delivery Estimate */}
                      <div className="flex flex-col xs:flex-row xs:items-end justify-between gap-5 pt-5 border-t border-gray-100">
                        <div className="flex flex-wrap items-center gap-6">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-black">
                              {t("quantityLabel")}
                            </span>
                            <div className="flex items-center border border-gray-200 rounded-xl bg-gray-50/50 overflow-hidden shadow-sm">
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(-1)}
                                className="px-4 py-2 text-gray-400 hover:bg-white hover:text-black transition-all font-black text-lg"
                                aria-label="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="px-5 py-2 text-sm text-black font-black min-w-[3.5rem] text-center border-x border-gray-200 bg-white shadow-inner">
                                {quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleQuantityChange(1)}
                                className="px-4 py-2 text-gray-400 hover:bg-white hover:text-black transition-all font-black text-lg"
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 px-4 py-2 bg-black/5 rounded-xl border border-black/5">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse shadow-glow"></div>
                            <div className="flex flex-col">
                              <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">{t("deliveryEstimate")}</span>
                              <span className="text-xs font-black text-gray-900 leading-none">{t("march2026")}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">{t("itemTotal")}</div>
                          <div className="text-2xl font-black text-black">
                            {formatPrice(originalSubtotal)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="bg-white p-5 sm:p-8 rounded-2xl border border-gray-200 shadow-sm font-mona">
                <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-6 flex items-center justify-between uppercase tracking-tight">
                  {t("orderSummary")}
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">{quantity} {t("items")}</span>
                </h3>

                <div className="space-y-4">
                  {/* Subtotal */}
                  <div className="flex justify-between items-center text-gray-500">
                    <span className="text-sm sm:text-base font-bold uppercase tracking-wider">{t("subtotal")}</span>
                    <span className="text-base sm:text-lg font-black text-gray-900">
                      {formatPrice(originalSubtotal)}
                    </span>
                  </div>

                  {/* Delivery */}
                  <div className="flex justify-between items-center text-gray-500">
                    <span className="text-sm sm:text-base font-bold uppercase tracking-wider">{t("delivery")}</span>
                    <span className="text-base sm:text-lg font-black text-gray-900">
                      {calculating ? "..." : formatPrice(shippingFee)}
                    </span>
                  </div>

                  {/* Discount */}
                  <div className="flex justify-between items-center p-4 bg-red-50/50 rounded-2xl border border-red-100">
                    <div className="flex flex-col">
                      <span className="text-sm font-black text-red-900 uppercase tracking-tight">{t("preOrderDiscount")}</span>
                      <span className="text-[10px] text-red-500 font-black uppercase tracking-widest mt-0.5">{t("offRetailPrice")}</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-black text-red-700">
                      -{formatPrice(discountAmount)}
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex justify-between items-center pt-8 mt-4 border-t-2 border-dashed border-gray-100">
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-gray-900 uppercase tracking-tighter leading-none">{t("total")}</span>
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">{t("subtotalMinusDiscount")}</span>
                    </div>
                    <div className="text-3xl sm:text-4xl font-black text-black text-right">
                      {formatPrice(total)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left Column - Billing Address (Second on mobile, First on desktop) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white p-4 sm:p-6 lg:p-10 rounded-2xl border border-gray-200 shadow-2xl overflow-hidden group">
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mb-8 flex items-center gap-3 uppercase tracking-tight">
                <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm shadow-lg">2</span>
                {t("billingAddress")}
              </h2>

              <div className="space-y-6">
                {/* Full Name Split */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                      {t("firstName")}
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder={t("firstName")}
                      className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all ${fieldErrors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-50 hover:bg-gray-100/50'}`}
                    />
                    {fieldErrors.firstName && <p className="text-red-600 text-[9px] mt-2 font-black uppercase tracking-wider pl-1">{fieldErrors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                      {t("lastName")}
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder={t("lastName")}
                      className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all ${fieldErrors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-50 hover:bg-gray-100/50'}`}
                    />
                    {fieldErrors.lastName && <p className="text-red-600 text-[9px] mt-2 font-black uppercase tracking-wider pl-1">{fieldErrors.lastName}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                    {t("emailAddress")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    readOnly
                    className="w-full bg-gray-100 border-2 border-gray-100 rounded-xl px-5 py-4 text-sm font-bold text-gray-400 cursor-not-allowed shadow-inner"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                    {t("phoneNumber")}
                  </label>
                  <div className="flex flex-col xs:flex-row gap-3 relative" ref={dropdownRef}>
                    <div className="relative w-full xs:w-44">
                      <div
                        onClick={() => setIsCodeDropdownOpen(!isCodeDropdownOpen)}
                        className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-4 text-sm font-black focus:outline-none focus:ring-4 focus:ring-black/5 cursor-pointer flex justify-between items-center group transition-all hover:bg-gray-100"
                      >
                        <span className="flex items-center gap-2">
                          <span className="text-gray-400 font-medium">{countryCodes.find(c => c.code === selectedCountryCode)?.iso || "AE"}</span>
                          <span>{selectedCountryCode}</span>
                        </span>
                        <span className="text-[10px] text-gray-300 group-hover:text-black transform transition-transform group-hover:translate-y-0.5">▼</span>
                      </div>

                      {isCodeDropdownOpen && (
                        <div className="absolute z-50 left-0 right-0 mt-3 bg-white border border-gray-200 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] max-h-72 overflow-y-auto w-full xs:w-80 animate-in fade-in slide-in-from-top-4 duration-300">
                          <div className="p-4 sticky top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 group">
                            <input
                              type="text"
                              placeholder={t("searchPlaceholder")}
                              value={codeSearchTerm}
                              onChange={(e) => setCodeSearchTerm(e.target.value)}
                              onClick={(e) => e.stopPropagation()}
                              className="w-full px-5 py-3 text-xs bg-gray-50 border-2 border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:bg-white transition-all font-bold"
                            />
                          </div>
                          <div className="py-2">
                            {filteredCountryCodes.length > 0 ? (
                              filteredCountryCodes.map((item, idx) => (
                                <button
                                  key={`${item.iso}-${item.code}-${idx}`}
                                  type="button"
                                  onClick={() => handleCountryCodeSelect(item)}
                                  className="w-full px-6 py-4 text-xs text-left hover:bg-gray-50 flex items-center justify-between border-b border-gray-50 last:border-0 group/item transition-colors"
                                >
                                  <div className="flex flex-col">
                                    <span className="font-black text-gray-900 group-hover/item:text-black">{item.country}</span>
                                    <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-1 opacity-60">{item.iso}</span>
                                  </div>
                                  <span className="text-black font-black bg-gray-100 px-2.5 py-1 rounded-lg group-hover/item:bg-black group-hover/item:text-white transition-all">{item.code}</span>
                                </button>
                              ))
                            ) : (
                              <div className="px-5 py-8 text-xs text-gray-400 text-center font-bold italic opacity-50 uppercase tracking-widest">
                                No results found
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="551234567"
                        className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all ${fieldErrors.phone ? 'border-red-500 bg-red-50' : 'border-gray-50 hover:bg-gray-100/50'}`}
                      />
                    </div>
                  </div>
                  {fieldErrors.phone && <p className="text-red-600 text-[9px] mt-2 font-black uppercase tracking-wider pl-1">{fieldErrors.phone}</p>}
                </div>

                {/* Address */}
                <div>
                  <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                    {t("address")}
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder={t("streetAddress")}
                    className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all ${fieldErrors.address ? 'border-red-500 bg-red-50' : 'border-gray-50 hover:bg-gray-100/50'}`}
                  />
                  {fieldErrors.address && <p className="text-red-600 text-[9px] mt-2 font-black uppercase tracking-wider pl-1">{fieldErrors.address}</p>}
                </div>

                {/* Country & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                      {t("country")}
                    </label>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black appearance-none transition-all ${fieldErrors.country ? 'border-red-500 bg-red-50' : 'border-gray-50 hover:bg-gray-100/50'}`}
                      >
                        <option value="" disabled>{t("selectCountry")}</option>
                        {[...new Set(countryCodes.map(c => c.country))].sort().map(countryName => (
                          <option key={countryName} value={countryName}>{countryName}</option>
                        ))}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[10px] text-gray-300">
                        ▼
                      </div>
                    </div>
                    {fieldErrors.country && <p className="text-red-600 text-[9px] mt-2 font-black uppercase tracking-wider pl-1">{fieldErrors.country}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                      {t("stateEmirate")}
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder={t("dubai")}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all hover:bg-gray-100/50"
                    />
                  </div>
                </div>

                {/* City & Zip Code */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                      {t("city")}
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder={t("enterYourCity")}
                      className={`w-full bg-gray-50 border-2 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all ${fieldErrors.city ? 'border-red-500 bg-red-50' : 'border-gray-50 hover:bg-gray-100/50'}`}
                    />
                    {fieldErrors.city && <p className="text-red-600 text-[9px] mt-2 font-black uppercase tracking-wider pl-1">{fieldErrors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2.5 pl-1">
                      {t("zipPostalCode")}
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      placeholder={t("enterPostalCode")}
                      className="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-5 py-4 text-sm font-bold focus:outline-none focus:ring-4 focus:ring-black/5 focus:border-black transition-all hover:bg-gray-100/50"
                    />
                  </div>
                </div>

                {/* Payment Method Section */}
                <div className="pt-8">
                  <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-100">
                    <h3 className="text-sm sm:text-base font-black text-gray-900 uppercase tracking-tight mb-5">
                      {t("paymentMethod")}
                    </h3>

                    <div className="space-y-4">
                      {/* Stripe/Card Option */}
                      <label className={`flex items-start gap-5 p-5 bg-white border-2 rounded-2xl cursor-pointer transition-all duration-300 ${formData.paymentMethod === 'stripe' ? 'border-black shadow-xl scale-[1.02] ring-8 ring-black/5' : 'border-transparent hover:border-gray-200 opacity-60 hover:opacity-100'}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="stripe"
                          checked={formData.paymentMethod === 'stripe'}
                          onChange={handleInputChange}
                          className="mt-1.5 w-5 h-5 text-black border-gray-300 focus:ring-black accent-black"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4">
                            <div className="min-w-0">
                              <span className="font-black text-gray-900 text-base sm:text-lg uppercase tracking-tight">{t("creditDebitCard")}</span>
                              <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-widest leading-relaxed">
                                {t("payWithCards")}
                              </p>
                            </div>
                            <div className="flex gap-3 bg-gray-50 p-2 rounded-xl">
                              <FaCcVisa className="text-3xl text-blue-800" />
                              <FaCcMastercard className="text-3xl text-red-500" />
                              <FaCcAmex className="text-3xl text-blue-600" />
                            </div>
                          </div>
                        </div>
                      </label>

                      {/* Tamara Option */}
                      <label className={`flex items-start gap-5 p-5 bg-white border-2 rounded-2xl cursor-pointer transition-all duration-300 ${formData.paymentMethod === 'tamara' ? 'border-[#00D1C1] shadow-xl scale-[1.02] ring-8 ring-[#00D1C1]/5' : 'border-transparent hover:border-gray-200 opacity-60 hover:opacity-100'}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="tamara"
                          checked={formData.paymentMethod === 'tamara'}
                          onChange={handleInputChange}
                          className="mt-1.5 w-5 h-5 text-[#00D1C1] border-gray-300 focus:ring-[#00D1C1] accent-[#00D1C1]"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-4">
                            <div className="min-w-0">
                              <span className="font-black text-gray-900 text-base sm:text-lg uppercase tracking-tight">{t("payWithTamara")}</span>
                              <p className="text-[10px] text-gray-400 mt-1 font-bold uppercase tracking-widest leading-relaxed">
                                {t("payIn4Installments")}
                              </p>
                            </div>
                            <div className="relative w-20 h-8 bg-gray-50 p-2 rounded-xl flex items-center justify-center">
                              <Image
                                src={TmaraPayment}
                                alt="Tamara Payment"
                                fill
                                className="object-contain p-1"
                                sizes="80px"
                              />
                            </div>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-10 font-mona">
                  {formError && (
                    <div className="mb-8 p-5 bg-red-50 border-l-4 border-red-600 rounded-2xl flex items-center gap-4 text-red-700 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-xs font-black uppercase tracking-[0.1em]">{formError}</p>
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className={`w-full py-6 bg-black text-white rounded-2xl text-lg font-black uppercase tracking-[0.3em] overflow-hidden group/btn relative transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-500"></div>
                      <div className="relative z-10 flex items-center justify-center gap-4">
                        {submitting ? (
                          <>
                            <div className="w-6 h-6 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                            <span className="animate-pulse">{t("processing")}</span>
                          </>
                        ) : (
                          <>
                            <span>{t("placeOrderPay")}</span>
                            <svg className="w-6 h-6 transform group-hover/btn:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => window.history.back()}
                      className="w-full py-4 text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] hover:text-black transition-all duration-300 border-2 border-transparent hover:border-gray-100 rounded-2xl"
                    >
                      {t("cancelOrder")}
                    </button>
                  </div>

                  {formData.paymentMethod === "tamara" && (
                    <p className="text-[9px] text-gray-400 text-center mt-10 font-black uppercase tracking-[0.2em] opacity-40">
                      {t("chargedInAED")}
                    </p>
                  )}

                  {/* Security Note */}
                  <div className="mt-12 pt-8 border-t border-gray-100 flex items-start gap-5 group/sec">
                    <div className="bg-green-50 rounded-2xl p-3.5 shrink-0 border border-green-100 group-hover/sec:bg-green-100 transition-colors duration-500">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-xs font-black text-gray-900 uppercase tracking-[0.2em] mb-2">{t("securePayment")}</div>
                      <div className="text-[10px] text-gray-500 leading-relaxed font-bold uppercase tracking-widest opacity-60">
                        {t("securePaymentDesc")}
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