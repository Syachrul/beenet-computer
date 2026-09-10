import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
  const alignment = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';
  
  return (
    <div className={`${alignment} ${className} mb-2`}>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`w-16 h-1 bg-blue-600 mt-3 ${align === 'center' ? 'mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionTitle;
