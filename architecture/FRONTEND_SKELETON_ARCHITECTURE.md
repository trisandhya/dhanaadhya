# Frontend Architecture - Component Structure

## Overview
Skeleton frontend architecture for Dhanaadhya MSME simulation platform (no backend, client-side simulation). Built with React, featuring responsive UI with modular components.

---

## 1. APP SHELL & ROUTING

### App.jsx (Entry Point)
- Authentication guard
- Route management
- Theme provider
- Global notifications

### Routes
```
/                    → Landing Page (pre-auth)
/auth/login          → Login
/auth/register       → Register
/onboarding          → Onboarding wizard (business selection)
/dashboard           → Main dashboard (hub)
/simulation          → Business simulation arena
/analytics           → Analytics & reports
/profile             → User profile & settings
```

---

## 2. MAIN ROUTES STRUCTURE

### Landing Page Component
```
LandingPage/
├── Hero (60-second demo video)
├── Value Proposition (Problems solved)
├── 10 Business Types Showcase
├── Competitive Comparison
├── CTA Button (Get Started)
└── FAQ Section
```

### Authentication Route
```
AuthPage/
├── Login (Email + Password)
├── Register (Email, Password, Name)
├── Remember Me
├── Forgot Password Link
└── Social Auth Placeholders
```

### Onboarding Route
```
OnboardingFlow/
├── Step 1: Business Type Selection
│   └── Grid/Carousel of 10 business types with descriptions
├── Step 2: Location Select
│   └── State + City selector
├── Step 3: Capital Allocation
│   └── Slider to choose starting capital (₹1L - ₹5L)
├── Step 4: Difficulty Level
│   └── Easy / Medium / Hard mode selection
├── Step 5: Confirmation
│   └── Summary before starting
└── Complete: Redirect to Dashboard
```

---

## 3. DASHBOARD (Main Hub)

### Layout Structure
```
Dashboard/
├── Header
│   ├── Logo + App Title
│   ├── Business Name Display (active simulation)
│   ├── Day/Week/Month Indicator
│   ├── User Avatar
│   └── Logout Button
├── Sidebar Navigation
│   ├── Dashboard (home icon)
│   ├── Simulation (game icon)
│   ├── Analytics (chart icon)
│   ├── Goals & Milestones (target icon)
│   ├── Profile (settings icon)
│   └── Help (question icon)
└── Main Content Grid
    ├── Row 1: Health Score Card + Alerts Panel
    ├── Row 2: Key Metrics (4 columns: Revenue, Cash, Inventory, Margin)
    ├── Row 3: Today's Focus Guide Card
    ├── Row 4: 4-Week Forecast + Recommendations
    ├── Row 5: Profitability Goals Progress
    └── Row 6: Quick Links to Simulation
```

### Dashboard Components

#### BusinessHealthScore Component
```
Props: { businessType, metrics, simDay }
Display:
├── Circular progress (1-10 scale)
├── Health status (Excellent/Good/Fair/Poor)
├── Key health indicators (3-5 critical areas)
└── Quick diagnosis tooltip
```

#### MetricsGrid Component
```
Props: { metrics: {revenue, cash, inventory, margin} }
Display:
├── Card 1: Revenue (₹X + trend ↑/↓)
├── Card 2: Cash Position (₹X + color coding)
├── Card 3: Inventory Value (₹X + low/medium/high status)
└── Card 4: Gross Margin (X% + benchmark comparison)
```

#### AlertsPanel Component
```
Props: { alerts: [] }
Display:
├── Critical Alerts (red) - high priority
├── Warning Alerts (yellow) - medium priority
├── Info Alerts (blue) - informational
└── Alert action buttons (Dismiss, Take Action)
```

#### ForecastCard Component
```
Props: { forecastData: {} }
Display:
├── 4-week projection line chart
├── Scenario buttons (Base, Optimistic, Pessimistic)
├── Key scenario details tooltip
└── Export forecast button
```

#### TodaysFocusGuide Component
```
Props: { dailyTasks: [] }
Display:
├── "Today's Priority Tasks" header
├── Checklist (3-5 tasks with checkboxes)
├── Time estimate (5-15 min total)
├── "Deep Dive" link to Focus Guide module
└── Habit streak badge
```

#### GoalsProgressCard Component
```
Props: { goals: [], milestones: [] }
Display:
├── Primary goal progress bar
├── Milestone timeline (M1, M3, M6, M12)
├── Current vs target comparison
└── Link to full Goals view
```

---

