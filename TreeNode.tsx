// src/components/core/TreeNode.tsx
import React from 'react';
import { TreeNode as TreeNodeType } from '../../contexts/TreeDataContext';

interface TreeNodeProps {
  node: TreeNodeType;
  isSelected: boolean;
  shouldPulse: boolean;
  onClick: () => void;
}

const TreeNode: React.FC<TreeNodeProps> = ({ node, isSelected, shouldPulse, onClick }) => {
  const { name, x, y } = node;
  
  return (
    <g 
      onClick={onClick}
      className={shouldPulse ? 'animate-pulse' : ''}
    >
      <circle
        cx={x}
        cy={y + 20}
        r="40"
        fill={isSelected ? '#c4b5fd' : '#89CFF0'}
        stroke={shouldPulse ? '#ef4444' : '#8b5cf6'}
        strokeWidth={shouldPulse ? 3 : 2}
        className="cursor-pointer"
      />
      <text
        x={x}
        y={y + 20}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fill: 'white', fontSize: '0.875rem', fontFamily: 'monospace' }}
        className="pointer-events-none"
      >
        {name}
      </text>
    </g>
  );
};

export default TreeNode;