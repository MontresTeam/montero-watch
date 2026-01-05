"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import blueWatch from "@/public/images/MainProducts/blueWatch/blueWatch2.png"
import greenWatch from "@/public/images/MainProducts/greenWatch/green-watch1.png"


function WatchDisplay({ isSwapped, setIsSwapped }) {
    const mainRef = useRef(null);
    const smallRef = useRef(null);
    const topArrowRef = useRef(null);
    const bottomArrowRef = useRef(null);

    useEffect(() => {
        // SVG Arrow Animations
        const arrows = [topArrowRef.current, bottomArrowRef.current];

        // Initial Draw-in effect
        gsap.fromTo(arrows,
            { strokeDashoffset: 1000, strokeDasharray: 1000, opacity: 0 },
            { strokeDashoffset: 0, opacity: 1, duration: 2, ease: "power2.out", stagger: 0.5 }
        );

        // Continuous floating/pulse effect
        gsap.to(arrows, {
            y: "+=10",
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: {
                each: 0.5,
                repeat: -1,
                yoyo: true
            }
        });

        const interval = setInterval(() => {
            // Out animation
            const tl = gsap.timeline();
            tl.to([mainRef.current, smallRef.current], {
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                ease: "power2.inOut",
                onComplete: () => {
                    setIsSwapped((prev) => !prev);
                }
            });
        }, 3000);
        return () => {
            clearInterval(interval);
            gsap.killTweensOf(arrows);
        };
    }, [setIsSwapped]);

    useEffect(() => {
        // In animation
        gsap.fromTo(mainRef.current,
            { opacity: 0, scale: 0.85, x: 50 },
            { opacity: 1, scale: 1, x: 0, duration: 1, ease: "power4.out" }
        );
        gsap.fromTo(smallRef.current,
            { opacity: 0, scale: 0.8, x: -30 },
            { opacity: 0.9, scale: 1, x: 0, duration: 1, ease: "power4.out" }
        );
    }, [isSwapped]);

    const mainImage = isSwapped ? greenWatch : blueWatch;
    const smallImage = isSwapped ? blueWatch : greenWatch;
    const mainAlt = isSwapped ? "Green Watch" : "Blue World Time Watch";
    const smallAlt = isSwapped ? "Blue Watch" : "Green Watch";

    return (
        <div className="relative w-full md:w-[70%] h-[500px] sm:h-[500px] md:h-[600px] lg:h-[800px]">
            {/* SMALL WATCH (left-middle) */}
            <div
                ref={smallRef}
                className="absolute left-2 sm:left-5 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 z-10 rotate-12 sm:rotate-15 md:rotate-20"
            >
                <Image
                    src={smallImage}
                    alt={smallAlt}
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain opacity-90 blur-[0.5px] sm:blur-[1px]"
                />
            </div>

            {/* TOP CURVED ARROW */}
            <svg
                className="absolute left-12 sm:left-20 md:left-32 lg:left-40 top-[28%] z-5 w-28 h-14 sm:w-36 sm:h-16 md:w-44 md:h-20 lg:w-[220px] lg:h-[100px]"
                viewBox="0 0 220 140"
            >
                <defs>
                    <marker
                        id="arrowhead-start"
                        markerWidth="8"
                        markerHeight="8"
                        refX="6"
                        refY="3"
                        orient="auto"
                        markerUnits="strokeWidth"
                    >
                        <path d="M6,0 L6,6 L0,3 z" fill="rgba(255,255,255,0.35)" />
                    </marker>
                </defs>

                <path
                    ref={topArrowRef}
                    d="M 10 110 Q 110 10, 210 80"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6,6"
                    markerStart="url(#arrowhead-start)"
                />
            </svg>

            {/* MAIN WATCH (right-center, dominant) */}
            <div
                ref={mainRef}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
            >
                <Image
                    src={mainImage}
                    alt={mainAlt}
                    className="
                        w-[280px] h-[280px]
                        sm:w-[320px] sm:h-[320px]
                        md:w-[450px] md:h-[450px]
                        lg:w-[650px] lg:h-[650px]

                        ml-[100px]
                        sm:ml-[90px]
                        md:ml-[140px]
                        lg:ml-[200px]

                        mt-[10px] sm:mt-[30px] md:mt-[40px] lg:mt-[60px]
                        object-contain -rotate-[165deg]
                    "
                />
            </div>



            {/* BOTTOM CURVED ARROW */}
            <svg
                className="absolute left-16 sm:left-24 md:left-32 lg:left-35 top-[60%] sm:top-[55%] z-5 w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-[220px] lg:h-[100px]"
                viewBox="0 0 240 160"
                fill="none"
            >
                <defs>
                    <marker
                        id="arrowUpProper"
                        markerWidth="8"
                        markerHeight="8"
                        refX="9"
                        refY="5"
                        orient="auto"
                        markerUnits="strokeWidth"
                    >
                        <path d="M0 0 L10 5 L0 10 Z" fill="rgba(255,255,255,0.35)" />
                    </marker>
                </defs>

                <path
                    ref={bottomArrowRef}
                    d="M 10 20 Q 120 140, 230 70"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6,6"
                    strokeLinecap="round"
                    markerEnd="url(#arrowUpProper)"
                />
            </svg>
        </div>
    );
}

export default WatchDisplay;
