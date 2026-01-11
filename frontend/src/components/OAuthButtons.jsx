import React from 'react'

/**
 * OAuth Login Buttons Component
 * Displays Google and Microsoft OAuth login buttons
 */
export const GoogleLoginButton = ({ onClick, disabled = false, variant = 'button' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      initiateGoogleOAuth()
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg font-medium transition hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${
        variant === 'secondary' ? 'bg-white text-gray-900' : 'bg-white text-gray-900'
      }`}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path
          fill="#1F2937"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#1F2937"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#1F2937"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#1F2937"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Continue with Google
    </button>
  )
}

export const MicrosoftLoginButton = ({ onClick, disabled = false, variant = 'button' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      initiateMicrosoftOAuth()
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg font-medium transition hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${
        variant === 'secondary' ? 'bg-white text-gray-900' : 'bg-white text-gray-900'
      }`}
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24">
        <path fill="#50E6FF" d="M11.4 24H0V12.6h11.4V24z" />
        <path fill="#0078D4" d="M24 24H12.6V12.6H24V24z" />
        <path fill="#FFB900" d="M11.4 11.4H0V0h11.4v11.4z" />
        <path fill="#7FBA00" d="M24 11.4H12.6V0H24v11.4z" />
      </svg>
      Continue with Microsoft
    </button>
  )
}

/**
 * Initiate Google OAuth flow
 */
export const initiateGoogleOAuth = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID
  const redirectUri = `${window.location.origin}/oauth-callback`
  const scope = 'openid email profile https://www.googleapis.com/auth/drive.file'
  const state = generateRandomState()

  // Store state for verification
  sessionStorage.setItem('oauthState', state)
  sessionStorage.setItem('oauthProvider', 'google')

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope,
    state,
    access_type: 'offline',
    prompt: 'consent'
  })

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params}`
}

/**
 * Initiate Microsoft OAuth flow
 */
export const initiateMicrosoftOAuth = () => {
  const clientId = import.meta.env.VITE_MICROSOFT_CLIENT_ID
  const redirectUri = `${window.location.origin}/oauth-callback`
  const scope = 'openid email profile offline_access Files.ReadWrite'
  const state = generateRandomState()

  // Store state for verification
  sessionStorage.setItem('oauthState', state)
  sessionStorage.setItem('oauthProvider', 'microsoft')

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: redirectUri,
    response_type: 'code',
    scope,
    state,
    prompt: 'select_account'
  })

  window.location.href = `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params}`
}

/**
 * Generate random state for OAuth security
 */
const generateRandomState = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * Verify OAuth state parameter
 */
export const verifyOAuthState = (state) => {
  const storedState = sessionStorage.getItem('oauthState')
  return state === storedState
}
