import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Page } from '../App';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isCompetitionDropdownOpen, setIsCompetitionDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const competitions = [
    { id: 'essay' as Page, name: 'Paper Competition' },
    { id: 'debate' as Page, name: 'Tilawah Competition' },
    { id: 'poster' as Page, name: 'Poster Competition' },
    { id: 'business-plan' as Page, name: 'Business Model Canvas Competition' },
  ];

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setIsCompetitionDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#1F3C88] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <img
              src="/assets/logo-shecofest.html"
              alt="Shecofest Logo"
              />
            <span className="ml-2 text-sm font-medium">2025</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavigate('home')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'home' ? 'text-[#4DB7F7]' : 'hover:text-[#4DB7F7]'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate('about')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'about' ? 'text-[#4DB7F7]' : 'hover:text-[#4DB7F7]'
              }`}
            >
              About
            </button>
            
            <div className="relative">
              <button
                className={`flex items-center font-medium transition-colors duration-200 ${
                  ['essay', 'business-plan', 'debate', 'poster'].includes(currentPage) 
                    ? 'text-[#4DB7F7]' 
                    : 'hover:text-[#4DB7F7]'
                }`}
                onClick={() => setIsCompetitionDropdownOpen(!isCompetitionDropdownOpen)}
              >
                Competitions
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                  isCompetitionDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {isCompetitionDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {competitions.map((comp) => (
                    <button
                      key={comp.id}
                      onClick={() => handleNavigate(comp.id)}
                      className="block w-full text-left px-4 py-2 text-sm hover:bg-[#4DB7F7] hover:text-white transition-colors duration-200"
                    >
                      {comp.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavigate('faq-contact')}
              className={`font-medium transition-colors duration-200 ${
                currentPage === 'faq-contact' ? 'text-[#4DB7F7]' : 'hover:text-[#4DB7F7]'
              }`}
            >
              FAQ & Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#4DB7F7] transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-[#4DB7F7]/20 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleNavigate('home')}
                className={`text-left font-medium transition-colors duration-200 ${
                  currentPage === 'home' ? 'text-[#4DB7F7]' : 'hover:text-[#4DB7F7]'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavigate('about')}
                className={`text-left font-medium transition-colors duration-200 ${
                  currentPage === 'about' ? 'text-[#4DB7F7]' : 'hover:text-[#4DB7F7]'
                }`}
              >
                About
              </button>
              
              <div className="border-l-2 border-[#4DB7F7] pl-4">
                <div className="text-[#FFD700] font-semibold mb-2">Competitions</div>
                {competitions.map((comp) => (
                  <button
                    key={comp.id}
                    onClick={() => handleNavigate(comp.id)}
                    className="block text-left py-1 text-sm hover:text-[#4DB7F7] transition-colors duration-200"
                  >
                    {comp.name}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleNavigate('faq-contact')}
                className={`text-left font-medium transition-colors duration-200 ${
                  currentPage === 'faq-contact' ? 'text-[#4DB7F7]' : 'hover:text-[#4DB7F7]'
                }`}
              >
                FAQ & Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
