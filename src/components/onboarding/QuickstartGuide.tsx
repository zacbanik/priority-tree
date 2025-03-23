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
