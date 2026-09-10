import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaDesktop, FaPrint, FaNetworkWired } from 'react-icons/fa';
import Particles from '@/components/ui/Particles';

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-900 to-blue-700 flex items-center overflow-hidden">
      <Particles count={40} />
      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-20 z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-white">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Solusi IT Service Terpercaya untuk Semua
              </h1>
              <p className="text-base sm:text-lg text-blue-200 mb-6 max-w-2xl">
                BeeNET Computer hadir untuk memenuhi kebutuhan service PC, Laptop, Printer, dan Networking Anda - cepat, profesional, dan bergaransi.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="/kontak" className="px-5 py-2.5 bg-white text-blue-700 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg text-sm">
                  Konsultasi Gratis
                </a>
                <a href="/layanan" className="px-5 py-2.5 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm">
                  Lihat Layanan
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 gap-4">
              {[
                { icon: FaDesktop, label: 'PC' },
                { icon: FaLaptop, label: 'Laptop' },
                { icon: FaPrint, label: 'Printer' },
                { icon: FaNetworkWired, label: 'Networking' }
              ].map((item, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all">
                  <item.icon className="w-8 h-8 text-white mx-auto mb-2" />
                  <span className="text-white font-medium text-sm">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
