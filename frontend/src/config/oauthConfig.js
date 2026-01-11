/**
 * OAuth Configuration
 * Configure your OAuth credentials from Google Cloud Console and Azure AD
 */

// ============================================
// GOOGLE OAUTH CONFIGURATION
// ============================================
// Step 1: Go to https://console.cloud.google.com/
// Step 2: Create a new project
// Step 3: Enable Google Drive API
// Step 4: Create OAuth 2.0 credentials (Web application)
// Step 5: Add authorized redirect URIs: http://localhost:3000/
// Step 6: Copy Client ID below

export const GOOGLE_CONFIG = {
  CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID || 'your-google-client-id-here.apps.googleusercontent.com',
  SCOPE: 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'
}

// ============================================
// MICROSOFT OAUTH CONFIGURATION
// ============================================
// Step 1: Go to https://portal.azure.com/
// Step 2: Register an application
// Step 3: Add redirect URI: http://localhost:3000/
// Step 4: Create a client secret
// Step 5: Get application ID and add below

export const MICROSOFT_CONFIG = {
  CLIENT_ID: import.meta.env.VITE_MICROSOFT_CLIENT_ID || 'your-microsoft-client-id-here',
  AUTHORITY: 'https://login.microsoftonline.com/common',
  REDIRECT_URI: import.meta.env.VITE_REDIRECT_URI || 'http://localhost:3000/',
  SCOPES: ['user.read', 'files.readwrite.all']
}

// ============================================
// ENVIRONMENT VARIABLES
// ============================================
// Create a .env file in frontend/ directory with:
// VITE_GOOGLE_CLIENT_ID=your-google-client-id
// VITE_MICROSOFT_CLIENT_ID=your-microsoft-client-id
// VITE_REDIRECT_URI=http://localhost:3000/
