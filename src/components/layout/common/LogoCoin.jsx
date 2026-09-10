import React from 'react';

const LogoCoin = ({ className = 'w-10 h-10', alt = 'BeeNET Computer Logo' }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/beenet-logo.png" 
        alt={alt}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default LogoCoin;
