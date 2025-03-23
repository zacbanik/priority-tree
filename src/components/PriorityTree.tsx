// src/components/PriorityTree.tsx
import React from 'react';
import { useTreeData } from '../contexts/TreeDataContext';
import TreeNode from './core/TreeNode';
import NodeConnections from './core/NodeConnections';
import CommitmentCircle from './core/CommitmentCircle';
import PurposeNode from './core/PurposeNode';
import CommitmentPanel from './ui/CommitmentPanel';

const PriorityTree: React.FC = () => {
  const {
    treeStructure,
    commitments,
    selectedLevel,
    setSelectedLevel,
    addCommitment,
    removeCommitment,
    isLevelUnbalanced,
    isTreeBalanced
  } = useTreeData();

  return (
    <div className="relative w-full h-screen bg-black">
      <svg className="w-full h-full">
        <NodeConnections treeStructure={treeStructure} />
        
        {treeStructure.levels.map((level, levelIndex) => (
          <g key={`level-${level.id}`}>
            {level.nodes.map(node => (
              <g key={node.name}>
                <TreeNode
                  node={node}
                  isSelected={selectedLevel === node.name}
                  shouldPulse={isLevelUnbalanced(levelIndex)}
                  onClick={() => setSelectedLevel(node.name)}
                />
                <CommitmentCircle
                  nodeName={node.name}
                  nodeX={node.x}
                  nodeY={node.y}
                  commitments={commitments[node.name] || []}
                />
              </g>
            ))}
          </g>
        ))}
        
        <PurposeNode
          node={treeStructure.center}
          isVisible={isTreeBalanced()}
        />
      </svg>

      {selectedLevel && (
        <CommitmentPanel
          title={selectedLevel}
          commitments={commitments[selectedLevel] || []}
          onAdd={(commitment) => addCommitment(selectedLevel, commitment)}
          onRemove={(index) => removeCommitment(selectedLevel, index)}
          onClose={() => setSelectedLevel(null)}
        />
      )}
    </div>
  );
};

export default PriorityTree;
