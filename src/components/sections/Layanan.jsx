import React from 'react'
import { motion } from 'framer-motion'
import { FaDesktop, FaLaptop, FaPrint, FaNetworkWired } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { layananData } from '../../data/layananData'

const Layanan = () => {
  return (
    <section className="section-padding bg-white" id="layanan">
      <div className="container-custom">
        <SectionTitle 
          title="Layanan <span class='text-primary'>Kami</span>" 
          subtitle="Kami menyediakan jasa service IT lengkap untuk semua kebutuhan Anda." 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layananData.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }}
            >
              <Card 
                icon={<item.icon className="text-4xl text-primary" />} 
                title={item.title} 
                description={item.description} 
                className="h-full text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Layanan
