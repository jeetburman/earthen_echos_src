import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const OrderHistoryCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'delivered': return 'text-success bg-success/10';
      case 'shipped': return 'text-primary bg-primary/10';
      case 'processing': return 'text-warning bg-warning/10';
      case 'cancelled': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'delivered': return 'CheckCircle';
      case 'shipped': return 'Truck';
      case 'processing': return 'Clock';
      case 'cancelled': return 'XCircle';
      default: return 'Package';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-warm transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-heading font-semibold text-lg text-card-foreground mb-1">
            Order #{order.id}
          </h3>
          <p className="text-sm text-muted-foreground">
            Placed on {order.date} • {order.items.length} items
          </p>
        </div>
        <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
          <Icon name={getStatusIcon(order.status)} size={16} />
          <span className="capitalize">{order.status}</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        {order.items.slice(0, 2).map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            <Image
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h4 className="font-medium text-card-foreground text-sm">{item.name}</h4>
              <p className="text-xs text-muted-foreground">by {item.artisan}</p>
            </div>
            <div className="text-sm font-medium text-card-foreground">
              ${item.price}
            </div>
          </div>
        ))}
        {order.items.length > 2 && (
          <div className="text-sm text-muted-foreground text-center py-2">
            +{order.items.length - 2} more items
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <span className="text-sm text-muted-foreground">Total: </span>
          <span className="font-heading font-semibold text-lg text-card-foreground">
            ${order.total}
          </span>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Icon name="Eye" size={16} />
            <span className="ml-2">View Details</span>
          </Button>
          {order.status === 'delivered' && (
            <Button variant="ghost" size="sm">
              <Icon name="RotateCcw" size={16} />
              <span className="ml-2">Reorder</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryCard;