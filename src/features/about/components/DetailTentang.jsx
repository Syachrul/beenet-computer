import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp,
  FaInstagram, FaYoutube, FaTiktok, FaFacebook,
  FaHeart, FaChevronRight, FaExternalLinkAlt
} from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';
import Particles from '@/components/ui/Particles';
import companyData from '@/data/company';

const GoogleMap = () => {
  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={companyData.mapsEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Lokasi BeeNET Computer"
      />
    </div>
  );
};

const DetailTentang = () => {
  const data = companyData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="w-full bg-gray-50 overflow-hidden">
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 overflow-hidden">
        <Particles count={40} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Tentang {data.name}
            </h1>
            <p className="text-lg md:text-xl text-blue-200">
              Solusi IT terpercaya untuk kebutuhan digital Anda
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Tentang {data.name}
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">{data.description}</p>
          <p className="text-gray-600 mt-3">Berdiri sejak {data.founded}, kami berkomitmen untuk memberikan pelayanan terbaik bagi seluruh pelanggan.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {data.stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">{stat.value}</p>
              <p className="text-gray-600 text-xs md:text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Visi</h3>
            <div className="w-16 h-1 bg-blue-600 mb-4"></div>
            <p className="text-gray-600 leading-relaxed">{data.vision}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Misi</h3>
            <div className="w-16 h-1 bg-blue-600 mb-4"></div>
            <ul className="space-y-3">
              {data.mission.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <FaChevronRight className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mb-12">
          <SectionTitle title="Nilai Perusahaan" subtitle="Prinsip yang menjadi dasar kami dalam melayani" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
          >
            {data.values.map((value, idx) => (
              <motion.div key={idx} variants={itemVariants} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHeart className="w-7 h-7 text-blue-600" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-800">{value.label}</h4>
                <p className="text-gray-600 text-sm mt-1">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div>
          <SectionTitle title="Lokasi Kami" subtitle="Temukan kami di alamat berikut" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <GoogleMap />
              <div className="text-center mt-4">
                <a
                  href={data.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  Buka di Google Maps
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-center"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Alamat</p>
                    <p className="text-gray-600 text-sm">{data.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Telepon</p>
                    <p className="text-gray-600 text-sm">{data.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaWhatsapp className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">WhatsApp</p>
                    <p className="text-gray-600 text-sm">{data.whatsapp}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <p className="text-gray-600 text-sm">{data.email}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t">
                <p className="font-medium mb-3 text-sm">Ikuti Kami</p>
                <div className="flex gap-3">
                  <a href={data.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-gray-600">
                    <FaInstagram className="w-4 h-4" />
                  </a>
                  <a href={data.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-gray-600">
                    <FaYoutube className="w-4 h-4" />
                  </a>
                  <a href={data.tiktok} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-gray-600">
                    <FaTiktok className="w-4 h-4" />
                  </a>
                  <a href={data.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-gray-600">
                    <FaFacebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 overflow-hidden"
      >
        <Particles count={20} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Tertarik Bekerja Sama dengan Kami?</h2>
          <p className="text-blue-200 mb-6 max-w-2xl mx-auto text-sm md:text-base">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan solusi IT terbaik!
          </p>
          <Link to="/kontak" className="inline-block px-6 py-2.5 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm">
            Hubungi Kami Sekarang
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default DetailTentang;
