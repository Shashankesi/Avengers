import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const slides = [
  {
    title: 'IRON MAN',
    desc: `A visionary mind wrapped in cutting-edge armor. Powered by intellect, not superpowers. Tony Stark builds solutions where others see limits. Innovation, sacrifice, and responsibility define him. A hero forged by choice, not destiny.`,
    bg: 'linear-gradient(135deg, #1a0000, #3b0a0a, #090000)',
    image: './images/a1.png',
    offsetX: 0,            
  },
  {
    title: 'THOR',
    desc: `Born a god, tempered by humility. Wielder of Mjolnir and protector of realms. Strength guided by honor and loyalty. Thunder follows his command. A warrior learning what it truly means to be worthy.`,
    bg: 'linear-gradient(135deg, #020a18, #071d3a, #010409)',
    image: './images/a2.png',
    offsetX: 60,             
  },
  {
    title: 'SPIDER MAN',
    desc: `A friendly neighborhood hero with a heavy heart. Gifted with power, bound by responsibility. Balances courage, doubt, and sacrifice. Every fall teaches resilience. Proof that even ordinary lives can become extraordinary.`,
    bg: 'linear-gradient(135deg, #050505, #1a0000, #020b14)',
    image: './images/a3.png',
    offsetX: 210,            
  },
  {
    title: 'CAPTAIN AMERICA',
    desc: `A symbol of hope in the face of chaos. Strength rooted in unwavering morals. Leads not by force, but by example. Loyal to truth, justice, and humanity. A soldier who never stops standing for what's right.`,
    bg: 'linear-gradient(135deg, #020f08, #06301a, #010805)',
    image: './images/a4.png',
    offsetX: 250,
  },
  {
    title: 'BLACK PANTHER',
    desc: `King of Wakanda and guardian of the world's most advanced nation. Combines ancient tradition with cutting-edge technology. A fierce protector of his people and a brilliant strategist in any conflict.`,
    bg: 'linear-gradient(135deg, #0a0a0a, #1a1a1a, #0f0f0f)',
    image: './images/Black Panther.jpg',
    offsetX: 180,
  },
  {
    title: 'CAPTAIN MARVEL',
    desc: `Cosmic warrior with incredible power and the ability to traverse the universe. Fearless, determined, and committed to protecting all of humanity. One of the most powerful beings in existence.`,
    bg: 'linear-gradient(135deg, #1a0f2e, #2d1b4e, #0d0511)',
    image: './images/Captain Marvel.jpg',
    offsetX: 150,
  },
  {
    title: 'LOKI',
    desc: `The God of Mischief embracing his complexity. From villain to anti-hero, Loki navigates the multiverse with cunning and charm. A master of magic and deception with hidden depths.`,
    bg: 'linear-gradient(135deg, #0d1b2a, #1a2f3f, #0a0f14)',
    image: './images/loki.jpg',
    offsetX: 220,
  },
  {
    title: 'HAWKEYE',
    desc: `An expert marksman with precision and determination. Armed with advanced technology and unwavering focus, Hawkeye proves that skill and tactics can match superhuman abilities.`,
    bg: 'linear-gradient(135deg, #1a1a0a, #2d2d0f, #0f0f05)',
    image: './images/Hawkeye.jpg',
    offsetX: 200,
  },
  {
    title: 'THANOS',
    desc: `The Mad Titan seeking balance through cosmic power. Wielding the Infinity Stones, Thanos poses the ultimate threat to all existence. A villain of unmatched ambition and strength.`,
    bg: 'linear-gradient(135deg, #2d0a0a, #4a1515, #1a0505)',
    image: './images/thanos.jpg',
    offsetX: 280,
  },
  {
    title: 'VISION',
    desc: `An artificial being with genuine humanity. Created by both science and magic, Vision grapples with existence itself while fighting alongside the Avengers with incredible power.`,
    bg: 'linear-gradient(135deg, #0a1a2d, #152d4a, #05101a)',
    image: './images/Vision.jpg',
    offsetX: 240,
  },
  {
    title: 'SCARLET WITCH',
    desc: `Wielder of chaos magic with reality-bending powers. Wanda's abilities continue to grow as she masters her extraordinary potential. A force of nature with incredible depth.`,
    bg: 'linear-gradient(135deg, #2d0a1a, #4a1533, #1a0510)',
    image: './images/wanda.jpg',
    offsetX: 210,
  },
  {
    title: 'BLACK WIDOW',
    desc: `Master assassin turned superhero. Natasha's skills in espionage and combat make her invaluable to the team. Proving that intelligence and training are unmatched weapons.`,
    bg: 'linear-gradient(135deg, #0a0a1a, #15152d, #050510)',
    image: './images/Black Widow.jpg',
    offsetX: 190,
  },
]

const Hero = ({ onNavigate }) => {
  const [index, setIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return
    
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % slides.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setIndex(prev => (prev + 1) % slides.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setIndex(prev => (prev - 1 + slides.length) % slides.length)
    setAutoPlay(false)
  }

  const handleExplore = () => {
    onNavigate('characters')
  }

  return (
    <section className="hero" style={{ background: slides[index].bg }}>
      <div className="hero-glow" />

      <div className="main-slide">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].title}
            className="hero-text"
            initial={{ y: 40, opacity: 0 }}   
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.h1
              initial={{ letterSpacing: '0.05em', opacity: 0 }}
              animate={{ letterSpacing: '0.02em', opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {slides[index].title}
            </motion.h1>
            <p>{slides[index].desc}</p>
            <motion.button 
              className="explore-btn" 
              onClick={handleExplore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore All Heroes
            </motion.button>
          </motion.div>
        </AnimatePresence>

        <div className={`hero-image ${index === slides.length - 1 ? 'center-image' : ''}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={slides[index].image}
              layoutId={slides[index].image}
              layout="position"
              src={slides[index].image}
              alt={slides[index].title}
              initial={{
                opacity: 0,
                x: 120 + (slides[index].offsetX || 0),
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                x: slides[index].offsetX || 0,   
                scale: 1,
              }}
              exit={{
                scale: 0.35,
                opacity: 1,
                transformOrigin: 'right center',
              }}
              transition={{
                layout: {
                  duration: 0.85,
                  ease: [0.22, 1, 0.36, 1],
                },
                x: {
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
                scale: {
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="hero-controls">
        <motion.button 
          className={`arrow left`} 
          onClick={prev}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          ‹
        </motion.button>
        
        <div className="slide-indicators">
          {slides.map((_, i) => (
            <motion.div 
              key={i} 
              className={`indicator ${i === index ? 'active' : ''}`}
              onClick={() => {
                setIndex(i)
                setAutoPlay(false)
              }}
              whileHover={{ scale: 1.2 }}
              animate={i === index ? { scale: 1.3 } : { scale: 1 }}
            />
          ))}
        </div>
        
        <motion.button 
          className={`arrow right`}
          onClick={next}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
        >
          ›
        </motion.button>
      </div>

      <motion.div 
        className="slide-counter"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
      </motion.div>
    </section>
  )
}

export default Hero
