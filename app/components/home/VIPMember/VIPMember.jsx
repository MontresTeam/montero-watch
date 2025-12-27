"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import VipImage from "@/public/images/Home/VipImage.png";

const VIPMember = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch  mx-auto  py-16"
    >
      {/* LEFT CONTENT */}
      <div className="bg-[#1A1E28] text-white p-12  pl-20 flex flex-col ">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Join the Montero VIP Club
          </h2>

          <p className="text-blue-100 mb-6 max-w-lg">
            Our VIP members gain access to exclusive benefits and are part of shaping the future of Montero.
          </p>

          {/* POINTS */}
          <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white" />
              <p>Vote on future Montero editions</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white" />
              <p>Early access to new drops</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white" />
              <p>Special pricing for limited releases</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-white" />
              <p>Exclusive email updates</p>
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button className="border border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-blue-600 transition w-fit">
          Become a VIP Member
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex max-h-[400px] items-center justify-center bg-gray-100">
        <Image
          src={VipImage}
          alt="VIP Member"
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default VIPMember;
