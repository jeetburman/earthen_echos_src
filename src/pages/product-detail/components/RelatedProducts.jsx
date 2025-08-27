import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RelatedProducts = ({ products, title = "Related Products" }) => {
  const handleAddToCart = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to cart logic here
    console.log('Adding to cart:', product.name);
  };

  const handleAddToWishlist = (product, e) => {
    e.preventDefault();
    e.stopPropagation();
    // Add to wishlist logic here
    console.log('Adding to wishlist:', product.name);
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-heading font-semibold text-foreground flex items-center">
          <Icon name="Package" size={20} className="mr-2 text-accent" />
          {title}
        </h3>
        <Button variant="outline" size="sm" iconName="ArrowRight" iconPosition="right">
          View All
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-background border border-border rounded-lg overflow-hidden hover:shadow-warm transition-all duration-300 cursor-pointer"
          >
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay Actions */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                  <button
                    onClick={(e) => handleAddToCart(product, e)}
                    className="bg-primary text-primary-foreground p-2 rounded-full hover:bg-primary/90 transition-colors duration-200"
                  >
                    <Icon name="ShoppingCart" size={16} />
                  </button>
                  <button
                    onClick={(e) => handleAddToWishlist(product, e)}
                    className="bg-background text-foreground p-2 rounded-full hover:bg-muted transition-colors duration-200"
                  >
                    <Icon name="Heart" size={16} />
                  </button>
                </div>
              </div>

              {/* Badges */}
              <div className="absolute top-3 left-3 flex flex-col space-y-2">
                {product.isNew && (
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                    New
                  </span>
                )}
                {product.discount && (
                  <span className="bg-error text-error-foreground px-2 py-1 rounded-full text-xs font-medium">
                    -{product.discount}%
                  </span>
                )}
                {product.isAuthentic && (
                  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <Icon name="Shield" size={10} />
                    <span>Authentic</span>
                  </span>
                )}
              </div>

              {/* Quick View */}
              <button className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm text-foreground p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background">
                <Icon name="Eye" size={16} />
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="mb-2">
                <h4 className="font-medium text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2">
                  {product.name}
                </h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {product.artisan}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={12}
                      className={i < Math.floor(product.rating) ? "fill-current text-accent" : "text-muted-foreground"}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  ({product.reviewCount})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                {product.inStock ? (
                  <span className="text-xs text-secondary font-medium">In Stock</span>
                ) : (
                  <span className="text-xs text-error font-medium">Out of Stock</span>
                )}
              </div>

              {/* Cultural Tag */}
              {product.culturalTag && (
                <div className="mt-2 pt-2 border-t border-border">
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {product.culturalTag}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Categories */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Tag" size={18} className="mr-2 text-secondary" />
          Explore Similar Categories
        </h4>
        <div className="flex flex-wrap gap-2">
          {[
            "Handwoven Textiles",
            "Ceramic Art",
            "Traditional Jewelry",
            "Wooden Crafts",
            "Metal Work",
            "Cultural Decor"
          ].map((category, index) => (
            <button
              key={index}
              className="px-3 py-2 bg-muted text-muted-foreground rounded-lg text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Artisan Spotlight */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="User" size={18} className="mr-2 text-accent" />
          More from This Artisan
        </h4>
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                alt="Artisan"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h5 className="font-medium text-foreground">Rajesh Kumar</h5>
              <p className="text-sm text-muted-foreground">Master Craftsman • Rajasthan</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Specializing in traditional blue pottery with 25+ years of experience in preserving ancient techniques.
          </p>
          <Button variant="outline" size="sm" fullWidth iconName="ExternalLink" iconPosition="right">
            View Artisan Profile
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;