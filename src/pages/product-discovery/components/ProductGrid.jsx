import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ 
  products, 
  viewMode, 
  onWishlistToggle, 
  onQuickView, 
  loading = false 
}) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <div key={index} className="bg-card rounded-lg border border-border overflow-hidden animate-pulse">
            <div className="aspect-square bg-muted" />
            <div className="p-4 space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-muted rounded-full" />
                <div className="h-3 bg-muted rounded flex-1" />
              </div>
              <div className="h-4 bg-muted rounded" />
              <div className="h-3 bg-muted rounded w-3/4" />
              <div className="flex justify-between items-center">
                <div className="h-4 bg-muted rounded w-16" />
                <div className="h-3 bg-muted rounded w-12" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-muted-foreground"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            <circle cx="12" cy="12" r="4" />
        </svg>
        </div>
        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
          No crafts found
        </h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          We couldn't find any crafts matching your current filters. Try adjusting your search criteria or explore different regions.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="text-primary hover:text-primary/80 font-medium"
        >
          Clear all filters and start over
        </button>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-warm transition-all duration-300">
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div className="sm:w-48 aspect-square sm:aspect-auto bg-muted flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 p-6">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img
                            src={product.artisan.avatar}
                            alt={product.artisan.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.artisan.name} • {product.artisan.region}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {product.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {product.culturalContext}
                      </p>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => onWishlistToggle(product.id, !product.isWishlisted)}
                        className="p-2 text-muted-foreground hover:text-red-500 transition-colors"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => onQuickView(product)}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Details */}
                  <div className="flex items-center space-x-4 mb-3 text-sm">
                    <div className="flex items-center space-x-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-foreground font-medium">{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                      <span className="text-muted-foreground">{product.creationTime}</span>
                    </div>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-foreground">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && product.originalPrice > product.price && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => onQuickView(product)}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Grid view
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onWishlistToggle={onWishlistToggle}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
};

export default ProductGrid;