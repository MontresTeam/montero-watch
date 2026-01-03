import React from 'react';
import Image from 'next/image';
import watch from '../../../../public/images/MainProducts/blueWatch/halfBlueWatch.png'
const SpecCallout = ({ label, className, lineDirection = 'right' }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
            <span className="monaSans text-[10px] md:text-xs text-neutral-800 whitespace-nowrap">
                {label}
            </span>
            <div className="h-[0.5px] bg-neutral-400 grow min-w-[20px] md:min-w-[40px]" />
        </div>
    );
};

export default function Left() {
    return (
        <div className="relative w-full h-full min-h-[600px] lg:min-h-0 flex items-center bg-white overflow-hidden ">
            {/* Background Watermark */}
            <div className="absolute left-10 md:left-14 bottom-32 md:bottom-40 z-0 pointer-events-none select-none opacity-30">
                <h3 className="font-cormorant text-3xl md:text-6xl lg:text-7xl text-neutral-200 uppercase tracking-[0.25em] leading-none mb-4">
                    Limited Edition
                </h3>
                <p className="font-cormorant text-2xl md:text-4xl lg:text-5xl text-neutral-200 uppercase tracking-[0.25em]">
                    One of 150
                </p>
            </div>

            {/* Watch Image - Blended into background with a custom mask and organic shadow */}
            <div
                className="
    absolute right-0 top-1/2 -translate-y-1/2
    w-[75%] sm:w-[65%] md:w-[65%]
    h-[90%] sm:h-[85%] md:h-[80%]
    z-10
    translate-x-[14%]
    mr-4 sm:mr-6 md:mr-8
    mask-[linear-gradient(to_right,transparent_0%,black_12%,black_100%)]
  "
            >
                <div className="relative w-full h-full ">
                    <Image
                        src={watch}
                        alt="Half Blue Watch Display"
                        fill
                        priority
                        className="
        object-contain
        object-right
        scale-105 sm:scale-100 md:scale-100
        pointer-events-none
      "
                    />
                </div>
            </div>


            {/* Callouts Container - Precisely aligned and responsive */}
            <div className="relative z-20 w-full h-full flex flex-col justify-center space-y-10 sm:space-y-12 lg:space-y-20 pl-6 sm:pl-8 md:pl-16 lg:pl-20">

                {/* Stainless Steel */}
                <div className="flex items-center gap-2 sm:gap-4 translate-x-[30%] sm:translate-x-[40%] md:translate-x-[50%] lg:translate-x-[60%] transition-transform hover:scale-105 duration-500 mr-10 md:mr-20 lg:mr-32">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shadow-sm shrink-0" />
                    <span className="monaSans font-light text-[12px] sm:text-[13px] md:text-sm text-neutral-700 whitespace-nowrap uppercase tracking-wider">
                        Stainless Steel
                    </span>
                    <div className="h-px bg-black w-16 sm:w-20 md:w-32 lg:w-40" />
                </div>

                {/* Polished & brushed finishing */}
                <div className="flex items-center gap-2 sm:gap-4 translate-x-[10%] sm:translate-x-[15%] md:translate-x-[25%] lg:translate-x-[35%] mr-10 md:mr-20 lg:mr-32">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shadow-sm shrink-0" />
                    <span className="monaSans font-light text-[12px] sm:text-[13px] md:text-sm text-neutral-700 whitespace-nowrap uppercase tracking-wider">
                        Polished & brushed finishing
                    </span>
                    <div className="h-px bg-black w-14 sm:w-16 md:w-24 lg:w-32" />
                </div>

                {/* Case Thickness */}
                <div className="flex items-center gap-2 sm:gap-4 translate-x-[-15%] sm:translate-x-[-15%] md:translate-x-[-10%] lg:translate-x-[-15%] mr-10 md:mr-20 lg:mr-32">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-black shrink-0" />
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shadow-sm shrink-0" />
                    <span className="monaSans font-light text-[12px] sm:text-[13px] md:text-sm text-neutral-700 whitespace-nowrap uppercase tracking-wider">
                        Case Thickness: (add your number)
                    </span>
                    <div className="h-px bg-black w-20 sm:w-28 md:w-40 lg:w-56" />

                </div>

                {/* Diameter */}
                <div className="flex items-center gap-2 sm:gap-4 translate-x-[15%] sm:translate-x-[20%] md:translate-x-[35%] lg:translate-x-[50%] pt-4 sm:pt-8 mr-10 md:mr-20 lg:mr-32">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black shadow-sm shrink-0" />
                    <span className="monaSans font-light text-[12px] sm:text-[13px] md:text-sm text-neutral-700 whitespace-nowrap uppercase tracking-wider">
                        Diameter: 40 mm
                    </span>
                    <div className="h-px bg-black w-16 sm:w-20 md:w-32 lg:w-48" />

                </div>

            </div>
        </div>
    );
}