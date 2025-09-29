import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CompetitionPage from './pages/CompetitionPage';
import FAQContactPage from './pages/FAQContactPage';

export type Page = 'home' | 'about' | 'essay' | 'business-plan' | 'debate' | 'poster' | 'faq-contact';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'essay':
        return <CompetitionPage type="essay" />;
      case 'business-plan':
        return <CompetitionPage type="business-plan" />;
      case 'debate':
        return <CompetitionPage type="debate" />;
      case 'poster':
        return <CompetitionPage type="poster" />;
      case 'faq-contact':
        return <FAQContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Poppins']">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
