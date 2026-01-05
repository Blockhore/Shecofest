import React from 'react';
import { Calendar, Users, Trophy, Award } from 'lucide-react';

const Timeline: React.FC = () => {
  const timelineData = [
    {
      phase: 'Pendaftaran',
      date: '3 - 20 Oktober 2025',
      description: 'Pembukaan pendaftaran untuk semua kategori kompetisi',
      icon: Calendar,
      status: 'active'
    },
    {
      phase: 'Seleksi',
      date: 'Oktober - November 2025', 
      description: 'Proses penjurian dan seleksi karya-karya dari peserta',
      icon: Users,
      status: 'active'
    },
    {
      phase: 'Final',
      date: '15 November 2025',
      description: 'Babak final dan presentasi peserta terpilih yang lolos',
      icon: Trophy,
      status: 'active'
    },
    {
      phase: 'Awarding',
      date: '16 November 2025',
      description: 'Pengumuman pemenang dan pemberian penghargaan',
      icon: Award,
      status: 'active'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1F3C88] mb-4">
            Timeline Festival
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ikuti setiap tahapan kompetisi dari pendaftaran hingga pengumuman pemenang
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden md:block">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#4DB7F7]/20 -translate-y-1/2">
                <div className="h-full bg-[#4DB7F7] w-1/4 rounded-full transition-all duration-1000"></div>
              </div>
              
              {timelineData.map((item, index) => (
                <div key={index} className="flex flex-col items-center relative z-10 flex-1">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 border-4 transition-all duration-300 ${
                    item.status === 'active' 
                      ? 'bg-[#4DB7F7] border-[#4DB7F7] text-white shadow-lg shadow-[#4DB7F7]/30' 
                      : 'bg-white border-[#4DB7F7]/30 text-[#4DB7F7] hover:border-[#4DB7F7] hover:shadow-lg'
                  }`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="text-center max-w-48">
                    <h3 className={`text-lg font-bold mb-2 ${
                      item.status === 'active' ? 'text-[#4DB7F7]' : 'text-[#1F3C88]'
                    }`}>
                      {item.phase}
                    </h3>
                    <p className={`text-sm font-medium mb-2 ${
                      item.status === 'active' ? 'text-[#FFD700]' : 'text-gray-500'
                    }`}>
                      {item.date}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Timeline */}
          <div className="md:hidden space-y-6">
            {timelineData.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="flex flex-col items-center mr-6">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-3 transition-all duration-300 ${
                    item.status === 'active' 
                      ? 'bg-[#4DB7F7] border-[#4DB7F7] text-white' 
                      : 'bg-white border-[#4DB7F7]/30 text-[#4DB7F7]'
                  }`}>
                    <item.icon className="w-5 h-5" />
                  </div>
                  {index < timelineData.length - 1 && (
                    <div className="w-0.5 h-16 bg-[#4DB7F7]/20 mt-2"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className={`text-lg font-bold mb-1 ${
                    item.status === 'active' ? 'text-[#4DB7F7]' : 'text-[#1F3C88]'
                  }`}>
                    {item.phase}
                  </h3>
                  <p className={`text-sm font-medium mb-2 ${
                    item.status === 'active' ? 'text-[#FFD700]' : 'text-gray-500'
                  }`}>
                    {item.date}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
