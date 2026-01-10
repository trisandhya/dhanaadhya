# Widget-Based UI Architecture - Complete Guide

## Overview
Dhanaadhya uses a **widget-based component system** for flexible, modular UI design. Each page is composed of reusable widgets that can be:
- **Arranged freely** using responsive grid layout
- **Dragged & rearranged** by users (optional)
- **Customized** in size and configuration
- **Composed** together for complex dashboards

---

## 1. WIDGET SYSTEM ARCHITECTURE

### Widget Base Class
```
class Widget {
  props: {
    id, title, type, size, position, ...
  }
  state: {
    loading, error, data, ...
  }
  methods: {
    render(), update(), resize(), ...
  }
}
```

### Widget Types (18 Core Widgets)

#### A. METRIC WIDGETS (3)
1. **MetricCard**: Value + Trend + Benchmark
   - Example: Revenue Rs2.1L, Trend +12%, vs Avg Rs2.0L
   - Props: value, unit, trend%, benchmark, status
   
2. **HealthScore**: 1-10 circular progress widget
   - Example: Business Health 8/10 with indicators
   - Props: score, indicators[], label
   
3. **ProgressBar**: Goal progress visualization
   - Example: Revenue Target 84% complete
   - Props: current, target, status (on-track/ahead/behind)

#### B. CHART WIDGETS (4)
1. **LineChart**: Revenue, forecast, cash flow trends
2. **PieChart**: Expense breakdown by category
3. **BarChart**: Comparisons (your vs benchmark)
4. **TimelineChart**: Milestone progress visualization

#### C. DATA WIDGETS (3)
1. **TableWidget**: Inventory, employees, orders
   - Sortable, filterable, paginated
   
2. **ListWidget**: Orders, alerts, news items
   - Scrollable, with actions per item
   
3. **CardGrid**: Multiple cards in responsive grid
   - Auto-layout based on width

#### D. INTERACTION WIDGETS (4)
1. **ChecklistWidget**: Tasks with completion
2. **FormWidget**: Input fields, validation
3. **TabsWidget**: Tab navigation (Operations, Market, Finance, Tax)
4. **ButtonGroup**: Action buttons with states

#### E. COMPOSITE WIDGETS (3)
1. **AlarmCard**: Alert icon + message + action button
   - Priority color-coded (red/yellow/blue)
   
2. **RecommendWidget**: Recommendation + Why + Action
   - Why section explains reasoning
   
3. **GoalCard**: Goal title + progress bar + benchmark + timeline
   - Shows current vs target with status

---

## 2. PAGE LAYOUTS WITH WIDGETS

### Dashboard Page Layout (12-column responsive grid)

```
┌─────────────────────────────────────────────────┐
│ HEADER: [Logo] [Business] [Day/Week] [User Menu]
├─────────────────────────────────────────────────┤
│ ROW 1: Health Score Widget (6col) | Alerts Widget (6col)
├─────────────────────────────────────────────────┤
│ ROW 2: 4 Metric Cards (3col each)
│        Revenue | Cash | Inventory | Margin
├─────────────────────────────────────────────────┤
│ ROW 3: Daily Focus Checklist Widget (full 12col)
│        - 5 priority tasks
│        - Time estimate
│        - Streaks tracking
├─────────────────────────────────────────────────┤
│ ROW 4: Forecast Chart (6col) | Recommendations (6col)
├─────────────────────────────────────────────────┤
│ ROW 5: Profitability Goals Widget (full 12col)
│        - Goal progress bars
│        - Milestone timeline (M1, M3, M6, M12)
│        - Benchmark comparison
├─────────────────────────────────────────────────┤
│ ROW 6: Action Buttons: [Start Sim] [Focus Guide] [Goals]
└─────────────────────────────────────────────────┘

FEATURES:
- Responsive: Stack vertically on mobile (6col becomes 12col)
- Draggable: Users can rearrange (optional)
- Collapsible: Minimize widgets to focus on one
- Customizable: Save preferred layout
```

### Simulation Page Layout (Tab-based Widgets)

