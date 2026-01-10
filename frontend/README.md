# Frontend Project Structure

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
frontend/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── widgets/       # 18 reusable widgets
│   │   │   ├── MetricWidgets.jsx    # MetricCard, HealthScore, ProgressBar
│   │   │   ├── ChartWidgets.jsx     # LineChart, BarChart, PieChart, Timeline
│   │   │   ├── DataWidgets.jsx      # Table, List, CardGrid
│   │   │   ├── InteractionWidgets.jsx # Checklist, Form, Tabs, ButtonGroup
│   │   │   └── CompositeWidgets.jsx # AlarmCard, Recommend, GoalCard
│   │   ├── Layout.jsx     # Layout components (Grid, Container, Headers)
│   │   └── Navigation.jsx # Navbar, Sidebar, Footer
│   ├── pages/             # Page components
│   │   └── DashboardPage.jsx
│   ├── store/             # State management (Zustand)
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── index.css          # Global styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Widget System

### Metric Widgets (3)
- `MetricCard` - Displays metric with trend
- `HealthScore` - Circular score indicator (1-10)
- `ProgressBar` - Progress towards goal

### Chart Widgets (4)
- `LineChartWidget` - Time series visualization
- `BarChartWidget` - Categorical comparison
- `PieChartWidget` - Proportion breakdown
- `TimelineChartWidget` - Milestone visualization

### Data Widgets (3)
- `TableWidget` - Tabular data display
- `ListWidget` - List item display
- `CardGridWidget` - Grid of cards

### Interaction Widgets (4)
- `ChecklistWidget` - Task management
- `FormWidget` - Form input
- `TabsWidget` - Tab navigation
- `ButtonGroupWidget` - Action buttons

### Composite Widgets (3)
- `AlarmCardWidget` - Alert with action
- `RecommendWidget` - AI recommendation
- `GoalCardWidget` - Goal with progress

## Technology Stack

- **React** 18.3.1
- **React Router** 6.21.0
- **Tailwind CSS** 3.4.0
- **Recharts** 2.10.3 (Charts)
- **Lucide React** 0.294.0 (Icons)
- **Zustand** 4.4.5 (State)
- **Vite** 5.0.8 (Build)

## Development Notes

- All components are responsive (mobile-first)
- Uses Tailwind CSS for styling
- No external UI library dependency
- LocalStorage for auth state
- IndexedDB for large datasets (future)

## Next Steps

1. Create remaining pages (Simulation, Analytics, Focus Guide)
2. Setup routing with React Router
3. Implement state management (Zustand store)
4. Add authentication flow
5. Connect to backend API
