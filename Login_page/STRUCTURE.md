# Project Structure Documentation

## MVC Architecture Overview

This project follows the **Model-View-Controller (MVC)** pattern:

- **Model**: Data management and API services (`services/`)
- **View**: UI components (`components/`)
- **Controller**: Event handlers and state management (within components)

## Directory Structure

```
Login_page/
├── src/
│   ├── components/
│   │   ├── icons/              # Reusable icon components
│   │   │   └── BrandIcons.jsx  # WhatsApp, Google Drive, Oracle, SQL Dolphin, Grid, HeartWithPlus
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── SidebarItem.jsx # Sidebar navigation item
│   │   │   ├── ChatItem.jsx   # Chat history item
│   │   │   ├── AppMenuItem.jsx # App menu item
│   │   │   ├── MessageInput.jsx # Message input field
│   │   │   └── HeaderIcons.jsx # Header icons row
│   │   ├── layout/             # Layout components
│   │   │   ├── Sidebar.jsx     # Left sidebar
│   │   │   ├── Header.jsx      # Top header
│   │   │   └── ChatArea.jsx    # Main chat area
│   │   ├── ChatPage.jsx        # Main chat page (Controller)
│   │   ├── LoginModal.jsx      # Authentication modal
│   │   └── ChatPage.css        # Chat page styles
│   ├── services/               # Model: API services
│   │   └── authService.js     # Authentication API calls
│   ├── styles/                 # Global styles
│   │   ├── responsive.css     # Responsive design rules
│   │   └── styles.css         # Base styles
│   ├── images/                 # Image assets
│   ├── App.jsx                 # Root component
│   └── main.jsx               # Entry point
└── ...
```

## Component Hierarchy

### Layout Components (View)
- **Sidebar**: Navigation and chat history
- **Header**: Top bar with icons and profile
- **ChatArea**: Main conversation area
- **MessageInput**: Bottom input field

### UI Components (Reusable)
- **SidebarItem**: Navigation item
- **ChatItem**: Chat history item
- **AppMenuItem**: App switcher item
- **HeaderIcons**: Header icon row
- **MessageInput**: Message input component

### Icon Components (Reusable)
- **WhatsAppIcon**: WhatsApp brand icon
- **GoogleDriveIcon**: Google Drive icon
- **OracleIcon**: Oracle icon
- **SQLDolphinIcon**: MySQL/SQL icon
- **GridIcon**: App switcher grid icon
- **HeartWithPlus**: Health app icon

## Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 640px (sidebar hidden, icons hidden)
- **Tablet**: 641px - 1024px (adjusted padding)
- **Desktop**: 1025px+ (full layout)
- **Large**: 1440px+ (max-width constraints)

## Key Features

1. **Reusable Components**: All repeated UI elements are extracted into components
2. **MVC Pattern**: Clear separation of concerns
3. **Responsive**: Mobile-first design approach
4. **Clean Code**: Well-documented with JSDoc comments
5. **English Only**: All code, comments, and UI text in English

## File Organization

- **Components**: Organized by type (icons, ui, layout)
- **Services**: API calls and data management
- **Styles**: Centralized CSS with responsive rules
- **Images**: Asset files in dedicated folder

## Removed Files

- `src/api.js` → Moved to `services/authService.js`
- `backend_auth_example.py` → Backend is in `TOAI_Untouched/`

