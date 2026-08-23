import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const LogoCoin = ({ className = '', scrolled = false }) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const [animationCount, setAnimationCount] = useState(0)

  useEffect(() => {
    if (animationCount > 0) {
      const timer = setTimeout(() => {
        setIsAnimating(true)
      }, 4000)
      return () => clearTimeout(timer)
    }
  }, [animationCount])

  useEffect(() => {
    setIsAnimating(true)
  }, [])

  const handleAnimationComplete = () => {
    setAnimationCount(prev => prev + 1)
    setIsAnimating(false)
  }

  return (
    <div className="relative inline-block perspective-1000">
      <motion.div
        className="relative"
        animate={{
          rotateY: isAnimating ? [0, 720, 720] : 0,
          scale: isAnimating ? [1, 1.08, 1] : 1,
          rotateX: isAnimating ? [0, 3, -3, 0] : 0,
        }}
        transition={{
          rotateY: {
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.8, 1],
          },
          scale: {
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.5, 1],
          },
          rotateX: {
            duration: 2.5,
            ease: "easeInOut",
            times: [0, 0.3, 0.7, 1],
          }
        }}
        onAnimationComplete={handleAnimationComplete}
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-full blur-2xl"
          animate={{
            scale: isAnimating ? [1, 1.4, 1] : 1,
            opacity: isAnimating ? [0.15, 0.4, 0.15] : 0.15,
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(circle, rgba(245,176,66,0.35) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        {/* Shadow */}
        <motion.div
          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 -z-10"
          animate={{
            width: isAnimating ? ['80%', '100%', '80%'] : '80%',
            height: isAnimating ? [6, 10, 6] : 6,
            opacity: isAnimating ? [0.15, 0.35, 0.15] : 0.15,
          }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
          }}
          style={{
            background: 'radial-gradient(ellipse, rgba(245,176,66,0.25) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(4px)',
          }}
        />

        {/* Logo Image */}
        <motion.img
          src="/beenet-logo.png"
          alt="BeeNET Computer Logo"
          className={`w-auto object-contain transition-all duration-300 ${className}`}
          style={{
            transformStyle: 'preserve-3d',
            backfaceVisibility: 'hidden',
          }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3 }
          }}
        />

        {/* Efek kilau */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            opacity: isAnimating ? [0, 0.15, 0] : 0,
            x: isAnimating ? ['-100%', '100%'] : '0%',
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
        />
      </motion.div>
    </div>
  )
}

export default LogoCoin
