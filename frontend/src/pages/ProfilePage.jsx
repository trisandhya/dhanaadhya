import React, { useState } from 'react'
import { Container, PageHeader, SectionHeader, ResponsiveGrid, GridItem } from '@components/Layout'
import { FormWidget } from '@components/widgets/InteractionWidgets'
import { LogOut, Edit2 } from 'lucide-react'

/**
 * Profile Page - User profile and settings
 */
export const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false)

  const profileFields = [
    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Raj Patel' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'raj@example.com' },
    { id: 'phone', label: 'Phone', type: 'tel', placeholder: '+91 9876543210' },
    { id: 'business', label: 'Business Name', type: 'text', placeholder: 'Your Business' },
  ]

  const businessFields = [
    { id: 'industry', label: 'Industry', type: 'text', placeholder: 'Manufacturing' },
    { id: 'employees', label: 'Number of Employees', type: 'number', placeholder: '50' },
    { id: 'revenue', label: 'Annual Revenue', type: 'text', placeholder: '₹50-100 Lakhs' },
    { id: 'founded', label: 'Founded Year', type: 'number', placeholder: '2015' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <PageHeader 
          title="Profile" 
          subtitle="Manage your personal and business information"
        />

        {/* Profile Header */}
        <div className="card mb-8 bg-gradient-to-r from-blue-50 to-purple-50">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
              <div>
                <p className="text-2xl font-bold text-gray-900">Raj Patel</p>
                <p className="text-gray-600">raj@business.com</p>
              </div>
            </div>
            <button 
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-gray-50 border border-gray-200"
            >
              <Edit2 className="w-4 h-4" />
              {isEditing ? 'Cancel' : 'Edit'}
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <SectionHeader title="Personal Information" />
        <ResponsiveGrid columns={1} gap={4} className="mb-8">
          <GridItem>
            {isEditing ? (
              <FormWidget title="Edit Profile" fields={profileFields} />
            ) : (
              <div className="card space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Full Name:</span>
                  <span className="font-medium">Raj Patel</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium">raj@business.com</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-medium">+91 9876543210</span>
                </div>
              </div>
            )}
          </GridItem>
        </ResponsiveGrid>

        {/* Business Information */}
        <SectionHeader title="Business Information" />
        <ResponsiveGrid columns={1} gap={4} className="mb-8">
          <GridItem>
            {isEditing ? (
              <FormWidget title="Edit Business Info" fields={businessFields} />
            ) : (
              <div className="card space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Business Name:</span>
                  <span className="font-medium">Patel Manufacturing</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="text-gray-600">Industry:</span>
                  <span className="font-medium">Manufacturing</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="text-gray-600">Employees:</span>
                  <span className="font-medium">25</span>
                </div>
                <div className="flex justify-between border-t pt-4">
                  <span className="text-gray-600">Annual Revenue:</span>
                  <span className="font-medium">₹75 Lakhs</span>
                </div>
              </div>
            )}
          </GridItem>
        </ResponsiveGrid>

        {/* Settings */}
        <SectionHeader title="Account Settings" />
        <ResponsiveGrid columns={1} gap={4} className="mb-8">
          <GridItem>
            <div className="card space-y-3">
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded border border-gray-200">
                Change Password
              </button>
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded border border-gray-200">
                Two-Factor Authentication
              </button>
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded border border-gray-200">
                Notification Preferences
              </button>
              <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded border border-red-200 flex items-center gap-2">
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </GridItem>
        </ResponsiveGrid>
      </Container>
    </div>
  )
}

export default ProfilePage
