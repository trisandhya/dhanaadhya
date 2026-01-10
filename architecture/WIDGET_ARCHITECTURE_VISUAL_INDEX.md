# Widget-Based UI Architecture - Visual Index

**Date**: January 10, 2026  
**Project**: Dhanaadhya MSME Business Simulation Platform  
**Frontend**: React + Redux, Widget-Based Component System

---

## 📊 Deliverables Summary

### Visual Diagrams (SVG + PNG)

| # | Diagram | Size (SVG) | Purpose |
|---|---------|-----------|---------|
| 1 | `widget_system_architecture` | 25K | 18 core widgets, 5 categories |
| 2 | `dashboard_page_widgets` | 21K | Dashboard layout with 7 widgets |
| 3 | `simulation_page_widgets` | - | 4 tabs, 12 widgets (Operations, Market, Finance, Tax) |
| 4 | `focusguide_page_widgets` | - | 4 tabs, daily/weekly/monthly/habits tracking |
| 5 | `goals_page_widgets` | - | Goals, milestones, benchmarks, actions |
| **Total** | **5 Widget Architecture Diagrams** | **~70K** | **Complete UI specification** |

### Documentation Files

| # | File | Size | Coverage |
|---|------|------|----------|
| 1 | `WIDGET_BASED_UI_SYSTEM.md` | 17K | Complete widget guide + usage examples |
| 2 | `FRONTEND_SKELETON_ARCHITECTURE.md` | 28K | 10-layer frontend architecture |
| 3 | `FRONTEND_QUICK_REFERENCE.md` | 11K | Quick start + tech stack |
| 4 | `COMPONENT_TREE_VISUAL_GUIDE.md` | 18K | 80+ components, hierarchical structure |
| **Total** | **4 Architecture Documents** | **74K** | **Complete frontend blueprint** |

---

## 🎨 Widget System Overview

### 18 Core Widgets Across 5 Categories

#### 1️⃣ Metric Widgets (3)
- **MetricCard**: Displays single metric with value, trend, benchmark
  - Example: Revenue Rs2.1L, +12% trend, vs Rs2.0L avg
- **HealthScore**: 1-10 circular progress with indicators
  - Example: Business Health 8/10 with 4 health areas
- **ProgressBar**: Goal progress with status indicators
  - Example: Revenue target 84% complete, on track

#### 2️⃣ Chart Widgets (4)
- **LineChart**: Trend visualization (revenue, forecast, cash flow)
- **PieChart**: Composition breakdown (expenses by category)
- **BarChart**: Comparative analysis (you vs benchmark)
- **TimelineChart**: Milestone progress and milestones

#### 3️⃣ Data Widgets (3)
- **TableWidget**: Sortable, filterable data (inventory, employees)
- **ListWidget**: Scrollable lists with actions (orders, alerts)
- **CardGrid**: Responsive card layout (goals, recommendations)

#### 4️⃣ Interaction Widgets (4)
- **ChecklistWidget**: Task completion tracking with streaks
- **FormWidget**: Structured input with validation
- **TabsWidget**: Tab navigation between views
- **ButtonGroup**: Action buttons with states

#### 5️⃣ Composite Widgets (3)
- **AlarmCard**: Alert + priority level + action button
- **RecommendWidget**: Recommendation + rationale + CTA
- **GoalCard**: Goal + progress + timeline + status

---

## 📄 Page Layouts with Widgets

### 1. Dashboard Page (Hub - 12 column grid)

```
┌─ Row 1 ─────────────────────────────────────────────┐
│ HealthScore Widget (6col)  │  AlertsPanel (6col)     │
│ - 1-10 score               │  - Critical alerts      │
│ - 3 health indicators      │  - Warning alerts       │
│ - Status description       │  - Info alerts          │
└────────────────────────────────────────────────────┘

┌─ Row 2 ─────────────────────────────────────────────┐
│ Revenue (3col) │ Cash (3col) │ Inventory (3col) │ Margin (3col) │
│ Rs2.1L +12%    │ Rs85K ✓     │ Rs45K Medium     │ 23% -1%       │
│ vs avg Rs2.0L  │ vs avg Rs70K│ vs avg Rs48K     │ vs avg 24%    │
└────────────────────────────────────────────────────┘

┌─ Row 3 ─────────────────────────────────────────────┐
│ Daily Focus Checklist Widget (full 12col)           │
│ ☐ Task 1: Reconcile cash (5 min)                    │
│ ☐ Task 2: Check stock (3 min)                       │
│ ☐ Task 3: Follow up credit (7 min)                  │
│ [Mark All] [Deep Dive] [Streak: 12]                 │
└────────────────────────────────────────────────────┘

┌─ Row 4 ─────────────────────────────────────────────┐
│ Forecast Chart (6col)      │ Recommendations (6col)  │
│ [4-week revenue trend]     │ 🔴 Margin below avg    │
│ [Scenario buttons]         │ 🟡 Stock low items     │
│ [Export]                   │ 🔵 Demand increasing   │
└────────────────────────────────────────────────────┘

┌─ Row 5 ─────────────────────────────────────────────┐
│ Profitability Goals Widget (full 12col)             │
│ Revenue: Rs2.1L (84%) ████████░ vs Rs2.5L target   │
│ Profit Margin: 9.0% (100%) ██████████ vs 9% target │
│ Milestones: [M1✓] [M3✓] [M6 🔄] [M12 ⏳]            │
│ vs Benchmark: You 35th percentile, Top 25: Rs2.8L  │
└────────────────────────────────────────────────────┘

┌─ Row 6 ─────────────────────────────────────────────┐
│ [Enter Simulation] [View Focus Guide] [View Goals]  │
└────────────────────────────────────────────────────┘
```

