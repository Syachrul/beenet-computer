import React from 'react'
import { motion } from 'framer-motion'
import { SectionTitle } from '@components/ui'

const targetData = [
  { id: 1, icon: '👤', label: 'Personal' },
  { id: 2, icon: '🏫', label: 'Sekolahan' },
  { id: 3, icon: '🏪', label: 'Unit Usaha' },
  { id: 4, icon: '🏢', label: 'Perkantoran' },
]

const TargetKlien = () => {
  return (
    <section className="section-padding bg-white" id="target">
      <div className="container-custom">
        <SectionTitle 
          title="Melayani <span class='text-primary'>Berbagai</span> Klien" 
          subtitle="Kami siap membantu kebutuhan IT Anda, dari skala kecil hingga korporasi." 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetData.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.4, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="bg-gray-50 rounded-xl p-8 text-center border-l-4 border-primary hover:shadow-soft transition-all duration-300 hover:scale-105"
            >
              <span className="text-4xl block mb-3">{item.icon}</span>
              <h4 className="text-xl font-bold text-secondary">{item.label}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetKlien
