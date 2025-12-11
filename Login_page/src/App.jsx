import { useEffect, useState } from 'react'
import LoginModal from './components/LoginModal'
import ChatPage from './components/ChatPage'
import './styles.css'
import './styles/responsive.css'

/**
 * App Component
 * Root application component
 * Follows MVC pattern:
 * - Model: State management (isModalOpen, showChat)
 * - View: Conditional rendering (LoginModal or ChatPage)
 * - Controller: Route handling and state updates
 */
function App() {
  // Model: State management
  const [isModalOpen, setIsModalOpen] = useState(true)
  const [showChat, setShowChat] = useState(false)

  // Controller: Route handling
  useEffect(() => {
    if (window.location.pathname === '/app') {
      setShowChat(true)
      setIsModalOpen(false)
    } else {
      // Reset to login page if not on /app route
      setShowChat(false)
      setIsModalOpen(true)
    }
  }, [])

  // View: Conditional rendering
  if (showChat) {
    return <ChatPage />
  }

  return (
    <div className="app-container">
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => {
          // Prevent closing without login - modal should stay open
          // Only allow closing after successful authentication
        }}
        onSuccessRedirect={() => {
          window.location.href = '/app'
        }}
      />
    </div>
  )
}

export default App

