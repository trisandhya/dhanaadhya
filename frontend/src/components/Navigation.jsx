import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, LogOut } from 'lucide-react'
import { useAuth } from '@store/AuthContext'

/**
 * Top Navigation Bar
 */
export const Navbar = ({ userName = 'User' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const displayName = user?.fullName || user?.displayName || userName

  return (
    <nav className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg" />
            <span className="font-bold text-lg text-gray-900">Dhanaadhya</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Home</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Dashboard</Link>
            <Link to="/simulation" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Simulation</Link>
            <Link to="/analytics" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Analytics</Link>
            <Link to="/focus-guide" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Focus Guide</Link>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/profile" className="text-sm text-gray-700 hover:text-gray-900 font-medium">
                {displayName}
              </Link>
              <button 
                onClick={handleLogout}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                title="Logout"
              >
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Home</Link>
            <Link to="/dashboard" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Dashboard</Link>
            <Link to="/simulation" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Simulation</Link>
            <Link to="/analytics" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Analytics</Link>
            <Link to="/focus-guide" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Focus Guide</Link>
            <Link to="/profile" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded">Profile</Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}

/**
 * Sidebar Navigation
 */
export const Sidebar = ({ items = [] }) => {
  const [activeItem, setActiveItem] = useState(items[0]?.id || null)

  return (
    <aside className="hidden lg:block w-64 bg-white border-r border-gray-200 h-[calc(100vh-64px)] sticky top-16">
      <div className="p-6 space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              activeItem === item.id
                ? 'bg-blue-50 text-blue-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </aside>
  )
}

/**
 * Footer Component
 */
export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="font-semibold text-gray-900 mb-4">Dhanaadhya</p>
            <p className="text-sm text-gray-600">MSME Business Simulator</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-4">Product</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Features</a></li>
              <li><a href="#" className="hover:text-gray-900">Pricing</a></li>
              <li><a href="#" className="hover:text-gray-900">Documentation</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-4">Support</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Privacy</a></li>
              <li><a href="#" className="hover:text-gray-900">Terms</a></li>
              <li><a href="#" className="hover:text-gray-900">License</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-sm text-gray-600 text-center">
          <p>&copy; 2024 Dhanaadhya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
