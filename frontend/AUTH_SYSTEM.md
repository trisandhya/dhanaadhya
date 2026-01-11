# Session-Based Authentication System

## Overview

This application uses a **session-only authentication system** with **no persistent storage**. User data is stored exclusively in `sessionStorage`, which means:

- ✅ Sessions are cleared when the browser tab closes
- ✅ Sessions are cleared on page refresh
- ✅ No data persists across browser sessions
- ✅ No database or backend storage required
- ✅ Complete session isolation

## Architecture

### Components

#### 1. **AuthContext** (`src/store/AuthContext.jsx`)
Central authentication state management using React Context API.

**Features:**
- `register(userData)` - Creates a new session-based user
- `login(email, password)` - Authenticates user and creates session
- `logout()` - Clears session data
- `isAuthenticated()` - Checks if user is logged in
- `user` - Current user object (null if not authenticated)

**Session Data Structure:**
```javascript
{
  id: "unique-user-id",
  fullName: "User Name",        // From registration
  businessName: "Business Name", // From registration
  businessType: "category-id",  // From registration
  email: "user@example.com",
  displayName: "username",      // From email or full name
  sessionToken: "session_xxx",  // Unique session identifier
  createdAt: "2024-01-11T...",
  loginTime: "2024-01-11T..."
}
```

#### 2. **ProtectedRoute** (`src/components/ProtectedRoute.jsx`)
Route guard component that ensures only authenticated users can access protected pages.

**Behavior:**
- Redirects unauthenticated users to `/login`
- Shows loading spinner during auth initialization
- Automatically checks session validity

#### 3. **Updated Pages**

**LoginPage** (`src/pages/LoginPage.jsx`)
- Uses `useAuth()` hook for authentication
- Accepts email and password
- Demo credentials: `raj@msme.com` / `demo123`
- Creates session on successful login

**RegistrationPage** (`src/pages/RegistrationPage.jsx`)
- Uses `useAuth()` hook for registration
- Collects: Full Name, Business Name, Business Type, Email, Password
- Validates form data before registration
- Creates session on successful registration

**Navigation Bar** (`src/components/Navigation.jsx`)
- Displays current user name from session
- Logout button clears session and redirects to login
- Dynamic display of user information

#### 4. **App Router** (`src/App.jsx`)
- Wraps entire app with `AuthProvider`
- Protected routes use `ProtectedRoute` wrapper
- Public routes (Home, Login, Register) are accessible without authentication

## Usage

### Authentication Flow

#### Registration
```
User → Registration Page → Fill Form → Register Button
  → AuthContext.register() → Store in sessionStorage → Redirect to Dashboard
```

#### Login
```
User → Login Page → Enter Credentials → Sign In Button
  → AuthContext.login() → Store in sessionStorage → Redirect to Dashboard
```

#### Logout
```
User → Click Logout → AuthContext.logout()
  → Clear sessionStorage → Redirect to Login
```

#### Protected Access
```
User → Try to access /dashboard → ProtectedRoute checks
  → If authenticated: Show page
  → If not authenticated: Redirect to /login
```

## Using the useAuth Hook

In any component, use the `useAuth()` hook to access authentication:

```jsx
import { useAuth } from '@store/AuthContext'

export default function MyComponent() {
  const { user, login, logout, isAuthenticated } = useAuth()

  if (isAuthenticated()) {
    return <p>Welcome, {user.fullName}!</p>
  }

  return <p>Please log in</p>
}
```

## Protected Routes

Protected routes require authentication. Accessing them without a valid session will redirect to login:

- `/dashboard`
- `/simulation`
- `/analytics`
- `/focus-guide`
- `/profile`

Public routes don't require authentication:
- `/` (Home)
- `/login`
- `/register`

## Session Storage Details

### Storage Location
Data is stored in browser's `sessionStorage`:
- **Cleared when:** Browser tab closes, page is refreshed (depending on browser), or `logout()` is called
- **Not stored:** LocalStorage, Cookies, Backend Database

### Session Initialization
On app load, `AuthContext` checks for existing session:
1. Queries `sessionStorage` for user data
2. Restores session if found
3. Shows loading spinner while checking
4. Allows immediate access if valid session exists

### Logout Behavior
```javascript
const handleLogout = () => {
  logout()                    // Clears sessionStorage
  navigate('/login')          // Redirects to login page
}
```

## Development Notes

### Adding New Protected Pages
1. Create page component in `src/pages/`
2. Add route in `App.jsx` wrapped with `ProtectedRoute`:
```jsx
<Route path="/new-page" element={
  <ProtectedRoute>
    <>
      <Navbar />
      <main className="flex-1"><NewPage /></main>
      <Footer />
    </>
  </ProtectedRoute>
} />
```

### Accessing Current User
In any component:
```jsx
const { user } = useAuth()
console.log(user.fullName)
console.log(user.email)
console.log(user.businessName)
```

### Custom Authentication Logic
Extend `AuthContext.jsx` to add features:
- Email validation
- Password requirements
- Session timeout
- Role-based access control

## Browser Compatibility

Works in all modern browsers that support:
- `sessionStorage` API
- React 18+
- React Router v6+
- Context API

## Important: No Persistent Storage

⚠️ **This system does not persist data:**
- Closing the browser/tab logs out the user
- Page refresh starts a new session
- No user data survives browser restart
- Perfect for demos, prototypes, and development
- Not suitable for production without a backend

## Future Enhancements

To make this production-ready, consider:
1. Adding backend API integration
2. Implementing JWT tokens
3. Adding persistent storage (database)
4. Implementing refresh tokens
5. Adding role-based access control (RBAC)
6. Adding multi-factor authentication (MFA)
7. Adding session timeout/expiry
