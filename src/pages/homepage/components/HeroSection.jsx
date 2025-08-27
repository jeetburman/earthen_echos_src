import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const heroSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg",
      title: "Master Potter Rajesh Kumar",
      subtitle: "Shaping clay into timeless beauty",
      description: "Watch as generations of pottery wisdom flow through skilled hands",
      craft: "Blue Pottery"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      title: "Weaver Priya Devi",
      subtitle: "Threading stories into fabric",
      description: "Each thread carries the heritage of traditional Indian weaving",
      craft: "Handloom Textiles"
    },
    {
      id: 3,
      image: "https://images.pixabay.com/photo/2016/11/29/12/30/blacksmith-1869302_1280.jpg",
      title: "Metalsmith Arjun Singh",
      subtitle: "Forging metal into art",
      description: "Ancient techniques meet contemporary design in every piece",
      craft: "Brass Jewelry"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to product discovery with search query
      window.location.href = `/product-discovery?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              {/* Logo & Tagline */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" className="text-white">
                      <circle cx="16" cy="16" r="14" fill="currentColor" opacity="0.9"/>
                      <path d="M8 16c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" fill="var(--color-accent)"/>
                      <circle cx="16" cy="16" r="4" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <h1 className="font-heading text-4xl lg:text-5xl font-bold text-shadow-warm">
                      Earthen Echoes
                    </h1>
                    <p className="text-accent text-lg font-medium">Living Heritage</p>
                  </div>
                </div>
                
                <p className="text-2xl lg:text-3xl font-heading italic text-accent">
                  Every piece tells a story
                </p>
              </div>

              {/* Current Slide Info */}
              <div className="space-y-4 animate-fade-up">
                <h2 className="text-3xl lg:text-4xl font-heading font-semibold">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-xl text-gray-200">
                  {heroSlides[currentSlide].subtitle}
                </p>
                <p className="text-lg text-gray-300 max-w-md">
                  {heroSlides[currentSlide].description}
                </p>
                
                <div className="flex items-center space-x-2 text-accent">
                  <Icon name="Sparkles" size={20} />
                  <span className="font-medium">{heroSlides[currentSlide].craft}</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/product-discovery">
                  <Button variant="default" className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                    <Icon name="Search" size={20} />
                    <span className="ml-2">Discover Crafts</span>
                  </Button>
                </Link>
                
                <Link to="/about-earthen-echoes">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3">
                    <Icon name="Heart" size={20} />
                    <span className="ml-2">Our Story</span>
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Search */}
            <div className="lg:justify-self-end w-full max-w-md">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-warm">
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Find Your Perfect Craft
                </h3>
                
                <form onSubmit={handleSearch} className="space-y-4">
                  <div className="relative">
                    <Icon 
                      name="Search" 
                      size={20} 
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
                    />
                    <input
                      type="text"
                      placeholder="Try 'blue pottery for housewarming'"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border border-border rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground placeholder-muted-foreground"
                    />
                  </div>
                  
                  <Button type="submit" fullWidth className="py-4">
                    <Icon name="Sparkles" size={20} />
                    <span className="ml-2">Explore Crafts</span>
                  </Button>
                </form>

                {/* Quick Search Suggestions */}
                <div className="mt-6 space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">Popular Searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Pottery", "Textiles", "Jewelry", "Home Decor"].map((tag) => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-accent scale-125' :'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-20"
      >
        <Icon name="ChevronLeft" size={24} />
      </button>
      
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-20"
      >
        <Icon name="ChevronRight" size={24} />
      </button>
    </section>
  );
};

export default HeroSection;