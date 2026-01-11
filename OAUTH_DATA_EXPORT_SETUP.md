# OAuth + Data Export Integration Guide

## Overview

This system enables:
1. **OAuth Login**: Users can log in with Google or Microsoft accounts
2. **Data Export**: Users can export their data to:
   - Google Drive
   - OneDrive
   - Local device (JSON/CSV)

**Key Point**: No user data is stored on our servers. All data remains under user's control.

---

## Setup Instructions

### Step 1: Create OAuth Applications

#### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable these APIs:
   - Google Drive API
   - Google+ API
4. Go to Credentials → Create OAuth 2.0 Web Application
5. Add authorized redirect URIs:
   - `http://localhost:3000/oauth-callback`
   - `https://yourdomain.com/dhanaadhya/oauth-callback`
6. Copy **Client ID** (you'll need this)

#### Microsoft OAuth Setup

1. Go to [Azure Portal](https://portal.azure.com/)
2. Select "App registrations"
3. Click "New registration"
4. Fill in application details
5. Go to Certificates & secrets → Create client secret
6. Add redirect URIs (Mobile and desktop applications):
   - `http://localhost:3000/oauth-callback`
   - `https://yourdomain.com/dhanaadhya/oauth-callback`
7. Copy **Client ID** and **Client Secret**

### Step 2: Create Environment Variables

Create `.env` file in `frontend/` directory:

```env
# Google OAuth
VITE_GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com

# Microsoft OAuth
VITE_MICROSOFT_CLIENT_ID=your-microsoft-client-id

# Redirect URI (change for production)
VITE_REDIRECT_URI=http://localhost:3000/
```

### Step 3: Update OAuth Config

File: `src/config/oauthConfig.js`

Replace the placeholder values with your actual OAuth credentials.

### Step 4: Create Backend Endpoint (Optional but Recommended)

Create an endpoint to securely exchange OAuth codes for tokens:

```javascript
// Backend endpoint: POST /api/oauth/token
app.post('/api/oauth/token', async (req, res) => {
  const { code, provider } = req.body

  if (provider === 'google') {
    // Exchange code for Google access token
    const response = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code'
      })
    })

    const data = await response.json()
    const userInfo = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${data.access_token}` }
    }).then(r => r.json())

    res.json({
      accessToken: data.access_token,
      userInfo
    })
  } else if (provider === 'microsoft') {
    // Exchange code for Microsoft access token
    const response = await fetch('https://login.microsoftonline.com/common/oauth2/v2.0/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.MICROSOFT_CLIENT_ID,
        client_secret: process.env.MICROSOFT_CLIENT_SECRET,
        redirect_uri: process.env.REDIRECT_URI,
        grant_type: 'authorization_code'
      })
    })

    const data = await response.json()
    const userInfo = await fetch('https://graph.microsoft.com/v1.0/me', {
      headers: { Authorization: `Bearer ${data.access_token}` }
    }).then(r => r.json())

    res.json({
      accessToken: data.access_token,
      userInfo
    })
  }
})
```

---

## File Structure

```
frontend/
├── src/
│   ├── config/
│   │   └── oauthConfig.js              (NEW - OAuth configuration)
│   ├── components/
│   │   ├── OAuthButtons.jsx            (NEW - OAuth login buttons)
│   │   ├── OAuthCallback.jsx           (NEW - OAuth callback handler)
│   │   └── DataExport.jsx              (NEW - Data export UI)
│   ├── utils/
│   │   └── dataExport.js               (NEW - Export utilities)
│   ├── store/
│   │   └── AuthContext.jsx             (UPDATED - OAuth methods added)
│   ├── pages/
│   │   └── LoginPage.jsx               (UPDATED - OAuth buttons added)
│   └── App.jsx                         (UPDATED - Added OAuth callback route)
├── .env                                 (NEW - Environment variables)
└── package.json
```

---

## Usage

### User Login Flow

1. **User visits `/login`**
2. **Clicks "Continue with Google" or "Continue with Microsoft"**
3. **Redirected to OAuth provider**
4. **User authenticates**
5. **Redirected back to `/oauth-callback`**
6. **Token exchanged for user data**
7. **Session created**
8. **User redirected to `/dashboard`**

### Data Export Flow

Import and use the `DataExport` component:

```jsx
import DataExport from '@components/DataExport'

export default function MyPage() {
  const appData = {
    // Your application data
  }

  return <DataExport appData={appData} />
}
```

**Export Options:**
- **JSON Format**: Complete data structure
- **CSV Format**: Spreadsheet compatible
- **Local Download**: Save to device
- **Google Drive**: Save to user's Google Drive
- **OneDrive**: Save to user's OneDrive

---

## API Reference

### AuthContext Methods

```javascript
import { useAuth } from '@store/AuthContext'

