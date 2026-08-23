import React from 'react'

const SectionTitle = ({ title, subtitle, className = '' }) => {
  return (
    <div className={`text-center mb-12 md:mb-16 ${className}`}>
      <h2 
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
