import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Discover",
      links: [
        { name: "All Crafts", path: "/product-discovery" },
        { name: "Featured Artisans", path: "/product-discovery" },
        { name: "New Arrivals", path: "/product-discovery" },
        { name: "Best Sellers", path: "/product-discovery" },
        { name: "Gift Collections", path: "/product-discovery" }
      ]
    },
    {
      title: "Learn",
      links: [
        { name: "Craft Academy", path: "/about-earthen-echoes" },
        { name: "Cultural Stories", path: "/about-earthen-echoes" },
        { name: "Technique Guides", path: "/about-earthen-echoes" },
        { name: "Artisan Interviews", path: "/about-earthen-echoes" },
        { name: "Heritage Blog", path: "/about-earthen-echoes" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", path: "/user-dashboard" },
        { name: "Shipping Info", path: "/user-dashboard" },
        { name: "Returns", path: "/user-dashboard" },
        { name: "Size Guide", path: "/user-dashboard" },
        { name: "Contact Us", path: "/user-dashboard" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about-earthen-echoes" },
        { name: "Our Mission", path: "/about-earthen-echoes" },
        { name: "Sustainability", path: "/about-earthen-echoes" },
        { name: "Press", path: "/about-earthen-echoes" },
        { name: "Careers", path: "/about-earthen-echoes" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "Instagram", url: "#" },
    { name: "Facebook", icon: "Facebook", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "Pinterest", icon: "Image", url: "#" },
    { name: "YouTube", icon: "Play", url: "#" }
  ];

  const certifications = [
    { name: "Fair Trade Certified", icon: "Award" },
    { name: "Carbon Neutral", icon: "Leaf" },
    { name: "Artisan First", icon: "Heart" },
    { name: "Cultural Heritage", icon: "Shield" }
  ];

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/95 text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">
                Stay Connected to Heritage
              </h3>
              <p className="text-background/80 text-lg">
                Get weekly stories from artisans, exclusive collection previews, and cultural insights delivered to your inbox.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button variant="default" className="bg-primary hover:bg-primary/90 px-6 py-3">
                  <Icon name="Mail" size={20} />
                  <span className="ml-2">Subscribe</span>
                </Button>
              </div>
              <p className="text-background/60 text-sm">
                Join 25,000+ craft enthusiasts. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2">
            <Link to="/homepage" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-white">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.9"/>
                  <path d="M6 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6-6-2.7-6-6z" fill="var(--color-accent)"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                </svg>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold">Earthen Echoes</h2>
                <p className="text-primary text-sm">Living Heritage</p>
              </div>
            </Link>
            
            <p className="text-background/80 mb-6 leading-relaxed">
              Connecting conscious consumers with master artisans to preserve cultural heritage and create sustainable livelihoods through authentic handcrafted treasures.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-background/70 hover:text-background transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 pt-8 border-t border-background/20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div>
              <h4 className="font-heading font-semibold mb-4">Our Commitments</h4>
              <div className="flex flex-wrap gap-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="flex items-center space-x-2 bg-background/10 px-4 py-2 rounded-full"
                  >
                    <Icon name={cert.icon} size={16} className="text-primary" />
                    <span className="text-sm text-background/80">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-right">
              <div className="space-y-2 text-background/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>demo.contact@email.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+0 (000) 000-0000</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>Demo City, XX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-background/60 text-sm">
              <span>© {currentYear} Earthen Echoes. All rights reserved.</span>
              <Link to="/user-dashboard" className="hover:text-background transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/user-dashboard" className="hover:text-background transition-colors duration-200">
                Terms of Service
              </Link>
              <Link to="/user-dashboard" className="hover:text-background transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 text-background/60 text-sm">
              <span>Made with</span>
              <Icon name="Heart" size={16} className="text-error" />
              <span>for artisans worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;