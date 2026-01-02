import Image from "next/image";
import limitedEdition from "../../../../public/images/MainProducts/featureIcons/limited 1.png";
import timerWatch from "../../../../public/images/MainProducts/featureIcons/Blue dial inspired by Jumeirah  shoreline.png";
import handIcon from "../../../../public/images/MainProducts/featureIcons/Sapphire crystal for durability.png";
import arabicNumber from "../../../../public/images/MainProducts/featureIcons/Eastern Arabic numerals.png";
import gmtIcon from "../../../../public/images/MainProducts/featureIcons/GMT function for global  synchrony.png";
import greenWatch from "../../../../public/images/MainProducts/greenWatch/gw2.png";

export default function WatchFeatures() {
  return (
    <section className="w-full bg-white py-12 md:py-20">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20"> {/* Fluid padding */}

        {/* Desktop Layout: Features around the watch (md and up) */}
        <div className="relative hidden md:block w-full max-w-5xl mx-auto aspect-[2/1]">
          
          {/* Central Watch */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <Image
              src={greenWatch}
              alt="Luxury Watch"
              width={800}
              height={800}
              className="object-contain w-[40%] max-w-[380px] -rotate-45"
              priority
            />
          </div>

          {/* Features positioned around the watch */}
          <Feature
            icon={handIcon}
            text="Sapphire crystal for durability"
            className="absolute top-8 left-1/2 -translate-x-1/2"
          />
          <Feature
            icon={limitedEdition}
            text="Limited edition caseback engraving"
            className="absolute top-[18%] left-[8%]"
          />
          <Feature
            icon={timerWatch}
            text="Blue dial inspired by Jumeirah shoreline"
            className="absolute bottom-[18%] left-[8%]"
          />
          <Feature
            icon={arabicNumber}
            text="Eastern Arabic numerals"
            className="absolute top-[18%] right-[8%]"
          />
          <Feature
            icon={gmtIcon}
            text="GMT function for global synchrony"
            className="absolute bottom-[18%] right-[8%]"
          />

          {/* Dots */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            <span className="w-3 h-3 rounded-full bg-green-800"></span>
            <span className="w-3 h-3 rounded-full border border-neutral-400"></span>
          </div>
        </div>

        {/* Mobile Layout: Full-width, stacked, fluid */}
        <div className="md:hidden flex flex-col items-center">
          
          {/* Watch - large and centered on mobile */}
          <div className="w-full max-w-[320px] mx-auto mb-10">
            <Image
              src={greenWatch}
              alt="Luxury Watch"
              width={800}
              height={800}
              className="object-contain w-full -rotate-45"
              priority
            />
          </div>

          {/* Stacked Features - full fluid width */}
          <div className="w-full max-w-md space-y-10 px-4">
            <MobileFeature icon={handIcon} text="Sapphire crystal for durability" />
            <MobileFeature icon={limitedEdition} text="Limited edition caseback engraving" />
            <MobileFeature icon={timerWatch} text="Blue dial inspired by Jumeirah shoreline" />
            <MobileFeature icon={arabicNumber} text="Eastern Arabic numerals" />
            <MobileFeature icon={gmtIcon} text="GMT function for global synchrony" />
          </div>

          {/* Dots - centered below */}
          <div className="flex gap-3 mt-12">
            <span className="w-3 h-3 rounded-full bg-green-800"></span>
            <span className="w-3 h-3 rounded-full border border-neutral-400"></span>
          </div>
        </div>

      </div>
    </section>
  );
}

// Reusable Feature for Desktop (absolute positioned)
function Feature({ icon, text, className = "" }) {
  return (
    <div className={`flex flex-col items-center text-center gap-4 max-w-[220px] ${className}`}>
      <Image src={icon} alt="" width={64} height={64} className="w-14 h-14 md:w-16 md:h-16" />
      <p className="text-sm md:text-base text-neutral-700 leading-relaxed font-medium">
        {text}
      </p>
    </div>
  );
}

// Enhanced Mobile Feature - larger, more spacious
function MobileFeature({ icon, text }) {
  return (
    <div className="flex flex-col items-center text-center gap-5">
      <Image 
        src={icon} 
        alt="" 
        width={80} 
        height={80} 
        className="w-16 h-16 sm:w-20 sm:h-20" 
      />
      <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-medium px-4">
        {text}
      </p>
    </div>
  );
}