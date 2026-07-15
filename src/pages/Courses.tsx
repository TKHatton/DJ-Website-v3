
import React from 'react';
import { Page } from '../types';

interface CoursesProps {
  onNavigate: (page: Page) => void;
}

interface CourseTier {
  category: string;
  description: string;
  color: string;
  courses: {
    title: string;
    price: string;
    description: string;
    format: string;
    duration: string;
    includes: string[];
    ctaText: string;
    ctaLink?: string;
  }[];
}

const COURSE_TIERS: CourseTier[] = [
  {
    category: 'Self-Paced Courses',
    description: 'Learn at your own speed. Lifetime access to all materials.',
    color: '#4CAF50',
    courses: [
      {
        title: 'AI Foundations: The Jaywalking Method',
        price: '$197',
        description: 'Understand how AI thinks, what it\'s capable of, and how to use it effectively — even if you\'ve never touched AI before.',
        format: 'Pre-recorded video lessons + guides',
        duration: 'Self-paced, ~6 hours',
        includes: [
          'How AI actually works (no jargon)',
          'Prompting fundamentals & frameworks',
          'Choosing the right AI tool for the job',
          'Real-world use cases across industries',
          'Downloadable prompt templates',
          'Certificate of completion'
        ],
        ctaText: 'Enroll Now'
      },
      {
        title: 'Claude Certified Architect Prep',
        price: '$67',
        description: '422 practice questions with detailed explanations covering all 5 exam domains. Timed mock exams, weak-spot drills, and a study plan to get you past 720.',
        format: 'Interactive web app + practice bank',
        duration: 'Self-paced, 4-week study plan',
        includes: [
          '422 scenario-based practice questions',
          'Full timed mock exams (60 Q, 120 min)',
          'Weak-spot identification & targeted drills',
          'Score tracking on 100–1000 scale',
          'Study curriculum with daily breakdowns',
          'Progress tracking & exam history'
        ],
        ctaText: 'Start Studying'
      },
      {
        title: 'AI Tools Deep-Dive',
        price: '$47 each',
        description: 'Focused masterclasses on specific AI tools. Pick the one you need — go deep, walk away confident.',
        format: 'Pre-recorded workshop',
        duration: 'Self-paced, ~2 hours each',
        includes: [
          'Tool-specific workflows & best practices',
          'Hands-on exercises with real scenarios',
          'Comparison with alternatives',
          'Quick-reference cheat sheets'
        ],
        ctaText: 'Choose a Tool'
      }
    ]
  },
  {
    category: 'Cohort-Based Training',
    description: 'Learn live with a small group. Real-time feedback and community.',
    color: '#C17854',
    courses: [
      {
        title: '4-Week AI Implementation Cohort',
        price: '$500',
        description: 'A structured 4-week program where your team learns to use AI tools effectively. Weekly live sessions, exercises, and a capstone project.',
        format: 'Live cohort, 4 weekly sessions (60–90 min each)',
        duration: '4 weeks',
        includes: [
          '4 live group sessions with Q&A',
          'Hands-on exercises between sessions',
          'Team-focused AI workflow design',
          'Capstone: apply AI to a real business process',
          'Private group chat for support',
          'Post-cohort resource access'
        ],
        ctaText: 'Join Next Cohort'
      },
      {
        title: 'AI for Business Leaders',
        price: '$750',
        description: 'A compact program for leaders who need to understand AI strategy, make decisions about AI adoption, and guide their teams — without becoming technical experts.',
        format: 'Live cohort, 3 weekly sessions (60 min each)',
        duration: '3 weeks',
        includes: [
          'AI landscape & what matters to your business',
          'Strategic decision frameworks',
          'Vendor & tool evaluation criteria',
          'Risk management and compliance basics',
          'Peer discussions with other leaders',
          'Action plan template'
        ],
        ctaText: 'Request Info'
      }
    ]
  },
  {
    category: 'Consulting & Custom',
    description: 'Tailored engagement for teams that need hands-on guidance.',
    color: '#333333',
    courses: [
      {
        title: 'AI Readiness Audit',
        price: '$2,500',
        description: 'A comprehensive assessment of how your organization currently uses (or misses) AI opportunities. You get a clear roadmap, not a generic report.',
        format: 'Discovery calls + async analysis + final presentation',
        duration: '2–3 weeks',
        includes: [
          'Stakeholder interviews (2–3 sessions)',
          'Current tool & workflow audit',
          'Gap analysis & opportunity mapping',
          'Prioritized roadmap with quick wins',
          'Final presentation to leadership',
          'Written report with recommendations'
        ],
        ctaText: 'Book a Call'
      },
      {
        title: 'Custom AI Training Program',
        price: '$3,500+',
        description: 'Bespoke training designed around your team\'s specific tools, workflows, and goals. We build the curriculum around what your people actually need.',
        format: 'Custom delivery (live, hybrid, or recorded)',
        duration: 'Scopes to your needs',
        includes: [
          'Custom curriculum design',
          'Role-specific training modules',
          'Live workshops or async delivery',
          'Team-specific exercises & workflows',
          'Post-training support period',
          'Measurable skill benchmarks'
        ],
        ctaText: 'Discuss Your Needs'
      },
      {
        title: 'AI Transformation Retainer',
        price: '$5,000/mo',
        description: 'Ongoing consulting partnership. We embed with your team to drive AI adoption, solve problems as they arise, and keep evolving your approach.',
        format: 'Retainer engagement',
        duration: '3-month minimum',
        includes: [
          'Weekely strategy sessions',
          'On-call AI guidance for your team',
          'Workflow design & optimization',
          'Tool selection & setup support',
          'Monthly progress reports',
          'Direct Slack/email access'
        ],
        ctaText: 'Let\'s Talk'
      }
    ]
  }
];

