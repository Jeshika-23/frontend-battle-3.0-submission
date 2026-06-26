import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedCompanies from './components/TrustedCompanies';
import BentoFeatures from './components/BentoFeatures';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

/**
 * App - Root Layout Container.
 * Embeds all structural parts using HTML5 semantic wrappers.
 */
function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-white selection:bg-brand-accent selection:text-[#172B36] font-sans antialiased overflow-x-hidden">
      {/* Sticky Top Header */}
      <header>
        <Navbar />
      </header>

      {/* Main Structural Blocks - Integrated Skip navigation target */}
      <main id="main-content" tabIndex="-1" className="outline-none">

        {/* Banner with CTA and active flow SVG diagram */}
        <Hero />
        
        {/* Infinite scrolling logo loop */}
        <TrustedCompanies />
        
        {/* Bento features grid with mobile accordion sync */}
        <BentoFeatures />
        
        {/* Pricing calculations engine with USD, EUR, INR conversions */}
        <Pricing />
        
        {/* User quote cards */}
        <Testimonials />
        
        {/* Conversion banner */}
        <CTA />
      </main>

      {/* Footer Map Links & Status Tracker */}
      <Footer />
    </div>
  );
}

export default App;
