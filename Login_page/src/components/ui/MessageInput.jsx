import { Paperclip, Mic, ArrowUp } from 'lucide-react'

/**
 * MessageInput Component
 * Reusable message input field with icons
 * Follows MVC pattern:
 * - Model: None (stateless component)
 * - View: UI rendering (input field with icons)
 * - Controller: None (stateless component)
 */
const MessageInput = () => (
  <div className="bg-white border-t border-gray-200 py-4 z-20 message-input-container">
    <div className="max-w-3xl mx-auto flex flex-col items-center gap-2 px-2">
      <div className="w-full flex items-center gap-3 border border-gray-200 rounded-full px-3 py-3 shadow-sm bg-white">
        <Paperclip 
          size={18} 
          className="text-gray-500 hover:text-gray-700 cursor-pointer flex-shrink-0" 
        />
        <input
          className="flex-1 border-0 focus:outline-none text-sm text-gray-800 placeholder:text-gray-500 font-semibold bg-transparent"
          placeholder="Message TOAI GPT..."
        />
        <Mic 
          size={18} 
          className="text-gray-500 hover:text-gray-700 cursor-pointer flex-shrink-0" 
        />
        <button
          className="h-10 w-10 rounded-full flex items-center justify-center hover:brightness-110 transition-all flex-shrink-0"
          style={{ backgroundColor: '#1F3FB2' }}
          aria-label="Send message"
        >
          <ArrowUp size={22} color="#FFFFFF" strokeWidth={2.4} />
        </button>
      </div>
      <div className="text-xs text-gray-500 text-center">
        TOAI GPT can make mistakes. Check our Terms &amp; Conditions.
      </div>
    </div>
  </div>
)

export default MessageInput

