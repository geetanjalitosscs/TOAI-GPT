import { ChevronDown, LayoutGrid } from 'lucide-react'
import { GridIcon } from '../icons/BrandIcons'
import HeaderIcons from '../ui/HeaderIcons'

/**
 * Header Component
 * Top header bar with title, icons, and profile
 * @param {boolean} showAppMenu - Whether app menu is visible
 * @param {function} setShowAppMenu - Function to toggle app menu
 */
const Header = ({ showAppMenu, setShowAppMenu }) => {
  return (
    <header className="h-16 border-b border-gray-100 flex items-center justify-between px-4 md:px-8 bg-white z-10 flex-shrink-0">
      <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-2 py-1 rounded-md">
        <span className="font-semibold text-gray-700 text-sm md:text-base">TOAI GPT 7.0</span>
        <ChevronDown size={18} className="text-gray-500" />
      </div>

      {/* Center icons row - hidden on mobile */}
      <div className="hidden md:block">
        <HeaderIcons />
      </div>

      {/* App Switcher & Profile */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowAppMenu(!showAppMenu)}
          className={`p-2 rounded-full hover:bg-gray-100 transition-colors ${showAppMenu ? 'bg-gray-100' : ''}`}
          aria-label="Toggle app menu"
        >
          <GridIcon size={20} />
        </button>
        <div className="h-8 w-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
          M
        </div>
      </div>
    </header>
  )
}

export default Header

