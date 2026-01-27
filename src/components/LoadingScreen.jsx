import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const [stars] = useState(() =>
    [...Array(20)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
    }))
  )

  useEffect(() => {
    const timer = setTimeout(onComplete, 1500)
    return () => clearTimeout(timer)
  }, [onComplete])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.7,
        ease: 'easeOut',
      },
    }),
  }

  const text = 'AVENGERS'

  return (
    <Motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="stars-bg">
        {stars.map((star, i) => (
          <Motion.div
            key={i}
            className="star"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: 'ease-in-out',
            }}
          />
        ))}
      </div>

      <div className="loading-content">
        <Motion.div
          className="loading-icon"
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#c41e3a" />
                <stop offset="100%" stopColor="#e63946" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" stroke="url(#grad1)" strokeWidth="2" opacity="0.3" />
            <path
              d="M 50 10 A 40 40 0 0 1 80 80"
              stroke="url(#grad1)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="125"
              strokeDashoffset="0"
            />
            <circle cx="50" cy="15" r="4" fill="url(#grad1)" />
          </svg>
        </Motion.div>

        <Motion.div
          className="loading-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-container">
            {text.split('').map((letter, i) => (
              <Motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                className="letter"
              >
                {letter}
              </Motion.span>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          className="loading-dots"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Motion.div
            className="dot"
            animate={{ y: [-10, 0, -10] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          />
          <Motion.div
            className="dot"
            animate={{ y: [-10, 0, -10] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          />
          <Motion.div
            className="dot"
            animate={{ y: [-10, 0, -10] }}
            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          />
        </Motion.div>

        <Motion.p
          className="loading-subtitle"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          Assembling the team...
        </Motion.p>

        <Motion.div
          className="progress-bar"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left' }}
        />

        <Motion.div
          className="power-gems"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {['Mind', 'Power', 'Time', 'Space', 'Reality', 'Soul'].map((gem, i) => (
            <Motion.div
              key={i}
              className="gem"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.08,
              }}
              title={gem}
            />
          ))}
        </Motion.div>
      </div>
    </Motion.div>
  )
}

export default LoadingScreen
