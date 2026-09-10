import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDesktop, FaLaptop, FaPrint, FaNetworkWired, FaArrowRight } from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { servicesData } from '@/data/servicesData';

const iconMap = { FaDesktop, FaLaptop, FaPrint, FaNetworkWired };

const Services = () => {
  const services = servicesData || [];

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle title="Layanan Kami" subtitle="Solusi IT terbaik untuk kebutuhan Anda" />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8"
        >
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || FaDesktop;
            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 group">
                  <div className="p-5 text-center flex flex-col h-full">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </motion.div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>
                    <Link
                      to="/layanan"
                      className="inline-flex items-center justify-center gap-1 mt-4 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors group/link"
                    >
                      Selengkapnya
                      <FaArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link
            to="/layanan"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm group"
          >
            Lihat Semua Layanan
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
