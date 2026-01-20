import { useState, useEffect } from 'react'
import axios from 'axios'
import './Posts.css'

function Posts({ language }) {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fallbackPosts = [
      {
        id: 1,
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        id: 2,
        title: 'qui est esse',
        body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      },
      {
        id: 3,
        title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
        body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
      },
      {
        id: 4,
        title: 'eum et est occaecati',
        body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit'
      },
      {
        id: 5,
        title: 'nesciunt quas odio',
        body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque'
      },
      {
        id: 6,
        title: 'dolorem eum magni eos aperiam quia',
        body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae'
      }
    ]
    
    async function fetchPosts() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=6', {
          timeout: 10000
        })
        setPosts(response.data)
        setLoading(false)
      } catch (err) {
        setPosts(fallbackPosts)
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const texts = {
    ka: {
      title: 'პოსტები',
      loading: 'იტვირთება...',
      readMore: 'მეტი'
    },
    en: {
      title: 'Posts',
      loading: 'Loading...',
      readMore: 'Read More'
    }
  }

  const t = texts[language]

  return (
    <div className="posts">
      <div className="posts-container">
        <h1 className="posts-title">{t.title}</h1>
        
        {loading && <div className="loading">{t.loading}</div>}
        
        <div className="posts-grid">
          {posts.map((post) => (
            <div key={post.id} className="post-card">
              <h2 className="post-title">{post.title}</h2>
              <p className="post-body">{post.body}</p>
              <button className="post-button">{t.readMore}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Posts

