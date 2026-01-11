# Authentication Code Examples

## Example 1: Using Auth in a Component

```jsx
import { useAuth } from '@store/AuthContext'

export default function ProfileComponent() {
  const { user, isAuthenticated } = useAuth()

  if (!isAuthenticated()) {
    return <p>Please log in to view your profile</p>
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Business: {user.businessName}</p>
    </div>
  )
}
```

## Example 2: Creating a New Protected Page

```jsx
// Step 1: Create the page component
// src/pages/NewPage.jsx
export default function NewPage() {
  return <div>My Protected Page</div>
}

// Step 2: Add route to App.jsx
<Route path="/new-page" element={
  <ProtectedRoute>
    <>
      <Navbar />
      <main className="flex-1"><NewPage /></main>
      <Footer />
    </>
  </ProtectedRoute>
} />

// Users must be logged in to access /new-page
```

## Example 3: Custom Auth Hook

```jsx
// src/hooks/useAuthCheck.js
import { useAuth } from '@store/AuthContext'
import { useEffect, useState } from 'react'

export function useAuthCheck() {
  const { isAuthenticated } = useAuth()
  const [canAccess, setCanAccess] = useState(false)

  useEffect(() => {
    setCanAccess(isAuthenticated())
  }, [isAuthenticated])

  return canAccess
}

// Usage in component
import { useAuthCheck } from '@hooks/useAuthCheck'

export default function MyComponent() {
  const canAccess = useAuthCheck()
  
  return canAccess ? <div>Protected Content</div> : <div>Access Denied</div>
}
```

## Example 4: Conditional Rendering Based on Auth

```jsx
import { useAuth } from '@store/AuthContext'

export default function App() {
  const { user, isAuthenticated } = useAuth()

  return (
    <div>
      {isAuthenticated() ? (
        <>
          <h1>Welcome, {user.fullName}!</h1>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  )
}
```

## Example 5: Form with Auth Integration

```jsx
import { useAuth } from '@store/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function CheckoutForm() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Use user data in form submission
    const data = {
      userId: user.id,
      email: user.email,
      // ... form fields
    }

    // Process form
    // ...

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" defaultValue={user.email} disabled />
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : 'Checkout'}
      </button>
    </form>
  )
}
```

## Example 6: Authentication Context Methods

```jsx
import { useAuth } from '@store/AuthContext'

export default function AuthDemo() {
  const { user, login, register, logout, isAuthenticated } = useAuth()

  // LOGIN EXAMPLE
  const handleLogin = async () => {
    try {
      login('user@example.com', 'password123')
      console.log('Login successful!')
      // User is now authenticated
    } catch (error) {
      console.error('Login failed:', error.message)
    }
  }

  // REGISTER EXAMPLE
  const handleRegister = async () => {
    try {
      register({
        fullName: 'John Doe',
        businessName: 'My Business',
        businessType: 'retail',
        email: 'john@example.com',
        password: 'secure123'
      })
      console.log('Registration successful!')
      // User is now authenticated
    } catch (error) {
      console.error('Registration failed:', error.message)
    }
  }

  // LOGOUT EXAMPLE
  const handleLogout = () => {
    logout()
    console.log('Logged out!')
    // User is no longer authenticated
    // Navigate to login page
  }

  // CHECK AUTH STATUS
  const handleCheckAuth = () => {
    if (isAuthenticated()) {
      console.log('User is logged in:', user)
    } else {
      console.log('User is not logged in')
    }
  }

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleRegister}>Register</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleCheckAuth}>Check Auth</button>
    </div>
  )
}
```

## Example 7: User Data Access

```jsx
import { useAuth } from '@store/AuthContext'

export default function UserDataExample() {
  const { user } = useAuth()

  if (!user) {
    return <p>Not logged in</p>
  }

  // From Registration
  const { fullName, businessName, businessType } = user

  // From Login
  const { email, displayName } = user

  // Session Info
  const { sessionToken, createdAt, loginTime, id } = user

  return (
    <div>
      <h2>User Information</h2>
      <ul>
        <li>ID: {id}</li>
        <li>Full Name: {fullName || 'N/A'}</li>
        <li>Email: {email}</li>
        <li>Business Name: {businessName || 'N/A'}</li>
        <li>Business Type: {businessType || 'N/A'}</li>
        <li>Display Name: {displayName}</li>
        <li>Session Token: {sessionToken}</li>
        <li>Created: {createdAt}</li>
        <li>Login Time: {loginTime}</li>
      </ul>
    </div>
  )
}
```

