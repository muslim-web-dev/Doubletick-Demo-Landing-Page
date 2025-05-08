import React from 'react';
import { Clock } from 'lucide-react';

const Promotion: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h5 className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-6">LIMITED TIME OFFER</h5>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight">Summer Sale: Up to 50% Off Select Items</h2>
              <p className="text-indigo-100 mb-8 text-lg">
                Refresh your space with our curated selection of summer essentials, now available at special prices for a limited time.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-white/10 px-4 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">14</div>
                  <div className="text-xs text-indigo-100">Days</div>
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">08</div>
                  <div className="text-xs text-indigo-100">Hours</div>
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">23</div>
                  <div className="text-xs text-indigo-100">Minutes</div>
                </div>
                <div className="bg-white/10 px-4 py-3 rounded-lg text-center">
                  <div className="text-2xl font-bold">45</div>
                  <div className="text-xs text-indigo-100">Seconds</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#" 
                  className="bg-white text-indigo-600 hover:bg-gray-100 font-medium px-8 py-3 rounded-md transition-colors duration-200 text-center"
                >
                  Shop the Sale
                </a>
                <a 
                  href="#" 
                  className="border border-white hover:bg-white/10 font-medium px-8 py-3 rounded-md transition-colors duration-200 text-center"
                >
                  View Details
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-h-4 aspect-w-3">
                <img 
                  src="https://images.pexels.com/photos/2249063/pexels-photo-2249063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Summer collection" 
                  className="rounded-lg object-cover h-full w-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white text-indigo-600 p-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-2">
                  <Clock size={20} />
                  <span className="font-bold">Limited Time</span>
                </div>
                <div className="text-sm mt-1">Offer ends August 15</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;