## 4. SIMULATION ARENA (Main Gameplay)

### Layout Structure
```
SimulationView/
├── Header
│   ├── Time Control (Play, Pause, Speed: 1x, 2x, 4x)
│   ├── Current Day/Week/Month display
│   ├── Game status (Running/Paused)
│   └── Reset/Quit buttons
├── Tab Navigation (4 main tabs)
│   ├── Operations
│   ├── Market
│   ├── Finance
│   └── Tax
└── Tab Content (dynamic based on selected tab)
```

### Tab 1: Operations
```
OperationsTab/
├── Inventory Manager
│   ├── Stock table (Item, Qty, Reorder Level, Status)
│   ├── Reorder button
│   ├── Delivery timeline (when stock arrives)
│   └── Low stock warnings
├── Employee Panel
│   ├── Hired staff list (Name, Role, Salary, Productivity)
│   ├── Hire button (modal selector)
│   ├── Fire button
│   └── Salary cost impact
├── Order Queue
│   ├── Incoming orders (Customer, Item, Qty, Status)
│   ├── Processing/Completed tabs
│   ├── Mark as complete buttons
│   └── Order fulfillment time display
└── Notes/Events Log
    └── Activity feed of business events
```

### Tab 2: Market
```
MarketTab/
├── Price Chart (commodity prices real-time)
│   ├── Line chart (7-day prices)
│   ├── Buy/Sell price indicators
│   ├── Price volatility percentage
│   └── Seasonality annotations
├── Competitor Activity
│   ├── Competitor list with prices
│   ├── Competitor price changes
│   ├── Market share comparison
│   └── Your market position
├── Customer Demand Graph
│   ├── Demand trend line (increasing/decreasing)
│   ├── Peak hours/seasons
│   ├── Elasticity (demand vs price change)
│   └── Customer count
└── Market News Feed
    ├── Simulated market events
    ├── Seasonal announcements
    └── Competitor moves
```

### Tab 3: Finance
```
FinanceTab/
├── Income Statement
│   ├── Time period selector (Day/Week/Month/Year)
│   ├── Revenue breakdown (by product/service)
│   ├── COGS (cost of goods sold)
│   ├── Gross Profit & Margin %
│   ├── Operating Expenses breakdown
│   ├── Net Profit & Margin %
│   └── Comparison to targets (color coded)
├── Expense Breakdown (Pie Chart)
│   ├── Segments: Rent, Staff, Utilities, Goods, Other
│   ├── % of total expenses
│   └── Comparison to revenue
├── Cash Flow Timeline
│   ├── Cash position over time (line chart)
│   ├── Cash in/out transactions
│   ├── Projected runway (days of cash)
│   └── Break-even projection date
└── Financial Health Score
    ├── Profitability trend
    ├── Cash health
    └── Debt-to-income ratio
```

### Tab 4: Tax
```
TaxTab/
├── Tax Calculator
│   ├── Current turnover (YTD)
│   ├── GST Rate (by business type)
│   ├── GST Liability (monthly/quarterly)
│   ├── Income Tax estimate
│   ├── Professional tax
│   └── Total tax liability
├── Tax Calendar
│   ├── GST filing dates (with countdown)
│   ├── Income tax due dates
│   ├── License renewal dates
│   ├── Professional tax payment dates
│   └── Reminders/notifications
├── Tax Scenarios
│   ├── "What if I cross ₹20L turnover?" simulator
│   ├── Tax implication changes
│   └── Compliance requirement changes
└── Compliance Checklist
    ├── GST registration (✓/✗)
    ├── Business license (✓/✗)
    ├── Professional licenses
    └── Tax filing status
```

---

## 5. FOCUS GUIDE MODULE

### Daily Checklist View
```
DailyChecklist/
├── Header
│   ├── "Today's Priority Tasks"
│   ├── Time estimate (5-15 min)
│   └── Streak counter (consecutive days completed)
├── Task List
│   ├── Checkbox + Task Title (e.g., "Reconcile Cash Box")
│   ├── Why? (tooltip explaining importance)
│   ├── Est. time (5 min)
│   └── Habit streak (this is day X of building this habit)
├── "Mark All Complete" button
└── Reward notification when completed
```

### Weekly Deep Dive
```
WeeklyReview/
├── "This Week's Performance" summary
│   ├── Revenue vs target
│   ├── Top 3 business areas (good/bad)
│   └── Key decisions made
├── "Learn This Week" section
│   ├── Business concept lesson (5-10 min read)
│   ├── Real MSME owner tips
│   └── Common mistakes
├── "Plan Next Week" section
│   ├── Set goals for next week
│   ├── Identify problem areas
│   └── Action items
└── Quiz/Reflection (optional)
```

