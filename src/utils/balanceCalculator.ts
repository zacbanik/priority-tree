// src/utils/balanceCalculator.ts
import { TreeNode, TreeLevel, CommitmentsMap } from '../contexts/TreeDataContext';

// Calculate total weight for a specific level
export const calculateLevelWeight = (levelNodes: TreeNode[], commitments: CommitmentsMap): number => {
  return levelNodes.reduce((total, node) => 
    total + (commitments[node.name] || [])
      .reduce((sum, comm) => sum + (parseInt(comm.weight.toString()) || 0), 0)
  , 0);
};

// Check if a specific level is unbalanced compared to the one below it
export const isLevelUnbalanced = (
  levelIndex: number, 
  levels: TreeLevel[], 
  commitments: CommitmentsMap
): boolean => {
  if (levelIndex >= levels.length - 1) return false;

  const upperLevel = levels[levelIndex];
  const lowerLevel = levels[levelIndex + 1];

  const upperWeight = calculateLevelWeight(upperLevel.nodes, commitments);
  const lowerWeight = calculateLevelWeight(lowerLevel.nodes, commitments);

  // Allow upper level to have up to 50% more weight than lower level
  return upperWeight > lowerWeight * 1.5;
};

// Check if the entire tree is balanced
export const isTreeBalanced = (levels: TreeLevel[], commitments: CommitmentsMap): boolean => {
  for (let i = 0; i < levels.length - 1; i++) {
    if (isLevelUnbalanced(i, levels, commitments)) {
      return false;
    }
  }
  return true;
};

// Calculate absolute weight (useful for determining strength of color, etc.)
export const calculateAbsoluteWeight = (levelNodes: TreeNode[], commitments: CommitmentsMap): number => {
  return levelNodes.reduce((total, node) => 
    total + (commitments[node.name] || [])
      .reduce((sum, comm) => sum + Math.abs(parseInt(comm.weight.toString()) || 0), 0)
  , 0);
};
