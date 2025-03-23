import React, { useState, useEffect } from 'react';
import { HelpCircle, BookOpen, Play } from 'lucide-react';
import { tutorialSteps } from '../../data/tutorialSteps';
import TutorialOverlay from './TutorialOverlay';
import DocumentationMenu from '../documentation/DocumentationMenu';
import { TooltipWrapper } from './TooltipProvider';

// Utility to check if this is the first visit
const isFirstVisit = (): boolean => {
  const hasVisited = localStorage.getItem('priorityTreeHasVisited');
  return !hasVisited;
};

// Mark that the user has visited
const markAsVisited = (): void => {
  localStorage.setItem('priorityTreeHasVisited', 'true');
};

const OnboardingManager: React.FC = () => {
  const [isTutorialActive, setIsTutorialActive] = useState<boolean>(false);
  const [isDocsMenuOpen, setIsDocsMenuOpen] = useState<boolean>(false);
  
  // Check if first visit and show welcome dialog
  useEffect(() => {
    if (isFirstVisit()) {
      // Show welcome dialog after a short delay to allow the app to render
      const timer = setTimeout(() => {
        setIsDocsMenuOpen(true);
      }, 1000);
      
      markAsVisited();
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleTutorialComplete = () => {
    setIsTutorialActive(false);
  };
  
  return (
    <>
      {/* Action buttons in the corner */}
      <div className="fixed bottom-4 left-4 z-20 flex flex-col gap-2">
        <TooltipWrapper tipId="tutorial-button">
          <button
            onClick={() => setIsTutorialActive(true)}
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition-colors"
            aria-label="Start Tutorial"
          >
            <Play size={20} />
          </button>
        </TooltipWrapper>
        
        <TooltipWrapper tipId="help-button">
          <button
            onClick={() => setIsDocsMenuOpen(true)}
            className="p-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-500 transition-colors"
            aria-label="Help & Documentation"
          >
            <BookOpen size={20} />
          </button>
        </TooltipWrapper>
      </div>
      
      {/* Help toggle in header */}
      <button
        onClick={() => setIsDocsMenuOpen(true)}
        className="absolute top-4 right-36 p-2 text-white flex items-center gap-1"
        aria-label="Open Documentation"
      >
        <HelpCircle size={16} />
        <span>Help</span>
      </button>
      
      {/* Tutorial overlay */}
      <TutorialOverlay
        steps={tutorialSteps}
        onComplete={handleTutorialComplete}
        isOpen={isTutorialActive}
      />
      
      {/* Documentation menu */}
      <DocumentationMenu
        isOpen={isDocsMenuOpen}
        onClose={() => setIsDocsMenuOpen(false)}
      />
    </>
  );
};

export default OnboardingManager;
