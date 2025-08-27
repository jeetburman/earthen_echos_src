import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CulturalLearningProgress = ({ learningData }) => {
  const progressPercentage = (learningData.completedLessons / learningData.totalLessons) * 100;

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-card-foreground">
          Cultural Learning Journey
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="BookOpen" size={16} />
          <span>{learningData.completedLessons}/{learningData.totalLessons} lessons</span>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-card-foreground">Overall Progress</span>
          <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary rounded-full h-2 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
          <Icon name="Award" size={24} className="text-primary mx-auto mb-2" />
          <div className="text-2xl font-heading font-semibold text-primary mb-1">
            {learningData.certificatesEarned}
          </div>
          <div className="text-sm text-muted-foreground">Certificates</div>
        </div>
        <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 text-center">
          <Icon name="Globe" size={24} className="text-secondary mx-auto mb-2" />
          <div className="text-2xl font-heading font-semibold text-secondary mb-1">
            {learningData.culturesExplored}
          </div>
          <div className="text-sm text-muted-foreground">Cultures</div>
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 text-center">
          <Icon name="Palette" size={24} className="text-accent mx-auto mb-2" />
          <div className="text-2xl font-heading font-semibold text-accent mb-1">
            {learningData.techniquesLearned}
          </div>
          <div className="text-sm text-muted-foreground">Techniques</div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-medium text-card-foreground mb-3">Recent Learning Activities</h3>
        {learningData.recentActivities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              activity.type === 'lesson' ? 'bg-primary/20 text-primary' :
              activity.type === 'technique'? 'bg-secondary/20 text-secondary' : 'bg-accent/20 text-accent'
            }`}>
              <Icon 
                name={
                  activity.type === 'lesson' ? 'BookOpen' :
                  activity.type === 'technique' ? 'Palette' :
                  'Award'
                } 
                size={16} 
              />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-card-foreground text-sm mb-1">
                {activity.title}
              </h4>
              <p className="text-xs text-muted-foreground mb-1">
                {activity.description}
              </p>
              <span className="text-xs text-muted-foreground">
                {activity.timeAgo}
              </span>
            </div>
            {activity.image && (
              <Image
                src={activity.image}
                alt={activity.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CulturalLearningProgress;