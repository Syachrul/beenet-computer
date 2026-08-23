import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../../ui/Button'
import LogoCoin from './LogoCoin'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Beranda', icon: '🏠' },
    { to: '/layanan', label: 'Layanan', icon: '💻' },
    { to: '/portfolio', label: 'Portfolio', icon: '📁' },
    { to: '/tentang', label: 'Tentang', icon: '📋' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-secondary-dark shadow-2xl py-2 border-b border-primary/10' 
        : 'bg-secondary-dark/95 backdrop-blur-md py-3 border-b border-white/5'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo - 25% lebih besar dari sebelumnya */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              {/* Animasi logo coin */}
              <div className="transform scale-[0.95] origin-left">
                <LogoCoin 
                  className={`h-[90px] md:h-[110px] lg:h-[130px] ${
                    scrolled ? 'h-[60px] md:h-[70px] lg:h-[80px]' : ''
                  }`}
                  scrolled={scrolled}
                />
              </div>
              {/* Efek glow */}
              <div className="absolute -inset-3 bg-primary/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </div>
            {/* Teks BeeNET Computer dalam 1 baris */}
            <div className="flex items-center gap-1">
              <span className={`font-extrabold text-white leading-none transition-all duration-300 ${
                scrolled ? 'text-lg md:text-xl lg:text-2xl' : 'text-2xl md:text-3xl lg:text-4xl'
              }`}>
                Bee<span className="text-primary">NET</span>
              </span>
              <span className={`text-white/50 font-medium tracking-[0.15em] uppercase transition-all duration-300 ${
                scrolled ? 'text-[10px] md:text-xs lg:text-sm' : 'text-xs md:text-sm lg:text-base'
              }`}>
                Computer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.to} 
                to={link.to} 
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive 
                      ? 'text-primary bg-primary/10 shadow-glow' 
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span className="text-sm">{link.icon}</span>
                {link.label}
              </NavLink>
            ))}
            <Button to="/kontak" variant="primary" size="sm">Hubungi</Button>
          </nav>

          {/* Mobile Hamburger */}
          <button className="md:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pt-4 border-t border-white/10"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <NavLink 
                    key={link.to} 
                    to={link.to} 
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-3 ${
                        isActive 
                          ? 'text-primary bg-primary/10' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    <span className="text-lg">{link.icon}</span>
                    {link.label}
                  </NavLink>
                ))}
                <Button to="/kontak" variant="primary" size="md" className="w-full text-center">
                  Hubungi Kami
                </Button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
