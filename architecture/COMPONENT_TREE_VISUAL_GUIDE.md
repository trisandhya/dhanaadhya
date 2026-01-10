# Frontend Component Tree - Visual Guide

## Complete Component Hierarchy

```
<App />
│
├── <AppShell />
│   ├── <Header>
│   │   ├── Logo
│   │   ├── AppTitle
│   │   ├── UserMenu
│   │   │   ├── Avatar
│   │   │   ├── Dropdown
│   │   │   │   ├── Profile Link
│   │   │   │   ├── Settings Link
│   │   │   │   └── Logout Button
│   │   │   └── Notification Bell
│   │   └── Hamburger (mobile)
│   │
│   ├── <Sidebar>
│   │   ├── Logo Section
│   │   ├── Navigation Menu
│   │   │   ├── Dashboard Link
│   │   │   ├── Simulation Link
│   │   │   ├── Analytics Link
│   │   │   ├── Goals Link
│   │   │   ├── Profile Link
│   │   │   └── Help Link
│   │   ├── Business Selector
│   │   │   ├── Current Business Display
│   │   │   └── Change Business Button
│   │   └── Collapse Toggle (desktop)
│   │
│   └── <Router>
│       │
│       ├── <LandingPage /> (public)
│       │   ├── Hero Section
│       │   ├── 60-sec Demo Video
│       │   ├── Value Propositions (3-5 cards)
│       │   ├── 10 Business Types Showcase
│       │   │   ├── Business Type Card (x10)
│       │   │   │   ├── Image
│       │   │   │   ├── Title
│       │   │   │   ├── Description
│       │   │   │   ├── Complexity Rating
│       │   │   │   └── Select Button
│       │   │   └── Filter/Search
│       │   ├── Competitive Comparison
│       │   │   └── Comparison Table
│       │   ├── FAQ Section
│       │   └── CTA (Get Started)
│       │
│       ├── <AuthPages /> (public)
│       │   ├── <LoginPage />
│       │   │   ├── Email Input
│       │   │   ├── Password Input
│       │   │   ├── Remember Me Checkbox
│       │   │   ├── Login Button
│       │   │   ├── Social Auth Buttons
│       │   │   ├── Forgot Password Link
│       │   │   └── Sign Up Link
│       │   │
│       │   └── <RegisterPage />
│       │       ├── Name Input
│       │       ├── Email Input
│       │       ├── Password Input
│       │       ├── Confirm Password Input
│       │       ├── Terms Checkbox
│       │       ├── Register Button
│       │       ├── Social Auth Buttons
│       │       └── Login Link
│       │
│       ├── <OnboardingFlow /> (protected)
│       │   ├── Progress Indicator (5 steps)
│       │   ├── <Step1: BusinessTypeSelection />
│       │   │   ├── Title
│       │   │   ├── Business Type Grid
│       │   │   │   ├── Business Card (x10)
│       │   │   │   │   ├── Icon
│       │   │   │   │   ├── Name
│       │   │   │   │   ├── Description
│       │   │   │   │   ├── Complexity Badge
│       │   │   │   │   └── Select Radio
│       │   │   │   └── Search/Filter
│       │   │   ├── Next Button
│       │   │   └── Help Text
│       │   │
│       │   ├── <Step2: LocationSelect />
│       │   │   ├── State Dropdown
│       │   │   ├── City Dropdown
│       │   │   ├── Map Preview
│       │   │   ├── Previous Button
│       │   │   └── Next Button
│       │   │
│       │   ├── <Step3: CapitalAllocation />
│       │   │   ├── Capital Slider (₹1L - ₹5L)
│       │   │   ├── Value Display
│       │   │   ├── Info Text
│       │   │   ├── Previous Button
│       │   │   └── Next Button
│       │   │
│       │   ├── <Step4: DifficultyLevel />
│       │   │   ├── Level Cards (Easy/Medium/Hard)
│       │   │   │   ├── Icon
│       │   │   │   ├── Title
│       │   │   │   ├── Description
│       │   │   │   ├── Challenge Details
│       │   │   │   └── Select Radio
│       │   │   ├── Previous Button
│       │   │   └── Next Button
│       │   │
│       │   ├── <Step5: Confirmation />
│       │   │   ├── Summary Card
│       │   │   │   ├── Business Type
│       │   │   │   ├── Location
│       │   │   │   ├── Capital
│       │   │   │   └── Difficulty
│       │   │   ├── Edit Links (each field)
│       │   │   ├── Previous Button
│       │   │   └── Start Simulation Button
│       │   │
│       │   └── Completion Redirect to Dashboard
│       │
│       ├── <Dashboard /> (protected)
│       │   ├── Page Header
│       │   │   ├── Business Name
│       │   │   ├── Day/Week/Month Indicator
│       │   │   └── Last Updated
│       │   │
│       │   ├── Main Grid Layout (Responsive)
│       │   │   │
│       │   │   ├── Row 1: Health Score + Alerts
│       │   │   │   ├── <BusinessHealthScore />
│       │   │   │   │   ├── Circular Progress (1-10)
│       │   │   │   │   ├── Status Text
│       │   │   │   │   ├── Health Indicators
│       │   │   │   │   │   ├── Inventory Health
│       │   │   │   │   │   ├── Financial Health
│       │   │   │   │   │   ├── Customer Health
│       │   │   │   │   │   └── Tax Compliance
│       │   │   │   │   └── Diagnosis Tooltip
│       │   │   │   │
│       │   │   │   └── <AlertsPanel />
│       │   │   │       ├── Critical Alerts Section
│       │   │   │       │   ├── Alert Item (red)
│       │   │   │       │   │   ├── Icon
│       │   │   │       │   │   ├── Message
│       │   │   │       │   │   ├── Time
│       │   │   │       │   │   ├── Dismiss Button
│       │   │   │       │   │   └── Action Button
│       │   │   │       │   └── ... (multiple)
│       │   │   │       ├── Warning Alerts Section (yellow)
│       │   │   │       ├── Info Alerts Section (blue)
│       │   │   │       └── "View All" Link
│       │   │   │
│       │   │   ├── Row 2: Key Metrics
│       │   │   │   ├── <MetricsCard>
│       │   │   │   │   ├── Metric Title
│       │   │   │   │   ├── Value (large number)
│       │   │   │   │   ├── Unit
│       │   │   │   │   ├── Trend (↑/↓ with %)
│       │   │   │   │   ├── Status Color
│       │   │   │   │   └── Tooltip (benchmark)
│       │   │   │   ├── Card 1: Revenue
│       │   │   │   ├── Card 2: Cash Position
│       │   │   │   ├── Card 3: Inventory Value
│       │   │   │   └── Card 4: Gross Margin %
│       │   │   │
│       │   │   ├── Row 3: Daily Focus Guide
│       │   │   │   └── <TodaysFocusGuide />
│       │   │   │       ├── Card Header
│       │   │   │       ├── "Today's Priority Tasks"
│       │   │   │       ├── Task List
│       │   │   │       │   ├── Task 1
│       │   │   │       │   │   ├── Checkbox
│       │   │   │       │   │   ├── Task Title
│       │   │   │       │   │   ├── Why? Tooltip
│       │   │   │       │   │   ├── Time Estimate
│       │   │   │       │   │   └── Habit Streak
│       │   │   │       │   └── ... (3-5 tasks)
│       │   │   │       ├── Time Total
│       │   │   │       ├── Mark All Complete Button
│       │   │   │       ├── Deep Dive Link
│       │   │   │       └── Streak Badge
│       │   │   │
│       │   │   ├── Row 4: Forecast + Recommendations
│       │   │   │   ├── <ForecastCard />
│       │   │   │   │   ├── "4-Week Forecast"
│       │   │   │   │   ├── Line Chart
│       │   │   │   │   │   ├── X-axis: Weeks 1-4
│       │   │   │   │   │   ├── Y-axis: Revenue
│       │   │   │   │   │   ├── Base forecast line
│       │   │   │   │   │   ├── Confidence band
│       │   │   │   │   │   └── Milestone markers
│       │   │   │   │   ├── Scenario Buttons
│       │   │   │   │   │   ├── Base
│       │   │   │   │   │   ├── Optimistic
│       │   │   │   │   │   └── Pessimistic
│       │   │   │   │   ├── Scenario Details Tooltip
│       │   │   │   │   └── Export Button
│       │   │   │   │
│       │   │   │   └── <RecommendationsPanel />
│       │   │   │       ├── "Recommended Actions"
│       │   │   │       ├── Recommendation List
│       │   │   │       │   ├── Rec 1 (high priority, red)
│       │   │   │       │   │   ├── Priority Badge
│       │   │   │       │   │   ├── Recommendation Text
│       │   │   │       │   │   ├── Why This Matters
│       │   │   │       │   │   └── Action Button
│       │   │   │       │   ├── Rec 2 (medium priority, yellow)
│       │   │   │       │   └── Rec 3+ (low priority, blue)
│       │   │   │       └── "Dismiss" / "Learn More" buttons
│       │   │   │
│       │   │   ├── Row 5: Profitability Goals
│       │   │   │   └── <GoalsProgressCard />
│       │   │   │       ├── "Your Profitability Goals"
│       │   │   │       ├── Primary Goal Section
│       │   │   │       │   ├── Goal Title (e.g., "Revenue Target")
│       │   │   │       │   ├── Progress Bar
│       │   │   │       │   ├── Current vs Target
│       │   │   │       │   └── % Complete
│       │   │   │       ├── Milestone Timeline
│       │   │   │       │   ├── M1 (Month 1) ✓
│       │   │   │       │   ├── M3 (Month 3) 🔄
│       │   │   │       │   ├── M6 (Month 6) ⏳
│       │   │   │       │   └── M12 (Month 12) ⏳
│       │   │   │       ├── Benchmark Comparison
│       │   │   │       └── "Full Goals Dashboard" Link
│       │   │   │
│       │   │   └── Row 6: Quick Links
│       │   │       ├── "Enter Simulation" Button (prominent)
│       │   │       ├── "View Focus Guide" Link
│       │   │       └── "View Full Goals" Link
│       │   │
│       │   └── Bottom Action Buttons
│       │       ├── Start/Resume Simulation
│       │       ├── New Simulation
│       │       └── Settings
│       │
│       ├── <SimulationArena /> (protected)
│       │   ├── Header Section
│       │   │   ├── Time Control
│       │   │   │   ├── Play Button ▶️
│       │   │   │   ├── Pause Button ⏸️
│       │   │   │   ├── Speed Selector (1x, 2x, 4x)
│       │   │   │   └── Reset/Quit Buttons
│       │   │   ├── Time Display
│       │   │   │   ├── Current Day
│       │   │   │   ├── Day of Week
│       │   │   │   ├── Month/Year
│       │   │   │   └── Sim Status
│       │   │   └── Help Icon
│       │   │
│       │   ├── Tab Navigation (4 main tabs)
│       │   │   ├── [Operations] [Market] [Finance] [Tax]
│       │   │   └── Underline indicator for active tab
│       │   │
│       │   ├── Tab Content (dynamic)
│       │   │   │
│       │   │   ├── OPERATIONS TAB
│       │   │   │   │
│       │   │   │   ├── <InventoryManager />
│       │   │   │   │   ├── Header with Stats (Total Value, Low Stock Count)
│       │   │   │   │   ├── Stock Table
│       │   │   │   │   │   ├── Columns: Item | Qty | Reorder Level | Unit Price | Status | Action
│       │   │   │   │   │   ├── Row: Item Card
│       │   │   │   │   │   │   ├── Item Name + Icon
│       │   │   │   │   │   │   ├── Current Qty
│       │   │   │   │   │   │   ├── Reorder Level
│       │   │   │   │   │   │   ├── Unit Price
│       │   │   │   │   │   │   ├── Stock Status (Green/Yellow/Red)
│       │   │   │   │   │   │   └── Reorder Button / Edit
│       │   │   │   │   │   └── Pagination
│       │   │   │   │   ├── Reorder Modal (when clicked)
│       │   │   │   │   │   ├── Item Name
│       │   │   │   │   │   ├── Current Stock
│       │   │   │   │   │   ├── Quantity Slider
│       │   │   │   │   │   ├── Unit Price
│       │   │   │   │   │   ├── Total Cost
│       │   │   │   │   │   ├── Estimated Delivery
│       │   │   │   │   │   ├── Confirm Button
│       │   │   │   │   │   └── Cancel Button
│       │   │   │   │   └── Delivery Status Section
│       │   │   │   │       ├── Pending Orders
│       │   │   │   │       ├── Delivery Timeline
│       │   │   │   │       └── Expected Arrival Dates
│       │   │   │   │
│       │   │   │   ├── <EmployeePanel />
│       │   │   │   │   ├── Summary Stats (Total Employees, Total Payroll)
│       │   │   │   │   ├── Employee Table
│       │   │   │   │   │   ├── Columns: Name | Role | Salary | Productivity | Satisfaction | Action
│       │   │   │   │   │   ├── Row: Employee Card
│       │   │   │   │   │   │   ├── Employee Name
│       │   │   │   │   │   │   ├── Role (Salesman, Manager, etc)
│       │   │   │   │   │   │   ├── Monthly Salary
│       │   │   │   │   │   │   ├── Productivity % (affect sales)
│       │   │   │   │   │   │   ├── Satisfaction Score
│       │   │   │   │   │   │   ├── View Details
│       │   │   │   │   │   │   └── Fire Button
│       │   │   │   │   │   └── Pagination
│       │   │   │   │   ├── Hire New Employee Button
│       │   │   │   │   │   └── Opens Hire Modal
│       │   │   │   │   │       ├── Role Selector
│       │   │   │   │       ├── Salary Range Slider
│       │   │   │   │       ├── Experience Level
│       │   │   │   │       ├── Candidate Cards
│       │   │   │   │       ├── Hire Button
│       │   │   │   │       └── Cancel Button
│       │   │   │   │   └── Payroll Summary
│       │   │   │   │       ├── Total Salary Cost
│       │   │   │   │       ├── % of Revenue
│       │   │   │   │       └── Benchmark comparison
│       │   │   │   │
│       │   │   │   ├── <OrderQueue />
│       │   │   │   │   ├── Tabs: Incoming | Processing | Completed
│       │   │   │   │   ├── Order List
│       │   │   │   │   │   ├── Order Card
│       │   │   │   │   │   │   ├── Order ID
│       │   │   │   │   │   │   ├── Customer Name
│       │   │   │   │   │   │   ├── Items (list)
│       │   │   │   │   │   │   ├── Order Value (₹)
│       │   │   │   │   │   │   ├── Status
│       │   │   │   │   │   │   ├── Timeline (days pending)
│       │   │   │   │   │   │   ├── Action Buttons
│       │   │   │   │   │   │   │   ├── Accept Order (if incoming)
│       │   │   │   │   │   │   │   ├── Mark as Completed (if processing)
│       │   │   │   │   │   │   │   ├── Reject Order
│       │   │   │   │   │   │   │   └── View Details
│       │   │   │   │   │   │   └── Alerts (if delayed)
│       │   │   │   │   │   └── ... (multiple orders)
│       │   │   │   │   ├── Metrics
│       │   │   │   │   │   ├── Pending Orders
│       │   │   │   │   │   ├── Avg Fulfillment Time
│       │   │   │   │   │   ├── On-Time Completion %
│       │   │   │   │   │   └── Customer Satisfaction
│       │   │   │   │   └── Filters/Search
│       │   │   │   │
│       │   │   │   └── <ActivityLog />
│       │   │   │       ├── Events Feed
│       │   │   │       │   ├── Event Item
│       │   │   │       │   │   ├── Time
│       │   │   │       │   │   ├── Event Type Icon
│       │   │   │       │   │   ├── Event Description
│       │   │   │       │   │   └── Impact (↑ revenue, ↓ cash, etc)
│       │   │   │       │   └── ... (multiple events)
│       │   │   │       └── Scroll/Pagination
│       │   │   │
│       │   │   ├── MARKET TAB
│       │   │   │   │
│       │   │   │   ├── <PriceChart />
│       │   │   │   │   ├── Chart Title
│       │   │   │   │   ├── Line Chart (7-day price trend)
│       │   │   │   │   │   ├── X-axis: Days
│       │   │   │   │   │   ├── Y-axis: Price (₹)
│       │   │   │   │   │   ├── Price line
│       │   │   │   │   │   ├── Buy Price (green band)
│       │   │   │   │   │   ├── Sell Price (red band)
│       │   │   │   │   │   ├── Volatility percentage
│       │   │   │   │   │   └── Seasonality annotations
│       │   │   │   │   ├── Price Info
│       │   │   │   │   │   ├── Current Price
│       │   │   │   │   │   ├── Buy Price (what you pay)
│       │   │   │   │   │   ├── Sell Price (what customers pay)
│       │   │   │   │   │   ├── Your Margin
│       │   │   │   │   │   └── Price Volatility %
│       │   │   │   │   ├── Commodity Selector Dropdown
│       │   │   │   │   ├── Time Period Selector (7-day, 1-month)
│       │   │   │   │   └── Forecast Preview (next 3 days)
│       │   │   │   │
│       │   │   │   ├── <CompetitorActivity />
│       │   │   │   │   ├── Competition Overview
│       │   │   │   │   │   ├── Market Share Pie Chart
│       │   │   │   │   │   │   ├── Your Share %
│       │   │   │   │   │   │   ├── Competitor A %
│       │   │   │   │   │   │   ├── Competitor B %
│       │   │   │   │   │   │   └── Others %
│       │   │   │   │   │   └── Your Market Position
│       │   │   │   │   ├── Competitor List
│       │   │   │   │   │   ├── Competitor Card
│       │   │   │   │   │   │   ├── Competitor Name
│       │   │   │   │   │   │   ├── Their Prices (vs yours)
│       │   │   │   │   │   │   ├── Their Market Share
│       │   │   │   │   │   │   ├── Recent Activity
│       │   │   │   │   │   │   │   ├── Price changed
│       │   │   │   │   │   │   │   ├── Inventory updated
│       │   │   │   │   │   │   │   └── Time of activity
│       │   │   │   │   │   │   ├── Competitive Threat Level
│       │   │   │   │   │   │   └── Action Recommendation
│       │   │   │   │   │   └── ... (multiple competitors)
│       │   │   │   │   └── Price War Detection Alert
│       │   │   │   │
│       │   │   │   ├── <CustomerDemandGraph />
│       │   │   │   │   ├── Demand Trend Line Chart
│       │   │   │   │   │   ├── X-axis: Last 30 days
│       │   │   │   │   │   ├── Y-axis: Demand (units/day)
│       │   │   │   │   │   ├── Demand line
│       │   │   │   │   │   ├── Your capacity line (max you can handle)
│       │   │   │   │   │   ├── Peak days highlighted
│       │   │   │   │   │   └── Trend line (increasing/decreasing)
│       │   │   │   │   ├── Demand Indicators
│       │   │   │   │   │   ├── Current Daily Demand
│       │   │   │   │   │   ├── Trend (↑ / ↓ / →)
│       │   │   │   │   │   ├── Peak Hours
│       │   │   │   │   │   ├── Customer Count
│       │   │   │   │   │   └── Repeat Customer %
│       │   │   │   │   ├── Price Elasticity
│       │   │   │   │   │   ├── "If you cut price 10%, demand increases X%"
│       │   │   │   │   │   └── Interactive slider to test scenarios
│       │   │   │   │   └── Seasonality Impact
│       │   │   │   │       ├── Current Season
│       │   │   │   │       ├── Seasonal Multiplier
│       │   │   │   │       └── Peak Season Forecast
│       │   │   │   │
│       │   │   │   └── <MarketNewsFeeds />
│       │   │   │       ├── News Feed Title
│       │   │   │       ├── News Items
│       │   │   │       │   ├── News Card
│       │   │   │       │   │   ├── Date/Time
│       │   │   │       │   │   ├── News Title
│       │   │   │       │   │   ├── Description
│       │   │   │       │   │   ├── Impact Indicator (↑ / ↓ / ⚠️)
│       │   │   │       │   │   └── Category (price, demand, competitor)
│       │   │   │       │   └── ... (multiple news items)
│       │   │   │       └── Pagination
│       │   │   │
│       │   │   ├── FINANCE TAB
│       │   │   │   │
│       │   │   │   ├── <IncomeStatement />
│       │   │   │   │   ├── Period Selector (Day / Week / Month / Year)
│       │   │   │   │   ├── Income Statement Table
│       │   │   │   │   │   ├── Revenue
│       │   │   │   │   │   │   ├── Product Sales (or by service)
│       │   │   │   │   │   │   ├── Other Revenue
│       │   │   │   │   │   │   └── Total Revenue (highlighted, big)
│       │   │   │   │   │   ├── Cost of Goods Sold (COGS)
│       │   │   │   │   │   │   ├── Raw Materials Cost
│       │   │   │   │   │   │   ├── Inventory Wastage
│       │   │   │   │   │   │   └── Total COGS
│       │   │   │   │   │   ├── Gross Profit Section
│       │   │   │   │   │   │   ├── Gross Profit = Revenue - COGS
│       │   │   │   │   │   │   └── Gross Margin % (highlighted)
│       │   │   │   │   │   ├── Operating Expenses
│       │   │   │   │   │   │   ├── Staff Salary
│       │   │   │   │   │   │   ├── Rent
│       │   │   │   │   │   │   ├── Utilities
│       │   │   │   │   │   │   ├── Admin
│       │   │   │   │   │   │   └── Total Operating Expenses
│       │   │   │   │   │   ├── EBITDA
│       │   │   │   │   │   ├── Tax Section
│       │   │   │   │   │   │   ├── GST Payable
│       │   │   │   │   │   │   └── Income Tax Estimate
│       │   │   │   │   │   └── Net Profit
│       │   │   │   │   │       ├── Net Profit Amount
│       │   │   │   │   │       └── Net Margin % (highlighted, color-coded)
│       │   │   │   │   ├── Comparison Section
│       │   │   │   │   │   ├── Your metrics vs target
│       │   │   │   │   │   └── Color-coded indicators (green if on-track)
│       │   │   │   │   └── Export Button
│       │   │   │   │
│       │   │   │   ├── <ExpenseBreakdown />
│       │   │   │   │   ├── Pie Chart
│       │   │   │   │   │   ├── Segment 1: COGS (%)
│       │   │   │   │   │   ├── Segment 2: Staff (%)
│       │   │   │   │   │   ├── Segment 3: Rent (%)
│       │   │   │   │   │   ├── Segment 4: Utilities (%)
│       │   │   │   │   │   ├── Segment 5: Other (%)
│       │   │   │   │   │   └── Legend with colors
│       │   │   │   │   ├── Expense Items List
│       │   │   │   │   │   ├── Expense Category
│       │   │   │   │   │   │   ├── Amount
│       │   │   │   │   │   │   ├── % of Total Revenue
│       │   │   │   │   │   │   ├── % of Total Expenses
│       │   │   │   │   │   │   ├── Benchmark (your % vs industry avg)
│       │   │   │   │   │   │   └── Status (Green/Yellow/Red)
│       │   │   │   │   │   └── ... (each category)
│       │   │   │   │   └── Insights
│       │   │   │   │       ├── "Staff costs are X% of revenue (industry avg: Y%)"
│       │   │   │   │       ├── "COGS is higher than peers, consider negotiations"
│       │   │   │   │       └── Optimization suggestions
│       │   │   │   │
│       │   │   │   ├── <CashFlowTimeline />
│       │   │   │   │   ├── Cash Balance Line Chart
│       │   │   │   │   │   ├── X-axis: Days/Months
│       │   │   │   │   │   ├── Y-axis: Cash (₹)
│       │   │   │   │   │   ├── Cash balance line
│       │   │   │   │   │   ├── Break-even point (if passed)
│       │   │   │   │   │   ├── Zero-cash alert (if approaching)
│       │   │   │   │   │   └── Projected runway
│       │   │   │   │   ├── Cash Metrics
│       │   │   │   │   │   ├── Current Cash
│       │   │   │   │   │   ├── Daily Burn Rate
│       │   │   │   │   │   ├── Projected Runway (days of cash left)
│       │   │   │   │   │   └── Break-even Date (if applicable)
│       │   │   │   │   ├── Transaction Summary
│       │   │   │   │   │   ├── Cash In (daily/weekly/monthly)
│       │   │   │   │   │   ├── Cash Out (daily/weekly/monthly)
│       │   │   │   │   │   └── Net Change
│       │   │   │   │   └── Alerts
│       │   │   │   │       ├── ⚠️ "Cash running out in X days"
│       │   │   │   │       ├── ⚠️ "Negative cash projection"
│       │   │   │   │       └── ✓ "Strong cash position"
│       │   │   │   │
│       │   │   │   └── <FinancialHealthScore />
│       │   │   │       ├── Scorecard (1-100)
│       │   │   │       ├── Component Scores
│       │   │   │       │   ├── Profitability Score (0-20)
│       │   │   │       │   ├── Cash Health Score (0-20)
│       │   │   │       │   ├── Efficiency Score (0-20)
│       │   │   │       │   ├── Growth Score (0-20)
│       │   │   │       │   └── Stability Score (0-20)
│       │   │   │       ├── Grade (A/B/C/D/F)
│       │   │   │       └── Recommendations
│       │   │   │
│       │   │   └── TAX TAB
│       │   │       │
│       │   │       ├── <TaxCalculator />
│       │   │       │   ├── Current Financials Summary
│       │   │       │   │   ├── YTD Turnover
│       │   │       │   │   ├── YTD Profit
│       │   │       │   │   └── Filing Status
│       │   │       │   ├── GST Calculation
│       │   │       │   │   ├── Turnover This Month
│       │   │       │   │   ├── GST Rate (%)
│       │   │       │   │   ├── GST Liability (this month)
│       │   │       │   │   ├── GST YTD
│       │   │       │   │   ├── Filed Status
│       │   │       │   │   └── Due Date
│       │   │       │   ├── Income Tax Calculation
│       │   │       │   │   ├── Estimated Annual Profit
│       │   │       │   │   ├── Applicable Tax Slab
│       │   │       │   │   ├── Income Tax Estimate
│       │   │       │   │   ├── Deductions Available
│       │   │       │   │   └── Tax Due Date
│       │   │       │   ├── Professional Tax
│       │   │       │   │   ├── Applicable (by state)
│       │   │       │   │   ├── Rate
│       │   │       │   │   ├── Amount Due
│       │   │       │   │   └── Due Date
│       │   │       │   └── Total Tax Liability
│       │   │       │       ├── Total Amount Owed
│       │   │       │       ├── Payment Status
│       │   │       │       └── Impact on Cash
│       │   │       │
│       │   │       ├── <TaxCalendar />
│       │   │       │   ├── Calendar View (Month)
│       │   │       │   │   ├── Tax Filing Dates (highlighted)
│       │   │       │   │   ├── Payment Due Dates (highlighted)
│       │   │       │   │   └── License Renewal Dates
│       │   │       │   ├── Upcoming Events List
│       │   │       │   │   ├── Event Card
│       │   │       │   │   │   ├── Event Date
│       │   │       │   │   │   ├── Days Until Due
│       │   │       │   │   │   ├── Event Type (GST, Income Tax, etc)
│       │   │       │   │   │   ├── Description
│       │   │       │   │   │   ├── Amount Due
│       │   │       │   │   │   ├── Mark as Completed
│       │   │       │   │   │   └── Set Reminder
│       │   │       │   │   └── ... (multiple events)
│       │   │       │   └── Notifications/Reminders
│       │   │       │       ├── "GST filing due in 5 days"
│       │   │       │       ├── "Income tax extension ends in 10 days"
│       │   │       │       └── Set custom reminders
│       │   │       │
│       │   │       ├── <TaxScenarios />
│       │   │       │   ├── "What If" Scenarios
│       │   │       │   │   ├── Scenario 1: "What if I cross ₹20L turnover?"
│       │   │       │   │   │   ├── New tax slab
│       │   │       │   │   │   ├── New compliance requirements
│       │   │       │   │   │   ├── New GST rate (if applicable)
│       │   │       │   │   │   └── Impact on net profit
│       │   │       │   │   ├── Scenario 2: Custom simulation
│       │   │       │   │   │   ├── Input fields
│       │   │       │   │   │   ├── Turnover slider
│       │   │       │   │   │   ├── Profit slider
│       │   │       │   │   │   └── Calculate Impact
│       │   │       │   │   └── Results display
│       │   │       │   └── Export Scenario Report
│       │   │       │
│       │   │       └── <ComplianceChecklist />
│       │   │           ├── Registration Status
│       │   │           │   ├── Business Registration (✓ / ✗)
│       │   │           │   ├── GST Registration (✓ / ✗)
│       │   │           │   └── PAN Application (✓ / ✗)
│       │   │           ├── Licenses & Permits
│       │   │           │   ├── Business License (✓ / ✗)
│       │   │           │   ├── Trade License (✓ / ✗)
│       │   │           │   ├── Professional License (if required)
│       │   │           │   └── Health/Safety Compliance
│       │   │           ├── Annual Filings
│       │   │           │   ├── GST Returns (Monthly/Quarterly)
│       │   │           │   ├── Income Tax Filing
│       │   │           │   └── Professional Tax Payment
│       │   │           ├── Compliance Score
│       │   │           │   ├── % Compliant
│       │   │           │   ├── Overdue Items (if any)
│       │   │           │   └── Next Action
│       │   │           └── Help Links
│       │   │               ├── How to register GST
│       │   │               ├── Tax filing guide
│       │   │               └── License requirements
│       │   │
│       │   └── Bottom Action Bar
│       │       ├── Save Simulation
│       │       ├── Share Progress
│       │       └── Exit to Dashboard
│       │
│       ├── <AnalyticsView /> (protected)
│       │   ├── Page Header
│       │   │   └── Business Selector Dropdown
│       │   │
│       │   ├── <PerformanceSummary />
│       │   │   ├── Selected Business Summary
│       │   │   ├── Key Stats (Life Span, Revenue, Profit)
│       │   │   ├── Benchmark Comparison
│       │   │   └── Performance Score
│       │   │
│       │   ├── <TrendCharts />
│       │   │   ├── Revenue Trend (6-month line chart)
│       │   │   ├── Profit Trend (6-month line chart)
│       │   │   ├── Cash Position Trend
│       │   │   ├── Margin Trend (Gross & Net)
│       │   │   ├── Inventory Turnover
│       │   │   └── Customer Count Growth
│       │   │
│       │   ├── <BusinessComparison />
│       │   │   ├── Comparison Table (all your businesses)
│       │   │   ├── Profitability Chart
│       │   │   └── "Try Next Business" Buttons
│       │   │
│       │   └── <LearningInsights />
│       │       ├── Concepts Mastered
│       │       ├── Areas to Improve
│       │       ├── Business Acumen Score
│       │       └── Certificate Preview (if ready)
│       │
│       ├── <FocusGuideModule /> (protected)
│       │   ├── Navigation Tabs
│       │   │   ├── [Daily] [Weekly] [Monthly] [Habits]
│       │   │
│       │   ├── <DailyChecklist />
│       │   │   ├── "Today's Priority Tasks"
│       │   │   ├── Task List (3-5 tasks with checkboxes)
│       │   │   ├── "Mark All Complete"
│       │   │   └── Reward notification
│       │   │
│       │   ├── <WeeklyReview />
│       │   │   ├── Performance Summary
│       │   │   ├── Learn Section (business concept)
│       │   │   ├── Plan Next Week
│       │   │   └── Optional Quiz
│       │   │
│       │   ├── <MonthlyStrategy />
│       │   │   ├── Month Review Dashboard
│       │   │   ├── Health Check
│       │   │   ├── Plan Next Month
│       │   │   └── Expert Insights
│       │   │
│       │   └── <HabitTracker />
│       │       ├── Streaks Display
│       │       ├── Badges Earned
│       │       ├── Leaderboard (optional)
│       │       └── Share Achievements
│       │
│       ├── <GoalsModule /> (protected)
│       │   ├── <GoalsList />
│       │   │   └── Goal Cards with progress
│       │   │
│       │   ├── <MilestoneTimeline />
│       │   │   └── Visual timeline (M1, M3, M6, M12)
│       │   │
│       │   ├── <BenchmarkComparison />
│       │   │   └── You vs Average vs Top Performers
│       │   │
│       │   └── <ProgressDashboard />
│       │       └── Overall goal progress
│       │
│       ├── <ProfileSettings /> (protected)
│       │   ├── User Profile
│       │   │   ├── Avatar
│       │   │   ├── Name
│       │   │   └── Email
│       │   ├── Preferences
│       │   │   ├── Theme (Light/Dark)
│       │   │   ├── Language (EN/HI)
│       │   │   ├── Notifications (Toggle, Frequency)
│       │   │   └── Data Export
│       │   ├── Account
│       │   │   ├── Change Password
│       │   │   ├── Privacy Settings
│       │   │   └── Delete Account
│       │   └── Help & Support
│       │       ├── FAQs
│       │       ├── Contact Support
│       │       └── About Dhanaadhya
│       │
│       └── <NotFound /> (404)
│
└── <ModalLayer />
    ├── <BusinessTypeSelector />
    ├── <ScenarioBuilder />
    ├── <DecisionDialog />
    ├── <HelpTooltips />
    └── <ConfirmationDialog />

```

---

## Component Organization Summary

**By Feature Area:**
- **Authentication**: Login, Register, Password Reset
- **Onboarding**: 5-step wizard
- **Dashboard**: Home hub with 7 cards
- **Simulation**: 4 main tabs (Operations, Market, Finance, Tax)
- **Focus Guide**: Daily, Weekly, Monthly, Habits
- **Goals**: Goals, Milestones, Benchmarks
- **Analytics**: Performance, Trends, Comparisons, Insights
- **Settings**: Profile, Preferences, Account

**By Component Type:**
- **Pages**: Landing, Auth, Onboarding, Dashboard, Simulation, Analytics, Profile
- **Cards**: MetricsCard, AlertCard, ForecastCard, GoalCard, etc
- **Tables**: Inventory, Employees, Orders, Expenses
- **Charts**: Line charts (Revenue, Forecast, CashFlow), Pie charts (Expenses, Market Share)
- **Modals**: Selectors, Builders, Dialogs
- **Utilities**: Tax Calculator, Simulation Engine, Data Viz, Notifications

**Total Component Count: ~80+ components** (across all layers)
