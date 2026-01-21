
export enum Page {
  Home = 'home',
  Services = 'services',
  HowItWorks = 'how-it-works',
  WhyThisMatters = 'why-this-matters',
  OurApproach = 'our-approach',
  DiscoveryCall = 'discovery-call'
}

export interface ServiceTier {
  id: string;
  title: string;
  price: string;
  tagline: string;
  color: string;
  description: string;
  process: string;
  included: string[];
  outcome: string;
  ctaText: string;
  isPopular?: boolean;
}

export interface AddOn {
  title: string;
  price: string;
  description: string;
  included: string[];
  outcome: string;
}
