import React, { useState } from 'react';
import { Trophy, Calendar, Users, FileText, ChevronDown, ChevronRight } from 'lucide-react';

interface CompetitionPageProps {
  type: 'essay' | 'business-plan' | 'debate' | 'poster';
}

const CompetitionPage: React.FC<CompetitionPageProps> = ({ type }) => {
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>(null);

  // Google Form links for each competition
  const gformLinks = {
    'essay': 'https://forms.gle/EyhtniZakjki4Nys5',
    'business-plan': 'https://forms.gle/business-plan-competition-link', 
    'debate': 'https://forms.gle/debate-competition-link',
    'poster': 'https://forms.gle/poster-competition-link'
  };

  // Google Drive links for guideline documents
  const gdriveLinks = {
    'essay': 'https://drive.google.com/drive/folders/1G54b20b-RB7DuV-SWCm-Y3-oSCbh6x0I',
    'business-plan': 'https://drive.google.com/file/d/business-plan-guideline-document-id/view',
    'debate': 'https://drive.google.com/file/d/debate-guideline-document-id/view',
    'poster': 'https://drive.google.com/file/d/poster-guideline-document-id/view'
  };

  const competitionData = {
    'essay': {
      title: 'Paper Competition',
      subtitle: 'Kompetisi Karya Tulis Ilmiah Ekonomi Syariah',
      description: 'Tuangkan pemikiran dan analisis mendalam Anda tentang ekonomi syariah dalam bentuk karya tulis yang berkualitas.',
      theme: 'PERAN GEN-Z DALAM MENGGERAKKAN EKONOMI HIJAU MELALUI SPECIAL ENTEPRENEURSHIP BERKELANJUTAN',
      icon: '📝',
      timeline: [
        { phase: 'Pendaftaran + Pengumpulan Abstrak', date: '1 - 20  Okt, 2025', status: 'active' },
        { phase: 'Technical Meeting 1 (Pembahasan Full Paper)', date: '22 Okt, 2025', status: 'upcoming' },
        { phase: 'Daftar Ulang + Pengumpulan Full Paper', date: '23 - 29 Okt, 2025', status: 'upcoming' },
        { phase: 'Technical Meeting 2 (Bagi Finalis 5 Besar)', date: '4 Nov, 2025', status: 'upcoming' },
        { phase: 'Pengumpulan PPT + Registrasi 5 Finalis', date: '5 - 13 Nov, 2025', status: 'upcoming' },
        { phase: 'Presentasi Finalis', date: '14 Nov, 2025', status: 'upcoming' },
        { phase: 'Pengumuman', date: '16 Nov, 2025', status: 'upcoming' }
      ],
      requirements: [
        'Mahasiswa aktif D3/D4/S1 dari perguruan tinggi seluruh dunia',
        'Setiap tim terdiri 2 - 3 orang dari perguruan tinggi yang sama',
        'Setiap tim hanya di perbolehkan mengirimkan satu karya',
        'Karya yang dikirim adalah karya asli yang belum pernah dipublikasikan dan belum pernah diikutkan',
        'Karya tidak mengandung SARA',
        'Wajib follow social media'
      ],
      criteria: [
        'Ketajaman Analisis dan Validasi Data (35%)',
        'Ide dan Gagasan (35%)',
        'Kesesuaian dengan Tema (20%)',
        'Sistematika Penulisan dan Tata Bahasa (10%)'
      ],
      prizes: [
        { position: 'Juara 1', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Juara 2', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Juara 3', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Harapan 1', reward: 'Uang Pembinaan + Sertifikat' },
        { position: 'Harapan 2', reward: 'Uang Pembinaan + Sertifikat' }
      ]
    },
    'business-plan': {
      title: 'Business Model Canvas Competition',
      subtitle: 'Kompetisi Rencana Bisnis Syariah',
      description: 'Kembangkan ide bisnis inovatif yang berlandaskan prinsip-prinsip syariah dan dapat diimplementasikan di dunia nyata.',
      theme: 'INOVASI TEKNOLOGI HIJAU DALAM PENGELOLAAN LIMBAH DAN DAUR ULANG SEBAGAI MODEL ENTREPRENEURSHIP BERKELANJUTAN',
      icon: '💼',
      timeline: [
        { phase: 'Pendaftaran + Pengumpulan Karya', date: '1 - 20 Okt, 2025', status: 'active' },
        { phase: 'Seleksi Karya', date: '24 Okt, 2025', status: 'upcoming' },
        { phase: 'Pengumuman Finalis', date: '29 Okt, 2025', status: 'upcoming' },
        { phase: 'Technical Meeting (Pembahasan Presentasi Finalis)', date: '4 Nov, 2025', status: 'upcoming' },
        { phase: 'Pengumpulan PPT', date: '5 - 13 Nov, 2025', status: 'upcoming' },
        { phase: 'Presetasi Finalis', date: '14 - 15 Nov, 2025', status: 'upcoming' },
        { phase: 'Pengumuman', date: '16 Nov, 2025', status: 'upcoming' },
      ],
      requirements: [
        'Mahasiswa aktif D3/D4/S1 perguruan tinggi seluruh Indonesia',
        'Tim terdiri dari 3-4 orang',
        'Setiap tim diperbolehkan mengirim satu karya',
        'Wajib follow social media',
        'Peserta yang telah terdaftar tidak boleh digantikan',
      ],
      criteria: [
        'Kesesuaian tema (15%)',
        'Inovasi (10%)',
        'Potensi realistis bisnis (15%)',
        'Isi BMC (45%)',
      ],
      prizes: [
        { position: 'Juara 1', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Juara 2', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Juara 3', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Harapan 1', reward: 'Uang Pembinaan + Sertifikat' },
        { position: 'Harapan 2', reward: 'Uang Pembinaan + Sertifikat' },
      ]
    },
    'debate': {
      title: 'Tilawah Competition',
      subtitle: 'Kompetisi Tilawah Ekonomi Syariah',
      description: 'Tunjukkan kemampuan tilawah dan suara emasmu dalam membaca ayat suci al-quran.',
      theme: "TILAWAH QUR'ANI : SUARA LANGIT UNTUK BUMI YANG LESTARI",
      icon: '🎤',
      timeline: [
        { phase: 'Pendaftaran + Pengumpulan Video', date: '1 - 20 Okt, 2025', status: 'active' },
        { phase: 'Seleksi Video', date: '21 - 27 Okt, 2025', status: 'upcoming' },
        { phase: 'Pengumuman Finalis', date: '28 Okt, 2025', status: 'upcoming' },
        { phase: 'Technical Meeting (Pembahasan Finalis)', date: '4 Nov, 2025', status: 'upcoming' },
        { phase: 'Persiapan Final', date: '5 - 13 Nov, 2025', status: 'upcoming' },
        { phase: 'Pelaksanaan Tilawah', date: '14 - 15 Nov, 2025', status: 'upcoming' },
        { phase: 'Pengumuman', date: '16 Nov, 2025', status: 'upcoming' },
      ],
      requirements: [
        'Peserta siswa aktif SMA/SMK sederajaht dari sekolah di seluruh Indonesia',
        'Setiap lembaga diperbolehkan mengirimkan maksimal 2 delegasi peserta',
        'Video di upload di YouTube akun masing-masing',
        'Wajib follow sosial media',
        'Video merupakan hasil orisinalitas peserta bukan rekayasa',
      ],
      criteria: [
        'Tajwid (30%)',
        'Fasohah (30%)',
        'Suara (25%)',
        'Lagu (15%)',
      ],
      prizes: [
        { position: 'Juara 1', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Juara 2', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Juara 3', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Harapan 1', reward: 'Uang Pembinaan + Sertifikat' },
        { position: 'Harapan 2', reward: 'Uang Pembinaan + Sertifikat' }
      ]
    },
    'poster': {
      title: 'Poster Competition',
      subtitle: 'Kompetisi Poster Ekonomi Syariah',
      description: 'Buat visualisasi kreatif dan informatif yang dapat menyampaikan konsep ekonomi syariah dengan menarik.',
      theme: 'Literasi Ekonomi Syariah untuk Generasi Digital',
      icon: '🎨',
      timeline: [
        { phase: 'Pendaftaran', date: 'Jan 15 - Mar 25, 2025', status: 'active' },
        { phase: 'Pengumpulan Karya', date: 'Mar 26 - Mar 31, 2025', status: 'upcoming' },
        { phase: 'Penjurian', date: 'Apr 1 - Apr 10, 2025', status: 'upcoming' },
        { phase: 'Pengumuman', date: 'Apr 20, 2025', status: 'upcoming' }
      ],
      requirements: [
        'Peserta individual atau tim maksimal 3 orang',
        'Karya asli dan belum pernah dipublikasikan',
        'Format A3 (29.7 x 42 cm) resolusi 300 DPI',
        'File dalam format PDF dan JPG',
        'Menggunakan bahasa Indonesia yang baik',
        'Mencantumkan sumber data yang valid'
      ],
      criteria: [
        'Kreativitas dan originalitas desain (25%)',
        'Keakuratan informasi dan data (25%)',
        'Kesesuaian dengan tema (20%)',
        'Kejelasan komunikasi visual (20%)',
        'Komposisi dan estetika (10%)'
      ],
      prizes: [
        { position: 'Juara 1', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Juara 2', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
        { position: 'Juara 3', reward: 'Uang Pembinaan + Trophy + Sertifikat' },
      ]
    }
  };

  const competition = competitionData[type];

  const toggleAccordion = (section: string) => {
    setExpandedAccordion(expandedAccordion === section ? null : section);
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4DB7F7] to-[#1F3C88] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center mb-6">
            <span className="text-6xl mr-4">{competition.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {competition.title}
              </h1>
              <p className="text-xl text-[#FFD700]">{competition.subtitle}</p>
            </div>
          </div>
          <p className="text-lg text-center max-w-3xl mx-auto">
            {competition.description}
          </p>
        </div>
      </section>

      {/* Theme Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-[#4DB7F7]/10 to-[#1F3C88]/10 p-8 rounded-3xl text-center">
            <h2 className="text-3xl font-bold text-[#1F3C88] mb-4">Tema Kompetisi</h2>
            <p className="text-2xl font-semibold text-[#4DB7F7] leading-relaxed">
              "{competition.theme}"
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1F3C88] text-center mb-12">Timeline Kompetisi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competition.timeline.map((item, index) => (
              <div key={index} className="relative">
                <div className={`p-6 rounded-2xl shadow-lg ${
                  item.status === 'active' 
                    ? 'bg-[#4DB7F7] text-white' 
                    : 'bg-white border border-[#4DB7F7]/20'
                }`}>
                  <div className="flex items-center mb-4">
                    <Calendar className={`w-6 h-6 mr-2 ${
                      item.status === 'active' ? 'text-white' : 'text-[#4DB7F7]'
                    }`} />
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      item.status === 'active' 
                        ? 'bg-white/20 text-white' 
                        : 'bg-[#4DB7F7]/10 text-[#4DB7F7]'
                    }`}>
                      {item.status === 'active' ? 'Aktif' : 'Mendatang'}
                    </span>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${
                    item.status === 'active' ? 'text-white' : 'text-[#1F3C88]'
                  }`}>
                    {item.phase}
                  </h3>
                  <p className={`text-sm ${
                    item.status === 'active' ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Criteria */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Requirements Accordion */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F3C88] mb-6">Syarat & Ketentuan</h2>
              <div className="space-y-4">
                <div className="border border-[#4DB7F7]/20 rounded-lg">
                  <button
                    onClick={() => toggleAccordion('requirements')}
                    className="w-full p-4 text-left flex items-center justify-between bg-[#4DB7F7]/5 hover:bg-[#4DB7F7]/10 transition-colors duration-200"
                  >
                    <span className="font-semibold text-[#1F3C88]">Persyaratan Peserta</span>
                    {expandedAccordion === 'requirements' ? 
                      <ChevronDown className="w-5 h-5 text-[#4DB7F7]" /> : 
                      <ChevronRight className="w-5 h-5 text-[#4DB7F7]" />
                    }
                  </button>
                  {expandedAccordion === 'requirements' && (
                    <div className="p-4 border-t border-[#4DB7F7]/20">
                      <ul className="space-y-2">
                        {competition.requirements.map((req, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-[#4DB7F7] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="border border-[#4DB7F7]/20 rounded-lg">
                  <button
                    onClick={() => toggleAccordion('criteria')}
                    className="w-full p-4 text-left flex items-center justify-between bg-[#4DB7F7]/5 hover:bg-[#4DB7F7]/10 transition-colors duration-200"
                  >
                    <span className="font-semibold text-[#1F3C88]">Kriteria Penilaian</span>
                    {expandedAccordion === 'criteria' ? 
                      <ChevronDown className="w-5 h-5 text-[#4DB7F7]" /> : 
                      <ChevronRight className="w-5 h-5 text-[#4DB7F7]" />
                    }
                  </button>
                  {expandedAccordion === 'criteria' && (
                    <div className="p-4 border-t border-[#4DB7F7]/20">
                      <ul className="space-y-2">
                        {competition.criteria.map((criteria, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{criteria}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Prizes */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F3C88] mb-6">Hadiah Kompetisi</h2>
              <div className="space-y-4">
                {competition.prizes.map((prize, index) => (
                  <div key={index} className="bg-gradient-to-r from-[#FFD700]/10 to-[#4DB7F7]/10 p-6 rounded-2xl border border-[#FFD700]/20">
                    <div className="flex items-center mb-3">
                      <Trophy className="w-6 h-6 text-[#FFD700] mr-3" />
                      <h3 className="text-xl font-bold text-[#1F3C88]">{prize.position}</h3>
                    </div>
                    <p className="text-gray-700 font-medium">{prize.reward}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#1F3C88] to-[#4DB7F7] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Siap Untuk Berkompetisi?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Jangan lewatkan kesempatan untuk menunjukkan kemampuan terbaik Anda dalam {competition.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={gformLinks[type]}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD700] text-[#1F3C88] px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block text-center"
            >
              Daftar Sekarang
            </a>
            <a 
              href={gdriveLinks[type]}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1F3C88] transition-all duration-300 inline-block text-center"
            >
              Download Panduan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompetitionPage;
