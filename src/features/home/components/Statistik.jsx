import React from 'react'
import { motion } from 'framer-motion'

const Statistik = () => {
  const stats = [
    { value: '500+', label: 'Klien Puas' },
    { value: '98%', label: 'Kepuasan' },
    { value: '4.9', label: 'Rating Google' },
    { value: '10+', label: 'Tahun Pengalaman' },
  ]

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl md:text-4xl font-extrabold text-primary">{stat.value}</h3>
              <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistik
