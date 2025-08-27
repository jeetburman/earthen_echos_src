import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const WishlistSection = ({ wishlistItems }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Items', count: wishlistItems.length },
    { id: 'gift-ideas', name: 'Gift Ideas', count: wishlistItems.filter(item => item.category === 'gift-ideas').length },
    { id: 'cultural-interests', name: 'Cultural Interests', count: wishlistItems.filter(item => item.category === 'cultural-interests').length },
    { id: 'future-purchases', name: 'Future Purchases', count: wishlistItems.filter(item => item.category === 'future-purchases').length }
  ];

  const filteredItems = activeCategory === 'all' 
    ? wishlistItems 
    : wishlistItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-card-foreground">
          My Wishlist
        </h2>
        <Button variant="ghost" size="sm">
          <Icon name="Settings" size={16} />
          <span className="ml-2">Manage</span>
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
              activeCategory === category.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map((item) => (
          <div key={item.id} className="group relative bg-background border border-border rounded-lg overflow-hidden hover:shadow-warm transition-all duration-300">
            <div className="relative">
              <Image
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                {item.priceDropped && (
                  <div className="bg-success text-success-foreground px-2 py-1 rounded-full text-xs font-medium">
                    <Icon name="TrendingDown" size={12} className="inline mr-1" />
                    Price Drop
                  </div>
                )}
                {item.limitedStock && (
                  <div className="bg-warning text-warning-foreground px-2 py-1 rounded-full text-xs font-medium">
                    <Icon name="AlertTriangle" size={12} className="inline mr-1" />
                    Low Stock
                  </div>
                )}
              </div>
              <button className="absolute top-2 left-2 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Icon name="Heart" size={16} className="text-destructive fill-current" />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="font-medium text-foreground mb-1 line-clamp-2">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">
                by {item.artisan}
              </p>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {item.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${item.originalPrice}
                    </span>
                  )}
                  <span className="font-heading font-semibold text-foreground">
                    ${item.price}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Icon name="Star" size={12} className="fill-current text-accent" />
                  {item.rating}
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="ShoppingCart" size={14} />
                  <span className="ml-1">Add to Cart</span>
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Eye" size={14} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Heart" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h3 className="font-heading text-lg font-medium text-foreground mb-2">
            No items in this category
          </h3>
          <p className="text-muted-foreground mb-4">
            Start exploring our collections to add items to your wishlist
          </p>
          <Button variant="outline">
            <Icon name="Search" size={16} />
            <span className="ml-2">Discover Products</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default WishlistSection;