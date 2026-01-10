import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from '@components/Navigation'
import DashboardPage from '@pages/DashboardPage'
import SimulationPage from '@pages/SimulationPage'
import AnalyticsPage from '@pages/AnalyticsPage'
import FocusGuidePage from '@pages/FocusGuidePage'
import ProfilePage from '@pages/ProfilePage'
import './App.css'

/**
 * Main App Component
 * Entry point for the frontend application
 */
function App() {
  return (
    <BrowserRouter basename="/dhanaadhya/" future={{ v7_startTransition: true }}>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navigation */}
        <Navbar userName="Raj Patel" />

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/simulation" element={<SimulationPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/focus-guide" element={<FocusGuidePage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
