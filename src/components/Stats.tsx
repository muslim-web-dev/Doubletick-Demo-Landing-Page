import React from 'react';
import { Building2, Users2, Award, Gem } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    {
      icon: <Building2 className="w-6 h-6" />,
      value: "500+",
      label: "Luxury Properties",
      description: "Premium properties in our portfolio"
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      value: "1,000+",
      label: "Happy Clients",
      description: "Satisfied clients worldwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "15+",
      label: "Years Experience",
      description: "Of real estate excellence"
    },
    {
      icon: <Gem className="w-6 h-6" />,
      value: "$2B+",
      label: "Property Value",
      description: "Total transaction value"
    }
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-lime/5"></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 rounded-lg border border-white/10 backdrop-blur-lg"
            >
              <div className="w-12 h-12 mx-auto bg-brand-lime rounded-lg flex items-center justify-center text-black mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-brand-lime mb-2">{stat.label}</div>
              <p className="text-gray-400">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;