import React from 'react';
import { Product } from '../types';
import { ShoppingBag, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-64 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 px-3 py-1.5 mt-4 ml-4">
          {product.isNew && (
            <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded">New</span>
          )}
          {product.isBestSeller && (
            <span className="inline-block bg-amber-500 text-white text-xs px-2 py-1 rounded ml-2">Best Seller</span>
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="flex gap-2">
            <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200">
              <ShoppingBag size={20} />
            </button>
            <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200">
              <Heart size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-base font-medium text-gray-900">{product.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        </div>
        <p className="text-base font-medium text-gray-900">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;