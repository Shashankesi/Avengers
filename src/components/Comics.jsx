import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import './Comics.css'

const Comics = () => {
  const [hoveredCard, setHoveredCard] = useState(null)

  const comics = [
    {
      id: 1,
      title: 'The Avengers',
      series: 'Classic',
      image: './images/a1.png',
      description: 'The original team that started it all',
      year: 'Since 1963'
    },
    {
      id: 2,
      title: 'Mighty Avengers',
      series: 'Modern Era',
      image: './images/a2.png',
      description: 'The strongest heroes defending Earth',
      year: '2013-Present'
    },
    {
      id: 3,
      title: 'Young Avengers',
      series: 'New Generation',
      image: './images/a3.png',
      description: 'The next generation of heroes',
      year: '2005-Present'
    },
    {
      id: 4,
      title: 'Avengers Forever',
      series: 'Multiverse',
      image: './images/a4.png',
      description: 'Heroes across all dimensions unite',
      year: '2021-Present'
    },
  ]

  return (
    <section className="comics">
      <Motion.div
        className="comics-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Avengers Comics</h2>
        <p>Decades of incredible stories and adventures</p>
      </Motion.div>

      <div className="comics-container">
        <div className="comics-grid">
          {comics.map((comic, idx) => (
            <Motion.div
              key={comic.id}
              className="comic-card"
              onMouseEnter={() => setHoveredCard(comic.id)}
              onMouseLeave={() => setHoveredCard(null)}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="comic-image-wrapper">
                <img src={comic.image} alt={comic.title} />
                <div className="comic-overlay">
                  <Motion.div
                    className="comic-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={hoveredCard === comic.id ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>{comic.title}</h3>
                    <p className="series">{comic.series}</p>
                    <p className="year">{comic.year}</p>
                    <p className="description">{comic.description}</p>
                  </Motion.div>
                </div>
              </div>
            </Motion.div>
          ))}
        </div>

        <Motion.div
          className="comics-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Explore All Comics</h3>
          <p>Discover the complete collection of Avengers comics spanning decades of Marvel history</p>
          <a 
            href="https://www.marvel.com/teams-and-groups/avengers/in-comics"
            target="_blank"
            rel="noopener noreferrer"
            className="marvel-link"
          >
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read on Marvel.com
            </Motion.button>
          </a>
        </Motion.div>
      </div>
    </section>
  )
}

export default Comics
