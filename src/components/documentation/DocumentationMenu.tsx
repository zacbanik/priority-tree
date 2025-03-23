import React, { useState } from 'react';
import { BookOpen, Info, FileText, Settings, X } from 'lucide-react';

import QuickStartGuide from '../onboarding/QuickStartGuide';
import ExampleScenarios from '../onboarding/ExampleScenarios';
import PhilosophyGuide from './PhilosophyGuide';
import UsageGuide from './UsageGuide';
import BestPracticesGuide from './BestPracticesGuide';

interface DocumentationMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const DocumentationMenu: React.FC<DocumentationMenuProps> = ({ isOpen, onClose }) => {
  const [activeDocument, setActiveDocument] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleOptionClick = (optionId: string) => {
    setActiveDocument(optionId);
  };

  const handleCloseDocument = () => {
    setActiveDocument(null);
  };

  return (
    <>
      <div className="fixed inset-0 z-30 bg-black/50 flex items-center justify-center">
        <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>

          <h2 className="text-2xl font-bold text-white mb-6">Documentation & Help</h2>

          <div className="space-y-4">
            <button
              onClick={() => handleOptionClick('quickstart')}
              className="w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-3 text-left"
            >
              <BookOpen className="text-blue-400" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">Quick Start Guide</h3>
                <p className="text-gray-400 text-sm">Basic usage instructions to get started with Priority Tree</p>
              </div>
            </button>

            <button
              onClick={() => handleOptionClick('philosophy')}
              className="w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-3 text-left"
            >
              <Info className="text-purple-400" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">Philosophy & Background</h3>
                <p className="text-gray-400 text-sm">Tree of Life geometry, levels, balance theory, and weight system</p>
              </div>
            </button>

            <button
              onClick={() => handleOptionClick('usage')}
              className="w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-3 text-left"
            >
              <FileText className="text-green-400" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">Usage Guidelines</h3>
                <p className="text-gray-400 text-sm">Evaluating weights, understanding stress indicators, and balancing commitments</p>
              </div>
            </button>

            <button
              onClick={() => handleOptionClick('bestpractices')}
              className="w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-3 text-left"
            >
              <Settings className="text-yellow-400" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">Best Practices</h3>
                <p className="text-gray-400 text-sm">Regular review, using negative weights, and managing stress between levels</p>
              </div>
            </button>

            <button
              onClick={() => handleOptionClick('examples')}
              className="w-full p-4 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center gap-3 text-left"
            >
              <BookOpen className="text-red-400" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-white">Example Scenarios</h3>
                <p className="text-gray-400 text-sm">View and load example Priority Trees for different life situations</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Render the selected documentation component */}
      <QuickStartGuide
        isOpen={activeDocument === 'quickstart'}
        onClose={handleCloseDocument}
      />

      <PhilosophyGuide
        isOpen={activeDocument === 'philosophy'}
        onClose={handleCloseDocument}
      />

      <UsageGuide
        isOpen={activeDocument === 'usage'}
        onClose={handleCloseDocument}
      />

      <BestPracticesGuide
        isOpen={activeDocument === 'bestpractices'}
        onClose={handleCloseDocument}
      />

      <ExampleScenarios
        isOpen={activeDocument === 'examples'}
        onClose={handleCloseDocument}
      />
    </>
  );
};

export default DocumentationMenu;
