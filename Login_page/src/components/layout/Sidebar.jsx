import { MoreHorizontal, Palette, Tent, ChefHat, Sparkles } from 'lucide-react'
import SidebarItem from '../ui/SidebarItem'
import ChatItem from '../ui/ChatItem'

/**
 * Sidebar Component
 * Left sidebar with navigation and chat history
 * Follows MVC pattern:
 * - Model: Data (knowledgeBaseItems, recentChats)
 * - View: UI rendering
 * - Controller: Props (activeTab, setActiveTab, isOpen, onClose)
 * @param {string} activeTab - Currently active tab
 * @param {function} setActiveTab - Function to set active tab
 * @param {boolean} isOpen - Whether sidebar is open (for mobile)
 * @param {function} onClose - Function to close sidebar (for mobile)
 */
const Sidebar = ({ activeTab, setActiveTab, isOpen = false, onClose }) => {
  // Model: Data
  const knowledgeBaseItems = [
    { icon: <Palette size={18} />, label: 'Designer' },
    { icon: <Tent size={18} />, label: 'Vacation Planner' },
    { icon: <ChefHat size={18} />, label: 'Cooking Assistant' },
  ]

  const recentChats = [
    { label: 'Give the Negotiation Strategy', time: '2m ago' },
    { label: 'Which Vendor this month has', time: '', active: true },
    { label: "What is the Mumbai's Members...", time: '2m ago' },
    { label: "What is the Delhi's Membership...", time: '2m ago' },
    { label: "What is the Mumbai's Members...", time: '2m ago' },
    { label: 'What if Blue Services Give 5% O...', time: '2m ago' },
    { label: "Can you tell me December's best", time: '2m ago' },
    { label: "Can you tell me December's best", time: '2m ago' },
  ]

  // Controller: Handle item click (close sidebar on mobile)
  const handleItemClick = (callback) => {
    if (callback) callback()
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768 && onClose) {
      onClose()
    }
  }

  // View: UI rendering
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={`w-72 bg-gray-50 flex flex-col border-r border-gray-200 flex-shrink-0 sidebar ${
          isOpen ? 'open' : ''
        }`}
      >
      {/* Logo Area */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-black tracking-tight">TOAI</h1>
      </div>

      {/* Knowledge Base Section */}
      <div className="px-4 mb-6">
        <div className="flex justify-between items-center mb-2 px-2">
          <h2 className="text-sm font-semibold text-gray-900">Knowledge Base</h2>
          <MoreHorizontal size={16} className="text-gray-400 cursor-pointer" />
        </div>

        <ul className="space-y-1">
          {knowledgeBaseItems.map((item, index) => (
            <SidebarItem
              key={index}
              icon={item.icon}
              label={item.label}
              active={activeTab === item.label}
              onClick={() => handleItemClick(() => setActiveTab(item.label))}
            />
          ))}
        </ul>
      </div>

      {/* Recent Chats Section */}
      <div className="flex-1 overflow-y-auto px-4">
        <h2 className="text-sm font-semibold text-gray-900 mb-2 px-2">Recent Chats</h2>
        <div className="space-y-1">
          {recentChats.map((chat, index) => (
            <ChatItem
              key={index}
              label={chat.label}
              time={chat.time}
              active={chat.active}
            />
          ))}
        </div>
      </div>

      {/* Upgrade Plan */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div
            className="h-9 w-9 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: '#f1e8ff', color: '#6B6CFF' }}
          >
            <Sparkles size={18} />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Upgrade Plan</div>
            <div className="text-xs text-gray-500">Get GPT-8 and more</div>
          </div>
        </div>
      </div>
    </aside>
    </>
  )
}

export default Sidebar

