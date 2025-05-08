import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    "Sustainably sourced materials",
    "Ethically manufactured products",
    "Free shipping on orders over $100",
    "Hassle-free 30-day returns",
    "Dedicated customer support",
    "Secure payment processing"
  ];

  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4480517/pexels-photo-4480517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="About our store" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-indigo-200 rounded-lg -z-10 transform -translate-x-6 translate-y-6"></div>
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden lg:block">
              <p className="text-gray-700 font-medium">
                "Our mission is to provide beautifully crafted products that enhance your everyday life."
              </p>
              <div className="mt-4 flex items-center">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Founder" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-gray-900 font-medium">Emma Parker</p>
                  <p className="text-gray-500 text-sm">Founder & CEO</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2020, ARTIS was born from a passion for beautifully designed, functional products that enhance everyday life. We believe that the objects we surround ourselves with should not only be practical but also bring joy through thoughtful design and quality craftsmanship.
            </p>
            <p className="text-gray-600 mb-8">
              Our curated collection features items that reflect our commitment to sustainability, ethical manufacturing, and timeless design. Each product is carefully selected to ensure it meets our high standards of quality and aesthetic excellence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle2 className="text-emerald-500 mr-3" size={20} />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <a 
              href="#" 
              className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;