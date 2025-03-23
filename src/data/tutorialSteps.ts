// src/data/tutorialSteps.ts
import { TutorialStep } from '../components/onboarding/TutorialOverlay';

export const tutorialSteps: TutorialStep[] = [
  {
    target: ".tree-svg",
    title: "Welcome to Priority Tree",
    content: "Priority Tree helps you visualize and balance commitments across different spheres of life. Let's take a tour!",
    position: "bottom"
  },
  {
    target: ".upper-sphere",
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
