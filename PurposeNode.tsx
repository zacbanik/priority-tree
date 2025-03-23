// src/components/core/PurposeNode.tsx
import React from 'react';
import { TreeNode } from '../../contexts/TreeDataContext';

interface PurposeNodeProps {
  node: TreeNode;
  isVisible: boolean;
}

const PurposeNode: React.FC<PurposeNodeProps> = ({ node, isVisible }) => {
  if (!isVisible) return null;
  
  const { x, y } = node;
  
  return (
    <g>
      <rect
        x={x - 22.5}
        y={y - 22.5}
        width="45"
        height="45"
        fill="#89CFF0"
        stroke="#8b5cf6"
        strokeWidth="2"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        style={{ fill: 'white', fontSize: '2.25rem', fontFamily: 'monospace', fontWeight: 'bold' }}
      >
        חי
      </text>
    </g>
  );
};

export default PurposeNode;