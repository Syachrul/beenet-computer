import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@components/ui'
import { company } from '@content/company'

const Keunggulan = () => {
  const iconMap = {
    Profesional: '👨‍💻',
    Integritas: '🤝',
    Inovasi: '💡',
    'Kepuasan Pelanggan': '⭐',
  }

  return (
    <section className="section-padding bg-gray-50" id="keunggulan">
      <div className="container-custom">
        <SectionTitle 
          title="Mengapa <span class='text-primary'>BeeNET</span>?" 
          subtitle="Kami berkomitmen memberikan pelayanan terbaik untuk setiap pelanggan." 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {company.values.map((item, index) => (
            <motion.div 
              key={item.name} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.4, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="text-center p-6 rounded-xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              <span className="text-4xl mb-4 block">{iconMap[item.name] || '✅'}</span>
              <h4 className="text-xl font-bold text-secondary mb-2">{item.name}</h4>
              <p className="text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keunggulan
