import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '@store/AuthContext'

/**
 * OAuth Callback Handler
 * Processes OAuth redirect from Google and Microsoft
 * Place this component at /oauth-callback route
 */
export default function OAuthCallback() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { loginWithGoogle, loginWithMicrosoft } = useAuth()

  useEffect(() => {
    handleOAuthCallback()
  }, [])

  const handleOAuthCallback = async () => {
    try {
      // Get OAuth parameters from URL
      const code = searchParams.get('code')
      const state = searchParams.get('state')
      const error = searchParams.get('error')
      const provider = sessionStorage.getItem('oauthProvider') || 'unknown'

      if (error) {
        console.error(`OAuth error: ${error}`)
        navigate('/login?error=oauth_failed')
        return
      }

      if (!code) {
        console.error('No authorization code received')
        navigate('/login?error=no_code')
        return
      }

      // Exchange code for token
      const tokenResponse = await fetch('/api/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code,
          provider
        })
      })

      if (!tokenResponse.ok) {
        throw new Error('Failed to exchange code for token')
      }

      const { accessToken, userInfo } = await tokenResponse.json()

      // Create user session
      if (provider === 'google') {
        loginWithGoogle(userInfo, accessToken)
      } else if (provider === 'microsoft') {
        loginWithMicrosoft(userInfo, accessToken)
      }

      // Redirect to dashboard
      navigate('/dashboard')
    } catch (error) {
      console.error('OAuth callback error:', error)
      navigate('/login?error=callback_failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p className="text-gray-600">Completing authentication...</p>
      </div>
    </div>
  )
}
