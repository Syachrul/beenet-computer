import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptop, FaDesktop, FaPrint, FaNetworkWired } from 'react-icons/fa'
import Button from '../ui/Button'

const Hero = () => {
  const services = [
    { icon: FaLaptop, label: 'Laptop' },
    { icon: FaDesktop, label: 'PC' },
    { icon: FaPrint, label: 'Printer' },
    { icon: FaNetworkWired, label: 'Networking' },
  ]

  return (
    <section className="relative bg-gradient-to-br from-[#0F1724] via-[#1E2A3A] to-[#2A3A4E] text-white overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#F5B042]/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Solusi IT Service <br />
              <span className="text-[#F5B042]">Terpercaya</span> untuk Semua
            </h1>
            <p className="text-gray-300 text-lg mt-6 max-w-lg">
              BeeNET Computer hadir untuk memenuhi kebutuhan service PC, Laptop, Printer,
              dan Networking Anda — cepat, profesional, dan bergaransi.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button to="/kontak" variant="primary" size="lg">Konsultasi Gratis</Button>
              <Button to="/layanan" variant="outline-light" size="lg">Lihat Layanan</Button>
            </div>
            <motion.div className="flex gap-8 mt-12 pt-8 border-t border-white/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <div><h3 className="text-3xl font-bold text-[#F5B042]">100+</h3><p className="text-gray-400 text-sm">Klien Puas</p></div>
              <div><h3 className="text-3xl font-bold text-[#F5B042]">98%</h3><p className="text-gray-400 text-sm">Kepuasan</p></div>
              <div><h3 className="text-3xl font-bold text-[#F5B042]">5.0</h3><p className="text-gray-400 text-sm">Rating Google</p></div>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="grid grid-cols-2 gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            {services.map((item, index) => (
              <motion.div key={index} whileHover={{ y: -8, scale: 1.02 }} className="text-center p-6 bg-white/5 rounded-xl hover:bg-[#F5B042]/10 transition-all">
                <item.icon className="text-4xl text-[#F5B042] mx-auto mb-3" />
                <span className="text-white/80 text-sm">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
