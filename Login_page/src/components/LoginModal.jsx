import { useState } from 'react'
import { X } from 'lucide-react'
import { loginUser, signupUser } from '../services/authService'

/**
 * LoginModal Component
 * Authentication modal for login and signup
 * Follows MVC pattern:
 * - Model: State management (email, password, isSignup, error, loading)
 * - View: UI rendering (form, buttons, inputs)
 * - Controller: Event handlers (handleSubmit, handleSocialLogin, etc.)
 * @param {boolean} isOpen - Whether modal is open
 * @param {function} onClose - Close handler
 * @param {function} onSuccessRedirect - Success redirect handler
 */
function LoginModal({ isOpen, onClose, onSuccessRedirect }) {
  // Model: State management
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignup, setIsSignup] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null

  // Controller: Event handlers
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) return
    
    setError('')
    setLoading(true)

    try {
      if (isSignup) {
        await signupUser({ email, password })
      } else {
        await loginUser({ email, password })
      }
      if (onSuccessRedirect) {
        onSuccessRedirect()
      }
    } catch (err) {
      setError(err.response?.data?.detail || err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`)
    setError(`${provider} login is not yet implemented`)
  }

  const handlePhoneLogin = () => {
    console.log('Login with phone')
    setError('Phone login is not yet implemented')
  }

  // View: UI rendering
  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <h1 className="modal-title">Log in or sign up</h1>
        <p className="modal-description">
          You'll get smarter responses and can upload files, images, and more.
        </p>

        <div className="social-buttons">
          <button
            type="button"
            className="social-button"
            onClick={() => handleSocialLogin('Google')}
          >
            <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>

          <button
            type="button"
            className="social-button"
            onClick={() => handleSocialLogin('Apple')}
          >
            <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            Continue with Apple
          </button>

          <button
            type="button"
            className="social-button"
            onClick={() => handleSocialLogin('Microsoft')}
          >
            <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20">
              <path fill="#F25022" d="M1 1h10v10H1z" />
              <path fill="#00A4EF" d="M13 1h10v10H13z" />
              <path fill="#7FBA00" d="M1 13h10v10H1z" />
              <path fill="#FFB900" d="M13 13h10v10H13z" />
            </svg>
            Continue with Microsoft
          </button>

          <button
            type="button"
            className="social-button"
            onClick={handlePhoneLogin}
          >
            <svg className="social-icon" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            Continue with phone
          </button>
        </div>

        <div className="divider">
          <span className="divider-text">OR</span>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              id="email"
              type="email"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="form-input email-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="form-input email-input"
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="continue-button" disabled={loading}>
            {loading ? 'Loading...' : isSignup ? 'Sign up' : 'Log in'}
          </button>

          <div className="auth-footer">
            <button
              type="button"
              className="toggle-auth"
              onClick={() => {
                setIsSignup(!isSignup)
                setError('')
              }}
            >
              {isSignup ? 'Already have an account? Log in' : "Don't have an account? Sign up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginModal
