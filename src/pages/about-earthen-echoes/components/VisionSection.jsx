import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const VisionSection = () => {
  const futureGoals = [
    {
      icon: "Globe",
      title: "Global Expansion",
      target: "2026",
      description: "Reach 100 countries and support 10,000 artisans worldwide",
      progress: 65
    },
    {
      icon: "GraduationCap",
      title: "Craft Academy",
      target: "2025",
      description: "Launch comprehensive online learning platform for traditional techniques",
      progress: 80
    },
    {
      icon: "Smartphone",
      title: "AR Experience",
      target: "2025",
      description: "Immersive augmented reality for cultural context and product visualization",
      progress: 45
    },
    {
      icon: "Recycle",
      title: "Zero Waste",
      target: "2026",
      description: "Achieve completely circular economy model with zero packaging waste",
      progress: 70
    }
  ];

  const initiatives = [
    {
      title: "Digital Heritage Archive",
      description: "Creating the world's largest digital repository of traditional craft techniques, stories, and cultural contexts for future generations.",
      icon: "Archive",
      status: "In Development"
    },
    {
      title: "Artisan Mentorship Network",
      description: "Connecting master craftspeople with young apprentices globally to ensure knowledge transfer and skill preservation.",
      icon: "Users",
      status: "Pilot Phase"
    },
    {
      title: "Sustainable Materials Lab",
      description: "Research and development of eco-friendly alternatives to traditional materials without compromising authenticity.",
      icon: "Leaf",
      status: "Research Phase"
    },
    {
      title: "Cultural Impact Fund",
      description: "Dedicated funding for community projects, workshop renovations, and cultural preservation initiatives in artisan villages.",
      icon: "Heart",
      status: "Active"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Vision for the Future
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We envision a world where traditional crafts thrive alongside modern innovation, where every artisan has access to global markets, and where cultural heritage is preserved for future generations through conscious commerce.
          </p>
        </div>

        {/* Future Goals */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            2025-2026 Roadmap
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {futureGoals.map((goal, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 hover:shadow-warm transition-all duration-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={goal.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        {goal.title}
                      </h4>
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full font-medium">
                        {goal.target}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {goal.description}
                    </p>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-primary font-medium">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2 transition-all duration-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Initiatives */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Strategic Initiatives
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={initiative.icon} size={20} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-foreground">
                        {initiative.title}
                      </h4>
                      <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                        initiative.status === 'Active' ?'bg-secondary/20 text-secondary'
                          : initiative.status === 'Pilot Phase' ?'bg-accent/20 text-accent' :'bg-muted text-muted-foreground'
                      }`}>
                        {initiative.status}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-6">
              "A World Where Every Thread Tells a Story"
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              By 2030, we envision Earthen Echoes as the global leader in cultural commerce—a platform where traditional artisans thrive in the digital economy, where consumers make purchases that preserve heritage, and where every transaction contributes to a more culturally rich and sustainable world.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary font-heading">50,000+</div>
                <div className="text-sm text-muted-foreground">Artisans Empowered</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-secondary font-heading">500+</div>
                <div className="text-sm text-muted-foreground">Traditions Preserved</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent font-heading">100+</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </div>
            </div>

            <Button size="lg" className="group">
              Join Our Journey
              <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Be Part of the Story
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're an artisan, cultural institution, investor, or conscious consumer, there are many ways to contribute to our mission of preserving cultural heritage through commerce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline">
              <Icon name="Users" size={18} className="mr-2" />
              Become an Artisan Partner
            </Button>
            <Button variant="outline">
              <Icon name="Building" size={18} className="mr-2" />
              Institutional Partnerships
            </Button>
            <Button variant="outline">
              <Icon name="TrendingUp" size={18} className="mr-2" />
              Investment Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;