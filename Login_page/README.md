# Login/Signup Page

A responsive React login/signup page matching the ChatGPT-style modal design, designed to work with your `vendor_v2` and `wa` databases.

## Features

- ✅ ChatGPT-style modal design
- ✅ Responsive layout (mobile, tablet, desktop)
- ✅ Login and Signup functionality
- ✅ Social login buttons (Google, Apple, Microsoft, Phone) - UI ready
- ✅ Email/password authentication
- ✅ Integration with vendor_v2 and wa databases

## Installation

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

## Backend Integration

To enable authentication, you need to add the authentication endpoints to your FastAPI backend.

### Option 1: Add to existing backend

1. Copy `backend_auth_example.py` to `TOAI_Untouched/mcp-server/app/api/auth.py`

2. Install required dependencies:
```bash
pip install passlib[bcrypt] python-multipart
```

3. Add the router to `TOAI_Untouched/mcp-server/app/main.py`:
```python
from .api.auth import router as auth_router

# In _build_app function, add:
app.include_router(auth_router)
```

4. The authentication endpoints will be available at:
   - `POST /api/auth/login` - Login user
   - `POST /api/auth/signup` - Signup user
   - `GET /api/auth/me` - Get current user

### Option 2: Database Setup

The authentication system will automatically create `users` tables in both databases:
- `vendor_v2.users` - For vendor_v2 database users
- `wa.users` - For wa database users

The login endpoint checks both databases, while signup creates accounts in `vendor_v2` by default.

## Environment Variables

Make sure your `.env` file in `TOAI_Untouched/mcp-server/` has:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_PORT=3306
```

## API Endpoints

### Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Signup
```bash
POST /api/auth/signup
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

## Customization

- **Styling**: Edit `src/styles.css` to customize colors, fonts, and layout
- **Components**: Modify `src/components/LoginModal.jsx` to add features
- **API**: Update `src/api.js` to change API endpoints or add new methods

## Production Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Notes

- Social login buttons (Google, Apple, Microsoft, Phone) are UI-ready but need backend implementation
- Password hashing uses bcrypt for security
- Tokens are simple random strings - consider using JWT for production
- The modal can be closed by clicking outside or the X button

