import React from 'react';
import SectionHeading from './ui/SectionHeading';
import TestimonialCard from './ui/TestimonialCard';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="What Our Clients Say" 
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;