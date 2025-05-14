
import Button from './ui/Button';
import { MapPinIcon, PhoneIcon,  } from 'lucide-react';
import Map from './ui/Map';




const Viewshop: React.FC = () => {
 
  return (
    <section id="contact" className="py-20 bg-zinc-950 relative min-h-screen">
      {/* Background element */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-zinc-900/30 clip-path-polygon-[0_0,100%_0,100%_100%,15%_100%] hidden lg:block"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h5 className="text-amber-500 uppercase tracking-wider font-medium mb-2">Visit Our Shop</h5>
          <h2 className="text-4xl font-bold text-white mb-6">Our Location</h2>
                    <h5 className="text-gray-500 uppercase tracking-wider font-medium mb-2">Conviniently located in Denton,TX :</h5>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
          hello
         <Map/>
          </div>

             <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
           <h5 className="text-white  uppercase tracking-wider font-medium mb-9">Contact Information</h5>
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
              <div className='flex gap-8 w-[70%]'>      
                        <Button type="submit" variant="primary" className='text-[15px] text-white' fullWidth>Get Directions</Button>
             <Button type="submit" variant="primary" className='bg-zinc-800   text-black border' fullWidth><div className="bg-zinc-800 p-3 rounded-full mr-4">
                  <PhoneIcon className="h-4 w-4 text-black" />
                </div>Call Us</Button>

            </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viewshop