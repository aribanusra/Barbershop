import React from 'react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="p-6 border border-zinc-800 rounded-lg bg-zinc-900/30 h-full">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-500' : 'text-zinc-700'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
        ))}
      </div>
      <p className="text-zinc-300 mb-4 italic">"{testimonial.text}"</p>
      <p className="text-white font-medium">{testimonial.name}</p>
    </div>
  );
};

export default TestimonialCard;