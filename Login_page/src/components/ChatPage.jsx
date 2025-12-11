import { useState } from 'react'
import Sidebar from './layout/Sidebar'
import Header from './layout/Header'
import ChatArea from './layout/ChatArea'
import MessageInput from './ui/MessageInput'

/**
 * ChatPage Component
 * Main chat interface page
 * Follows MVC pattern:
 * - Model: State management (useState)
 * - View: Layout components (Sidebar, Header, ChatArea, MessageInput)
 * - Controller: Event handlers and state updates
 */
const ChatPage = () => {
  // Model: State management
  const [activeTab, setActiveTab] = useState('Vacation Planner')
  const [showAppMenu, setShowAppMenu] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Controller: Event handlers
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const handleCloseSidebar = () => {
    setSidebarOpen(false)
  }

  // View: UI rendering
  return (
    <div className="flex h-screen bg-white font-sans text-gray-800 overflow-hidden chat-page-container">
      {/* View: Layout Components */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        onClose={handleCloseSidebar}
      />
      
      <main className="flex-1 flex flex-col relative min-w-0 overflow-hidden">
        <Header
          showAppMenu={showAppMenu}
          setShowAppMenu={setShowAppMenu}
          onToggleSidebar={handleToggleSidebar}
        />
        <ChatArea showAppMenu={showAppMenu} />
        <MessageInput />
      </main>
    </div>
  )
}

export default ChatPage
