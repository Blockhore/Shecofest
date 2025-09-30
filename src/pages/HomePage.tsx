import React from 'react';
import { ArrowRight, Trophy, Users, Target, Calendar } from 'lucide-react';
import { Page } from '../App';
import CompetitionCard from '../components/CompetitionCard';
import Timeline from '../components/Timeline';
import SponsorSection from '../components/SponsorSection';
import MediaPartner from '../components/MediaPartner';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const competitions = [
    {
      id: 'essay' as Page,
      title: 'Paper Competition',
      description: 'Tuangkan pemikiran dan analisis mendalam Anda tentang ekonomi syariah dalam bentuk karya tulis yang berkualitas.',
      icon: '📝',
      deadline: '14 Oktober, 2025'
    },
    {
      id: 'debate' as Page,
      title: 'Tilawah Competition',
      description: 'Tunjukkan kemampuan tilawah dan suara emasmu dalam membaca ayat suci al-quran.',
      icon: '🎤',
      deadline: '14 Oktober, 2025'
    },
    {
      id: 'poster' as Page,
      title: 'Poster Competition',
      description: 'Buat visualisasi kreatif dan informatif yang dapat menyampaikan konsep ekonomi syariah dengan menarik.',
      icon: '🎨',
      deadline: '14 Oktober, 2025'
    },
    {
      id: 'business-plan' as Page,
      title: 'Business Model Canvas Competition',
      description: 'Kembangkan ide bisnis inovatif yang berlandaskan prinsip-prinsip syariah dan dapat diimplementasikan di dunia nyata.',
      icon: '💼',
      deadline: '14 Oktober, 2025'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4DB7F7] to-[#1F3C88] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            SHECOFEST
            <span className="block text-3xl md:text-4xl font-medium text-[#FFD700] mt-2">
              2025
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-medium">
            Raih Prestasi, Wujudkan Inovasi
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            Bergabunglah dalam festival ekonomi syariah terbesar dan tunjukkan kreativitas serta inovasi Anda dalam kompetisi bergengsi ini.
          </p>
          <button 
            onClick={() => onNavigate('essay')}
            className="bg-[#FFD700] text-[#1F3C88] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center"
          >
            Daftar Sekarang
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-[#FFD700]/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#4DB7F7]/10 p-6 rounded-2xl">
                <Trophy className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#1F3C88] mb-2">4</h3>
                <p className="text-gray-600 font-medium">Kategori Lomba</p>
              </div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#4DB7F7]/10 p-6 rounded-2xl">
                <Users className="w-12 h-12 text-[#4DB7F7] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#1F3C88] mb-2">100+</h3>
                <p className="text-gray-600 font-medium">Peserta Target</p>
              </div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#4DB7F7]/10 p-6 rounded-2xl">
                <Target className="w-12 h-12 text-[#1F3C88] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#1F3C88] mb-2">25jt+</h3>
                <p className="text-gray-600 font-medium">Total Hadiah</p>
              </div>
            </div>
            <div className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#4DB7F7]/10 p-6 rounded-2xl">
                <Calendar className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#1F3C88] mb-2">2</h3>
                <p className="text-gray-600 font-medium">Bulan Event</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3C88] mb-4">
              Kategori Kompetisi
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih kategori yang sesuai dengan minat dan keahlian Anda dalam ekonomi syariah
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competitions.map((comp) => (
              <CompetitionCard
                key={comp.id}
                competition={comp}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Sponsors */}
      <SponsorSection />

      {/* Media Partner*/}
      <MediaPartner />
    </div>
  );
};

export default HomePage;
