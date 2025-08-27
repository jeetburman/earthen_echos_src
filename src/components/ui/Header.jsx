import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Discover', path: '/product-discovery', icon: 'Search' },
    { name: 'Collections', path: '/product-detail', icon: 'Package' },
    { name: 'Cart', path: '/shopping-cart-checkout', icon: 'ShoppingCart' },
    { name: 'Dashboard', path: '/user-dashboard', icon: 'User' }
  ];

  const secondaryItems = [
    { name: 'About', path: '/about-earthen-echoes', icon: 'Info' }
  ];

  const isActivePath = (path) => location.pathname === path;

  const Logo = () => (
    <Link to="/homepage" className="flex items-center space-x-3 group">
      <div className="relative">
        <svg 
          width="40" 
          height="40" 
          viewBox="0 0 40 40" 
          className="transition-transform duration-300 group-hover:scale-105"
        >
          <circle 
            cx="20" 
            cy="20" 
            r="18" 
            fill="var(--color-primary)"
            className="opacity-90"
          />
          <path 
            d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" 
            fill="var(--color-accent)"
            className="animate-pulse-warm"
          />
          <circle 
            cx="20" 
            cy="20" 
            r="4" 
            fill="var(--color-primary-foreground)"
          />
        </svg>
      </div>
      <div className="hidden sm:block">
        <h1 className="font-heading font-semibold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
          Earthen Echoes
        </h1>
        <p className="text-xs text-muted-foreground font-body -mt-1">
          Living Heritage
        </p>
      </div>
    </Link>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-soft border-b border-border' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* More Menu */}
            <div className="relative group">
              <Button
                variant="ghost"
                className="flex items-center space-x-2 px-4 py-2"
              >
                <Icon name="MoreHorizontal" size={18} />
                <span>More</span>
              </Button>
              
              <div className="absolute right-0 top-full mt-2 w-48 bg-popover border border-border rounded-lg shadow-warm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {secondaryItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm hover:bg-muted transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                      isActivePath(item.path) ? 'text-primary bg-muted' : 'text-popover-foreground'
                    }`}
                  >
                    <Icon name={item.icon} size={16} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* User Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" className="relative">
              <Icon name="Heart" size={20} />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Button>
            
            <Button variant="ghost" className="relative">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Button variant="outline">
              <Icon name="User" size={18} />
              <span className="ml-2">Account</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-4 py-4 space-y-2">
            {[...navigationItems, ...secondaryItems].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            <div className="border-t border-border pt-4 mt-4">
              <div className="flex items-center justify-between px-4">
                <Button variant="ghost" className="relative">
                  <Icon name="Heart" size={20} />
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    2
                  </span>
                  <span className="ml-2">Wishlist</span>
                </Button>
                
                <Button variant="ghost" className="relative">
                  <Icon name="ShoppingBag" size={20} />
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    3
                  </span>
                  <span className="ml-2">Cart</span>
                </Button>
              </div>
              
              <div className="px-4 mt-3">
                <Button variant="outline" fullWidth>
                  <Icon name="User" size={18} />
                  <span className="ml-2">My Account</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;