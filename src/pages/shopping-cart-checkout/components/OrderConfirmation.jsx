import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const OrderConfirmation = ({ orderData }) => {
  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 7);

  const artisanMessages = [
    {
      artisan: "Meera Devi",
      message: "Thank you for supporting our traditional weaving craft. Your order helps keep our family\'s 200-year-old techniques alive.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c9c1e4e3?w=60&h=60&fit=crop&crop=face"
    },
    {
      artisan: "Chen Wei",
      message: "I\'m honored to share my ceramic artistry with you. Each piece is crafted with generations of knowledge and love.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Success Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" size={40} className="text-success" />
              </div>
            </div>
            
            <h1 className="font-heading text-3xl font-semibold text-foreground">
              Order Confirmed!
            </h1>
            <p className="text-lg text-muted-foreground">
              Thank you for supporting traditional artisans and preserving cultural heritage.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-card rounded-lg border border-border p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground">
                  Order #{orderData.orderNumber}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Placed on {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
              
              <div className="text-right">
                <p className="font-heading text-2xl font-semibold text-foreground">
                  ${orderData.total.toFixed(2)}
                </p>
                <p className="text-sm text-muted-foreground">
                  Total Amount
                </p>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-primary/10 rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Icon name="Heart" size={20} />
                <span className="font-semibold">Your Cultural Impact</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <p className="font-semibold text-foreground text-lg">3</p>
                  <p className="text-muted-foreground">Artisan families supported</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground text-lg">2</p>
                  <p className="text-muted-foreground">Traditional techniques preserved</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold text-foreground text-lg">$45</p>
                  <p className="text-muted-foreground">Direct artisan support</p>
                </div>
              </div>
            </div>

            {/* Delivery Information */}
            <div className="space-y-4">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Delivery Information
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Shipping Address</p>
                  <div className="text-sm text-muted-foreground">
                    <p>{orderData.shippingAddress.name}</p>
                    <p>{orderData.shippingAddress.address}</p>
                    <p>{orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-foreground">Estimated Delivery</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Calendar" size={16} className="text-primary" />
                    <span className="text-foreground font-medium">
                      {estimatedDelivery.toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Tracking information will be sent to your email
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Artisan Thank You Messages */}
          <div className="bg-card rounded-lg border border-border p-6 space-y-6">
            <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
              <Icon name="MessageCircle" size={20} />
              Messages from Your Artisans
            </h3>
            
            <div className="space-y-4">
              {artisanMessages.map((message, index) => (
                <div key={index} className="bg-muted/30 rounded-lg p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Image
                      src={message.avatar}
                      alt={message.artisan}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-foreground">{message.artisan}</p>
                      <p className="text-xs text-muted-foreground">Traditional Artisan</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed italic">
                    "{message.message}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Care Instructions */}
          <div className="bg-card rounded-lg border border-border p-6 space-y-4">
            <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
              <Icon name="Info" size={20} />
              Care Instructions & Cultural Context
            </h3>
            
            <div className="space-y-4">
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Handwoven Textiles</h4>
                <p className="text-sm text-foreground leading-relaxed">
                  Hand wash in cold water with mild detergent. Lay flat to dry away from direct sunlight. 
                  These pieces are woven using traditional techniques passed down through generations in Varanasi.
                </p>
              </div>
              
              <div className="bg-secondary/10 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Ceramic Items</h4>
                <p className="text-sm text-foreground leading-relaxed">
                  Hand wash with gentle soap. Avoid sudden temperature changes. 
                  Each piece is fired using traditional kilns and glazing techniques from Jingdezhen.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/user-dashboard">
                <Icon name="User" size={20} />
                <span className="ml-2">Track Your Order</span>
              </Link>
            </Button>
            
            <Button variant="outline" asChild size="lg">
              <Link to="/product-discovery">
                <Icon name="Search" size={20} />
                <span className="ml-2">Continue Shopping</span>
              </Link>
            </Button>
            
            <Button variant="ghost" size="lg">
              <Icon name="Share2" size={20} />
              <span className="ml-2">Share Your Purchase</span>
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-terracotta rounded-lg p-6 text-center space-y-4">
            <h3 className="font-heading text-xl font-semibold text-white">
              Stay Connected to Your Artisans
            </h3>
            <p className="text-white/90 text-sm max-w-md mx-auto">
              Receive updates about your artisans' new collections, traditional craft stories, and exclusive previews.
            </p>
            <Button variant="secondary">
              <Icon name="Bell" size={18} />
              <span className="ml-2">Subscribe to Updates</span>
            </Button>
          </div>

          {/* Social Sharing */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Share your cultural journey and inspire others to support traditional crafts
            </p>
            <div className="flex justify-center gap-3">
              <Button variant="outline" size="sm">
                <Icon name="Facebook" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Twitter" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Instagram" size={16} />
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="Linkedin" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;