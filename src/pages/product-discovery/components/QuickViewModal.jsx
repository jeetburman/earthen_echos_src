import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickViewModal = ({ product, isOpen, onClose, onAddToCart, onWishlistToggle }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(product?.isWishlisted || false);

  if (!isOpen || !product) return null;

  const images = product.images || [product.image];

  const handleWishlistClick = () => {
    setIsWishlisted(!isWishlisted);
    onWishlistToggle(product.id, !isWishlisted);
  };

  const handleAddToCart = () => {
    onAddToCart(product.id, quantity);
    onClose();
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
          <h2 className="font-heading text-xl font-semibold text-foreground">Quick View</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <Image
                  src={images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              {images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                        selectedImage === index ? 'border-primary' : 'border-border'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Artisan Info */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={product.artisan.avatar}
                    alt={product.artisan.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-foreground">{product.artisan.name}</p>
                  <p className="text-sm text-muted-foreground">{product.artisan.region}</p>
                </div>
              </div>

              {/* Product Name */}
              <h1 className="font-heading text-2xl font-semibold text-foreground">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={`${
                        i < Math.floor(product.rating)
                          ? 'text-accent fill-current' :'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-foreground">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-foreground">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              {/* Cultural Context */}
              <div className="bg-muted rounded-lg p-4">
                <h3 className="font-semibold text-foreground mb-2">Cultural Significance</h3>
                <p className="text-sm text-muted-foreground">{product.culturalContext}</p>
              </div>

              {/* Craft Details */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Icon name="Palette" size={16} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Tradition</p>
                    <p className="text-sm font-medium text-foreground">{product.craftTradition}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Creation Time</p>
                    <p className="text-sm font-medium text-foreground">{product.creationTime}</p>
                  </div>
                </div>
              </div>

              {/* Materials */}
              <div>
                <h3 className="font-semibold text-foreground mb-2">Materials Used</h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials?.map((material) => (
                    <span
                      key={material}
                      className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              {product.certifications && product.certifications.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert) => (
                      <div key={cert} className="flex items-center space-x-1 bg-success/20 text-success-foreground px-2 py-1 rounded text-xs">
                        <Icon name="Award" size={12} />
                        <span>{cert.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-sm font-medium text-foreground">Quantity:</label>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      disabled={quantity <= 1}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="w-12 text-center font-medium text-foreground">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="default"
                    onClick={handleAddToCart}
                    className="flex-1"
                  >
                    <Icon name="ShoppingCart" size={18} />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleWishlistClick}
                    className={isWishlisted ? 'text-red-500 border-red-500' : ''}
                  >
                    <Icon name="Heart" size={18} />
                  </Button>
                </div>
              </div>

              {/* View Full Details Link */}
              <Button variant="link" className="w-full">
                View Full Product Details
                <Icon name="ArrowRight" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;