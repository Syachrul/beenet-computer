import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaBriefcase, FaStar, FaAward } from 'react-icons/fa';

const Statistik = () => {
  const stats = [
    { icon: FaUsers, value: '100+', label: 'Klien Puas', color: 'from-blue-500 to-blue-600' },
    { icon: FaBriefcase, value: '50+', label: 'Proyek Selesai', color: 'from-green-500 to-green-600' },
    { icon: FaStar, value: '4.9/5', label: 'Rating Pelanggan', color: 'from-yellow-500 to-yellow-600' },
    { icon: FaAward, value: '3+', label: 'Penghargaan', color: 'from-purple-500 to-purple-600' }
  ];

  return (
    <section className="w-full py-10 md:py-12 bg-gradient-to-r from-blue-700 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <p className="text-2xl md:text-3xl font-bold mb-1">{stat.value}</p>
              <p className="text-blue-200 text-xs md:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistik;
