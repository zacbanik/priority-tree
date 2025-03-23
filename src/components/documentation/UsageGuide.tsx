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
