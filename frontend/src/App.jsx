import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '@store/AuthContext'
import ProtectedRoute from '@components/ProtectedRoute'
import OAuthCallback from '@components/OAuthCallback'
import { Navbar, Footer } from '@components/Navigation'
import HomePage from '@pages/HomePage'
import LoginPage from '@pages/LoginPage'
import RegistrationPage from '@pages/RegistrationPage'
import DashboardPage from '@pages/DashboardPage'
import SimulationPage from '@pages/SimulationPage'
import AnalyticsPage from '@pages/AnalyticsPage'
import FocusGuidePage from '@pages/FocusGuidePage'
import ProfilePage from '@pages/ProfilePage'
import './App.css'

/**
 * Main App Component
 * Entry point for the frontend application
 * Uses session-based authentication with OAuth support
 */
function App() {
  return (
    <BrowserRouter basename="/dhanaadhya/" future={{ v7_startTransition: true }}>
      <AuthProvider>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Routes>
            {/* Home page - standalone with its own header and footer */}
            <Route path="/" element={<HomePage />} />
            
            {/* Auth pages - standalone */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/oauth-callback" element={<OAuthCallback />} />
            
            {/* Authenticated pages with navbar and footer */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <>
                  <Navbar userName="Raj Patel" />
                  <main className="flex-1"><DashboardPage /></main>
                  <Footer />
                </>
              </ProtectedRoute>
            } />
            <Route path="/simulation" element={
              <ProtectedRoute>
                <>
                  <Navbar userName="Raj Patel" />
                  <main className="flex-1"><SimulationPage /></main>
                  <Footer />
                </>
              </ProtectedRoute>
            } />
            <Route path="/analytics" element={
              <ProtectedRoute>
                <>
                  <Navbar userName="Raj Patel" />
                  <main className="flex-1"><AnalyticsPage /></main>
                  <Footer />
                </>
              </ProtectedRoute>
            } />
            <Route path="/focus-guide" element={
              <ProtectedRoute>
                <>
                  <Navbar userName="Raj Patel" />
                  <main className="flex-1"><FocusGuidePage /></main>
                  <Footer />
                </>
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <>
                  <Navbar userName="Raj Patel" />
                  <main className="flex-1"><ProfilePage /></main>
                  <Footer />
                </>
              </ProtectedRoute>
            } />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
