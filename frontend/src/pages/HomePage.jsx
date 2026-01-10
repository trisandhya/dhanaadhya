import React from 'react'
import { Link } from 'react-router-dom'
import { TrendingUp, BarChart3, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react'
import { BUSINESS_CATEGORIES_GROUPED } from '../constants/businessCategories'

/**
 * Dhanaadhya Home Page - Landing Page
 * Showcases value proposition for MSMEs
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-purple-50">
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg" />
            <span className="font-bold text-xl text-gray-900">Dhanaadhya</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium">Login</Link>
            <Link to="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition">
              Get Started Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Small Business</span> Into A Growth Machine
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            60% of MSMEs fail in the first 5 years. Dhanaadhya helps you make smarter business decisions with real-time insights, simulations, and daily guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition flex items-center justify-center gap-2">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">The MSME Challenge</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-red-50 rounded-lg border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-4">60%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Failure Rate</h3>
              <p className="text-gray-600">MSMEs fail within 5 years due to poor planning and cash flow management</p>
            </div>
            <div className="p-8 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="text-4xl font-bold text-yellow-600 mb-4">73%</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Manual Operations</h3>
              <p className="text-gray-600">Most MSMEs rely on spreadsheets and intuition for business decisions</p>
            </div>
            <div className="p-8 bg-orange-50 rounded-lg border border-orange-200">
              <div className="text-4xl font-bold text-orange-600 mb-4">4-6 Days</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Decision Lag</h3>
              <p className="text-gray-600">It takes days to consolidate data and make critical business decisions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What You Get</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Feature 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-500">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Dashboard</h3>
                <p className="text-gray-600">Monitor your business health with key metrics, trends, and alerts. Know your business status at a glance.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-500">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">What-If Simulations</h3>
                <p className="text-gray-600">Test business scenarios before implementing. See financial impact of decisions instantly.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-pink-500">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Daily Focus Guide</h3>
                <p className="text-gray-600">Personalized daily, weekly, and monthly action items. Stay focused on what matters most.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-500">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Analytics</h3>
                <p className="text-gray-600">Deep insights into revenue, expenses, profitability, and growth trends with actionable recommendations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built for All MSME Types */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Built for All MSME Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(BUSINESS_CATEGORIES_GROUPED).map(([category, businesses]) => (
              <div key={category} className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="space-y-2">
                  {businesses.slice(0, 5).map(business => (
                    <div key={business.id} className="flex items-center gap-2 text-gray-600">
                      <span className="text-lg">{business.icon}</span>
                      <span className="text-sm">{business.name}</span>
                    </div>
                  ))}
                  {businesses.length > 5 && (
                    <p className="text-sm text-blue-600 font-medium pt-2">+ {businesses.length - 5} more...</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Why MSMEs Choose Dhanaadhya</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Built for MSMEs</h3>
                <p className="opacity-90">Designed specifically for small businesses with affordable pricing and ease of use</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">No Technical Skills Required</h3>
                <p className="opacity-90">Intuitive interface anyone on your team can use immediately</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Instant Insights</h3>
                <p className="opacity-90">Get the business intelligence you need in minutes, not days</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Privacy First</h3>
                <p className="opacity-90">Your business data is secure and never shared without permission</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-12 border border-gray-200 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of MSMEs making smarter decisions with Dhanaadhya. <br />
            <span className="font-semibold">Start free. Upgrade anytime.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition">
              Start Your Free Trial
            </Link>
            <Link to="/login" className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition">
              Already Have An Account?
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="mb-4">&copy; 2026 Dhanaadhya. All rights reserved.</p>
          <p className="text-sm">Empowering MSMEs to build sustainable, profitable businesses</p>
        </div>
      </footer>
    </div>
  )
}
