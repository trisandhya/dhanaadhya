import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, Building2 } from 'lucide-react'
import { MSME_CATEGORIES, BUSINESS_CATEGORIES_GROUPED } from '../constants/businessCategories'

/**
 * Login Page
 * User authentication
 */
export default function LoginPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('raj@msme.com')
  const [password, setPassword] = useState('demo123')
  const [businessType, setBusinessType] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Simulate login delay
    setTimeout(() => {
      // Mock authentication - in real app, validate with backend
      if (email && password) {
        localStorage.setItem('authToken', 'mock_token_' + Date.now())
        localStorage.setItem('userName', email.split('@')[0])
        setLoading(false)
        navigate('/dashboard')
      } else {
        setError('Please enter both email and password')
        setLoading(false)
      }
    }, 800)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-start pl-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg" />
          <span className="font-bold text-3xl text-gray-900">Dhanaadhya</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome Back to Your Business Dashboard
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Access real-time insights, simulations, and daily guidance to grow your business smarter.
        </p>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-blue-600 font-bold">✓</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Monitor Business Health</h3>
              <p className="text-gray-600 text-sm">Track metrics that matter most</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-purple-600 font-bold">✓</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Test Decisions Fast</h3>
              <p className="text-gray-600 text-sm">Run what-if scenarios instantly</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-pink-600 font-bold">✓</span>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Stay Focused Daily</h3>
              <p className="text-gray-600 text-sm">Personalized action items</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
          <p className="text-gray-600 mb-8">Enter your credentials to access your dashboard</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Business Type (Optional) */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Business Type (Optional)</label>
              <select
                value={businessType}
                onChange={(e) => setBusinessType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition appearance-none cursor-pointer bg-white"
              >
                <option value="">All business types...</option>
                {Object.entries(BUSINESS_CATEGORIES_GROUPED).map(([category, businesses]) => (
                  <optgroup key={category} label={category}>
                    {businesses.map(business => (
                      <option key={business.id} value={business.id}>
                        {business.icon} {business.name}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 border border-gray-300 rounded" />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium">Forgot password?</a>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Demo Credentials Info */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900 font-medium mb-1">Demo Credentials:</p>
            <p className="text-xs text-blue-800">Email: <code className="bg-blue-100 px-2 py-1 rounded">raj@msme.com</code></p>
            <p className="text-xs text-blue-800">Password: <code className="bg-blue-100 px-2 py-1 rounded">demo123</code></p>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center border-t border-gray-200 pt-6">
            <p className="text-gray-600">Don't have an account? <Link to="/register" className="text-blue-600 hover:text-blue-700 font-semibold">Sign up free</Link></p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900 font-medium">← Back to Home</Link>
        </div>
      </div>
    </div>
  )
}
