import React from 'react';
import Button from './ui/Button';
import { ScissorsIcon, TrendingUpIcon, PackageIcon } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-amber-500/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
       
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
  <h1 className="text-5xl text-white font-bold mb-2">Our Service Prices</h1>
  <h2 className="text-lg text-amber-500 hover:text-amber-600 transition">
Choose from our range of professional barbering services.  </h2>
</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Classic Services */}
          <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:border-amber-500/50">
            <div className="p-8 border-b border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Classic Services</h3>
                <ScissorsIcon className="h-8 w-8 text-amber-500" />
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-amber-500 text-4xl font-bold">$25</span>
                <span className="text-zinc-400 ml-2">starting from</span>
              </div>
              <p className="text-zinc-400">Essential haircut and grooming services with professional styling.</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Classic Haircut</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Beard Trim</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Kids Haircut (12 & under)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Senior Haircut (65+)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Head Shave</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Line-Up & Edge Refinement</span>
                </li>
              </ul>
              <Button variant="outline" fullWidth>Book Classic Service</Button>
            </div>
          </div>

          {/* Premium Services */}
          <div className="bg-zinc-900/80 rounded-lg border-2 border-amber-500 overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 relative">
            <div className="absolute top-0 right-0">
              <span className="inline-block bg-amber-500 text-black text-xs font-bold px-3 py-1 uppercase">Most Popular</span>
            </div>
            <div className="p-8 border-b border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Premium Services</h3>
                <TrendingUpIcon className="h-8 w-8 text-amber-500" />
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-amber-500 text-4xl font-bold">$35</span>
                <span className="text-zinc-400 ml-2">starting from</span>
              </div>
              <p className="text-zinc-400">Enhanced grooming services with premium techniques and products.</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Haircut & Beard Combo</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Hot Towel Shave</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Hair Color</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Fade & Design</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Face & Scalp Treatment</span>
                </li>
              </ul>
              <Button variant="primary" fullWidth>Book Premium Service</Button>
            </div>
          </div>

          {/* Packages */}
          <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:border-amber-500/50">
            <div className="p-8 border-b border-zinc-800">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-white">Packages</h3>
                <PackageIcon className="h-8 w-8 text-amber-500" />
              </div>
              <div className="flex items-baseline mb-6">
                <span className="text-amber-500 text-4xl font-bold">$50</span>
                <span className="text-zinc-400 ml-2">starting from</span>
              </div>
              <p className="text-zinc-400">Comprehensive grooming packages for complete transformations.</p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">The Deluxe Package</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Father & Son Special</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Groom's Package</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Executive Package</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-zinc-300">Loyalty Program</span>
                </li>
              </ul>
              <Button variant="outline" fullWidth>Book Package</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;