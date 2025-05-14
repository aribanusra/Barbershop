import React, { useState } from 'react';
import { faqs } from '../data/faq';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filterFaqs = (category: string) => {
    return category === 'All' 
      ? faqs 
      : faqs.filter(faq => faq.category === category);
  };

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
  <h1 className="text-5xl text-white font-bold mb-2">Frequently Asked Questions</h1>
  <h2 className="text-lg text-amber-500 hover:text-amber-600 transition">
    Find answers to common questions about our services, booking, and policies.
  </h2>
</div>
 
       

     <div className="text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mb-8">
  {["All", "general", "services", "pricing", "support"].map((cat) => (
    <button
      key={cat}
      onClick={() => setActiveCategory(cat)}
      className={`px-4 py-2 mx-2 rounded transition-colors duration-200
        ${activeCategory === cat   ? "bg-amber-500 text-white"    : "bg-gray-800 text-white hover:bg-amber-500"}`}   >
      {cat.charAt(0).toUpperCase() + cat.slice(1)}
    </button>
  ))}
</div>


        <div className="max-w-3xl mx-auto mt-12">
          {filterFaqs(activeCategory).map((faq, index) => (
            <div 
              key={faq.id} 
              className="mb-4 border border-zinc-800 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left bg-zinc-900/80 hover:bg-zinc-800 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUpIcon className="h-5 w-5 text-amber-500" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5 text-amber-500" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 p-5 bg-zinc-900/50' : 'max-h-0'
                }`}
              >
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
