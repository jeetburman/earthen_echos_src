import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ onRegionSelect, selectedRegion }) => {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  const regions = [
    {
      id: 'japan',
      name: 'Japan',
      craftCount: 124,
      specialties: ['Ceramics', 'Textiles', 'Woodwork'],
      coordinates: { x: 85, y: 25 },
      description: 'Traditional pottery and textile arts'
    },
    {
      id: 'india',
      name: 'India',
      craftCount: 189,
      specialties: ['Textiles', 'Metalwork', 'Jewelry'],
      coordinates: { x: 70, y: 35 },
      description: 'Rich heritage of handwoven fabrics'
    },
    {
      id: 'mexico',
      name: 'Mexico',
      craftCount: 67,
      specialties: ['Metalwork', 'Pottery', 'Textiles'],
      coordinates: { x: 20, y: 40 },
      description: 'Vibrant metalwork and ceramics'
    },
    {
      id: 'morocco',
      name: 'Morocco',
      craftCount: 45,
      specialties: ['Leather', 'Metalwork', 'Textiles'],
      coordinates: { x: 50, y: 30 },
      description: 'Exquisite leather and metal crafts'
    },
    {
      id: 'peru',
      name: 'Peru',
      craftCount: 78,
      specialties: ['Textiles', 'Pottery', 'Jewelry'],
      coordinates: { x: 25, y: 60 },
      description: 'Ancient weaving traditions'
    },
    {
      id: 'kenya',
      name: 'Kenya',
      craftCount: 56,
      specialties: ['Pottery', 'Beadwork', 'Woodwork'],
      coordinates: { x: 55, y: 50 },
      description: 'Traditional pottery and beadwork'
    }
  ];

  const handleRegionClick = (region) => {
    onRegionSelect(region.id === selectedRegion ? null : region.id);
  };

  return (
    <div className="bg-card rounded-lg border border-border p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          Explore by Region
        </h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRegionSelect(null)}
          className="text-muted-foreground"
        >
          Clear Selection
        </Button>
      </div>

      {/* World Map SVG */}
      <div className="relative bg-muted rounded-lg overflow-hidden mb-4" style={{ aspectRatio: '2/1' }}>
        <svg
          viewBox="0 0 100 50"
          className="w-full h-full"
          style={{ background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)' }}
        >
          {/* Simplified world map outline */}
          <path
            d="M10,15 Q15,10 25,12 Q35,8 45,15 Q55,12 65,18 Q75,15 85,20 Q90,25 85,35 Q75,40 65,38 Q55,42 45,38 Q35,45 25,40 Q15,42 10,35 Z"
            fill="var(--color-muted)"
            stroke="var(--color-border)"
            strokeWidth="0.5"
          />
          
          {/* Region markers */}
          {regions.map((region) => (
            <g key={region.id}>
              {/* Region dot */}
              <circle
                cx={region.coordinates.x}
                cy={region.coordinates.y}
                r={selectedRegion === region.id ? "2.5" : hoveredRegion === region.id ? "2" : "1.5"}
                fill={selectedRegion === region.id ? "var(--color-primary)" : "var(--color-accent)"}
                stroke="white"
                strokeWidth="0.5"
                className="cursor-pointer transition-all duration-200"
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
                onClick={() => handleRegionClick(region)}
              />
              
              {/* Region label */}
              <text
                x={region.coordinates.x}
                y={region.coordinates.y - 3}
                textAnchor="middle"
                className="text-xs fill-current text-foreground font-medium pointer-events-none"
                style={{ fontSize: '2px' }}
              >
                {region.name}
              </text>
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredRegion && (
          <div className="absolute top-2 left-2 bg-popover border border-border rounded-lg p-3 shadow-warm z-10">
            {(() => {
              const region = regions.find(r => r.id === hoveredRegion);
              return (
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{region.name}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{region.description}</p>
                  <div className="flex items-center space-x-2 text-xs">
                    <Icon name="Package" size={12} className="text-primary" />
                    <span className="text-muted-foreground">{region.craftCount} crafts</span>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Region List */}
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {regions.map((region) => (
          <div
            key={region.id}
            className={`p-3 rounded-lg border cursor-pointer transition-all duration-200 ${
              selectedRegion === region.id
                ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 hover:bg-muted/50'
            }`}
            onClick={() => handleRegionClick(region)}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-foreground">{region.name}</h4>
              <div className="flex items-center space-x-1">
                <Icon name="Package" size={14} className="text-primary" />
                <span className="text-sm text-muted-foreground">{region.craftCount}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-2">{region.description}</p>
            
            <div className="flex flex-wrap gap-1">
              {region.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveMap;