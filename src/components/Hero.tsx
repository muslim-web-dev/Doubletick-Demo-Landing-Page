import React from 'react';
import { ArrowRight, MapPin, Home, Banknote } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-[#BFFF00] filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-[#BFFF00] filter blur-3xl opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="max-w-xl">
            <h5 className="text-[#BFFF00] font-semibold mb-4 tracking-wide">LUXURY REAL ESTATE</h5>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
              Find Your Dream Property
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Discover exclusive properties in prime locations. Our expert team helps you navigate the luxury real estate market with confidence.
            </p>
            
            {/* Search Form */}
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Enter location"
                      className="w-full bg-white/5 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#BFFF00]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Property Type</label>
                  <div className="relative">
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select className="w-full bg-white/5 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white appearance-none focus:outline-none focus:border-[#BFFF00]">
                      <option>Any Type</option>
                      <option>House</option>
                      <option>Apartment</option>
                      <option>Villa</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-300 mb-2 block">Price Range</label>
                  <div className="relative">
                    <Banknote className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <select className="w-full bg-white/5 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-white appearance-none focus:outline-none focus:border-[#BFFF00]">
                      <option>Any Price</option>
                      <option>$100k - $500k</option>
                      <option>$500k - $1M</option>
                      <option>$1M+</option>
                    </select>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 bg-[#BFFF00] hover:bg-[#a8e600] text-black font-semibold py-3 rounded-md transition-colors duration-200">
                Search Properties
              </button>
            </div>
            
            <div className="flex items-center gap-8">
              <div>
                <p className="text-2xl font-bold text-white">2,500+</p>
                <p className="text-gray-400">Properties</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">1,800+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">15+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Luxury property showcase" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-black/90 p-6 rounded-lg shadow-xl max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#BFFF00] text-black text-xs px-2 py-1 rounded">Featured</span>
                <span className="text-white font-semibold">Beverly Hills Villa</span>
              </div>
              <p className="text-gray-400 text-sm">Exclusive 5-bedroom villa with panoramic views. Starting at $4.5M</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;