import React from 'react';
import SectionHeading from './ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-zinc-950  min-h-screen">
      <div className="container mx-auto px-4 ">
        <SectionHeading
          title="About PMC Barbershop"
          subtitle="Established in 2015, PMC Barbershop has been providing premium grooming services to the gentlemen of Denton, TX. Our skilled team combines traditional techniques with modern style to deliver exceptional results."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12  ">
          <div className="space-y-6 animate-fade-in-left ">
            <div className="bg-amber-500/10 p-6 rounded-lg border border-zinc-800 transition-transform duration-500 hover:scale-110">
              <h3 className="text-amber-500 text-xl font-medium mb-3">Established with Excellence</h3>
              <p className="text-zinc-400">
                Founded with a passion for precision and style, PMC Barbershop has evolved into a premier destination for those seeking quality cuts and grooming services. Our journey began with a simple mission: to provide exceptional barbering in a relaxed, welcoming environment.
              </p>
            </div>

            <div className="bg-zinc-900/50 animate-fade-in-left p-6 rounded-lg border border-zinc-800 transition-transform duration-500 hover:scale-110">
              <h3 className="text-amber-500 text-xl font-medium mb-3">Skilled & Dedicated Team</h3>
              <p className="text-zinc-400">
                Our team of experienced barbers brings diverse skills and specialties to serve all your grooming needs. With continuous training in the latest techniques and trends, we ensure that every client receives the highest standard of service tailored to their unique style preferences.
              </p>
            </div>


          </div>

          <div className="relative animate-fade-in-right">
            <div className="relative z-10 rounded-lg overflow-hidden h-[22rem] group">
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="PMC Barbershop Interior"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <span className="px-3 py-1 bg-amber-500 text-black text-sm font-bold rounded">SINCE 2015</span>
                </div>
              </div>
            </div>


            {/* Decorative elements */}
                  <div className="absolute top-[-80%]  bg-amber-500/10 right-[-40%] w-[300px] h-[300px] rounded-full bg-primary/5 z-10"></div>

            <div className="absolute -top-6 -right-6 w-64 h-64 border-2 border-amber-500 rounded-lg z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-500/10 rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;