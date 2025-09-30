import React from 'react';

const MediaPartnerSection: React.FC = () => {
  const mediaPartners = [
    { name: 'Coming Soon', logo: '📺' },
    { name: 'Coming Soon', logo: '📻' },
    { name: 'Coming Soon', logo: '📰' },
    { name: 'Coming Soon', logo: '🎥' },
    { name: 'Coming Soon', logo: '📱' },
    { name: 'Coming Soon', logo: '💻' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1F3C88] mb-4">
            Media Partner
          </h2>
          <p className="text-xl text-gray-600">
            Didukung oleh media terpercaya untuk menyebarkan informasi Shecofest 2025
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {mediaPartners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center group border border-gray-200"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {partner.logo}
              </div>
              <p className="text-sm text-center text-gray-700 font-medium leading-tight">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-[#4DB7F7]/10 to-[#1F3C88]/10 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#1F3C88] mb-4">
              Ingin Menjadi Media Partner?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan kami dalam menyebarkan informasi tentang ekonomi syariah. 
              Hubungi tim media relations kami untuk kerjasama yang saling menguntungkan.
            </p>
            <button className="bg-[#4DB7F7] text-white px-8 py-3 rounded-full font-bold hover:bg-[#1F3C88] transform hover:scale-105 transition-all duration-300 shadow-lg">
              Hubungi Media Relations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPartnerSection;
