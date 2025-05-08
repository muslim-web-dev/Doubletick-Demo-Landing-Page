import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 mb-8">
              Contact our team of luxury real estate experts for personalized assistance with your property needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-brand-lime mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Office Location</h3>
                  <p className="text-gray-400">123 Luxury Lane, Beverly Hills, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-brand-lime mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (310) 555-0123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-brand-lime mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <p className="text-gray-400">info@luxerealty.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-6 h-6 text-brand-lime mr-4 mt-1" />
                <div>
                  <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-400">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Schedule a Consultation</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-lime"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-lime"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-lime"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-lime h-32"
                  placeholder="Tell us about your property interests"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-brand-lime hover:bg-brand-lime/90 text-black font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;