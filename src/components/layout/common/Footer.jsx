import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import LogoCoin from './LogoCoin';
import LegalModal from './LegalModal';
import { privacyPolicyContent, termsContent, helpContent } from '@/data/legalContent';
import companyData from '@/data/company';

const Footer = () => {
  const [modalState, setModalState] = useState({ isOpen: false, content: null });

  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (content) => {
    setModalState({ isOpen: true, content });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, content: null });
  };

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/layanan', label: 'Layanan' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/tentang', label: 'Tentang' },
    { path: '/kontak', label: 'Hubungi' },
  ];

  // Social Media dengan link yang benar
  const socialMedia = [
    { icon: FaWhatsapp, link: 'https://wa.me/6285220025810', label: 'WhatsApp' },
    { icon: FaInstagram, link: companyData.instagram, label: 'Instagram' },
    { icon: FaYoutube, link: companyData.youtube, label: 'YouTube' },
    { icon: FaTiktok, link: companyData.tiktok, label: 'TikTok' },
    { icon: FaFacebook, link: companyData.facebook, label: 'Facebook' },
  ];

  return (
    <>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Layanan */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Layanan</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 transition-colors text-sm">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tautan Cepat */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={() => openModal(helpContent)} className="text-gray-600 hover:text-blue-600 transition-colors text-sm text-left">
                    Pusat Bantuan
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal(privacyPolicyContent)} className="text-gray-600 hover:text-blue-600 transition-colors text-sm text-left">
                    Kebijakan Privasi
                  </button>
                </li>
                <li>
                  <button onClick={() => openModal(termsContent)} className="text-gray-600 hover:text-blue-600 transition-colors text-sm text-left">
                    Syarat & Ketentuan
                  </button>
                </li>
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Kontak</h3>
              <ul className="space-y-3">
                <li>
                  <a href="tel:085220025810" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    <FaPhone className="w-4 h-4" />
                    <span>0852-2002-5810</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:syachrul.bdg@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    <FaEnvelope className="w-4 h-4" />
                    <span>syachrul.bdg@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href={companyData.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm">
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span>Lihat Alamat</span>
                  </a>
                </li>
                <li>
                  <span className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaClock className="w-4 h-4" />
                    <span>Senin-Jumat: 09.00 - 20.00</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* Logo & Social Media */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <LogoCoin className="w-12 h-12" />
                <div>
                  <span className="text-lg font-bold text-gray-800 block leading-tight">BEENET</span>
                  <span className="text-xs text-gray-500 block -mt-1">EST. 1998</span>
                </div>
              </div>
              <div className="flex gap-3">
                {socialMedia.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title={social.label}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-gray-600"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                &copy; 2026 BeeNET Computer. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <button onClick={() => openModal(privacyPolicyContent)} className="text-gray-500 hover:text-blue-600 transition-colors">
                  Kebijakan Privasi
                </button>
                <button onClick={() => openModal(termsContent)} className="text-gray-500 hover:text-blue-600 transition-colors">
                  Syarat &amp; Ketentuan
                </button>
                <button onClick={() => openModal(helpContent)} className="text-gray-500 hover:text-blue-600 transition-colors">
                  Bantuan
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <LegalModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        content={modalState.content}
      />
    </>
  );
};

export default Footer;
