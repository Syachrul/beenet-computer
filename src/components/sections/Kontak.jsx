import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok,
  FaFacebook,
  FaClock,
  FaExternalLinkAlt,
  FaCopy
} from 'react-icons/fa'
import { toast } from 'react-hot-toast'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import kontakData from '../../data/kontakData'

const Kontak = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    service: '', 
    message: '' 
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulasi pengiriman
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    toast.success('✅ Pesan Anda telah terkirim! Tim BeeNET akan menghubungi Anda dalam 1x24 jam.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setIsSubmitting(false)
  }

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    toast.success(`✅ ${label} telah disalin!`)
  }

  const contactInfo = [
    { 
      icon: FaPhone, 
      label: kontakData.telepon.display,
      href: `tel:${kontakData.telepon.utama.replace(/-/g, '')}`,
      detail: 'Hubungi sekarang',
      copy: kontakData.telepon.utama
    },
    { 
      icon: FaWhatsapp, 
      label: 'Chat WhatsApp',
      href: `https://wa.me/${kontakData.telepon.whatsapp}`,
      detail: 'Fast response 24/7',
      isWhatsApp: true
    },
    { 
      icon: FaEnvelope, 
      label: kontakData.email,
      href: `mailto:${kontakData.email}`,
      detail: 'Balas dalam 1x24 jam',
      copy: kontakData.email
    },
    { 
      icon: FaMapMarkerAlt, 
      label: 'Lihat di Google Maps',
      href: kontakData.alamat.maps,
      detail: kontakData.alamat.singkat,
      isMaps: true
    },
  ]

  const socials = [
    { icon: FaInstagram, label: 'Instagram', href: kontakData.sosial.instagram, color: 'hover:bg-[#E4405F]' },
    { icon: FaYoutube, label: 'YouTube', href: kontakData.sosial.youtube, color: 'hover:bg-[#FF0000]' },
    { icon: FaTiktok, label: 'TikTok', href: kontakData.sosial.tiktok, color: 'hover:bg-[#000000]' },
    { icon: FaFacebook, label: 'Facebook', href: kontakData.sosial.facebook, color: 'hover:bg-[#1877F2]' },
  ]

  return (
    <section className="section-padding bg-white" id="kontak">
      <div className="container-custom">
        <SectionTitle 
          title="Hubungi <span class='text-primary'>Kami</span>" 
          subtitle="Konsultasi gratis dan penawaran terbaik untuk kebutuhan IT Anda." 
        />
        
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Contact Info - 2/5 kolom */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Nama Perusahaan */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-secondary flex items-center gap-2">
                <span className="text-primary">🐝</span>
                {kontakData.nama}
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                <FaClock className="text-primary" size={14} />
                <span>{kontakData.jamOperasional.keterangan}</span>
              </div>
            </div>

            {/* Alamat */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6 border border-gray-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-secondary font-medium">Alamat</p>
                  <p className="text-gray-600 text-sm">{kontakData.alamat.detail}</p>
                  <a 
                    href={kontakData.alamat.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary text-sm font-medium hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    <FaExternalLinkAlt size={12} />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Items */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.isMaps ? '_blank' : undefined}
                  rel={item.isMaps ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-all group border border-transparent hover:border-gray-200"
                >
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.isWhatsApp ? 'bg-[#25D366]/10 text-[#25D366]' : 
                    item.isMaps ? 'bg-[#EA4335]/10 text-[#EA4335]' :
                    'bg-primary/10 text-primary'
                  } group-hover:scale-110 transition-transform`}>
                    <item.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-secondary font-medium group-hover:text-primary transition-colors">
                      {item.label}
                    </div>
                    <div className="text-gray-400 text-sm">{item.detail}</div>
                  </div>
                  {item.copy && (
                    <button 
                      onClick={(e) => {
                        e.preventDefault()
                        copyToClipboard(item.copy, item.label)
                      }}
                      className="text-gray-300 hover:text-primary transition-colors p-1"
                      title="Salin"
                    >
                      <FaCopy size={16} />
                    </button>
                  )}
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-6 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-3">Ikuti kami di sosial media:</p>
              <div className="flex gap-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Jam Operasional Detail */}
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <h4 className="font-bold text-secondary mb-2 flex items-center gap-2">
                <FaClock className="text-primary" />
                Jam Operasional
              </h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Senin - Jumat</span>
                  <span className="text-secondary font-medium">{kontakData.jamOperasional.senin_jumat}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Sabtu</span>
                  <span className="text-secondary font-medium">{kontakData.jamOperasional.sabtu}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Minggu</span>
                  <span className="text-red-500 font-medium">{kontakData.jamOperasional.minggu}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form - 3/5 kolom */}
          <motion.form 
            onSubmit={handleSubmit} 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-gray-50 rounded-2xl p-6 md:p-8"
          >
            <h4 className="text-xl font-bold text-secondary mb-4">Kirim Pesan</h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Nama Lengkap" 
                value={formData.name} 
                onChange={handleChange} 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
                required 
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" 
                required 
              />
            </div>
            
            <input 
              type="tel" 
              name="phone" 
              placeholder="Nomor HP" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mt-4" 
            />
            
            <select 
              name="service" 
              value={formData.service} 
              onChange={handleChange} 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mt-4 appearance-none bg-white"
            >
              <option value="">Pilih Layanan</option>
              <option value="Service PC">Service PC</option>
              <option value="Service Laptop">Service Laptop</option>
              <option value="Service Printer">Service Printer</option>
              <option value="Networking">Networking</option>
              <option value="Konsultasi IT">Konsultasi IT</option>
              <option value="Lainnya">Lainnya</option>
            </select>
            
            <textarea 
              name="message" 
              placeholder="Detail keluhan atau kebutuhan Anda..." 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all mt-4 resize-none min-h-[120px]" 
              required 
            />
            
            <Button 
              type="submit" 
              variant="primary" 
              size="lg" 
              className="w-full mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Mengirim...
                </span>
              ) : (
                'Kirim Pesan'
              )}
            </Button>

            <p className="text-xs text-gray-400 text-center mt-4">
              Kami akan merespon dalam 1x24 jam kerja
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Kontak
