import { useState } from 'react'
import Sidebar from './layout/Sidebar'
import Header from './layout/Header'
import ChatArea from './layout/ChatArea'
import MessageInput from './ui/MessageInput'
import './ChatPage.css'

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

  return (
    <div className="flex h-screen bg-white font-sans text-gray-800 overflow-hidden chat-page-container">
      {/* View: Layout Components */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col relative min-w-0 overflow-hidden">
        <Header showAppMenu={showAppMenu} setShowAppMenu={setShowAppMenu} />
        <ChatArea showAppMenu={showAppMenu} />
        <MessageInput />
      </main>
    </div>
  )
}

export default ChatPage
