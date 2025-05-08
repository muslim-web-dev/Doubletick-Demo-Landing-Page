import React from 'react';
import { Home, Search, Key, TrendingUp, Shield, HeartHandshake } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Property Search",
      description: "Access our curated database of luxury properties matching your specific requirements."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Investment Advisory",
      description: "Expert guidance on property investments and market analysis for optimal returns."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Property Management",
      description: "Comprehensive management services for your investment properties."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Private Sales",
      description: "Exclusive access to off-market properties and private listings."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property Valuation",
      description: "Professional assessment of property value based on market trends."
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Negotiation",
      description: "Expert negotiation to ensure you get the best possible deal."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive real estate services tailored to meet your luxury property needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-6 bg-white/5 rounded-lg border border-white/10 hover:border-brand-lime transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-lime rounded-lg flex items-center justify-center text-black mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;