import React from 'react';
import Icon from '../../../components/AppIcon';

const ProductSpecifications = ({ specifications }) => {
  const specCategories = [
    {
      title: "Dimensions & Weight",
      icon: "Ruler",
      items: [
        { label: "Length", value: specifications.dimensions.length },
        { label: "Width", value: specifications.dimensions.width },
        { label: "Height", value: specifications.dimensions.height },
        { label: "Weight", value: specifications.weight }
      ]
    },
    {
      title: "Materials & Finish",
      icon: "Palette",
      items: [
        { label: "Primary Material", value: specifications.materials.primary },
        { label: "Secondary Material", value: specifications.materials.secondary },
        { label: "Finish", value: specifications.finish },
        { label: "Color Variations", value: specifications.colorVariations }
      ]
    },
    {
      title: "Care & Maintenance",
      icon: "Heart",
      items: [
        { label: "Cleaning Method", value: specifications.care.cleaning },
        { label: "Storage", value: specifications.care.storage },
        { label: "Maintenance", value: specifications.care.maintenance },
        { label: "Durability", value: specifications.durability }
      ]
    },
    {
      title: "Origin & Authenticity",
      icon: "MapPin",
      items: [
        { label: "Origin Region", value: specifications.origin.region },
        { label: "Craft Tradition", value: specifications.origin.tradition },
        { label: "Certification", value: specifications.certification },
        { label: "Artisan Code", value: specifications.artisanCode }
      ]
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h3 className="text-xl font-heading font-semibold text-foreground mb-6 flex items-center">
        <Icon name="FileText" size={20} className="mr-2 text-accent" />
        Product Specifications
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h4 className="font-medium text-foreground flex items-center">
              <Icon name={category.icon} size={18} className="mr-2 text-primary" />
              {category.title}
            </h4>
            
            <div className="space-y-3">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="flex justify-between items-start py-2 border-b border-border last:border-b-0">
                  <span className="text-sm text-muted-foreground font-medium">
                    {item.label}
                  </span>
                  <span className="text-sm text-foreground text-right max-w-[60%]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-medium text-foreground mb-4 flex items-center">
          <Icon name="Info" size={18} className="mr-2 text-secondary" />
          Additional Information
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-muted rounded-lg p-4 text-center">
            <Icon name="Truck" size={24} className="mx-auto mb-2 text-primary" />
            <div className="font-medium text-foreground text-sm">Shipping</div>
            <div className="text-xs text-muted-foreground mt-1">
              Carefully packaged with eco-friendly materials
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-4 text-center">
            <Icon name="Shield" size={24} className="mx-auto mb-2 text-secondary" />
            <div className="font-medium text-foreground text-sm">Warranty</div>
            <div className="text-xs text-muted-foreground mt-1">
              1-year craftsmanship guarantee
            </div>
          </div>
          
          <div className="bg-muted rounded-lg p-4 text-center">
            <Icon name="Leaf" size={24} className="mx-auto mb-2 text-accent" />
            <div className="font-medium text-foreground text-sm">Sustainability</div>
            <div className="text-xs text-muted-foreground mt-1">
              Eco-friendly materials and processes
            </div>
          </div>
        </div>
      </div>

      {/* Size Guide */}
      <div className="mt-6 pt-6 border-t border-border">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium text-foreground flex items-center">
            <Icon name="Maximize2" size={18} className="mr-2 text-accent" />
            Size Guide
          </h4>
          <button className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 flex items-center">
            <Icon name="ExternalLink" size={14} className="mr-1" />
            View Full Guide
          </button>
        </div>
        
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-3">
            This handcrafted piece may have slight variations in size (±2-3%) due to the artisanal nature of creation.
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-primary rounded"></div>
              <span className="text-muted-foreground">Actual Size</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-primary rounded"></div>
              <span className="text-muted-foreground">Size Range</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecifications;