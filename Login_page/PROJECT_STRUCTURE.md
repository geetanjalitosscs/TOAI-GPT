# Project Structure Documentation

## Overview
This project follows a clean MVC (Model-View-Controller) architecture pattern with reusable components and centralized styling. All code is written in English and follows production-level best practices.

## Directory Structure

```
Login_page/
├── src/
│   ├── components/          # React components (organized by type)
│   │   ├── icons/          # Brand icon components
│   │   │   └── BrandIcons.jsx
│   │   ├── layout/          # Layout components (Header, Sidebar, ChatArea)
│   │   ├── ui/              # Reusable UI components
│   │   ├── ChatPage.jsx    # Main chat page component
│   │   └── LoginModal.jsx  # Authentication modal
│   ├── images/              # Image assets
│   ├── services/            # API services (Model layer)
│   │   └── authService.js
│   ├── styles/              # Centralized CSS
│   │   └── responsive.css
│   ├── styles.css          # Main stylesheet
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── images/                  # Reference images (not used in build)
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## MVC Pattern Implementation

### Model Layer (`/services`)
- **authService.js**: Handles API calls for authentication
  - `loginUser()`: Login API call
  - `signupUser()`: Signup API call
  - `checkAuth()`: Check authentication status

### View Layer (`/components`)
- **Layout Components** (`/layout`): Main page structure
  - `Header.jsx`: Top navigation bar
  - `Sidebar.jsx`: Left sidebar navigation
  - `ChatArea.jsx`: Main chat content area
- **UI Components** (`/ui`): Reusable UI elements
  - `SidebarItem.jsx`: Sidebar navigation item
  - `ChatItem.jsx`: Chat history item
  - `AppMenuItem.jsx`: App menu item
  - `HeaderIcons.jsx`: Header icon row
  - `MessageInput.jsx`: Message input field
- **Icons** (`/icons`): Brand icon components
  - `BrandIcons.jsx`: Custom SVG and image-based icons

### Controller Layer
- Event handlers and state management within components
- State managed using React hooks (`useState`)
- Event handlers defined in components (Controller logic)

## Component Structure

Each component follows this structure:
```javascript
/**
 * ComponentName Component
 * Description of component purpose
 * Follows MVC pattern:
 * - Model: State/data management
 * - View: UI rendering
 * - Controller: Event handlers
 * @param {type} propName - Prop description
 */
const ComponentName = ({ prop1, prop2 }) => {
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

## Responsive Design

### Breakpoints
- **Mobile**: `max-width: 640px`
- **Tablet**: `641px - 1024px`
- **Desktop**: `1025px+`
- **Large Desktop**: `1440px+`

### Features
- Mobile-first approach
- Touch-friendly targets (min 44px)
- Sidebar toggle on mobile
- Hidden elements on small screens
- Font size adjustments for iOS

## Styling Architecture

### Centralized CSS
- **styles.css**: Main stylesheet with all component styles
- **styles/responsive.css**: Responsive breakpoints and mobile styles

### CSS Organization
1. Global styles (reset, variables)
2. Component styles (modal, forms, buttons)
3. Layout styles (header, sidebar, chat area)
4. Responsive styles (media queries)

## Reusable Components

### UI Components
- `SidebarItem`: Used for navigation items
- `ChatItem`: Used for chat history items
- `AppMenuItem`: Used for app menu grid items
- `HeaderIcons`: Used for header icon row
- `MessageInput`: Used for message input field

### Icon Components
- `WhatsAppIcon`: Custom WhatsApp SVG icon
- `GoogleDriveIcon`: Google Drive image icon
- `OracleIcon`: Oracle image icon
- `SQLDolphinIcon`: SQL Dolphin image icon
- `GridIcon`: 9-dot grid icon
- `HeartWithPlus`: Health icon with plus

## File Organization Rules

1. **Components**: One component per file
2. **Styles**: Centralized in `/styles` directory
3. **Services**: API calls in `/services` directory
4. **Images**: Only in `/src/images` (used in build)
5. **No duplicate files**: Removed unnecessary duplicates

## Best Practices

1. **MVC Pattern**: Clear separation of concerns
2. **Reusability**: Components are reusable and configurable
3. **Responsive**: Mobile-first responsive design
4. **Accessibility**: ARIA labels and semantic HTML
5. **Performance**: Optimized imports and lazy loading where applicable
6. **Code Quality**: Clean, readable, production-ready code
7. **Documentation**: JSDoc comments for all components

## Removed Files

- `ChatPage.css` → Consolidated into `styles/responsive.css`
- Duplicate images in `/images` → Only `/src/images` used

## Mobile Features

- Sidebar toggle button in header
- Overlay when sidebar is open
- Touch-friendly button sizes
- Responsive typography
- Hidden elements on small screens

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested on various screen sizes

