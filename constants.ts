
import { Syllabus, QuizQuestion, LearningStyle } from './types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "When learning something new, what helps you the most?",
    options: [
      { text: "Watching diagrams, charts, and videos.", style: LearningStyle.Visual },
      { text: "Listening to someone explain it.", style: LearningStyle.Auditory },
      { text: "Doing it myself, hands-on.", style: LearningStyle.Kinesthetic },
      { text: "Reading about it in a textbook or article.", style: LearningStyle.ReadingWriting },
    ],
  },
  {
    question: "How do you prefer to study for an exam?",
    options: [
      { text: "Creating mind maps or color-coding my notes.", style: LearningStyle.Visual },
      { text: "Discussing the topics with a study group.", style: LearningStyle.Auditory },
      { text: "Building a model or pacing while I review.", style: LearningStyle.Kinesthetic },
      { text: "Writing and re-writing summaries of my notes.", style: LearningStyle.ReadingWriting },
    ],
  },
  {
    question: "What's your typical approach to assembling furniture?",
    options: [
      { text: "I look at the diagrams in the manual first.", style: LearningStyle.Visual },
      { text: "I'd prefer if someone could talk me through the steps.", style: LearningStyle.Auditory },
      { text: "I just start putting pieces together and figure it out.", style: LearningStyle.Kinesthetic },
      { text: "I read the written instructions step-by-step.", style: LearningStyle.ReadingWriting },
    ],
  },
  {
    question: "When you get a new gadget, you...",
    options: [
      { text: "Watch a tutorial video about it.", style: LearningStyle.Visual },
      { text: "Ask a friend to show you how it works.", style: LearningStyle.Auditory },
      { text: "Press all the buttons and see what happens.", style: LearningStyle.Kinesthetic },
      { text: "Read the user manual thoroughly.", style: LearningStyle.ReadingWriting },
    ],
  },
];


export const BBA_SYLLABUS: Syllabus = {
  title: "BBA 1st Sem to 8th Sem",
  semesters: [
    {
      id: "1st Semester",
      courses: [
        {
          code: "BBA 101",
          title: "Principles of Management",
          category: "Major",
          credits: 5,
          modules: [
            {
              id: "M1",
              name: "Concept & Nature of Management and Management Theory",
              hours: 12,
              topics: ["Meaning, significance & definition of management", "Management as science or art, process, vs administration", "Levels and limitations of management", "Approaches to Management - Classical, Neo-Classical and Modern thought"],
            },
            {
              id: "M2",
              name: "Planning & Decision Making",
              hours: 12,
              topics: ["Meaning, definition, process, significance, and limitations of planning", "Types of planning", "Decision Making: meaning, types, process, significance, and limitations", "Environment in decision making, Steps, Modern Approaches, DSS"],
            },
            { id: "M3", name: "Organising", hours: 12, topics: ["Nature & Significance of Organization", "Authority & Responsibility Relationships", "Span of control, delegation process, barriers", "Centralization vs decentralization", "Line and staff organization, organization structures"] },
            { id: "M4", name: "Directing", hours: 10, topics: ["Motivation: meaning, theories", "Leadership: meaning, styles", "Communication: process, barriers, overcoming barriers"] },
            { id: "M5", name: "Controlling", hours: 7, topics: ["Meaning, definition & importance", "Steps in controlling process", "Critical control point, types of managerial control", "Requirements of good control system"] },
            { id: "M6", name: "Management of Change", hours: 7, topics: ["Definition, nature & importance", "Planned vs unplanned change", "Change forces, process of change", "Change agents, resistance to change", "Overcoming resistance"] },
          ],
        },
        {
          code: "BBA 102",
          title: "Micro Economics",
          category: "Major",
          credits: 4,
          modules: [
              { id: "M1", name: "Introduction", hours: 4, topics: ["Basic Problems of an Economy", "Working of Price Mechanism and Resource Allocation", "Production Possibility Curve; Opportunity Cost"] },
              { id: "M2", name: "Basic Elements of Demand and Supply", hours: 10, topics: ["Demand: Meaning, Schedule, Curve, Determinants, Law, Changes", "Supply: Meaning, Schedule, Curve, Determinants, Law, Changes", "Equilibrium of Demand and Supply", "Elasticity of Demand and Supply"] },
              { id: "M3", name: "Theory of Consumer Behavior", hours: 8, topics: ["Cardinal Utility Approach", "Indifference Curve Approach", "Consumer's Equilibrium"] },
              { id: "M4", name: "Production Function", hours: 10, topics: ["Law of Variable Proportions", "Isoquants, Economic Regions", "Optimum Factor Combination", "Returns of Scale", "Theory of Costs"] },
              { id: "M5", name: "Market Structures", hours: 12, topics: ["Perfect Competition", "Monopoly", "Monopolistic Competition", "Oligopoly"] },
              { id: "M6", name: "Factor Pricing", hours: 6, topics: ["Marginal Productivity Theory", "Concept of Rent", "Concept of Labour", "Concept of Capital", "Concept of Profit"] },
          ],
        },
        {
          code: "BBA 103",
          title: "Computer Fundamentals",
          category: "Minor",
          credits: 2,
          modules: [
            { id: "M1", name: "Basic Computer Concepts", hours: 5, topics: ["Generations of computer hardware", "Taxonomy of computers", "Hardware and software", "Programming languages", "Classification of computers"] },
            { id: "M2", name: "Computer Hardware", hours: 7, topics: ["Input and Output devices", "Memory (storage) devices", "Primary and Secondary storage", "Central Processing Unit"] },
            { id: "M3", name: "Computer Software", hours: 5, topics: ["Meaning and classification of software", "System and application software", "Operating systems basics"] },
            { id: "M4", name: "Programming languages and Algorithms", hours: 9, topics: ["Concept of programming, pseudocode, flowcharts", "Programming language types", "Compilers, translators, assemblers", "Basic algorithms"] },
            { id: "M5", name: "Computer Applications", hours: 4, topics: ["Office automation", "Communications", "Control systems", "Data acquisition", "Interactive multimedia", "LAN, WAN, MAN networking"] },
          ],
        },
        // Additional courses from the syllabus can be added here following the same structure.
      ],
    },
    // Other semesters can be added here
  ],
};
