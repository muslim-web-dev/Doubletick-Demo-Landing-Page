import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  return (
    <section id="featured-products" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-gray-600 max-w-xl">Our most popular items selected just for you.</p>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 border border-gray-300 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200">
              <ChevronLeft size={20} />
            </button>
            <button className="p-2 border border-gray-300 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition-colors duration-200">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-md hover:bg-indigo-600 hover:text-white transition-colors duration-300">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;