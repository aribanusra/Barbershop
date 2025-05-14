import React, { useState } from 'react';
import Button from './ui/Button';
import { MapPinIcon, PhoneIcon, ClockIcon } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Thank you for your appointment request. We will contact you shortly to confirm.');
    setFormData({
      name: '',
      phone: '',
      service: '',
      date: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 relative">
      {/* Background element */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-zinc-900/30 clip-path-polygon-[0_0,100%_0,100%_100%,15%_100%] hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-amber-500 uppercase tracking-wider font-medium mb-2">Book Your Appointment</h5>
          <h2 className="text-4xl font-bold text-white">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
            <div className="flex flex-col space-y-8">
              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-full mr-4">
                  <MapPinIcon className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Address</h3>
                  <p className="text-zinc-400">518 Acme St unit 101, Denton, TX 76205, United States</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-full mr-4">
                  <PhoneIcon className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Phone</h3>
                  <p className="text-zinc-400">+1 940 808 1569</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-800 p-3 rounded-full mr-4">
                  <ClockIcon className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-white font-medium mb-1">Business Hours</h3>
                  <p className="text-zinc-400">Mon-Fri: 9:00 AM - 7:00 PM</p>
                  <p className="text-zinc-400">Sat: 9:00 AM - 5:00 PM</p>
                  <p className="text-zinc-400">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border-zinc-700 bg-zinc-800/50 text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border-zinc-700 bg-zinc-800/50 text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="service" className="block text-white mb-2">Service Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-md border-zinc-700 bg-zinc-800/50 text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                >
                  <option value="">Select an option</option>
                  <option value="haircut">Classic Haircut</option>
                  <option value="beard">Beard Trim</option>
                  <option value="combo">Haircut & Beard Combo</option>
                  <option value="shave">Hot Towel Shave</option>
                  <option value="package">Premium Package</option>
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="date" className="block text-white mb-2">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full rounded-md border-zinc-700 bg-zinc-800/50 text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-md border-zinc-700 bg-zinc-800/50 text-white py-2 px-3 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  placeholder="Tell us about your style preferences or any questions you have"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" fullWidth>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;