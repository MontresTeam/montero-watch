import Image from "next/image";
import blueWatch from "../../../../public/images/MainProducts/blueWatch/blueWatch2.png"

export default function ProductDetails() {
    return (
       <section className="relative w-full h-180 bg-white overflow-hidden flex items-center justify-center">
            <div className="mx-auto max-w-7xl px-6 ">
                <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8">

                    {/* LEFT — Specs */}
                    <div className="col-span-12 md:col-span-4 flex flex-col justify-between h-[520px] py-10 relative z-10">
                        <div className="space-y-12 ml-44">
                            <Spec label="Stainless Steel" width="w-[155%]" />

                        </div>
                        <div className="ml-16">
                            <Spec label="Polished & brushed finishing" width="w-[120%]" />
                        </div>

                        <div className="absolute top-1/2 -translate-y-1/2 left-0 pointer-events-none select-none">
                            <div className="font-cormorant text-[40px] leading-tight text-neutral-200 opacity-100 uppercase tracking-widest">
                                <p>Limited Edition</p>
                                <p>One of 150</p>
                            </div>
                        </div>
                        <br />
                        <div>
                            <Spec label="Case Thickness: (add your number)" width="w-[121%]" />
                        </div>

                        <div className="ml-30">
                            <Spec label="Diameter: 40 mm" width="w-[145%]" />
                        </div>
                    </div>

                    {/* CENTER — Watch Image */}
                    <div className="col-span-12 md:col-span-4 flex justify-center items-center relative z-20">
                        <div className="relative h-[500px] w-full flex items-center justify-center">
                            {/* In the reference, the watch is cropped/positioned specifically. 
                                Adjusted to be slightly larger and centered. */}
                            <Image
                                src={blueWatch}
                                alt="Blue Watch"
                                fill
                                className="object-contain scale-125 z-0"
                            />
                            <div className="absolute left-45 top-1/2 -translate-y-1/2 w-120 h-170 bg-white z-10" />
                        </div>
                    </div>

                    {/* RIGHT — Copy */}
                    <div className="col-span-12 md:col-span-4 space-y-8 pl-0 md:pl-10 relative z-20 right-40">
                        <h2 className="font-serif text-5xl leading-[1.15] text-neutral-900">
                            Time is the vehicle that carries everything into nothing
                        </h2>

                        <p className="font-Monasans font-light text-[17px] leading-[1.6] tracking-[-0.01em] text-neutral-600">
                            Montero is available in two collectible editions, each designed
                            with its own identity while sharing the same world-time DNA and
                            craftsmanship.
                        </p>

                        <button className="rounded-full border border-neutral-900 px-8 py-3 text-sm font-medium transition hover:bg-neutral-900 hover:text-white uppercase tracking-wider">
                            Pre-Order Now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* --- Helper component --- */
function Spec({ label, width = "w-full" }) {
    return (
        <div className={`flex items-center gap-4 ${width}`}>
            <span className="h-2 w-2 rounded-full bg-black shrink-0" />
            <span className="whitespace-nowrap text-sm text-neutral-600 font-light">{label}</span>
            <div className="h-[1px] flex-1 bg-neutral-400" />
        </div>
    );
}