## Example 8: Testing Auth in Browser Console

```javascript
// Test 1: Check if user exists in sessionStorage
const user = sessionStorage.getItem('user')
console.log('User session:', user)

// Test 2: Manually clear session (simulate logout)
sessionStorage.clear()
console.log('Session cleared - user should be logged out')

// Test 3: Parse user object
const userObj = JSON.parse(sessionStorage.getItem('user'))
console.log('User object:', userObj)

// Test 4: Check specific user properties
console.log('User email:', userObj.email)
console.log('User name:', userObj.fullName || userObj.displayName)

// Test 5: Verify session token
console.log('Session token:', userObj.sessionToken)
```

## Example 9: Custom Login Component

```jsx
import { useAuth } from '@store/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export default function CustomLoginForm() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      // Validate inputs
      if (!email || !password) {
        throw new Error('Email and password are required')
      }

      // Attempt login
      login(email, password)

      // On success, redirect to dashboard
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  )
}
```

## Example 10: Protecting API Calls with Auth

```jsx
import { useAuth } from '@store/AuthContext'
import { useEffect, useState } from 'react'

export default function DataComponent() {
  const { user, isAuthenticated } = useAuth()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated()) {
      console.log('User not authenticated, skipping API call')
      return
    }

    fetchData()
  }, [isAuthenticated()])

  const fetchData = async () => {
    setLoading(true)
    try {
      // In real app, you'd use the session token here
      const response = await fetch('/api/data', {
        headers: {
          'Authorization': `Bearer ${user.sessionToken}`,
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }

      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isAuthenticated()) {
    return <p>Please log in to view this content</p>
  }

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <p>User: {user.fullName || user.email}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
```

## Example 11: Session Timeout (Optional Enhancement)

```jsx
import { useAuth } from '@store/AuthContext'
import { useEffect } from 'react'

const SESSION_TIMEOUT_MS = 30 * 60 * 1000 // 30 minutes

export function useSessionTimeout() {
  const { logout, isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated()) return

    let timeoutId

    const resetTimeout = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        logout()
        window.location.href = '/login'
      }, SESSION_TIMEOUT_MS)
    }

    // Reset on user activity
    window.addEventListener('click', resetTimeout)
    window.addEventListener('keypress', resetTimeout)

    resetTimeout()

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('click', resetTimeout)
      window.removeEventListener('keypress', resetTimeout)
    }
  }, [isAuthenticated(), logout])
}

// Usage in App or main component
export default function App() {
  useSessionTimeout() // Activate session timeout
  // ... rest of component
}
```

## Example 12: Debugging Auth Issues

```jsx
// Create this debug component
import { useAuth } from '@store/AuthContext'

export function AuthDebug() {
  const { user, isAuthenticated, loading } = useAuth()

  return (
    <div style={{
      position: 'fixed',
      bottom: 10,
      right: 10,
      background: '#f0f0f0',
      padding: '10px',
      fontSize: '12px',
      maxWidth: '300px',
      border: '1px solid #ccc',
      borderRadius: '4px'
    }}>
      <h4 style={{ margin: 0 }}>Auth Debug</h4>
      <p>Loading: {loading ? 'true' : 'false'}</p>
      <p>Authenticated: {isAuthenticated() ? 'true' : 'false'}</p>
      <p>User ID: {user?.id || 'none'}</p>
      <p>Email: {user?.email || 'none'}</p>
      <details>
        <summary>Full User Object</summary>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </details>
    </div>
  )
}

// Add to App.jsx during development
<AuthDebug />
```

---

These examples cover the most common use cases for the session-based authentication system. Adapt them to your specific needs!
