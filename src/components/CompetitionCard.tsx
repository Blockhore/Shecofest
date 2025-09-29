import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { Page } from '../App';

interface Competition {
  id: Page;
  title: string;
  description: string;
  icon: string;
  deadline: string;
}

interface CompetitionCardProps {
  competition: Competition;
  onNavigate: (page: Page) => void;
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition, onNavigate }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#4DB7F7]/20 shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="text-center mb-6">
          <div className="bg-[#4DB7F7]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4DB7F7]/20 transition-all duration-300">
            <span className="text-3xl">{competition.icon}</span>
          </div>
          <h3 className="text-xl font-bold text-[#1F3C88] mb-2 group-hover:text-[#4DB7F7] transition-colors duration-300">
            {competition.title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {competition.description}
        </p>
        
        <div className="flex items-center justify-center mb-6 text-sm text-gray-500">
          <Clock className="w-4 h-4 mr-2" />
          <span>Deadline: {competition.deadline}</span>
        </div>
      </div>
      
      <div className="px-6 pb-6">
        <button 
          onClick={() => onNavigate(competition.id)}
          className="w-full bg-[#4DB7F7] text-white py-3 rounded-lg font-semibold hover:bg-[#1F3C88] transition-all duration-300 flex items-center justify-center group/button"
        >
          Lihat Detail
          <ArrowRight className="ml-2 w-4 h-4 group-hover/button:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

export default CompetitionCard;
