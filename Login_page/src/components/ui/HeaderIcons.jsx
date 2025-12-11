import { Mail } from 'lucide-react'
import { WhatsAppIcon, GoogleDriveIcon, OracleIcon, SQLDolphinIcon } from '../icons/BrandIcons'

/**
 * HeaderIcons Component
 * Reusable header icons row with indicator dots
 */
const HeaderIcons = () => {
  const iconSize = 20
  const iconStyle = { 
    width: `${iconSize}px`, 
    height: `${iconSize}px`, 
    flexShrink: 0, 
    minWidth: `${iconSize}px`, 
    minHeight: `${iconSize}px` 
  }
  const containerStyle = { 
    width: `${iconSize}px`, 
    height: `${iconSize}px`, 
    flexShrink: 0, 
    minWidth: `${iconSize}px`, 
    minHeight: `${iconSize}px` 
  }
  const dotStyle = { 
    transform: 'translate(25%, -25%)', 
    flexShrink: 0, 
    minWidth: '6px', 
    minHeight: '6px' 
  }

  return (
    <div className="flex items-center gap-4" style={{ flexShrink: 0 }}>
      <div className="relative" style={containerStyle}>
        <WhatsAppIcon 
          size={iconSize} 
          className="text-green-500 hover:text-green-600 cursor-pointer" 
          style={iconStyle} 
        />
        <div 
          className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-green-400" 
          style={dotStyle}
        />
      </div>
      <div className="relative" style={containerStyle}>
        <Mail 
          size={iconSize} 
          className="text-gray-500 hover:text-gray-700 cursor-pointer" 
          style={iconStyle} 
        />
        <div 
          className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-gray-400" 
          style={dotStyle}
        />
      </div>
      <div className="relative" style={containerStyle}>
        <GoogleDriveIcon 
          size={iconSize} 
          className="text-green-500 hover:text-green-600 cursor-pointer" 
          style={iconStyle} 
        />
        <div 
          className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-green-400" 
          style={dotStyle}
        />
      </div>
      <div className="relative" style={containerStyle}>
        <OracleIcon 
          size={iconSize} 
          className="text-gray-500 hover:text-gray-700 cursor-pointer" 
          style={iconStyle} 
        />
        <div 
          className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-gray-400" 
          style={dotStyle}
        />
      </div>
      <div className="relative" style={containerStyle}>
        <SQLDolphinIcon 
          size={iconSize} 
          className="text-gray-500 hover:text-gray-700 cursor-pointer" 
          style={iconStyle} 
        />
        <div 
          className="absolute top-0 right-0 w-1.5 h-1.5 rounded-full bg-gray-400" 
          style={dotStyle}
        />
      </div>
    </div>
  )
}

export default HeaderIcons

