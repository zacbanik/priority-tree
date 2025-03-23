import { TutorialStep } from '../components/onboarding/TutorialOverlay';

export const tutorialSteps: TutorialStep[] = [
  {
    target: ".tree-svg", // This would need to be added to your SVG component
    title: "Welcome to Priority Tree",
    content: "Priority Tree helps you visualize and balance commitments across different spheres of life. Let's take a tour!",
    position: "bottom"
  },
  {
    target: ".upper-sphere", // These selectors would need to be added to your components
    title: "Upper Sphere",
    content: "This represents broader societal commitments. These typically affect many people but have less direct impact on your daily life.",
    position: "bottom"
  },
  {
    target: ".middle-sphere",
    title: "Middle Sphere",
    content: "This represents community and work commitments. These affect fewer people than the Upper Sphere but have more direct impact on your life.",
    position: "right"
  },
  {
    target: ".lower-sphere",
    title: "Lower Sphere",
    content: "This represents friends and family commitments. These affect fewer people than the Middle Sphere but are even more important to your daily life.",
    position: "left"
  },
  {
    target: ".foundation",
    title: "Foundation",
    content: "This represents personal commitments to yourself. These affect only you but form the foundation upon which everything else rests.",
    position: "top"
  },
  {
    target: ".weight-selector",
    title: "Weight System",
    content: "Assign weights from -7 to +7 to each commitment. Positive weights energize you, while negative weights are necessary but draining.",
    position: "top"
  },
  {
    target: ".stress-indicator",
    title: "Stress Indicators",
    content: "Red outlines appear when a level has too much weight compared to the level below it. This helps identify sources of stress in your life.",
    position: "right"
  },
  {
    target: ".purpose-node",
    title: "Purpose Node",
    content: "When all levels are in balance, the central Purpose node appears, representing alignment with your core values and direction.",
    position: "left"
  },
  {
    target: ".commitment-panel",
    title: "Adding Commitments",
    content: "Click on any sphere to add commitments. Name your commitment and assign a weight to represent its impact on your energy.",
    position: "left"
  },
  {
    target: ".export-button",
    title: "Saving Your Progress",
    content: "You can export your data at any time and import it later to continue working with your Priority Tree.",
    position: "bottom"
  }
];

// src/components/onboarding/QuickStartGuide.tsx
import React from 'react';
import { X } from 'lucide-react';

interface QuickStartGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const QuickStartGuide: React.FC<QuickStartGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 overflow-auto bg-black/50 flex items-center justify-center">
      <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Quick Start Guide</h2>

        <div className="space-y-6 text-gray-200">
          <section>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Understanding the Tree</h3>
            <p className="mb-4">
              Priority Tree visualizes your life commitments across different spheres, arranged in a
              hierarchical structure based on the Tree of Life geometry:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Society (Upper Sphere):</strong> Broad commitments affecting many people</li>
              <li><strong>Community/Work (Middle Sphere):</strong> Commitments affecting your local community and professional life</li>
              <li><strong>Friends/Family (Lower Sphere):</strong> Commitments to close relationships</li>
              <li><strong>Self (Foundation):</strong> Personal commitments forming your foundation</li>
              <li><strong>Purpose (Center):</strong> Appears when all levels are in balance</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Basic Usage</h3>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Click on any sphere to open the commitment panel</li>
              <li>Enter a commitment name and assign a weight (-7 to +7)</li>
              <li>Click "Add" to add the commitment</li>
              <li>Balance commitments across levels to reveal the Purpose node</li>
              <li>Use the export function to save your work</li>
            </ol>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Understanding Weights</h3>
            <p className="mb-2">
              Each commitment has a weight from -7 to +7:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Positive weights (+1 to +7):</strong> Energizing commitments that give more than they take</li>
              <li><strong>Negative weights (-1 to -7):</strong> Necessary commitments that take more energy than they give</li>
              <li><strong>Zero (0):</strong> Neutral commitments that neither drain nor energize</li>
            </ul>
            <p className="mt-2">
              The absolute value indicates intensity: +/-7 has more impact than +/-1.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-400 mb-2">Balancing Your Tree</h3>
            <p className="mb-4">
              The key principle is balance between levels:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Each level should be supported by the level below it</li>
              <li>Red outlines indicate when a level has too much weight compared to the level below</li>
              <li>Aim for a distribution where lower levels have slightly more positive weight than upper levels</li>
              <li>When properly balanced, the center Purpose node appears</li>
            </ul>
          </section>

          <div className="mt-6 pt-4 border-t border-gray-700 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStartGuide;

// src/components/onboarding/ExampleScenarios.tsx
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
