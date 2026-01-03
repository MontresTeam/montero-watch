import React from "react";

function WatchDisplay() {
    return (
        <div className="relative w-full md:w-[70%] h-[500px] sm:h-[500px] md:h-[600px] lg:h-[800px]">
            {/* SMALL GREEN WATCH (left-middle) */}
            <div className="absolute left-2 sm:left-5 md:left-8 lg:left-10 top-1/2 -translate-y-1/2 z-10 rotate-12 sm:rotate-15 md:rotate-20">
                <img
                    src="/images/MainProducts/greenWatch/green-watch1.png"
                    alt="Green Watch"
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
                        markerWidth="10"
                        markerHeight="10"
                        refX="6"
                        refY="3"
                        orient="auto"
                        markerUnits="strokeWidth"
                    >
                        <path d="M6,0 L6,6 L0,3 z" fill="rgba(255,255,255,0.35)" />
                    </marker>
                </defs>

                <path
                    d="M 10 110 Q 110 10, 210 80"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6,6"
                    markerStart="url(#arrowhead-start)"
                />
            </svg>

            {/* MAIN BLUE WATCH (right-center, dominant) */}
            <div className="absolute right-0 sm:right-0 md:right-0 top-1/2 -translate-y-1/2 z-20">
                <img
                    src="/images/MainProducts/blueWatch/blue-watch1.png"
                    alt="Blue World Time Watch"
                    className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] 
                    ml-[80px] sm:ml-[100px] md:ml-[150px] lg:ml-[214px] 
                    mt-[40px] sm:mt-[60px] md:mt-[80px] lg:mt-[120px] 
                    object-contain -rotate-[260deg]"
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
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="5"
                        orient="auto"
                        markerUnits="strokeWidth"
                    >
                        <path d="M0 0 L10 5 L0 10 Z" fill="rgba(255,255,255,0.35)" />
                    </marker>
                </defs>

                <path
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
