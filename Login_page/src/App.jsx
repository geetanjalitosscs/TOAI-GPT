import { useEffect, useState } from 'react'
import LoginModal from './components/LoginModal'
import ChatPage from './components/ChatPage'
import './styles.css'
import './styles/responsive.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [showChat, setShowChat] = useState(false)

  // Simple route handling: show chat page on /app
  useEffect(() => {
    if (window.location.pathname === '/app') {
      setShowChat(true)
      setIsModalOpen(false)
    }
  }, [])

  if (showChat) {
    return <ChatPage />
  }

  return (
    <div className="app-container">
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
        onSuccessRedirect={() => {
          window.location.href = '/app'
        }}
      />
    </div>
  )
}

export default App

