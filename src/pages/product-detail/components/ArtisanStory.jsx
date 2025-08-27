import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ArtisanStory = ({ artisan }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-start space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={artisan.avatar}
            alt={artisan.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
            Meet {artisan.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {artisan.location} • {artisan.experience} years of experience
          </p>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Icon name="Award" size={14} className="text-accent" />
              <span>{artisan.awards} Awards</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Package" size={14} className="text-secondary" />
              <span>{artisan.productsCount} Products</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {artisan.story}
        </p>
        
        <div className="bg-muted rounded-lg p-3 mb-4">
          <h4 className="font-medium text-foreground mb-2 flex items-center">
            <Icon name="Palette" size={16} className="mr-2 text-accent" />
            Signature Technique
          </h4>
          <p className="text-sm text-muted-foreground">
            {artisan.technique}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={14}
                className={i < Math.floor(artisan.rating) ? "fill-current text-accent" : "text-muted-foreground"}
              />
            ))}
            <span className="text-sm text-foreground ml-1">{artisan.rating}</span>
          </div>
          <span className="text-xs text-muted-foreground">
            ({artisan.reviewCount} reviews)
          </span>
        </div>
        
        <Button variant="outline" size="sm" iconName="ExternalLink" iconPosition="right">
          View Profile
        </Button>
      </div>

      {/* Artisan Impact */}
      <div className="mt-4 pt-4 border-t border-border">
        <h4 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Heart" size={16} className="mr-2 text-accent" />
          Your Purchase Impact
        </h4>
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-muted rounded-lg p-3">
            <div className="text-lg font-bold text-primary">{artisan.impact.familiesSupported}</div>
            <div className="text-xs text-muted-foreground">Families Supported</div>
          </div>
          <div className="bg-muted rounded-lg p-3">
            <div className="text-lg font-bold text-secondary">{artisan.impact.treesPlanted}</div>
            <div className="text-xs text-muted-foreground">Trees Planted</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanStory;