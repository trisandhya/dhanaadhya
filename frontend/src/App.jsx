import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
 */
function App() {
  return (
    <BrowserRouter basename="/dhanaadhya/" future={{ v7_startTransition: true }}>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Routes>
          {/* Home page - standalone with its own header and footer */}
          <Route path="/" element={<HomePage />} />
          
          {/* Auth pages - standalone */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          
          {/* Authenticated pages with navbar and footer */}
          <Route path="/dashboard" element={
            <>
              <Navbar userName="Raj Patel" />
              <main className="flex-1"><DashboardPage /></main>
              <Footer />
            </>
          } />
          <Route path="/simulation" element={
            <>
              <Navbar userName="Raj Patel" />
              <main className="flex-1"><SimulationPage /></main>
              <Footer />
            </>
          } />
          <Route path="/analytics" element={
            <>
              <Navbar userName="Raj Patel" />
              <main className="flex-1"><AnalyticsPage /></main>
              <Footer />
            </>
          } />
          <Route path="/focus-guide" element={
            <>
              <Navbar userName="Raj Patel" />
              <main className="flex-1"><FocusGuidePage /></main>
              <Footer />
            </>
          } />
          <Route path="/profile" element={
            <>
              <Navbar userName="Raj Patel" />
              <main className="flex-1"><ProfilePage /></main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
