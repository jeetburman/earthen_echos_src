import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WelcomeSection = ({ user, stats }) => {
  return (
    <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-xl p-6 mb-8 texture-overlay">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* <Image
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
            /> */}
            {user.avatar ? (
              <Image
                src={user.avatar}
                alt={user.name || "User"}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center border-2 border-primary/20">
                <span className="text-xl font-semibold">
                  {(user.name?.[0] || "?").toUpperCase()}
                </span>
              </div>
            )}

            <div className="absolute -bottom-1 -right-1 bg-success text-success-foreground rounded-full w-6 h-6 flex items-center justify-center">
              <Icon name="Check" size={14} />
            </div>
          </div>
          <div>
            <h1 className="font-heading text-2xl font-semibold text-foreground mb-1">
              Welcome back, {user.name}
            </h1>
            <p className="text-muted-foreground">
              Your cultural journey continues • Member since {user.memberSince}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-heading font-semibold text-primary mb-1">
              {stats.totalOrders}
            </div>
            <div className="text-sm text-muted-foreground">Orders</div>
          </div>
          <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-heading font-semibold text-secondary mb-1">
              {stats.artisansSupported}
            </div>
            <div className="text-sm text-muted-foreground">Artisans</div>
          </div>
          <div className="bg-background/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
            <div className="text-2xl font-heading font-semibold text-accent mb-1">
              {stats.wishlistItems}
            </div>
            <div className="text-sm text-muted-foreground">Wishlist</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;