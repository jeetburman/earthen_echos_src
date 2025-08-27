import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ImpactSection = () => {
  const impactStats = [
    {
      icon: "Users",
      number: "2,547",
      label: "Artisans Supported",
      description: "Traditional craftspeople across 35 countries earning sustainable livelihoods through our platform"
    },
    {
      icon: "Award",
      number: "156",
      label: "Traditions Preserved",
      description: "Ancient craft techniques documented and actively practiced by our artisan community"
    },
    {
      icon: "MapPin",
      number: "52",
      label: "Communities Empowered",
      description: "Rural and indigenous communities with improved economic opportunities and cultural pride"
    },
    {
      icon: "DollarSign",
      number: "$2.8M",
      label: "Fair Trade Revenue",
      description: "Direct payments to artisans ensuring 70% of product value reaches the makers"
    },
    {
      icon: "Leaf",
      number: "15,000",
      label: "Trees Planted",
      description: "Carbon offset initiative supporting reforestation in artisan communities"
    },
    {
      icon: "GraduationCap",
      number: "1,200",
      label: "Skills Transferred",
      description: "Young apprentices learning traditional techniques through our mentorship programs"
    }
  ];

  const testimonials = [
    {
      name: "Kamala Devi",
      location: "Rajasthan, India",
      craft: "Block Printing",
      image: "https://images.pexels.com/photos/8134848/pexels-photo-8134848.jpeg?w=150&h=150&fit=crop&crop=face",
      quote: "Earthen Echoes has transformed my family\'s 200-year-old block printing tradition into a thriving business. My daughter now wants to continue our craft instead of leaving for the city."
    },
    {
      name: "Carlos Mendoza",
      location: "Oaxaca, Mexico",
      craft: "Ceramic Pottery",
      image: "https://images.pexels.com/photos/8134849/pexels-photo-8134849.jpeg?w=150&h=150&fit=crop&crop=face",
      quote: "Through this platform, our Zapotec pottery reaches collectors worldwide. We've been able to hire 12 local artisans and preserve techniques my grandfather taught me."
    },
    {
      name: "Fatima Al-Zahra",
      location: "Fez, Morocco",
      craft: "Mosaic Tilework",
      image: "https://images.pexels.com/photos/8134850/pexels-photo-8134850.jpeg?w=150&h=150&fit=crop&crop=face",
      quote: "The fair pricing and global exposure have allowed me to expand my workshop and train young women in traditional zellij techniques. Our heritage lives on."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Global Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Since 2019, we've built a thriving ecosystem that supports traditional artisans, preserves cultural heritage, and creates sustainable economic opportunities in craft communities worldwide.
          </p>
        </div>

        {/* Impact Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactStats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-warm transition-all duration-300 group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <Icon name={stat.icon} size={32} className="text-primary" />
              </div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <h3 className="font-semibold text-foreground mb-3">
                {stat.label}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Artisan Testimonials */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground text-center mb-12">
            Stories from Our Artisan Community
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-warm transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} - ${testimonial.craft} artisan`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.craft}
                    </p>
                    <p className="text-xs text-primary flex items-center">
                      <Icon name="MapPin" size={12} className="mr-1" />
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Visualization */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Growing Together
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every purchase creates a ripple effect of positive impact, from supporting individual artisans to preserving entire cultural traditions for future generations.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2 text-primary">
              <Icon name="TrendingUp" size={20} />
              <span className="font-medium">25% YoY Growth in Artisan Income</span>
            </div>
            <div className="flex items-center space-x-2 text-secondary">
              <Icon name="Heart" size={20} />
              <span className="font-medium">98% Customer Satisfaction</span>
            </div>
            <div className="flex items-center space-x-2 text-accent">
              <Icon name="Recycle" size={20} />
              <span className="font-medium">Carbon Neutral Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;