import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Posts from './pages/Posts'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'ka'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ka' ? 'en' : 'ka')
  }

  return (
    <Router>
      <div className={`app ${theme}`}>
        <Navbar 
          theme={theme} 
          language={language}
          toggleTheme={toggleTheme}
          toggleLanguage={toggleLanguage}
        />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
          <Route path="/posts" element={<Posts language={language} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

