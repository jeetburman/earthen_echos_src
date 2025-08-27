import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import FilterSidebar from './components/FilterSidebar';
import SortingControls from './components/SortingControls';
import ProductGrid from './components/ProductGrid';
import InteractiveMap from './components/InteractiveMap';
import QuickViewModal from './components/QuickViewModal';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import axios from 'axios';

const API_BASE = 'http://localhost:8000/api/products'; // replace with your actual backend URL

const fetchProducts = async (params = {}) => {
  try {
    const response = await axios.get(API_BASE, { params });
    return {
      ok: response.data.success,
      products: response.data.data || [],
      total: response.data.total || 0,
      page: response.data.pagination?.page || 1,
      totalPages: response.data.pagination?.pages || 1
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { ok: false, products: [], total: 0, page: 1, totalPages: 1 };
  }
};


const ProductDiscovery = () => {
  const [filters, setFilters] = useState({
    craftTraditions: [],
    culturalSignificance: [],
    materials: [],
    certifications: [],
    creationTime: [],
    priceRange: { min: '', max: '' }
  });
  
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  // Mock products data
  const mockProducts = [
    {
      id: 1,
      name: "Handwoven Indigo Textile",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        "https://images.unsplash.com/photo-1582582621959-48d27397dc69?w=400",
        "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400"
      ],
      price: 245,
      originalPrice: 320,
      rating: 4.8,
      reviewCount: 127,
      artisan: {
        name: "Kenji Yamamoto",
        region: "Kyoto, Japan",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      culturalContext: `Traditional Japanese indigo dyeing technique passed down through five generations, representing the deep connection between nature and craftsmanship in Japanese culture.`,
      craftTradition: "Japanese Textiles",
      creationTime: "3-4 weeks",
      materials: ["Organic Cotton", "Natural Indigo", "Traditional Dyes"],
      certifications: ["fair-trade", "organic", "handmade"],
      isNew: true,
      isFeatured: false,
      isWishlisted: false
    },
    {
      id: 2,
      name: "Terracotta Water Vessel",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?w=400",
      images: [
        "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?w=400",
        "https://images.pexels.com/photos/5691621/pexels-photo-5691621.jpeg?w=400"
      ],
      price: 89,
      rating: 4.6,
      reviewCount: 89,
      artisan: {
        name: "Priya Sharma",
        region: "Rajasthan, India",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg"
      },
      culturalContext: `Hand-thrown terracotta vessel using ancient Indian pottery techniques, designed for natural water cooling and purification in traditional households.`,
      craftTradition: "Indian Ceramics",
      creationTime: "1-2 weeks",
      materials: ["Natural Clay", "Mineral Glazes"],
      certifications: ["sustainable", "handmade"],
      isNew: false,
      isFeatured: true,
      isWishlisted: true
    },
    {
      id: 3,
      name: "Copper Hammered Bowl Set",
      image: "https://images.pixabay.com/photo/2020/04/10/17/43/copper-5026547_1280.jpg?w=400",
      images: [
        "https://images.pixabay.com/photo/2020/04/10/17/43/copper-5026547_1280.jpg?w=400"
      ],
      price: 156,
      rating: 4.9,
      reviewCount: 203,
      artisan: {
        name: "Carlos Mendoza",
        region: "Oaxaca, Mexico",
        avatar: "https://randomuser.me/api/portraits/men/67.jpg"
      },
      culturalContext: `Traditional Mexican metalwork featuring hand-hammered copper bowls, each piece reflecting the rich heritage of Oaxacan craftsmanship and ceremonial dining traditions.`,
      craftTradition: "Mexican Metalwork",
      creationTime: "2-3 weeks",
      materials: ["Pure Copper", "Traditional Tools"],
      certifications: ["fair-trade", "handmade"],
      isNew: false,
      isFeatured: false,
      isWishlisted: false
    },
    {
      id: 4,
      name: "Woven Grass Basket Collection",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400"
      ],
      price: 78,
      rating: 4.4,
      reviewCount: 156,
      artisan: {
        name: "Amara Okafor",
        region: "Lagos, Nigeria",
        avatar: "https://randomuser.me/api/portraits/women/23.jpg"
      },
      culturalContext: `Handwoven grass baskets using traditional African weaving techniques, perfect for storage and representing the communal spirit of African craftsmanship.`,
      craftTradition: "African Weaving",
      creationTime: "1-2 weeks",
      materials: ["Natural Grass", "Plant Dyes"],
      certifications: ["sustainable", "fair-trade", "handmade"],
      isNew: true,
      isFeatured: false,
      isWishlisted: false
    },
    {
      id: 5,
      name: "Alpaca Wool Throw Blanket",
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?w=400",
      images: [
        "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?w=400"
      ],
      price: 189,
      originalPrice: 245,
      rating: 4.7,
      reviewCount: 98,
      artisan: {
        name: "Isabella Rodriguez",
        region: "Cusco, Peru",
        avatar: "https://randomuser.me/api/portraits/women/34.jpg"
      },
      culturalContext: `Luxurious alpaca wool blanket woven using ancient Peruvian techniques, embodying the warmth and heritage of Andean textile traditions.`,
      craftTradition: "Peruvian Weaving",
      creationTime: "4-6 weeks",
      materials: ["Alpaca Wool", "Natural Dyes"],
      certifications: ["organic", "fair-trade", "handmade"],
      isNew: false,
      isFeatured: true,
      isWishlisted: true
    },
    {
      id: 6,
      name: "Leather Journal with Brass Clasp",
      image: "https://images.pixabay.com/photo/2016/03/27/07/32/book-1282309_1280.jpg?w=400",
      images: [
        "https://images.pixabay.com/photo/2016/03/27/07/32/book-1282309_1280.jpg?w=400"
      ],
      price: 67,
      rating: 4.5,
      reviewCount: 234,
      artisan: {
        name: "Hassan Al-Rashid",
        region: "Fez, Morocco",
        avatar: "https://randomuser.me/api/portraits/men/56.jpg"
      },
      culturalContext: `Hand-bound leather journal featuring traditional Moroccan leatherwork and brass detailing, perfect for capturing thoughts and memories.`,
      craftTradition: "Moroccan Leather",
      creationTime: "1-2 weeks",
      materials: ["Genuine Leather", "Brass", "Handmade Paper"],
      certifications: ["handmade", "sustainable"],
      isNew: false,
      isFeatured: false,
      isWishlisted: false
    }
  ];

  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [resultsCount, setResultsCount] = useState(mockProducts.length);

  useEffect(() => {
    // Simulate filtering logic
    let filtered = [...mockProducts];
    
    // Apply region filter
    if (selectedRegion) {
      const regionMap = {
        'japan': ['Japanese'],
        'india': ['Indian'],
        'mexico': ['Mexican'],
        'morocco': ['Moroccan'],
        'peru': ['Peruvian'],
        'kenya': ['African']
      };
      
      const regionKeywords = regionMap[selectedRegion] || [];
      filtered = filtered.filter(product => 
        regionKeywords.some(keyword => 
          product.craftTradition.includes(keyword) || 
          product.artisan.region.includes(keyword)
        )
      );
    }

    // Apply craft tradition filters
    if (filters.craftTraditions.length > 0) {
      filtered = filtered.filter(product =>
        filters.craftTraditions.some(tradition =>
          product.craftTradition.toLowerCase().includes(tradition.replace('-', ' '))
        )
      );
    }

    // Apply material filters
    if (filters.materials.length > 0) {
      filtered = filtered.filter(product =>
        filters.materials.some(material =>
          product.materials?.some(productMaterial =>
            productMaterial.toLowerCase().includes(material)
          )
        )
      );
    }

    // Apply certification filters
    if (filters.certifications.length > 0) {
      filtered = filtered.filter(product =>
        filters.certifications.some(cert =>
          product.certifications?.includes(cert)
        )
      );
    }

    // Apply price range filter
    if (filters.priceRange.min || filters.priceRange.max) {
      const min = parseFloat(filters.priceRange.min) || 0;
      const max = parseFloat(filters.priceRange.max) || Infinity;
      filtered = filtered.filter(product =>
        product.price >= min && product.price <= max
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      case 'cultural':
        filtered.sort((a, b) => b.isFeatured - a.isFeatured);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredProducts(filtered);
    setResultsCount(filtered.length);
  }, [filters, selectedRegion, sortBy]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      craftTraditions: [],
      culturalSignificance: [],
      materials: [],
      certifications: [],
      creationTime: [],
      priceRange: { min: '', max: '' }
    });
    setSelectedRegion(null);
  };

  // In ProductDiscovery.jsx, modify the wishlist toggle function:
const handleWishlistToggle = async (productId, isWishlisted) => {
  try {
    if (isWishlisted) {
      // Add to wishlist
      await API.post('/wishlist/items', { productId });
    } else {
      // Remove from wishlist - you'll need the wishlist item ID
      const wishlistResponse = await API.get('/wishlist');
      const wishlistItem = wishlistResponse.data.data.items.find(
        item => item.product._id === productId
      );
      if (wishlistItem) {
        await API.delete(`/wishlist/items/${wishlistItem._id}`);
      }
    }
    
    // Update local state
    setFilteredProducts(prev =>
      prev.map(product =>
        product._id === productId
          ? { ...product, isWishlisted }
          : product
      )
    );
  } catch (error) {
    console.error('Wishlist update failed:', error);
  }
};

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
    setIsQuickViewOpen(true);
  };

  const handleAddToCart = (productId, quantity) => {
    console.log(`Added product ${productId} to cart with quantity ${quantity}`);
    // Implement cart logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        {/* Filter Sidebar */}
        <FilterSidebar
          filters={filters}
          onFilterChange={handleFilterChange}
          onClearFilters={handleClearFilters}
          isOpen={isFilterOpen}
          onToggle={() => setIsFilterOpen(!isFilterOpen)}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-0">
          {/* Sorting Controls */}
          <SortingControls
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            resultsCount={resultsCount}
            onFilterToggle={() => setIsFilterOpen(!isFilterOpen)}
          />

          <div className="p-6">
            {/* Map Toggle */}
            <div className="mb-6">
              <Button
                variant="outline"
                onClick={() => setShowMap(!showMap)}
                className="flex items-center space-x-2"
              >
                <Icon name="Map" size={18} />
                <span>{showMap ? 'Hide' : 'Show'} Regional Map</span>
              </Button>
            </div>

            {/* Interactive Map */}
            {showMap && (
              <div className="mb-8">
                <InteractiveMap
                  onRegionSelect={setSelectedRegion}
                  selectedRegion={selectedRegion}
                />
              </div>
            )}

            {/* Active Filters Display */}
            {(Object.values(filters).some(filter => 
              Array.isArray(filter) ? filter.length > 0 : filter.min || filter.max
            ) || selectedRegion) && (
              <div className="mb-6 p-4 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">Active Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleClearFilters}
                    className="text-muted-foreground"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedRegion && (
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <span>Region: {selectedRegion}</span>
                      <button onClick={() => setSelectedRegion(null)}>
                        <Icon name="X" size={14} />
                      </button>
                    </span>
                  )}
                  {filters.craftTraditions.map(tradition => (
                    <span key={tradition} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <span>{tradition.replace('-', ' ')}</span>
                      <button onClick={() => handleFilterChange('craftTraditions', filters.craftTraditions.filter(t => t !== tradition))}>
                        <Icon name="X" size={14} />
                      </button>
                    </span>
                  ))}
                  {(filters.priceRange.min || filters.priceRange.max) && (
                    <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                      <span>
                        ${filters.priceRange.min || '0'} - ${filters.priceRange.max || '∞'}
                      </span>
                      <button onClick={() => handleFilterChange('priceRange', { min: '', max: '' })}>
                        <Icon name="X" size={14} />
                      </button>
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Product Grid */}
            <ProductGrid
              products={filteredProducts}
              viewMode={viewMode}
              onWishlistToggle={handleWishlistToggle}
              onQuickView={handleQuickView}
              loading={loading}
            />

            {/* Load More Button */}
            {filteredProducts.length > 0 && (
              <div className="mt-12 text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setLoading(true);
                    setTimeout(() => setLoading(false), 1000);
                  }}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Icon name="Loader2" size={18} className="animate-spin" />
                      Loading more crafts...
                    </>
                  ) : (
                    <>
                      <Icon name="Plus" size={18} />
                      Load More Crafts
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={isQuickViewOpen}
        onClose={() => {
          setIsQuickViewOpen(false);
          setQuickViewProduct(null);
        }}
        onAddToCart={handleAddToCart}
        onWishlistToggle={handleWishlistToggle}
      />
    </div>
  );
};

export default ProductDiscovery;