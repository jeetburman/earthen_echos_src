import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MissionSection = () => {
  const values = [
    {
      icon: "Heart",
      title: "Authentic Craftsmanship",
      description: "Every piece tells a story of generations-old techniques passed down through families, preserving cultural heritage in each handcrafted detail."
    },
    {
      icon: "Users",
      title: "Artisan Empowerment",
      description: "We provide fair compensation, global market access, and sustainable livelihoods for traditional craftspeople worldwide."
    },
    {
      icon: "Leaf",
      title: "Sustainable Practices",
      description: "Supporting eco-friendly materials, traditional techniques, and responsible production methods that honor both craft and environment."
    },
    {
      icon: "Globe",
      title: "Cultural Preservation",
      description: "Acting as guardians of disappearing traditions, ensuring ancient crafts continue to thrive in the modern world."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Mission & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Founded in 2019 with a vision to create meaningful connections between traditional artisans and conscious consumers, Earthen Echoes has grown into a trusted platform for authentic, handcrafted treasures.
          </p>
        </div>

        {/* Mission Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground">
              The Story Behind Our Purpose
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Earthen Echoes was born from a simple yet profound realization: in our increasingly automated world, the irreplaceable value of human craftsmanship was being lost. We witnessed talented artisans struggling to reach global markets while consumers yearned for authentic, meaningful products with real stories.
              </p>
              <p>
                Our founders, Sarah Chen and Rajesh Patel, traveled extensively through craft communities across Asia, Africa, and Latin America. They saw firsthand how traditional techniques were disappearing as younger generations moved to cities, leaving behind centuries of cultural knowledge.
              </p>
              <p>
                Today, we serve as more than just a marketplace—we're cultural curators, artisan advocates, and guardians of living heritage. Every purchase on our platform is an investment in cultural continuity and sustainable livelihoods.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-warm">
              <Image
                src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?w=600&h=400&fit=crop"
                alt="Artisan hands carefully shaping clay on pottery wheel"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground rounded-full w-20 h-20 flex items-center justify-center font-heading font-bold text-lg">
              2019
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-4 p-6 rounded-xl bg-card border border-border hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name={value.icon} size={32} className="text-primary" />
              </div>
              <h4 className="font-heading text-xl font-semibold text-foreground">
                {value.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;