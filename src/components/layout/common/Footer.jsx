import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FaWhatsapp, 
  FaInstagram, 
  FaYoutube, 
  FaTiktok,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight
} from 'react-icons/fa'
import kontakData from '../../../data/kontakData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/layanan', label: 'Layanan' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/tentang', label: 'Tentang' },
    { to: '/kontak', label: 'Kontak' },
  ]

  const services = [
    { to: '/layanan', label: 'Service PC' },
    { to: '/layanan', label: 'Service Laptop' },
    { to: '/layanan', label: 'Service Printer' },
    { to: '/layanan', label: 'Networking' },
    { to: '/layanan', label: 'IT Konsultasi' },
  ]

  const socialLinks = [
    { icon: FaWhatsapp, href: `https://wa.me/${kontakData.telepon.whatsapp}`, label: 'WhatsApp', color: 'hover:bg-[#25D366]' },
    { icon: FaInstagram, href: kontakData.sosial.instagram, label: 'Instagram', color: 'hover:bg-[#E4405F]' },
    { icon: FaFacebook, href: kontakData.sosial.facebook, label: 'Facebook', color: 'hover:bg-[#1877F2]' },
    { icon: FaYoutube, href: kontakData.sosial.youtube, label: 'YouTube', color: 'hover:bg-[#FF0000]' },
    { icon: FaTiktok, href: kontakData.sosial.tiktok, label: 'TikTok', color: 'hover:bg-[#000000]' },
  ]

  return (
    <footer className="bg-secondary-dark text-white/80 border-t border-white/5">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/beenet-logo.png" 
                alt="BeeNET Computer Logo" 
                className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-none">
                  Bee<span className="text-primary">NET</span>
                </span>
                <span className="text-[10px] md:text-xs lg:text-sm text-white/40 font-medium tracking-wider uppercase">
                  Computer
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Solusi IT Service terpercaya untuk PC, Laptop, Printer, dan Networking. 
              Profesional, cepat, dan bergaransi.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link 
                    to={link.to} 
                    className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight size={12} className="text-primary/0 group-hover:text-primary transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Layanan</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.to} 
                    className="text-white/60 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight size={12} className="text-primary/0 group-hover:text-primary transition-all" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href={`tel:${kontakData.telepon.utama.replace(/-/g, '')}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-0.5">
                    <FaPhone className="text-primary text-sm" />
                  </div>
                  <div>
                    <div className="text-white/80 group-hover:text-primary transition-colors font-medium">
                      {kontakData.telepon.display}
                    </div>
                    <div className="text-white/40 text-xs">Hubungi sekarang</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${kontakData.email}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-0.5">
                    <FaEnvelope className="text-primary text-sm" />
                  </div>
                  <div>
                    <div className="text-white/80 group-hover:text-primary transition-colors font-medium">
                      {kontakData.email}
                    </div>
                    <div className="text-white/40 text-xs">Email</div>
                  </div>
                </a>
              </li>
              <li>
                <a 
                  href={kontakData.alamat.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0 mt-0.5">
                    <FaMapMarkerAlt className="text-primary text-sm" />
                  </div>
                  <div>
                    <div className="text-white/80 group-hover:text-primary transition-colors font-medium">
                      Lihat Alamat
                    </div>
                    <div className="text-white/40 text-xs line-clamp-1">{kontakData.alamat.singkat}</div>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FaClock className="text-primary text-sm" />
                  </div>
                  <div>
                    <div className="text-white/80 font-medium">{kontakData.jamOperasional.keterangan}</div>
                    <div className="text-white/40 text-xs">Senin-Jumat: {kontakData.jamOperasional.senin_jumat}</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-white/40">
              &copy; {currentYear} <Link to="/" className="text-primary hover:text-primary-dark transition-colors">BeeNET Computer</Link>. 
              All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/" className="text-white/40 hover:text-primary transition-colors">
                Kebijakan Privasi
              </Link>
              <Link to="/" className="text-white/40 hover:text-primary transition-colors">
                Syarat & Ketentuan
              </Link>
              <Link to="/kontak" className="text-white/40 hover:text-primary transition-colors">
                Bantuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
