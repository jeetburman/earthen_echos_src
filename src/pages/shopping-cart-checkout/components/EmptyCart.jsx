import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const EmptyCart = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Handwoven Silk Scarf",
      artisan: "Meera Devi",
      price: 89,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=300&fit=crop",
      origin: "Varanasi, India"
    },
    {
      id: 2,
      name: "Ceramic Tea Set",
      artisan: "Chen Wei",
      price: 156,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      origin: "Jingdezhen, China"
    },
    {
      id: 3,
      name: "Wooden Jewelry Box",
      artisan: "Maria Santos",
      price: 78,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
      origin: "Oaxaca, Mexico"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Empty Cart Illustration */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-muted/30 rounded-full flex items-center justify-center">
              <Icon name="ShoppingCart" size={80} className="text-muted-foreground/50" />
            </div>
          </div>

          {/* Empty State Content */}
          <div className="space-y-4">
            <h1 className="font-heading text-3xl font-semibold text-foreground">
              Your cart is empty
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Discover beautiful handcrafted pieces that tell stories of tradition and artistry.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/product-discovery">
                <Icon name="Search" size={20} />
                <span className="ml-2">Discover Crafts</span>
              </Link>
            </Button>
            
            <Button variant="outline" asChild size="lg">
              <Link to="/homepage">
                <Icon name="Home" size={20} />
                <span className="ml-2">Back to Home</span>
              </Link>
            </Button>
          </div>

          {/* Cultural Message */}
          <div className="bg-primary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <Icon name="Heart" size={24} className="text-primary mt-1 flex-shrink-0" />
              <div className="text-left space-y-2">
                <h3 className="font-heading font-semibold text-foreground">
                  Every Purchase Preserves Heritage
                </h3>
                <p className="text-sm text-foreground leading-relaxed">
                  When you shop with Earthen Echoes, you're not just buying a product—you're supporting artisan families, preserving traditional crafts, and keeping cultural stories alive for future generations.
                </p>
              </div>
            </div>
          </div>

          {/* Featured Products */}
          <div className="pt-8">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Start Your Cultural Journey
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <Link
                  key={product.id}
                  to="/product-detail"
                  className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-warm transition-all duration-300 card-handcrafted"
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-4 space-y-2">
                    <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      by {product.artisan}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-heading text-lg font-semibold text-foreground">
                        ${product.price}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Icon name="MapPin" size={12} />
                        <span>{product.origin}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-secondary/10 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-semibold text-foreground">
                Stay Connected to Craft Stories
              </h3>
              <p className="text-sm text-muted-foreground">
                Get weekly insights into traditional crafts, artisan spotlights, and exclusive collection previews.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                />
                <Button>
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;