### 2. Simulation Page (Tab-based - 4 tabs with multiple widgets)

**OPERATIONS TAB** (Inventory, Employees, Orders)
```
Inventory Manager (4col) │ Employee Panel (4col) │ Order Queue (4col)
- Stock table            │ - Staff list          │ - Order list
- Low stock alerts       │ - Payroll summary     │ - Fulfillment %
- Reorder buttons        │ - Hire/Fire actions   │ - Status badges
```

**MARKET TAB** (Prices, Competitors, Demand)
```
Price Chart (4col)   │ Competitors (4col) │ Demand Graph (4col)
- 7-day trend       │ - Market share    │ - Trend line
- Buy/Sell prices   │ - Your position   │ - Peak hours
- Volatility        │ - Price moves     │ - Elasticity
```

**FINANCE TAB** (Income, Expenses, Cash)
```
Income Statement (4col)│ Expense Pie (4col) │ Cash Flow (4col)
- Revenue line        │ - COGS %           │ - Cash trend
- Profit calculation  │ - Staff %          │ - Runway days
- Margin %            │ - Other %          │ - Break-even
```

**TAX TAB** (Tax, Calendar, Compliance)
```
Tax Calculator (4col) │ Tax Calendar (4col) │ Compliance (4col)
- GST liability      │ - Filing dates     │ - Registration
- Income tax         │ - Due reminders    │ - Licenses
- Prof tax           │ - Payment status   │ - Score
```

### 3. Focus Guide Page (4 tabs - daily/weekly/monthly/habits)

**DAILY TAB**: Checklist of 5 priority tasks → Completion rewards  
**WEEKLY TAB**: Performance summary → Learn concept → Plan next week  
**MONTHLY TAB**: Month review → Health check → Strategy → Expert insights  
**HABITS TAB**: Streaks tracker → Badges earned → Leaderboard

### 4. Goals Page (Goals list + Milestones + Benchmark + Progress)

```
4 Goal Cards (Revenue, Profit, Cash, Customers)
   ↓
4 Milestone Timeline (M1, M3, M6, M12)
   ↓
Benchmark Comparison Table (You vs Average vs Top 25%)
   ↓
Progress Dashboard (Overall 80% complete)
   ↓
Action Items (Priority 1-3 recommendations)
```

---

## 🔧 Widget Integration Pattern

### Component Structure
```
<Page>
  <Header />
  <Sidebar />
  <MainContent>
    <Row>
      <Widget1 props={...} />
      <Widget2 props={...} />
    </Row>
    <Row>
      <Widget3 props={...} />
    </Row>
  </MainContent>
</Page>
```

### Data Flow
```
User Action (click, input)
    ↓
Redux Action Dispatch
    ↓
Reducer Updates State
    ↓
Widget Re-renders
    ↓
UI Updates in <100ms
```

### Example: Reorder Button Click
```
User clicks "Reorder" on low stock item
    ↓
InventoryWidget dispatches REORDER_ITEM action
    ↓
SimulationReducer updates:
   - orders[] list gets new order
   - cash decreases by cost
   - Delivery scheduled in 3 days
    ↓
InventoryWidget observes new state
    ↓
Item status changes: "Low" → "Reordered, arrives day 48"
    ↓
Alert generated: "Reorder placed!"
```

---

## 📱 Responsive Behavior

### Desktop (1024px+)
- 12-column grid layout
- Full widget details
- Sidebar always visible
- All information visible

