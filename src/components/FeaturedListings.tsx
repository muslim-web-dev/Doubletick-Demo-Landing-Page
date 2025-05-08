import React from 'react';
import { MapPin, Bed, Bath, Square } from 'lucide-react';

const FeaturedListings: React.FC = () => {
  const listings = [
    {
      id: 1,
      title: "Modern Penthouse",
      location: "Downtown Manhattan",
      price: "5,200,000",
      image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      type: "Penthouse"
    },
    {
      id: 2,
      title: "Luxury Villa",
      location: "Beverly Hills",
      price: "8,900,000",
      image: "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      beds: 6,
      baths: 7,
      sqft: 6500,
      type: "Villa"
    },
    {
      id: 3,
      title: "Waterfront Estate",
      location: "Miami Beach",
      price: "12,500,000",
      image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      beds: 8,
      baths: 9.5,
      sqft: 8200,
      type: "Estate"
    }
  ];

  return (
    <section id="featured-listings" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Featured Properties</h2>
            <p className="text-gray-400 max-w-xl">Discover our handpicked selection of luxury properties in prime locations.</p>
          </div>
          <a href="#" className="hidden md:inline-flex items-center text-brand-lime hover:text-white transition-colors duration-200">
            View All Properties
            <span className="ml-2">→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((listing) => (
            <div key={listing.id} className="group bg-white/5 rounded-lg overflow-hidden border border-white/10 hover:border-brand-lime transition-colors duration-300">
              <div className="relative">
                <img 
                  src={listing.image} 
                  alt={listing.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-brand-lime text-black text-sm font-medium px-3 py-1 rounded">
                  {listing.type}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <MapPin size={16} className="mr-1" />
                  {listing.location}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{listing.title}</h3>
                <p className="text-brand-lime text-2xl font-bold mb-4">${listing.price}</p>
                
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-white/10">
                  <div className="flex items-center text-gray-400">
                    <Bed size={18} className="mr-2" />
                    <span>{listing.beds} beds</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Bath size={18} className="mr-2" />
                    <span>{listing.baths} baths</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Square size={18} className="mr-2" />
                    <span>{listing.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="inline-flex items-center text-brand-lime hover:text-white transition-colors duration-200">
            View All Properties
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;