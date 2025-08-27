import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8956A' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Where Stories Live in
                <span className="text-primary block">Every Thread</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Earthen Echoes bridges the timeless wisdom of traditional artisans with conscious consumers who understand that every handcrafted piece carries the soul of its maker and the heritage of generations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Discover Our Mission
                <div className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </div>
              </Button>
              <Button variant="outline" size="lg">
                Meet Our Artisans
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary font-heading">2,500+</div>
                <div className="text-sm text-muted-foreground">Artisans Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-secondary font-heading">150+</div>
                <div className="text-sm text-muted-foreground">Traditions Preserved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent font-heading">50+</div>
                <div className="text-sm text-muted-foreground">Communities Empowered</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=700&fit=crop"
                alt="Traditional artisan crafting pottery with focused dedication"
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-6 shadow-warm max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">EE</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Cultural Bridge</div>
                  <div className="text-sm text-muted-foreground">Since 2019</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;