```
┌─────────────────────────────────────────────────┐
│ HEADER: [Play] [Pause] [Speed] [Day: 45] [Time] [Reset]
├─────────────────────────────────────────────────┤
│ TABS: [Operations] [Market] [Finance] [Tax]
├─────────────────────────────────────────────────┤

OPERATIONS TAB (3-column layout):
│ Inventory Manager (4col) | Employee Panel (4col) | Order Queue (4col)
│ - Stock table            │ - Staff list          │ - Order list
│ - Reorder buttons        │ - Hire/Fire buttons   │ - Status badges
│ - Low stock alerts       │ - Payroll summary     │ - Fulfillment time

MARKET TAB (3-column layout):
│ Price Chart (4col) | Competitors (4col) | Demand Graph (4col)
│ - 7-day trend      │ - Market share     │ - Demand trend
│ - Buy/Sell prices  │ - Price comparison │ - Peak hours
│ - Volatility %     │ - Activity feed    │ - Elasticity

FINANCE TAB (3-column layout):
│ Income Statement (4col) | Expense Pie (4col) | Cash Flow (4col)
│ - Revenue line          │ - Breakdown %      │ - Cash trend
│ - Profit calculation    │ - By category      │ - Runway days
│ - Margin %              │ - Drill down       │ - Break-even date

TAX TAB (3-column layout):
│ Tax Calculator (4col) | Tax Calendar (4col) | Compliance (4col)
│ - GST liability     │ - Filing dates    │ - Registration status
│ - Income tax        │ - Due reminders   │ - Licenses
│ - Prof. tax         │ - Payment status  │ - Compliance score
```

### Focus Guide Page Layout

```
┌─────────────────────────────────────────────────┐
│ HEADER: Focus Coach | Day: 45 | Streak: 12 days
├─────────────────────────────────────────────────┤
│ TABS: [Daily] [Weekly] [Monthly] [Habits]
├─────────────────────────────────────────────────┤

DAILY TAB:
│ "Today's Priority Tasks" Checklist Widget (12col)
│ ☐ Task 1: Reconcile cash (5 min)
│ ☐ Task 2: Check stock low (3 min)
│ ☐ Task 3: Follow up credit (7 min)
│ ☐ Task 4: Check prices (5 min)
│ ☐ Task 5: Process orders (5 min)
│ [Mark All] [Deep Dive] [Streak: 12]
│
│ Reward Widget: +50 points, badge unlocked

WEEKLY TAB:
│ Performance Widget (12col): Revenue vs Target, Profit vs Target
│ Learn Widget (12col): Business concept, real story, best practices
│ Plan Widget (12col): Goals for next week, focus area

MONTHLY TAB:
│ Month Review Widget (12col): Revenue, Profit, Customers, repeat rate
│ Health Check Widget (12col): Scores for 4 business areas
│ Plan Next Month Widget (12col): Target, initiatives, risks
│ Expert Insights Widget (12col): Comparison vs real MSMEs

HABITS TAB:
│ Streaks Widget (12col): Login, checklist, review, decisions
│ Badges Widget (12col): Earned badges, locked achievements
│ Leaderboard Widget (12col): Your rank, top players, scores
```

### Goals Page Layout

```
┌─────────────────────────────────────────────────┐
│ HEADER: Profitability Goals & Milestones
├─────────────────────────────────────────────────┤

GOALS LIST SECTION (12col):
│ Revenue Goal Card (3col) | Profit Goal Card (3col) | Cash Goal Card (3col) | Customer Goal Card (3col)
│ - Annual target           │ - Margin %              │ - Reserve days        │ - Customer count
│ - Current progress        │ - Current margin        │ - Days of expenses    │ - Current count
│ - Pace indicator          │ - Status                │ - Risk level          │ - Pace vs target
│ - Benchmark comparison    │ - Benchmark             │ - Runway forecast     │ - Growth rate

MILESTONE TIMELINE SECTION (12col):
│ Milestone 1 (3col) │ Milestone 2 (3col) │ Milestone 3 (3col) │ Milestone 4 (3col)
│ Month 1            │ Month 3            │ Month 6            │ Year 1
│ Status: DONE       │ Status: IN PROGRESS │ Status: UPCOMING   │ Status: UPCOMING
│ - Sub-targets      │ - Sub-targets      │ - Sub-targets      │ - Sub-targets
│ - Key learning     │ - Key learning     │ - Challenges       │ - Ready?

BENCHMARK COMPARISON SECTION (12col):
│ Table: You vs Average vs Top 25%
│ - Revenue/Month, Margins, Customer Count, Repeat Rate, etc.
│ - Color-coded status (you beating avg = green)

PROGRESS DASHBOARD SECTION (12col):
│ Overall completion bar (80%)
│ What's ahead vs behind
│ Monthly growth metrics
│ Forecast for year-end

ACTION ITEMS SECTION (12col):
│ Priority 1 (Red): This week actions
│ Priority 2 (Yellow): This month actions
│ Priority 3 (Green): Next month actions
```

