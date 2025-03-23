import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft } from 'lucide-react';

export interface TutorialStep {
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
