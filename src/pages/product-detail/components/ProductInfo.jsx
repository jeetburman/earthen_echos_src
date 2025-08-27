import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductInfo = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="space-y-6">
      {/* Product Title & Price */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h1 className="text-3xl font-heading font-semibold text-foreground mb-1">
              {product.name}
            </h1>
            <p className="text-lg text-muted-foreground">{product.traditionalName}</p>
          </div>
          <button
            onClick={() => setIsWishlisted(!isWishlisted)}
            className="p-2 rounded-full hover:bg-muted transition-colors duration-200"
          >
            <Icon 
              name={isWishlisted ? "Heart" : "Heart"} 
              size={24} 
              className={isWishlisted ? "fill-current text-accent" : "text-muted-foreground"}
            />
          </button>
        </div>
        
        <div className="flex items-center space-x-4 mb-4">
          <span className="text-3xl font-bold text-primary">
            ${selectedVariant?.price || product.price}
          </span>
          {product.originalPrice && (
            <span className="text-xl text-muted-foreground line-through">
              ${product.originalPrice}
            </span>
          )}
          {product.discount && (
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Icon
                key={i}
                name="Star"
                size={16}
                className={i < Math.floor(product.rating) ? "fill-current text-accent" : "text-muted-foreground"}
              />
            ))}
            <span className="text-sm text-foreground ml-2">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviewCount} reviews)
          </span>
        </div>
      </div>

      {/* Cultural Significance */}
      <div className="bg-muted rounded-lg p-4">
        <h3 className="font-medium text-foreground mb-2 flex items-center">
          <Icon name="Sparkles" size={18} className="mr-2 text-accent" />
          Cultural Significance
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {product.culturalSignificance}
        </p>
      </div>

      {/* Variants Selection */}
      {product.variants && product.variants.length > 0 && (
        <div>
          <h3 className="font-medium text-foreground mb-3">Available Options</h3>
          <div className="grid grid-cols-2 gap-3">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={`p-3 rounded-lg border text-left transition-all duration-200 ${
                  selectedVariant?.id === variant.id
                    ? 'border-primary bg-primary/5 text-primary' :'border-border hover:border-primary/50'
                }`}
              >
                <div className="font-medium text-sm">{variant.name}</div>
                <div className="text-xs text-muted-foreground">${variant.price}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Selector */}
      <div>
        <h3 className="font-medium text-foreground mb-3">Quantity</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border border-border rounded-lg">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="p-2 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Icon name="Minus" size={16} />
            </button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <button
              onClick={() => handleQuantityChange(1)}
              disabled={quantity >= 10}
              className="p-2 hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Icon name="Plus" size={16} />
            </button>
          </div>
          <span className="text-sm text-muted-foreground">
            Maximum 10 pieces per order
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button 
          variant="default" 
          fullWidth 
          iconName="ShoppingCart" 
          iconPosition="left"
          className="h-12"
        >
          Add to Cart - ${((selectedVariant?.price || product.price) * quantity).toFixed(2)}
        </Button>
        
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" iconName="Heart" iconPosition="left">
            Wishlist
          </Button>
          <Button variant="outline" iconName="Share2" iconPosition="left">
            Share
          </Button>
        </div>
      </div>

      {/* Delivery Information */}
      <div className="bg-card border border-border rounded-lg p-4 space-y-3">
        <div className="flex items-center space-x-3">
          <Icon name="Truck" size={18} className="text-secondary" />
          <div>
            <p className="text-sm font-medium text-foreground">Free Delivery</p>
            <p className="text-xs text-muted-foreground">On orders above $75</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Icon name="RotateCcw" size={18} className="text-secondary" />
          <div>
            <p className="text-sm font-medium text-foreground">30-Day Returns</p>
            <p className="text-xs text-muted-foreground">Easy return policy</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Icon name="Shield" size={18} className="text-secondary" />
          <div>
            <p className="text-sm font-medium text-foreground">Authenticity Guaranteed</p>
            <p className="text-xs text-muted-foreground">Certified handcrafted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;