### Tablet (768px)
- 6-column grid (widgets auto-wrap)
- Some widgets stack
- Collapsible sidebar
- Compact view

### Mobile (320px)
- Single column per row
- Tab-based navigation
- Minimal details
- Essential info only

---

## 🎯 Key Features

### Widget Flexibility
✅ **Reusable**: Same widget in multiple pages  
✅ **Composable**: Combine widgets for complex dashboards  
✅ **Themeable**: Dark/light mode support  
✅ **Customizable**: Future: drag-to-rearrange  
✅ **Responsive**: Works on all device sizes  

### Developer Benefits
✅ **Modular**: Each widget is independent  
✅ **Testable**: Unit test each widget  
✅ **Maintainable**: Changes isolated to widget  
✅ **Scalable**: Easy to add new widgets  
✅ **Documented**: Clear props, states, methods  

### User Experience
✅ **Focused**: Each widget = one business area  
✅ **Clear**: Visual hierarchy, color coding  
✅ **Accessible**: Keyboard, screen reader support  
✅ **Fast**: Responsive, <100ms updates  
✅ **Intuitive**: Consistent patterns across app  

---

## 📊 Widget Hierarchy

```
WidgetSystem (Base)
├── MetricWidgets
│   ├── MetricCard (revenue, cash, inventory, margin)
│   ├── HealthScore (1-10 business health)
│   └── ProgressBar (goal progress tracking)
├── ChartWidgets
│   ├── LineChart (trends, forecasts)
│   ├── PieChart (breakdowns)
│   ├── BarChart (comparisons)
│   └── TimelineChart (milestones)
├── DataWidgets
│   ├── TableWidget (inventory, employees, orders)
│   ├── ListWidget (scrollable alerts, news)
│   └── CardGrid (goal cards, recommendation cards)
├── InteractionWidgets
│   ├── ChecklistWidget (daily tasks, habits)
│   ├── FormWidget (inputs, forms)
│   ├── TabsWidget (tab navigation)
│   └── ButtonGroup (actions)
└── CompositeWidgets
    ├── AlarmCard (alert + action)
    ├── RecommendWidget (recommendation + why)
    └── GoalCard (goal + progress + timeline)
```

---

## 🚀 Development Roadmap

### Phase 1: Core Widgets (Weeks 1-2)
- ✓ MetricCard, HealthScore, ProgressBar
- ✓ LineChart, PieChart (basic)
- ✓ TableWidget, ListWidget
- ✓ ChecklistWidget, TabsWidget

### Phase 2: Advanced Widgets (Weeks 3-4)
- BarChart, TimelineChart
- FormWidget, ButtonGroup
- CompositeWidgets (AlarmCard, etc.)

### Phase 3: Pages (Weeks 5-6)
- Dashboard page (7 widgets)
- Simulation page (12 widgets)
- Focus Guide page (4 tabs)
- Goals page (5 sections)

### Phase 4: Polish (Weeks 7-8)
- Responsive design
- Accessibility
- Performance optimization
- Dark mode support

---

## 📁 File Structure

```
src/components/
├── common/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   └── ...
├── widgets/
│   ├── metrics/
│   │   ├── MetricCard.jsx
│   │   ├── HealthScore.jsx
│   │   └── ProgressBar.jsx
│   ├── charts/
│   │   ├── LineChart.jsx
│   │   ├── PieChart.jsx
│   │   └── ...
│   ├── data/
│   │   ├── TableWidget.jsx
│   │   ├── ListWidget.jsx
│   │   └── ...
│   ├── interaction/
│   │   ├── ChecklistWidget.jsx
│   │   ├── FormWidget.jsx
│   │   └── ...
│   └── composite/
│       ├── AlarmCard.jsx
│       ├── RecommendWidget.jsx
│       └── ...
├── pages/
│   ├── Dashboard.jsx
│   ├── Simulation.jsx
│   ├── FocusGuide.jsx
│   ├── Goals.jsx
│   └── ...
└── layouts/
    ├── ResponsiveGrid.jsx
    └── WidgetContainer.jsx
```

---

## ✅ Complete Frontend Blueprint

This widget-based UI architecture provides:
- **18 reusable widgets** across 5 categories
- **5 complete page layouts** with focused widgets
- **Responsive design** (desktop/tablet/mobile)
- **Clear separation of concerns** (modular, testable)
- **Scalable architecture** (easy to extend)
- **80+ components** total (widgets + pages + common)

**Status**: 🟢 Ready for frontend development  
**Est. Implementation Time**: 8 weeks with small team  
**Dependencies**: React 18+, Redux Toolkit, Chart.js, Tailwind CSS
