import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TrendingCrafts from './components/TrendingCrafts';
import FeaturedArtisan from './components/FeaturedArtisan';
import CulturalCalendar from './components/CulturalCalendar';
import SustainabilityImpact from './components/SustainabilityImpact';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <TrendingCrafts />
        <FeaturedArtisan />
        <CulturalCalendar />
        <SustainabilityImpact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Homepage;