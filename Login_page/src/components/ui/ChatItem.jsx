import { Pencil, Trash2, MoreHorizontal } from 'lucide-react'

/**
 * ChatItem Component
 * Reusable chat history item
 * @param {string} label - Chat title
 * @param {string} time - Time ago string
 * @param {boolean} active - Whether chat is active
 */
const ChatItem = ({ label, time, active = false }) => (
  <div
    className={`group flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-colors ${
      active ? 'bg-blue-50' : 'hover:bg-gray-100'
    }`}
  >
    <div className="flex-1 min-w-0">
      <p className={`text-sm truncate ${active ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
        {label}
      </p>
      {time && <p className="text-xs text-gray-400 mt-0.5">{time}</p>}
    </div>
    {active && (
      <div className="flex items-center gap-2 pl-2">
        <Pencil size={14} className="text-gray-400 hover:text-blue-600 cursor-pointer" />
        <Trash2 size={14} className="text-gray-400 hover:text-red-500 cursor-pointer" />
        <MoreHorizontal size={14} className="text-gray-400 cursor-pointer" />
      </div>
    )}
  </div>
)

export default ChatItem

