import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CartItem = ({ item, onUpdateQuantity, onRemove, onToggleGiftWrap }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return;
    onUpdateQuantity(item.id, newQuantity);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6 space-y-4 card-handcrafted">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-muted">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="space-y-2">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                {item.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                by <span className="text-primary font-medium">{item.artisan}</span>
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="MapPin" size={14} />
                <span>{item.origin}</span>
              </div>
            </div>
            
            <div className="text-right space-y-1">
              <p className="text-2xl font-heading font-semibold text-foreground">
                ${item.price.toFixed(2)}
              </p>
              {item.originalPrice && item.originalPrice > item.price && (
                <p className="text-sm text-muted-foreground line-through">
                  ${item.originalPrice.toFixed(2)}
                </p>
              )}
            </div>
          </div>

          {/* Cultural Context Preview */}
          <div className="bg-muted/50 rounded-lg p-3">
            <p className="text-sm text-foreground leading-relaxed">
              {item.culturalContext.substring(0, 120)}...
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 p-0 h-auto text-primary hover:text-primary/80"
            >
              {isExpanded ? 'Show less' : 'Learn more about this craft'}
              <Icon name={isExpanded ? "ChevronUp" : "ChevronDown"} size={16} className="ml-1" />
            </Button>
          </div>

          {/* Expanded Cultural Context */}
          {isExpanded && (
            <div className="bg-accent/10 rounded-lg p-4 space-y-3 animate-fade-up">
              <h4 className="font-heading font-semibold text-accent-foreground">
                Cultural Significance
              </h4>
              <p className="text-sm text-foreground leading-relaxed">
                {item.culturalContext}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Clock" size={14} />
                <span>Creation time: {item.creationTime}</span>
              </div>
            </div>
          )}

          {/* Quantity and Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <div className="flex items-center gap-4">
              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-foreground">Qty:</span>
                <div className="flex items-center border border-border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="h-8 w-8 p-0"
                  >
                    <Icon name="Minus" size={14} />
                  </Button>
                  <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                    {item.quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleQuantityChange(item.quantity + 1)}
                    className="h-8 w-8 p-0"
                  >
                    <Icon name="Plus" size={14} />
                  </Button>
                </div>
              </div>

              {/* Gift Wrap Option */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={`gift-${item.id}`}
                  checked={item.giftWrap}
                  onChange={() => onToggleGiftWrap(item.id)}
                  className="rounded border-border text-primary focus:ring-primary"
                />
                <label htmlFor={`gift-${item.id}`} className="text-sm text-foreground cursor-pointer">
                  Gift wrap (+$5)
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Icon name="Heart" size={16} />
                <span className="ml-1">Save</span>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(item.id)}
                className="text-destructive hover:text-destructive/80"
              >
                <Icon name="Trash2" size={16} />
                <span className="ml-1">Remove</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;