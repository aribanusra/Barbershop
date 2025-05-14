import React, { useEffect, useState } from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {

  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);


  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setIsDarkTheme(savedTheme === 'dark');
    const root = document.documentElement;
    root.classList.add(savedTheme);
  }
}, []);

  return ( 
<section id="home" className={`relative min-h-screen flex items-center pt-16 overflow-x-hidden ${isDarkTheme ? 'bg-[#1a1a1a]' : 'bg-[#f5f5f5]'}`}>
  <div className="container mx-auto px-9 relative z-10 flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="w-full md:w-1/2 max-w-xl animate-fade-in-up">
      <p className="text-amber-500 mb-4 tracking-wider uppercase font-medium animate-slide-up">
        Premium Barber Services
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up delay-100">
        Classic Cuts, Modern Style
        <br />
        <span className="text-amber-500">Premium Barber Shop</span>
      </h1>
      <p className="text-zinc-300 mb-8 text-lg animate-slide-up delay-200">
        At PMC Barbershop, we combine traditional barbering techniques with modern styling to give you the perfect look. Our experienced barbers deliver precision cuts, beard grooming, and relaxing hot towel shaves in a classic barbershop atmosphere.
      </p>
      <div className="flex flex-wrap gap-4 animate-slide-up delay-300">
        <Button variant="primary" size="lg" onClick={scrollToContact}>Book Appointment</Button>
                <a href="#services" >  <Button variant="outline" size="lg">View Services</Button>  </a>

      </div>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 mt-10 md:mt-0 animate-fade-in-up group md:ml-10">
      <img
        src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Barber"
        className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110"
      />
    </div>
  </div>
</section>

  );
};

export default Hero;