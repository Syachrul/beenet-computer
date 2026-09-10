import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import SectionTitle from '@/components/ui/SectionTitle';
import testimonialsData from '@/data/testimonialsData';

const Testimoni = () => {
  const testimonials = testimonialsData || [];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Testimoni"
          subtitle="Apa kata klien kami"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-5 h-5 ${
                      i < (item.rating || 5)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{item.content}"</p>
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
