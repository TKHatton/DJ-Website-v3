
import React from 'react';
import { SERVICE_TIERS, ADD_ONS } from '../constants';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <p className="text-[#C17854] font-bold uppercase tracking-[0.2em] text-xs mb-6">Pricing & Packages</p>
        <h1 className="text-4xl md:text-7xl font-bold text-[#333333] mb-8 tracking-tight">AI Knowledge Services</h1>
        <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto font-light leading-relaxed">
          Transparent pricing for intentionally structured AI representation.
        </p>
      </header>

      {/* Service Tiers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {SERVICE_TIERS.map((tier) => (
          <div key={tier.id} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className={`w-8 h-8 rounded-full ${tier.color} shadow-sm`} />
                <h2 className="text-4xl font-bold text-[#333333] tracking-tight">{tier.title}</h2>
              </div>
              <div className="space-y-2">
                <p className="text-5xl font-bold text-[#C17854]">{tier.price}</p>
                <p className="text-[#666666] font-medium italic text-lg">{tier.tagline}</p>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">Service Focus</h4>
                  <p className="text-[#666666] text-xl leading-relaxed font-light">{tier.description}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">The Process</h4>
                  <p className="text-[#666666] leading-relaxed text-lg">{tier.process}</p>
                </div>
                <div className="pt-6 border-t border-[#E5E5E5]">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-[#999999] mb-3">Primary Outcome</h4>
                  <p className="text-2xl font-bold text-[#333333] tracking-tight">{tier.outcome}</p>
                </div>
              </div>

              <button 
                onClick={() => onNavigate(Page.DiscoveryCall)}
                className="px-12 py-5 bg-[#C17854] text-white font-bold rounded-2xl hover:bg-[#B86F47] transition-all transform hover:scale-[1.02] shadow-lg shadow-[#C17854]/20"
              >
                {tier.ctaText}
              </button>
            </div>

            <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-[#E5E5E5] shadow-xl shadow-gray-100/50">
              <h4 className="text-xl font-bold text-[#333333] mb-10">Detailed Inclusion</h4>
              <ul className="space-y-6">
                {tier.included.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="h-6 w-6 text-[#C17854] mr-5 flex-shrink-0 mt-0.5">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#666666] text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Add-Ons */}
      <section className="mt-56 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">Optional Add-Ons</h2>
          <p className="text-xl text-[#666666] font-light">Available with any service tier to further enhance your AI presence.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ADD_ONS.map((addon, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[2rem] border border-[#E5E5E5] hover:border-[#C17854] transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#333333] mb-2">{addon.title}</h3>
              <p className="text-[#C17854] font-bold text-xl mb-6">{addon.price}</p>
              <p className="text-[#666666] text-base mb-8 leading-relaxed">{addon.description}</p>
              <div className="space-y-4 mb-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999999]">Key Features</p>
                <ul className="space-y-3">
                  {addon.included.map((inc, i) => (
                    <li key={i} className="text-sm text-[#666666] flex items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C17854] mt-1.5 mr-3 flex-shrink-0" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-6 border-t border-[#F0F0F0]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#999999] mb-2">Outcome</p>
                <p className="text-base font-bold text-[#333333] leading-snug">
                  {addon.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-56 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-[#333333] py-28 rounded-[4rem] text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Ready to be understood?</h2>
        <div className="max-w-md mx-auto space-y-8">
          <button 
            onClick={() => onNavigate(Page.DiscoveryCall)}
            className="w-full py-6 bg-[#C17854] text-white font-bold rounded-2xl hover:bg-[#B86F47] transition-all text-xl"
          >
            Schedule Discovery Call
          </button>
          <p className="text-base text-gray-400 font-light">
            A 15-minute call to audit your current AI representation.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
