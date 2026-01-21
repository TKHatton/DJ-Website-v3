
import React from 'react';
import { Page } from '../types';

interface HowItWorksProps {
  onNavigate: (page: Page) => void;
}

const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigate }) => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Discovery',
      headline: 'We understand how your business actually works.',
      body: "We start by learning how your business operates in the real world — not how it's described on a website. This includes how you talk about your services, what matters most to your brand, what changes frequently, and where misunderstandings tend to happen. This step ensures we're organizing reality, not assumptions."
    },
    {
      step: 'Step 2',
      title: 'Structure',
      headline: 'We organize your information into an AI-ready system.',
      body: 'Next, we take what already exists and give it structure. Information is organized into clear, intentional categories so it can be understood, referenced, and updated over time. Nothing new is invented. Nothing important is lost. The goal is a single source of truth that reflects your business accurately.'
    },
    {
      step: 'Step 3',
      title: 'Connection',
      headline: 'We connect AI directly to that source of truth.',
      body: 'Once your information is structured, we connect AI tools directly to it. This allows AI to answer questions based on your actual business knowledge instead of guessing or pulling from scattered sources. This is the difference between AI talking about your business and AI speaking from it.'
    },
    {
      step: 'Step 4',
      title: 'Accuracy Testing',
      headline: 'We test, refine, and validate responses.',
      body: 'Before anything is delivered, we test AI responses against real-world questions. Gaps, inaccuracies, and unclear answers are corrected. Guardrails are added where necessary. Accuracy isn\'t assumed — it\'s verified.'
    },
    {
      step: 'Step 5',
      title: 'Ongoing Management',
      headline: 'We keep things accurate as your business evolves.',
      body: 'For businesses that want long-term accuracy, we offer ongoing management. As your services, messaging, or operations change, your AI knowledge system is updated intentionally — so AI stays current instead of drifting over time. This turns AI from a one-time setup into a long-term asset.'
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#333333] mb-6">How It Works</h1>
        <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
          A clear, intentional process for making sure AI understands your business — accurately.
        </p>
        <div className="w-24 h-1 bg-[#C17854] mx-auto mt-12" />
      </section>

      {/* Setting Expectations */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-32 text-center">
        <h2 className="text-3xl font-bold text-[#333333] mb-8">This isn't about tools. It's about structure.</h2>
        <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
          <p>
            Most businesses already have the information AI needs — services, messaging, policies, updates, expertise. The problem isn't a lack of content. The problem is that information lives in too many places and isn't organized in a way AI can reliably use.
          </p>
          <p>
            Our process focuses on clarity, structure, and accuracy, not shortcuts or gimmicks.
          </p>
        </div>
      </section>

      {/* The Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-48 space-y-24">
        {steps.map((s, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C17854] mb-2 block">{s.step}</span>
              <h3 className="text-2xl font-bold text-[#333333]">{s.title}</h3>
            </div>
            <div className="md:col-span-9 space-y-6">
              <h4 className="text-2xl md:text-3xl font-bold text-[#333333] leading-tight">{s.headline}</h4>
              <p className="text-lg text-[#666666] leading-relaxed max-w-4xl">{s.body}</p>
            </div>
          </div>
        ))}
      </section>

      {/* What This Process Protects */}
      <section className="bg-[#333333] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Why this process matters</h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              When AI doesn't have clear structure, it fills in the gaps. That can lead to outdated answers, incorrect explanations, or messaging that doesn't sound like you.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            {['Your brand voice', 'Your accuracy', 'Your reputation', 'Your time'].map((p, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-center">
                <div className="w-2 h-2 rounded-full bg-[#C17854] mr-4" />
                <span className="text-lg font-medium">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="p-12 rounded-3xl bg-white border border-[#E5E5E5]">
            <h3 className="text-2xl font-bold text-[#333333] mb-8">This process works best for businesses who:</h3>
            <ul className="space-y-4">
              {['Care about accuracy and clarity', 'Are tired of repeating the same information', 'Want AI to support their business, not distort it'].map((t, i) => (
                <li key={i} className="flex items-center text-[#666666]">
                  <svg className="w-5 h-5 text-green-500 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-12 rounded-3xl bg-[#F5F5F5] border border-[#E5E5E5]">
            <h3 className="text-2xl font-bold text-[#333333] mb-8">This process is NOT for businesses who:</h3>
            <ul className="space-y-4">
              {['Want shortcuts or hacks', 'Expect instant rankings or visibility tricks', 'Aren’t ready to think long-term'].map((t, i) => (
                <li key={i} className="flex items-center text-[#999999]">
                  <svg className="w-5 h-5 text-red-400 mr-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-12">
          If AI is already part of how people learn about your business, it should be getting the story right.
        </h2>
        <button 
          onClick={() => onNavigate(Page.DiscoveryCall)}
          className="px-12 py-5 bg-[#C17854] text-white font-bold rounded-full hover:bg-[#B86F47] transition-all transform hover:scale-105"
        >
          Book a Discovery Call
        </button>
      </section>
    </div>
  );
};

export default HowItWorks;
