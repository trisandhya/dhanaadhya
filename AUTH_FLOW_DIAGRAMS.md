# Authentication Flow Diagrams

## 1. Registration Flow

```
User Visits /register
         ↓
[Registration Form]
  - Full Name
  - Business Name
  - Business Type
  - Email
  - Password
  - Confirm Password
         ↓
   User Clicks Submit
         ↓
 Validation Check ----→ Error? → Show Error Message
         ↓                           ↑
       Valid                        ↓
         ↓                    (User Corrects Form)
 register() Called
         ↓
Create User Object:
{
  id, fullName, businessName,
  businessType, email,
  sessionToken, createdAt
}
         ↓
Store in sessionStorage
         ↓
Redirect to /dashboard
         ↓
[Dashboard Loads]
Navigation shows user name
```

## 2. Login Flow

```
User Visits /login
         ↓
[Login Form]
  - Email: raj@msme.com
  - Password: demo123
  - Business Type (optional)
         ↓
   User Clicks "Sign In"
         ↓
Validation Check ----→ Error? → Show Error Message
         ↓                           ↑
       Valid                        ↓
         ↓                    (User Retries)
 login() Called
         ↓
Create Session:
{
  id, email, displayName,
  sessionToken, loginTime
}
         ↓
Store in sessionStorage
         ↓
Redirect to /dashboard
         ↓
[Dashboard Loads]
Navigation shows user name
```

## 3. Protected Route Access Flow

```
User Tries to Access /dashboard
         ↓
Is user in sessionStorage? ----→ NO  → ProtectedRoute Checks Auth
         ↓                            ↓
        YES                     Redirect to /login
         ↓                            ↓
Set User State             User Sees Login Page
         ↓
ProtectedRoute Allows Access
         ↓
Render Protected Component
  [Dashboard Page]
  [Navbar with user info]
  [Footer]
```

## 4. Logout Flow

```
User Clicks Logout Button (in Navbar)
         ↓
handleLogout() Function Called
         ↓
logout() Method Called
  ├─ sessionStorage.clear()
  └─ setUser(null)
         ↓
Navigate to /login
         ↓
[Login Page Shows]
Session completely cleared
```

## 5. Session Persistence Flow

```
User Logged In on /dashboard
         ↓
User Presses F5 (Refresh Page)
         ↓
App Initializes
         ↓
AuthContext useEffect Runs
         ↓
Check sessionStorage for User
         ↓
User Found ----→ Parse JSON ----→ setUser(userData)
         ↓                               ↓
   Not Found                      Loading = false
         ↓                               ↓
  setUser(null)              Page Renders with User
         ↓
  Loading = false
         ↓
  Page Renders (User Still Logged In)
```

## 6. Session Lifecycle

```
Timeline: User Journey

[APP START]
    ↓
authContext.loading = true
    ↓
Check sessionStorage
    ↓
[USER ACTION 1: REGISTER]
    ↓
register() → sessionStorage.setItem()
    ↓
[USER ACTION 2: NAVIGATE PAGES]
    ↓
ProtectedRoute checks user (still in sessionStorage)
    ↓
Access granted
    ↓
[USER ACTION 3: REFRESH PAGE]
    ↓
AuthContext restores from sessionStorage
    ↓
User stays logged in
    ↓
[USER ACTION 4: LOGOUT]
    ↓
logout() → sessionStorage.clear()
    ↓
Session destroyed
    ↓
[USER ACTION 5: BROWSER CLOSES]
    ↓
Browser clears sessionStorage automatically
    ↓
[SESSION ENDS]
```

## 7. Component Architecture

```
┌─────────────────────────────────────┐
│           App.jsx                   │
│  (wrapped with AuthProvider)        │
└──────────────┬──────────────────────┘
               │
        ┌──────┴──────┐
        ↓             ↓
   [AuthContext]   [Routes]
   ├─ user         ├─ Public
   ├─ register()   │  ├─ /
   ├─ login()      │  ├─ /login
   ├─ logout()     │  └─ /register
   └─ isAuth()     │
                   └─ Protected
                      ├─ ProtectedRoute wrapper
                      │  ├─ /dashboard
                      │  ├─ /simulation
                      │  ├─ /analytics
                      │  ├─ /focus-guide
                      │  └─ /profile
                      │
                      └─ Navbar (with logout)
```

## 8. Storage Model

```
MEMORY (sessionStorage)
┌────────────────────────────────┐
│  Session Data                  │
│ ┌──────────────────────────┐  │
│ │ Key: "user"              │  │
│ │ Value: {                 │  │
│ │   id: string,            │  │
│ │   fullName: string,      │  │
│ │   businessName: string,  │  │
│ │   businessType: string,  │  │
│ │   email: string,         │  │
│ │   displayName: string,   │  │
│ │   sessionToken: string,  │  │
│ │   createdAt: ISO string, │  │
│ │   loginTime: ISO string  │  │
│ │ }                        │  │
│ └──────────────────────────┘  │
│                                │
│ Cleared When:                  │
│ ✓ User calls logout()          │
│ ✓ Browser tab closes           │
│ ✓ Browser is closed            │
│ ✓ Programmatically cleared     │
│                                │
│ NOT cleared on:                │
│ ✗ Page refresh                 │
│ ✗ Route navigation             │
│ ✗ App reload                   │
└────────────────────────────────┘
```

## 9. State Machine

```
      ┌─────────────┐
      │  CHECKING   │ (App loads, checking sessionStorage)
      └──────┬──────┘
             │
      ┌──────┴──────────────┐
      ↓                     ↓
  ┌──────────┐          ┌──────────┐
  │ LOGGED   │          │ NOT      │
  │ OUT      │          │ LOGGED   │
  │ (NULL)   │          │ OUT      │
  └──┬───────┘          └──┬───────┘
     │                     │
     │ register()          │ sessionStorage
     │ or login()          │ has data
     │                     │
     ├────────────┬────────┤
     │            │        │
     ↓            ↓        ↓
  ┌──────────┐ ┌──────────┐
  │ LOGGED   │ │ LOGGED   │
  │ IN       │ │ IN       │
  │ (data)   │ │ (data)   │
  └────┬─────┘ └────┬─────┘
       │            │
       │ logout()   │ logout()
       │ or close   │ or close
       │            │
       └─────┬──────┘
             │
             ↓
        ┌──────────┐
        │ LOGGED   │
        │ OUT      │
        │ (NULL)   │
        └──────────┘
```

## 10. Data Flow

```
User Input
    ↓
[LoginPage/RegistrationPage]
    ↓
useAuth() hook
    ↓
AuthContext.register() / AuthContext.login()
    ↓
sessionStorage.setItem('user', userData)
    ↓
setUser() updates React state
    ↓
Components Re-render
    ↓
[Dashboard shows user data]
    ↓
[User navigates routes]
    ↓
ProtectedRoute checks useAuth()
    ↓
Access granted (user data exists)
    ↓
[Page renders with data]
    ↓
User clicks logout
    ↓
sessionStorage.clear()
    ↓
setUser(null)
    ↓
React re-renders
    ↓
Navigate to /login
    ↓
[ProtectedRoute redirects]
```

## Legend

```
┌─────┐  = Component/Process
│     │
└─────┘

   ↓    = Data flow / Navigation
   ↑    = Return / Callback

  ...  = External action
   ?   = Conditional
```
