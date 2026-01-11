import React, { useState } from 'react'
import { Download, Cloud, HardDrive, AlertCircle } from 'lucide-react'
import {
  downloadAsJSON,
  downloadAsCSV,
  saveToGoogleDrive,
  saveToOneDrive,
  generateBackupFilename,
  prepareDataForExport
} from '@utils/dataExport'
import { useAuth } from '@store/AuthContext'

/**
 * Data Export Component
 * Allows users to export their data to various destinations
 */
export default function DataExport({ appData = {} }) {
  const { user } = useAuth()
  const [exporting, setExporting] = useState(false)
  const [selectedFormat, setSelectedFormat] = useState('json')
  const [selectedDestination, setSelectedDestination] = useState('local')
  const [message, setMessage] = useState({ type: '', text: '' })

  if (!user) {
    return null
  }

  const showMessage = (type, text) => {
    setMessage({ type, text })
    setTimeout(() => setMessage({ type: '', text: '' }), 5000)
  }

  const handleLocalExport = async () => {
    try {
      setExporting(true)
      const exportData = prepareDataForExport(user, appData)
      const filename = generateBackupFilename()

      if (selectedFormat === 'json') {
        downloadAsJSON(exportData, filename)
      } else {
        downloadAsCSV(exportData, `${filename}.csv`)
      }

      showMessage('success', `Data exported as ${selectedFormat.toUpperCase()} successfully!`)
    } catch (error) {
      showMessage('error', `Export failed: ${error.message}`)
    } finally {
      setExporting(false)
    }
  }

  const handleGoogleDriveExport = async () => {
    try {
      setExporting(true)

      // In a real implementation, you would get the access token from Google OAuth
      // For now, this shows the structure
      const accessToken = sessionStorage.getItem('googleAccessToken')

      if (!accessToken) {
        showMessage('error', 'Please authenticate with Google first')
        return
      }

      const exportData = prepareDataForExport(user, appData)
      const filename = generateBackupFilename('dhanaadhya')

      const result = await saveToGoogleDrive(accessToken, exportData, filename)

      if (result.success) {
        showMessage('success', `Saved to Google Drive: ${result.fileName}`)
      } else {
        showMessage('error', `Google Drive export failed: ${result.error}`)
      }
    } catch (error) {
      showMessage('error', `Export failed: ${error.message}`)
    } finally {
      setExporting(false)
    }
  }

  const handleOneDriveExport = async () => {
    try {
      setExporting(true)

      const accessToken = sessionStorage.getItem('microsoftAccessToken')

      if (!accessToken) {
        showMessage('error', 'Please authenticate with Microsoft first')
        return
      }

      const exportData = prepareDataForExport(user, appData)
      const filename = generateBackupFilename('dhanaadhya')

      const result = await saveToOneDrive(accessToken, exportData, filename)

      if (result.success) {
        showMessage('success', `Saved to OneDrive: ${result.fileName}`)
      } else {
        showMessage('error', `OneDrive export failed: ${result.error}`)
      }
    } catch (error) {
      showMessage('error', `Export failed: ${error.message}`)
    } finally {
      setExporting(false)
    }
  }

  const handleExport = () => {
    if (selectedDestination === 'local') {
      handleLocalExport()
    } else if (selectedDestination === 'google') {
      handleGoogleDriveExport()
    } else if (selectedDestination === 'onedrive') {
      handleOneDriveExport()
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
          <Download className="w-6 h-6 text-blue-600" />
          Backup Your Data
        </h2>
        <p className="text-gray-600">
          Export your business data to your preferred location. Your data is never stored on our servers.
        </p>
      </div>

      {/* Message Alert */}
      {message.text && (
        <div
          className={`mb-4 p-4 rounded-lg border ${
            message.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
          }`}
        >
          <p className="text-sm font-medium">{message.text}</p>
        </div>
      )}

      {/* Export Options */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Format Selection */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Format</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="format"
                value="json"
                checked={selectedFormat === 'json'}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <p className="font-medium text-gray-900">JSON Format</p>
                <p className="text-sm text-gray-600">Complete data structure, easily importable</p>
              </div>
            </label>

            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="format"
                value="csv"
                checked={selectedFormat === 'csv'}
                onChange={(e) => setSelectedFormat(e.target.value)}
                className="w-4 h-4"
              />
              <div>
                <p className="font-medium text-gray-900">CSV Format</p>
                <p className="text-sm text-gray-600">Compatible with Excel and Google Sheets</p>
              </div>
            </label>
          </div>
        </div>

        {/* Destination Selection */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Save Location</h3>
          <div className="space-y-3">
            {/* Local Download */}
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="destination"
                value="local"
                checked={selectedDestination === 'local'}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-4 h-4"
              />
              <div className="flex items-start gap-3 flex-1">
                <HardDrive className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Local Download</p>
                  <p className="text-sm text-gray-600">Save to your computer</p>
                </div>
              </div>
            </label>

            {/* Google Drive */}
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="destination"
                value="google"
                checked={selectedDestination === 'google'}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-4 h-4"
              />
              <div className="flex items-start gap-3 flex-1">
                <Cloud className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Google Drive</p>
                  <p className="text-sm text-gray-600">Requires Google authentication</p>
                </div>
              </div>
            </label>

            {/* OneDrive */}
            <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
              <input
                type="radio"
                name="destination"
                value="onedrive"
                checked={selectedDestination === 'onedrive'}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-4 h-4"
              />
              <div className="flex items-start gap-3 flex-1">
                <Cloud className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">OneDrive / Microsoft 365</p>
                  <p className="text-sm text-gray-600">Requires Microsoft authentication</p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 flex gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div className="text-sm text-blue-900">
          <p className="font-medium mb-1">Your data is yours</p>
          <p>
            We do not store any of your data on our servers. All exports go directly to your personal cloud storage or
            local device. You maintain complete control.
          </p>
        </div>
      </div>

      {/* Export Button */}
      <div className="flex gap-3">
        <button
          onClick={handleExport}
          disabled={exporting}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          {exporting ? 'Exporting...' : 'Export Data'}
        </button>

        <button
          onClick={() => setMessage({ type: '', text: '' })}
          className="px-6 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Cancel
        </button>
      </div>

      {/* Export History */}
      <div className="mt-8 bg-gray-50 rounded-lg border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Information</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-gray-600">Last Export</p>
            <p className="text-gray-900 font-medium">
              {localStorage.getItem('lastExportTime') || 'Never'}
            </p>
          </div>
          <div>
            <p className="text-gray-600">Business Name</p>
            <p className="text-gray-900 font-medium">{user.businessName || 'Not set'}</p>
          </div>
          <div>
            <p className="text-gray-600">Export Format</p>
            <p className="text-gray-900 font-medium">{selectedFormat.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
