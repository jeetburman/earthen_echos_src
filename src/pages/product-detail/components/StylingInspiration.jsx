import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const StylingInspiration = ({ inspirations }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All Styles', icon: 'Grid3X3' },
    { id: 'living', name: 'Living Room', icon: 'Sofa' },
    { id: 'dining', name: 'Dining Area', icon: 'UtensilsCrossed' },
    { id: 'bedroom', name: 'Bedroom', icon: 'Bed' },
    { id: 'office', name: 'Office', icon: 'Briefcase' }
  ];

  const filteredInspirations = selectedCategory === 'all' 
    ? inspirations 
    : inspirations.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2 flex items-center">
          <Icon name="Sparkles" size={20} className="mr-2 text-accent" />
          Styling Inspiration
        </h3>
        <p className="text-muted-foreground">
          See how this beautiful piece transforms different spaces and complements various interior styles.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === category.id
                ? 'bg-primary text-primary-foreground shadow-warm'
                : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.name}</span>
          </button>
        ))}
      </div>

      {/* Inspiration Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {filteredInspirations.map((inspiration, index) => (
          <div
            key={index}
            className="group cursor-pointer"
            onClick={() => setSelectedImage(inspiration)}
          >
            <div className="relative rounded-lg overflow-hidden bg-muted">
              <Image
                src={inspiration.image}
                alt={inspiration.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <Icon name="Eye" size={20} className="text-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <span className="bg-background/80 backdrop-blur-sm text-foreground px-2 py-1 rounded-full text-xs font-medium">
                  {categories.find(cat => cat.id === inspiration.category)?.name}
                </span>
              </div>
            </div>
            
            <div className="mt-3">
              <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                {inspiration.title}
              </h4>
              <p className="text-sm text-muted-foreground mt-1">
                {inspiration.description}
              </p>
              <div className="flex items-center space-x-4 mt-2 text-xs text-muted-foreground">
                <span>{inspiration.style}</span>
                <span>•</span>
                <span>{inspiration.roomSize}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styling Tips */}
      <div className="bg-muted rounded-lg p-4">
        <h4 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Lightbulb" size={18} className="mr-2 text-accent" />
          Styling Tips
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Place in natural light to highlight the intricate craftsmanship details
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Pair with neutral colors to let the piece be the focal point
              </p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Group with other handcrafted items for a curated artisan collection
              </p>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="Check" size={16} className="text-secondary mt-0.5 flex-shrink-0" />
              <p className="text-sm text-muted-foreground">
                Consider the cultural significance when choosing placement
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Selected Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-medium text-foreground">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Style Details</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {selectedImage.detailedDescription}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-1">Style</h5>
                      <p className="text-sm text-muted-foreground">{selectedImage.style}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-1">Room Size</h5>
                      <p className="text-sm text-muted-foreground">{selectedImage.roomSize}</p>
                    </div>
                  </div>
                  
                  {selectedImage.products && (
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-2">Featured Products</h5>
                      <div className="space-y-2">
                        {selectedImage.products.map((product, idx) => (
                          <div key={idx} className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">{product.name}</span>
                            <span className="text-primary font-medium">${product.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StylingInspiration;