---

## 3. WIDGET COMPOSITION EXAMPLES

### Dashboard HealthScore + Metrics Row
```
<Dashboard>
  <Row1>
    <HealthScore 
      score={8}
      indicators={["Inventory: 8/10", "Finance: 9/10", "Customers: 7/10"]}
    />
    <AlertsPanel 
      alerts={[
        {priority: "critical", message: "Stock low on oil"},
        {priority: "warning", message: "GST due in 5 days"},
        {priority: "info", message: "Demand increasing 15%"}
      ]}
    />
  </Row1>
  
  <Row2>
    <MetricCard value="2.1L" unit="Rs" trend="+12%" benchmark="2.0L" />
    <MetricCard value="85K" unit="Rs" trend="Stable" benchmark="70K" />
    <MetricCard value="45K" unit="Rs" trend="Medium" benchmark="48K" />
    <MetricCard value="23%" unit="%" trend="-1%" benchmark="24%" />
  </Row2>
  
  <Row3>
    <ChecklistWidget 
      tasks={[
        {title: "Reconcile cash", time: 5, completed: false},
        {title: "Check stock", time: 3, completed: false},
        // ...
      ]}
      onComplete={handleTaskComplete}
    />
  </Row3>
</Dashboard>
```

### Simulation OperationsTab
```
<SimulationPage>
  <Header 
    controls={[PlayButton, PauseButton, SpeedSelector]}
    timeDisplay="Day 45"
  />
  
  <Tabs active="Operations">
    <Tab name="Operations">
      <Row>
        <Column width="4col">
          <TableWidget
            headers={["Item", "Qty", "Reorder", "Status"]}
            rows={inventoryData}
            sortable={true}
          />
        </Column>
        <Column width="4col">
          <TableWidget
            headers={["Name", "Salary", "Productivity"]}
            rows={employeeData}
            actions={[HireButton, FireButton]}
          />
        </Column>
        <Column width="4col">
          <ListWidget
            items={orderData}
            itemRenderer={(order) => <OrderCard order={order} />}
          />
        </Column>
      </Row>
    </Tab>
  </Tabs>
</SimulationPage>
```

---

## 4. RESPONSIVE BEHAVIOR

### Desktop (1024px+)
- Full 12-column grid
- Widgets side-by-side
- Sidebar visible
- All details shown

### Tablet (768px)
- 6-column grid
- Some widgets stack (2 per row → 1 per row)
- Sidebar collapses to hamburger
- Less detailed view

### Mobile (320px)
- Single column (12col = 1 widget per row)
- Tabs for complex pages
- Compact widget sizes
- Essential info only

---

## 5. STATE MANAGEMENT FOR WIDGETS

### Widget State Flow
```
User Action
    ↓
Component dispatches to Redux/Store
    ↓
Reducer updates state
    ↓
Widget re-renders with new data
    ↓
UI updates (animation if applicable)
```

### Example: Inventory Widget
```
// User clicks "Reorder"
→ InventoryWidget dispatches "REORDER_ITEM"
→ SimulationState updates: orders[], cash decreases
→ Widget re-renders with new status
→ Alert appears: "Reorder placed, arrives in 3 days"
```

---

## 6. WIDGET CUSTOMIZATION

