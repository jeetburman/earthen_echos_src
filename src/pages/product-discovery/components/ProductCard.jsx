import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onWishlistToggle, onQuickView }) => {
  const [isWishlisted, setIsWishlisted] = useState(product.isWishlisted || false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
    onWishlistToggle(product.id, !isWishlisted);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onQuickView(product);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-warm transition-all duration-300 card-handcrafted">
      <Link to="/product-detail" className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Loading Skeleton */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}

          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300">
            <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleWishlistClick}
                className={`bg-white/90 hover:bg-white shadow-soft ${
                  isWishlisted ? 'text-red-500' : 'text-muted-foreground'
                }`}
              >
                <Icon name={isWishlisted ? "Heart" : "Heart"} size={18} />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={handleQuickView}
                className="bg-white/90 hover:bg-white shadow-soft text-muted-foreground"
              >
                <Icon name="Eye" size={18} />
              </Button>
            </div>

            {/* Quick View Button */}
            <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Button
                variant="default"
                size="sm"
                onClick={handleQuickView}
                className="w-full bg-white/90 text-foreground hover:bg-white"
              >
                Quick View
              </Button>
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col space-y-1">
            {product.isNew && (
              <span className="bg-accent text-accent-foreground text-xs font-medium px-2 py-1 rounded">
                New
              </span>
            )}
            {product.isFeatured && (
              <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                Featured
              </span>
            )}
            {product.certifications?.includes('fair-trade') && (
              <span className="bg-success text-success-foreground text-xs font-medium px-2 py-1 rounded">
                Fair Trade
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Artisan Info */}
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image
                src={product.artisan.avatar}
                alt={product.artisan.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground truncate">
                {product.artisan.name} • {product.artisan.region}
              </p>
            </div>
          </div>

          {/* Product Name */}
          <h3 className="font-heading font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-200">
            {product.name}
          </h3>

          {/* Cultural Context */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.culturalContext}
          </p>

          {/* Craft Tradition */}
          <div className="flex items-center space-x-1 mb-3">
            <Icon name="Palette" size={14} className="text-primary" />
            <span className="text-xs text-primary font-medium">
              {product.craftTradition}
            </span>
          </div>

          {/* Price and Rating */}
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-semibold text-foreground">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-1">
              <Icon name="Star" size={14} className="text-accent fill-current" />
              <span className="text-sm font-medium text-foreground">
                {product.rating}
              </span>
              <span className="text-xs text-muted-foreground">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Creation Time */}
          <div className="flex items-center space-x-1 mt-2">
            <Icon name="Clock" size={12} className="text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {product.creationTime}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;