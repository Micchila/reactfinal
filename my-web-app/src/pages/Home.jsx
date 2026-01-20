import { useState, useEffect } from 'react'
import './Home.css'

function Home({ language }) {
  const [counter, setCounter] = useState(() => {
    return parseInt(sessionStorage.getItem('counter') || '0')
  })

  useEffect(() => {
    sessionStorage.setItem('counter', counter.toString())
  }, [counter])

  const texts = {
    ka: {
      title: 'მოგესალმებათ',
      subtitle: 'ეს არის მთავარი გვერდი',
      description: 'ეს არის რეაქტით შექმნილი ვებ-აპლიკაცია',
      counter: 'თვლა',
      increment: 'დაამატე',
      decrement: 'გამოაკელი'
    },
    en: {
      title: 'Welcome',
      subtitle: 'This is the home page',
      description: 'This is a web application created with React',
      counter: 'Counter',
      increment: 'Increment',
      decrement: 'Decrement'
    }
  }

  const t = texts[language]

  return (
    <div className="home">
      <div className="home-container">
        <h1 className="home-title">{t.title}</h1>
        <h2 className="home-subtitle">{t.subtitle}</h2>
        <p className="home-description">{t.description}</p>
        
        <div className="counter-section">
          <h3>{t.counter}: {counter}</h3>
          <div className="counter-buttons">
            <button 
              className="counter-btn"
              onClick={() => setCounter(prev => prev + 1)}
            >
              {t.increment}
            </button>
            <button 
              className="counter-btn"
              onClick={() => setCounter(prev => prev - 1)}
            >
              {t.decrement}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

