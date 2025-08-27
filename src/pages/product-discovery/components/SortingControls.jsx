import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SortingControls = ({ 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange, 
  resultsCount, 
  onFilterToggle 
}) => {
  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant', icon: 'Target' },
    { value: 'price-low', label: 'Price: Low to High', icon: 'TrendingUp' },
    { value: 'price-high', label: 'Price: High to Low', icon: 'TrendingDown' },
    { value: 'rating', label: 'Highest Rated', icon: 'Star' },
    { value: 'newest', label: 'Newest First', icon: 'Clock' },
    { value: 'cultural', label: 'Cultural Significance', icon: 'Award' },
    { value: 'artisan', label: 'Artisan Featured', icon: 'User' }
  ];

  const viewModes = [
    { value: 'grid', icon: 'Grid3X3', label: 'Grid View' },
    { value: 'list', icon: 'List', label: 'List View' }
  ];

  return (
    <div className="bg-background border-b border-border sticky top-16 z-30">
      <div className="flex items-center justify-between p-4">
        {/* Left Section - Results Count and Filter Toggle */}
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            onClick={onFilterToggle}
            className="lg:hidden"
          >
            <Icon name="Filter" size={18} />
            Filters
          </Button>
          
          <div className="hidden sm:flex items-center space-x-2">
            <Icon name="Package" size={16} className="text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              {resultsCount.toLocaleString()} crafts found
            </span>
          </div>
        </div>

        {/* Center Section - Sort Options (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2">
          <span className="text-sm text-muted-foreground mr-2">Sort by:</span>
          <div className="flex items-center space-x-1">
            {sortOptions.map((option) => (
              <Button
                key={option.value}
                variant={sortBy === option.value ? "default" : "ghost"}
                size="sm"
                onClick={() => onSortChange(option.value)}
                className="flex items-center space-x-1"
              >
                <Icon name={option.icon} size={14} />
                <span className="hidden xl:inline">{option.label}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Sort Dropdown */}
        <div className="lg:hidden relative group">
          <Button variant="outline" size="sm">
            <Icon name={sortOptions.find(opt => opt.value === sortBy)?.icon || 'Target'} size={16} />
            <span className="ml-1">Sort</span>
            <Icon name="ChevronDown" size={14} />
          </Button>
          
          <div className="absolute right-0 top-full mt-1 w-56 bg-popover border border-border rounded-lg shadow-warm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => onSortChange(option.value)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-sm hover:bg-muted transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg ${
                  sortBy === option.value ? 'text-primary bg-muted' : 'text-popover-foreground'
                }`}
              >
                <Icon name={option.icon} size={16} />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Section - View Mode Toggle */}
        <div className="flex items-center space-x-1">
          {viewModes.map((mode) => (
            <Button
              key={mode.value}
              variant={viewMode === mode.value ? "default" : "ghost"}
              size="icon"
              onClick={() => onViewModeChange(mode.value)}
              title={mode.label}
            >
              <Icon name={mode.icon} size={18} />
            </Button>
          ))}
        </div>
      </div>

      {/* Mobile Results Count */}
      <div className="sm:hidden px-4 pb-3">
        <div className="flex items-center space-x-2">
          <Icon name="Package" size={14} className="text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {resultsCount.toLocaleString()} crafts found
          </span>
        </div>
      </div>
    </div>
  );
};

export default SortingControls;