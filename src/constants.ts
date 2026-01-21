
import { ServiceTier, AddOn } from './types';

export const COLORS = {
  WHITE: '#FAFAFA',
  OFF_WHITE: '#F5F5F5',
  FOX_BROWN: '#C17854',
  FOX_BROWN_DARK: '#B86F47',
  TEXT_DARK: '#333333',
  TEXT_MID: '#666666',
};

export const SERVICE_TIERS: ServiceTier[] = [
  {
    id: 'profile',
    title: 'AI Business Profile',
    price: '$750 – $1,500',
    tagline: 'Best for getting started',
    color: 'bg-green-500',
    description: 'A clear, accurate AI representation of your business so AI tools stop guessing and start answering correctly.',
    process: 'We gather your existing business information and intentionally organize it so AI understands who you are, what you offer, how to describe you, and what it should and should not say.',
    included: [
      'Guided intake to understand your business',
      'Curated business information (services, positioning, tone)',
      'Custom AI assistant trained on your real data',
      'Brand and tone guardrails',
      'Clear boundaries around what the AI should not answer',
      'A shareable, controlled AI experience'
    ],
    outcome: 'AI can accurately introduce your business instead of guessing.',
    ctaText: 'Get Started'
  },
  {
    id: 'system',
    title: 'AI Knowledge System',
    price: '$3,000 – $8,000',
    tagline: 'Best for growing businesses and teams',
    color: 'bg-blue-500',
    isPopular: true,
    description: 'A structured, centralized source of truth that AI tools can actually use — now and in the future.',
    process: 'We take everything your business already has and turn it into a usable knowledge system. This system becomes the foundation AI tools reference instead of scattered pages, documents, or assumptions.',
    included: [
      'Discovery and knowledge mapping',
      'Creation of a centralized AI-ready knowledge structure',
      'Organized categories (Services, Messaging, Policies, FAQs)',
      'AI connected directly to this source of truth',
      'Custom AI assistant powered by your knowledge system',
      'Testing and refinement for accuracy',
      'Documentation for future expansion'
    ],
    outcome: 'AI answers from your business, not about your business.',
    ctaText: 'Build Your System'
  },
  {
    id: 'management',
    title: 'AI Presence Management',
    price: '$1,500 – $5,000/month',
    tagline: '3–6 month minimum commitment',
    color: 'bg-red-500',
    description: 'Ongoing management to keep your business accurate, current, and relevant as AI systems and your company change.',
    process: 'We actively maintain and update your AI knowledge system so it never becomes outdated. New information is integrated intentionally, and AI behavior is monitored over time.',
    included: [
      'Regular knowledge updates and refresh cycles',
      'Integration of new content (blogs, newsletters, changes)',
      'Ongoing AI accuracy checks and adjustments',
      'Monitoring of how AI tools interpret your business',
      'Strategic guidance as AI platforms evolve',
      'Priority support and system refinement'
    ],
    outcome: 'Your business stays accurate and relevant in an AI-first world — without you needing to manage it.',
    ctaText: "Let's Talk"
  }
];

export const ADD_ONS: AddOn[] = [
  {
    title: 'Internal Team AI Assistant',
    price: '$500 – $1,500',
    description: 'A private AI assistant trained specifically for your internal team.',
    included: [
      'AI trained on internal processes and documentation',
      'Answers internal questions accurately',
      'Reduces onboarding time',
      'Aligned with company tone'
    ],
    outcome: 'Your team gets the same clear answers every time.'
  },
  {
    title: 'Website AI Chat',
    price: '$750 – $2,000',
    description: 'A customer-facing AI assistant connected directly to your knowledge system.',
    included: [
      'AI chat embedded on your website',
      'Answers customer questions accurately',
      'Reflects real services and policies',
      'Reduces support load'
    ],
    outcome: 'Customers get accurate answers without friction.'
  },
  {
    title: 'Multi-Platform AI Readiness',
    price: '$1,000 – $3,000',
    description: 'Structuring your knowledge so it works across multiple AI tools and platforms.',
    included: [
      'Formatting for GPTs, Website chat, Internal tools',
      'Platform-agnostic structure',
      'Future-proofed organization'
    ],
    outcome: 'Your AI knowledge works everywhere, not just in one tool.'
  },
  {
    title: 'Compliance & Tone Guardrails',
    price: '$500 – $1,500',
    description: 'Clear boundaries around what AI should and should not say.',
    included: [
      'Tone enforcement',
      'Policy awareness',
      'Risk and compliance constraints',
      'Clear "do not answer" rules'
    ],
    outcome: 'Reduced risk and consistent brand representation.'
  },
  {
    title: 'Quarterly AI Accuracy Audit',
    price: '$750 – $1,500 per audit',
    description: 'A structured review of how AI tools are currently interpreting your business.',
    included: [
      'Accuracy testing across key questions',
      'Identification of gaps or outdated responses',
      'Recommendations for improvements',
      'Optional system updates'
    ],
    outcome: 'Confidence that AI is still getting your business right.'
  }
];
