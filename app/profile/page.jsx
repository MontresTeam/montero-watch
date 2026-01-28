"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/context/AuthContext";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import api from "@/lib/api";
import "@/lib/i18n";
import userAvatarDefault from "../../public/images/Avatar.png";
import editIcon from "../../public/images/edit.png";

function Page() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const { t, i18n } = useTranslation();
  const isAr = i18n.language?.startsWith("ar");

  const [profileData, setProfileData] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const userId = user.id || user._id;
        const { data } = await api.get(`/user/profile-data/${userId}`);
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching profile data:", error);
      } finally {
        setIsDataLoading(false);
      }
    };

    if (user) {
      fetchProfileData();
    }
  }, [user]);

  if (loading || (user && isDataLoading)) {
    return (
      <div className="flex h-[60vh] items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-stone-200 border-t-stone-900 animate-spin" />
          <span className="text-stone-400 tracking-[0.25em] uppercase text-[10px]">
            {t("loading") || "Loading..."}
          </span>
        </div>
      </div>
    );
  }

  if (!user) {
    if (typeof window !== "undefined") router.push("/login");
    return null;
  }

  const formatDate = (dateString) => {
    if (!dateString) return "—";
    return new Date(dateString).toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });
  };

  const { personalInfo, recentActivities, accountSummary } = profileData || {
    personalInfo: {
      fullName: user.name,
      email: user.email,
      mobileNumber: user.phoneNumber || user.phone || "—",
    },
    recentActivities: [],
    accountSummary: {
      joined: formatDate(user.createdAt),
      status: "Active",
      totalOrders: "00",
    },
  };

  console.log("User createdAt value:", user.createdAt);

  return (
    <div className={`w-full relative ${isAr ? "lang-ar" : ""}`} dir={isAr ? "rtl" : "ltr"}>
      {/* Home Icon Only - Top Corner */}
      <div className={`absolute -top-4 ${isAr ? "left-0" : "right-0"} z-10`}>
        <button
          onClick={() => router.push("/")}
          className="p-3 bg-stone-50 text-stone-900 rounded-full border border-stone-100 shadow-sm hover:bg-stone-900 hover:text-white transition-all duration-300 active:scale-95"
          aria-label={t("goHome") || "Go Home"}
        >
          {isAr ? <FiArrowLeft size={22} /> : <FiArrowRight size={22} />}
        </button>
      </div>

      <div className="space-y-12">
        {/* Header Section */}
        <section className={`flex flex-col md:flex-row items-center md:items-end gap-8 pb-10 border-b border-stone-100 ${isAr ? "text-right" : "text-left"}`}>
          <div className="relative group">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-stone-200 via-stone-50 to-stone-200">
              <div className="relative w-full h-full rounded-full overflow-hidden border border-stone-100 bg-white shadow-inner">
                <Image
                  src={user.profilePic || userAvatarDefault}
                  alt="User Avatar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
            <button
              className={`absolute bottom-1 ${isAr ? "left-1" : "right-1"} bg-white rounded-full p-2.5 shadow-lg border border-stone-50 ring-2 ring-white z-10 hover:bg-stone-50 transition-colors`}
              aria-label={t("editProfile") || "Edit Profile"}
            >
              <Image src={editIcon} alt="Edit" width={16} height={16} />
            </button>
          </div>

          <div className="flex-1 space-y-1.5">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-stone-400 uppercase block">
              {t("exclusiveMember") || "Exclusive Member"}
            </span>
            <h1 className="font-cormorant text-3xl md:text-5xl font-medium text-stone-900">
              {personalInfo.fullName}
            </h1>
            <p className="text-stone-500 text-sm tracking-wide lowercase italic">
              {personalInfo.email}
            </p>
          </div>
        </section>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-12">
            <section className="space-y-8">
              <div className="flex items-center gap-4">
                <h2 className="font-cormorant text-2xl font-medium text-stone-900 whitespace-nowrap">
                  {t("personalInformation") || "Personal Information"}
                </h2>
                <div className="h-px flex-1 bg-stone-100" />
              </div>

              <div className="grid grid-cols-1 min-[450px]:grid-cols-2 gap-x-12 gap-y-10">
                {[
                  { label: t("fullName") || "Full Name", value: personalInfo.fullName },
                  { label: t("emailAddress") || "Email Address", value: personalInfo.email },
                  {
                    label: t("mobileNumber") || "Mobile Number",
                    value: personalInfo.mobileNumber,
                  },
                ].map((item, i) => (
                  <div key={i} className="space-y-2.5">
                    <label className={`block text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold ${isAr ? "text-right" : "text-left"}`}>
                      {item.label}
                    </label>
                    <div className={`text-[15px] text-stone-800 border-b border-stone-50 pb-2.5 font-medium ${isAr ? "text-right" : "text-left"}`}>
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section className="space-y-6">
              <div className="flex items-center gap-4">
                <h2 className="font-cormorant text-2xl font-medium text-stone-900 whitespace-nowrap">
                  {t("recentActivities") || "Recent Activities"}
                </h2>
                <div className="h-px flex-1 bg-stone-100" />
              </div>

              <div className="overflow-hidden border border-stone-100 rounded-3xl bg-stone-50/20">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[500px]" dir={isAr ? "rtl" : "ltr"}>
                    <thead>
                      <tr className="bg-stone-50/50">
                        {["activity", "quantity", "date"].map((k) => (
                          <th
                            key={k}
                            className={`px-8 py-5 text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400 border-b border-stone-100 ${isAr ? "text-right" : "text-left"}`}
                          >
                            {t(k)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {recentActivities.length > 0 ? (
                        recentActivities.map((activity, idx) => (
                          <tr key={idx} className="hover:bg-white transition-colors duration-300">
                            <td className={`px-8 py-6 text-[15px] font-medium text-stone-700 ${isAr ? "text-right" : "text-left"}`}>
                              {activity.activity}
                            </td>
                            <td className={`px-8 py-6 text-sm text-stone-700 ${isAr ? "text-right" : "text-left"}`}>
                              {activity.quantity}
                            </td>
                            <td className={`px-8 py-6 text-sm text-stone-700 ${isAr ? "text-right" : "text-left"}`}>
                              {activity.date}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" className="px-8 py-10 text-center text-stone-400 italic">
                            {t("noRecentActivities") || "No recent activity found."}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>

          {/* Side Summary */}
          <div className="lg:col-span-4 space-y-8">
            <div className={`p-10 bg-stone-900 rounded-[2.5rem] text-white space-y-8 shadow-2xl shadow-stone-200/50 ${isAr ? "text-right" : "text-left"}`}>
              <div className="space-y-2">
                <span className="text-[10px] tracking-[0.3em] text-stone-500 uppercase font-bold block">
                  {t("accountSummary") || "Account Summary"}
                </span>
                <h3 className="font-cormorant text-3xl font-medium">
                  {t("yourStatus") || "Your Status"}
                </h3>
              </div>

              <div className="space-y-6 text-sm">
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">{t("joined")}</span>
                  <span className="font-light italic">{accountSummary.joined}</span>
                </div>
                <div className="flex justify-between items-center border-b border-stone-800 pb-4">
                  <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">{t("status")}</span>
                  <span className="text-emerald-400 font-bold uppercase tracking-widest text-[9px] bg-emerald-400/10 px-3 py-1 rounded-full">
                    {t("active")}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-stone-500 uppercase tracking-widest text-[10px] font-bold">{t("totalOrders")}</span>
                  <span className="text-2xl font-cormorant">{accountSummary.totalOrders}</span>
                </div>
              </div>
            </div>

            <div className={`p-8 border border-stone-100 rounded-[2.5rem] bg-stone-50/50 space-y-4 ${isAr ? "text-right" : "text-left"}`}>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-900">
                {t("needHelp") || "Need Assistance?"}
              </h4>
              <p className="text-[13px] text-stone-400 leading-relaxed font-mona">
                {t("assistanceText") || "Our concierge team is available to help you with your order."}
              </p>
              <button className="text-[10px] font-bold uppercase tracking-widest text-stone-900 border-b border-stone-900 pb-1 hover:text-stone-500 hover:border-stone-500 transition-all">
                {t("contactConcierge") || "Contact Concierge"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