### User Customizable Options (Future)
- **Resize**: Drag corners to make bigger/smaller
- **Rearrange**: Drag to new position on dashboard
- **Hide/Show**: Toggle visibility of specific widgets
- **Color Theme**: Dark/light/custom colors
- **Data Range**: Select time period (day/week/month)
- **Alerts**: Configure alert thresholds

### Admin Customizable
- Default widget layout per business type
- Widget collections (pre-designed dashboards)
- Locked vs unlocked widgets (some always visible)
- Widget size constraints (min/max)

---

## 7. WIDGET PERFORMANCE OPTIMIZATION

### Techniques
1. **Lazy Loading**: Load widget data on scroll/focus
2. **Memoization**: Cache expensive calculations
3. **Virtual Scrolling**: For long tables/lists
4. **Debouncing**: Delay updates on rapid changes
5. **Code Splitting**: Load widget code on demand

### Example
```javascript
// Lazy load expensive chart
const LineChartWidget = React.lazy(() => import('./LineChartWidget'));

<Suspense fallback={<LoadingSpinner />}>
  <LineChartWidget data={data} />
</Suspense>
```

---

## 8. WIDGET LIBRARY (Component Storybook)

### Storybook Structure
```
Widget Library (Storybook)
├── Metric Widgets
│   ├── MetricCard (default, loading, error states)
│   ├── HealthScore (score 1-10, different colors)
│   └── ProgressBar (on-track, ahead, behind)
├── Chart Widgets
│   ├── LineChart (with/without forecast, themes)
│   ├── PieChart (various data sets)
│   └── BarChart (comparisons)
├── Data Widgets
│   ├── TableWidget (empty, loading, with data, sortable)
│   ├── ListWidget (empty, loading, with data)
│   └── CardGrid (1-4 columns)
├── Interaction Widgets
│   ├── ChecklistWidget (empty, partial, complete)
│   ├── FormWidget (various input types)
│   ├── TabsWidget (active/inactive states)
│   └── ButtonGroup (different button types)
└── Composite Widgets
    ├── AlarmCard (critical, warning, info)
    ├── RecommendWidget (priority levels)
    └── GoalCard (different milestone statuses)
```

---

## 9. INTEGRATION WITH SIMULATION ENGINE

### Widget ↔ Engine Communication
```
Widget (UI)
    ↓ displays
Game State (Redux/Store)
    ↓ listens
Simulation Engine (business logic)
    ↓ updates
Game State (Redux/Store)
    ↓ broadcasts
All Widgets (re-render)
```

### Example Flow
```
1. User plays game (advances 1 day)
2. Simulation Engine runs: calculateRevenue(), expenses(), etc.
3. State updates: revenue +1000, cash +500, inventory -50
4. MetricCard widgets observe state change
5. All metric cards re-render with new values
6. Charts update with new data points
7. Alerts check: cash < ?, stock < ?, generate new alerts
8. AlertsPanel widget shows new alert
9. UI fully updated in <100ms
```

---

## 10. ACCESSIBILITY & USABILITY

### Widget Accessibility
- All widgets have semantic HTML (button, table, form roles)
- Color not only differentiator (patterns too)
- Keyboard navigation for all interactive widgets
- Screen reader support for data widgets
- High contrast mode support

### Usability
- Consistent styling across all widgets
- Clear visual hierarchy (size, color, position)
- Tooltips for complex metrics
- Loading states for async data
- Error states with recovery options
- Empty states with helpful messages

---

## Summary

**Dhanaadhya Widget-Based Architecture** provides:
✅ Modular, reusable components  
✅ Flexible page layouts (responsive grid)  
✅ Focused areas of business (each widget = one focus)  
✅ Scalable (easy to add new widgets)  
✅ User customizable (future feature)  
✅ Performance optimized  
✅ Accessible & usable  

This approach makes the UI:
- **Easy to maintain** (changes in one widget don't affect others)
- **Easy to test** (each widget is independent)
- **Easy to extend** (add new widgets without changing existing)
- **Easy to localize** (translate each widget separately)
- **Easy to customize** (users can arrange their own dashboard)
