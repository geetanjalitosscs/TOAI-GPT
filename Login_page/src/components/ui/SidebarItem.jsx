/**
 * SidebarItem Component
 * Reusable sidebar navigation item
 * @param {ReactNode} icon - Icon element
 * @param {string} label - Item label
 * @param {boolean} active - Whether item is active
 * @param {function} onClick - Click handler
 */
const SidebarItem = ({ icon, label, active = false, onClick }) => (
  <li
    onClick={onClick}
    className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer group transition-colors ${
      active ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    <span className={`${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-600'}`}>
      {icon}
    </span>
    <span className="text-sm truncate">{label}</span>
  </li>
)

export default SidebarItem

