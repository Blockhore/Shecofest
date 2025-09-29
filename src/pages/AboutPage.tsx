import React from 'react';
import { Target, Eye, Award, Users } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4DB7F7] to-[#1F3C88] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tentang Shecofest
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Sharia Economic Festival - Wadah Kompetisi dan Inovasi Ekonomi Syariah Terdepan
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#1F3C88] mb-6">
                Apa itu Shecofest?
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Sharia Economic Festival (Shecofest) adalah festival kompetisi tahunan yang memfokuskan 
                pada pengembangan dan inovasi dalam bidang ekonomi syariah. Event ini menjadi platform 
                bagi mahasiswa, akademisi, dan praktisi untuk menunjukkan kreativitas dan pemahaman 
                mendalam tentang prinsip-prinsip ekonomi Islam.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Dengan berbagai kategori kompetisi yang beragam, Shecofest mengundang peserta untuk 
                mengeksplorasi aspek-aspek ekonomi syariah mulai dari teori hingga implementasi praktis 
                dalam bentuk karya tulis, rencana bisnis, presentasi, dan visualisasi kreatif.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Festival ini tidak hanya menjadi ajang kompetisi, tetapi juga sebagai sarana edukasi 
                dan sosialisasi ekonomi syariah kepada masyarakat luas, khususnya generasi muda.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#4DB7F7]/10 to-[#1F3C88]/10 p-8 rounded-3xl">
              <img 
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg" 
                alt="Shecofest Event" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3C88] mb-4">
              Visi & Misi
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#4DB7F7]/20">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-[#4DB7F7] mr-3" />
                <h3 className="text-2xl font-bold text-[#1F3C88]">Visi</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Menjadi platform kompetisi ekonomi syariah terdepan yang menginspirasi 
                dan mengembangkan generasi muda untuk berkontribusi dalam pengembangan 
                ekonomi Islam yang berkelanjutan dan inovatif.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-[#4DB7F7]/20">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#FFD700] mr-3" />
                <h3 className="text-2xl font-bold text-[#1F3C88]">Misi</h3>
              </div>
              <ul className="text-lg text-gray-700 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4DB7F7] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Menyelenggarakan kompetisi berkualitas tinggi dalam bidang ekonomi syariah
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4DB7F7] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Memberikan wadah bagi generasi muda untuk mengekspresikan ide dan inovasi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4DB7F7] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Meningkatkan awareness tentang ekonomi syariah di kalangan mahasiswa
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-[#4DB7F7] rounded-full mt-3 mr-3 flex-shrink-0"></span>
                  Membangun networking yang kuat antar peserta dan praktisi ekonomi syariah
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Objectives */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3C88] mb-4">
              Tujuan & Manfaat
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shecofest hadir dengan tujuan yang jelas untuk memajukan ekonomi syariah Indonesia
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#4DB7F7]/10 p-6 rounded-2xl mb-4">
                <Award className="w-12 h-12 text-[#FFD700] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1F3C88] mb-3">Kompetisi Berkualitas</h3>
                <p className="text-gray-700">
                  Menyelenggarakan kompetisi dengan standar nasional yang mengasah kemampuan 
                  peserta dalam bidang ekonomi syariah.
                </p>
              </div>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#4DB7F7]/10 p-6 rounded-2xl mb-4">
                <Users className="w-12 h-12 text-[#4DB7F7] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1F3C88] mb-3">Pengembangan SDM</h3>
                <p className="text-gray-700">
                  Mengembangkan sumber daya manusia yang kompeten dan berkarakter 
                  dalam bidang ekonomi syariah.
                </p>
              </div>
            </div>
            
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-[#4DB7F7]/10 p-6 rounded-2xl mb-4">
                <Target className="w-12 h-12 text-[#1F3C88] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#1F3C88] mb-3">Edukasi Masyarakat</h3>
                <p className="text-gray-700">
                  Meningkatkan pemahaman dan kesadaran masyarakat tentang 
                  pentingnya ekonomi syariah.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1F3C88] to-[#4DB7F7] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Bergabung dengan Shecofest 2025?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari perubahan positif dalam pengembangan ekonomi syariah Indonesia
          </p>
          <button className="bg-[#FFD700] text-[#1F3C88] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Lihat Kompetisi
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
