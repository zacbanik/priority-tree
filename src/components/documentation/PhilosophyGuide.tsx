import React from 'react';
import { X } from 'lucide-react';

interface PhilosophyGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const PhilosophyGuide: React.FC<PhilosophyGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 overflow-auto bg-black/50 flex items-center justify-center">
      <div className="relative bg-gray-900 p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">Priority Tree Philosophy</h2>

        <div className="space-y-8 text-gray-200">
          <section>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Tree of Life Geometry Principles</h3>
            <p className="mb-4">
              The Priority Tree is based on sacred geometry principles found in the Tree of Life pattern,
              which appears across various spiritual and philosophical traditions. This structure represents
              the interconnected nature of all aspects of existence.
            </p>
            <p className="mb-4">
              In the Priority Tree application, this geometry is simplified into concentric levels representing:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Upper Sphere:</strong> Represents broader societal commitments. These affect many people but have less direct impact on your daily life.
              </li>
              <li>
                <strong>Middle Sphere:</strong> Represents community and work commitments. These affect fewer people than the Upper Sphere but have more direct impact on your life.
              </li>
              <li>
                <strong>Lower Sphere:</strong> Represents friends and family commitments. These affect even fewer people but are even more important to your daily well-being.
              </li>
              <li>
                <strong>Foundation:</strong> Represents personal commitments to yourself. These affect only you but form the foundation upon which everything else rests.
              </li>
              <li>
                <strong>Center:</strong> Represents your core purpose or essential self. It appears when all other elements are in balance.
              </li>
            </ul>
            <p className="mt-4">
              The paths connecting all nodes represent the interconnected nature of all life commitments.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Significance of Each Level</h3>
            <p className="mb-4">
              Each level in the Priority Tree has a unique significance in relation to life balance:
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Upper Sphere (Society)</h4>
            <p className="mb-3">
              Societal commitments extend your influence to the broadest reach but typically
              have the least direct impact on your daily experience. These include:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Volunteering for causes</li>
              <li>Political involvement</li>
              <li>Activism</li>
              <li>Global or national concerns</li>
            </ul>
            <p className="mb-3">
              While these commitments can be deeply meaningful, they should be balanced
              with appropriate energy invested in more immediate spheres.
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Middle Sphere (Community & Work)</h4>
            <p className="mb-3">
              Community and work commitments have a more direct impact on your life than societal 
              commitments. These include:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Professional responsibilities</li>
              <li>Career development</li>
              <li>Local community involvement</li>
              <li>Neighborhood connections</li>
              <li>Professional networks</li>
            </ul>
            <p className="mb-3">
              These commitments often provide both meaning and material support, but should
              be kept in balance with your foundational needs.
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Lower Sphere (Friends & Family)</h4>
            <p className="mb-3">
              Friends and family commitments involve closer relationships that have significant 
              impact on your emotional well-being. These include:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Immediate family relationships</li>
              <li>Close friendships</li>
              <li>Partnership/marriage</li>
              <li>Parenting</li>
              <li>Extended family responsibilities</li>
            </ul>
            <p className="mb-3">
              These relationships provide essential social support and meaning, and typically
              deserve significant energy investment.
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Foundation (Self)</h4>
            <p className="mb-3">
              Self commitments form the foundation upon which all other commitments rest. These include:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Physical health</li>
              <li>Mental/emotional well-being</li>
              <li>Personal development</li>
              <li>Rest and recovery</li>
              <li>Spiritual practice</li>
            </ul>
            <p className="mb-3">
              Without adequate investment here, all other levels become unsustainable.
              This level generally needs the most positive energy.
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Center (Purpose)</h4>
            <p className="mb-3">
              The central Purpose node represents the emergent quality that appears when all other
              levels are in appropriate balance. It symbolizes:
            </p>
            <ul className="list-disc pl-5 mb-4">
              <li>Alignment with core values</li>
              <li>Sense of life direction</li>
              <li>Integration of all life domains</li>
              <li>Wholeness of being</li>
            </ul>
            <p>
              The Hebrew symbol "חי" (Chai, meaning "life") represents this vibrancy that emerges
              from proper balance.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Balance Theory Between Levels</h3>
            <p className="mb-4">
              The Priority Tree is built on a core principle: each level must be adequately
              supported by the levels below it. This reflects several natural laws:
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">The Principle of Foundation</h4>
            <p className="mb-4">
              Just as a building requires a solid foundation, your broader commitments require 
              a strong personal foundation. Self-care isn't selfish—it's necessary for sustaining
              all other commitments.
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">The Principle of Energy Flow</h4>
            <p className="mb-4">
              Each level should generate more positive energy than it consumes to support the levels
              above it. Lower levels generally need more positive-weight commitments than upper levels.
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">The Principle of Stress Detection</h4>
            <p className="mb-4">
              When a level has more weight (especially negative weight) than the level below it can support,
              stress results. The Priority Tree visualizes this with red outlines to help identify
              the source of life stress.
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">The Principle of Emergence</h4>
            <p className="mb-4">
              When all levels are in proper balance, something greater than the sum emerges—a sense of
              purpose and alignment represented by the center node. This reflects how life purpose isn't
              just another commitment but emerges from the proper balance of all commitments.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-blue-400 mb-3">Purpose of Weight System</h3>
            <p className="mb-4">
              The weight system (-7 to +7) provides a way to quantify the energy dynamics 
              of your various commitments:
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Positive Weights (+1 to +7)</h4>
            <p className="mb-4">
              Positive weights represent commitments that give you more energy than they take.
              These are activities that leave you feeling energized, fulfilled, or restored.
              The higher the number, the more energizing the commitment.
            </p>
            <p className="mb-4">
              Examples: Enjoyable hobbies (+3 to +5), deeply meaningful work (+3 to +6),
              nourishing relationships (+4 to +7), restorative practices (+5 to +7).
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Negative Weights (-1 to -7)</h4>
            <p className="mb-4">
              Negative weights represent necessary commitments that take more energy than they give back.
              These are not "bad" commitments, but they require energy investment.
              The lower the number, the more draining the commitment.
            </p>
            <p className="mb-4">
              Examples: Difficult but necessary conversations (-2 to -4), challenging work tasks (-1 to -5),
              caring for someone ill (-3 to -6), handling crises (-5 to -7).
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">Neutral Weight (0)</h4>
            <p className="mb-4">
              A weight of zero represents commitments that neither significantly drain nor energize you.
              These are neutral activities that simply need to be done.
            </p>
            
            <h4 className="text-lg font-medium text-purple-300 mt-4 mb-2">The Mathematics of Balance</h4>
            <p className="mb-4">
              The Priority Tree uses these weights to calculate balance:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Each level's total weight is the sum of all commitment weights in that level</li>
              <li>A level is considered balanced if its weight doesn't exceed 1.5 times the weight of the level below it</li>
              <li>The entire tree is balanced when all individual levels are balanced</li>
              <li>When balance is achieved, the Purpose node appears</li>
            </ul>
          </section>

          <div className="mt-6 pt-4 border-t border-gray-700 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophyGuide;
