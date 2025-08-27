import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WelcomeSection from './components/WelcomeSection';
import OrderHistoryCard from './components/OrderHistoryCard';
import ArtisanFollowCard from './components/ArtisanFollowCard';
import WishlistSection from './components/WishlistSection';
import CulturalLearningProgress from './components/CulturalLearningProgress';
import ImpactMetrics from './components/ImpactMetrics';
import RecommendationsSection from './components/RecommendationsSection';
import QuickActions from './components/QuickActions';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import axios from "axios";



const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentLanguage, setCurrentLanguage] = useState('en');


  useEffect(() => {
  const savedLanguage = localStorage.getItem("language") || "en";
  setCurrentLanguage(savedLanguage);

  const token = localStorage.getItem("token");
  if (token) {
    axios
      .get("http://localhost:8000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setUserData(res.data.user); // update with real user
      })
      .catch((err) => {
        console.error("Auth check failed:", err.response?.data || err.message);
        // optional: logout user if token invalid
        localStorage.removeItem("token");
        window.location.href = "/login";
      });
  }
}, []);

 const [userData, setUserData] = useState(null);

  const [userStats, setUserStats] = useState({});

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  axios.get("http://localhost:8000/api/users/stats", {
    headers: { Authorization: `Bearer ${token}` },
  })
  .then(res => setUserStats(res.data))
  .catch(err => {
    console.error("Failed to fetch user stats:", err.response?.data || err.message);
  });
}, []);


  // const userStats = {
  //   totalOrders: 24,
  //   artisansSupported: 18,
  //   wishlistItems: 12
  // };
  const [orderHistory, setOrderHistory] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [followedArtisans, setFollowedArtisans] = useState([]);
  useEffect(() => {
  const token = localStorage.getItem("token");
  if (!token) return;

  axios.get("http://localhost:8000/api/orders/my", {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => setOrderHistory(res.data.orders));

  axios.get("http://localhost:8000/api/wishlist/my", {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => setWishlistItems(res.data.items));

  axios.get("http://localhost:8000/api/artisans/following", {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => setFollowedArtisans(res.data.artisans));
}, []);


  // const orderHistory = [
  //   {
  //     id: "ORDER-0001",
  //     date: "January 15, 2025",
  //     status: "delivered",
  //     total: "100.00",
  //     items: [
  //       {
  //         name: "Demo Product",
  //         artisan: "Demo Artisan",
  //         price: "100.00",
  //         image: "https://dummyimage.com/100x100/cccccc/000000.png&text=Demo+Product"
  //       },
  //       {
  //         name: "Ceramic Tea Set",
  //         artisan: "Maria Santos",
  //         price: "144.50",
  //         image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop"
  //       }
  //     ]
  //   },
  //   {
  //     id: "EE-2024-002",
  //     date: "January 10, 2025",
  //     status: "shipped",
  //     total: "156.75",
  //     items: [
  //       {
  //         name: "Bamboo Wind Chimes",
  //         artisan: "Lila Patel",
  //         price: "78.25",
  //         image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop"
  //       },
  //       {
  //         name: "Embroidered Wall Hanging",
  //         artisan: "Ana Rodriguez",
  //         price: "78.50",
  //         image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop"
  //       }
  //     ]
  //   }
  // ];

  // const followedArtisans = [
  //   {
  //     name: "Kenji Nakamura",
  //     craft: "Traditional Weaving",
  //     location: "Kyoto, Japan",
  //     avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  //     rating: 4.9,
  //     totalProducts: 45,
  //     followers: 1240,
  //     latestUpdate: {
  //       title: "New Indigo Collection Available",
  //       description: "Featuring traditional shibori techniques passed down through generations",
  //       timeAgo: "2 days ago"
  //     },
  //     recentProducts: [
  //       {
  //         name: "Indigo Scarf",
  //         price: "145.00",
  //         image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop"
  //       },
  //       {
  //         name: "Woven Placemat",
  //         price: "65.00",
  //         image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop"
  //       },
  //       {
  //         name: "Table Runner",
  //         price: "89.00",
  //         image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop"
  //       }
  //     ]
  //   },
  //   {
  //     name: "Maria Santos",
  //     craft: "Ceramic Pottery",
  //     location: "Oaxaca, Mexico",
  //     avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  //     rating: 4.8,
  //     totalProducts: 32,
  //     followers: 890,
  //     latestUpdate: {
  //       title: "Workshop Series Starting Soon",
  //       description: "Learn traditional Zapotec pottery techniques in virtual sessions",
  //       timeAgo: "1 week ago"
  //     },
  //     recentProducts: [
  //       {
  //         name: "Tea Set",
  //         price: "144.50",
  //         image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop"
  //       },
  //       {
  //         name: "Serving Bowl",
  //         price: "78.00",
  //         image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop"
  //       },
  //       {
  //         name: "Vase",
  //         price: "95.00",
  //         image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop"
  //       }
  //     ]
  //   }
  // ];

  // const wishlistItems = [
  //   {
  //     id: 1,
  //     name: "Handcrafted Wooden Jewelry Box",
  //     artisan: "David Kim",
  //     price: "125.00",
  //     originalPrice: "145.00",
  //     rating: 4.7,
  //     image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=300&h=300&fit=crop",
  //     category: "gift-ideas",
  //     priceDropped: true,
  //     limitedStock: false
  //   },
  //   {
  //     id: 2,
  //     name: "Traditional Batik Wall Art",
  //     artisan: "Sari Wijaya",
  //     price: "89.50",
  //     rating: 4.9,
  //     image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
  //     category: "cultural-interests",
  //     priceDropped: false,
  //     limitedStock: true
  //   },
  //   {
  //     id: 3,
  //     name: "Copper Water Vessel Set",
  //     artisan: "Raj Patel",
  //     price: "167.00",
  //     rating: 4.6,
  //     image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=300&h=300&fit=crop",
  //     category: "future-purchases",
  //     priceDropped: false,
  //     limitedStock: false
  //   }
  // ];

  const learningData = {
    completedLessons: 18,
    totalLessons: 25,
    certificatesEarned: 3,
    culturesExplored: 8,
    techniquesLearned: 12,
    recentActivities: [
      {
        type: "lesson",
        title: "Japanese Shibori Techniques",
        description: "Learned traditional indigo dyeing methods",
        timeAgo: "3 days ago",
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=100&h=100&fit=crop"
      },
      {
        type: "technique",
        title: "Mexican Talavera Pottery",
        description: "Mastered basic glazing techniques",
        timeAgo: "1 week ago",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop"
      },
      {
        type: "certificate",
        title: "Cultural Preservation Advocate",
        description: "Earned for supporting traditional crafts",
        timeAgo: "2 weeks ago"
      }
    ]
  };

  const impactData = {
    artisansSupported: 18,
    traditionsSupported: 8,
    sustainabilityScore: 87,
    communityImpact: 45,
    memberSince: "March 2023"
  };

  const recommendations = [
    {
      type: "artisan",
      title: "Elena Vasquez",
      location: "Guatemala",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      reason: "Based on your interest in traditional weaving and support for women artisans",
      views: 1240
    },
    {
      type: "product",
      title: "Handwoven Alpaca Throw",
      artisan: "Carlos Mendoza",
      price: "189.00",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=150&h=150&fit=crop",
      reason: "Complements your recent textile purchases and supports Andean weaving traditions",
      views: 856
    },
    {
      type: "product",
      title: "Ceramic Incense Holder Set",
      artisan: "Yuki Tanaka",
      price: "67.50",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop",
      reason: "Perfect addition to your ceramic collection from Japanese artisans",
      views: 432
    }
  ];

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'Home' },
    { id: 'orders', name: 'Orders', icon: 'Package' },
    { id: 'artisans', name: 'My Artisans', icon: 'Users' },
    { id: 'wishlist', name: 'Wishlist', icon: 'Heart' },
    { id: 'learning', name: 'Learning', icon: 'BookOpen' },
    { id: 'impact', name: 'Impact', icon: 'Award' },
    { id: 'settings', name: 'Settings', icon: 'Settings' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Recent Orders
                  </h2>
                  <div className="space-y-4">
                    {orderHistory.slice(0, 2).map((order, index) => (
                      <OrderHistoryCard key={index} order={order} />
                    ))}
                  </div>
                </div>
                <RecommendationsSection recommendations={recommendations.slice(0, 2)} />
              </div>
              <div className="space-y-6">
                <QuickActions />
                <ImpactMetrics impactData={impactData} />
              </div>
            </div>
          </div>
        );
      case 'orders':
        return (
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Order History
            </h2>
            <div className="space-y-4">
              {orderHistory.map((order, index) => (
                <OrderHistoryCard key={index} order={order} />
              ))}
            </div>
          </div>
        );
      case 'artisans':
        return (
          <div>
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-6">
              Following {followedArtisans.length} Artisans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {followedArtisans.map((artisan, index) => (
                <ArtisanFollowCard key={index} artisan={artisan} />
              ))}
            </div>
          </div>
        );
      case 'wishlist':
        return <WishlistSection wishlistItems={wishlistItems} />;
      case 'learning':
        return <CulturalLearningProgress learningData={learningData} />;
      case 'impact':
        return <ImpactMetrics impactData={impactData} />;
      case 'settings':
        return (
          <div className="bg-card border border-border rounded-lg p-6">
            <h2 className="font-heading text-2xl font-semibold text-card-foreground mb-6">
              Account Settings
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-card-foreground mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Full Name
                      </label>
                      <div className="text-sm text-muted-foreground">{userData.name}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Email
                      </label>
                      <div className="text-sm text-muted-foreground">{userData.email}</div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-card-foreground mb-2">
                        Location
                      </label>
                      <div className="text-sm text-muted-foreground">{userData.location}</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-card-foreground mb-4">Preferences</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-card-foreground">Email Notifications</span>
                      <Button variant="ghost" size="sm">
                        <Icon name="Settings" size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-card-foreground">Privacy Settings</span>
                      <Button variant="ghost" size="sm">
                        <Icon name="Shield" size={16} />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-card-foreground">Payment Methods</span>
                      <Button variant="ghost" size="sm">
                        <Icon name="CreditCard" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <WelcomeSection user={userData} stats={userStats} /> */}
          {userData ? (<WelcomeSection user={userData} stats={userStats} />) : (
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="animate-pulse h-16 w-16 rounded-full bg-muted mb-4" />
          <div className="h-4 bg-muted rounded w-1/3 mb-2" />
          <div className="h-4 bg-muted rounded w-1/4" />
        </div>
      )}

          
          {/* Navigation Tabs */}
          <div className="bg-card border border-border rounded-lg mb-8 overflow-hidden">
            <div className="flex overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-primary border-primary bg-primary/5' :'text-muted-foreground border-transparent hover:text-card-foreground hover:bg-muted/50'
                  }`}
                >
                  <Icon name={tab.icon} size={18} />
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="animate-fade-up">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;