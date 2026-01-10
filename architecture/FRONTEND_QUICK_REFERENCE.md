# Frontend Architecture - Quick Reference

## Project: Dhanaadhya MSME Simulation Platform
**Date**: January 10, 2026  
**Status**: ✅ Frontend Skeleton Architecture Complete (No Backend)

---

## 📊 Architecture Files Generated

### Visual Diagrams
- `frontend_architecture.dot` - GraphViz source (10 KB)
- `frontend_architecture.svg` - Scalable vector graphic (76 KB) - **for web/interactive use**
- `frontend_architecture.png` - Static raster image (276 KB) - **for presentations**

### Documentation
- `FRONTEND_SKELETON_ARCHITECTURE.md` - Complete 16-section component guide

---

## 🏗️ Architecture Layers (10 Layers)

### Layer 0: App Shell & Routing
- Authentication guard
- Route management
- Theme provider

### Layer 1: Main Routes
- Landing → Auth → Onboarding → Dashboard → Simulation → Analytics → Profile

### Layer 2: Dashboard Components (7 Cards)
- Business Health Score
- Key Metrics (Revenue, Cash, Inventory, Margin)
- Alerts Panel
- 4-Week Forecast
- Recommendations
- Today's Focus Guide
- Goals Progress

### Layer 3: Simulation Components (4 Tabs)
**Operations Tab**: Inventory, Employees, Orders  
**Market Tab**: Prices, Competitors, Demand  
**Finance Tab**: Income Statement, Expenses, Cash Flow  
**Tax Tab**: Tax Calculator, Calendar, Compliance

### Layer 4: Focus Guide (Daily Coach)
- Daily Checklist (3-5 tasks, 5-15 min)
- Weekly Deep Dive (60-min review)
- Monthly Strategy (planning)
- Habit Tracker (streaks, badges)
- Smart Nudges (reminders)

### Layer 5: Goals & Milestones
- Auto-generated goals per business type
- 4 milestone phases (M1→M3→M6→M12)
- Benchmark comparison
- Progress dashboard

### Layer 6: Analytics View
- Performance summary
- Trend charts (6-month)
- Business comparison
- Learning insights

### Layer 7: Modals & Dialogs
- Business type selector
- What-if scenario builder
- Decision point dialogs
- Contextual help tooltips

### Layer 8: Client State Management
```
Auth State
Business State (type, location, capital)
Simulation State (inventory, orders, cash)
Market State (prices, demand)
Game Time (day/week/month)
UI State (tabs, modals, sidebar)
```

### Layer 9: Client Storage
- **LocalStorage**: Auth tokens, user preferences
- **IndexedDB**: Large datasets (simulation history, transactions)

### Layer 10: Utilities
- Tax Calculator (GST, Income Tax, Professional Tax)
- Simulation Engine (core business logic)
- Data Visualization (charts, graphs)
- Notifications (alerts, reminders)

---

## 🎮 User Experience Flow

```
Landing Page
    ↓
Login/Register
    ↓
Onboarding Wizard
├─ Step 1: Pick business type (10 options)
├─ Step 2: Select location
├─ Step 3: Set starting capital (₹1L-₹5L)
├─ Step 4: Difficulty level (Easy/Medium/Hard)
└─ Step 5: Confirm
    ↓
Dashboard (Main Hub)
├─ Quick metrics overview
├─ Daily focus guide
├─ Profitability goals
└─ Enter Simulation
    ↓
Simulation Arena (Gameplay)
├─ Day-by-day simulation
├─ 4 tabs: Operations, Market, Finance, Tax
├─ Make decisions, see consequences
└─ Check progress vs goals
    ↓
Weekly Review
├─ Performance vs targets
├─ Lessons learned
└─ Plan next week
    ↓
Monthly Strategy
├─ Deep health check
├─ Goal progress
└─ Expert insights
    ↓
Graduation (12 months)
├─ Summary report
├─ Learning insights
└─ Try another business type
```

---

## 💡 Key Features (No Backend Required)

✅ **Complete Offline** - All simulation runs in browser using IndexedDB  
✅ **10 Business Types** - Kirana, Clothing, Food, Salon, Repair, etc.  
✅ **Real Tax Calculation** - GST rates from gov.in (hardcoded in config)  
✅ **Real Market Data** - Prices from commodity APIs (pre-loaded)  
✅ **Decision Consequences** - What-if scenarios with impact calculation  
✅ **Progress Tracking** - Milestones, habits, achievements  
✅ **Daily Coaching** - Focus guide with smart nudges  
✅ **Goal Management** - Auto-generated targets + benchmarks  

---

## 📱 Responsive Design

| Device | Layout | Status |
|--------|--------|--------|
| Desktop (1024px+) | Full dashboard with sidebar | ✓ Primary target |
| Tablet (768px) | Compact layout, collapsible sidebar | ✓ Supported |
| Mobile (320px) | Stack layout, mobile-optimized tabs | ✓ Supported |

---

## 🛠️ Tech Stack (Frontend Only)

**Core**
- React 18+ (UI framework)
- React Router v6 (routing)
- Redux Toolkit or Zustand (state management)

**Data Viz**
- Chart.js or Recharts (charts, graphs)
- D3.js (optional, for advanced visualizations)

**Styling**
- Tailwind CSS or Material-UI

