import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CraftTechnique = ({ technique }) => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h3 className="text-xl font-heading font-semibold text-foreground mb-2 flex items-center">
          <Icon name="Wrench" size={20} className="mr-2 text-accent" />
          Traditional Craft Technique
        </h3>
        <p className="text-muted-foreground">
          {technique.description}
        </p>
      </div>

      {/* Technique Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-muted rounded-lg p-4 text-center">
          <Icon name="Clock" size={24} className="mx-auto mb-2 text-primary" />
          <div className="font-medium text-foreground">{technique.timeRequired}</div>
          <div className="text-sm text-muted-foreground">Creation Time</div>
        </div>
        
        <div className="bg-muted rounded-lg p-4 text-center">
          <Icon name="Users" size={24} className="mx-auto mb-2 text-secondary" />
          <div className="font-medium text-foreground">{technique.skillLevel}</div>
          <div className="text-sm text-muted-foreground">Skill Level</div>
        </div>
        
        <div className="bg-muted rounded-lg p-4 text-center">
          <Icon name="Calendar" size={24} className="mx-auto mb-2 text-accent" />
          <div className="font-medium text-foreground">{technique.heritage}</div>
          <div className="text-sm text-muted-foreground">Heritage</div>
        </div>
      </div>

      {/* Materials Used */}
      <div className="mb-6">
        <h4 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Package2" size={18} className="mr-2 text-secondary" />
          Materials & Tools
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {technique.materials.map((material, index) => (
            <div key={index} className="bg-muted rounded-lg p-3 text-center">
              <div className="w-8 h-8 mx-auto mb-2 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Dot" size={16} className="text-primary" />
              </div>
              <div className="text-sm font-medium text-foreground">{material.name}</div>
              <div className="text-xs text-muted-foreground">{material.origin}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Steps */}
      <div>
        <h4 className="font-medium text-foreground mb-4 flex items-center">
          <Icon name="List" size={18} className="mr-2 text-accent" />
          Creation Process
        </h4>
        
        <div className="space-y-4">
          {technique.steps.map((step, index) => (
            <div
              key={index}
              className={`border rounded-lg transition-all duration-200 cursor-pointer ${
                activeStep === index
                  ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50'
              }`}
              onClick={() => setActiveStep(activeStep === index ? -1 : index)}
            >
              <div className="p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    activeStep === index
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h5 className="font-medium text-foreground">{step.title}</h5>
                    <p className="text-sm text-muted-foreground">{step.duration}</p>
                  </div>
                </div>
                <Icon 
                  name={activeStep === index ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-muted-foreground"
                />
              </div>
              
              {activeStep === index && (
                <div className="px-4 pb-4 border-t border-border">
                  <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {step.description}
                      </p>
                      {step.tips && (
                        <div className="bg-accent/10 rounded-lg p-3">
                          <h6 className="font-medium text-accent mb-1 flex items-center">
                            <Icon name="Lightbulb" size={14} className="mr-1" />
                            Artisan Tip
                          </h6>
                          <p className="text-xs text-muted-foreground">{step.tips}</p>
                        </div>
                      )}
                    </div>
                    {step.image && (
                      <div className="rounded-lg overflow-hidden">
                        <Image
                          src={step.image}
                          alt={`${step.title} process`}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cultural Context */}
      <div className="mt-6 pt-6 border-t border-border">
        <h4 className="font-medium text-foreground mb-3 flex items-center">
          <Icon name="Globe" size={18} className="mr-2 text-secondary" />
          Cultural Heritage
        </h4>
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {technique.culturalContext}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CraftTechnique;