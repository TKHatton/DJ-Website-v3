
import React from 'react';
import { Page } from '../types';

interface WhyThisMattersProps {
  onNavigate: (page: Page) => void;
}

const WhyThisMatters: React.FC<WhyThisMattersProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 text-center">
        <p className="text-[#C17854] font-bold uppercase tracking-[0.2em] text-xs mb-6">Strategic Context</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#333333] mb-8 tracking-tight">Why This Matters</h1>
        <p className="text-xl md:text-3xl text-[#666666] max-w-3xl mx-auto font-light leading-relaxed">
          Because AI is already shaping how people understand your business.
        </p>
        <div className="w-24 h-1 bg-[#C17854] mx-auto mt-16" />
      </section>

      {/* Section 1: Reality */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">AI doesn’t wait for permission.</h2>
        <div className="space-y-8 text-xl text-[#666666] leading-relaxed font-light">
          <p>
            Customers, partners, and teams are already using AI tools to learn about businesses like yours. They’re asking questions, comparing options, and making decisions based on what AI tells them.
          </p>
          <p>
            Most businesses don’t realize this is happening — until the answers are wrong.
          </p>
        </div>
      </section>

      {/* Section 2: Gaps */}
      <section className="bg-white py-32 border-y border-[#E5E5E5] mb-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#333333] mb-10">When information is unclear, AI guesses.</h2>
          <div className="space-y-8 text-xl text-[#666666] leading-relaxed font-light">
            <p>
              AI systems don’t invent answers randomly. They look for patterns. When information is scattered, outdated, or inconsistent, AI fills in the gaps using whatever signals it can find.
            </p>
            <p>That can lead to:</p>
            <ul className="space-y-6">
              {[
                'Outdated descriptions of your services',
                'Inaccurate explanations of what you do',
                'Messaging that doesn’t sound like you',
                'Confusion between your business and others'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start text-[#333333] font-medium">
                  <div className="w-3 h-3 rounded-full bg-red-400 mt-2 mr-6 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-12 pt-12 border-t border-[#F0F0F0]">
              <p className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-4">Root Cause</p>
              <p className="text-4xl font-bold text-[#333333] tracking-tight">The issue isn’t intent. It’s structure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Content Alone */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-40">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">More content doesn’t fix a structural problem.</h2>
        <div className="space-y-8 text-xl text-[#666666] leading-relaxed font-light">
          <p>
            Publishing more blogs, pages, or updates doesn’t guarantee AI will understand your business better. Without clear organization, information competes with itself.
          </p>
          <p className="text-[#333333] font-bold">Structure determines:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {['What AI prioritizes', 'What it trusts', 'What it repeats'].map((item, idx) => (
              <div key={idx} className="p-8 bg-[#F5F5F5] rounded-[1.5rem] text-[#333333] font-bold text-center border border-[#E5E5E5] text-lg">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 font-medium italic text-[#333333]">
            Clarity comes from how information is organized — not how much of it exists.
          </p>
        </div>
      </section>

      {/* Section 4: Behavior */}
      <section className="bg-[#C17854] text-white py-32 mb-40 rounded-[4rem] mx-4 lg:mx-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-10">Structure changes how AI behaves.</h2>
          <div className="space-y-8 text-xl text-white/90 leading-relaxed font-light">
            <p>
              When your business information is organized intentionally, AI stops guessing. Answers become more consistent. Descriptions become more accurate. Messaging aligns more closely with how your business actually works.
            </p>
            <p className="font-bold text-white italic text-2xl border-t border-white/20 pt-10">
              This isn’t about controlling AI. It’s about giving it something reliable to work with.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Advantage */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-48">
        <h2 className="text-3xl font-bold text-[#333333] mb-10">This isn’t about being louder.</h2>
        <div className="space-y-8 text-xl text-[#666666] leading-relaxed font-light">
          <p>
            Businesses that focus on structure don’t necessarily look different on the surface. What changes is what happens behind the scenes.
          </p>
          <ul className="space-y-6">
            {[
              'They spend less time correcting misunderstandings.',
              'They answer fewer repetitive questions.',
              'They trust that AI is reflecting them accurately.'
            ].map((item, idx) => (
              <li key={idx} className="flex items-center text-[#333333] font-bold text-2xl">
                <div className="w-2 h-2 rounded-full bg-[#C17854] mr-6" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-3xl font-bold text-[#333333] mt-12 tracking-tight">That’s the advantage.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-32">
        <h2 className="text-3xl md:text-5xl font-bold text-[#333333] mb-10 leading-tight tracking-tight">AI is already part of how people learn about your business.</h2>
        <p className="text-2xl text-[#666666] mb-16 font-light">
          The question isn’t whether it’s happening. It’s whether the information AI is using is accurate.
        </p>
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

export default WhyThisMatters;
