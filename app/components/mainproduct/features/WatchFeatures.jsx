"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Green watches icons
import limitedEdition from "../../../../public/images/MainProducts/featureIcons/limited 1.png";
import timerWatch from "../../../../public/images/MainProducts/featureIcons/Blue dial inspired by Jumeirah  shoreline.png";
import handIcon from "../../../../public/images/MainProducts/featureIcons/Sapphire crystal for durability.png";
import arabicNumber from "../../../../public/images/MainProducts/featureIcons/Eastern Arabic numerals.png";
import gmtIcon from "../../../../public/images/MainProducts/featureIcons/GMT function for global  synchrony.png";

import greenWatch from "../../../../public/images/MainProducts/greenWatch/gw2.png";
import blueWatch from "../../../../public/images/MainProducts/blueWatch/blueWatch2.png";

// Blue watches icons
import limitedEditionBlue from '../../../../public/images/MainProducts/blueWatchIcons/limited 1.png';
import timerWatchBlue from '../../../../public/images/MainProducts/blueWatchIcons/Blue dial inspired by Jumeirah  shoreline.png';
import handIconBlue from '../../../../public/images/MainProducts/blueWatchIcons/Sapphire crystal for durability.png';
import arabicNumberBlue from '../../../../public/images/MainProducts/blueWatchIcons/Eastern Arabic numerals.png';
import gmtIconBlue from '../../../../public/images/MainProducts/blueWatchIcons/GMT function for global  synchrony.png';

export default function WatchFeatures() {
  const [activeColor, setActiveColor] = useState("green");

  // Auto toggle between green and blue every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveColor(prev => (prev === "green" ? "blue" : "green"));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const watchImage = activeColor === "green" ? greenWatch : blueWatch;
  const themeColor = activeColor === "green" ? "text-green-800" : "text-blue-700";

  const leftIcons = activeColor === "green"
    ? [limitedEdition, timerWatch]
    : [limitedEditionBlue, timerWatchBlue];

  const rightIcons = activeColor === "green"
    ? [arabicNumber, gmtIcon]
    : [arabicNumberBlue, gmtIconBlue];

  const centerIcon = activeColor === "green" ? handIcon : handIconBlue;

  return (
    <section className="w-full bg-white py-14 md:py-24">
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20">
        {/* Responsive grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 items-center max-w-6xl mx-auto gap-8 md:gap-0">

          {/* LEFT / TOP ON MOBILE */}
          <div className="flex flex-col items-center md:items-start justify-between h-auto md:h-[420px] gap-6 md:gap-0">
            <SideFeature icon={leftIcons[0]} text="Limited edition caseback engraving" theme={themeColor} />
            <SideFeature icon={leftIcons[1]} text="Blue dial inspired by Jumeirah shoreline" theme={themeColor} />
          </div>

          {/* CENTER */}
          <div className="flex flex-col items-center gap-10">
            <CenterTopFeature icon={centerIcon} text="Sapphire crystal for durability" theme={themeColor} />

            {/* WATCH IMAGE */}
            <div
              className="relative flex justify-center items-center transition-all duration-1000 ease-in-out w-[280px] sm:w-[360px] md:w-[429px] h-[440px] sm:h-[560px] md:h-[678px]"
              style={{
                transform: activeColor === "green" ? "rotate(50deg)" : "rotate(-50deg)",
              }}
            >
              <Image
                key={activeColor}
                src={watchImage}
                alt="Luxury Watch"
                fill
                style={{ objectFit: "contain" }}
                className="transition-opacity duration-1000 opacity-100"
              />
            </div>

            {/* COLOR SELECTOR BUTTONS */}
            <div className="flex gap-3 mt-2">
              <button
                className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full border ${
                  activeColor === "green"
                    ? "bg-green-800 border-green-800 scale-110"
                    : "border-neutral-400"
                } transition-all`}
              />
              <button
                className={`w-4 h-4 sm:w-3 sm:h-3 rounded-full border ${
                  activeColor === "blue"
                    ? "bg-blue-700 border-blue-700 scale-110"
                    : "border-neutral-400"
                } transition-all`}
              />
            </div>
          </div>

          {/* RIGHT / BOTTOM ON MOBILE */}
          <div className="flex flex-col items-center md:items-end justify-between h-auto md:h-[420px] gap-6 md:gap-0">
            <SideFeature icon={rightIcons[0]} text="Eastern Arabic numerals" theme={themeColor} />
            <SideFeature icon={rightIcons[1]} text="GMT function for global synchrony" theme={themeColor} />
          </div>

        </div>
      </div>
    </section>
  );
}

/* SIDE FEATURE */
function SideFeature({ icon, text, theme }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <Image src={icon} alt="" width={60} height={60} className="w-14 h-14" />
      <p className={`text-sm leading-relaxed font-medium max-w-[180px] ${theme}`}>
        {text}
      </p>
    </div>
  );
}

/* TOP FEATURE */
function CenterTopFeature({ icon, text, theme }) {
  return (
    <div className="flex flex-col items-center text-center gap-3 mb-2">
      <Image src={icon} alt="" width={64} height={64} className="w-16 h-16" />
      <p className={`text-sm font-medium ${theme}`}>{text}</p>
    </div>
  );
}
