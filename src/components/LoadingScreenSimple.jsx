import React, { useEffect, useState } from 'react'
import { motion as Motion } from 'framer-motion'
import './LoadingScreen.css'

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 200)
          return 100
        }
        return prev + Math.random() * 30 + 15
      })
    }, 400)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <Motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="loading-content">
        <Motion.div
          className="loading-logo"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="#c41e3a" strokeWidth="2" opacity="0.3" />
            <path
              d="M 50 10 A 40 40 0 0 1 80 80"
              stroke="#c41e3a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="125"
            />
            <circle cx="50" cy="15" r="4" fill="#c41e3a" />
          </svg>
        </Motion.div>

        <h2>AVENGERS</h2>

        <div className="progress-container">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <Motion.div
          className="progress-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <span className="percentage">{Math.min(Math.ceil(progress), 100)}%</span>
        </Motion.div>

        <p className="loading-subtitle">Assembling the team...</p>
      </div>
    </Motion.div>
  )
}

export default LoadingScreen
