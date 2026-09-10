import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, 
  FaExternalLinkAlt, FaArrowRight, FaInstagram, FaYoutube, FaTiktok, FaFacebook 
} from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import Particles from '@/components/ui/Particles';
import companyData from '@/data/company';

const MAPS_URL = 'https://maps.app.goo.gl/to7rVTemp4jjuBdU6';

const Kontak = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Pesan berhasil dikirim!');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      toast.error('Gagal mengirim pesan. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Alamat',
      value: 'Perum Pesona Kramat Jaya Blk. B No.6, Rancamulya, Pameungpeuk, Bandung Regency, West Java 40376',
      link: MAPS_URL,
      linkText: 'Buka di Google Maps'
    },
    {
      icon: FaPhone,
      title: 'Telepon',
      value: '0852-2002-5810',
      link: 'tel:085220025810',
      linkText: 'Hubungi sekarang'
    },
    {
      icon: FaWhatsapp,
      title: 'Chat WhatsApp',
      value: 'Fast response 24/7',
      link: 'https://wa.me/6285220025810',
      linkText: 'Chat Sekarang'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'syachrul.bdg@gmail.com',
      link: 'mailto:syachrul.bdg@gmail.com',
      linkText: 'Kirim Email'
    }
  ];

  // Social Media Links
  const socialMedia = [
    { icon: FaWhatsapp, link: 'https://wa.me/6285220025810', label: 'WhatsApp', color: 'hover:bg-green-500' },
    { icon: FaInstagram, link: companyData.instagram, label: 'Instagram', color: 'hover:bg-pink-500' },
    { icon: FaYoutube, link: companyData.youtube, label: 'YouTube', color: 'hover:bg-red-500' },
    { icon: FaTiktok, link: companyData.tiktok, label: 'TikTok', color: 'hover:bg-black' },
    { icon: FaFacebook, link: companyData.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 overflow-hidden">
        <Particles count={30} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg text-blue-200">Konsultasi gratis dan penawaran terbaik untuk kebutuhan IT Anda.</p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Masukkan nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Masukkan email Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nomor HP</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Masukkan nomor telepon" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pilih Layanan</label>
                <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                  <option value="">Pilih Layanan</option>
                  <option value="Service PC">Service PC</option>
                  <option value="Service Laptop">Service Laptop</option>
                  <option value="Service Printer">Service Printer</option>
                  <option value="Networking">Networking</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Detail keluhan atau kebutuhan Anda...</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Tulis pesan Anda..." />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2">
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                <FaArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">BeeNET Computer</h2>
              <p className="text-gray-500 text-sm">Closed - Opens 9.00 am</p>
            </div>
            {contactInfo.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-gray-600 text-sm">{item.value}</p>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-1 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors">
                        {item.linkText || item.title}
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Media Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.5 }} 
              viewport={{ once: true }} 
              className="bg-gray-50 rounded-2xl p-6"
            >
              <p className="font-semibold text-gray-800 mb-3">Ikuti Media Sosial Kami</p>
              <div className="flex flex-wrap gap-3">
                {socialMedia.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`w-11 h-11 bg-white rounded-xl flex items-center justify-center text-gray-600 border border-gray-200 transition-colors ${social.color} hover:text-white`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <iframe
                src={companyData.mapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi BeeNET Computer"
              />
            </motion.div>
            <div className="text-center mt-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                <FaMapMarkerAlt className="w-5 h-5" />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;
