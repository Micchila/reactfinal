import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import Modal from './Modal'
import './Navbar.css'

function Navbar({ theme, language, toggleTheme, toggleLanguage }) {
  const location = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const texts = {
    ka: {
      home: 'მთავარი',
      about: 'ჩვენ შესახებ',
      posts: 'პოსტები',
      theme: 'თემა',
      language: 'ენა'
    },
    en: {
      home: 'Home',
      about: 'About',
      posts: 'Posts',
      theme: 'Theme',
      language: 'Language'
    }
  }

  const t = texts[language]

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className={`navbar ${theme}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          {language === 'ka' ? 'ვებ-საიტი' : 'WebSite'}
        </Link>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.home}
          </Link>
          <Link 
            to="/about" 
            className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.about}
          </Link>
          <Link 
            to="/posts" 
            className={`nav-link ${isActive('/posts') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            {t.posts}
          </Link>
          <button 
            className="nav-button"
            onClick={() => setShowModal(true)}
          >
            {language === 'ka' ? 'ინფორმაცია' : 'Info'}
          </button>
        </div>

        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <button className="language-toggle" onClick={toggleLanguage}>
            {language === 'ka' ? 'EN' : 'KA'}
          </button>
          <div 
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {showModal && (
        <Modal 
          onClose={() => setShowModal(false)} 
          theme={theme}
          language={language}
        />
      )}
    </nav>
  )
}

export default Navbar

