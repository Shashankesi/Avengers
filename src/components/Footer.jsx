import React from 'react'
import { motion as Motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { title: 'Marvel Studios', icon: '🎬' },
    { title: 'Character Database', icon: '📚' },
    { title: 'Comic Series', icon: '📖' },
    { title: 'Official MCU Timeline', icon: '⏰' },
  ]

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', url: '#' },
    { name: 'Instagram', icon: '📷', url: '#' },
    { name: 'Facebook', icon: 'f', url: '#' },
    { name: 'YouTube', icon: '▶️', url: '#' },
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <Motion.div
          className="footer-section logo-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <img src="./images/logo.png" alt="Avengers Logo" />
          </div>
          <p className="footer-tagline">Assembling Earth's Mightiest Heroes</p>
          <p className="footer-description">
            Explore the Marvel Cinematic Universe, discover legendary heroes, and dive into epic storylines that shaped a generation.
          </p>
        </Motion.div>

        <Motion.div
          className="footer-section links-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h4>Quick Links</h4>
          <div className="footer-links">
            {footerLinks.map((link, idx) => (
              <Motion.a
                key={idx}
                href="#"
                className="footer-link"
                whileHover={{ x: 5, color: '#e63946' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className="link-icon">{link.icon}</span>
                {link.title}
              </Motion.a>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          className="footer-section social-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4>Follow Us</h4>
          <div className="social-links">
            {socialLinks.map((social, idx) => (
              <Motion.a
                key={idx}
                href={social.url}
                className="social-icon"
                whileHover={{
                  scale: 1.3,
                  rotate: 360,
                  boxShadow: '0 0 20px rgba(196, 30, 58, 0.8)',
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {social.icon}
              </Motion.a>
            ))}
          </div>
        </Motion.div>

        <Motion.div
          className="footer-section stats-section"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h4>By The Numbers</h4>
          <div className="stats">
            <div className="stat">
              <h5>12</h5>
              <p>Heroes</p>
            </div>
            <div className="stat">
              <h5>5</h5>
              <p>Movies</p>
            </div>
            <div className="stat">
              <h5>∞</h5>
              <p>Adventures</p>
            </div>
          </div>
        </Motion.div>
      </div>

      <div className="footer-divider" />

      <Motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <p className="copyright">
          &copy; {currentYear} Avengers Universe. All rights reserved. | Powered by Marvel Studios
        </p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span className="separator">•</span>
          <a href="#">Terms of Service</a>
          <span className="separator">•</span>
          <a href="#">Contact Us</a>
        </div>
      </Motion.div>

      <div className="footer-accent" />
    </footer>
  )
}

export default Footer
