import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

interface TutorialStep {
  target: string; // CSS selector for the element to highlight
  title: string;
  content: string;
  position: 'top' | 'right' | 'bottom' | 'left';
}

interface TutorialOverlayProps {
  steps: TutorialStep[];
  onComplete: () => void;
  isOpen: boolean;
}

const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ steps, onComplete, isOpen }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    
    // Find the target element for the current step
    const target = document.querySelector(steps[currentStep].target);
    if (target) {
      const rect = target.getBoundingClientRect();
      setTargetRect(rect);
    }
  }, [currentStep, steps, isOpen]);

  if (!isOpen || !targetRect) return null;

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Calculate popover position
  const getPopoverStyle = () => {
    const { position } = steps[currentStep];
    const buffer = 15; // Distance from the target element
    
    switch (position) {
      case 'top':
        return {
          top: targetRect.top - buffer - 120,
          left: targetRect.left + (targetRect.width / 2) - 150,
        };
      case 'right':
        return {
          top: targetRect.top + (targetRect.height / 2) - 60,
          left: targetRect.right + buffer,
        };
      case 'bottom':
        return {
          top: targetRect.bottom + buffer,
          left: targetRect.left + (targetRect.width / 2) - 150,
        };
      case 'left':
        return {
          top: targetRect.top + (targetRect.height / 2) - 60,
          left: targetRect.left - buffer - 300,
        };
      default:
        return {
          top: targetRect.bottom + buffer,
          left: targetRect.left,
        };
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
      {/* Highlight for the target element */}
      <div
        className="absolute border-2 border-blue-500 rounded-lg"
        style={{
          top: targetRect.top - 5,
          left: targetRect.left - 5,
          width: targetRect.width + 10,
          height: targetRect.height + 10,
          boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.5)',
          zIndex: 60,
        }}
      />

      {/* Tutorial popover */}
      <div 
        className="absolute bg-gray-800 border border-blue-500 p-4 rounded-lg shadow-lg w-80"
        style={{
          ...getPopoverStyle(),
          zIndex: 70,
        }}
      >
        <button 
          onClick={onComplete}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-lg font-bold text-white mb-2">{steps[currentStep].title}</h3>
        <p className="text-gray-300 mb-4">{steps[currentStep].content}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-400">
            Step {currentStep + 1} of {steps.length}
          </div>
          <div className="flex gap-2">
            {currentStep > 0 && (
              <button
                onClick={handlePrevious}
                className="p-2 text-blue-400 hover:text-blue-300 flex items-center gap-1"
              >
                <ArrowLeft size={16} />
                <span>Back</span>
              </button>
            )}
            <button
              onClick={handleNext}
              className="p-2 bg-blue-600 text-white rounded flex items-center gap-1"
            >
              <span>{currentStep < steps.length - 1 ? 'Next' : 'Finish'}</span>
              {currentStep < steps.length - 1 && <ArrowRight size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialOverlay;

// src/components/onboarding/Tooltip.tsx
import React, { useState, useEffect, useRef } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!isVisible || !targetRef.current || !tooltipRef.current) return;
    
    const targetRect = targetRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    const buffer = 8;
    let top = 0;
    let left = 0;
    
    switch (position) {
      case 'top':
        top = targetRect.top - tooltipRect.height - buffer;
        left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'right':
        top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        left = targetRect.right + buffer;
        break;
      case 'bottom':
        top = targetRect.bottom + buffer;
        left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
        break;
      case 'left':
        top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
        left = targetRect.left - tooltipRect.width - buffer;
        break;
    }
    
    tooltipRef.current.style.top = `${top}px`;
    tooltipRef.current.style.left = `${left}px`;
  }, [isVisible, position]);
  
  return (
    <div 
      className="relative inline-block"
      ref={targetRef}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      
      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 bg-gray-800 text-white px-3 py-2 rounded shadow-lg text-sm max-w-xs"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

// src/components/onboarding/TooltipProvider.tsx
import React from 'react';
import Tooltip from './Tooltip';

interface TooltipConfig {
  id: string;
  content: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const tooltips: Record<string, TooltipConfig> = {
  'main-circles': {
    id: 'main-circles',
    content: 'These circles represent different life spheres. Each level balances with those above and below it.',
    position: 'right'
  },
  'weight-system': {
    id: 'weight-system',
    content: 'Weights range from -7 to +7. Positive weights represent commitments that energize you, while negative weights represent necessary commitments that drain energy.',
    position: 'bottom'
  },
  'stress-indicators': {
    id: 'stress-indicators',
    content: 'Red outlines indicate imbalance between levels. When upper levels demand more energy than lower levels can support, stress occurs.',
    position: 'left'
  },
  'commitment-circles': {
    id: 'commitment-circles',
    content: 'These smaller circles represent individual commitments. The number shows the weight (-7 to +7) of each commitment.',
    position: 'left'
  },
  'purpose-node': {
    id: 'purpose-node',
    content: 'The center node appears when all levels are in balance, representing alignment with your core purpose.',
    position: 'top'
  }
};

interface TooltipWrapperProps {
  tipId: string;
  children: React.ReactNode;
}

export const TooltipWrapper: React.FC<TooltipWrapperProps> = ({ tipId, children }) => {
  const tooltipConfig = tooltips[tipId];
  
  if (!tooltipConfig) {
    return <>{children}</>;
  }
  
  return (
    <Tooltip 
      content={tooltipConfig.content} 
      position={tooltipConfig.position}
    >
      {children}
    </Tooltip>
  );
};

export default tooltips;
