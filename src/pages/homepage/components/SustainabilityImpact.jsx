import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SustainabilityImpact = () => {
  const [animatedStats, setAnimatedStats] = useState({
    artisans: 0,
    traditions: 0,
    communities: 0,
    trees: 0
  });

  const finalStats = {
    artisans: 1247,
    traditions: 89,
    communities: 156,
    trees: 3420
  };

  const impactMetrics = [
    {
      id: 1,
      icon: "Users",
      label: "Artisans Supported",
      value: finalStats.artisans,
      description: "Master craftspeople and their families earning sustainable livelihoods",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: 2,
      icon: "Award",
      label: "Traditions Preserved",
      value: finalStats.traditions,
      description: "Ancient craft techniques documented and passed to new generations",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      id: 3,
      icon: "Home",
      label: "Communities Empowered",
      value: finalStats.communities,
      description: "Rural and tribal communities with improved economic opportunities",
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      id: 4,
      icon: "TreePine",
      label: "Trees Planted",
      value: finalStats.trees,
      description: "Environmental restoration through our carbon-neutral shipping program",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    }
  ];

  const sustainabilityInitiatives = [
    {
      id: 1,
      title: "Fair Trade Guarantee",
      description: "Every artisan receives 60% of the product price directly",
      icon: "Handshake",
      impact: "Direct economic empowerment"
    },
    {
      id: 2,
      title: "Carbon Neutral Shipping",
      description: "All deliveries offset through reforestation projects",
      icon: "Truck",
      impact: "Environmental protection"
    },
    {
      id: 3,
      title: "Skill Development Programs",
      description: "Training workshops for traditional and digital marketing skills",
      icon: "GraduationCap",
      impact: "Knowledge preservation"
    },
    {
      id: 4,
      title: "Women Empowerment",
      description: "75% of our artisan partners are women-led cooperatives",
      icon: "Heart",
      impact: "Social transformation"
    }
  ];

  useEffect(() => {
    const animateStats = () => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          artisans: Math.floor(finalStats.artisans * progress),
          traditions: Math.floor(finalStats.traditions * progress),
          communities: Math.floor(finalStats.communities * progress),
          trees: Math.floor(finalStats.trees * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(finalStats);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    };

    // Start animation after component mounts
    const timeout = setTimeout(animateStats, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Leaf" size={32} className="text-secondary" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Our Impact
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every purchase creates a ripple effect of positive change, supporting artisans, preserving traditions, and protecting our planet
          </p>
        </div>

        {/* Real-time Impact Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactMetrics.map((metric) => (
            <div
              key={metric.id}
              className={`${metric.bgColor} rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-warm`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${metric.color} mb-4`}>
                <Icon name={metric.icon} size={32} />
              </div>
              
              <div className={`text-3xl lg:text-4xl font-bold ${metric.color} mb-2`}>
                {animatedStats[Object.keys(finalStats)[metric.id - 1]]?.toLocaleString()}
                {metric.id === 4 && '+'}
              </div>
              
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {metric.label}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Initiatives List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                Sustainability Initiatives
              </h3>
              <p className="text-lg text-muted-foreground">
                Our commitment goes beyond commerce to create lasting positive impact on communities and the environment.
              </p>
            </div>

            <div className="space-y-6">
              {sustainabilityInitiatives.map((initiative) => (
                <div
                  key={initiative.id}
                  className="flex items-start space-x-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-warm transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name={initiative.icon} size={24} className="text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-heading font-semibold text-foreground mb-2">
                      {initiative.title}
                    </h4>
                    <p className="text-muted-foreground mb-2">
                      {initiative.description}
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Target" size={14} className="text-accent" />
                      <span className="text-accent font-medium">{initiative.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Impact Visualization */}
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 shadow-warm">
              <h4 className="text-2xl font-heading font-bold text-foreground mb-6 text-center">
                Monthly Impact Growth
              </h4>
              
              {/* Simple Progress Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Artisan Network</span>
                    <span className="text-sm text-primary font-semibold">+12% this month</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-primary h-3 rounded-full transition-all duration-1000" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Community Programs</span>
                    <span className="text-sm text-secondary font-semibold">+8% this month</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-secondary h-3 rounded-full transition-all duration-1000" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">Environmental Projects</span>
                    <span className="text-sm text-accent font-semibold">+15% this month</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div className="bg-accent h-3 rounded-full transition-all duration-1000" style={{ width: '82%' }}></div>
                  </div>
                </div>
              </div>

              {/* Impact Quote */}
              <div className="mt-8 p-6 bg-primary/5 rounded-xl border-l-4 border-primary">
                <blockquote className="text-foreground font-heading italic text-lg">
                  "When you buy from Earthen Echoes, you're not just purchasing a product—you're investing in cultural preservation and sustainable livelihoods."
                </blockquote>
                <cite className="text-muted-foreground text-sm mt-2 block">
                  — Dr. Priya Sharma, Cultural Heritage Expert
                </cite>
              </div>
            </div>

            {/* Floating Impact Badge */}
            <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground rounded-full p-4 shadow-warm">
              <div className="text-center">
                <div className="text-lg font-bold">100%</div>
                <div className="text-xs">Transparent</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
          <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
            Join Our Mission
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every purchase contributes to preserving cultural heritage and creating sustainable livelihoods. Be part of the change.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/product-discovery">
              <Button variant="default" className="px-8 py-3">
                <Icon name="ShoppingBag" size={20} />
                <span className="ml-2">Shop with Purpose</span>
              </Button>
            </Link>
            
            <Link to="/about-earthen-echoes">
              <Button variant="outline" className="px-8 py-3">
                <Icon name="Info" size={20} />
                <span className="ml-2">Learn More</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityImpact;