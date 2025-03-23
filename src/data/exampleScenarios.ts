import { CommitmentsMap } from '../contexts/TreeDataContext';

interface ExampleScenario {
  id: string;
  title: string;
  category: string;
  description: string;
  commitments: CommitmentsMap;
}

export const exampleScenarios: ExampleScenario[] = [
  {
    id: 'balanced-life',
    title: 'Balanced Life',
    category: 'General Example',
    description: 'A well-balanced example showing how commitments can be distributed across all spheres while maintaining overall harmony.',
    commitments: {
      'Purpose': [],
      'Society': [
        { name: 'Community Volunteering', weight: 3 },
        { name: 'Environmental Activism', weight: 2 },
        { name: 'Local Politics', weight: -1 }
      ],
      'Community': [
        { name: 'Neighborhood Association', weight: 2 },
        { name: 'Local Events', weight: 3 }
      ],
      'Work': [
        { name: 'Primary Job', weight: 2 },
        { name: 'Side Project', weight: 4 },
        { name: 'Difficult Client', weight: -2 }
      ],
      'Friends': [
        { name: 'Close Friends Gatherings', weight: 5 },
        { name: 'Support for Friend in Need', weight: -1 },
        { name: 'Social Events', weight: 2 }
      ],
      'Family': [
        { name: 'Quality Time with Partner', weight: 6 },
        { name: 'Caring for Children', weight: 4 },
        { name: 'Extended Family Obligations', weight: -3 }
      ],
      'Self': [
        { name: 'Exercise', weight: 5 },
        { name: 'Meditation', weight: 4 },
        { name: 'Creative Hobbies', weight: 6 },
        { name: 'Personal Development', weight: 3 },
        { name: 'Health Management', weight: -2 }
      ]
    }
  },
  {
    id: 'work-life-imbalance',
    title: 'Work-Life Imbalance',
    category: 'Problem Example',
    description: 'An example of work commitments creating stress by outweighing foundation levels, showing how imbalance appears in the tree.',
    commitments: {
      'Purpose': [],
      'Society': [
        { name: 'Industry Conference Speaking', weight: 2 }
      ],
      'Community': [
        { name: 'Professional Network', weight: 1 }
      ],
      'Work': [
        { name: 'Primary Job', weight: -5 },
        { name: 'Overtime', weight: -4 },
        { name: 'Side Project', weight: 3 },
        { name: 'Work Travel', weight: -2 },
        { name: 'Team Leadership', weight: -3 },
        { name: 'Client Management', weight: -2 }
      ],
      'Friends': [
        { name: 'Occasional Meetups', weight: 2 }
      ],
      'Family': [
        { name: 'Basic Family Time', weight: 3 },
        { name: 'Missed Family Events', weight: -2 }
      ],
      'Self': [
        { name: 'Insufficient Sleep', weight: -3 },
        { name: 'Rushed Exercise', weight: 1 }
      ]
    }
  },
  {
    id: 'family-focused',
    title: 'Family-Focused Life',
    category: 'Lifestyle Example',
    description: 'An example centered on family commitments with supportive self-care, showing a balanced approach to family priorities.',
    commitments: {
      'Purpose': [],
      'Society': [
        { name: 'School Volunteer', weight: 2 },
        { name: 'Community Garden', weight: 3 }
      ],
      'Community': [
        { name: 'Parent Teacher Association', weight: 1 },
        { name: 'Neighborhood Events', weight: 2 }
      ],
      'Work': [
        { name: 'Part-time Job', weight: 1 },
        { name: 'Freelance Work', weight: 2 }
      ],
      'Friends': [
        { name: 'Family-Friend Gatherings', weight: 4 },
        { name: 'Parent Friends', weight: 3 }
      ],
      'Family': [
        { name: 'Parenting', weight: 5 },
        { name: 'Family Activities', weight: 6 },
        { name: 'Partner Relationship', weight: 5 },
        { name: 'Extended Family Care', weight: -2 },
        { name: 'Family Projects', weight: 3 }
      ],
      'Self': [
        { name: 'Family Exercise', weight: 4 },
        { name: 'Parenting Education', weight: 3 },
        { name: 'Sleep Routine', weight: 4 },
        { name: 'Personal Reading', weight: 3 },
        { name: 'Mindfulness Practice', weight: 2 }
      ]
    }
  },
  {
    id: 'personal-growth',
    title: 'Personal Growth Focus',
    category: 'Lifestyle Example',
    description: 'An example prioritizing self-development while maintaining appropriate commitments at higher levels.',
    commitments: {
      'Purpose': [],
      'Society': [
        { name: 'Knowledge Sharing', weight: 3 },
        { name: 'Mentoring Others', weight: 2 }
      ],
      'Community': [
        { name: 'Learning Group', weight: 3 },
        { name: 'Skill-sharing Network', weight: 2 }
      ],
      'Work': [
        { name: 'Minimalist Job Approach', weight: -1 },
        { name: 'Skills Application', weight: 4 },
        { name: 'Portfolio Projects', weight: 5 }
      ],
      'Friends': [
        { name: 'Growth-oriented Friendships', weight: 4 },
        { name: 'Intellectual Conversations', weight: 3 },
        { name: 'Limited Social Obligations', weight: -1 }
      ],
      'Family': [
        { name: 'Quality Family Time', weight: 3 },
        { name: 'Teaching Family Members', weight: 2 }
      ],
      'Self': [
        { name: 'Dedicated Learning', weight: 6 },
        { name: 'Meditation', weight: 5 },
        { name: 'Physical Training', weight: 5 },
        { name: 'Creative Practice', weight: 4 },
        { name: 'Journaling', weight: 3 },
        { name: 'Rest & Recovery', weight: 4 }
      ]
    }
  },
  {
    id: 'transitional-period',
    title: 'Life Transition',
    category: 'Situation Example',
    description: 'An example showing how to manage commitments during a major life transition, balancing new priorities with old ones.',
    commitments: {
      'Purpose': [],
      'Society': [
        { name: 'Reduced External Commitments', weight: -1 }
      ],
      'Community': [
        { name: 'New Community Exploration', weight: 2 },
        { name: 'Old Community Connections', weight: -2 }
      ],
      'Work': [
        { name: 'Career Change Preparation', weight: 3 },
        { name: 'Current Job Maintenance', weight: -3 },
        { name: 'Learning New Skills', weight: 4 }
      ],
      'Friends': [
        { name: 'Core Support Friends', weight: 5 },
        { name: 'New Social Connections', weight: 2 },
        { name: 'Letting Go of Old Circles', weight: -2 }
      ],
      'Family': [
        { name: 'Family Support System', weight: 5 },
        { name: 'Explaining Changes to Family', weight: -1 }
      ],
      'Self': [
        { name: 'Emotional Processing', weight: 3 },
        { name: 'Identity Exploration', weight: 4 },
        { name: 'Extra Self-Care', weight: 5 },
        { name: 'Future Planning', weight: 3 },
        { name: 'Managing Uncertainty', weight: -3 },
        { name: 'Rest & Integration', weight: 4 }
      ]
    }
  }
];
