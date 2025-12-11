import axios from 'axios'

/**
 * Authentication Service
 * Handles all authentication-related API calls
 */

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:8000'

const client = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
})

/**
 * Login user
 * @param {object} credentials - User credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<object>} Authentication response
 */
export const loginUser = async ({ email, password }) => {
  const { data } = await client.post('/api/auth/login', {
    email,
    password,
  })
  return data
}

/**
 * Sign up new user
 * @param {object} credentials - User credentials
 * @param {string} credentials.email - User email
 * @param {string} credentials.password - User password
 * @returns {Promise<object>} Authentication response
 */
export const signupUser = async ({ email, password }) => {
  const { data } = await client.post('/api/auth/signup', {
    email,
    password,
  })
  return data
}

/**
 * Check current user authentication status
 * @returns {Promise<object>} User data
 */
export const checkAuth = async () => {
  const { data } = await client.get('/api/auth/me')
  return data
}

