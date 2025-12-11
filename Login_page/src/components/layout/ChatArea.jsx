import { Heart, Scale, Users, Handshake } from 'lucide-react'
import AppMenuItem from '../ui/AppMenuItem'
import { HeartWithPlus } from '../icons/BrandIcons'

/**
 * ChatArea Component
 * Main chat content area
 * @param {boolean} showAppMenu - Whether app menu is visible
 */
const ChatArea = ({ showAppMenu }) => {
  const appMenuItems = [
    { icon: <HeartWithPlus size={24} />, label: 'Health' },
    { icon: <Scale className="text-blue-500" size={24} />, label: 'Legal' },
    { icon: <Users className="text-purple-500" size={24} />, label: 'HRMS' },
    { icon: <Handshake className="text-green-500" size={24} />, label: 'Vendor Negotiation' },
  ]

  return (
    <div className="flex-1 overflow-y-auto px-4 md:px-16 py-8 relative chat-area">
      {/* Floating App Menu */}
      {showAppMenu && (
        <div className="absolute top-4 right-4 md:right-8 bg-white shadow-xl border border-gray-100 rounded-xl p-6 w-80 z-50 grid grid-cols-3 gap-6 animate-in fade-in zoom-in-95 duration-200 app-menu-overlay">
          {appMenuItems.map((item, index) => (
            <AppMenuItem key={index} icon={item.icon} label={item.label} />
          ))}
        </div>
      )}

      {/* Chat Content */}
      <div className="max-w-3xl mx-auto space-y-8 pb-32">
        {/* AI Previous Context */}
        <div className="text-gray-800 leading-relaxed">
          <p className="mb-4">
            Sheep are rare, real animals that people own as status symbols. Owning one is seen as a sign of empathy
            and a connection to the natural world.
          </p>
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              The book never definitively answers the question of whether androids dream or not. It explores the
              nature of reality, consciousness, and what it means to be human.
            </li>
            <li>
              The book inspired the movie Blade Runner, though there are some key differences in plot.
            </li>
          </ol>
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="bg-blue-50 text-gray-800 px-5 py-3 rounded-lg max-w-xl">
            do androids truly dream of electric sheeps or not?
          </div>
        </div>

        {/* AI Response */}
        <div className="text-gray-800 leading-relaxed">
          <p className="mb-4">
            The question of whether androids dream of electric sheep is the title and central theme of the science
            fiction novel <em>Do Androids Dream of Electric Sheep?</em> by Philip K. Dick.
          </p>

          <ol className="list-decimal pl-5 space-y-4">
            <li>
              The book explores a world where androids are indistinguishable from humans except for a lack of
              empathy. The story follows Rick Deckard, a bounty hunter who tracks down rogue androids.
            </li>
            <li>
              The title refers to the empathy test used to distinguish between humans and androids. The test involves
              administering a fictional scenario and evaluating the subject's emotional response. Electric sheep are
              rare, real animals that people own as status symbols. Owning one is seen as a sign of empathy and a
              connection to the natural world.
            </li>
            <li>
              The book never definitively answers the question of whether androids dream or not. It explores the
              nature of reality, consciousness, and what it means to be human.
            </li>
            <li>
              The book inspired the movie Blade Runner, though there are some key differences in plot.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ChatArea

