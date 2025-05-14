import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, PhoneIcon, SunIcon, MoonIcon } from 'lucide-react';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList.add(savedTheme);
      setIsDarkTheme(savedTheme === 'dark');
    } else {
      // Default to dark theme
      document.documentElement.classList.add('dark');
      setIsDarkTheme(true);
    }

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

const toggleTheme = () => {
  const root = document.documentElement;
  if (isDarkTheme) {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  setIsDarkTheme(!isDarkTheme);
};
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'}`}
    >
      <div className="container  px-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <img src="/public/images/logo.webp" alt="logo" className="w-12 h-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-amber-500 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-amber-500 transition-colors">About</a>
            <a href="#services" className="text-white hover:text-amber-500 transition-colors">Services</a>
            <a href="#gallery" className="text-white hover:text-amber-500 transition-colors">Gallery</a>
            <a href="#contact" className="text-white hover:text-amber-500 transition-colors">Contact</a>
          </nav>

          {/* Book Now Button (Desktop) */}
          <div className="hidden md:flex gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
              {isDarkTheme ? (
                <SunIcon className="h-5 w-5 text-amber-500" />
              ) : (
                <MoonIcon className="h-5 w-5 text-amber-500" />
              )}
            </button>
            <a href="tel:+19408081569" className="flex items-center text-white hover:text-amber-500 transition-colors">
              <PhoneIcon className="h-4 w-4 mr-2" />
              +1 940 808 1569
            </a>
            <Button variant="primary" onClick={scrollToContact}>Book Appointment</Button>
          </div>

          {/* Mobile Menu Button */}
          
          <button className="md:hidden relative text-amber-600 z-50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 mt-3">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-amber-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="text-white hover:text-amber-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#services" className="text-white hover:text-amber-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#gallery" className="text-white hover:text-amber-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
              <a href="#contact" className="text-white hover:text-amber-500 transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <a href="tel:+19408081569" className="flex items-center text-white hover:text-amber-500 transition-colors py-2">
                <PhoneIcon className="h-4 w-4 mr-2" />
                +1 940 808 1569
              </a>
              <Button variant="primary" onClick={scrollToContact}>Book Appointment</Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
