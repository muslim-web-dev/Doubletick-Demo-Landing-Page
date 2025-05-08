import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import Services from './components/Services';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturedListings />
        <Services />
        <Stats />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;