import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaDesktop, FaLaptop, FaPrint, FaNetworkWired, 
  FaArrowRight, FaClock, FaShieldAlt, FaUserCheck, 
  FaStar, FaCheckCircle, FaTools, FaHeadset 
} from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';
import Particles from '@/components/ui/Particles';
import { FaqItem } from '@/components/ui/Accordion';
import { servicesData } from '@/data/servicesData';
import { useInView } from 'react-intersection-observer';

const iconMap = {
  FaDesktop, FaLaptop, FaPrint, FaNetworkWired
};

const stats = [
  { icon: FaClock, label: 'Jam Kerja', value: '09:00 - 17:00' },
  { icon: FaShieldAlt, label: 'Garansi', value: '1 Bulan' },
  { icon: FaUserCheck, label: 'Klien Puas', value: '350+' },
  { icon: FaTools, label: 'Teknisi', value: 'Profesional' },
];

const faqItems = [
  {
    question: 'Berapa lama waktu pengerjaan service?',
    answer: 'Untuk service PC dan Laptop, biasanya memakan waktu 1-3 hari kerja tergantung kerusakan. Service printer dan networking bisa selesai dalam 1-2 hari.'
  },
  {
    question: 'Apakah ada garansi setelah service?',
    answer: 'Ya, kami memberikan garansi 1 bulan untuk setiap service yang kami lakukan. Garansi berlaku untuk komponen yang kami perbaiki/ganti.'
  },
  {
    question: 'Apakah ada biaya diagnosis?',
    answer: 'Biaya diagnosis GRATIS! Kami akan mengecek perangkat Anda tanpa biaya dan memberikan estimasi biaya perbaikan.'
  },
  {
    question: 'Apakah melayani panggilan ke rumah/kantor?',
    answer: 'Ya, kami melayani service on-site untuk area tertentu. Hubungi kami untuk informasi lebih lanjut.'
  }
];

const DetailServices = () => {
  const [activeTab, setActiveTab] = useState('semua');
  const services = servicesData || [];
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredServices = activeTab === 'semua' 
    ? services 
    : services.filter(s => s.title.toLowerCase().includes(activeTab));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = (direction) => ({
    hidden: { opacity: 0, x: direction === 'left' ? -80 : 80, y: 20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' } 
    }
  });

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  return (
    <div className="w-full bg-gray-50 overflow-hidden">
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 overflow-hidden">
        <Particles count={50} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Layanan Lengkap Kami
              </h1>
            </motion.div>
            <p className="text-lg md:text-xl text-blue-100 mb-6">
              Solusi lengkap untuk semua kebutuhan IT Anda. Professional, terpercaya, dan bergaransi.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mt-8">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-1 text-blue-200" />
                  <p className="text-sm font-medium">{stat.label}</p>
                  <p className="text-lg font-bold">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap justify-center gap-2 bg-white rounded-xl shadow-lg p-2 max-w-xl mx-auto"
        >
          {['semua', 'pc', 'laptop', 'printer', 'networking'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <SectionTitle
          title="Detail Layanan"
          subtitle="Informasi lengkap tentang setiap layanan yang kami sediakan"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12 max-w-5xl mx-auto mt-12"
        >
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Tidak ada layanan yang ditemukan untuk kategori ini.</p>
            </div>
          ) : (
            filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || FaDesktop;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id || index}
                  variants={cardVariants(isEven ? 'left' : 'right')}
                  className={`flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 group`}
                >
                  <motion.div
                    className={`w-full md:w-1/2 bg-gradient-to-br ${service.bgGradient || 'from-blue-500 to-blue-700'} p-8 flex items-center justify-center min-h-[300px] md:min-h-[350px] relative overflow-hidden`}
                    variants={imageVariants}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white/20 backdrop-blur-sm rounded-full p-6 relative z-10"
                    >
                      <IconComponent className="w-28 h-28 md:w-36 md:h-36 text-white" />
                    </motion.div>
                    
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm flex items-center gap-1"
                    >
                      <FaStar className="w-3 h-3 text-yellow-300" /> {service.rating || 4.8}
                    </motion.div>

                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm"
                    >
                      {service.progress || 90}% Kepuasan
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center"
                    variants={textVariants}
                  >
                    <motion.h3
                      className="text-2xl md:text-3xl font-bold text-gray-800 mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <p className="text-sm text-blue-600 font-medium mb-3">
                      {service.subtitle || 'Solusi Terbaik untuk Anda'}
                    </p>

                    <motion.p
                      className="text-gray-600 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      {service.longDescription || service.description}
                    </motion.p>

                    <motion.div
                      className="flex flex-wrap gap-2 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      {service.features && service.features.map((feature, idx) => (
                        <span key={idx} className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                          <FaCheckCircle className="w-3 h-3" /> {feature}
                        </span>
                      ))}
                    </motion.div>

                    <motion.div
                      className="flex items-center justify-between mt-4 pt-4 border-t"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <div>
                        <p className="text-sm text-gray-500">{service.priceDetail || 'Mulai dari'}</p>
                        <p className="text-2xl font-bold text-blue-600">{service.price || 'Rp 150.000'}</p>
                      </div>
                      <Link
                        to="/kontak"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group/btn"
                      >
                        Pesan Sekarang 
                        <FaArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>

                    <motion.div
                      className="flex items-center gap-4 mt-3 text-sm text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <span className="flex items-center gap-1">
                        <FaStar className="text-yellow-400" /> {service.rating || 4.8}
                      </span>
                      <span>•</span>
                      <span>{service.totalReviews || 0} ulasan</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FaHeadset className="text-blue-500" /> Support 24/7
                      </span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              );
            })
          )}
        </motion.div>
      </div>

      <section className="container mx-auto px-4 py-16 bg-white">
        <SectionTitle
          title="Pertanyaan Umum"
          subtitle="Informasi yang sering ditanyakan tentang layanan kami"
        />
        <div className="max-w-3xl mx-auto mt-8 space-y-3">
          {faqItems.map((item, index) => (
            <FaqItem key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 overflow-hidden"
      >
        <Particles count={20} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Membantu Kebutuhan IT Anda?
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran terbaik!
          </p>
          <Link
            to="/kontak"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default DetailServices;
