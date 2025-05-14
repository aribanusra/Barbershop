import React from 'react';
import BarberCard from './ui/BarberCard';
import { barbers } from '../data/barbers';

const BarberProfiles: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto text-center mb-12 px-4">
  <h1 className="text-5xl text-white font-bold mb-2">Meet Our Barbers</h1>
  <h2 className="text-lg text-amber-500 hover:text-amber-600 transition">
Our team of skilled barbers are dedicated to providing the best grooming experience with precision and style.  </h2>
</div>
      

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {barbers.map(barber => (
            <BarberCard key={barber.id} barber={barber} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BarberProfiles;