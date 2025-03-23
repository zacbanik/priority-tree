// src/components/ui/CommitmentPanel.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Commitment } from '../../contexts/TreeDataContext';
import WeightSelector from './WeightSelector';
import { TooltipWrapper } from '../onboarding/TooltipProvider';

interface CommitmentPanelProps {
  title: string;
  commitments: Commitment[];
  onAdd: (commitment: Commitment) => void;
  onRemove: (index: number) => void;
  onClose: () => void;
}

const CommitmentPanel: React.FC<CommitmentPanelProps> = ({
  title,
  commitments,
  onAdd,
  onRemove,
  onClose
}) => {
  const [newCommitment, setNewCommitment] = useState('');
  const [newWeight, setNewWeight] = useState(1);

  const handleAddCommitment = () => {
    if (!newCommitment.trim()) return;
    
    onAdd({
      name: newCommitment.trim(),
      weight: newWeight
    });
    
    // Reset input fields
    setNewCommitment('');
    setNewWeight(1);
  };

  return (
    <div className="absolute top-4 right-4 w-80 bg-gray-900/90 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-mono font-bold text-white">{title}</h3>
        <button onClick={onClose} className="text-white">
          <X size={20} />
        </button>
      </div>

      <div className="space-y-4">
        <input
          type="text"
          value={newCommitment}
          onChange={(e) => setNewCommitment(e.target.value)}
          placeholder="New commitment"
          className="w-full p-2 border border-gray-700 rounded bg-gray-800 text-white"
        />
        
        <div className="flex gap-2">
          <TooltipWrapper tipId="weight-system">
            <div className="weight-selector">
              <WeightSelector 
                value={newWeight} 
                onChange={setNewWeight} 
              />
            </div>
          </TooltipWrapper>
          
          <button
            onClick={handleAddCommitment}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Add
          </button>
        </div>

        <div className="mt-4">
          <h4 className="font-mono font-medium mb-2 text-white">Current Commitments:</h4>
          <ul className="space-y-2">
            {commitments.map((comm, index) => (
              <li 
                key={index} 
                className="flex justify-between items-center"
              >
                <span className="text-white">{comm.name} (Weight: {comm.weight})</span>
                <button
                  onClick={() => onRemove(index)}
                  className="text-red-500"
                >
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommitmentPanel;
