import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedArtisan = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const featuredArtisan = {
    id: 1,
    name: "Meera Kumari",
    craft: "Blue Pottery Master",
    location: "Jaipur, Rajasthan",
    experience: "25+ years",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    workshop_image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg",
    story: `Meera Kumari learned the ancient art of blue pottery from her grandmother at the age of 12.\nToday, she leads a cooperative of 15 women artisans, preserving this 400-year-old craft\nwhile creating contemporary designs that speak to modern homes.`,
    signature_pieces: [
      {
        id: 1,
        name: "Lotus Bowl Set",
        image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg",
        price: "$85"
      },
      {
        id: 2,
        name: "Decorative Vase",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
        price: "$120"
      },
      {
        id: 3,
        name: "Tea Set Collection",
        image: "https://images.pixabay.com/photo/2017/08/01/11/48/pottery-2564975_1280.jpg",
        price: "$150"
      }
    ],
    achievements: [
      "UNESCO Craft Excellence Award 2022",
      "National Handicrafts Award 2020",
      "Featured in Vogue India 2023"
    ],
    impact: {
      pieces_created: 2847,
      artisans_trained: 15,
      families_supported: 8,
      years_active: 25
    },
    video_intro: "Watch Meera\'s hands transform clay into art",
    quote: `"Every piece I create carries the dreams of my grandmother and the hopes of my daughters.\nThis is not just pottery - it's our living heritage."`
  };

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Icon name="Award" size={32} className="text-accent" />
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-foreground">
              Featured Artisan Spotlight
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This week, we celebrate the extraordinary craftsmanship and cultural preservation efforts of our master artisans
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Artisan Story */}
          <div className="space-y-8">
            {/* Artisan Profile */}
            <div className="flex items-start space-x-6">
              <div className="relative">
                <Image
                  src={featuredArtisan.avatar}
                  alt={featuredArtisan.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-primary/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-accent text-accent-foreground rounded-full p-2">
                  <Icon name="Award" size={16} />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-3xl font-heading font-bold text-foreground mb-2">
                  {featuredArtisan.name}
                </h3>
                <p className="text-xl text-primary font-semibold mb-1">
                  {featuredArtisan.craft}
                </p>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Icon name="MapPin" size={16} />
                    <span>{featuredArtisan.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} />
                    <span>{featuredArtisan.experience}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                Her Story
              </h4>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-6">
                {featuredArtisan.story}
              </p>
              
              {/* Quote */}
              <blockquote className="border-l-4 border-primary pl-6 italic text-foreground font-heading text-lg">
                {featuredArtisan.quote}
              </blockquote>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h4 className="text-xl font-heading font-semibold text-foreground">
                Recognition & Awards
              </h4>
              <div className="space-y-3">
                {featuredArtisan.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Trophy" size={16} className="text-accent" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">
                  {featuredArtisan.impact.pieces_created.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Pieces Created</div>
              </div>
              
              <div className="text-center p-4 bg-secondary/10 rounded-xl">
                <div className="text-2xl font-bold text-secondary mb-1">
                  {featuredArtisan.impact.artisans_trained}
                </div>
                <div className="text-sm text-muted-foreground">Artisans Trained</div>
              </div>
              
              <div className="text-center p-4 bg-accent/10 rounded-xl">
                <div className="text-2xl font-bold text-accent mb-1">
                  {featuredArtisan.impact.families_supported}
                </div>
                <div className="text-sm text-muted-foreground">Families Supported</div>
              </div>
              
              <div className="text-center p-4 bg-primary/10 rounded-xl">
                <div className="text-2xl font-bold text-primary mb-1">
                  {featuredArtisan.impact.years_active}
                </div>
                <div className="text-sm text-muted-foreground">Years Active</div>
              </div>
            </div>
          </div>

          {/* Right: Workshop & Signature Pieces */}
          <div className="space-y-8">
            {/* Workshop Video/Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <Image
                src={featuredArtisan.workshop_image}
                alt="Meera's Workshop"
                className="w-full h-80 object-cover"
              />
              
              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                  className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200 group"
                >
                  <Icon 
                    name={isVideoPlaying ? "Pause" : "Play"} 
                    size={32} 
                    className="text-primary group-hover:scale-110 transition-transform duration-200" 
                  />
                </button>
              </div>
              
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium text-lg text-shadow-warm">
                  {featuredArtisan.video_intro}
                </p>
              </div>
            </div>

            {/* Signature Pieces */}
            <div className="space-y-6">
              <h4 className="text-xl font-heading font-semibold text-foreground">
                Signature Pieces
              </h4>
              
              <div className="grid grid-cols-3 gap-4">
                {featuredArtisan.signature_pieces.map((piece) => (
                  <Link 
                    key={piece.id} 
                    to="/product-detail"
                    className="group block"
                  >
                    <div className="bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1">
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={piece.image}
                          alt={piece.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3">
                        <h5 className="font-medium text-foreground text-sm mb-1 line-clamp-2">
                          {piece.name}
                        </h5>
                        <p className="text-primary font-semibold text-sm">
                          {piece.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/product-discovery" className="flex-1">
                <Button variant="default" fullWidth>
                  <Icon name="ShoppingBag" size={20} />
                  <span className="ml-2">Shop Meera's Collection</span>
                </Button>
              </Link>
              
              <Button variant="outline" className="flex-1">
                <Icon name="Heart" size={20} />
                <span className="ml-2">Follow Artisan</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtisan;