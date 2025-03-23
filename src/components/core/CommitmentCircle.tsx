// src/components/core/CommitmentCircle.tsx
import React from 'react';
import { Commitment } from '../../contexts/TreeDataContext';

interface CommitmentCircleProps {
  nodeName: string;
  nodeX: number;
  nodeY: number;
  commitments: Commitment[];
}

const CommitmentCircle: React.FC<CommitmentCircleProps> = ({ 
  nodeName, 
  nodeX, 
  nodeY, 
  commitments 
}) => {
  return (
    <>
      {commitments.map((commitment, index) => (
        <g key={`${nodeName}-${index}`}>
          <circle
            cx={nodeX - 60 - (30 * index)}
            cy={nodeY + 20}
            r="15"
            fill="#89CFF0"
            stroke={commitment.weight < 0 ? '#ef4444' : '#8b5cf6'}
            strokeWidth="2"
          />
          <text
            x={nodeX - 60 - (30 * index)}
            y={nodeY + 20}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{ fill: 'white', fontSize: '0.75rem', fontFamily: 'monospace' }}
          >
            {commitment.weight}
          </text>
        </g>
      ))}
    </>
  );
};

export default CommitmentCircle;
