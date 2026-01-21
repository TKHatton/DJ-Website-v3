
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-[#E5E5E5] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-xl font-bold tracking-tight text-[#333333] mb-4 block">
              DIGITAL <span className="text-[#C17854]">JAYWALKING</span>
            </span>
            <p className="text-[#666666] max-w-sm mb-6">
              Making businesses understandable, accurately represented, and properly structured for AI systems.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholder */}
              <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#666666] hover:bg-[#C17854] hover:text-white transition-colors cursor-pointer">
                in
              </div>
              <div className="w-8 h-8 rounded-full bg-[#F5F5F5] flex items-center justify-center text-[#666666] hover:bg-[#C17854] hover:text-white transition-colors cursor-pointer">
                𝕏
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#333333] mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate(Page.Home)} className="text-[#666666] hover:text-[#C17854] text-sm">Home</button></li>
              <li><button onClick={() => onNavigate(Page.Services)} className="text-[#666666] hover:text-[#C17854] text-sm">Services</button></li>
              <li><button onClick={() => onNavigate(Page.HowItWorks)} className="text-[#666666] hover:text-[#C17854] text-sm">How It Works</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#333333] mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-[#666666]">
              <li>info@digitaljaywalking.com</li>
              <li>Durham, NC</li>
              <li className="pt-2">
                <button 
                  onClick={() => onNavigate(Page.DiscoveryCall)}
                  className="font-semibold text-[#C17854] hover:underline"
                >
                  Book Discovery Call
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#F0F0F0] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#999999] space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Digital Jaywalking. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-[#666666]">Privacy Policy</a>
            <a href="#" className="hover:text-[#666666]">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
