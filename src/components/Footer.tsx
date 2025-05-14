import React from 'react';
import { InstagramIcon, FacebookIcon, TwitterIcon, MapPinIcon, PhoneIcon } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      {/* CTA Section */}
      <div className="bg-amber-500 py-16 h-96 relative overflow-hidden">
        {/* Background circles */}


        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ready for a Fresh Cut?</h2>
          <p className="text-black/80 max-w-2xl mx-auto mb-8">
            Visit PMC Barbershop for premium men's grooming services. Our expert barbers are ready to give you a clean, precise cut and a relaxing barbershop experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="secondary">Book an Appointment</Button>
            <Button variant="secondary">View Our Services</Button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo & Info */}
            <div>
              <a href="#" className="flex items-center">
                <img src="/images/logo.webp" alt="logo" className='w-12 h-10' />
              </a>
              <p className="text-zinc-400 mb-4">Classic cuts with modern style</p>
              <div className="flex space-x-4">
                <a href="#" className="bg-zinc-900 hover:bg-amber-500 text-white hover:text-black p-2 rounded-full transition-colors">
                  <InstagramIcon size={18} />
                </a>
                <a href="#" className="bg-zinc-900 hover:bg-amber-500 text-white hover:text-black p-2 rounded-full transition-colors">
                  <FacebookIcon size={18} />
                </a>
                <a href="#" className="bg-zinc-900 hover:bg-amber-500 text-white hover:text-black p-2 rounded-full transition-colors">
                  <TwitterIcon size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-zinc-400 hover:text-amber-500 transition-colors">Home</a></li>
                <li><a href="#about" className="text-zinc-400 hover:text-amber-500 transition-colors">About</a></li>
                <li><a href="#services" className="text-zinc-400 hover:text-amber-500 transition-colors">Services</a></li>
                <li><a href="#gallery" className="text-zinc-400 hover:text-amber-500 transition-colors">Gallery</a></li>
                <li><a href="#contact" className="text-zinc-400 hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <address className="not-italic text-zinc-400">
                <p className="mb-2 flex items-start">
                  <MapPinIcon className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                  518 Acme St unit 101, Denton, TX 76205, United States
                </p>
                <p className="mb-2 flex items-center">
                  <PhoneIcon className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                  +1 940 808 1569
                </p>
              </address>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-zinc-400 mb-4">Subscribe to our newsletter to receive updates and news.</p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md border-zinc-700 bg-zinc-900 text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
                <Button variant="primary" fullWidth>Subscribe</Button>
              </form>
            </div>
          </div>
  <hr className='mt-5' />
          <div className="flex flex-col pt-8 md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© 2023 PMC Barbershop. All rights reserved.  </p>
          <div className="flex gap-6"><a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#home">Home</a><a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#about">About</a><a className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200" href="#services">Services</a></div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;