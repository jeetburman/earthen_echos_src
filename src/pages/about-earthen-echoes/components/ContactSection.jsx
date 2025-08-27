import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactChannels = [
    {
      icon: "Mail",
      title: "General Inquiries",
      contact: "demo.general@email.com",
      description: "Questions about products, orders, or general information"
    },
    {
      icon: "Users",
      title: "Artisan Relations",
      contact: "demo.artisan@email.com",
      description: "Partnership opportunities for craftspeople and makers"
    },
    {
      icon: "Camera",
      title: "Media & Press",
      contact: "demo.media@email.com",
      description: "Press inquiries, interviews, and media partnerships"
    },
    {
      icon: "Handshake",
      title: "Business Partnerships",
      contact: "demo.partnership@email.com",
      description: "Institutional collaborations and business development"
    },
    {
      icon: "HeadphonesIcon",
      title: "Customer Support",
      contact: "demo.support@email.com",
      description: "Order assistance, returns, and technical support"
    },
    {
      icon: "TrendingUp",
      title: "Investment Relations",
      contact: "demo.investor@email.com",
      description: "Investment opportunities and financial information"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      type: "Global Headquarters",
      address: "1234 Mission Street, Suite 500\nSan Francisco, CA 94103",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST"
    },
    {
      city: "New Delhi",
      type: "Artisan Relations Hub",
      address: "Block A, Sector 18\nNoida, Uttar Pradesh 201301",
      phone: "+91 11 2345 6789",
      hours: "Mon-Fri: 10:00 AM - 7:00 PM IST"
    },
    {
      city: "London",
      type: "European Operations",
      address: "25 Old Broad Street\nLondon EC2N 1HN, UK",
      phone: "+44 20 7123 4567",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM GMT"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Whether you're an artisan interested in joining our platform, a customer with questions, or a partner looking to collaborate, we're here to help.
          </p>
        </div>

        {/* Contact Channels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactChannels.map((channel, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-warm transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon name={channel.icon} size={24} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    {channel.title}
                  </h3>
                  <a 
                    href={`mailto:${channel.contact}`}
                    className="text-primary hover:text-primary/80 font-medium text-sm mb-2 block transition-colors duration-200"
                  >
                    {channel.contact}
                  </a>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {channel.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Office Locations */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-muted/30 border border-border rounded-2xl p-8">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
                <Input
                  label="Email Address"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="demo.user@email.com"
                  required
                />
              </div>
              
              <Input
                label="Subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What's this about?"
                required
              />
              
              <div className="space-y-2">
                <label className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                />
              </div>
              
              <Button type="submit" size="lg" fullWidth>
                <Icon name="Send" size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Our Global Offices
            </h3>
            
            {officeLocations.map((office, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-secondary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h4 className="font-semibold text-foreground">
                        {office.city}
                      </h4>
                      <span className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full">
                        {office.type}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <Icon name="MapPin" size={14} className="mt-0.5 flex-shrink-0" />
                        <span className="whitespace-pre-line">{office.address}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" size={14} className="flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} className="flex-shrink-0" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 text-center">
          <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
            Stay Connected
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Follow our journey and get the latest updates on new artisan partnerships, cultural stories, and exclusive collections.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200">
              <Icon name="Instagram" size={20} />
              <span>@earthenechoes</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200">
              <Icon name="Facebook" size={20} />
              <span>Earthen Echoes</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200">
              <Icon name="Twitter" size={20} />
              <span>@earthenechoes</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200">
              <Icon name="Linkedin" size={20} />
              <span>Earthen Echoes</span>
            </a>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email for updates"
                className="flex-1"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;