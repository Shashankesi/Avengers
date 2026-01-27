
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import LoadingScreen from './components/LoadingScreenSimple'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Characters from './components/Characters'
import Movies from './components/Movies'
import Comics from './components/Comics'
import CharacterDetail from './components/CharacterDetail'
import Footer from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedCharacter, setSelectedCharacter] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  const handleNavigate = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character)
    setCurrentPage('character-detail')
  }

  const handleBack = () => {
    setSelectedCharacter(null)
    setCurrentPage('characters')
  }

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      {!isLoading && (
        <>
          <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
          <AnimatePresence mode="wait">
            {currentPage === 'home' && <Hero key="home" onNavigate={handleNavigate} />}
            {currentPage === 'characters' && <Characters key="characters" onSelectCharacter={handleSelectCharacter} />}
            {currentPage === 'movies' && <Movies key="movies" />}
            {currentPage === 'comics' && <Comics key="comics" />}
            {currentPage === 'character-detail' && selectedCharacter && (
              <CharacterDetail key={`detail-${selectedCharacter.id}`} character={selectedCharacter} onBack={handleBack} />
            )}
          </AnimatePresence>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
