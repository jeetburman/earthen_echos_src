import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PromiseSection = () => {
  const promises = [
    {
      icon: "Shield",
      title: "Authenticity Guarantee",
      description: "Every product is verified for authenticity through our rigorous artisan verification process and cultural expert review.",
      features: [
        "Direct artisan partnerships",
        "Cultural expert authentication",
        "Technique verification process",
        "Origin certification"
      ]
    },
    {
      icon: "Award",
      title: "Quality Assurance",
      description: "We maintain the highest standards through careful curation, quality inspections, and artisan skill assessments.",
      features: [
        "Multi-point quality checks",
        "Artisan skill certification",
        "Material authenticity testing",
        "Craftsmanship standards"
      ]
    },
    {
      icon: "Heart",
      title: "Fair Trade Commitment",
      description: "70% of product value goes directly to artisans, ensuring fair compensation and sustainable livelihoods.",
      features: [
        "Transparent pricing model",
        "Direct artisan payments",
        "No middleman exploitation",
        "Living wage guarantee"
      ]
    },
    {
      icon: "Leaf",
      title: "Sustainability Promise",
      description: "Carbon-neutral shipping, eco-friendly packaging, and support for traditional sustainable practices.",
      features: [
        "Carbon offset shipping",
        "Recyclable packaging",
        "Sustainable materials",
        "Environmental impact tracking"
      ]
    }
  ];

  const certifications = [
    {
      name: "Fair Trade Certified",
      icon: "Award",
      description: "Verified fair trade practices"
    },
    {
      name: "Cultural Heritage Verified",
      icon: "BookOpen",
      description: "Authenticated traditional techniques"
    },
    {
      name: "Carbon Neutral",
      icon: "Leaf",
      description: "100% offset shipping emissions"
    },
    {
      name: "Artisan Direct",
      icon: "Handshake",
      description: "Direct partnerships with makers"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Promise to You
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We stand behind every product with comprehensive guarantees that protect your investment while supporting the artisans who create these treasured pieces.
          </p>
        </div>

        {/* Promises Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {promises.map((promise, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-8 shadow-soft hover:shadow-warm transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={promise.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {promise.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {promise.description}
                  </p>
                  <ul className="space-y-2">
                    {promise.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <Icon name="Check" size={16} className="text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-background border border-border rounded-2xl p-8 mb-12">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Our Certifications & Standards
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={cert.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {cert.name}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Return Policy & Support */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="RotateCcw" size={24} className="text-primary" />
              <h3 className="font-heading text-xl font-semibold text-foreground">
                30-Day Return Policy
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Not completely satisfied? Return any item within 30 days for a full refund. We cover return shipping for defective or misrepresented items.
            </p>
            <Button variant="outline" size="sm">
              View Return Policy
            </Button>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <Icon name="MessageCircle" size={24} className="text-primary" />
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Expert Support
              </h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Our cultural experts and customer service team are available to answer questions about products, care instructions, and cultural significance.
            </p>
            <Button variant="outline" size="sm">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;