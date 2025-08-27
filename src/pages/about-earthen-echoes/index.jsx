import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import MissionSection from './components/MissionSection';
import TeamSection from './components/TeamSection';
import ImpactSection from './components/ImpactSection';
import PromiseSection from './components/PromiseSection';
import PartnershipsSection from './components/PartnershipsSection';
import VisionSection from './components/VisionSection';
import ContactSection from './components/ContactSection';

const AboutEarthenEchoes = () => {
  useEffect(() => {
    // Set page title
    document.title = 'About Us - Earthen Echoes | Cultural Bridge & Artisan Marketplace';
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section - Brand story introduction */}
        <HeroSection />
        
        {/* Mission & Values - Our purpose and founding story */}
        <MissionSection />
        
        {/* Team Section - Key personnel and their backgrounds */}
        <TeamSection />
        
        {/* Impact Section - Real achievements and artisan testimonials */}
        <ImpactSection />
        
        {/* Promise Section - Quality guarantees and commitments */}
        <PromiseSection />
        
        {/* Partnerships Section - Cultural institutions and media recognition */}
        <PartnershipsSection />
        
        {/* Vision Section - Future goals and strategic initiatives */}
        <VisionSection />
        
        {/* Contact Section - Multiple contact channels and office locations */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">EE</span>
              </div>
              <h3 className="font-heading text-xl font-semibold">
                Earthen Echoes
              </h3>
            </div>
            <p className="text-background/80 mb-4">
              Preserving cultural heritage through conscious commerce
            </p>
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Earthen Echoes. All rights reserved. | 
              Crafted with care for cultural preservation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutEarthenEchoes;