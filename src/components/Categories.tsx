import React from 'react';
import { categories } from '../data/products';

const Categories: React.FC = () => {
  return (
    <section id="categories" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our collections curated by category, making it easy to find exactly what you're looking for.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="relative group overflow-hidden rounded-lg">
              <div className="aspect-h-1 aspect-w-1 w-full">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
                  <a 
                    href="#" 
                    className="inline-block text-white text-sm border-b border-white pb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    Explore Collection
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;