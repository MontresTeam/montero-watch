import Image from "next/image";

export default function ImgContainer() {
    return (
        <div className="relative w-full h-[600px] flex justify-center items-center overflow-visible">

            {/* BACKGROUND STAR */}
            <div className="absolute z-0 scale-100 sm:scale-125 opacity-90">
                <Image
                    src="/images/contact/star.png"
                    alt="Star Background"
                    width={400}
                    height={400}
                    className="object-contain opacity-10 mb-19"
                />
            </div>

            {/* GREEN WATCH (Right & Behind) */}
            <div className="absolute z-10 translate-x-[30px] translate-y-[-10px] sm:translate-x-[80px]">
                <Image
                    src="/images/MainProducts/greenWatch/green-watch1.png"
                    alt="Green Watch"
                    width={280}
                    height={280}
                    className="object-contain drop-shadow-xl"
                />
            </div>

            {/* BLUE WATCH (Left & Front) */}
            <div className="absolute z-20 translate-x-[-30px] translate-y-[10px] sm:translate-x-[-80px]">
                <Image
                    src="/images/MainProducts/blueWatch/blueWatch2.png"
                    alt="Blue Watch"
                    width={300}
                    height={300}
                    className="object-contain drop-shadow-2xl "
                />
            </div>

        </div>
    );
}
