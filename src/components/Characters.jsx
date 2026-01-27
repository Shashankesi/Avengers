import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Characters.css'

const Characters = ({ onSelectCharacter }) => {
  const [filter, setFilter] = useState('all')
  const [hoveredId, setHoveredId] = useState(null)

  // Type-based color schemes
  const typeColors = {
    tech: { primary: '#00D9FF', secondary: '#0099CC', glow: 'rgba(0, 217, 255, 0.3)' },
    cosmic: { primary: '#FF00FF', secondary: '#9D00FF', glow: 'rgba(255, 0, 255, 0.3)' },
    street: { primary: '#FFD700', secondary: '#FFA500', glow: 'rgba(255, 215, 0, 0.3)' },
    soldier: { primary: '#00FF41', secondary: '#00DD33', glow: 'rgba(0, 255, 65, 0.3)' }
  }

  const characters = [
    {
      id: 1,
      name: 'Iron Man',
      realName: 'Tony Stark',
      role: 'Genius, Billionaire',
      image: './images/a1.png',
      powers: ['Intelligence', 'Technology', 'Engineering'],
      desc: 'A visionary genius powered by intellect and technology. Builds cutting-edge armor to protect the world.',
      category: 'tech',
      element: '⚙️ TECH',
      badge: 'GENIUS'
    },
    {
      id: 2,
      name: 'Thor',
      realName: 'Thor Odinson',
      role: 'God of Thunder',
      image: './images/a2.png',
      powers: ['Godly Strength', 'Lightning Control', 'Flight'],
      desc: 'An Asgardian god with command over thunder and storms. Wielder of the mighty Mjolnir.',
      category: 'cosmic',
      element: '⚡ COSMIC',
      badge: 'GOD'
    },
    {
      id: 3,
      name: 'Spider-Man',
      realName: 'Peter Parker',
      role: 'Friendly Neighborhood',
      image: './images/a3.png',
      powers: ['Wall Crawling', 'Super Strength', 'Web Slinging'],
      desc: 'A young hero balancing responsibility with adventure. Your friendly neighborhood guardian.',
      category: 'street',
      element: '🕷️ STREET',
      badge: 'VIGILANTE'
    },
    {
      id: 4,
      name: 'Captain America',
      realName: 'Steve Rogers',
      role: 'Super Soldier',
      image: './images/a4.png',
      powers: ['Enhanced Strength', 'Leadership', 'Combat'],
      desc: 'A symbol of hope and justice with unwavering morals. America\'s first avenger.',
      category: 'soldier',
      element: '🛡️ SOLDIER',
      badge: 'LEADER'
    },
    {
      id: 5,
      name: 'Black Panther',
      realName: 'T\'Challa',
      role: 'King of Wakanda',
      image: './images/Black Panther.jpg',
      powers: ['Enhanced Agility', 'Vibranium Suit', 'Ancestral Powers'],
      desc: 'King of the technologically advanced nation of Wakanda. Protector of his people.',
      category: 'tech',
      element: '🐾 TECH',
      badge: 'KING'
    },
    {
      id: 6,
      name: 'Captain Marvel',
      realName: 'Carol Danvers',
      role: 'Cosmic Avenger',
      image: './images/Captain Marvel.jpg',
      powers: ['Cosmic Energy', 'Flight', 'Super Strength'],
      desc: 'A cosmic warrior with incredible power. One of the most powerful beings in existence.',
      category: 'cosmic',
      element: '✨ COSMIC',
      badge: 'OMEGA'
    },
    {
      id: 7,
      name: 'Loki',
      realName: 'Loki Laufeyson',
      role: 'God of Mischief',
      image: './images/loki.jpg',
      powers: ['Magic', 'Shapeshifting', 'Illusion'],
      desc: 'The God of Mischief navigating the multiverse with cunning and charm.',
      category: 'cosmic',
      element: '🎭 COSMIC',
      badge: 'TRICKSTER'
    },
    {
      id: 8,
      name: 'Hawkeye',
      realName: 'Clint Barton',
      role: 'Expert Marksman',
      image: './images/Hawkeye.jpg',
      powers: ['Master Archer', 'Tactical Mind', 'Precision'],
      desc: 'An expert marksman proving that skill and tactics match superhuman abilities.',
      category: 'street',
      element: '🎯 STREET',
      badge: 'SHARPSHOOTER'
    },
    {
      id: 9,
      name: 'Thanos',
      realName: 'Thanos',
      role: 'The Mad Titan',
      image: './images/thanos.jpg',
      powers: ['Cosmic Power', 'Infinity Stones', 'Immortality'],
      desc: 'The Mad Titan seeking balance through cosmic power. Ultimate threat to existence.',
      category: 'cosmic',
      element: '💀 COSMIC',
      badge: 'TITAN'
    },
    {
      id: 10,
      name: 'Vision',
      realName: 'Vision',
      role: 'Artificial Being',
      image: './images/Vision.jpg',
      powers: ['Density Manipulation', 'Incredible Intelligence', 'Energy Blasts'],
      desc: 'An artificial being created by science and magic, grappling with genuine humanity.',
      category: 'tech',
      element: '🤖 TECH',
      badge: 'SYNTHETIC'
    },
    {
      id: 11,
      name: 'Scarlet Witch',
      realName: 'Wanda Maximoff',
      role: 'Chaos Magic User',
      image: './images/wanda.jpg',
      powers: ['Chaos Magic', 'Telekinesis', 'Mind Control'],
      desc: 'Wielder of chaos magic with reality-bending powers. A force of nature.',
      category: 'cosmic',
      element: '🔮 COSMIC',
      badge: 'CHAOS'
    },
    {
      id: 12,
      name: 'Black Widow',
      realName: 'Natasha Romanoff',
      role: 'Master Assassin',
      image: './images/Black Widow.jpg',
      powers: ['Expert Combat', 'Espionage', 'Intelligence'],
      desc: 'Master assassin with unmatched skills in espionage and combat excellence.',
      category: 'street',
      element: '🕵️ STREET',
      badge: 'ASSASSIN'
    },
  ]

  const filteredCharacters = filter === 'all' ? characters : characters.filter(c => c.category === filter)

  return (
    <section className="characters">
      <div className="characters-header">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          🦸 Meet the Avengers
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Discover the incredible heroes protecting the universe
        </motion.p>
      </div>

      <motion.div 
        className="filter-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          ⚡ All Heroes
        </button>
        <button 
          className={`filter-btn ${filter === 'tech' ? 'active' : ''}`}
          onClick={() => setFilter('tech')}
        >
          ⚙️ Tech Heroes
        </button>
        <button 
          className={`filter-btn ${filter === 'cosmic' ? 'active' : ''}`}
          onClick={() => setFilter('cosmic')}
        >
          ✨ Cosmic
        </button>
        <button 
          className={`filter-btn ${filter === 'street' ? 'active' : ''}`}
          onClick={() => setFilter('street')}
        >
          🕷️ Street Heroes
        </button>
        <button 
          className={`filter-btn ${filter === 'soldier' ? 'active' : ''}`}
          onClick={() => setFilter('soldier')}
        >
          🛡️ Soldiers
        </button>
      </motion.div>

      <div className="characters-grid">
        <AnimatePresence mode="wait">
          {filteredCharacters.map((char, idx) => (
            <motion.div
              key={char.id}
              className={`character-card card-${char.category}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => onSelectCharacter(char)}
              onMouseEnter={() => setHoveredId(char.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{ y: -15 }}
            >
              <div className="character-image-container">
                <div className="card-glow" style={{ boxShadow: `0 0 30px ${typeColors[char.category].glow}` }}></div>
                <img src={char.image} alt={char.name} />
                <div className="character-overlay">
                  <motion.div
                    className="overlay-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredId === char.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  >
                    <span className="element-badge" style={{ borderColor: typeColors[char.category].primary, color: typeColors[char.category].primary }}>
                      {char.element}
                    </span>
                    <button className="view-details-btn">
                      VIEW PROFILE
                    </button>
                  </motion.div>
                </div>
              </div>
              <div className="character-info">
                <div className="char-header">
                  <h3>{char.name}</h3>
                  <span className="type-badge" style={{ background: typeColors[char.category].primary, boxShadow: `0 0 10px ${typeColors[char.category].glow}` }}>
                    {char.badge}
                  </span>
                </div>
                <p className="real-name">{char.realName}</p>
                <p className="role-badge">{char.role}</p>
                <p className="character-desc">{char.desc}</p>
                <div className="powers">
                  {char.powers.map((power, i) => (
                    <motion.span 
                      key={i} 
                      className="power-tag"
                      style={{ borderColor: typeColors[char.category].secondary, color: typeColors[char.category].primary }}
                      whileHover={{ scale: 1.1, boxShadow: `0 0 15px ${typeColors[char.category].glow}` }}
                    >
                      {power}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Characters