### Monthly Strategy
```
MonthlyStrategy/
├── "Month in Review" dashboard
│   ├── Revenue vs target (bar chart)
│   ├── Profit trend
│   ├── Cash position progress
│   └── Goals progress
├── "Health Check" section
│   ├── Inventory management score
│   ├── Customer management score
│   ├── Financial discipline score
│   └── Overall business health
├── "Plan for Next Month"
│   ├── Revenue target
│   ├── Profit target
│   ├── Action items (top 3)
│   └── Risk mitigation
└── "Expert Insights"
    ├── How you're doing vs real MSMEs
    ├── Benchmark comparisons
    └── Personalized suggestions
```

### Habit Tracker
```
HabitTracker/
├── Habit streaks display
│   ├── "Login Streak" (consecutive days)
│   ├── "Daily Checklist Streak"
│   ├── "Weekly Review Streak"
│   └── "Smart Decisions Streak"
├── Badges earned
│   ├── 🏆 "First Cash Out" (first profit)
│   ├── 🏆 "Tax Master" (filed GST on time)
│   ├── 🏆 "Growth Hacker" (doubled revenue)
│   └── More...
├── Leaderboard (optional)
│   ├── Your rank among users
│   ├── Top performers this month
│   └── Share streak button
└── Unlocked Achievements
```

### Smart Nudges
```
Nudges/
├── Time-based reminders
│   ├── GST filing due in 5 days
│   ├── Inventory stock running low
│   ├── Credit overdue from customer
│   └── Weekly review due
├── Performance-based nudges
│   ├── "Your margin is below average"
│   ├── "You haven't done your daily checklist in 3 days"
│   └── "Demand is dropping, consider price adjustment"
├── Notification channels
│   ├── In-app popup
│   ├── Email
│   └── Browser notification
└── Frequency settings (user can customize)
```

---

## 6. PROFITABILITY GOALS & MILESTONES

### Goals Dashboard
```
GoalsDashboard/
├── Goals List
│   ├── Revenue Target (₹2.5L/month avg)
│   │   ├── Current: ₹2.1L
│   │   ├── Status: On track / Ahead / Behind
│   │   └── Progress bar
│   ├── Profit Target (₹9% net margin)
│   │   └── Current: 8.5%
│   ├── Loan Repayment Target
│   │   └── Current: ₹X repaid of ₹Y
│   ├── Customer Count Target
│   │   └── Current: X customers
│   └── More custom goals...
└── Goal Settings Button (edit targets)
```

### Milestone Timeline
```
MilestoneTimeline/
├── Milestone 1 (Month 1)
│   ├── Revenue: ₹1.5L (break-even)
│   ├── Status: ✓ Completed
│   └── Achieved on: Day 28
├── Milestone 2 (Month 3)
│   ├── Revenue: ₹2.0L
│   ├── Gross Margin: 23%
│   ├── Status: 🔄 In Progress
│   └── Days remaining: X
├── Milestone 3 (Month 6)
│   ├── Revenue: ₹2.5L
│   ├── Profit: ₹18K
│   ├── Status: ⏳ Upcoming
│   └── Target date: Day 180
└── Milestone 4 (Month 12)
    ├── Revenue: ₹30L annual (₹2.5L/month)
    ├── Profit: ₹2.7L (9%)
    └── Status: ⏳ Upcoming
```

### Benchmark Comparison
```
BenchmarkComparison/
├── Your Performance vs Average
│   ├── Revenue/month: You ₹2.1L vs Avg ₹2.0L ✓
│   ├── Gross Margin: You 23% vs Avg 24% ⚠️
│   ├── Net Margin: You 8.5% vs Avg 9% ⚠️
│   └── Cash Days: You 45 vs Avg 30 ✓
├── Your Performance vs Top Performers
│   ├── Revenue/month: You ₹2.1L vs Top ₹2.8L ⚠️
│   ├── Net Margin: You 8.5% vs Top 11%
│   └── Areas to improve...
└── What You're Doing Well
    ├── Cash management
    ├── Inventory control
    └── Recommendations for improvement
```

---

## 7. ANALYTICS VIEW

