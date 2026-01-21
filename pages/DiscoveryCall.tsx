
import React from 'react';
import { Page } from '../types';

interface DiscoveryCallProps {
  onNavigate: (page: Page) => void;
}

const DiscoveryCall: React.FC<DiscoveryCallProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#333333] mb-6">Book a Discovery Call</h1>
        <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto leading-relaxed">
          A conversation to see whether an AI knowledge system makes sense for your business.
        </p>
        <div className="w-24 h-1 bg-[#C17854] mx-auto mt-12" />
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32">
        {/* Left Side: Info */}
        <div className="space-y-24">
          {/* Expectations */}
          <section>
            <h2 className="text-2xl font-bold text-[#333333] mb-6">What this call is — and what it isn’t.</h2>
            <div className="space-y-4 text-lg text-[#666666] leading-relaxed">
              <p className="text-[#333333] font-bold">This is not a sales pitch.</p>
              <p>It’s a structured conversation to understand your business, your information, and whether our services are the right fit.</p>
              <p className="italic">If we’re not a fit, we’ll tell you.</p>
            </div>
          </section>

          {/* Coverage */}
          <section>
            <h2 className="text-2xl font-bold text-[#333333] mb-6">What we’ll talk about</h2>
            <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
              <p>During this call, we’ll cover:</p>
              <ul className="space-y-4">
                {[
                  'How your business information is currently organized',
                  'Where AI may be guessing or filling in gaps',
                  'What level of structure makes sense for you',
                  'Which tier of AI service is appropriate'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C17854] mt-2.5 mr-4 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm font-bold text-[#333333] uppercase tracking-widest pt-4">You don’t need to prepare anything technical.</p>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-bold text-[#333333] mb-6">After the call</h2>
            <div className="space-y-4 text-lg text-[#666666] leading-relaxed">
              <p>If we agree there’s a fit, we’ll recommend a clear next step and outline what that would look like. There’s no obligation to move forward.</p>
              <p>If it’s not the right time or the right solution, you’ll leave with clarity either way.</p>
            </div>
          </section>
        </div>

        {/* Right Side: Who this is for & Scheduling */}
        <div className="space-y-12">
          <div className="bg-white p-12 rounded-3xl border border-[#E5E5E5] shadow-sm">
            <h2 className="text-2xl font-bold text-[#333333] mb-8">Who this call is for</h2>
            
            <div className="space-y-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-600 mb-4">A good fit if you:</p>
                <ul className="space-y-3">
                  {['Care about accuracy and clarity', 'Want AI to represent your business correctly', 'Are open to thinking beyond tools'].map((item, i) => (
                    <li key={i} className="text-sm text-[#333333] font-medium flex items-center">
                       <svg className="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-[#F0F0F0]">
                <p className="text-xs font-bold uppercase tracking-widest text-red-500 mb-4">NOT a good fit if you:</p>
                <ul className="space-y-3">
                  {['Are looking for shortcuts or hacks', 'Expect instant visibility or rankings', 'Want a quick fix without structure'].map((item, i) => (
                    <li key={i} className="text-sm text-[#999999] flex items-center">
                       <svg className="w-4 h-4 text-red-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                       {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="p-12 bg-[#333333] rounded-3xl text-white text-center">
            <h3 className="text-2xl font-bold mb-6">Schedule Your Call</h3>
            <p className="text-gray-400 mb-10">Select a time that works for you. No pressure, just clarity.</p>
            <button 
              onClick={() => window.alert('Opening calendar integration...')}
              className="w-full py-5 bg-[#C17854] text-white font-bold rounded-2xl hover:bg-[#B86F47] transition-all transform hover:scale-[1.02]"
            >
              Pick a Date & Time
            </button>
            <p className="mt-6 text-xs text-gray-500">Typical duration: 15-20 minutes</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 border-t border-[#E5E5E5]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#333333] mb-6">
          If AI is already part of how people learn about your business,<br />
          it’s worth making sure it’s accurate.
        </h2>
        <button 
           onClick={() => window.alert('Opening calendar integration...')}
           className="text-[#C17854] font-bold hover:underline"
        >
          Book Your Call Today
        </button>
      </section>
    </div>
  );
};

export default DiscoveryCall;
