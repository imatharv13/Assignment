import React from 'react';
import { Layers, Zap, TrendingUp, Shield, Code } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Layers size={48} className="text-indigo-600" />,
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging interfaces for superior user experiences.',
    },
    {
      icon: <Code size={48} className="text-indigo-600" />,
      title: 'Custom Development',
      description: 'Building robust, scalable, and high-performance applications tailored to your needs.',
    },
    {
      icon: <Zap size={48} className="text-indigo-600" />,
      title: 'Performance Optimization',
      description: 'Fine-tuning systems and codebases for maximum speed and efficiency.',
    },
    {
      icon: <TrendingUp size={48} className="text-indigo-600" />,
      title: 'Data Analytics',
      description: 'Transforming raw data into actionable insights for strategic decision-making.',
    },
    {
      icon: <Shield size={48} className="text-indigo-600" />,
      title: 'Cloud Security',
      description: 'Implementing robust security protocols to protect your infrastructure and data.',
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Headline and Intro */}
        <div className="text-center md:text-left space-y-4 mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-normal">
            Our Core Digital Services
          </h2>
          <p className="text-lg text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto md:mx-0">
            We provide a comprehensive suite of technology services designed to elevate your business and ensure future readiness in a rapidly evolving market.
          </p>
        </div>

        {/* Services Grid (3 columns desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-md p-8 bg-white transition-transform duration-200 hover:scale-[1.02] text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start mb-6">
                {service.icon}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 leading-normal">
                  {service.title}
                </h3>
                <p className="text-base text-gray-700 font-medium leading-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;