// src/components/core/NodeConnections.tsx
import React from 'react';
import { TreeNode, TreeStructure } from '../../contexts/TreeDataContext';

interface NodeConnectionsProps {
  treeStructure: TreeStructure;
}

const NodeConnections: React.FC<NodeConnectionsProps> = ({ treeStructure }) => {
  // Flatten all nodes including center into a single array
  const allNodes: TreeNode[] = [
    ...treeStructure.levels.flatMap(level => level.nodes),
    treeStructure.center
  ];

  return (
    <g>
      {allNodes.map((startNode, i) => 
        allNodes.slice(i + 1).map((endNode, j) => (
          <line
            key={`connection-${startNode.name}-${endNode.name}`}
            x1={startNode.x}
            y1={startNode.y + 20}
            x2={endNode.x}
            y2={endNode.y + 20}
            stroke="#8b5cf6"
            strokeWidth="1"
            strokeDasharray="5,5"
            opacity="0.3"
          />
        ))
      )}
    </g>
  );
};

export default NodeConnections;