const Courses: React.FC<CoursesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <p className="text-[#C17854] font-bold uppercase tracking-[0.2em] text-xs mb-6">Digital Jaywalking Academy</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#333333] mb-8 tracking-tight">Learn AI the Practical Way</h1>
        <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto font-light leading-relaxed">
          Courses, cohorts, and consulting — from first prompt to full team implementation.
        </p>
      </header>

      {/* Course Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {COURSE_TIERS.map((tier, tierIdx) => (
          <div key={tierIdx}>
            <div className="mb-12">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tier.color }} />
                <h2 className="text-3xl md:text-4xl font-bold text-[#333333] tracking-tight">{tier.category}</h2>
              </div>
              <p className="text-lg text-[#666666] font-light ml-7">{tier.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {tier.courses.map((course, courseIdx) => (
                <div
                  key={courseIdx}
                  className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#E5E5E5] hover:border-[#C17854] transition-all duration-300 flex flex-col"
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-[#333333] mb-2">{course.title}</h3>
                    <p className="text-3xl font-bold text-[#C17854]">{course.price}</p>
                  </div>

                  <p className="text-[#666666] text-base mb-6 leading-relaxed flex-grow">{course.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-1">Format</p>
                    <p className="text-sm text-[#666666]">{course.format}</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-1 mt-3">Duration</p>
                    <p className="text-sm text-[#666666]">{course.duration}</p>
                  </div>

                  <div className="mt-4 mb-6 pt-4 border-t border-[#E5E5E5]">
                    <p className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">What's Included</p>
                    <ul className="space-y-2">
                      {course.includes.map((item, i) => (
                        <li key={i} className="text-sm text-[#666666] flex items-start">
                          <div className="h-4 w-4 text-[#C17854] mr-3 flex-shrink-0 mt-0.5">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => onNavigate(Page.DiscoveryCall)}
                    className="w-full py-4 bg-[#333333] text-white font-bold rounded-xl hover:bg-[#444444] transition-all transform hover:scale-[1.01]"
                  >
                    {course.ctaText}
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-40 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#333333] py-28 rounded-[4rem] text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Not sure where to start?</h2>
        <p className="text-lg text-gray-400 font-light max-w-xl mx-auto mb-10">
          Book a free 15-minute call. We'll figure out the right path — a course, a cohort, or something custom.
        </p>
        <div className="max-w-md mx-auto space-y-6">
          <button
            onClick={() => onNavigate(Page.DiscoveryCall)}
            className="w-full py-6 bg-[#C17854] text-white font-bold rounded-2xl hover:bg-[#B86F47] transition-all text-xl"
          >
            Schedule a Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default Courses;
