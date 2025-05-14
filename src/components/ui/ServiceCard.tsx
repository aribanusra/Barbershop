import React from 'react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  isHighlighted?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, isHighlighted = false }) => {
  return (
    <div 
      className={`p-5 border rounded-lg transition-all duration-300 h-full
        ${isHighlighted 
          ? 'border-amber-500 bg-zinc-900/50' 
          : 'border-zinc-800 bg-zinc-900/20 hover:border-amber-500/50'}`}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-medium text-white">{service.name}</h3>
        <span className="text-amber-500 font-bold">${service.price}</span>
      </div>
      <p className="text-zinc-400 text-sm mb-3">{service.description}</p>
      <div className="flex items-center text-zinc-500 text-sm">
        <span className="inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {service.duration}
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;