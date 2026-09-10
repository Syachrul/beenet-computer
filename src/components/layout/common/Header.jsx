import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoCoin from './LogoCoin';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Beranda' },
    { path: '/layanan', label: 'Layanan' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/tentang', label: 'Tentang' },
    { path: '/kontak', label: 'Hubungi' },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" onClick={handleNavClick} className="flex items-center gap-3 flex-shrink-0">
            <LogoCoin className="w-12 h-12 md:w-14 md:h-14" />
            <div>
              <span className="text-xl md:text-2xl font-bold text-gray-800 block leading-tight">BEENET</span>
              <span className="text-xs md:text-sm text-gray-500 block -mt-1">EST. 1998</span>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={handleNavClick}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600 pb-1' : 'text-gray-600'
                }`}>
                {item.label}
              </Link>
            ))}
          </nav>
          <button className="md:hidden text-gray-600 hover:text-blue-600 transition-colors p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="py-4 border-t border-gray-100 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={handleNavClick}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                  location.pathname === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
