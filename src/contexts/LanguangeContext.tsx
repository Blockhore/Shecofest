import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  id: {
    // Header
    'header.home': 'Home',
    'header.about': 'About',
    'header.competitions': 'Competitions',
    'header.faq': 'FAQ & Contact',

    // Hero Section
    'hero.title': 'SHECOFEST',
    'hero.year': '2025',
    'hero.subtitle': 'Raih Prestasi, Wujudkan Inovasi',
    'hero.description': 'Bergabunglah dalam festival ekonomi syariah terbesar dan tunjukkan kreativitas serta inovasi Anda dalam kompetisi bergengsi ini.',
    'hero.register': 'Daftar Kompetisi',

    // Stats Section
    'stats.categories': 'Kategori Lomba',
    'stats.participants': 'Peserta Target',
    'stats.prizes': 'Total Hadiah',
    'stats.months': 'Bulan Event',

    // Competition Section
    'competitions.title': 'Kategori Kompetisi',
    'competitions.subtitle': 'Pilih kategori yang sesuai dengan minat dan keahlian Anda dalam ekonomi syariah',

    // Competition Cards
    'competition.paper.title': 'Paper Competition',
    'competition.paper.description': 'Tuangkan pemikiran dan analisis mendalam Anda tentang ekonomi syariah dalam bentuk karya tulis yang berkualitas.',
    'competition.tilawah.title': 'Tilawah Competition',
    'competition.tilawah.description': 'Tunjukkan kemampuan tilawah dan suara emasmu dalam membaca ayat suci al-quran.',
    'competition.poster.title': 'Poster Competition',
    'competition.poster.description': 'Buat visualisasi kreatif dan informatif yang dapat menyampaikan konsep ekonomi syariah dengan menarik.',
    'competition.business.title': 'Business Model Canvas Competition',
    'competition.business.description': 'Kembangkan ide bisnis inovatif yang berlandaskan prinsip-prinsip syariah dan dapat diimplementasikan di dunia nyata.',
    'competition.detail': 'Lihat Detail',

    // Timeline
    'timeline.title': 'Timeline Festival',
    'timeline.subtitle': 'Ikuti setiap tahapan kompetisi dari pendaftaran hingga pengumuman pemenang',
    'timeline.registration': 'Pendaftaran',
    'timeline.selection': 'Seleksi',
    'timeline.final': 'Final',
    'timeline.awarding': 'Awarding',
    'timeline.registration.desc': 'Pembukaan pendaftaran untuk semua kategori kompetisi',
    'timeline.selection.desc': 'Proses penjurian dan seleksi karya-karya dari peserta',
    'timeline.final.desc': 'Babak final dan presentasi peserta terpilih yang lolos',
    'timeline.awarding.desc': 'Pengumuman pemenang dan pemberian penghargaan',

    // Sponsors
    'sponsors.title': 'Penyelenggara & Sponsor',
    'sponsors.subtitle': 'Didukung oleh institusi terpercaya dalam bidang ekonomi syariah',
    'sponsors.become': 'Ingin Menjadi Sponsor?',
    'sponsors.become.desc': 'Bergabunglah dengan kami dalam mendukung pengembangan ekonomi syariah Indonesia. Hubungi tim partnership kami untuk informasi lebih lanjut.',
    'sponsors.contact': 'Hubungi Partnership',

    // Media Partners
    'media.title': 'Media Partner',
    'media.subtitle': 'Didukung oleh media terpercaya untuk menyebarkan informasi Shecofest 2025',
    'media.become': 'Ingin Menjadi Media Partner?',
    'media.become.desc': 'Bergabunglah dengan kami dalam menyebarkan informasi tentang ekonomi syariah. Hubungi tim media relations kami untuk kerjasama yang saling menguntungkan.',
    'media.contact': 'Hubungi Media Relations',

    // About Page
    'about.hero.title': 'Tentang Shecofest',
    'about.hero.subtitle': 'Sharia Economic Festival - Wadah Kompetisi dan Inovasi Ekonomi Syariah Terdepan',
    'about.what.title': 'Apa itu Shecofest?',
    'about.what.desc1': 'Sharia Economic Festival (Shecofest) adalah festival kompetisi tahunan yang memfokuskan pada pengembangan dan inovasi dalam bidang ekonomi syariah. Event ini menjadi platform bagi mahasiswa, akademisi, dan praktisi untuk menunjukkan kreativitas dan pemahaman mendalam tentang prinsip-prinsip ekonomi Islam.',
    'about.what.desc2': 'Dengan berbagai kategori kompetisi yang beragam, Shecofest mengundang peserta untuk mengeksplorasi aspek-aspek ekonomi syariah mulai dari teori hingga implementasi praktis dalam bentuk karya tulis, rencana bisnis, presentasi, dan visualisasi kreatif.',
    'about.what.desc3': 'Festival ini tidak hanya menjadi ajang kompetisi, tetapi juga sebagai sarana edukasi dan sosialisasi ekonomi syariah kepada masyarakat luas, khususnya generasi muda.',
    'about.vision.title': 'Visi & Misi',
    'about.vision': 'Visi',
    'about.mission': 'Misi',
    'about.vision.desc': 'Menjadi platform kompetisi ekonomi syariah terdepan yang menginspirasi dan mengembangkan generasi muda untuk berkontribusi dalam pengembangan ekonomi Islam yang berkelanjutan dan inovatif.',
    'about.mission.1': 'Menyelenggarakan kompetisi berkualitas tinggi dalam bidang ekonomi syariah',
    'about.mission.2': 'Memberikan wadah bagi generasi muda untuk mengekspresikan ide dan inovasi',
    'about.mission.3': 'Meningkatkan awareness tentang ekonomi syariah di kalangan mahasiswa',
    'about.mission.4': 'Membangun networking yang kuat antar peserta dan praktisi ekonomi syariah',
    'about.goals.title': 'Tujuan & Manfaat',
    'about.goals.subtitle': 'Shecofest hadir dengan tujuan yang jelas untuk memajukan ekonomi syariah Indonesia',
    'about.goals.quality': 'Kompetisi Berkualitas',
    'about.goals.quality.desc': 'Menyelenggarakan kompetisi dengan standar nasional yang mengasah kemampuan peserta dalam bidang ekonomi syariah.',
    'about.goals.development': 'Pengembangan SDM',
    'about.goals.development.desc': 'Mengembangkan sumber daya manusia yang kompeten dan berkarakter dalam bidang ekonomi syariah.',
    'about.goals.education': 'Edukasi Masyarakat',
    'about.goals.education.desc': 'Meningkatkan pemahaman dan kesadaran masyarakat tentang pentingnya ekonomi syariah.',
    'about.cta.title': 'Siap Bergabung dengan Shecofest 2025?',
    'about.cta.desc': 'Jadilah bagian dari perubahan positif dalam pengembangan ekonomi syariah Indonesia',
    'about.cta.button': 'Lihat Kompetisi',

    // FAQ & Contact Page

    // Competition Page
    'comp.theme': 'Tema Kompetisi',
    'comp.timeline': 'Timeline Kompetisi',
    'comp.requirements': 'Syarat & Ketentuan',
    'comp.requirements.title': 'Persyaratan Peserta',
    'comp.criteria.title': 'Kriteria Penilaian',
    'comp.prizes': 'Hadiah Kompetisi',
    'comp.cta.title': 'Siap Untuk Berkompetisi?',
    'comp.cta.desc': 'Jangan lewatkan kesempatan untuk menunjukkan kemampuan terbaik Anda dalam',
    'comp.register.now': 'Daftar Sekarang',
    'comp.download.guide': 'Download Panduan',
    'comp.phase.registration': 'Pendaftaran + Pengumpulan Abstrak',
    'comp.phase.technical1': 'Technical Meeting 1 (Pembahasan Full Paper)',
    'comp.phase.reregistration': 'Daftar Ulang + Pengumpulan Full Paper',
    'comp.phase.selection': 'Seleksi Full Paper',
    'comp.phase.technical2': 'Technical Meeting 2 (Pembahasan Presentasi Finalis)',
    'comp.phase.presentation': 'Presentasi Finalis',
    'comp.phase.announcement': 'Pengumuman',
    'comp.status.active': 'Aktif',
    'comp.status.upcoming': 'Mendatang',

    // Competition Accordion Sections
    'comp.requirements.participant': 'Persyaratan Peserta',
    'comp.criteria.assessment': 'Kriteria Penilaian',

    // Essay Competition Content
    'comp.essay.req.1': 'Mahasiswa aktif D3/D4/S1 dari perguruan tinggi seluruh dunia',
    'comp.essay.req.2': 'Setiap tim terdiri 2 - 3 orang dari perguruan tinggi yang sama',
    'comp.essay.req.3': 'Setiap tim hanya di perbolehkan mengirimkan satu karya',
    'comp.essay.req.4': 'Karya yang dikirim adalah karya asli yang belum pernah dipublikasikan dan belum pernah diikutkan',
    'comp.essay.req.5': 'Karya tidak mengandung SARA',
    'comp.essay.req.6': 'Wajib follow sosial media',
    'comp.essay.criteria.1': 'Ketajaman Analisis dan Validasi Data (35%)',
    'comp.essay.criteria.2': 'Ide dan Gagasan (35%)',
    'comp.essay.criteria.3': 'Kesesuaian dengan Tema (20%)',
    'comp.essay.criteria.4': 'Sistematika Penulisan dan Tata Bahasa (10%)',

    // Business Plan Competition Content
    'comp.business.req.1': 'Mahasiswa aktif D3/D4/S1 perguruan tinggi seluruh Indonesia',
    'comp.business.req.2': 'Tim terdiri dari 3-4 orang',
    'comp.business.req.3': 'Setiap tim diperbolehkan mengirim satu karya',
    'comp.business.req.4': 'Wajib follow social media',
    'comp.business.req.5': 'Peserta yang telah terdaftar tidak boleh digunakan',
    'comp.business.criteria.1': 'Keseusia tema (15%)',
    'comp.business.criteria.2': 'Inovasi (10%)',
    'comp.business.criteria.3': 'Potensi realistis bisnis (15%)',
    'comp.business.criteria.4': 'Isi BMC (45%)',

    // Debate Competition Content
    'comp.debate.req.1': 'Peserta siswa aktif SMA/SMK sederajat dari sekolah di seluruh Indonesia',
    'comp.debate.req.2': 'Setiap lembaga diperbolehkan mengirimkan maksimal 2 delegasi peserta',
    'comp.debate.req.3': 'Video di upload di YouTube akun masing-masing',
    'comp.debate.req.4': 'Wajib follow sosial media',
    'comp.debate.req.5': 'Video merupakan hasil orisinalitas peserta bukan rekayasa',
    'comp.debate.criteria.1': 'Tajwid (30%)',
    'comp.debate.criteria.2': 'Fasohah (30%)',
    'comp.debate.criteria.3': 'Suara (25%)',
    'comp.debate.criteria.4': 'Lagu (15%)',

    // Poster Competition Content
    'comp.poster.req.1': 'Peserta individual atau tim maksimal 3 orang',
    'comp.poster.req.2': 'Karya asli dan belum pernah dipublikasikan',
    'comp.poster.req.3': 'Format A3 (29.7 x 42 cm) resolusi 300 DPI',
    'comp.poster.req.4': 'File dalam format PDF dan JPG',
    'comp.poster.req.5': 'Menggunakan bahasa Indonesia yang baik',
    'comp.poster.req.6': 'Mencantumkan sumber data yang valid',
    'comp.poster.criteria.1': 'Kreativitas dan originalitas desain (25%)',
    'comp.poster.criteria.2': 'Keakuratan informasi dan data (25%)',
    'comp.poster.criteria.3': 'Kesesuaian dengan tema (20%)',
    'comp.poster.criteria.4': 'Kejelasan komunikasi visual (20%)',
    'comp.poster.criteria.5': 'Komposisi dan estetika (10%)'
  },
  en: {
    // Header
    'header.home': 'Home',
    'header.about': 'About',
    'header.competitions': 'Competitions',
    'header.faq': 'FAQ & Contact',
    
    // Hero Section
    'hero.title': 'SHECOFEST',
    'hero.year': '2025',
    'hero.subtitle': 'Achieve Excellence, Realize Innovation',
    'hero.description': 'Join the largest sharia economic festival and showcase your creativity and innovation in this prestigious competition.',
    'hero.register': 'Register Competition',
    
    // Stats Section
    'stats.categories': 'Competition Categories',
    'stats.participants': 'Target Participants',
    'stats.prizes': 'Total Prizes',
    'stats.months': 'Event Months',
    
    // Competition Section
    'competitions.title': 'Competition Categories',
    'competitions.subtitle': 'Choose the category that suits your interests and expertise in sharia economics',
    
    // Competition Cards
    'competition.paper.title': 'Paper Competition',
    'competition.paper.description': 'Express your thoughts and in-depth analysis about sharia economics in the form of quality written work.',
    'competition.tilawah.title': 'Tilawah Competition',
    'competition.tilawah.description': 'Show your tilawah skills and golden voice in reciting the holy verses of the Quran.',
    'competition.poster.title': 'Poster Competition',
    'competition.poster.description': 'Create creative and informative visualizations that can convey sharia economic concepts attractively.',
    'competition.business.title': 'Business Model Canvas Competition',
    'competition.business.description': 'Develop innovative business ideas based on sharia principles that can be implemented in the real world.',
    'competition.deadline': 'Deadline',
    'competition.detail': 'View Details',
    'competition.register': 'Register',
    
    // Timeline
    'timeline.title': 'Festival Timeline',
    'timeline.subtitle': 'Follow every stage of the competition from registration to winner announcement',
    'timeline.registration': 'Registration',
    'timeline.selection': 'Selection',
    'timeline.final': 'Final',
    'timeline.awarding': 'Awarding',
    'timeline.registration.desc': 'Opening registration for all competition categories',
    'timeline.selection.desc': 'Judging process and selection of participants\' works',
    'timeline.final.desc': 'Final round and presentation of selected finalists',
    'timeline.awarding.desc': 'Winner announcement and award ceremony',
    
    // Sponsors
    'sponsors.title': 'Organizers & Sponsors',
    'sponsors.subtitle': 'Supported by trusted institutions in the field of sharia economics',
    'sponsors.become': 'Want to Become a Sponsor?',
    'sponsors.become.desc': 'Join us in supporting the development of Indonesian sharia economics. Contact our partnership team for more information.',
    'sponsors.contact': 'Contact Partnership',
    
    // Media Partners
    'media.title': 'Media Partners',
    'media.subtitle': 'Supported by trusted media to spread information about Shecofest 2025',
    'media.become': 'Want to Become a Media Partner?',
    'media.become.desc': 'Join us in spreading information about sharia economics. Contact our media relations team for mutually beneficial cooperation.',
    'media.contact': 'Contact Media Relations',
    
    // About Page
    'about.hero.title': 'About Shecofest',
    'about.hero.subtitle': 'Sharia Economic Festival - Leading Platform for Sharia Economic Competition and Innovation',
    'about.what.title': 'What is Shecofest?',
    'about.what.desc1': 'Sharia Economic Festival (Shecofest) is an annual competition festival that focuses on development and innovation in the field of sharia economics. This event serves as a platform for students, academics, and practitioners to showcase creativity and deep understanding of Islamic economic principles.',
    'about.what.desc2': 'With various diverse competition categories, Shecofest invites participants to explore aspects of sharia economics from theory to practical implementation in the form of written works, business plans, presentations, and creative visualizations.',
    'about.what.desc3': 'This festival is not only a competition arena, but also serves as a means of education and socialization of sharia economics to the wider community, especially the younger generation.',
    'about.vision.title': 'Vision & Mission',
    'about.vision': 'Vision',
    'about.mission': 'Mission',
    'about.vision.desc': 'To become a leading sharia economic competition platform that inspires and develops the younger generation to contribute to the development of sustainable and innovative Islamic economics.',
    'about.mission.1': 'Organize high-quality competitions in the field of sharia economics',
    'about.mission.2': 'Provide a platform for the younger generation to express ideas and innovations',
    'about.mission.3': 'Increase awareness about sharia economics among students',
    'about.mission.4': 'Build strong networking between participants and sharia economic practitioners',
    'about.goals.title': 'Goals & Benefits',
    'about.goals.subtitle': 'Shecofest is present with clear goals to advance Indonesian sharia economics',
    'about.goals.quality': 'Quality Competition',
    'about.goals.quality.desc': 'Organize competitions with national standards that hone participants\' abilities in the field of sharia economics.',
    'about.goals.development': 'Human Resource Development',
    'about.goals.development.desc': 'Develop competent and characterized human resources in the field of sharia economics.',
    'about.goals.education': 'Community Education',
    'about.goals.education.desc': 'Increase public understanding and awareness about the importance of sharia economics.',
    'about.cta.title': 'Ready to Join Shecofest 2025?',
    'about.cta.desc': 'Be part of positive change in the development of Indonesian sharia economics',
    'about.cta.button': 'View Competitions',
    
    // FAQ & Contact Page
    'faq.hero.title': 'FAQ & Contact',
    'faq.hero.subtitle': 'Find answers to your questions or contact us directly',
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Frequently asked questions about Shecofest 2025',
    'faq.q1': 'Who can participate in Shecofest 2025?',
    'faq.a1': 'Shecofest is open to active undergraduate/diploma students from all universities in Indonesia. Some competitions allow individual participants, while others are in team format.',
    'faq.q2': 'Is there a registration fee to participate in the competition?',
    'faq.a2': 'All competitions in Shecofest 2025 are FREE. No registration fees are charged to participants.',
    'faq.q3': 'How to register for the competition?',
    'faq.a3': 'Registration is done online through the official Shecofest website. Participants simply fill out the registration form, upload required documents, and wait for confirmation from the committee.',
    'faq.q4': 'Can I participate in more than one competition category?',
    'faq.a4': 'Yes, participants are allowed to participate in more than one competition category. However, make sure you can manage your time well for all competitions you participate in.',
    'faq.q5': 'When is the registration deadline?',
    'faq.a5': 'Registration deadlines vary for each competition: Essay (March 15), Business Plan (March 20), Debate (March 18), and Poster (March 25, 2025).',
    'faq.q6': 'How is the judging system conducted?',
    'faq.a6': 'Each competition has a panel of judges consisting of academics, practitioners, and experts in the field of sharia economics. Assessment is done objectively based on predetermined criteria.',
    'faq.q7': 'Are there certificates for all participants?',
    'faq.a7': 'Yes, all participants who complete the competition will receive an e-certificate as proof of participation in Shecofest 2025.',
    'faq.q8': 'What if there are technical questions during the competition?',
    'faq.a8': 'The committee provides 24/7 assistance during the competition period. Participants can contact us via WhatsApp, email, or official Shecofest social media.',
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Shecofest committee team is ready to help you 24/7',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.instagram': 'Instagram',
    'contact.address': 'Address',
    'contact.address.value': 'University of Indonesia, Depok, West Java',
    'contact.form.title': 'Send Message',
    'contact.form.name': 'Full Name',
    'contact.form.name.placeholder': 'Enter your full name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'name@email.com',
    'contact.form.subject': 'Subject',
    'contact.form.subject.placeholder': 'Your message subject',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Write your message or question...',
    'contact.form.send': 'Send Message',
    'contact.hours.title': 'Operating Hours',
    'contact.hours.weekday': 'Monday - Friday',
    'contact.hours.weekday.time': '08:00 - 17:00 WIB',
    'contact.hours.saturday': 'Saturday',
    'contact.hours.saturday.time': '09:00 - 15:00 WIB',
    'contact.hours.sunday': 'Sunday',
    'contact.hours.sunday.time': 'Closed',
    'contact.hours.note': '💡 For urgent questions, please contact our WhatsApp which is active 24/7',
    'contact.social.title': 'Social Media',
    'contact.social.desc': 'Follow our social media to get the latest updates about Shecofest 2025',
    'contact.social.whatsapp': 'WhatsApp Channel',
    'contact.help.title': 'Need Quick Help?',
    'contact.help.desc': 'Our support team is ready to help you with quick response via WhatsApp',
    'contact.help.chat': 'Chat WhatsApp',
    'contact.help.email': 'Send Email',
    
    // Competition Page
    'comp.theme': 'Competition Theme',
    'comp.timeline': 'Competition Timeline',
    'comp.requirements': 'Terms & Conditions',
    'comp.requirements.title': 'Participant Requirements',
    'comp.criteria.title': 'Assessment Criteria',
    'comp.prizes': 'Competition Prizes',
    'comp.cta.title': 'Ready to Compete?',
    'comp.cta.desc': 'Don\'t miss the opportunity to show your best abilities in',
    'comp.register.now': 'Register Now',
    'comp.download.guide': 'Download Guide',
    'comp.phase.registration': 'Registration + Abstract Submission',
    'comp.phase.technical1': 'Technical Meeting 1 (Full Paper Discussion)',
    'comp.phase.reregistration': 'Re-registration + Full Paper Submission',
    'comp.phase.selection': 'Full Paper Selection',
    'comp.phase.technical2': 'Technical Meeting 2 (Finalist Presentation Discussion)',
    'comp.phase.presentation': 'Finalist Presentation',
    'comp.phase.announcement': 'Announcement',
    'comp.status.active': 'Active',
    'comp.status.upcoming': 'Upcoming',
    
    // Competition Accordion Sections
    'comp.requirements.participant': 'Participant Requirements',
    'comp.criteria.assessment': 'Assessment Criteria',
    
    // Essay Competition Content
    'comp.essay.req.1': 'Active D3/D4/S1 students from universities worldwide',
    'comp.essay.req.2': 'Each team consists of 2-3 people from the same university',
    'comp.essay.req.3': 'Each team is only allowed to submit one work',
    'comp.essay.req.4': 'Submitted work must be original, never published, and never participated before',
    'comp.essay.req.5': 'Work must not contain SARA (ethnic, religious, racial discrimination)',
    'comp.essay.req.6': 'Must follow social media accounts',
    'comp.essay.criteria.1': 'Analysis Sharpness and Data Validation (35%)',
    'comp.essay.criteria.2': 'Ideas and Concepts (35%)',
    'comp.essay.criteria.3': 'Theme Relevance (20%)',
    'comp.essay.criteria.4': 'Writing Systematics and Grammar (10%)',
    
    // Business Plan Competition Content
    'comp.business.req.1': 'Active students of D3/D4/S1 from universities across Indonesia',
    'comp.business.req.2': 'Teams consist of 3-4 members',
    'comp.business.req.3': 'Each team is allowed to submit one work',
    'comp.business.req.4': 'Required to follow social media accounts',
    'comp.business.req.5': 'Registered participants cannot be replaced',
    'comp.business.criteria.1': 'Theme relavnce (15%)',
    'comp.business.criteria.2': 'Innovation (10%)',
    'comp.business.criteria.3': 'Realistic business potential (15%)',
    'comp.business.criteria.4': 'BMC content (45%)',
    
    // Debate Competition Content
    'comp.debate.req.1': 'Active high school/vocational school (SMA/SMK or equivalent) students from schools across Indonesia',
    'comp.debate.req.2': 'Each institution is allowed to send a maximun of 2 participant delegates',
    'comp.debate.req.3': 'Video must be uplaoded on each participants YouTube account',
    'comp.debate.req.4': 'Required to follow social media accounts',
    'comp.debate.req.5': 'The video must be the original work of the participant, not edited or manipulated',
    'comp.debate.criteria.1': 'Tajwid (30%)',
    'comp.debate.criteria.2': 'Fasohah (30%)',
    'comp.debate.criteria.3': 'Voice (25%)',
    'comp.debate.criteria.4': 'Melody (15%)',
    
    // Poster Competition Content
    'comp.poster.req.1': 'Individual participant or maximum 3-person team',
    'comp.poster.req.2': 'Original work never published before',
    'comp.poster.req.3': 'A3 format (29.7 x 42 cm) 300 DPI resolution',
    'comp.poster.req.4': 'File in PDF and JPG format',
    'comp.poster.req.5': 'Use proper Indonesian language',
    'comp.poster.req.6': 'Include valid data sources',
    'comp.poster.criteria.1': 'Design creativity and originality (25%)',
    'comp.poster.criteria.2': 'Information and data accuracy (25%)',
    'comp.poster.criteria.3': 'Theme relevance (20%)',
    'comp.poster.criteria.4': 'Visual communication clarity (20%)',
    'comp.poster.criteria.5': 'Composition and aesthetics (10%)'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('id');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
