import React, { useState } from 'react';
import ServiceCard from './ui/ServiceCard';
import Button from './ui/Button';
import { services } from '../data/services';

const Services = () => {
  const [activeTab, setActiveTab] = useState('classic');  
  
  const filteredServices = services.filter(service => service.category === activeTab);

  return (
    <section id="services" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-4">
    
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
  <h1 className="text-5xl text-white font-bold mb-2">Our Barber Services</h1>
  <h2 className="text-lg text-amber-500 hover:text-amber-600 transition">
Professional barbering services tailored to enhance your look and confidence. We take pride in delivering precise cuts and relaxing experiences.  </h2>
</div>
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-zinc-900 rounded-lg">
            <button
              onClick={() => setActiveTab('classic')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'classic' ? 'bg-amber-500 text-black' : 'bg-transparent text-white hover:text-amber-500'}`}
            >
              Classic Services
            </button>
            <button
              onClick={() => setActiveTab('premium')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'premium' ? 'bg-amber-500 text-black' : 'bg-transparent text-white hover:text-amber-500'}`}
            >
              Premium Services
            </button>
            <button
              onClick={() => setActiveTab('package')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${activeTab === 'package' ? 'bg-amber-500 text-black' : 'bg-transparent text-white hover:text-amber-500'}`}
            >
              Packages
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service}
              isHighlighted={service.id % 3 === 1}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline">View All Services</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
