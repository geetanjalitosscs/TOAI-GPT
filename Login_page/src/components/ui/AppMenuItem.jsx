/**
 * AppMenuItem Component
 * Reusable app menu item for app switcher
 * @param {ReactNode} icon - Icon element
 * @param {string} label - Item label
 */
const AppMenuItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-2 cursor-pointer group">
    <div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
      {icon}
    </div>
    <span className="text-xs font-medium text-gray-600 text-center leading-tight">{label}</span>
  </div>
)

export default AppMenuItem

