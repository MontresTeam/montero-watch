import React from "react";

const videos = [
  "https://www.youtube.com/embed/RvFvfoztjNo",
  "https://www.youtube.com/embed/RaDTuqW6kkA",
  "https://www.youtube.com/embed/CZwg2KEwBCQ",
];

const ClientVoices = () => {
  return (
    <section className="bg-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-xs tracking-widest text-gray-500 border border-gray-300 px-4 py-1 rounded-full mb-6">
            Review
          </span>

          <h2 className="font-serif text-4xl lg:text-5xl text-gray-900 mb-4">
            Voices of Our Clients
          </h2>

          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Real experiences from customers who wear our timepieces every day.
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((src, index) => (
            <div
              key={index}
              className="relative h-[520px] overflow-hidden"
            >
              <iframe
                src={src}
                title={`Client review ${index + 1}`}
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientVoices;
