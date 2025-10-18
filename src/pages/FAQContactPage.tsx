import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Mail, Phone, Instagram, MapPin, Clock } from 'lucide-react';

const FAQContactPage: React.FC = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Siapa saja yang bisa mengikuti Shecofest 2025?',
      answer: 'Shecofest terbuka untuk mahasiswa aktif jenjang S1/D4 dari seluruh universitas di Indonesia. Beberapa kompetisi memungkinkan peserta individual, sementara yang lain dalam bentuk tim.'
    },
    {
      question: 'Bagaimana cara mendaftar kompetisi?',
      answer: 'Pendaftaran dilakukan secara online melalui website resmi Shecofest. Peserta cukup mengisi formulir pendaftaran, upload dokumen persyaratan, dan menunggu konfirmasi dari panitia.'
    },
    {
      question: 'Apakah bisa mengikuti lebih dari satu kategori kompetisi?',
      answer: 'Ya, peserta diperbolehkan mengikuti lebih dari satu kategori kompetisi. Namun pastikan Anda dapat mengelola waktu dengan baik untuk semua kompetisi yang diikuti.'
    },
    {
      question: 'Kapan batas akhir pendaftaran?',
      answer: 'Batas akhir pendaftaran berbeda untuk setiap kompetisi.'
    },
    {
      question: 'Bagaimana sistem penjurian dilakukan?',
      answer: 'Setiap kompetisi memiliki panel juri yang terdiri dari akademisi, praktisi, dan expert di bidang ekonomi syariah. Penilaian dilakukan secara objektif berdasarkan kriteria yang telah ditetapkan.'
    },
    {
      question: 'Apakah ada sertifikat untuk semua peserta?',
      answer: 'Ya, semua peserta yang mengikuti kompetisi hingga selesai akan mendapatkan e-certificate dan sertifikat fisik bagi para finalis sebagai bukti partisipasi dalam Shecofest 2025.'
    },
    {
      question: 'Bagaimana jika ada pertanyaan teknis selama kompetisi?',
      answer: 'Panitia menyediakan layanan bantuan 24/7 selama periode kompetisi. Peserta bisa menghubungi kami melalui WhatsApp, email, atau media sosial resmi Shecofest.'
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@shecofest.com',
      link: 'mailto:info@shecofest.com'
    },
    {
      icon: Phone,
      label: 'WhatsApp',
      value: '+62 812-3456-7890',
      link: 'https://wa.me/6281234567890'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@shecofest2025',
      link: 'https://www.instagram.com/shecofest.uinkhasjember'
    },
    {
      icon: MapPin,
      label: 'Alamat',
      value: 'Universitas Islam Negeri Kiai Haji Achmad Siddiq Jember, Jember, Jawa Timur',
      link: null
    }
  ];

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen py-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4DB7F7] to-[#1F3C88] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FAQ & Kontak
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Temukan jawaban untuk pertanyaan Anda atau hubungi kami langsung
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3C88] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Pertanyaan yang sering ditanyakan seputar Shecofest 2025
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#4DB7F7]/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between bg-gradient-to-r from-[#4DB7F7]/5 to-transparent hover:from-[#4DB7F7]/10 hover:to-transparent transition-all duration-300 rounded-2xl"
                >
                  <span className="font-semibold text-[#1F3C88] text-lg pr-4">
                    {faq.question}
                  </span>
                  {expandedFAQ === index ? 
                    <ChevronDown className="w-6 h-6 text-[#4DB7F7] flex-shrink-0" /> : 
                    <ChevronRight className="w-6 h-6 text-[#4DB7F7] flex-shrink-0" />
                  }
                </button>
                {expandedFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-[#4DB7F7]/10">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3C88] mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600">
              Tim panitia Shecofest siap membantu Anda 24/7
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((contact, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-[#4DB7F7]/10 p-4 rounded-full">
                    <contact.icon className="w-8 h-8 text-[#4DB7F7]" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1F3C88] text-center mb-2">
                  {contact.label}
                </h3>
                {contact.link ? (
                  <a 
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#4DB7F7] transition-colors duration-200 text-center block"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-gray-700 text-center">{contact.value}</p>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#1F3C88] mb-6">Kirim Pesan</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4DB7F7] focus:border-transparent transition-all duration-200"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4DB7F7] focus:border-transparent transition-all duration-200"
                      placeholder="nama@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subjek
                  </label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4DB7F7] focus:border-transparent transition-all duration-200"
                    placeholder="Subjek pesan Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4DB7F7] focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#4DB7F7] text-white py-4 rounded-lg font-semibold hover:bg-[#1F3C88] transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            {/* Office Hours & Additional Info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#4DB7F7]/10 to-[#1F3C88]/10 p-8 rounded-3xl">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-[#4DB7F7] mr-3" />
                  <h3 className="text-xl font-bold text-[#1F3C88]">Jam Operasional</h3>
                </div>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Senin - Jumat</span>
                    <span>08:00 - 17:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sabtu</span>
                    <span>09:00 - 15:00 WIB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minggu</span>
                    <span>Tutup</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-[#FFD700]/10 rounded-lg">
                  <p className="text-sm text-[#1F3C88] font-medium">
                    💡 Untuk pertanyaan urgent, silakan hubungi WhatsApp kami yang aktif 24/7
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h3 className="text-xl font-bold text-[#1F3C88] mb-4">Media Sosial</h3>
                <p className="text-gray-600 mb-6">
                  Ikuti media sosial kami untuk mendapatkan update terbaru tentang Shecofest 2025
                </p>
                <div className="space-y-3">
                  <a 
                    href="https://www.instagram.com/shecofest.uinkhasjember" 
                    className="flex items-center p-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5 mr-3" />
                    @shecofest.uinkhasjember
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    WhatsApp Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 bg-gradient-to-r from-[#1F3C88] to-[#4DB7F7] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Butuh Bantuan Cepat?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Tim support kami siap membantu Anda dengan respon cepat melalui WhatsApp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Chat WhatsApp
            </a>
            <a 
              href="mailto:info@shecofest.com"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#1F3C88] transition-all duration-300 inline-flex items-center justify-center"
            >
              <Mail className="mr-2 w-5 h-5" />
              Kirim Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQContactPage;
