import { useState, useEffect } from 'react'
import axios from 'axios'
import './About.css'

function About({ language }) {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fallbackData = {
      id: 1,
      name: 'Leanne Graham',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona'
      }
    }
    
    async function fetchData() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1', {
          timeout: 10000
        })
        setUserData(response.data)
        setLoading(false)
      } catch (err) {
        setUserData(fallbackData)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const texts = {
    ka: {
      title: 'ჩვენ შესახებ',
      loading: 'იტვირთება...',
      name: 'სახელი',
      email: 'ელფოსტა',
      phone: 'ტელეფონი',
      website: 'ვებ-საიტი',
      company: 'კომპანია',
      description: 'ეს გვერდი გვიჩვენებს API-დან მიღებულ მონაცემებს'
    },
    en: {
      title: 'About Us',
      loading: 'Loading...',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      website: 'Website',
      company: 'Company',
      description: 'This page shows data fetched from an API'
    }
  }

  const t = texts[language]

  return (
    <div className="about">
      <div className="about-container">
        <h1 className="about-title">{t.title}</h1>
        <p className="about-description">{t.description}</p>
        
        {loading && <div className="loading">{t.loading}</div>}
        
        {userData && (
          <div className="user-card">
            <h2>{t.name}: {userData.name}</h2>
            <p><strong>{t.email}:</strong> {userData.email}</p>
            <p><strong>{t.phone}:</strong> {userData.phone}</p>
            <p><strong>{t.website}:</strong> {userData.website}</p>
            <p><strong>{t.company}:</strong> {userData.company.name}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default About

