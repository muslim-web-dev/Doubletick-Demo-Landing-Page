import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import { navLinks } from '../data/navLinks';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Demo purpose: Simulate adding item to cart after 3 seconds
    const timer = setTimeout(() => {
      setItemCount(3);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="font-bold text-xl md:text-2xl text-indigo-600">ARTIS</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={link.href} 
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-800 hover:text-indigo-600'
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Cart and Search */}
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-800 hover:text-indigo-600 transition-colors duration-200">
            <Search size={20} />
          </button>
          <div className="relative">
            <button className="text-gray-800 hover:text-indigo-600 transition-colors duration-200">
              <ShoppingCart size={20} />
            </button>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 pt-20 px-4">
          <div className="flex flex-col space-y-6 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.href} 
                className="font-medium text-lg text-gray-800 hover:text-indigo-600 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <div className="flex items-center space-x-6 mt-4">
              <button className="text-gray-800 hover:text-indigo-600 transition-colors duration-200">
                <Search size={24} />
              </button>
              <div className="relative">
                <button className="text-gray-800 hover:text-indigo-600 transition-colors duration-200">
                  <ShoppingCart size={24} />
                </button>
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {itemCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;