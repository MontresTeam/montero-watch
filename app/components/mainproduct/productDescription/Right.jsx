import React from 'react';

export default function Right() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center text-center px-4 space-y-8 md:space-y-10 bg-white">
            <h2 className="font-cormorant text-4xl sm:text-5xl lg:text-6xl text-neutral-900 leading-[1.1] tracking-tight max-w-lg mx-auto">
                Time is the vehicle that carries everything into nothing
            </h2>

            <p className="monaSans text-neutral-600 text-sm sm:text-base md:text-lg leading-[1.6] max-w-sm mx-auto">
                Montero is available in two collectible editions each designed with its own identity while sharing the same world-time DNA and craftsmanship.
            </p>

            <div className="pt-2">
                <button className="rounded-full border border-neutral-900 px-10 py-4 text-xs md:text-sm font-medium uppercase tracking-widest transition-all duration-300 hover:bg-neutral-900 hover:text-white">
                    Pre-Order Now
                </button>
            </div>
        </div>
    );
}