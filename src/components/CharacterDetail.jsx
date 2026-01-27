import React from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import './CharacterDetail.css'

const CharacterDetail = ({ character, onBack }) => {
  if (!character) {
    return (
      <section className="character-detail loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading hero...</p>
        </div>
      </section>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <Motion.section
        key={character.id}
        className="character-detail"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button className="back-btn" onClick={onBack}>
          ← Back to Characters
        </button>

        <div className="detail-container">
          <Motion.div
            className="detail-image"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-wrapper">
              <img src={character.image} alt={character.name} />
              <div className="image-glow"></div>
            </div>
          </Motion.div>

          <Motion.div
            className="detail-content"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="hero-header"
            >
              <h1>{character.name}</h1>
              <p className="real-name">{character.realName}</p>
              <span className="role-badge">{character.role}</span>
            </Motion.div>

            <Motion.div
              className="detail-description"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3>✨ About</h3>
              <p>{character.desc}</p>
            </Motion.div>

            <Motion.div
              className="powers-section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3>⚡ Powers & Abilities</h3>
              <div className="powers-list">
                {character.powers.map((power, idx) => (
                  <Motion.div
                    key={idx}
                    className="power-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <span className="power-icon">⚡</span>
                    <span className="power-text">{power}</span>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>

            <Motion.div
              className="action-buttons"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Motion.button
                className="primary-btn"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(196, 30, 58, 0.4)' }}
                whileTap={{ scale: 0.95 }}
              >
                🎬 Learn More
              </Motion.button>
              <Motion.button
                className="secondary-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🤝 Join Team
              </Motion.button>
            </Motion.div>

            <Motion.div
              className="stats-section"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3>📊 Hero Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-label">Power Level</span>
                  <div className="stat-bar">
                    <Motion.div
                      className="stat-fill power-level"
                      initial={{ width: 0 }}
                      animate={{ width: '92%' }}
                      transition={{ delay: 0.5, duration: 1 }}
                    ></Motion.div>
                  </div>
                  <span className="stat-value">92/100</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Speed</span>
                  <div className="stat-bar">
                    <Motion.div
                      className="stat-fill speed"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 0.6, duration: 1 }}
                    ></Motion.div>
                  </div>
                  <span className="stat-value">85/100</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Intelligence</span>
                  <div className="stat-bar">
                    <Motion.div
                      className="stat-fill intelligence"
                      initial={{ width: 0 }}
                      animate={{ width: '88%' }}
                      transition={{ delay: 0.7, duration: 1 }}
                    ></Motion.div>
                  </div>
                  <span className="stat-value">88/100</span>
                </div>
              </div>
            </Motion.div>
          </Motion.div>
        </div>
      </Motion.section>
    </AnimatePresence>
  )
}

export default CharacterDetail

