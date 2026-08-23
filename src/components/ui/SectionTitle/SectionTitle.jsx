import React from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '@hooks/useReducedMotion'

const SectionTitle = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  animated = true,
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion()

  const alignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  const animationProps = animated && !prefersReducedMotion
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-50px' },
        transition: { duration: 0.6 },
      }
    : {}

  return (
    <motion.div
      className={`space-y-4 ${alignment[align]} ${className}`}
      {...animationProps}
      {...props}
    >
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