const {
  user,                    // Current user object
  oauthProvider,          // 'google', 'microsoft', or null
  loginWithGoogle,        // (googleUser, accessToken) => user
  loginWithMicrosoft,     // (microsoftUser, accessToken) => user
  getOAuthAccessToken,    // (provider) => token
  logout,                 // () => void
  isAuthenticated         // () => boolean
} = useAuth()
```

### Data Export Functions

```javascript
import {
  downloadAsJSON,
  downloadAsCSV,
  saveToGoogleDrive,
  saveToOneDrive,
  getGoogleDriveFiles,
  getOneDriveFiles,
  prepareDataForExport,
  generateBackupFilename
} from '@utils/dataExport'

// Local downloads
downloadAsJSON(data, filename)
downloadAsCSV(data, filename)

// Cloud exports
await saveToGoogleDrive(accessToken, data, filename)
await saveToOneDrive(accessToken, data, filename)

// Utilities
prepareDataForExport(user, appData)
generateBackupFilename(prefix)
```

### OAuth Button Components

```jsx
import {
  GoogleLoginButton,
  MicrosoftLoginButton,
  initiateGoogleOAuth,
  initiateMicrosoftOAuth
} from '@components/OAuthButtons'

// Use components
<GoogleLoginButton />
<MicrosoftLoginButton />

// Or manually initiate
initiateGoogleOAuth()
initiateMicrosoftOAuth()
```

---

## Data Format

### Export Data Structure

```javascript
{
  exportDate: "2024-01-11T10:00:00.000Z",
  appVersion: "1.0.0",
  user: {
    id: "user-id",
    fullName: "User Name",
    email: "user@example.com",
    businessName: "Business Name",
    businessType: "retail"
  },
  data: {
    // Your application data
  },
  metadata: {
    totalSize: 12345,
    backupDate: "01/11/2024"
  }
}
```

---

## Testing

### Test Google OAuth

1. Visit `http://localhost:3000/dhanaadhya/login`
2. Click "Continue with Google"
3. Authenticate with Google account
4. Should redirect to dashboard with session

### Test Microsoft OAuth

1. Visit `http://localhost:3000/dhanaadhya/login`
2. Click "Continue with Microsoft"
3. Authenticate with Microsoft account
4. Should redirect to dashboard with session

### Test Data Export

1. Login to dashboard
2. Find data export component
3. Select format (JSON/CSV)
4. Select destination (Local/Google Drive/OneDrive)
5. Click "Export Data"
6. Verify file created/saved

---

## Security Considerations

### OAuth Security

✅ **What's Secure:**
- OAuth 2.0 standard implementation
- PKCE flow support
- State parameter verification
- Tokens stored in sessionStorage (cleared on browser close)

⚠️ **What You Should Do:**
- Use HTTPS in production
- Keep client secrets secure on backend
- Implement token refresh
- Add CORS headers properly
- Validate redirect URIs

### Data Security

✅ **What's Secure:**
- User data only stored locally or in user's cloud storage
- No data persists on your servers
- Files encrypted during transmission
- User controls where data goes

⚠️ **Best Practices:**
- Use HTTPS/TLS
- Don't store sensitive data in exports
- Implement data encryption if needed
- Add file permissions/sharing controls

---

## Troubleshooting

### Issue: "Invalid Client ID"
**Solution:** Check `.env` file has correct OAuth credentials

### Issue: "Redirect URI mismatch"
**Solution:** Update OAuth provider's redirect URI settings

### Issue: "Access Token Expired"
**Solution:** Implement token refresh mechanism

### Issue: "Google Drive upload fails"
**Solution:** Ensure user granted Google Drive API scope

### Issue: "OneDrive access denied"
**Solution:** Ensure user granted necessary Microsoft Graph scopes

---

## Environment Variables Checklist

- [ ] `VITE_GOOGLE_CLIENT_ID` - From Google Cloud Console
- [ ] `VITE_MICROSOFT_CLIENT_ID` - From Azure Portal
- [ ] `VITE_REDIRECT_URI` - Matches OAuth provider settings

---

## Next Steps

1. ✅ Register OAuth applications
2. ✅ Set up environment variables
3. ✅ Test OAuth login flow
4. ✅ Implement backend token exchange
5. ✅ Test data export functionality
6. ✅ Deploy to production with HTTPS

---

## Support

For issues or questions:
1. Check troubleshooting section
2. Review Google OAuth documentation
3. Review Microsoft OAuth documentation
4. Check console for error messages
