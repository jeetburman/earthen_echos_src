import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showWriteReview, setShowWriteReview] = useState(false);

  const ratingDistribution = [
    { stars: 5, count: 156, percentage: 78 },
    { stars: 4, count: 32, percentage: 16 },
    { stars: 3, count: 8, percentage: 4 },
    { stars: 2, count: 3, percentage: 1.5 },
    { stars: 1, count: 1, percentage: 0.5 }
  ];

  const filterOptions = [
    { id: 'all', name: 'All Reviews', count: totalReviews },
    { id: 'verified', name: 'Verified Purchase', count: 180 },
    { id: 'photos', name: 'With Photos', count: 89 },
    { id: 'cultural', name: 'Cultural Context', count: 45 }
  ];

  const filteredReviews = reviews.filter(review => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'verified') return review.verified;
    if (selectedFilter === 'photos') return review.photos && review.photos.length > 0;
    if (selectedFilter === 'cultural') return review.culturalInsight;
    return true;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-heading font-semibold text-foreground mb-2 flex items-center">
            <Icon name="MessageSquare" size={20} className="mr-2 text-accent" />
            Customer Reviews
          </h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={16}
                    className={i < Math.floor(averageRating) ? "fill-current text-accent" : "text-muted-foreground"}
                  />
                ))}
              </div>
              <span className="font-medium text-foreground">{averageRating}</span>
              <span className="text-muted-foreground">({totalReviews} reviews)</span>
            </div>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          iconName="Edit3" 
          iconPosition="left"
          onClick={() => setShowWriteReview(true)}
        >
          Write Review
        </Button>
      </div>

      {/* Rating Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <h4 className="font-medium text-foreground mb-4">Rating Breakdown</h4>
          <div className="space-y-2">
            {ratingDistribution.map((rating) => (
              <div key={rating.stars} className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 w-12">
                  <span className="text-sm text-muted-foreground">{rating.stars}</span>
                  <Icon name="Star" size={12} className="text-accent" />
                </div>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div 
                    className="bg-accent h-2 rounded-full transition-all duration-300"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-muted-foreground w-8">{rating.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-medium text-foreground mb-4">Review Highlights</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Heart" size={16} className="text-accent" />
                <span className="font-medium text-foreground text-sm">Most Loved</span>
              </div>
              <p className="text-sm text-muted-foreground">
                "Exceptional craftsmanship and beautiful cultural storytelling"
              </p>
            </div>
            
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Award" size={16} className="text-secondary" />
                <span className="font-medium text-foreground text-sm">Quality Praised</span>
              </div>
              <p className="text-sm text-muted-foreground">
                "Authentic materials and attention to traditional techniques"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedFilter(option.id)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                selectedFilter === option.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {option.name} ({option.count})
            </button>
          ))}
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
          <option value="helpful">Most Helpful</option>
        </select>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {filteredReviews.map((review, index) => (
          <div key={index} className="border-b border-border pb-6 last:border-b-0 last:pb-0">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h5 className="font-medium text-foreground">{review.name}</h5>
                      {review.verified && (
                        <div className="flex items-center space-x-1 bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                          <Icon name="ShieldCheck" size={12} />
                          <span className="text-xs font-medium">Verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={14}
                            className={i < review.rating ? "fill-current text-accent" : "text-muted-foreground"}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {formatDate(review.date)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <h6 className="font-medium text-foreground mb-2">{review.title}</h6>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {review.content}
                  </p>
                </div>

                {review.culturalInsight && (
                  <div className="bg-accent/10 rounded-lg p-3 mb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon name="Sparkles" size={16} className="text-accent" />
                      <span className="font-medium text-accent text-sm">Cultural Insight</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {review.culturalInsight}
                    </p>
                  </div>
                )}

                {review.photos && review.photos.length > 0 && (
                  <div className="flex space-x-2 mb-3">
                    {review.photos.map((photo, photoIndex) => (
                      <div key={photoIndex} className="w-16 h-16 rounded-lg overflow-hidden">
                        <Image
                          src={photo}
                          alt={`Review photo ${photoIndex + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors duration-200">
                    <Icon name="ThumbsUp" size={14} />
                    <span>Helpful ({review.helpful})</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors duration-200">
                    <Icon name="MessageCircle" size={14} />
                    <span>Reply</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-primary transition-colors duration-200">
                    <Icon name="Flag" size={14} />
                    <span>Report</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center mt-6">
        <Button variant="outline" iconName="ChevronDown" iconPosition="right">
          Load More Reviews
        </Button>
      </div>

      {/* Write Review Modal */}
      {showWriteReview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-heading font-semibold text-foreground">Write a Review</h3>
              <button
                onClick={() => setShowWriteReview(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors duration-200"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Overall Rating
                  </label>
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <button key={i} className="p-1">
                        <Icon name="Star" size={24} className="text-muted-foreground hover:text-accent transition-colors duration-200" />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Review Title
                  </label>
                  <input
                    type="text"
                    placeholder="Summarize your experience"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Review
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share your thoughts about this product..."
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>
                
                <div className="flex justify-end space-x-3">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowWriteReview(false)}
                  >
                    Cancel
                  </Button>
                  <Button variant="default">
                    Submit Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviews;