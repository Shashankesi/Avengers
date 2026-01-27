import React, { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import './Movies.css'

const Movies = () => {
  const [selectedMovie, setSelectedMovie] = useState(null)

  const movies = [
    {
      id: 1,
      title: 'The Avengers',
      year: 2012,
      image: './images/The Avengers.webp',
      rating: '⭐ 8.0/10',
      duration: '2h 23m',
      description: 'Earth\'s mightiest heroes must come together and learn to fight as a team to save the world from an alien invasion.',
      plot: 'When an alien military unit led by Thor\'s adoptive brother Loki invades Earth, Nick Fury assembles a team of exceptional talents. Iron Man, Captain America, Thor, Hulk, Black Widow, and Hawkeye must overcome their differences and work as one to save humanity.'
    },
    {
      id: 2,
      title: 'Avengers: Age of Ultron',
      year: 2015,
      image: './images/Avengers Age of Ultron.webp',
      rating: '⭐ 7.3/10',
      duration: '2h 21m',
      description: 'When an artificial intelligence emerges, the team faces their greatest threat yet.',
      plot: 'After a mission goes wrong, Tony Stark\'s attempt to create a peacekeeping artificial intelligence, Ultron, becomes sentient and turns against humanity. The Avengers must prevent Ultron from destroying the world.'
    },
    {
      id: 3,
      title: 'Captain America: Civil War',
      year: 2016,
      image: './images/Captain America Civil War.jpg',
      rating: '⭐ 7.8/10',
      duration: '2h 27m',
      description: 'Political pressure mounts to install a system of accountability for the team, causing a devastating rift.',
      plot: 'Tensions between team members escalate when the government demands accountability. Captain America and Iron Man lead opposing sides, splitting the Avengers and testing their loyalties.'
    },
    {
      id: 4,
      title: 'Avengers: Infinity War',
      year: 2018,
      image: './images/Avengers Infinity War.webp',
      rating: '⭐ 8.4/10',
      duration: '2h 29m',
      description: 'The Avengers face their ultimate challenge as Thanos arrives to collect the Infinity Stones.',
      plot: 'The mad titan Thanos seeks to collect all six Infinity Stones to wipe out half of all life in the universe. The Avengers are split across the galaxy in a desperate attempt to stop him.'
    },
    {
      id: 5,
      title: 'Avengers: Endgame',
      year: 2019,
      image: './images/Avengers Endgame.webp',
      rating: '⭐ 8.4/10',
      duration: '3h 1m',
      description: 'After the devastating events of Infinity War, the remaining Avengers must find a way to reverse Thanos\' actions.',
      plot: 'With half of all life eliminated, the surviving Avengers discover a way to travel through time. They embark on a dangerous mission to collect the Infinity Stones from the past to undo Thanos\' snap.'
    },
  ]

  return (
    <section className="movies">
      <Motion.div
        className="movies-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Avengers Movies</h2>
        <p>Explore the complete story in chronological order</p>
      </Motion.div>

      <div className="movies-container">
        <div className="movies-timeline">
          {movies.map((movie, idx) => (
            <Motion.div
              key={movie.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="timeline-marker" />
              <Motion.div
                className="movie-card"
                onClick={() => setSelectedMovie(movie)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="movie-image">
                  <img src={movie.image} alt={movie.title} />
                </div>
                <div className="movie-info">
                  <h3>{movie.title}</h3>
                  <p className="year">{movie.year}</p>
                  <p className="rating">{movie.rating}</p>
                  <p className="duration">⏱️ {movie.duration}</p>
                  <p className="description">{movie.description}</p>
                  <button className="details-btn">View Details</button>
                </div>
              </Motion.div>
            </Motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedMovie && (
            <Motion.div
              className="movie-detail-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMovie(null)}
            >
              <Motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-btn" onClick={() => setSelectedMovie(null)}>✕</button>
                <div className="modal-body">
                  <img src={selectedMovie.image} alt={selectedMovie.title} />
                  <div className="modal-text">
                    <h2>{selectedMovie.title}</h2>
                    <p className="modal-year">{selectedMovie.year}</p>
                    <p className="modal-rating">{selectedMovie.rating}</p>
                    <p className="modal-duration">⏱️ {selectedMovie.duration}</p>
                    <h4>Plot</h4>
                    <p className="plot">{selectedMovie.plot}</p>
                    <Motion.button
                      className="watch-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Watch Now
                    </Motion.button>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Movies
