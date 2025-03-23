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
