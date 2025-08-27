import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TrendingCrafts = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [trendingCrafts, setTrendingCrafts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingCrafts = async () => {
      try {
        const res = await fetch('http://localhost:8000/api/trending-crafts?page=1&limit=6');
        const data = await res.json();
        if (data.ok) {
          setTrendingCrafts(data.crafts);
        }
      } catch (err) {
        console.error('Error fetching trending crafts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingCrafts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading trending crafts...</p>;

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="TrendingUp" size={32} className="text-primary" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Trending Crafts
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the most sought-after handcrafted pieces, each carrying the soul of its maker and the wisdom of generations
          </p>
        </div>

        {/* Crafts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {trendingCrafts.map((craft) => (
            <div
              key={craft._id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 transform hover:-translate-y-2 card-handcrafted"
              onMouseEnter={() => setHoveredCard(craft._id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={craft.image}
                  alt={craft.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Icon name="Flame" size={14} />
                  <span>Trending</span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                  <Icon name="Star" size={14} className="text-yellow-500 fill-current" />
                  <span className="text-foreground">{craft.rating}</span>
                </div>
                <div className={`cultural-overlay ${hoveredCard === craft._id ? 'active' : ''}`}>
                  <div className="space-y-3">
                    <h4 className="font-heading text-lg font-semibold">Cultural Heritage</h4>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{craft.cultural_significance}</p>
                    <div className="flex items-center justify-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1">
                        <Icon name="MapPin" size={12} />
                        <span>{craft.region}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Users" size={12} />
                        <span>{craft.artisan_count} artisans</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-2">{craft.name}</h3>
                  <p className="text-primary font-semibold text-lg">${craft.price}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="MapPin" size={16} />
                    <span>{craft.region}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Hammer" size={16} />
                    <span>{craft.technique}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-accent">
                    <Icon name="TrendingUp" size={16} />
                    <span>{craft.trending_reason}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={14} className="text-yellow-500" />
                      <span>{craft.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>{craft.reviews}</span>
                    </div>
                  </div>
                  <Link to="/product-discovery">
                    <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary">
                      <Icon name="ArrowRight" size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/product-discovery">
            <Button variant="outline" className="px-8 py-3">
              <Icon name="Grid" size={20} />
              <span className="ml-2">Explore All Crafts</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingCrafts;
