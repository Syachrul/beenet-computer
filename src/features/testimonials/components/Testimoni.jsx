import React from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'
import { SectionTitle } from '@components/ui'
import { testimonials } from '@content/testimonials'

const Testimoni = () => {
  return (
    <section className="section-padding bg-secondary text-white" id="testimoni">
      <div className="container-custom">
        <SectionTitle 
          title="Apa Kata <span class='text-primary'>Klien</span>" 
          subtitle="Mereka sudah merasakan layanan BeeNET Computer." 
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all"
            >
              <div className="flex gap-1 text-primary mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <blockquote className="text-white/80 italic mb-4">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-secondary flex items-center justify-center font-bold">
                  {item.avatar}
                </div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-white/40 text-sm">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimoni
