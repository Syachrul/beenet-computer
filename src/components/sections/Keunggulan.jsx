import React from 'react'
import { motion } from 'framer-motion'
import { FaUserTie, FaShieldAlt, FaClock, FaHandHoldingUsd } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'

const keunggulanData = [
  { id: 1, icon: FaUserTie, title: 'Teknisi Profesional', description: 'Tim berpengalaman dan tersertifikasi di bidangnya.' },
  { id: 2, icon: FaShieldAlt, title: 'Garansi Service', description: 'Setiap perbaikan kami berikan garansi kepuasan.' },
  { id: 3, icon: FaClock, title: 'Respon Cepat', description: 'Tanggap darurat & layanan on-site untuk kantor/sekolah.' },
  { id: 4, icon: FaHandHoldingUsd, title: 'Harga Transparan', description: 'Biaya jelas tanpa biaya tersembunyi.' },
]

const Keunggulan = () => {
  return (
    <section className="section-padding bg-gray-50" id="keunggulan">
      <div className="container-custom">
        <SectionTitle 
          title="Mengapa <span class='text-primary'>BeeNET</span>?" 
          subtitle="Kami berkomitmen memberikan pelayanan terbaik untuk setiap pelanggan." 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {keunggulanData.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.4, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="text-center p-6 rounded-xl bg-white shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2"
            >
              <item.icon className="text-4xl text-primary mx-auto mb-4" />
              <h4 className="text-xl font-bold text-secondary mb-2">{item.title}</h4>
              <p className="text-gray-500">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Keunggulan
