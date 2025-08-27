import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const FilterSidebar = ({ filters, onFilterChange, onClearFilters, isOpen, onToggle }) => {
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [searchQuery, setSearchQuery] = useState('');

  const craftTraditions = [
    { id: 'japanese-ceramics', label: 'Japanese Ceramics', count: 124 },
    { id: 'indian-textiles', label: 'Indian Textiles', count: 89 },
    { id: 'mexican-metalwork', label: 'Mexican Metalwork', count: 67 },
    { id: 'african-pottery', label: 'African Pottery', count: 45 },
    { id: 'peruvian-weaving', label: 'Peruvian Weaving', count: 78 },
    { id: 'moroccan-leather', label: 'Moroccan Leather', count: 34 }
  ];

  const culturalSignificance = [
    { id: 'ceremonial', label: 'Ceremonial', count: 156 },
    { id: 'daily-use', label: 'Daily Use', count: 234 },
    { id: 'decorative', label: 'Decorative', count: 189 },
    { id: 'spiritual', label: 'Spiritual', count: 67 },
    { id: 'festive', label: 'Festive', count: 98 }
  ];

  const materials = [
    { id: 'clay', label: 'Clay & Ceramics', count: 167 },
    { id: 'cotton', label: 'Cotton', count: 145 },
    { id: 'silk', label: 'Silk', count: 89 },
    { id: 'metal', label: 'Metal', count: 78 },
    { id: 'wood', label: 'Wood', count: 123 },
    { id: 'leather', label: 'Leather', count: 56 }
  ];

  const certifications = [
    { id: 'fair-trade', label: 'Fair Trade Certified', count: 234 },
    { id: 'organic', label: 'Organic Materials', count: 156 },
    { id: 'sustainable', label: 'Sustainable Production', count: 189 },
    { id: 'handmade', label: 'Handmade Verified', count: 345 }
  ];

  const handlePriceChange = (type, value) => {
    const newRange = { ...priceRange, [type]: value };
    setPriceRange(newRange);
    onFilterChange('priceRange', newRange);
  };

  const handleCheckboxChange = (category, itemId, checked) => {
    const currentItems = filters[category] || [];
    const updatedItems = checked 
      ? [...currentItems, itemId]
      : currentItems.filter(id => id !== itemId);
    onFilterChange(category, updatedItems);
  };

  const FilterSection = ({ title, items, category, icon }) => (
    <div className="mb-6">
      <div className="flex items-center space-x-2 mb-3">
        <Icon name={icon} size={18} className="text-primary" />
        <h3 className="font-heading font-semibold text-foreground">{title}</h3>
      </div>
      <div className="space-y-2 max-h-48 overflow-y-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <Checkbox
              label={item.label}
              checked={filters[category]?.includes(item.id) || false}
              onChange={(e) => handleCheckboxChange(category, item.id, e.target.checked)}
              className="flex-1"
            />
            <span className="text-xs text-muted-foreground ml-2">({item.count})</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-80 bg-background border-r border-border z-50
        transform transition-transform duration-300 lg:transform-none overflow-y-auto
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-heading text-xl font-semibold text-foreground">Filters</h2>
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClearFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Clear All
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className="lg:hidden"
              >
                <Icon name="X" size={20} />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="mb-6">
            <Input
              type="search"
              placeholder="Search crafts, artisans, regions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="DollarSign" size={18} className="text-primary" />
              <h3 className="font-heading font-semibold text-foreground">Price Range</h3>
            </div>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => handlePriceChange('min', e.target.value)}
                className="flex-1"
              />
              <span className="text-muted-foreground">-</span>
              <Input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => handlePriceChange('max', e.target.value)}
                className="flex-1"
              />
            </div>
          </div>

          {/* Filter Sections */}
          <FilterSection
            title="Craft Traditions"
            items={craftTraditions}
            category="craftTraditions"
            icon="Palette"
          />

          <FilterSection
            title="Cultural Significance"
            items={culturalSignificance}
            category="culturalSignificance"
            icon="Star"
          />

          <FilterSection
            title="Materials"
            items={materials}
            category="materials"
            icon="Package"
          />

          <FilterSection
            title="Certifications"
            items={certifications}
            category="certifications"
            icon="Award"
          />

          {/* Creation Time */}
          <div className="mb-6">
            <div className="flex items-center space-x-2 mb-3">
              <Icon name="Clock" size={18} className="text-primary" />
              <h3 className="font-heading font-semibold text-foreground">Creation Time</h3>
            </div>
            <div className="space-y-2">
              {[
                { id: 'quick', label: '1-2 weeks', count: 89 },
                { id: 'standard', label: '3-4 weeks', count: 156 },
                { id: 'detailed', label: '1-2 months', count: 78 },
                { id: 'masterpiece', label: '3+ months', count: 34 }
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <Checkbox
                    label={item.label}
                    checked={filters.creationTime?.includes(item.id) || false}
                    onChange={(e) => handleCheckboxChange('creationTime', item.id, e.target.checked)}
                    className="flex-1"
                  />
                  <span className="text-xs text-muted-foreground ml-2">({item.count})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Filters Button */}
          <Button variant="default" fullWidth className="mt-6">
            <Icon name="Filter" size={18} />
            Apply Filters
          </Button>
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;