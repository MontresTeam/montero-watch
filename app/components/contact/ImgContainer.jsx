import Image from "next/image";

export default function ImgContainer() {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex justify-center items-center overflow-hidden lg:overflow-visible">

            {/* BACKGROUND STAR - Adjusted for mobile */}
            <div className="absolute z-0 scale-75 sm:scale-90 md:scale-100 lg:scale-100 xl:scale-125 opacity-90">
                <Image
                    src="/images/contact/star.png"
                    alt="Star Background"
                    width={300}
                    height={300}
                    className="object-contain opacity-10 md:opacity-20"
                    priority
                    sizes="(max-width: 640px) 300px, (max-width: 768px) 350px, 400px"
                />
            </div>

            {/* GREEN WATCH (Right & Behind) - Responsive positioning */}
            <div className="absolute z-10 
                translate-x-[15px] sm:translate-x-[30px] md:translate-x-[50px] lg:translate-x-[80px]
                translate-y-[-20px] sm:translate-y-[-10px] lg:translate-y-[-10px]
                scale-75 sm:scale-90 md:scale-100">
                <Image
                    src="/images/MainProducts/greenWatch/green-watch1.png"
                    alt="Green Watch"
                    width={200}
                    height={200}
                    className="object-contain drop-shadow-lg md:drop-shadow-xl"
                    sizes="(max-width: 640px) 200px, (max-width: 768px) 220px, 280px"
                    priority
                />
            </div>

            {/* BLUE WATCH (Left & Front) - Responsive positioning */}
            <div className="absolute z-20 
                translate-x-[-15px] sm:translate-x-[-30px] md:translate-x-[-50px] lg:translate-x-[-80px]
                translate-y-[20px] sm:translate-y-[10px] lg:translate-y-[10px]
                scale-80 sm:scale-95 md:scale-100">
                <Image
                    src="/images/MainProducts/blueWatch/blueWatch2.png"
                    alt="Blue Watch"
                    width={220}
                    height={220}
                    className="object-contain drop-shadow-xl md:drop-shadow-2xl"
                    sizes="(max-width: 640px) 220px, (max-width: 768px) 250px, 300px"
                    priority
                />
            </div>

            {/* Decorative elements for mobile */}
            <div className="lg:hidden absolute inset-0 flex items-center justify-center">
                <div className="absolute w-32 h-32 rounded-full border border-gray-200/30"></div>
                <div className="absolute w-40 h-40 rounded-full border border-gray-200/20"></div>
            </div>

        </div>
    );
}