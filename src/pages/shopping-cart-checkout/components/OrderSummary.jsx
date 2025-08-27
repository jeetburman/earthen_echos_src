import React from 'react';
import Icon from '../../../components/AppIcon';

const OrderSummary = ({ items, shipping, tax, giftWrapCount }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const giftWrapTotal = giftWrapCount * 5;
  const total = subtotal + shipping + tax + giftWrapTotal;

  const artisanCount = new Set(items.map(item => item.artisan)).size;
  const familiesSupported = Math.ceil(artisanCount * 1.2);

  return (
    <div className="bg-card rounded-lg border border-border p-6 space-y-6 sticky top-24">
      <h3 className="font-heading text-xl font-semibold text-foreground">
        Order Summary
      </h3>

      {/* Impact Message */}
      <div className="bg-primary/10 rounded-lg p-4 space-y-2">
        <div className="flex items-center gap-2 text-primary">
          <Icon name="Heart" size={18} />
          <span className="font-medium">Your Impact</span>
        </div>
        <p className="text-sm text-foreground">
          This order supports <span className="font-semibold">{familiesSupported} artisan families</span> and helps preserve traditional crafting techniques.
        </p>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Subtotal ({items.length} items)</span>
          <span className="text-foreground font-medium">${subtotal.toFixed(2)}</span>
        </div>
        
        {giftWrapCount > 0 && (
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Gift wrapping ({giftWrapCount} items)</span>
            <span className="text-foreground font-medium">${giftWrapTotal.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-foreground font-medium">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Tax</span>
          <span className="text-foreground font-medium">${tax.toFixed(2)}</span>
        </div>
        
        <div className="border-t border-border pt-3">
          <div className="flex justify-between">
            <span className="font-heading text-lg font-semibold text-foreground">Total</span>
            <span className="font-heading text-lg font-semibold text-foreground">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Truck" size={16} />
          <span>Free shipping on orders over $75</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="Shield" size={16} />
          <span>Secure checkout with SSL encryption</span>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="RotateCcw" size={16} />
          <span>30-day return policy</span>
        </div>
      </div>

      {/* Artisan Support Info */}
      <div className="bg-secondary/10 rounded-lg p-4 space-y-2">
        <div className="flex items-center gap-2 text-secondary">
          <Icon name="Users" size={16} />
          <span className="font-medium text-sm">Artisan Support</span>
        </div>
        <p className="text-xs text-foreground leading-relaxed">
          75% of your purchase goes directly to artisans. The remaining supports platform maintenance, cultural preservation programs, and fair trade initiatives.
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;