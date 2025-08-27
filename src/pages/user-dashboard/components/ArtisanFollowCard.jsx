import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ArtisanFollowCard = ({ artisan }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-warm transition-all duration-300 card-handcrafted">
      <div className="flex items-start gap-4 mb-4">
        <Image
          src={artisan.avatar}
          alt={artisan.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
        />
        <div className="flex-1">
          <h3 className="font-heading font-semibold text-lg text-card-foreground mb-1">
            {artisan.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-2">
            {artisan.craft} • {artisan.location}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Icon name="Star" size={12} className="fill-current text-accent" />
              {artisan.rating}
            </span>
            <span>{artisan.totalProducts} products</span>
            <span>{artisan.followers} followers</span>
          </div>
        </div>
        <Button variant="ghost" size="sm">
          <Icon name="MoreVertical" size={16} />
        </Button>
      </div>

      {artisan.latestUpdate && (
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-4">
          <div className="flex items-start gap-3">
            <Icon name="Bell" size={16} className="text-accent mt-0.5" />
            <div>
              <h4 className="font-medium text-card-foreground text-sm mb-1">
                {artisan.latestUpdate.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">
                {artisan.latestUpdate.description}
              </p>
              <span className="text-xs text-accent font-medium">
                {artisan.latestUpdate.timeAgo}
              </span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-3 gap-2 mb-4">
        {artisan.recentProducts.map((product, index) => (
          <div key={index} className="relative group">
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-20 rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-medium">${product.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Icon name="Eye" size={16} />
          <span className="ml-2">View Profile</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-1">
          <Icon name="MessageCircle" size={16} />
          <span className="ml-2">Message</span>
        </Button>
      </div>
    </div>
  );
};

export default ArtisanFollowCard;