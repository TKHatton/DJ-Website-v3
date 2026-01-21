
import React, { useState, useEffect, useRef } from 'react';
import { Page } from '../types';
import { SERVICE_TIERS } from '../constants';

declare var gsap: any;

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [phase, setPhase] = useState<'intro' | 'content'>('intro');
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setPhase('content')
    });

    // Clean typographic reveal sequence
    tl.fromTo(headlineRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 }
    );
    
    tl.fromTo(subheadlineRef.current, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
      "-=0.5"
    );

    return () => tl.kill();
  }, []);

  return (
    <div className="relative">
      {/* Hero Sequence - Minimal & Structural */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA]">
        {/* Abstract Structural Background Elements */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
          <div className="w-[800px] h-[800px] border border-[#333333] rounded-full" />
          <div className="absolute w-[600px] h-[600px] border border-[#333333] transform rotate-45" />
          <div className="absolute w-full h-[1px] bg-[#333333] top-1/2" />
          <div className="absolute h-full w-[1px] bg-[#333333] left-1/2" />
        </div>

        <div className="z-10 text-center px-4 max-w-4xl">
          <h1 ref={headlineRef} className="text-5xl md:text-8xl font-bold text-[#333333] mb-8 tracking-tight leading-none">
            AI is here.
          </h1>
          <p ref={subheadlineRef} className="text-2xl md:text-4xl text-[#666666] font-medium leading-tight">
            The question is whether <span className="text-[#C17854]">it knows you.</span>
          </p>
        </div>

        {/* Scroll Prompt */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${phase === 'intro' ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center text-[#999999] animate-bounce">
            <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Discovery awaits</span>
            <div className="w-[1px] h-12 bg-[#E5E5E5]" />
          </div>
        </div>
      </section>

      {/* Post-Hero Content */}
      <div className="bg-white">
        {/* Section: What We Do */}
        <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C17854] font-bold uppercase tracking-[0.2em] text-xs mb-6">Our Mission</p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#333333] mb-10 leading-tight">
            AI is already talking about your business.
            <br />
            We make sure it <span className="italic">gets the story right.</span>
          </h2>
          <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed font-light">
            In an AI-first world, your business is no longer just what's on your website—it's what AI systems think they know about you. We focus on readiness, knowledge structure, and accuracy.
          </p>
        </section>

        {/* Section: Service Overview */}
        <section className="py-32 bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold text-[#333333]">Three ways we build AI clarity</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {SERVICE_TIERS.map((tier) => (
                <div key={tier.id} className="bg-white p-12 rounded-[2rem] border border-[#E5E5E5] flex flex-col h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-8">
                    <div className={`w-4 h-4 rounded-full ${tier.color}`} />
                    {tier.isPopular && <span className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase rounded-full tracking-wider">Most Popular</span>}
                  </div>
                  <h3 className="text-2xl font-bold text-[#333333] mb-4">{tier.title}</h3>
                  <p className="text-[#666666] mb-10 text-sm leading-relaxed min-h-[48px]">
                    {tier.id === 'profile' && '"AI knows who you are"'}
                    {tier.id === 'system' && '"AI uses your information correctly"'}
                    {tier.id === 'management' && '"AI stays accurate as you evolve"'}
                  </p>
                  <p className="text-xl font-bold text-[#333333] mb-10 mt-auto">
                    Starting at <span className="text-[#C17854]">{tier.price.split('–')[0]}</span>
                  </p>
                  <button 
                    onClick={() => onNavigate(Page.Services)}
                    className="w-full py-4 bg-[#FAFAFA] border border-[#E5E5E5] text-[#333333] font-bold rounded-xl hover:bg-[#C17854] hover:text-white hover:border-[#C17854] transition-all"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <button 
                onClick={() => onNavigate(Page.Services)}
                className="text-[#666666] font-medium hover:text-[#C17854] inline-flex items-center group transition-colors"
              >
                Explore All Services
                <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Section: The Shift */}
        <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#333333] rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">The shift is happening now.</h2>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                As Search transforms into Generation, your traditional SEO strategies won't be enough. AI doesn't just index your site; it interprets your identity. We ensure that interpretation is intentional and accurate.
              </p>
              <button 
                onClick={() => onNavigate(Page.DiscoveryCall)}
                className="px-10 py-5 bg-[#C17854] text-white font-bold rounded-full hover:bg-[#B86F47] transition-all transform hover:scale-105"
              >
                Prepare Your Business
              </button>
            </div>
            {/* Minimal Background Visual - No Fox */}
            <div className="absolute right-[-10%] top-[-10%] w-1/2 h-[120%] opacity-[0.05] pointer-events-none">
              <div className="w-full h-full border-[40px] border-white rounded-full" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
