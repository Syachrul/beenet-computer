import React from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaSchool, FaStore, FaBuilding } from 'react-icons/fa'
import SectionTitle from '@/components/ui/SectionTitle'

const targetData = [
  { id: 1, icon: FaUser, label: 'Personal' },
  { id: 2, icon: FaSchool, label: 'Sekolahan' },
  { id: 3, icon: FaStore, label: 'Unit Usaha' },
  { id: 4, icon: FaBuilding, label: 'Perkantoran' },
]

const TargetKlien = () => {
  return (
    <section className="py-12 bg-white" id="target">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Melayani Berbagai Klien" 
          subtitle="Kami siap membantu kebutuhan IT Anda, dari skala kecil hingga korporasi." 
        />
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {targetData.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.4, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="bg-gray-50 rounded-xl p-6 text-center border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <item.icon className="text-3xl text-blue-600 mx-auto mb-3" />
              <h4 className="text-base md:text-lg font-bold text-gray-800">{item.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetKlien
