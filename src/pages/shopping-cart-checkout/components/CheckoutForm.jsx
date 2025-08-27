import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const CheckoutForm = ({ onSubmit, isProcessing }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: '',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    giftMessage: '',
    isGift: false,
    saveInfo: false,
    newsletter: false
  });

  const [errors, setErrors] = useState({});

  const countries = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'AU', label: 'Australia' },
    { value: 'IN', label: 'India' }
  ];

  const shippingOptions = [
    { value: 'standard', label: 'Standard Shipping (5-7 days) - Free' },
    { value: 'expedited', label: 'Expedited Shipping (2-3 days) - $15' },
    { value: 'overnight', label: 'Overnight Shipping (1 day) - $35' },
    { value: 'fragile', label: 'Special Handling for Ceramics (7-10 days) - $10' }
  ];

  const paymentMethods = [
    { value: 'card', label: 'Credit/Debit Card' },
    { value: 'paypal', label: 'PayPal' },
    { value: 'upi', label: 'UPI (India)' },
    { value: 'netbanking', label: 'Net Banking' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.nameOnCard) newErrors.nameOnCard = 'Name on card is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Contact Information */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
          <Icon name="Mail" size={20} />
          Contact Information
        </h3>
        
        <Input
          type="email"
          label="Email Address"
          placeholder="demo.user@email.com"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={errors.email}
          required
        />
      </div>

      {/* Shipping Address */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
          <Icon name="MapPin" size={20} />
          Shipping Address
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            placeholder="John"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            error={errors.firstName}
            required
          />
          
          <Input
            label="Last Name"
            placeholder="Doe"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            error={errors.lastName}
            required
          />
        </div>
        
        <Input
          label="Address"
          placeholder="123 Main Street, Apt 4B"
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          error={errors.address}
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="City"
            placeholder="New York"
            value={formData.city}
            onChange={(e) => handleInputChange('city', e.target.value)}
            error={errors.city}
            required
          />
          
          <Input
            label="State/Province"
            placeholder="NY"
            value={formData.state}
            onChange={(e) => handleInputChange('state', e.target.value)}
          />
          
          <Input
            label="ZIP/Postal Code"
            placeholder="10001"
            value={formData.zipCode}
            onChange={(e) => handleInputChange('zipCode', e.target.value)}
            error={errors.zipCode}
            required
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select
            label="Country"
            options={countries}
            value={formData.country}
            onChange={(value) => handleInputChange('country', value)}
          />
          
          <Input
            type="tel"
            label="Phone Number"
            placeholder="+1 (555) 123-4567"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
          />
        </div>
      </div>

      {/* Shipping Method */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
          <Icon name="Truck" size={20} />
          Shipping Method
        </h3>
        
        <Select
          label="Choose shipping option"
          options={shippingOptions}
          value={formData.shippingMethod}
          onChange={(value) => handleInputChange('shippingMethod', value)}
        />
        
        <div className="bg-accent/10 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Icon name="Info" size={16} className="text-accent mt-0.5" />
            <div className="text-sm text-foreground">
              <p className="font-medium mb-1">Special Handling Available</p>
              <p>Fragile items like ceramics and glassware receive extra protective packaging and careful handling throughout shipping.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Gift Options */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
          <Icon name="Gift" size={20} />
          Gift Options
        </h3>
        
        <Checkbox
          label="This is a gift"
          checked={formData.isGift}
          onChange={(e) => handleInputChange('isGift', e.target.checked)}
        />
        
        {formData.isGift && (
          <div className="space-y-4 animate-fade-up">
            <Input
              label="Gift Message"
              placeholder="Write a personal message for the recipient..."
              value={formData.giftMessage}
              onChange={(e) => handleInputChange('giftMessage', e.target.value)}
              description="Include cultural context cards explaining the significance of each piece"
            />
            
            <div className="bg-secondary/10 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Icon name="Sparkles" size={16} className="text-secondary mt-0.5" />
                <div className="text-sm text-foreground">
                  <p className="font-medium mb-1">Cultural Gift Cards Included</p>
                  <p>Each gift includes beautifully designed cards explaining the traditional meaning, crafting techniques, and cultural significance of your chosen pieces.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
          <Icon name="CreditCard" size={20} />
          Payment Method
        </h3>
        
        <Select
          label="Payment option"
          options={paymentMethods}
          value={formData.paymentMethod}
          onChange={(value) => handleInputChange('paymentMethod', value)}
        />
        
        {formData.paymentMethod === 'card' && (
          <div className="space-y-4 animate-fade-up">
            <Input
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
              error={errors.cardNumber}
              required
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Expiry Date"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                error={errors.expiryDate}
                required
              />
              
              <Input
                label="CVV"
                placeholder="123"
                value={formData.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value)}
                error={errors.cvv}
                required
              />
              
              <Input
                label="Name on Card"
                placeholder="John Doe"
                value={formData.nameOnCard}
                onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                error={errors.nameOnCard}
                required
              />
            </div>
          </div>
        )}
        
        {formData.paymentMethod === 'upi' && (
          <div className="animate-fade-up">
            <Input
              label="UPI ID"
              placeholder="demo.upi@bank"
              value={formData.upiId}
              onChange={(e) => handleInputChange('upiId', e.target.value)}
            />
          </div>
        )}
        
        {/* Security Badges */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Shield" size={16} />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="Lock" size={16} />
            <span>256-bit Encryption</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Icon name="CheckCircle" size={16} />
            <span>PCI Compliant</span>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="bg-card rounded-lg border border-border p-6 space-y-4">
        <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2">
          <Icon name="Settings" size={20} />
          Preferences
        </h3>
        
        <div className="space-y-3">
          <Checkbox
            label="Save my information for faster checkout"
            checked={formData.saveInfo}
            onChange={(e) => handleInputChange('saveInfo', e.target.checked)}
          />
          
          <Checkbox
            label="Subscribe to artisan stories and cultural insights"
            description="Receive monthly newsletters featuring artisan spotlights and craft traditions"
            checked={formData.newsletter}
            onChange={(e) => handleInputChange('newsletter', e.target.checked)}
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isProcessing}
          iconName="Lock"
          iconPosition="left"
        >
          {isProcessing ? 'Processing Order...' : 'Complete Order'}
        </Button>
        
        <p className="text-xs text-muted-foreground text-center mt-3">
          By completing your order, you agree to our Terms of Service and Privacy Policy. 
          Your payment information is processed securely through Razorpay.
        </p>
      </div>
    </form>
  );
};

export default CheckoutForm;