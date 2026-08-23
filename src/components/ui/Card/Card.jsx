import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@hooks/useReducedMotion'

const Card = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  hover = false,
  onClick,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion()

  const variants = {
    default: 'bg-white border border-gray-100',
    primary: 'bg-primary/5 border border-primary/20',
    secondary: 'bg-secondary/5 border border-secondary/20',
    dark: 'bg-secondary-dark text-white border border-white/10',
    ghost: 'bg-transparent border border-gray-200',
  }

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  }

  const baseClasses = `
    rounded-xl
    transition-all duration-300
    ${variants[variant]}
    ${paddings[padding]}
    ${hover ? 'hover:shadow-soft hover:-translate-y-1' : ''}
    ${onClick ? 'cursor-pointer' : ''}
    ${className}
  `

  const animationProps = {
    whileHover: prefersReducedMotion || !hover ? {} : { y: -4 },
    transition: { duration: 0.3 },
  }

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      {...animationProps}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