**Storage**
- LocalStorage (auth, preferences)
- IndexedDB via dexie.js (large datasets)

**Dev Tools**
- Vite (build, hot reload)
- Jest + React Testing Library (testing)
- Storybook (component library)

---

## 📂 File Structure

```
src/
├── components/
│   ├── common/          (Header, Sidebar, Card, Button)
│   ├── pages/           (Landing, Dashboard, Simulation, Analytics)
│   ├── dashboard/       (HealthScore, Metrics, Alerts, Forecast)
│   ├── simulation/      (Tabs: Operations, Market, Finance, Tax)
│   ├── focusGuide/      (Daily, Weekly, Monthly, Habits)
│   ├── goals/           (Goals, Milestones, Benchmarks)
│   └── modals/          (Selectors, Builders, Dialogs)
├── store/               (Redux slices)
├── utils/               (Tax, Simulation, DataViz, Notifications)
├── hooks/               (Custom React hooks)
├── constants/           (Business types, Tax rates, Alerts)
├── styles/              (Global CSS, Variables)
├── App.jsx
└── main.jsx
```

---

## 🎯 Simulation Engine (Core Logic - No Backend)

All business simulation happens in the browser:

```javascript
// Pseudocode
function runDaySimulation(currentState) {
  // 1. Calculate daily revenue from inventory × demand
  const revenue = calculateRevenue(inventory, demand);
  
  // 2. Calculate daily expenses (staff, rent, utilities)
  const expenses = calculateExpenses(employees, rent, utilities);
  
  // 3. Process tax impact (GST on sales, etc)
  const taxLiability = calculateTax(revenue);
  
  // 4. Update market (prices, demand, competitors)
  updateMarket(seasonality);
  
  // 5. Process customer credit (tracking overdue)
  processCredit(creditGiven);
  
  // 6. Update cash position
  updateCash(revenue - expenses - taxLiability);
  
  // 7. Check milestones
  checkMilestones();
  
  // 8. Generate alerts/nudges
  generateAlerts();
  
  return newState;
}
```

---

## 🔄 State Flow Example

```
User Action: Reorder Inventory
    ↓
Component dispatches action: reorderInventory({itemId, quantity})
    ↓
Redux reducer updates state:
    - inventory[itemId].quantity increases
    - cash decreases
    - reorderInProgress = true
    ↓
Simulation engine runs delivery logic:
    - After N days, inventory status changes to "arrived"
    - reorderInProgress = false
    ↓
UI re-renders with new inventory status
    ↓
Alert generated if stock was low (nudge to reorder sooner next time)
```

---

## 🔐 Data Persistence

### Session Data (IndexedDB)
```
simulations/
├── businessType
├── startDate
├── dayLog: [{day, revenue, cash, inventory, ...}]
└── finalResults

marketPrices/
├── day
└── prices: {commodity: value}

transactions/
├── day
├── type (purchase/sale/salary/tax)
├── amount
└── category
```

### User Preferences (LocalStorage)
```
auth_token
user_email
ui_theme (light/dark)
ui_language (en/hi)
notifications_enabled
sidebar_collapsed
```

---

## 🎓 Key Learnings (User's Perspective)

After playing dhanaadhya for 12 months, users learn:

1. **Daily Operations**: How to manage inventory, staff, customer credit daily
2. **Weekly Discipline**: Weekly reviews to catch problems early
3. **Monthly Planning**: Strategic thinking on goals and adjustments
4. **Tax Awareness**: What taxes apply, when they're due, impact on cash
5. **Financial Discipline**: Revenue ≠ Profit, importance of margins
6. **Seasonal Planning**: How seasons affect demand and pricing
7. **Decision Consequences**: See real impact of pricing, inventory changes
8. **Benchmarking**: Compare against real MSME data + peers

---

## 🚀 Migration to Backend (Future)

When backend is added:
1. Move simulation state to server (optional: keep local for offline play)
2. Add user sync across devices
3. Add leaderboards, social features
4. Add premium features (advanced analytics, expert consultations)
5. Add data aggregation for public benchmarks

**No UI changes needed** - State management layer abstracts this transition.

---

## ✅ Checklist: Frontend Ready to Build

- ✓ Architecture documented (10 layers)
- ✓ Component structure defined
- ✓ Routing mapped
- ✓ State management designed
- ✓ Storage strategy defined
- ✓ Tax calculations planned (hardcoded rates)
- ✓ Simulation engine logic outlined
- ✓ UI/UX flow validated
- ✓ Responsive design planned
- ✓ Visual diagrams created (dot, SVG, PNG)

---

## 📞 Next Steps

1. **Setup Vite project** with React 18
2. **Create folder structure** as outlined
3. **Build common components** (Header, Card, Button, etc)
4. **Implement routing** with React Router
5. **Setup Redux/Zustand** with slices
6. **Build Dashboard page** with metric cards
7. **Build Simulation tab** (Operations first)
8. **Implement Simulation Engine** (core logic)
9. **Add Tax Calculator** utility
10. **Build Focus Guide** module
11. **Add Goals & Milestones**
12. **Style with Tailwind/Material-UI**
13. **Test with Jest**
14. **Deploy to Vercel/Netlify**

---

**Status**: 🟢 Ready for development  
**Complexity**: 🟡 Medium (react-heavy, offline-first)  
**Est. Dev Time**: 6-8 weeks (with small team)
