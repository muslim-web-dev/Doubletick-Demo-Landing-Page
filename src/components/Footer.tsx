import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">ARTIS</h3>
            <p className="mb-6">
              Curating modern essentials for those who appreciate quality craftsmanship and timeless style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-200">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Home Decor</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Kitchen</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Sale</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Information</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>123 Design Street, San Francisco, CA 94107</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0" />
                <span>support@artis.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 ARTIS. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex items-center">
            <img src="https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Payment methods" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;