import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content and CTAs */}
          <div className="text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-normal">
                Powerful Solutions for Your Digital Transformation
              </h1>
              <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-xl mx-auto md:mx-0">
                Drive growth and efficiency with our cutting-edge technology services. We build secure, scalable, and user-centric applications.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6 pt-2">
              <a
                href="#"
                role="link"
                className="w-full sm:w-auto bg-indigo-600 text-white font-semibold text-base px-6 py-3 rounded-xl hover:bg-indigo-700 transition-all duration-200 text-center"
              >
                Start Your Free Trial
              </a>
              <a
                href="#"
                role="link"
                className="w-full sm:w-auto border border-gray-300 text-gray-900 bg-transparent font-semibold text-base px-6 py-3 rounded-xl hover:bg-gray-50 transition-all duration-200 text-center"
              >
                Explore Features
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="A person working on a laptop with data visualizations on the screen, representing digital transformation."
              className="w-full h-auto object-cover rounded-xl shadow-lg md:max-w-md transition-transform duration-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;