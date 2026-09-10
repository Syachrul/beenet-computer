import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaShieldAlt, FaClock, FaHandHoldingUsd, FaArrowRight } from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';

const Keunggulan = () => {
  const keunggulan = [
    { icon: FaUserTie, title: 'Tenaga Profesional', desc: 'Tim berpengalaman dan tersertifikasi di bidang IT' },
    { icon: FaShieldAlt, title: 'Garansi Servis', desc: 'Garansi 100% kepuasan pelanggan untuk setiap layanan' },
    { icon: FaClock, title: 'Respon Cepat', desc: 'Penanganan cepat dan tepat untuk setiap keluhan' },
    { icon: FaHandHoldingUsd, title: 'Harga Terjangkau', desc: 'Harga kompetitif dengan kualitas terbaik' }
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle title="Mengapa Memilih Kami?" subtitle="Keunggulan yang membuat kami menjadi pilihan terbaik" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
        >
          {keunggulan.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center hover:shadow-xl transition-shadow duration-300 group">
                <div className="p-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3"
                  >
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link to="/tentang" className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
            Pelajari Lebih Lanjut <FaArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Keunggulan;