### Performance Summary
```
AnalyticsSummary/
├── Business Selection Dropdown
│   └── Compare different business types you've tried
├── Performance Metrics
│   ├── Total revenue (all simulations)
│   ├── Best profitability achieved
│   ├── Longest survival (days)
│   └── Average performance vs competitors
├── Key Learnings
│   └── What worked, what didn't
└── Comparison Chart (different business types side-by-side)
```

### Trend Charts
```
TrendCharts/
├── Revenue Trend (6-month history)
├── Profit Trend (6-month history)
├── Cash Position Trend
├── Margin Trend (Gross & Net)
├── Inventory Turnover
├── Customer Count Growth
└── Ability to compare multiple simulations overlay
```

### Business Type Comparison
```
BusinessComparison/
├── Side-by-side comparison table
│   ├── Revenue potential
│   ├── Complexity level
│   ├── Time to profitability
│   ├── Risk level
│   └── Your performance in each
├── Profitability chart
│   └── Revenue vs margin for each type
└── Try Next button (start new simulation)
```

### Learning Insights
```
LearningInsights/
├── Concepts Mastered
│   ├── Inventory Management (Score: 8/10)
│   ├── Cash Flow Planning (Score: 7/10)
│   ├── Pricing Strategy (Score: 6/10)
│   └── Tax Compliance (Score: 9/10)
├── Areas to Improve
│   ├── Customer Management
│   ├── Staff Productivity
│   └── Seasonal Forecasting
├── Business Acumen Score
│   └── Overall assessment (1-100)
└── Certificate (when ready to start real business)
```

---

## 8. MODALS & DIALOGS

### Business Type Selector Modal
```
BusinessTypeSelector/
├── Grid of 10 business types with cards
│   ├── Business image
│   ├── Business name
│   ├── Quick description (1 line)
│   ├── Complexity rating (⭐⭐)
│   └── Select button
├── Filters
│   ├── By complexity
│   ├── By income potential
│   └── By interest
└── Search bar
```

### What-If Scenario Builder Modal
```
ScenarioBuilder/
├── Select scenario parameter
│   ├── "What if I cut prices 10%?"
│   ├── "What if demand drops 20%?"
│   ├── "What if I hire 2 more staff?"
│   ├── "What if I double inventory?"
│   └── Custom parameter
├── Input field for value
├── "Calculate Impact" button
├── Results display
│   ├── Projected revenue change
│   ├── Profit impact
│   ├── Cash flow impact
│   └── Timeline (when you'll see the change)
└── "Apply" or "Cancel"
```

### Decision Point Dialog
```
DecisionDialog/
├── Scenario description
├── 2-3 decision options
│   ├── Option A (description + impact preview)
│   ├── Option B (description + impact preview)
│   └── Option C (show more info)
├── Consequence preview
│   ├── Short-term impact (next week)
│   ├── Long-term impact (next month)
│   └── Tax/compliance implications
└── Make Decision buttons
```

### Contextual Help Tooltips
```
HelpTooltips/
├── Hover over any metric
├── Shows definition + why it matters
├── Example: "Gross Margin"
│   ├── Definition: (Revenue - COGS) / Revenue
│   ├── Why it matters: Shows production efficiency
│   ├── Benchmark: 22-26% for Kirana stores
│   └── How to improve: Negotiate with suppliers
└── Link to detailed help articles
```

---

## 9. CLIENT STATE MANAGEMENT

### State Structure (using Redux/Zustand)
```javascript
{
  // Authentication
  auth: {
    user: { id, name, email },
    isAuthenticated: boolean,
    login_token: string (localStorage only)
  },
  
  // Business Setup
  business: {
    type: string (e.g., "kirana"),
    location: { state, city },
    startingCapital: number,
    difficultyLevel: "easy" | "medium" | "hard",
    startDate: date
  },
  
  // Simulation State
  simulation: {
    currentDay: number,
    currentMonth: number,
    isPaused: boolean,
    gameSpeed: 1 | 2 | 4,
    
    // Operations
    inventory: [{itemId, quantity, reorderLevel, ...}],
    employees: [{employeeId, name, role, salary, ...}],
    orders: [{orderId, customer, items, status, ...}],
    
    // Financial
    revenue: {daily: [], monthly: []},
    expenses: {daily: [], monthly: [], byCategory: {}},
    cash: number,
    creditGiven: [{customerId, amount, daysOverdue}],
    
    // Tax & Compliance
    taxLiability: {gst: number, incomeTax: number, ...},
    complianceCalendar: [{eventId, name, dueDate, ...}]
  },
  
  // Market State
  market: {
    prices: {[commodity]: {buy, sell, trend}},
    demand: {[product]: {trend, elasticity}},
    competitors: [{name, prices, activity}],
    seasonalityIndex: number
  },
  
  // Game Time
  gameTime: {
    dayOfWeek: string,
    dayOfMonth: number,
    month: string,
    year: number,
    simDaysPassed: number
  },
  
  // UI State
  ui: {
    activeTab: string,
    sidebarOpen: boolean,
    selectedMetrics: [],
    notificationQueue: [],
    modalsOpen: {}
  }
}
```

