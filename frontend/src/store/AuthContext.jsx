import React, { createContext, useState, useContext, useEffect } from 'react'

/**
 * Authentication Context
 * Manages user session data in memory/session storage only
 * No persistent storage - data is cleared on page refresh
 * Supports both traditional and OAuth (Google/Microsoft) login
 */
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [oauthProvider, setOAuthProvider] = useState(null) // 'google', 'microsoft', or null

  // Initialize auth state from sessionStorage
  useEffect(() => {
    const sessionUser = sessionStorage.getItem('user')
    const provider = sessionStorage.getItem('oauthProvider')
    if (sessionUser) {
      try {
        setUser(JSON.parse(sessionUser))
        if (provider) {
          setOAuthProvider(provider)
        }
      } catch (error) {
        console.error('Failed to parse user from session storage:', error)
        sessionStorage.clear()
      }
    }
    setLoading(false)
  }, [])

  const register = (userData) => {
    // Create user object with session data only
    const newUser = {
      id: Date.now().toString(),
      fullName: userData.fullName,
      businessName: userData.businessName,
      businessType: userData.businessType,
      email: userData.email,
      createdAt: new Date().toISOString(),
      sessionToken: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }

    // Store in sessionStorage only (clears on page refresh/close)
    sessionStorage.setItem('user', JSON.stringify(newUser))
    setUser(newUser)

    return newUser
  }

  const login = (email, password) => {
    // Validate credentials (demo validation - no backend)
    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    // Create user session
    const loginUser = {
      id: Date.now().toString(),
      email: email,
      displayName: email.split('@')[0],
      loginTime: new Date().toISOString(),
      sessionToken: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    }

    // Store in sessionStorage only
    sessionStorage.setItem('user', JSON.stringify(loginUser))
    setUser(loginUser)

    return loginUser
  }

  const logout = () => {
    sessionStorage.clear()
    setUser(null)
    setOAuthProvider(null)
  }

  const isAuthenticated = () => {
    return user !== null
  }

  /**
   * OAuth Google Login
   * Called after Google OAuth redirect with user info and access token
   */
  const loginWithGoogle = (googleUser, accessToken) => {
    const oauthLoginUser = {
      id: googleUser.sub || googleUser.id,
      email: googleUser.email,
      displayName: googleUser.name,
      fullName: googleUser.name,
      picture: googleUser.picture,
      provider: 'google',
      sessionToken: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      loginTime: new Date().toISOString()
    }

    sessionStorage.setItem('user', JSON.stringify(oauthLoginUser))
    sessionStorage.setItem('oauthProvider', 'google')
    sessionStorage.setItem('googleAccessToken', accessToken)
    setUser(oauthLoginUser)
    setOAuthProvider('google')

    return oauthLoginUser
  }

  /**
   * OAuth Microsoft Login
   * Called after Microsoft OAuth redirect with user info and access token
   */
  const loginWithMicrosoft = (microsoftUser, accessToken) => {
    const oauthLoginUser = {
      id: microsoftUser.id,
      email: microsoftUser.userPrincipalName,
      displayName: microsoftUser.displayName,
      fullName: microsoftUser.displayName,
      provider: 'microsoft',
      sessionToken: `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      loginTime: new Date().toISOString()
    }

    sessionStorage.setItem('user', JSON.stringify(oauthLoginUser))
    sessionStorage.setItem('oauthProvider', 'microsoft')
    sessionStorage.setItem('microsoftAccessToken', accessToken)
    setUser(oauthLoginUser)
    setOAuthProvider('microsoft')

    return oauthLoginUser
  }

  const getOAuthAccessToken = (provider) => {
    if (provider === 'google') {
      return sessionStorage.getItem('googleAccessToken')
    } else if (provider === 'microsoft') {
      return sessionStorage.getItem('microsoftAccessToken')
    }
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        oauthProvider,
        register,
        login,
        logout,
        isAuthenticated,
        loginWithGoogle,
        loginWithMicrosoft,
        getOAuthAccessToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}

export default AuthContext
