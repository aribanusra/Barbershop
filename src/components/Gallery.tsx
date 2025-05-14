import React from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Barber cutting client's hair"
    },
    {
      src: "https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Barbershop interior"
    },
    {
      src: "https://images.pexels.com/photos/1805600/pexels-photo-1805600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Professional haircut result"
    },
    {
      src: "https://images.pexels.com/photos/8869243/pexels-photo-8869243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Barber tools and equipment"
    },
    {
      src: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Razor shave service"
    },
    {
      src: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Styled haircut result"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4">
     
          <div className="max-w-4xl mx-auto text-center mb-12 px-4">
  <h1 className="text-5xl text-white font-bold mb-2">Our Barbershop Gallery</h1>
  <h2 className="text-lg text-amber-500 hover:text-amber-600 transition">
Take a look at our shop, haircuts and the quality cuts we deliver to our clients. </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
  {galleryImages.map((image, index) => (
    <div 
      key={index} 
      className="group relative overflow-hidden rounded-lg aspect-[4/2]"
    >
      <img 
        src={image.src} 
        alt={image.alt} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center p-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
          <span className="inline-block px-4 py-1 bg-amber-500 text-black font-medium rounded-full mb-2">
            View
          </span>
        </div>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default Gallery;