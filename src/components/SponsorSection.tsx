import React from 'react';
import Logo from '../assets/BARA.svg';

const SponsorSection: React.FC = () => {
  const sponsors = [
    { name: 'BARA Kreasi Milenial', logo: <img src={Logo} alt="BARA LOGO" className="h-14 w-auto" /> },
    { name: 'Coming Soon', logo: '🎓' },
    { name: 'Coming Soon', logo: '🏛️' },
    { name: 'Coming Soon', logo: '💰' },
    { name: 'Coming Soon', logo: '📊' },
    { name: 'Coming Soon', logo: '💼' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1F3C88] mb-4">
            Penyelenggara & Sponsor
          </h2>
          <p className="text-xl text-gray-600">
            Didukung oleh institusi terpercaya dalam bidang ekonomi syariah
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {sponsor.logo}
              </div>
              <p className="text-sm text-center text-gray-700 font-medium leading-tight">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#4DB7F7]/10 to-[#1F3C88]/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#1F3C88] mb-4">
              Ingin Menjadi Sponsor?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan kami dalam mendukung pengembangan ekonomi syariah Indonesia. 
              Hubungi tim partnership kami untuk informasi lebih lanjut.
            </p>
            <button className="bg-[#FFD700] text-[#1F3C88] px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Hubungi Partnership
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
