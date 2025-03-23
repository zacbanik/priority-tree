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

// src/components/documentation/UsageGuide.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface UsageGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const UsageGuide: React.FC<UsageGuideProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('weights');
  
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

        <h2 className="text-2xl font-bold text-white mb-6">Usage Guidelines</h2>

        <div className="mb-6 border-b border-gray-700">
          <div className="flex space-x-4">
            <button
              className={`pb-2 px-1 ${
                activeTab === 'weights'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('weights')}
            >
              Evaluating Weights
            </button>
            <button
              className={`pb-2 px-1 ${
                activeTab === 'stress'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('stress')}
            >
              Stress Indicators
            </button>
            <button
              className={`pb-2 px-1 ${
                activeTab === 'balance'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('balance')}
            >
              Balancing Commitments
            </button>
          </div>
        </div>

        <div className="space-y-6 text-gray-200">
          {activeTab === 'weights' && (
            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">How to Evaluate Commitment Weights</h3>
              
              <p className="mb-4">
                Assigning appropriate weights to your commitments is a reflective process that requires
                honest self-assessment. Here's how to approach it:
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Energy Assessment Questions</h4>
              <p className="mb-3">
                For each commitment, ask yourself:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>How do I feel during this activity? Drained or energized?</li>
                <li>How do I feel after completing this activity? Depleted or fulfilled?</li>
                <li>If I had complete freedom, would I choose to do more or less of this?</li>
                <li>Does this activity align with my core values and personal mission?</li>
                <li>Does this commitment support my long-term wellbeing?</li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Weight Scale Guidelines</h4>
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-green-300 font-semibold">+7:</span> Deeply energizing, aligns perfectly with values, brings joy and meaning
                </div>
                <div>
                  <span className="text-green-400 font-semibold">+5:</span> Significantly energizing, closely aligned with values
                </div>
                <div>
                  <span className="text-green-500 font-semibold">+3:</span> Moderately energizing, generally aligned with values
                </div>
                <div>
                  <span className="text-blue-300 font-semibold">+1:</span> Slightly energizing, somewhat aligned with values
                </div>
                <div>
                  <span className="text-gray-400 font-semibold">0:</span> Neutral, neither energizing nor draining
                </div>
                <div>
                  <span className="text-yellow-300 font-semibold">-1:</span> Slightly draining, necessary but takes some effort
                </div>
                <div>
                  <span className="text-orange-400 font-semibold">-3:</span> Moderately draining, requires significant effort
                </div>
                <div>
                  <span className="text-orange-500 font-semibold">-5:</span> Significantly draining, challenging to maintain
                </div>
                <div>
                  <span className="text-red-500 font-semibold">-7:</span> Extremely draining, requires immense effort to sustain
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Common Pitfalls to Avoid</h4>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>People-pleasing bias:</strong> Assigning more positive weights to things others expect of you
                </li>
                <li>
                  <strong>Should-based thinking:</strong> Assigning weights based on what you think "should" energize you rather than what actually does
                </li>
                <li>
                  <strong>Outcome confusion:</strong> Confusing the outcome's value with the energy dynamics of the process
                </li>
                <li>
                  <strong>Recency bias:</strong> Over-weighting recent experiences rather than the typical pattern
                </li>
                <li>
                  <strong>Avoiding negatives:</strong> Being reluctant to assign negative weights to necessary commitments
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Periodic Reassessment</h4>
              <p className="mb-3">
                Commitment weights aren't static. They can change based on:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Your changing interests and values</li>
                <li>Life stage transitions</li>
                <li>External circumstances</li>
                <li>Your energy levels and health</li>
                <li>Skill development that makes things easier over time</li>
              </ul>
              <p className="mt-3">
                Consider reviewing and adjusting weights every 3-6 months or during major life changes.
              </p>
            </section>
          )}

          {activeTab === 'stress' && (
            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Understanding Stress Indicators</h3>
              
              <p className="mb-4">
                The Priority Tree uses visual indicators to help identify sources of stress and imbalance 
                in your life commitments:
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Red Outlines: Level Imbalance</h4>
              <p className="mb-3">
                When a level shows a red outline, it indicates that this level has more weight (especially 
                negative weight) than the level below it can support. This visualizes the source of 
                potential stress in your life.
              </p>
              <p className="mb-3">
                Common imbalance patterns include:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Work-heavy imbalance:</strong> When Work (Middle Sphere) commitments outweigh 
                  Friends/Family (Lower Sphere) and Self (Foundation) commitments
                </li>
                <li>
                  <strong>Self-neglect pattern:</strong> When all other levels have substantial commitments 
                  but Self (Foundation) commitments are minimal
                </li>
                <li>
                  <strong>Social overextension:</strong> When Society (Upper Sphere) commitments are too 
                  heavy for the supporting levels
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Missing Purpose Node</h4>
              <p className="mb-3">
                When the central Purpose node does not appear, it indicates that the overall tree is not 
                in balance. This reflects how purpose and meaning often feel elusive when our lives 
                lack proper balance.
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Commitment Weight Distribution</h4>
              <p className="mb-3">
                Examining the number and weight of commitments at each level can reveal patterns:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Too many negative weights:</strong> May indicate overcommitment or misalignment with values
                </li>
                <li>
                  <strong>Few positive weights:</strong> May indicate lack of energizing activities
                </li>
                <li>
                  <strong>Imbalanced distribution:</strong> Too many commitments in one area, too few in another
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Interpreting Stress Indicators</h4>
              <p className="mb-3">
                When stress indicators appear, consider these questions:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>Which level is showing imbalance?</li>
                <li>Is the imbalance due to too many negative commitments at that level?</li>
                <li>Is the imbalance due to insufficient positive energy at lower levels?</li>
                <li>What specific commitments are contributing most to the imbalance?</li>
                <li>Are there commitments that could be modified, delegated, or eliminated?</li>
                <li>Are there missing positive commitments that could be added to lower levels?</li>
              </ol>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Using Stress Indicators for Life Design</h4>
              <p className="mb-3">
                The Priority Tree's stress indicators serve as a diagnostic tool for intentional life design:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Identify which levels need adjustment</li>
                <li>Experiment with adding or modifying commitments</li>
                <li>Observe how changes in one level affect the others</li>
                <li>Use the visual feedback to guide decision-making about new opportunities</li>
                <li>Track patterns over time to identify seasonal stressors</li>
              </ul>
            </section>
          )}

          {activeTab === 'balance' && (
            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Balancing Positive and Negative Commitments</h3>
              
              <p className="mb-4">
                Achieving balance in the Priority Tree requires thoughtful distribution of positive
                and negative weighted commitments across all levels:
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">The Balance Principle</h4>
              <p className="mb-3">
                For a sustainable life, each level needs enough positive-weight commitments to offset
                the negative-weight ones, with enough surplus energy to support the levels above it.
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Foundation First Approach</h4>
              <p className="mb-3">
                Start balancing from the bottom up:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>
                  <strong>Self (Foundation):</strong> Ensure this level has the most positive weight, as it supports everything else
                </li>
                <li>
                  <strong>Friends/Family (Lower Sphere):</strong> Build strong positive commitments here, supported by your foundation
                </li>
                <li>
                  <strong>Community/Work (Middle Sphere):</strong> Balance work demands with energizing professional and community activities
                </li>
                <li>
                  <strong>Society (Upper Sphere):</strong> Engage in broader impact once other levels are solid
                </li>
              </ol>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Rebalancing Strategies</h4>
              <p className="mb-3">
                When you detect imbalance, consider these approaches:
              </p>
              <ul className="list-disc pl-5 space-y-3 mb-4">
                <li>
                  <strong>Add positive commitments</strong> to levels that need more energy (especially foundation levels)
                </li>
                <li>
                  <strong>Reduce negative commitments</strong> from levels showing stress indicators
                </li>
                <li>
                  <strong>Transform negative commitments</strong> by changing your approach or mindset
                </li>
                <li>
                  <strong>Redistribute commitments</strong> across levels where appropriate
                </li>
                <li>
                  <strong>Modify commitment intensity</strong> by adjusting time, energy, or expectations
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Recognizing Necessary Negatives</h4>
              <p className="mb-3">
                Some negative-weight commitments are essential and valuable despite their energy cost:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Caregiving for loved ones</li>
                <li>Important but challenging work</li>
                <li>Necessary health procedures</li>
                <li>Learning difficult but valuable skills</li>
                <li>Standing up for important principles</li>
              </ul>
              <p className="mb-3">
                Rather than eliminating these, ensure they are balanced by adequate positive commitments,
                especially at foundation levels.
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Balance Over Time</h4>
              <p className="mb-3">
                Remember that balance can be achieved across different time scales:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Daily balance:</strong> Each day contains some energy-giving and some energy-taking activities
                </li>
                <li>
                  <strong>Weekly balance:</strong> Some days may be more demanding, balanced by more restorative days
                </li>
                <li>
                  <strong>Seasonal balance:</strong> Some periods may require intense focus in one area, balanced by recovery periods
                </li>
                <li>
                  <strong>Life season balance:</strong> Different life stages may have different optimal balance points
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Signs of Successful Balance</h4>
              <p className="mb-3">
                You've achieved good balance when:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>The Purpose node appears in your Priority Tree</li>
                <li>You have sufficient energy for all important commitments</li>
                <li>Your necessary negative commitments feel sustainable</li>
                <li>You experience a sense of meaning and direction</li>
                <li>Stress feels manageable rather than overwhelming</li>
                <li>You can respond to unexpected demands without collapse</li>
              </ul>
            </section>
          )}

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

export default UsageGuide;

// src/components/documentation/BestPracticesGuide.tsx
import React, { useState } from 'react';
import { X } from 'lucide-react';

interface BestPracticesGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const BestPracticesGuide: React.FC<BestPracticesGuideProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('review');
  
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

        <h2 className="text-2xl font-bold text-white mb-6">Best Practices</h2>

        <div className="mb-6 border-b border-gray-700">
          <div className="flex space-x-4">
            <button
              className={`pb-2 px-1 ${
                activeTab === 'review'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('review')}
            >
              Regular Review
            </button>
            <button
              className={`pb-2 px-1 ${
                activeTab === 'negative'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('negative')}
            >
              Negative Weights
            </button>
            <button
              className={`pb-2 px-1 ${
                activeTab === 'stress'
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
              onClick={() => setActiveTab('stress')}
            >
              Managing Stress
            </button>
          </div>
        </div>

        <div className="space-y-6 text-gray-200">
          {activeTab === 'review' && (
            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Regular Commitment Review</h3>
              
              <p className="mb-4">
                Regular review of your Priority Tree is essential for maintaining life balance
                and adapting to changing circumstances:
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Recommended Review Cadence</h4>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Weekly mini-review:</strong> Brief check-in on current balance and upcoming commitments
                </li>
                <li>
                  <strong>Monthly deeper review:</strong> Examine each level and assess weights and balance
                </li>
                <li>
                  <strong>Quarterly full review:</strong> Comprehensive assessment of all commitments
                </li>
                <li>
                  <strong>Annual life review:</strong> Deep reflection on overall life direction and major commitments
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Structured Review Process</h4>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>
                  <strong>Export your current Priority Tree</strong> data to preserve your baseline
                </li>
                <li>
                  <strong>Review each commitment individually:</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Is this still relevant to your life?</li>
                    <li>Is the weight still accurate?</li>
                    <li>Has its importance or energy impact changed?</li>
                  </ul>
                </li>
                <li>
                  <strong>Scan for missing commitments:</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>What new activities have entered your life?</li>
                    <li>What have you been doing that isn't represented?</li>
                    <li>What important areas might be neglected?</li>
                  </ul>
                </li>
                <li>
                  <strong>Check for stress indicators</strong> and imbalances in the updated tree
                </li>
                <li>
                  <strong>Make intentional adjustments</strong> to restore balance
                </li>
              </ol>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Life Transition Reviews</h4>
              <p className="mb-3">
                In addition to regular reviews, conduct special reviews during major life transitions:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Career changes</li>
                <li>Relationship beginnings or endings</li>
                <li>Geographic moves</li>
                <li>Health changes</li>
                <li>Family additions or losses</li>
                <li>Financial shifts</li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Review Questions for Deeper Insight</h4>
              <p className="mb-3">
                Ask yourself these questions during more comprehensive reviews:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Which commitments consistently drain me, and which consistently energize me?</li>
                <li>Are there patterns to when I feel most balanced or most stressed?</li>
                <li>What commitments might I be avoiding adding to my tree?</li>
                <li>What would I add or remove if I had complete freedom?</li>
                <li>Which areas feel most aligned with my sense of purpose?</li>
                <li>If I could only keep three commitments from each level, which would they be?</li>
              </ul>
            </section>
          )}

          {activeTab === 'negative' && (
            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Using Negative Weights Appropriately</h3>
              
              <p className="mb-4">
                Negative weights are a crucial part of the Priority Tree system, representing necessary
                commitments that require energy investment. Using them wisely is key to an accurate representation
                of your life balance:
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Understanding Negative Weights</h4>
              <p className="mb-3">
                Negative weights don't necessarily mean "bad" commitments. They represent:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Necessary activities that temporarily drain energy</li>
                <li>Important commitments that are currently challenging</li>
                <li>Obligations that align with your values but require significant effort</li>
                <li>Investments that may have long-term benefit despite short-term cost</li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Appropriate Use of Negative Weights</h4>
              <p className="mb-3">
                Best practices for assigning negative weights include:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Be honest about energy costs:</strong> Don't minimize the drain of truly difficult commitments
                </li>
                <li>
                  <strong>Consider separating aspects:</strong> Break down complex commitments into positive and negative components when possible
                </li>
                <li>
                  <strong>Recognize necessary negatives:</strong> Some important commitments will always have energy costs
                </li>
                <li>
                  <strong>Use the full scale:</strong> Don't hesitate to use the full -1 to -7 range for accurate representation
                </li>
                <li>
                  <strong>Reassess regularly:</strong> What drains energy can change over time as skills, circumstances, and mindsets evolve
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Evaluating High-Cost Commitments</h4>
              <p className="mb-3">
                For commitments with significant negative weights (-5 to -7), ask:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>Is this truly necessary, or could it be eliminated?</li>
                <li>Could this be delegated or shared with others?</li>
                <li>Can it be restructured to be less draining?</li>
                <li>Is it time-limited with a clear end point?</li>
                <li>Is there adequate compensation in other areas of life?</li>
                <li>Does it align with core values despite the cost?</li>
              </ol>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Balancing Negative Commitments</h4>
              <p className="mb-3">
                Sustainability requires balancing negative-weight commitments:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Energy equation:</strong> Ensure total positive energy outweighs negative at each level
                </li>
                <li>
                  <strong>Support structure:</strong> High-cost commitments need strong foundation layers beneath them
                </li>
                <li>
                  <strong>Distribution principle:</strong> Spread high-cost commitments across different life areas rather than concentrating them
                </li>
                <li>
                  <strong>Adjacent positives:</strong> When possible, pair difficult commitments with energizing ones
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Transforming Negative Weights</h4>
              <p className="mb-3">
                Some commitments can shift from negative to less negative or even positive through:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Skill development that makes tasks easier</li>
                <li>Mindset shifts that change your relationship to the activity</li>
                <li>Finding meaning in previously draining tasks</li>
                <li>Restructuring how, when, or with whom you fulfill the commitment</li>
                <li>Breaking overwhelming commitments into smaller, more manageable parts</li>
              </ul>
            </section>
          )}

          {activeTab === 'stress' && (
            <section>
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Managing Stress Between Levels</h3>
              
              <p className="mb-4">
                The Priority Tree helps visualize and manage stress by showing imbalances between levels.
                Here are best practices for addressing these imbalances:
              </p>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Identifying Stress Patterns</h4>
              <p className="mb-3">
                Common stress patterns in the Priority Tree include:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Top-heavy structure:</strong> Upper levels demanding more than lower levels can sustain
                </li>
                <li>
                  <strong>Foundation erosion:</strong> Neglect of self-care while maintaining other commitments
                </li>
                <li>
                  <strong>Middle collapse:</strong> Work/community demands exceeding capacity
                </li>
                <li>
                  <strong>Isolated islands:</strong> Disconnection between levels rather than supporting flow
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Systemic Stress Reduction Strategies</h4>
              <p className="mb-3">
                Addressing stress requires systematic approaches:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>
                  <strong>Foundation strengthening:</strong> Add positive commitments to Self level first
                </li>
                <li>
                  <strong>Upward limiting:</strong> Temporarily reduce upper-level commitments during stress
                </li>
                <li>
                  <strong>Cross-level integration:</strong> Look for ways to align commitments across levels
                </li>
                <li>
                  <strong>Strategic sequencing:</strong> Focus on one level at a time rather than trying to fix everything at once
                </li>
                <li>
                  <strong>Critical path analysis:</strong> Identify the most stress-generating commitments and address them first
                </li>
              </ol>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Level-Specific Interventions</h4>
              <p className="mb-3">
                Different levels may need different approaches:
              </p>
              <ul className="list-disc pl-5 space-y-3 mb-4">
                <li>
                  <strong>Self (Foundation):</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Prioritize basic needs: sleep, nutrition, movement</li>
                    <li>Add small, reliable positive commitments</li>
                    <li>Create clear boundaries around restoration time</li>
                  </ul>
                </li>
                <li>
                  <strong>Friends/Family (Lower Sphere):</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Focus on quality over quantity in relationships</li>
                    <li>Communicate clearly about capacity and needs</li>
                    <li>Cultivate reciprocal relationships that give energy</li>
                  </ul>
                </li>
                <li>
                  <strong>Community/Work (Middle Sphere):</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Set clearer boundaries around work hours and expectations</li>
                    <li>Delegate or renegotiate responsibilities when overloaded</li>
                    <li>Seek more energizing aspects within necessary work</li>
                  </ul>
                </li>
                <li>
                  <strong>Society (Upper Sphere):</strong>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    <li>Focus on fewer, more meaningful contributions</li>
                    <li>Find ways to align societal involvement with personal strengths</li>
                    <li>Scale back during periods of stress in lower levels</li>
                  </ul>
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Transitional Balance Strategies</h4>
              <p className="mb-3">
                During high-stress periods, consider these temporary adaptations:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>
                  <strong>Minimum viable commitments:</strong> Identify the essential core in each level to maintain
                </li>
                <li>
                  <strong>Temporary scaffolding:</strong> Add supports (assistance, services) during transition periods
                </li>
                <li>
                  <strong>Intentional imbalance:</strong> Consciously focus on one level for a defined period, with a plan to rebalance
                </li>
                <li>
                  <strong>Regular recovery cycles:</strong> Build in deliberate recovery periods after intense commitments
                </li>
              </ul>
              
              <h4 className="text-lg font-medium text-purple-300 mt-5 mb-2">Long-Term Stress Resilience</h4>
              <p className="mb-3">
                Building sustainable balance over time:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Develop awareness of early stress signals in your system</li>
                <li>Create preemptive adjustments before stress indicators appear</li>
                <li>Build flexibility into your commitments to allow for natural fluctuations</li>
                <li>Maintain a reserve capacity by not maximizing every level</li>
                <li>Regularly review and adjust the entire system as a preventive measure</li>
              </ul>
            </section>
          )}

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

export default BestPracticesGuide;
