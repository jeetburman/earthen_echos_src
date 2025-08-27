import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import all components
import ProductImageGallery from './components/ProductImageGallery';
import ProductInfo from './components/ProductInfo';
import ArtisanStory from './components/ArtisanStory';
import CraftTechnique from './components/CraftTechnique';
import ProductSpecifications from './components/ProductSpecifications';
import StylingInspiration from './components/StylingInspiration';
import CustomerReviews from './components/CustomerReviews';
import RelatedProducts from './components/RelatedProducts';

const ProductDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Mock product data
  const productData = {
    id: "handwoven-kashmiri-carpet-001",
    name: "Handwoven Kashmiri Silk Carpet",
    traditionalName: "Kani Kari Qaleen",
    price: 2850,
    originalPrice: 3200,
    discount: 11,
    rating: 4.8,
    reviewCount: 127,
    culturalSignificance: `This exquisite Kashmiri carpet represents centuries of artistic heritage, traditionally woven for royal palaces. Each intricate pattern tells stories of Persian gardens and Mughal artistry, making it not just a floor covering but a piece of living history that connects your home to the rich cultural tapestry of Kashmir.`,
    variants: [
      { id: 1, name: "6x4 feet", price: 2850 },
      { id: 2, name: "8x6 feet", price: 4200 },
      { id: 3, name: "10x8 feet", price: 6800 }
    ],
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop&crop=entropy&cs=tinysrgb",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=800&fit=crop&crop=entropy&cs=tinysrgb"
    ],
    inStock: true,
    isNew: false,
    isAuthentic: true
  };

  const artisanData = {
    name: "Mohammad Yusuf Shah",
    location: "Srinagar, Kashmir",
    experience: 35,
    awards: 12,
    productsCount: 89,
    rating: 4.9,
    reviewCount: 234,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    story: `Master Mohammad Yusuf Shah comes from a family of carpet weavers spanning five generations. His grandfather served the Maharaja's court, and today he continues this legacy by training young artisans while preserving the authentic Kani weaving technique that makes each carpet a masterpiece.`,
    technique: `Specializes in the ancient Kani technique using wooden spools to create intricate patterns. Each carpet takes 8-12 months to complete, with over 400 knots per square inch, ensuring unparalleled quality and durability.`,
    impact: {
      familiesSupported: 15,
      treesPlanted: 120
    }
  };

  const techniqueData = {
    description: `The Kani weaving technique is a 500-year-old art form that uses small wooden spools called 'Kanis' to create intricate patterns. This labor-intensive process requires exceptional skill and patience, with master weavers spending months perfecting each piece.`,
    timeRequired: "8-12 months",
    skillLevel: "Master Artisan",
    heritage: "500+ years",
    materials: [
      { name: "Mulberry Silk", origin: "Kashmir Valley" },
      { name: "Natural Dyes", origin: "Himalayan Plants" },
      { name: "Cotton Warp", origin: "Organic Farms" },
      { name: "Kani Spools", origin: "Local Walnut Wood" }
    ],
    steps: [
      {
        title: "Design Planning",
        duration: "2-3 weeks",
        description: `Master artisans create detailed patterns on graph paper, translating traditional motifs into precise weaving instructions. Each design element is carefully planned to ensure perfect symmetry and cultural authenticity.`,
        tips: "Traditional patterns are passed down through generations, with each family having signature motifs.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
      },
      {
        title: "Warp Preparation",
        duration: "1 week",
        description: `High-quality cotton threads are carefully arranged on the loom, creating the foundation for the carpet. The tension must be perfectly balanced to ensure even weaving throughout the months-long process.`,
        tips: "The warp threads are treated with natural starch to increase durability during the weaving process.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
      },
      {
        title: "Kani Weaving",
        duration: "6-8 months",
        description: `Using hundreds of wooden Kani spools, artisans weave silk threads following the predetermined pattern. Each color change requires a different Kani, with complex designs using over 1000 spools simultaneously.`,
        tips: "Master weavers can identify the quality of silk just by touch, ensuring only the finest materials are used.",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=entropy"
      },
      {
        title: "Finishing & Quality Check",
        duration: "2-3 weeks",
        description: `The completed carpet undergoes meticulous quality inspection, with edges carefully finished and any imperfections corrected. Final washing and pressing prepare it for its new home.`,
        tips: "Each carpet is signed by the master weaver, serving as a certificate of authenticity and craftsmanship.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=entropy"
      }
    ],
    culturalContext: `Kashmiri carpet weaving represents the confluence of Persian, Central Asian, and Indian artistic traditions. These carpets were historically commissioned by Mughal emperors and served as diplomatic gifts, symbolizing the highest level of craftsmanship and cultural refinement. Today, they continue to be treasured as heirloom pieces that connect families to this rich heritage.`
  };

  const specificationsData = {
    dimensions: {
      length: "6 feet (183 cm)",
      width: "4 feet (122 cm)",
      height: "0.5 inches (1.3 cm)"
    },
    weight: "12 lbs (5.4 kg)",
    materials: {
      primary: "100% Mulberry Silk",
      secondary: "Cotton Foundation"
    },
    finish: "Hand-knotted with natural dyes",
    colorVariations: "Deep blues, ivory, gold accents",
    care: {
      cleaning: "Professional cleaning recommended",
      storage: "Flat storage in dry environment",
      maintenance: "Regular vacuuming with brush attachment"
    },
    durability: "50+ years with proper care",
    origin: {
      region: "Srinagar, Kashmir",
      tradition: "Kani Kari Weaving"
    },
    certification: "Geographical Indication (GI) Certified",
    artisanCode: "MYS-2024-001"
  };

  const inspirationData = [
    {
      title: "Traditional Living Room",
      category: "living",
      style: "Classic Traditional",
      roomSize: "Large (300+ sq ft)",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
      description: "Perfect centerpiece for a traditional living room setup",
      detailedDescription: `This stunning Kashmiri carpet serves as the perfect anchor for a traditional living room, complementing rich wooden furniture and warm earth tones. The intricate patterns draw the eye while the silk's natural sheen adds luxury to the space.`,
      products: [
        { name: "Kashmiri Silk Carpet", price: 2850 },
        { name: "Matching Cushion Covers", price: 180 },
        { name: "Traditional Table Runner", price: 120 }
      ]
    },
    {
      title: "Modern Eclectic Dining",
      category: "dining",
      style: "Modern Eclectic",
      roomSize: "Medium (200-300 sq ft)",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
      description: "Adds cultural depth to contemporary dining spaces",
      detailedDescription: `In a modern dining room, this traditional carpet creates beautiful contrast with contemporary furniture, adding warmth and cultural storytelling to clean, minimalist lines.`,
      products: [
        { name: "Kashmiri Silk Carpet", price: 2850 },
        { name: "Brass Serving Tray", price: 95 },
        { name: "Handcrafted Centerpiece", price: 150 }
      ]
    },
    {
      title: "Cozy Reading Nook",
      category: "bedroom",
      style: "Bohemian Chic",
      roomSize: "Small (100-200 sq ft)",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&crop=entropy",
      description: "Creates an intimate, culturally rich reading space",
      detailedDescription: `Transform any corner into a luxurious reading retreat with this exquisite carpet as the foundation, paired with comfortable seating and soft lighting.`,
      products: [
        { name: "Kashmiri Silk Carpet", price: 2850 },
        { name: "Floor Cushions", price: 85 },
        { name: "Reading Lamp", price: 220 }
      ]
    }
  ];

  const reviewsData = [
    {
      name: "Sarah Mitchell",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "2024-07-15",
      title: "Absolutely Stunning Craftsmanship",
      content: `This carpet exceeded all my expectations. The intricate patterns are mesmerizing, and you can truly feel the months of work that went into creating it. The silk has a beautiful sheen that changes with the light throughout the day. It's become the centerpiece of our living room and a conversation starter for every guest.`,
      culturalInsight: `Learning about the Kani technique and the artisan's family history made this purchase so much more meaningful. It's not just a carpet; it's a piece of living heritage in our home.`,
      verified: true,
      helpful: 23,
      photos: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop"
      ]
    },
    {
      name: "David Chen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      date: "2024-07-10",
      title: "Investment in Cultural Heritage",
      content: `As someone who appreciates traditional crafts, this carpet is exceptional. The quality is museum-level, and knowing that my purchase supports the artisan's family and preserves this ancient technique makes it even more special. The packaging was also beautiful and culturally appropriate.`,
      verified: true,
      helpful: 18,
      photos: []
    },
    {
      name: "Emily Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 4,
      date: "2024-07-05",
      title: "Beautiful but Requires Care",
      content: `The carpet is absolutely gorgeous and the craftsmanship is incredible. The colors are rich and the silk feels luxurious. My only note is that it does require careful maintenance, but that's expected with such a high-quality handmade piece. The care instructions provided were very helpful.`,
      verified: true,
      helpful: 12,
      photos: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop&crop=entropy"
      ]
    }
  ];

  const relatedProductsData = [
    {
      name: "Handwoven Pashmina Shawl",
      artisan: "Fatima Begum",
      price: 450,
      originalPrice: 520,
      discount: 13,
      rating: 4.7,
      reviewCount: 89,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
      culturalTag: "Kashmir Heritage",
      inStock: true,
      isNew: true,
      isAuthentic: true
    },
    {
      name: "Traditional Copper Samovar",
      artisan: "Abdul Rahman",
      price: 320,
      rating: 4.6,
      reviewCount: 45,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
      culturalTag: "Kashmiri Craft",
      inStock: true,
      isAuthentic: true
    },
    {
      name: "Embroidered Silk Cushion Set",
      artisan: "Zainab Shah",
      price: 180,
      originalPrice: 220,
      discount: 18,
      rating: 4.8,
      reviewCount: 67,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=entropy",
      culturalTag: "Traditional Decor",
      inStock: false,
      isAuthentic: true
    },
    {
      name: "Walnut Wood Jewelry Box",
      artisan: "Ghulam Hassan",
      price: 95,
      rating: 4.5,
      reviewCount: 34,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=entropy",
      culturalTag: "Wood Carving",
      inStock: true,
      isNew: true,
      isAuthentic: true
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Eye' },
    { id: 'technique', name: 'Craft Technique', icon: 'Wrench' },
    { id: 'specifications', name: 'Specifications', icon: 'FileText' },
    { id: 'styling', name: 'Styling Ideas', icon: 'Sparkles' },
    { id: 'reviews', name: 'Reviews', icon: 'MessageSquare' }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading product details...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumb */}
      <div className="pt-20 pb-4 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/homepage" className="hover:text-primary transition-colors duration-200">Home</a>
            <Icon name="ChevronRight" size={16} />
            <a href="/product-discovery" className="hover:text-primary transition-colors duration-200">Products</a>
            <Icon name="ChevronRight" size={16} />
            <span className="text-foreground">Handwoven Kashmiri Silk Carpet</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div>
            <ProductImageGallery 
              images={productData.images} 
              productName={productData.name}
            />
          </div>

          {/* Product Information */}
          <div>
            <ProductInfo product={productData} />
          </div>
        </div>

        {/* Artisan Story */}
        <div className="mb-8">
          <ArtisanStory artisan={artisanData} />
        </div>

        {/* Tabbed Content */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="border-b border-border mb-8">
            <nav className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4 flex items-center">
                    <Icon name="Info" size={20} className="mr-2 text-accent" />
                    Product Overview
                  </h3>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      This exquisite Kashmiri silk carpet represents the pinnacle of traditional craftsmanship, 
                      combining centuries-old techniques with contemporary elegance. Each piece is a testament 
                      to the skill and dedication of master artisans who have preserved this ancient art form 
                      through generations.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      The intricate Kani weaving technique used to create this masterpiece involves hundreds 
                      of wooden spools and months of meticulous work. The result is a carpet of unparalleled 
                      beauty and durability that will grace your home for generations to come.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <Icon name="Award" size={24} className="mx-auto mb-2 text-accent" />
                        <h4 className="font-medium text-foreground">Premium Quality</h4>
                        <p className="text-sm text-muted-foreground">100% Mulberry Silk</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
                        <h4 className="font-medium text-foreground">Handcrafted</h4>
                        <p className="text-sm text-muted-foreground">8-12 months creation</p>
                      </div>
                      <div className="bg-muted rounded-lg p-4 text-center">
                        <Icon name="Shield" size={24} className="mx-auto mb-2 text-secondary" />
                        <h4 className="font-medium text-foreground">Authentic</h4>
                        <p className="text-sm text-muted-foreground">GI Certified</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technique' && (
              <CraftTechnique technique={techniqueData} />
            )}

            {activeTab === 'specifications' && (
              <ProductSpecifications specifications={specificationsData} />
            )}

            {activeTab === 'styling' && (
              <StylingInspiration inspirations={inspirationData} />
            )}

            {activeTab === 'reviews' && (
              <CustomerReviews 
                reviews={reviewsData}
                averageRating={productData.rating}
                totalReviews={productData.reviewCount}
              />
            )}
          </div>
        </div>

        {/* Related Products */}
        <RelatedProducts 
          products={relatedProductsData}
          title="You Might Also Like"
        />
      </div>

      {/* Sticky Add to Cart Bar (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 z-40">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="font-bold text-primary text-lg">${productData.price}</div>
            <div className="text-sm text-muted-foreground">Free shipping</div>
          </div>
          <Button variant="default" className="flex-shrink-0">
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Footer Spacer for Mobile */}
      <div className="lg:hidden h-20"></div>
    </div>
  );
};

export default ProductDetail;