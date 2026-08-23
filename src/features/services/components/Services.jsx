import React from 'react'
import { motion } from 'framer-motion'
import { services } from '@content/services'
import { SectionTitle, Card } from '@components/ui'

const Services = () => {
  const iconMap = {
    FaDesktop: '💻',
    FaLaptop: '🖥️',
    FaPrint: '🖨️',
    FaNetworkWired: '🌐',
  }

  return (
    <section className="section-padding bg-white" id="layanan">
      <div className="container-custom">
        <SectionTitle 
          title="Layanan <span class='text-primary'>Kami</span>" 
          subtitle="Kami menyediakan jasa service IT lengkap untuk semua kebutuhan Anda." 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }}
            >
              <Card 
                icon={<span className="text-4xl text-primary">{iconMap[item.icon] || '🔧'}</span>} 
                title={item.title} 
                description={item.description} 
                className="h-full text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-2" 
              >
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <span className="text-sm text-primary font-semibold">{item.price}</span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
