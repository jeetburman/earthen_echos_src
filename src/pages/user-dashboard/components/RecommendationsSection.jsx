import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendationsSection = ({ recommendations }) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-card-foreground">
          Recommended for You
        </h2>
        <Button variant="ghost" size="sm">
          <Icon name="RefreshCw" size={16} />
          <span className="ml-2">Refresh</span>
        </Button>
      </div>

      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <div key={index} className="border border-border rounded-lg p-4 hover:shadow-warm transition-all duration-300">
            <div className="flex items-start gap-4">
              <Image
                src={rec.image}
                alt={rec.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-medium text-card-foreground mb-1">
                      {rec.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {rec.type === 'artisan' ? `Artisan from ${rec.location}` : `by ${rec.artisan}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Icon name="Star" size={14} className="fill-current text-accent" />
                    <span className="text-muted-foreground">{rec.rating}</span>
                  </div>
                </div>

                <div className="bg-accent/10 border border-accent/20 rounded-lg p-3 mb-3">
                  <div className="flex items-start gap-2">
                    <Icon name="Lightbulb" size={16} className="text-accent mt-0.5" />
                    <div>
                      <h4 className="font-medium text-card-foreground text-sm mb-1">
                        Why we recommend this
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {rec.reason}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {rec.type === 'product' && (
                      <span className="font-heading font-semibold text-card-foreground">
                        ${rec.price}
                      </span>
                    )}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Icon name="Eye" size={12} />
                      <span>{rec.views} views</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="Eye" size={14} />
                      <span className="ml-1">View</span>
                    </Button>
                    {rec.type === 'artisan' ? (
                      <Button variant="ghost" size="sm">
                        <Icon name="UserPlus" size={14} />
                        <span className="ml-1">Follow</span>
                      </Button>
                    ) : (
                      <Button variant="ghost" size="sm">
                        <Icon name="Heart" size={14} />
                        <span className="ml-1">Save</span>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Button variant="outline">
          <Icon name="Plus" size={16} />
          <span className="ml-2">View More Recommendations</span>
        </Button>
      </div>
    </div>
  );
};

export default RecommendationsSection;