
import React from 'react';
import { Page } from '../types';

interface OurApproachProps {
  onNavigate: (page: Page) => void;
}

const OurApproach: React.FC<OurApproachProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 text-center">
        <p className="text-[#C17854] font-bold uppercase tracking-[0.2em] text-xs mb-6">Philosophy</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#333333] mb-8 tracking-tight">Our Approach</h1>
        <p className="text-xl md:text-3xl text-[#666666] max-w-3xl mx-auto font-light leading-relaxed">
          We don’t rush clarity. We build it on purpose.
        </p>
        <div className="w-24 h-1 bg-[#C17854] mx-auto mt-16" />
      </section>

      {/* Section 1: Philosophy */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">Smart shortcuts aren’t hacks.</h2>
        <div className="space-y-8 text-xl text-[#666666] leading-relaxed font-light">
          <p>
            Digital Jaywalking exists because most shortcuts are misunderstood. Speed without structure creates mess. Automation without intention creates noise. AI without clarity creates guesswork.
          </p>
          <p>
            We believe the smartest shortcuts come from understanding a system deeply enough to move through it differently — without breaking it.
          </p>
          <p className="font-bold text-[#333333] text-2xl">That’s what we build.</p>
        </div>
      </section>

      {/* Section 2: AI Thinking */}
      <section className="bg-white py-32 border-y border-[#E5E5E5] mb-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-10">AI isn’t the problem. Guessing is.</h2>
          <div className="space-y-8 text-xl text-[#666666] leading-relaxed font-light">
            <p>
              AI tools don’t misunderstand businesses because they’re careless. They misunderstand because the information they rely on is scattered, inconsistent, or outdated.
            </p>
            <div className="p-12 bg-[#F5F5F5] border-l-8 border-[#C17854] text-[#333333]">
              <p className="text-base font-bold uppercase tracking-widest text-[#999999] mb-4">Core Assumption</p>
              <p className="text-3xl font-bold leading-tight">Your business already knows what it’s doing.</p>
            </div>
            <p>
              Our job is to reflect that knowledge clearly — not invent something new.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Structure Over Noise */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">Clarity beats complexity.</h2>
        <div className="space-y-8 text-xl text-[#666666] leading-relaxed font-light">
          <p>
            We don’t add layers unless they’re necessary. We don’t chase trends. We don’t overload systems with features they don’t need.
          </p>
          <p>Instead, we focus on:</p>
          <ul className="space-y-6">
            {['Clear structure', 'Accurate representation', 'Intentional boundaries'].map((item, idx) => (
              <li key={idx} className="flex items-center text-[#333333] font-bold text-2xl">
                <div className="w-3 h-3 rounded-full bg-[#C17854] mr-6" />
                {item}
              </li>
            ))}
          </ul>
          <p className="pt-6">
            The result is AI that feels grounded, reliable, and aligned with how your business actually works.
          </p>
        </div>
      </section>

      {/* Section 4: Restraint */}
      <section className="bg-[#333333] text-white py-32 mb-40 rounded-[4rem] mx-4 lg:mx-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">Restraint is part of the work.</h2>
          <div className="space-y-8 text-xl text-gray-400 leading-relaxed font-light">
            <p>
              Some decisions benefit from speed. Others benefit from restraint.
            </p>
            <p>We design systems that:</p>
            <ul className="space-y-6 mb-12">
              {[
                'Can grow without becoming fragile',
                'Can change without losing accuracy',
                'Can support AI today and tomorrow'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-white font-medium">
                  <div className="w-1.5 h-1.5 bg-[#C17854] rounded-full mr-5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-white font-bold italic border-t border-white/10 pt-10 text-2xl">
              This is not about doing more. It’s about doing the right things — once.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Who We Are */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-48">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">Why Digital Jaywalking</h2>
        <div className="space-y-8 text-xl text-[#666666] leading-relaxed font-light">
          <p>
            Digital Jaywalking was built to sit at the intersection of strategy, structure, and emerging technology. We work quietly, deliberately, and with long-term outcomes in mind.
          </p>
          <p>
            Our role isn’t to impress. It’s to make sure the systems you rely on are solid.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-[#333333] mb-16 leading-tight tracking-tight">
          If this approach resonates,<br />
          the next step is a conversation.
        </h2>
        <button 
          onClick={() => onNavigate(Page.DiscoveryCall)}
          className="px-16 py-6 bg-[#C17854] text-white font-bold rounded-full hover:bg-[#B86F47] transition-all transform hover:scale-105 text-xl shadow-xl shadow-[#C17854]/20"
        >
          Book a Discovery Call
        </button>
      </section>
    </div>
  );
};

export default OurApproach;
