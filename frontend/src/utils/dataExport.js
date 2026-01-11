/**
 * Data Export Service
 * Handles exporting user data to different storage backends
 */

// ============================================
// LOCAL DOWNLOAD EXPORTS
// ============================================

/**
 * Download data as JSON file
 */
export const downloadAsJSON = (data, filename = 'dhanaadhya-data.json') => {
  const jsonString = JSON.stringify(data, null, 2)
  const blob = new Blob([jsonString], { type: 'application/json' })
  downloadFile(blob, filename)
}

/**
 * Download data as CSV file
 */
export const downloadAsCSV = (data, filename = 'dhanaadhya-data.csv') => {
  let csvContent = 'data:text/csv;charset=utf-8,'

  // Convert nested object to CSV format
  if (Array.isArray(data)) {
    // If array, use first item to determine headers
    if (data.length > 0) {
      const headers = Object.keys(data[0])
      csvContent += headers.join(',') + '\r\n'
      data.forEach(row => {
        const values = headers.map(header => {
          const value = row[header]
          return typeof value === 'string' ? `"${value}"` : value
        })
        csvContent += values.join(',') + '\r\n'
      })
    }
  } else {
    // For object, create key-value pairs
    Object.entries(data).forEach(([key, value]) => {
      const displayValue = typeof value === 'string' ? `"${value}"` : value
      csvContent += `${key},${displayValue}\r\n`
    })
  }

  const encodedUri = encodeURI(csvContent)
  const link = document.createElement('a')
  link.setAttribute('href', encodedUri)
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

/**
 * Generic file download helper
 */
const downloadFile = (blob, filename) => {
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

// ============================================
// GOOGLE DRIVE EXPORT
// ============================================

/**
 * Save data to Google Drive
 * Requires Google OAuth token
 */
export const saveToGoogleDrive = async (accessToken, data, filename = 'dhanaadhya-data.json') => {
  try {
    const fileContent = JSON.stringify(data, null, 2)
    const blob = new Blob([fileContent], { type: 'application/json' })

    // Create metadata
    const metadata = {
      name: filename,
      mimeType: 'application/json',
      description: 'Dhanaadhya Business Data Export'
    }

    // Create FormData
    const formData = new FormData()
    formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }))
    formData.append('file', blob)

    // Upload to Google Drive
    const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      body: formData
    })

    if (!response.ok) {
      throw new Error(`Google Drive upload failed: ${response.statusText}`)
    }

    const result = await response.json()
    return {
      success: true,
      fileId: result.id,
      fileName: result.name,
      webViewLink: result.webViewLink
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * Get list of files from Google Drive
 */
export const getGoogleDriveFiles = async (accessToken) => {
  try {
    const response = await fetch(
      'https://www.googleapis.com/drive/v3/files?q=name contains "dhanaadhya"&spaces=drive&pageSize=10',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch Google Drive files: ${response.statusText}`)
    }

    const data = await response.json()
    return {
      success: true,
      files: data.files || []
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

// ============================================
// ONEDRIVE / MICROSOFT GRAPH EXPORT
// ============================================

/**
 * Save data to OneDrive
 * Requires Microsoft Graph API token
 */
export const saveToOneDrive = async (accessToken, data, filename = 'dhanaadhya-data.json') => {
  try {
    const fileContent = JSON.stringify(data, null, 2)

    // Upload to OneDrive root directory
    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/drive/root/children/${filename}/content`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: fileContent
      }
    )

    if (!response.ok) {
      // Try creating new file if it doesn't exist
      if (response.status === 404) {
        return await createFileOnOneDrive(accessToken, data, filename)
      }
      throw new Error(`OneDrive upload failed: ${response.statusText}`)
    }

    const result = await response.json()
    return {
      success: true,
      fileId: result.id,
      fileName: result.name,
      webUrl: result.webUrl
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * Create new file on OneDrive
 */
const createFileOnOneDrive = async (accessToken, data, filename) => {
  try {
    const fileContent = JSON.stringify(data, null, 2)

    const response = await fetch(
      `https://graph.microsoft.com/v1.0/me/drive/root:/Dhanaadhya/${filename}:/content`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        body: fileContent
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to create OneDrive file: ${response.statusText}`)
    }

    const result = await response.json()
    return {
      success: true,
      fileId: result.id,
      fileName: result.name,
      webUrl: result.webUrl
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

/**
 * Get list of files from OneDrive
 */
export const getOneDriveFiles = async (accessToken) => {
  try {
    const response = await fetch(
      'https://graph.microsoft.com/v1.0/me/drive/root/children',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    )

    if (!response.ok) {
      throw new Error(`Failed to fetch OneDrive files: ${response.statusText}`)
    }

    const data = await response.json()
    return {
      success: true,
      files: (data.value || []).filter(f => f.name.includes('dhanaadhya'))
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

// ============================================
// DATA FORMATTING UTILITIES
// ============================================

/**
 * Prepare user data for export
 */
export const prepareDataForExport = (user, appData = {}) => {
  return {
    exportDate: new Date().toISOString(),
    appVersion: '1.0.0',
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      businessName: user.businessName,
      businessType: user.businessType
    },
    data: appData,
    metadata: {
      totalSize: JSON.stringify({ user, appData }).length,
      backupDate: new Date().toLocaleDateString()
    }
  }
}

/**
 * Generate backup filename with timestamp
 */
export const generateBackupFilename = (prefix = 'dhanaadhya') => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0]
  return `${prefix}-backup-${timestamp}.json`
}

/**
 * Create shareable backup format
 */
export const createShareableBackup = (user, data) => {
  return {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    exportedBy: user.email,
    businessName: user.businessName,
    businessType: user.businessType,
    dataSnapshot: data,
    instructions: {
      restore: 'Import this file in the Dhanaadhya application to restore your data',
      security: 'Keep this file secure - it contains your business data'
    }
  }
}
