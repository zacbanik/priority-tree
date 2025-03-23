// src/contexts/TreeDataContext.tsx
import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { calculateLevelWeight, isLevelUnbalanced, isTreeBalanced } from '../utils/balanceCalculator';

// Types
export type TreeNode = {
  name: string;
  x: number;
  y: number;
};

export type TreeLevel = {
  id: number;
  name: string;
  nodes: TreeNode[];
};

export type TreeStructure = {
  levels: TreeLevel[];
  center: TreeNode;
};

export type Commitment = {
  name: string;
  weight: number;
};

export type CommitmentsMap = {
  [key: string]: Commitment[];
};

type TreeDataContextType = {
  treeStructure: TreeStructure;
  commitments: CommitmentsMap;
  selectedLevel: string | null;
  setSelectedLevel: (level: string | null) => void;
  addCommitment: (level: string, commitment: Commitment) => void;
  removeCommitment: (level: string, index: number) => void;
  exportData: () => string;
  importData: (data: string) => boolean;
  calculateLevelWeight: (nodes: TreeNode[]) => number;
  isLevelUnbalanced: (levelIndex: number) => boolean;
  isTreeBalanced: () => boolean;
};

// Default tree structure
const defaultTreeStructure: TreeStructure = {
  levels: [
    {
      id: 1,
      name: 'Upper Sphere',
      nodes: [{ name: 'Society', x: 300, y: 100 }]
    },
    {
      id: 2,
      name: 'Middle Sphere',
      nodes: [
        { name: 'Community', x: 200, y: 200 },
        { name: 'Work', x: 400, y: 200 }
      ]
    },
    {
      id: 3,
      name: 'Lower Sphere',
      nodes: [
        { name: 'Friends', x: 200, y: 300 },
        { name: 'Family', x: 400, y: 300 }
      ]
    },
    {
      id: 4,
      name: 'Foundation',
      nodes: [{ name: 'Self', x: 300, y: 400 }]
    }
  ],
  center: {
    name: 'Purpose',
    x: 300,
    y: 250
  }
};

// Initial commitments state
const initialCommitments: CommitmentsMap = {
  'Purpose': [], 
  'Society': [], 
  'Community': [], 
  'Work': [], 
  'Friends': [], 
  'Family': [], 
  'Self': []
};

// Create context
const TreeDataContext = createContext<TreeDataContextType | undefined>(undefined);

// Provider component
export const TreeDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [treeStructure] = useState<TreeStructure>(defaultTreeStructure);
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  
  // Use localStorage for persistence
  const [commitments, setCommitments] = useLocalStorage<CommitmentsMap>(
    'priorityTreeCommitments',
    initialCommitments
  );

  // Add a commitment to a level
  const addCommitment = (level: string, commitment: Commitment) => {
    setCommitments(prev => ({
      ...prev,
      [level]: [...(prev[level] || []), commitment]
    }));
  };

  // Remove a commitment from a level
  const removeCommitment = (level: string, index: number) => {
    setCommitments(prev => ({
      ...prev,
      [level]: prev[level].filter((_, i) => i !== index)
    }));
  };

  // Export data as JSON
  const exportData = () => {
    return JSON.stringify({ commitments }, null, 2);
  };

  // Import data from JSON
  const importData = (data: string): boolean => {
    try {
      const parsed = JSON.parse(data);
      if (parsed.commitments) {
        setCommitments(parsed.commitments);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to import data:', error);
      return false;
    }
  };

  // Balance calculation methods (these will call the utility functions)
  const calculateLevelWeightContext = (nodes: TreeNode[]) => {
    return calculateLevelWeight(nodes, commitments);
  };

  const isLevelUnbalancedContext = (levelIndex: number) => {
    return isLevelUnbalanced(levelIndex, treeStructure.levels, commitments);
  };

  const isTreeBalancedContext = () => {
    return isTreeBalanced(treeStructure.levels, commitments);
  };

  return (
    <TreeDataContext.Provider
      value={{
        treeStructure,
        commitments,
        selectedLevel,
        setSelectedLevel,
        addCommitment,
        removeCommitment,
        exportData,
        importData,
        calculateLevelWeight: calculateLevelWeightContext,
        isLevelUnbalanced: isLevelUnbalancedContext,
        isTreeBalanced: isTreeBalancedContext
      }}
    >
      {children}
    </TreeDataContext.Provider>
  );
};

// Hook to use the context
export const useTreeData = () => {
  const context = useContext(TreeDataContext);
  if (context === undefined) {
    throw new Error('useTreeData must be used within a TreeDataProvider');
  }
  return context;
};

export default TreeDataContext;