---

## 10. CLIENT STORAGE

### LocalStorage
```javascript
// Login persistence
localStorage.setItem('auth_token', token);
localStorage.setItem('user_email', email);

// User preferences
localStorage.setItem('ui_theme', 'light' | 'dark');
localStorage.setItem('ui_language', 'en' | 'hi');
localStorage.setItem('notifications_enabled', true);
localStorage.setItem('sidebar_collapsed', false);
```

### IndexedDB (for large datasets)
```javascript
// Simulation history
db.simulations.store({
  businessType: "kirana",
  startDate: date,
  endDate: date,
  finalRevenue: number,
  finalProfit: number,
  finalCash: number,
  dayLog: [{day, revenue, profit, cash, ...}]
});

// Market prices history
db.marketPrices.store({
  day: number,
  prices: {[commodity]: value}
});

// Transaction log
db.transactions.store({
  day: number,
  type: "purchase" | "sale" | "salary" | "tax",
  amount: number,
  category: string
});
```

---

## 11. UTILITY MODULES

### Tax Calculator Utility
```javascript
// tax-calculator.js
class TaxCalculator {
  calculateGST(turnover, businessType) {
    // Apply GST rates from config
    // Return GST liability
  }
  
  calculateIncomeTax(profit) {
    // Apply income tax slabs
  }
  
  calculateProfessionalTax(income, state) {
    // State-specific professional tax
  }
  
  getComplianceCalendar(businessType, state) {
    // Return dates for filing
  }
}
```

### Simulation Engine
```javascript
// simulation-engine.js
class SimulationEngine {
  // Core business logic (no backend)
  
  runDaySimulation(currentState) {
    // Calculate:
    // - Revenue from demand & inventory
    // - Expenses (staff, rent, utilities)
    // - Tax impact
    // - Market changes
    // - Customer interactions
    // Return new state
  }
  
  processMarketChange(seasonality, demand, prices) {
    // Simulate market volatility
  }
  
  calculateFinancials(transactions, inventory, employees) {
    // Income statement, cash flow, margins
  }
  
  checkMilestones(currentState) {
    // Return completed/pending/upcoming milestones
  }
}
```

### Data Visualization Utility
```javascript
// data-viz.js
import Chart from 'chart.js';

class DataViz {
  renderRevenueChart(data) { }
  renderCashFlowChart(data) { }
  renderPriceChart(data) { }
  renderMarginTrendChart(data) { }
  renderExpenseBreakdownPie(data) { }
  renderMilestoneTimeline(data) { }
}
```

### Notifications Utility
```javascript
// notifications.js
class NotificationManager {
  showToast(message, type) { }
  showAlert(title, message, buttons) { }
  scheduleReminder(alertType, delay) { }
  queueNotifications(batch) { }
  
  // Notification types
  ALERT_TYPES = {
    STOCK_LOW,
    GST_DUE,
    CREDIT_OVERDUE,
    CASH_CRITICAL,
    MARGIN_WARNING,
    // ...
  }
}
```

---

## 12. COMPONENT TREE SUMMARY

