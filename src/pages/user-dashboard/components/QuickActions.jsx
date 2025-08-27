import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickActions = () => {
  const actions = [
    {
      icon: 'Search',
      label: 'Discover New Crafts',
      description: 'Explore our latest collections',
      color: 'primary',
      href: '/product-discovery'
    },
    {
      icon: 'ShoppingCart',
      label: 'View Cart',
      description: 'Complete your purchase',
      color: 'secondary',
      href: '/shopping-cart-checkout'
    },
    {
      icon: 'Package',
      label: 'Track Orders',
      description: 'Monitor your deliveries',
      color: 'accent',
      href: '#orders'
    },
    {
      icon: 'MessageCircle',
      label: 'Contact Artisans',
      description: 'Connect with makers',
      color: 'success',
      href: '#messages'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="font-heading text-xl font-semibold text-card-foreground mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="ghost"
            className="h-auto p-4 justify-start hover:bg-muted/50 transition-all duration-200"
          >
            <div className={`w-12 h-12 rounded-lg bg-${action.color}/20 flex items-center justify-center mr-4`}>
              <Icon name={action.icon} size={20} className={`text-${action.color}`} />
            </div>
            <div className="text-left">
              <div className="font-medium text-card-foreground mb-1">
                {action.label}
              </div>
              <div className="text-sm text-muted-foreground">
                {action.description}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;