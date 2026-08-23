import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@hooks/useReducedMotion'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
  to,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion()

  const variants = {
    primary: 'bg-primary text-secondary hover:bg-primary-dark shadow-glow',
    secondary: 'bg-secondary text-white hover:bg-secondary-light',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-secondary',
    'outline-light': 'border-2 border-white/30 text-white hover:bg-white hover:text-secondary',
    white: 'bg-white text-secondary hover:bg-gray-50',
    ghost: 'text-secondary hover:bg-gray-100 hover:text-primary',
    danger: 'bg-red-600 text-white hover:bg-red-700',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-semibold rounded-full
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `

  const animationProps = {
    whileHover: prefersReducedMotion ? {} : { scale: 1.03 },
    whileTap: prefersReducedMotion ? {} : { scale: 0.97 },
    transition: { duration: 0.2 },
  }

  const content = (
    <>
      {loading && (
        <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
      )}
      {icon && iconPosition === 'left' && <span className="text-current">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="text-current">{icon}</span>}
    </>
  )

  if (to) {
    return (
      <motion.a
        href={to}
        className={baseClasses}
        {...animationProps}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...animationProps}
      {...props}
    >
      {content}
    </motion.button>
  )
}

export default Button
