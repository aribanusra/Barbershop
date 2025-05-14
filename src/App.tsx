import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Pricing from './components/Pricing';
import BarberProfiles from './components/BarberProfiles';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Viewshop from './components/Viewshop';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-theme-primary min-h-screen transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <BarberProfiles />
      <Gallery />
      <Testimonials />
      <Viewshop/>
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;