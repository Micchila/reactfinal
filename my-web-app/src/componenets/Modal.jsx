import { useEffect } from 'react'
import './Modal.css'

function Modal({ onClose, theme, language }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [onClose])

  const texts = {
    ka: {
      title: 'ინფორმაცია',
      content: 'ეს არის მოდალური ფანჯარა. თქვენ შეგიძლიათ დაახუროთ იგი ESC ღილაკით ან გარე ადგილზე დაწკაპუნებით.',
      close: 'დახურვა'
    },
    en: {
      title: 'Information',
      content: 'This is a modal window. You can close it by pressing ESC or clicking outside.',
      close: 'Close'
    }
  }

  const t = texts[language]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-content ${theme}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>{t.title}</h2>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <p>{t.content}</p>
        </div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            {t.close}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal

