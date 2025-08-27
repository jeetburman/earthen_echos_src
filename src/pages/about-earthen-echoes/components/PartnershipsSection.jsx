import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PartnershipsSection = () => {
  const culturalPartners = [
    {
      name: "Smithsonian Institution",
      type: "Museum Partnership",
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=200&h=100&fit=crop",
      description: "Collaborative exhibitions showcasing traditional crafts and their cultural significance in contemporary contexts."
    },
    {
      name: "UNESCO Creative Cities",
      type: "Cultural Organization",
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=200&h=100&fit=crop",
      description: "Supporting craft cities worldwide through artisan exchange programs and cultural preservation initiatives."
    },
    {
      name: "World Crafts Council",
      type: "International Body",
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=200&h=100&fit=crop",
      description: "Promoting traditional crafts globally and maintaining quality standards for authentic handmade products."
    },
    {
      name: "Fair Trade Foundation",
      type: "Certification Body",
      logo: "https://images.unsplash.com/photo-1562813733-b31f71025d54?w=200&h=100&fit=crop",
      description: "Ensuring ethical trading practices and fair compensation for artisan communities worldwide."
    }
  ];

  const mediaRecognition = [
    {
      publication: "Architectural Digest",
      title: "The Future of Handcrafted Home Decor",
      date: "March 2025",
      type: "Feature Article",
      quote: "Earthen Echoes is revolutionizing how we connect with traditional craftsmanship in the digital age."
    },
    {
      publication: "Vogue Living",
      title: "Sustainable Luxury: Conscious Collecting",
      date: "January 2025",
      type: "Sustainability Feature",
      quote: "A platform that proves luxury and sustainability can beautifully coexist."
    },
    {
      publication: "Fast Company",
      title: "Social Impact Startups Changing Commerce",
      date: "December 2024",
      type: "Innovation Award",
      quote: "Earthen Echoes demonstrates how technology can preserve cultural heritage while empowering communities."
    },
    {
      publication: "National Geographic",
      title: "Preserving Traditional Crafts in the Modern World",
      date: "November 2024",
      type: "Cultural Documentary",
      quote: "An inspiring example of how digital platforms can safeguard disappearing traditions."
    }
  ];

  const awards = [
    {
      name: "B Corp Certification",
      year: "2024",
      icon: "Award",
      description: "Certified B Corporation for social and environmental performance"
    },
    {
      name: "Social Enterprise Award",
      year: "2024",
      icon: "Trophy",
      description: "Recognized for outstanding impact in cultural preservation"
    },
    {
      name: "Sustainable Business Leader",
      year: "2023",
      icon: "Leaf",
      description: "Environmental leadership in e-commerce and supply chain"
    },
    {
      name: "Cultural Heritage Champion",
      year: "2023",
      icon: "BookOpen",
      description: "UNESCO recognition for traditional craft preservation efforts"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partnerships & Recognition
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to cultural preservation and artisan empowerment has earned recognition from leading institutions and media outlets worldwide.
          </p>
        </div>

        {/* Cultural Partners */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Cultural Institution Partners
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {culturalPartners.map((partner, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-warm transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-foreground">
                        {partner.name}
                      </h4>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {partner.type}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Recognition */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Media Recognition
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {mediaRecognition.map((media, index) => (
              <div key={index} className="bg-muted/30 border border-border rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {media.publication}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {media.date}
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                    {media.type}
                  </span>
                </div>
                
                <h5 className="font-medium text-foreground mb-3">
                  {media.title}
                </h5>
                
                <blockquote className="text-muted-foreground italic text-sm border-l-2 border-primary pl-4">
                  "{media.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8">
          <h3 className="font-heading text-2xl font-semibold text-foreground text-center mb-8">
            Awards & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="text-center p-4 bg-background/80 rounded-lg border border-border/50">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={award.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-1">
                  {award.name}
                </h4>
                <p className="text-primary font-medium text-sm mb-2">
                  {award.year}
                </p>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-16 text-center bg-card border border-border rounded-2xl p-8">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Partner With Us
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our mission to preserve cultural heritage and empower artisan communities. We welcome partnerships with museums, cultural institutions, and organizations that share our values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:demo.partnership@email.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              <Icon name="Handshake" size={18} className="mr-2" />
              Institutional Partnerships
            </a>
            <a
              href="mailto:demo.media@email.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-muted transition-colors duration-200"
            >
              <Icon name="Camera" size={18} className="mr-2" />
              Media Inquiries
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;