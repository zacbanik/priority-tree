import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTreeData } from '../../contexts/TreeDataContext';
import { exampleScenarios } from '../../data/exampleScenarios';

interface ExampleScenariosProps {
  isOpen: boolean;
  onClose: () => void;
}

const ExampleScenarios: React.FC<ExampleScenariosProps> = ({ isOpen, onClose }) => {
  const { importData } = useTreeData();
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleScenarioSelect = (scenarioId: string) => {
    setSelectedScenario(scenarioId);
  };

  const handleScenarioLoad = () => {
    if (!selectedScenario) return;
    
    const scenario = exampleScenarios.find(s => s.id === selectedScenario);
    if (scenario) {
      // This will need to be adjusted based on how your importData function works
      importData(JSON.stringify({ commitments: scenario.commitments }));
      onClose();
      // You might want to reload the page or update the UI after loading
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-40 overflow-auto bg-black/50 flex items-center justify-center">
      <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Example Scenarios</h2>

        <div className="space-y-6">
          <p className="text-gray-300">
            Choose an example scenario to see how Priority Tree can be used in different situations.
            Loading a scenario will replace your current data.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exampleScenarios.map((scenario) => (
              <div 
                key={scenario.id}
                className={`p-4 border rounded-lg cursor-pointer ${
                  selectedScenario === scenario.id
                    ? 'border-blue-500 bg-blue-900/20'
                    : 'border-gray-700 hover:border-gray-500'
                }`}
                onClick={() => handleScenarioSelect(scenario.id)}
              >
                <h3 className="text-xl font-semibold text-white mb-1">{scenario.title}</h3>
                <p className="text-gray-400 text-sm mb-2">{scenario.category}</p>
                <p className="text-gray-300">{scenario.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-700 flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-300 hover:text-white"
            >
              Cancel
            </button>
            <button
              onClick={handleScenarioLoad}
              disabled={!selectedScenario}
              className={`px-4 py-2 rounded ${
                selectedScenario
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-400 cursor-not-allowed'
              }`}
            >
              Load Selected Example
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleScenarios;
