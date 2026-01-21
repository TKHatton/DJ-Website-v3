
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import OurApproach from './pages/OurApproach';
import WhyThisMatters from './pages/WhyThisMatters';
import DiscoveryCall from './pages/DiscoveryCall';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <Home onNavigate={setCurrentPage} />;
      case Page.Services:
        return <Services onNavigate={setCurrentPage} />;
      case Page.HowItWorks:
        return <HowItWorks onNavigate={setCurrentPage} />;
      case Page.OurApproach:
        return <OurApproach onNavigate={setCurrentPage} />;
      case Page.WhyThisMatters:
        return <WhyThisMatters onNavigate={setCurrentPage} />;
      case Page.DiscoveryCall:
        return <DiscoveryCall onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