```
App
├── AppShell
│   ├── Header (Logo, Nav, User Menu)
│   ├── Sidebar Navigation
│   └── Router
│       ├── Landing Page
│       ├── Auth Pages
│       ├── Onboarding
│       ├── Dashboard
│       │   ├── Header
│       │   ├── Business Health Score
│       │   ├── Metrics Grid
│       │   ├── Alerts Panel
│       │   ├── Today's Focus Guide
│       │   ├── 4-Week Forecast
│       │   ├── Recommendations
│       │   └── Goals Progress
│       ├── Simulation Arena
│       │   ├── Time Controls
│       │   ├── Operations Tab
│       │   │   ├── Inventory Manager
│       │   │   ├── Employee Panel
│       │   │   └── Order Queue
│       │   ├── Market Tab
│       │   │   ├── Price Chart
│       │   │   ├── Competitor Activity
│       │   │   └── Demand Graph
│       │   ├── Finance Tab
│       │   │   ├── Income Statement
│       │   │   ├── Expense Breakdown
│       │   │   └── Cash Flow
│       │   └── Tax Tab
│       │       ├── Tax Calculator
│       │       ├── Tax Calendar
│       │       └── Compliance Checklist
│       ├── Focus Guide Module
│       │   ├── Daily Checklist
│       │   ├── Weekly Review
│       │   ├── Monthly Strategy
│       │   ├── Habit Tracker
│       │   └── Smart Nudges
│       ├── Goals & Milestones
│       │   ├── Goals List
│       │   ├── Milestone Timeline
│       │   ├── Benchmark Comparison
│       │   └── Progress Dashboard
│       ├── Analytics View
│       │   ├── Performance Summary
│       │   ├── Trend Charts
│       │   ├── Business Comparison
│       │   └── Learning Insights
│       └── Profile Settings
│
├── Modals Layer
│   ├── Business Type Selector
│   ├── What-If Scenario Builder
│   ├── Decision Point Dialog
│   └── Help Tooltips
│
└── State Management
    ├── Auth State
    ├── Business State
    ├── Simulation State
    ├── Market State
    ├── Game Time
    └── UI State
```

---

## 13. TECH STACK (Frontend Only)

### Framework & Libraries
- **React 18+** - Core framework
- **React Router v6** - URL routing
- **Redux Toolkit or Zustand** - State management
- **Chart.js / Recharts** - Data visualization
- **Tailwind CSS / Material-UI** - Styling
- **Axios** - HTTP (placeholder for future backend)
- **Date-fns** - Date utilities

### Development Tools
- **Vite** - Build tool (fast HMR)
- **Jest + React Testing Library** - Unit testing
- **Storybook** - Component documentation
- **ESLint + Prettier** - Code quality

### Storage & Persistence
- **LocalStorage** - Auth tokens, preferences
- **IndexedDB** - Large datasets (via dexie.js)

---

## 14. FILE STRUCTURE

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Card.jsx
│   │   └── Button.jsx
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Simulation.jsx
│   │   ├── Analytics.jsx
│   │   └── Profile.jsx
│   ├── dashboard/
│   │   ├── HealthScore.jsx
│   │   ├── MetricsGrid.jsx
│   │   ├── AlertsPanel.jsx
│   │   ├── ForecastCard.jsx
│   │   └── ...
│   ├── simulation/
│   │   ├── OperationsTab.jsx
│   │   ├── MarketTab.jsx
│   │   ├── FinanceTab.jsx
│   │   ├── TaxTab.jsx
│   │   └── ...
│   ├── focusGuide/
│   │   ├── DailyChecklist.jsx
│   │   ├── WeeklyReview.jsx
│   │   ├── HabitTracker.jsx
│   │   └── ...
│   ├── goals/
│   │   ├── GoalsDashboard.jsx
│   │   ├── MilestoneTimeline.jsx
│   │   └── ...
│   └── modals/
│       ├── BusinessTypeSelector.jsx
│       ├── ScenarioBuilder.jsx
│       └── ...
├── store/
│   ├── authSlice.js
│   ├── businessSlice.js
│   ├── simulationSlice.js
│   ├── marketSlice.js
│   ├── uiSlice.js
│   └── store.js
├── utils/
│   ├── taxCalculator.js
│   ├── simulationEngine.js
│   ├── dataViz.js
│   └── notifications.js
├── hooks/
│   ├── useSimulation.js
│   ├── useAuth.js
│   └── ...
├── constants/
│   ├── businessTypes.js
│   ├── taxRates.js
│   ├── alerts.js
│   └── ...
├── styles/
│   ├── globals.css
│   └── variables.css
├── App.jsx
└── main.jsx
```

---

## 15. KEY ADVANTAGES OF THIS ARCHITECTURE

✅ **No Backend Required** - All simulation logic runs in browser  
✅ **Offline-First** - Works completely offline after initial load  
✅ **Modular Components** - Easy to test, maintain, extend  
✅ **Scalable State** - IndexedDB handles large datasets  
✅ **Responsive Design** - Works on desktop, tablet, mobile  
✅ **Fast Performance** - Client-side calculation, no API latency  
✅ **Data Privacy** - All data stays on user's device  

---

## 16. FUTURE BACKEND INTEGRATION POINTS

When backend is added, these areas would sync:
- User account & authentication
- Simulation save/restore across devices
- Analytics aggregation
- Leaderboards & achievements
- Social features (sharing, collaboration)
- Premium subscription management
