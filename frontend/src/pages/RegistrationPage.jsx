import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, Building2, Eye, EyeOff, CheckCircle } from 'lucide-react'

/**
 * Registration Page
 * New user sign up
 */
export default function RegistrationPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    // Validation
    if (!formData.fullName || !formData.businessName || !formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (!formData.agreeTerms) {
      setError('Please agree to terms and conditions')
      return
    }

    setLoading(true)

    // Simulate registration delay
    setTimeout(() => {
      localStorage.setItem('authToken', 'mock_token_' + Date.now())
      localStorage.setItem('userName', formData.fullName.split(' ')[0])
      localStorage.setItem('businessName', formData.businessName)
      setLoading(false)
      navigate('/dashboard')
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-8">
      {/* Left Side - Benefits */}
      <div className="hidden lg:flex w-1/2 flex-col justify-center items-start pl-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg" />
          <span className="font-bold text-3xl text-gray-900">Dhanaadhya</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Start Your Journey to Business Success
        </h1>
        <p className="text-xl text-gray-600 mb-12">
          Join thousands of MSMEs using Dhanaadhya to make smarter decisions and grow faster.
        </p>

        <div className="space-y-5 mb-12">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">7-Day Free Trial</h3>
              <p className="text-gray-600 text-sm">No credit card required. Full access to all features.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Instant Setup</h3>
              <p className="text-gray-600 text-sm">Start with your first dashboard in under 2 minutes.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Live chat support available whenever you need help.</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Data Security</h3>
              <p className="text-gray-600 text-sm">Bank-level encryption. Your data is always safe.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200">
          <p className="text-sm text-gray-600 mb-2"><span className="font-semibold text-gray-900">"Dhanaadhya helped us increase profitability by 23% in just 6 months."</span></p>
          <p className="text-sm text-gray-600">— Priya Sharma, Textile Manufacturing MSME</p>
        </div>
      </div>

      {/* Right Side - Registration Form */}
      <div className="w-full lg:w-1/2 max-w-md">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-600 mb-8">Join Dhanaadhya and transform your business</p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-medium">{error}</p>
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Raj Patel"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Business Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Business Name</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Your Business Ltd."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-4 h-4 border border-gray-300 rounded mt-1"
              />
              <span className="text-sm text-gray-600">
                I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </span>
            </label>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Create Account (Free)'}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center border-t border-gray-200 pt-6">
            <p className="text-gray-600">Already have an account? <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">Sign in</Link></p>
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
