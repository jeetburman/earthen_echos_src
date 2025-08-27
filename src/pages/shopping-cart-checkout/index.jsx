import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import CheckoutForm from './components/CheckoutForm';
import EmptyCart from './components/EmptyCart';
import OrderConfirmation from './components/OrderConfirmation';

const ShoppingCartCheckout = () => {
  const [currentStep, setCurrentStep] = useState('cart'); // cart, checkout, confirmation
  const [isProcessing, setIsProcessing] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Handwoven Banarasi Silk Scarf",
      artisan: "Meera Devi",
      price: 89.99,
      originalPrice: 120.00,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
      origin: "Varanasi, India",
      creationTime: "3-4 weeks",
      giftWrap: false,
      culturalContext: `This exquisite Banarasi silk scarf represents over 500 years of weaving tradition from the holy city of Varanasi. The intricate patterns are inspired by Mughal motifs, featuring delicate gold zari work that has been passed down through generations of master weavers. Each thread tells a story of cultural heritage, with techniques that remain unchanged since the 16th century. The silk is sourced from local silkworms, and the natural dyes create colors that have adorned Indian royalty for centuries.`
    },
    {
      id: 2,
      name: "Blue Pottery Ceramic Tea Set",
      artisan: "Chen Wei",
      price: 156.50,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      origin: "Jingdezhen, China",
      creationTime: "2-3 weeks",
      giftWrap: true,
      culturalContext: `Crafted in Jingdezhen, the porcelain capital of the world, this blue pottery tea set embodies over 1,000 years of ceramic mastery. The cobalt blue glazing technique, known as 'blue and white porcelain,' was perfected during the Yuan Dynasty and became a symbol of Chinese artistic excellence. Each piece is hand-thrown on a potter's wheel and fired in traditional kilns at temperatures exceeding 1,300°C. The delicate floral patterns represent prosperity and harmony in Chinese culture.`
    },
    {
      id: 3,
      name: "Carved Wooden Jewelry Box",
      artisan: "Maria Santos",
      price: 78.25,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      origin: "Oaxaca, Mexico",
      creationTime: "1-2 weeks",
      giftWrap: false,
      culturalContext: `This intricately carved wooden jewelry box showcases the rich woodworking traditions of Oaxaca, Mexico. Made from sustainably sourced copal wood, each box features traditional Zapotec geometric patterns that have spiritual significance in indigenous Mexican culture. The carving techniques have been preserved by artisan families for over 300 years, with each pattern telling stories of nature, fertility, and protection. The natural wood finish highlights the grain while preserving the tree's life energy.`
    }
  ]);

  const [orderData, setOrderData] = useState(null);

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const giftWrapCount = cartItems.filter(item => item.giftWrap).length;
  const shipping = subtotal > 75 ? 0 : 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax + (giftWrapCount * 5);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleToggleGiftWrap = (itemId) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, giftWrap: !item.giftWrap } : item
      )
    );
  };

  const handleCheckoutSubmit = async (formData) => {
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const orderNumber = `EE${Date.now().toString().slice(-6)}`;
    const newOrderData = {
      orderNumber,
      total,
      items: cartItems,
      shippingAddress: {
        name: `${formData.firstName} ${formData.lastName}`,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode
      },
      paymentMethod: formData.paymentMethod,
      isGift: formData.isGift,
      giftMessage: formData.giftMessage
    };
    
    setOrderData(newOrderData);
    setIsProcessing(false);
    setCurrentStep('confirmation');
  };

  const handleProceedToCheckout = () => {
    setCurrentStep('checkout');
  };

  const handleBackToCart = () => {
    setCurrentStep('cart');
  };

  // Empty cart state
  if (cartItems.length === 0 && currentStep === 'cart') {
    return <EmptyCart />;
  }

  // Order confirmation state
  if (currentStep === 'confirmation' && orderData) {
    return <OrderConfirmation orderData={orderData} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-8">
              <div className={`flex items-center space-x-2 ${
                currentStep === 'cart' ? 'text-primary' : 'text-muted-foreground'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === 'cart' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <Icon name="ShoppingCart" size={16} />
                </div>
                <span className="font-medium">Cart</span>
              </div>
              
              <div className={`w-16 h-0.5 ${
                currentStep === 'checkout' || currentStep === 'confirmation' ? 'bg-primary' : 'bg-muted'
              }`} />
              
              <div className={`flex items-center space-x-2 ${
                currentStep === 'checkout' ? 'text-primary' : 
                currentStep === 'confirmation' ? 'text-success' : 'text-muted-foreground'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === 'checkout' ? 'bg-primary text-primary-foreground' :
                  currentStep === 'confirmation' ? 'bg-success text-success-foreground' : 'bg-muted'
                }`}>
                  <Icon name="CreditCard" size={16} />
                </div>
                <span className="font-medium">Checkout</span>
              </div>
              
              <div className={`w-16 h-0.5 ${
                currentStep === 'confirmation' ? 'bg-success' : 'bg-muted'
              }`} />
              
              <div className={`flex items-center space-x-2 ${
                currentStep === 'confirmation' ? 'text-success' : 'text-muted-foreground'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  currentStep === 'confirmation' ? 'bg-success text-success-foreground' : 'bg-muted'
                }`}>
                  <Icon name="CheckCircle" size={16} />
                </div>
                <span className="font-medium">Confirmation</span>
              </div>
            </div>
          </div>

          {/* Cart View */}
          {currentStep === 'cart' && (
            <>
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="font-heading text-3xl font-semibold text-foreground mb-2">
                  Your Cultural Collection
                </h1>
                <p className="text-muted-foreground">
                  Review your handcrafted treasures and their cultural significance
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                      onToggleGiftWrap={handleToggleGiftWrap}
                    />
                  ))}

                  {/* Continue Shopping */}
                  <div className="bg-card rounded-lg border border-border p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <h3 className="font-heading font-semibold text-foreground">
                          Discover More Treasures
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Explore our curated collection of handcrafted pieces
                        </p>
                      </div>
                      <Button variant="outline" asChild>
                        <Link to="/product-discovery">
                          <Icon name="Search" size={18} />
                          <span className="ml-2">Continue Shopping</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Order Summary */}
                <div>
                  <OrderSummary
                    items={cartItems}
                    shipping={shipping}
                    tax={tax}
                    giftWrapCount={giftWrapCount}
                  />
                  
                  <div className="mt-6">
                    <Button
                      size="lg"
                      fullWidth
                      onClick={handleProceedToCheckout}
                      iconName="ArrowRight"
                      iconPosition="right"
                    >
                      Proceed to Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Checkout View */}
          {currentStep === 'checkout' && (
            <>
              {/* Page Header */}
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <h1 className="font-heading text-3xl font-semibold text-foreground mb-2">
                    Secure Checkout
                  </h1>
                  <p className="text-muted-foreground">
                    Complete your purchase and support traditional artisans
                  </p>
                </div>
                
                <Button variant="outline" onClick={handleBackToCart}>
                  <Icon name="ArrowLeft" size={18} />
                  <span className="ml-2">Back to Cart</span>
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2">
                  <CheckoutForm
                    onSubmit={handleCheckoutSubmit}
                    isProcessing={isProcessing}
                  />
                </div>

                {/* Order Summary */}
                <div>
                  <OrderSummary
                    items={cartItems}
                    shipping={shipping}
                    tax={tax}
                    giftWrapCount={giftWrapCount}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCheckout;