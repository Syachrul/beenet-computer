import React from 'react'

const Card = ({ icon, title, description, className = '', children }) => {
  return (
    <div className={`bg-gray-50 rounded-xl p-6 md:p-8 border border-gray-100 transition-all duration-300 ${className}`}>
      {icon && <div className="mb-4">{icon}</div>}
      {title && <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>}
      {description && <p className="text-gray-500 leading-relaxed">{description}</p>}
      {children}
    </div>
  )
}

export default Card
