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
  },
  'tutorial-button': {
    id: 'tutorial-button',
    content: 'Start an interactive tutorial to learn how to use Priority Tree',
    position: 'right'
  },
  'help-button': {
    id: 'help-button',
    content: 'Access documentation, guides, and example scenarios',
    position: 'right'
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
