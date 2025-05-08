import React, { useState } from 'react';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real application, you would send this to a server
      setIsSubmitted(true);
      setEmail('');
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };
  
  return (
    <section className="py-16 lg:py-24 bg-indigo-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-white/10">
            <Mail size={28} className="text-white" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-indigo-100 mb-8">Subscribe to our newsletter to receive updates on new products, special offers, and exclusive discounts.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
          
          {isSubmitted && (
            <div className="mt-6 text-white bg-white/10 px-4 py-3 rounded-md inline-block">
              Thank you for subscribing!
            </div>
          )}
          
          <p className="text-indigo-200 text-sm mt-6">
            By subscribing, you agree to our Privacy Policy and consent to receive marketing emails from us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;