import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ children, to, onClick, variant = 'primary', size = 'md', className = '', type = 'button', disabled = false }) => {
  const variants = {
    primary: 'bg-primary text-secondary hover:bg-primary-dark shadow-glow',
    secondary: 'bg-secondary text-white hover:bg-secondary-light',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-secondary',
    'outline-light': 'border-2 border-white/30 text-white hover:bg-white hover:text-secondary',
    white: 'bg-white text-secondary hover:bg-gray-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses = `inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={baseClasses}>{children}</Link>
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
