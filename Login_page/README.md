# TOAI GPT - Login & Chat Application

A production-ready React application featuring a ChatGPT-style login/signup modal and a full-featured chat interface. Built with MVC architecture, responsive design, and reusable components.

## 🚀 Features

### Authentication
- ✅ ChatGPT-style modal design
- ✅ Responsive login/signup interface
- ✅ Email/password authentication
- ✅ Social login buttons (Google, Apple, Microsoft, Phone) - UI ready
- ✅ Integration with `vendor_v2` and `wa` databases
- ✅ Secure password hashing with bcrypt

### Chat Interface
- ✅ Full-featured chat UI matching ChatGPT design
- ✅ Responsive sidebar with navigation
- ✅ Knowledge Base sections
- ✅ Recent chats history
- ✅ App menu with quick access
- ✅ Message input with attachments
- ✅ Mobile-optimized with sidebar toggle

### Architecture
- ✅ **MVC Pattern**: Clean separation of Model, View, and Controller
- ✅ **Reusable Components**: Modular, configurable UI components
- ✅ **Centralized Styling**: All CSS in organized files
- ✅ **Responsive Design**: Mobile-first approach with breakpoints
- ✅ **Production Ready**: Clean, documented, maintainable code

## 📁 Project Structure

```
Login_page/
├── src/
│   ├── components/
│   │   ├── icons/              # Brand icon components
│   │   │   └── BrandIcons.jsx
│   │   ├── layout/              # Layout components
│   │   │   ├── Header.jsx      # Top navigation bar
│   │   │   ├── Sidebar.jsx     # Left sidebar navigation
│   │   │   └── ChatArea.jsx    # Main chat content area
│   │   ├── ui/                  # Reusable UI components
│   │   │   ├── SidebarItem.jsx
│   │   │   ├── ChatItem.jsx
│   │   │   ├── AppMenuItem.jsx
│   │   │   ├── HeaderIcons.jsx
│   │   │   └── MessageInput.jsx
│   │   ├── ChatPage.jsx        # Main chat page
│   │   └── LoginModal.jsx      # Authentication modal
│   ├── images/                  # Image assets
│   ├── services/                # API services (Model layer)
│   │   └── authService.js      # Authentication API calls
│   ├── styles/                 # Centralized CSS
│   │   └── responsive.css      # Responsive breakpoints
│   ├── styles.css              # Main stylesheet
│   ├── App.jsx                 # Root component
│   └── main.jsx                # Entry point
├── index.html
├── package.json
├── vite.config.js
├── PROJECT_STRUCTURE.md        # Detailed architecture docs
└── README.md                   # This file
```

## 🛠️ Installation

1. Navigate to the Login_page directory:
```bash
cd Login_page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5174`

## 🔧 Backend Integration

The authentication endpoints are already integrated in `TOAI_Untouched/mcp-server/app/api/auth.py`.

### Backend Setup

1. Ensure required dependencies are installed:
```bash
pip install passlib[bcrypt] python-multipart python-dotenv
```

2. Configure environment variables in `TOAI_Untouched/mcp-server/.env`:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_PORT=3306
CORS_ALLOW_ORIGINS=http://localhost:5173,http://localhost:5174,http://tossserver.ddns.net:5173
```

3. The authentication endpoints are available at:
   - `POST /api/auth/login` - Login user
   - `POST /api/auth/signup` - Signup user
   - `GET /api/auth/me` - Get current user

### Database Setup

The authentication system uses two databases:
- `vendor_v2.users` - Primary user database
- `wa.users` - Secondary user database

The login endpoint checks both databases, while signup creates accounts in `vendor_v2` by default.

## 📡 API Usage

### Frontend API Service

All API calls are centralized in `src/services/authService.js`:

```javascript
import { loginUser, signupUser, checkAuth } from './services/authService'

// Login
await loginUser({ email: 'user@example.com', password: 'password123' })

// Signup
await signupUser({ email: 'user@example.com', password: 'password123' })

// Check authentication
await checkAuth()
```

### API Endpoints

#### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Signup
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

## 🎨 Architecture

### MVC Pattern

The application follows a strict MVC (Model-View-Controller) architecture:

- **Model**: State management and data (`useState`, `services/`)
- **View**: UI rendering (JSX components)
- **Controller**: Event handlers and state updates

Example component structure:
```javascript
/**
 * ComponentName Component
 * Follows MVC pattern:
 * - Model: State management
 * - View: UI rendering
 * - Controller: Event handlers
 */
const ComponentName = ({ props }) => {
  // Model: State management
  const [state, setState] = useState(initialValue)
  
  // Controller: Event handlers
  const handleEvent = () => {
    // Handler logic
  }
  
  // View: UI rendering
  return (
    // JSX
  )
}
```

### Reusable Components

All UI components are designed for reusability:
- `SidebarItem`: Navigation items
- `ChatItem`: Chat history items
- `AppMenuItem`: App menu grid items
- `HeaderIcons`: Header icon row
- `MessageInput`: Message input field

## 📱 Responsive Design

### Breakpoints
- **Mobile**: `max-width: 640px`
- **Tablet**: `641px - 1024px`
- **Desktop**: `1025px+`
- **Large Desktop**: `1440px+`

### Mobile Features
- Sidebar toggle button in header
- Overlay when sidebar is open
- Auto-close sidebar on item selection
- Touch-friendly targets (min 44px)
- Hidden elements on small screens
- iOS font size fixes

## 🎯 Customization

### Styling
- **Main Styles**: Edit `src/styles.css`
- **Responsive Styles**: Edit `src/styles/responsive.css`
- **Component Styles**: Styles are centralized, not scattered

### Components
- **Login Modal**: `src/components/LoginModal.jsx`
- **Chat Page**: `src/components/ChatPage.jsx`
- **Layout Components**: `src/components/layout/`
- **UI Components**: `src/components/ui/`

### API Configuration
- **API Base URL**: Set `VITE_API_BASE_URL` in `.env` or update `src/services/authService.js`
- **Endpoints**: Modify `src/services/authService.js` to change API endpoints

## 🏗️ Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📚 Documentation

- **PROJECT_STRUCTURE.md**: Detailed architecture and component documentation
- **Component Comments**: All components have JSDoc comments explaining their purpose and MVC structure

## 🔒 Security Notes

- Password hashing uses bcrypt for security
- Tokens are simple random strings - consider using JWT for production
- CORS is configured in backend environment variables
- Input validation is handled by browser and backend

## 🌐 Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested on various screen sizes

## 📝 Development Notes

- All code is written in English
- Components follow consistent naming conventions
- CSS is centralized and organized
- No duplicate files or unnecessary code
- Production-ready code quality

## 🚦 Routes

- `/` - Login/Signup page
- `/app` - Chat interface (after authentication)

## 🤝 Contributing

When adding new features:
1. Follow MVC pattern
2. Create reusable components when possible
3. Add responsive styles to `styles/responsive.css`
4. Document components with JSDoc comments
5. Keep code clean and maintainable

## 📄 License

This project is part of the TOAI application suite.
