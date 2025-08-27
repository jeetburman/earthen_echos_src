import React from 'react';
import Icon from '../../../components/AppIcon';

const ImpactMetrics = ({ impactData }) => {
  const metrics = [
    {
      icon: 'Users',
      label: 'Artisans Supported',
      value: impactData.artisansSupported,
      description: 'Craftspeople whose livelihoods you\'ve helped sustain',
      color: 'primary'
    },
    {
      icon: 'Globe',
      label: 'Cultural Traditions',
      value: impactData.traditionsSupported,
      description: 'Traditional crafts you\'ve helped preserve',
      color: 'secondary'
    },
    {
      icon: 'Leaf',
      label: 'Sustainability Score',
      value: `${impactData.sustainabilityScore}%`,
      description: 'Your eco-friendly purchasing choices',
      color: 'success'
    },
    {
      icon: 'Heart',
      label: 'Community Impact',
      value: impactData.communityImpact,
      description: 'Lives positively affected through your purchases',
      color: 'accent'
    }
  ];

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-heading text-xl font-semibold text-card-foreground">
          Your Cultural Impact
        </h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Icon name="TrendingUp" size={16} />
          <span>Growing positive impact</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className={`bg-${metric.color}/10 border border-${metric.color}/20 rounded-lg p-4`}>
            <div className="flex items-start gap-3">
              <div className={`w-12 h-12 rounded-lg bg-${metric.color}/20 flex items-center justify-center`}>
                <Icon name={metric.icon} size={24} className={`text-${metric.color}`} />
              </div>
              <div className="flex-1">
                <div className={`text-2xl font-heading font-semibold text-${metric.color} mb-1`}>
                  {metric.value}
                </div>
                <h3 className="font-medium text-card-foreground mb-1">
                  {metric.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 rounded-lg p-4 border border-border/50">
        <div className="flex items-center gap-3 mb-3">
          <Icon name="Award" size={20} className="text-primary" />
          <h3 className="font-heading font-semibold text-card-foreground">
            Cultural Preservation Badge
          </h3>
        </div>
        <p className="text-sm text-muted-foreground mb-3">
          You've earned recognition for your commitment to preserving traditional crafts and supporting artisan communities.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-success rounded-full"></div>
            <span className="text-sm font-medium text-success">Active Contributor</span>
          </div>
          <span className="text-xs text-muted-foreground">
            Since {impactData.memberSince}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImpactMetrics;