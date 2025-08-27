import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CulturalCalendar = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const culturalEvents = [
    {
      id: 1,
      name: "Diwali Festival Collection",
      date: "October 15 - November 5, 2024",
      status: "upcoming",
      image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg",
      description: `Celebrate the Festival of Lights with our curated collection of traditional diyas,\nrangoli stencils, and decorative pieces crafted by artisans across India.`,
      featured_crafts: ["Clay Diyas", "Brass Lamps", "Rangoli Stencils", "Decorative Torans"],
      artisan_count: 45,
      cultural_significance: `Diwali represents the victory of light over darkness.\nTraditional crafts play a central role in home decoration and spiritual practices.`,
      discount: "20% off"
    },
    {
      id: 2,
      name: "Winter Warmth Textiles",
      date: "November 10 - December 31, 2024",
      status: "upcoming",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
      description: `Embrace the winter season with handwoven shawls, blankets, and scarves\ncrafted using traditional techniques from the Himalayan regions.`,
      featured_crafts: ["Pashmina Shawls", "Wool Blankets", "Knitted Scarves", "Traditional Caps"],
      artisan_count: 28,
      cultural_significance: `Winter textiles showcase the mastery of mountain communities\nin creating warmth through natural fibers and ancient techniques.`,
      discount: "15% off"
    },
    {
      id: 3,
      name: "Harvest Festival Pottery",
      date: "September 20 - October 10, 2024",
      status: "active",
      image: "https://images.pixabay.com/photo/2017/08/01/11/48/pottery-2564975_1280.jpg",
      description: `Honor the harvest season with traditional pottery pieces used in\nfestival celebrations and grain storage across rural India.`,
      featured_crafts: ["Storage Jars", "Ceremonial Bowls", "Water Pots", "Decorative Plates"],
      artisan_count: 32,
      cultural_significance: `Harvest festivals celebrate agricultural abundance.\nPottery plays a vital role in food storage and ceremonial offerings.`,
      discount: "25% off"
    },
    {
      id: 4,
      name: "Monsoon Metal Crafts",
      date: "June 15 - August 30, 2024",
      status: "completed",
      image: "https://images.pixabay.com/photo/2016/11/29/12/30/blacksmith-1869302_1280.jpg",
      description: `Discover the beauty of traditional metalwork perfect for monsoon season\nhome decoration and spiritual practices.`,
      featured_crafts: ["Rain Chains", "Temple Bells", "Wind Chimes", "Garden Sculptures"],
      artisan_count: 18,
      cultural_significance: `Monsoon season brings renewal and spiritual cleansing.\nMetal crafts create harmonious sounds that celebrate nature's rhythm.`,
      discount: "Archive Collection"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-secondary text-secondary-foreground';
      case 'upcoming': return 'bg-accent text-accent-foreground';
      case 'completed': return 'bg-muted text-muted-foreground';
      default: return 'bg-primary text-primary-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return 'Play';
      case 'upcoming': return 'Calendar';
      case 'completed': return 'Check';
      default: return 'Clock';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Calendar" size={32} className="text-secondary" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Cultural Calendar
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Celebrate traditions throughout the year with seasonal collections that honor cultural heritage and festive occasions
          </p>
          
          {/* Current Month Indicator */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-6 py-3 rounded-full">
            <Icon name="CalendarDays" size={20} className="text-primary" />
            <span className="font-medium text-primary">{currentMonth} {currentYear}</span>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {culturalEvents.map((event) => (
            <div
              key={event.id}
              className={`group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 transform hover:-translate-y-1 ${
                event.status === 'active' ? 'ring-2 ring-secondary/30' : ''
              }`}
              onMouseEnter={() => setSelectedEvent(event.id)}
              onMouseLeave={() => setSelectedEvent(null)}
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 ${getStatusColor(event.status)} px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1`}>
                  <Icon name={getStatusIcon(event.status)} size={14} />
                  <span className="capitalize">{event.status}</span>
                </div>

                {/* Discount Badge */}
                {event.discount && event.status !== 'completed' && (
                  <div className="absolute top-4 right-4 bg-error text-error-foreground px-3 py-1 rounded-full text-sm font-bold">
                    {event.discount}
                  </div>
                )}

                {/* Cultural Context Overlay */}
                <div className={`cultural-overlay ${selectedEvent === event.id ? 'active' : ''}`}>
                  <div className="space-y-3">
                    <h4 className="font-heading text-lg font-semibold">Cultural Significance</h4>
                    <p className="text-sm leading-relaxed whitespace-pre-line">
                      {event.cultural_significance}
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={12} />
                        <span>{event.artisan_count} artisans</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Package" size={12} />
                        <span>{event.featured_crafts.length} craft types</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                    {event.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                    <Icon name="Calendar" size={16} />
                    <span>{event.date}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>

                {/* Featured Crafts */}
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm">Featured Crafts:</h4>
                  <div className="flex flex-wrap gap-2">
                    {event.featured_crafts.map((craft, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs"
                      >
                        {craft}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Users" size={14} />
                      <span>{event.artisan_count} artisans</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Package" size={14} />
                      <span>{event.featured_crafts.length} types</span>
                    </div>
                  </div>
                  
                  <Link to="/product-discovery">
                    <Button 
                      variant={event.status === 'active' ? 'default' : 'outline'} 
                      className="text-sm"
                      disabled={event.status === 'completed'}
                    >
                      {event.status === 'completed' ? 'View Archive' : 'Explore Collection'}
                      <Icon name="ArrowRight" size={14} className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Calendar */}
        <div className="text-center">
          <Link to="/product-discovery">
            <Button variant="outline" className="px-8 py-3">
              <Icon name="CalendarDays" size={20} />
              <span className="ml-2">View Full Cultural Calendar</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CulturalCalendar;