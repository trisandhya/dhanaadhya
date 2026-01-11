# OAuth + Data Export Quick Reference

## 🎯 What's New

✅ **Google/Microsoft OAuth Login**
- Users can login with Google account
- Users can login with Microsoft/Outlook account
- No password needed

✅ **Data Export Options**
- Export to local device (JSON/CSV)
- Export to Google Drive
- Export to OneDrive
- All data stays under user control

---

## 🚀 Quick Start

### 1. Get OAuth Credentials

**Google:**
1. Go to https://console.cloud.google.com/
2. Create project → Enable Google Drive API
3. Create OAuth 2.0 Web credentials
4. Copy Client ID

**Microsoft:**
1. Go to https://portal.azure.com/
2. App registrations → New registration
3. Add redirect URI
4. Copy Client ID

### 2. Create .env File

In `frontend/` directory, create `.env`:

```env
VITE_GOOGLE_CLIENT_ID=your-google-client-id
VITE_MICROSOFT_CLIENT_ID=your-microsoft-client-id
VITE_REDIRECT_URI=http://localhost:3000/
```

### 3. Update vite.config.js (if needed)

Ensure `.env` is being read:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vite automatically loads .env files
})
```

### 4. Test It

```bash
cd frontend
npm run dev
```

Visit http://localhost:3000/dhanaadhya/login
- Click "Continue with Google" or "Continue with Microsoft"
- Authenticate
- Should redirect to dashboard

---

## 📁 New Files Created

| File | Purpose |
|------|---------|
| `src/config/oauthConfig.js` | OAuth credentials config |
| `src/components/OAuthButtons.jsx` | Login buttons |
| `src/components/OAuthCallback.jsx` | OAuth redirect handler |
| `src/components/DataExport.jsx` | Data export UI |
| `src/utils/dataExport.js` | Export functions |
| `.env` | Environment variables |

## 📝 Modified Files

| File | Changes |
|------|---------|
| `src/App.jsx` | Added `/oauth-callback` route |
| `src/pages/LoginPage.jsx` | Added OAuth buttons |
| `src/store/AuthContext.jsx` | Added OAuth methods |

---

## 💻 Code Examples

### Use OAuth in Components

```jsx
import { useAuth } from '@store/AuthContext'

export default function Component() {
  const { user, oauthProvider } = useAuth()

  if (user) {
    console.log(`Logged in via: ${oauthProvider}`)
    console.log(`User: ${user.email}`)
  }
}
```

### Add Data Export

```jsx
import DataExport from '@components/DataExport'

export default function Dashboard() {
  const appData = { /* your data */ }

  return (
    <div>
      <h1>Dashboard</h1>
      <DataExport appData={appData} />
    </div>
  )
}
```

### Export Data Manually

```jsx
import { downloadAsJSON, downloadAsCSV } from '@utils/dataExport'

const myData = { name: 'test', value: 123 }

// Download as JSON
downloadAsJSON(myData, 'my-data.json')

// Download as CSV
downloadAsCSV(myData, 'my-data.csv')
```

---

## 🔄 User Flow

### Login with OAuth

```
User clicks "Continue with Google"
         ↓
Redirected to Google login
         ↓
User authenticates
         ↓
Redirected back to /oauth-callback
         ↓
Token exchanged for user data
         ↓
Session created
         ↓
Redirect to /dashboard
```

### Export Data

```
User in dashboard
         ↓
Clicks "Export Data"
         ↓
Selects format (JSON/CSV)
         ↓
Selects location (Local/Google Drive/OneDrive)
         ↓
Data exported to selected location
         ↓
File created successfully
```

---

## 🧪 Testing Checklist

- [ ] Google OAuth login works
- [ ] Microsoft OAuth login works
- [ ] Sessions persist after OAuth login
- [ ] Logout clears session
- [ ] Export to local device works
- [ ] Export to Google Drive works (with Google login)
- [ ] Export to OneDrive works (with Microsoft login)
- [ ] Data format is correct (JSON/CSV)
- [ ] Error messages display properly

---

## 📊 Session Data After OAuth

```javascript
{
  id: "user-id-from-provider",
  email: "user@gmail.com",
  displayName: "User Name",
  fullName: "User Name",
  picture: "https://...",           // Google only
  provider: "google",               // or "microsoft"
  sessionToken: "session_xxx",
  loginTime: "2024-01-11T..."
}
```

---

## 🔐 Security Notes

✅ Uses OAuth 2.0 standard  
✅ Tokens stored in sessionStorage (auto-cleared)  
✅ No data stored on server  
✅ User data in user's cloud storage  

⚠️ Use HTTPS in production  
⚠️ Keep client secrets safe  
⚠️ Implement token refresh for long sessions  

---

## 🐛 Common Issues

**"Cannot find module '@components/OAuthButtons'"**
- Check file path in import
- Restart dev server

**"OAuth credentials not found"**
- Check `.env` file exists
- Verify environment variables
- Restart dev server

**"Redirect URI mismatch"**
- Update OAuth provider settings
- Match the exact redirect URL

**"Access token expired"**
- Refresh token needed
- Implement token refresh in backend

---

## 📚 Full Documentation

- [OAUTH_DATA_EXPORT_SETUP.md](./OAUTH_DATA_EXPORT_SETUP.md) - Complete setup guide
- [AUTH_SYSTEM.md](./frontend/AUTH_SYSTEM.md) - Authentication details
- [AUTH_CODE_EXAMPLES.md](./AUTH_CODE_EXAMPLES.md) - More code examples

---

## ✨ Features Summary

| Feature | Status | Notes |
|---------|--------|-------|
| Google OAuth | ✅ | Requires Client ID |
| Microsoft OAuth | ✅ | Requires Client ID |
| Email/Password | ✅ | Still available |
| Download JSON | ✅ | Local storage |
| Download CSV | ✅ | Local storage |
| Google Drive | ✅ | With Google auth |
| OneDrive | ✅ | With Microsoft auth |
| Session Management | ✅ | sessionStorage |
| Route Protection | ✅ | Protected routes |
| Logout | ✅ | Clear session |

---

**Ready to go! 🚀**

1. Get OAuth credentials
2. Create `.env` file
3. Run `npm run dev`
4. Test OAuth login
5. Test data export
