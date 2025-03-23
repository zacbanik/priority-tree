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
      <svg className="w-full h-full tree-svg">
        <NodeConnections treeStructure={treeStructure} />
        
        {treeStructure.levels.map((level, levelIndex) => (
          <g 
            key={`level-${level.id}`} 
            className={`level-group level-${level.id} ${
              level.id === 1 ? 'upper-sphere' : 
              level.id === 2 ? 'middle-sphere' : 
              level.id === 3 ? 'lower-sphere' : 
              level.id === 4 ? 'foundation' : ''
            }`}
          >
            {level.nodes.map(node => (
              <g key={node.name}>
                  <TreeNode
                    node={node}
                    isSelected={selectedLevel === node.name}
                    shouldPulse={isLevelUnbalanced(levelIndex)}
                    onClick={() => setSelectedLevel(node.name)}
                    className={isLevelUnbalanced(levelIndex) ? 'stress-indicator' : ''}
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
            className="purpose-node"
          />
      </svg>

      {selectedLevel && (
        <div className="commitment-panel">
          <CommitmentPanel
            title={selectedLevel}
            commitments={commitments[selectedLevel] || []}
            onAdd={(commitment) => addCommitment(selectedLevel, commitment)}
            onRemove={(index) => removeCommitment(selectedLevel, index)}
            onClose={() => setSelectedLevel(null)}
          />
        </div>
      )}
    </div>
  );
};

export default PriorityTree;
