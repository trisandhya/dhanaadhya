import React from 'react'
import { Container, PageHeader, SectionHeader, ResponsiveGrid, GridItem } from '@components/Layout'
import { MetricCard, HealthScore, ProgressBar } from '@components/widgets/MetricWidgets'
import { LineChartWidget, BarChartWidget } from '@components/widgets/ChartWidgets'
import { AlarmCardWidget, RecommendWidget, GoalCardWidget } from '@components/widgets/CompositeWidgets'
import { TrendingUp, AlertCircle, Target } from 'lucide-react'

/**
 * Dashboard Page - Main overview of business
 * Shows: Health score, key metrics, recent alerts, forecasts, recommendations
 */
export const DashboardPage = () => {
  // Mock data
  const metrics = {
    revenue: { title: 'Monthly Revenue', value: '₹2,45,000', trend: 12.5, icon: TrendingUp, color: 'green' },
    expenses: { title: 'Total Expenses', value: '₹89,000', trend: -3.2, icon: TrendingUp, color: 'red' },
    profitMargin: { title: 'Profit Margin', value: '63.7%', trend: 5.1, icon: TrendingUp, color: 'blue' },
    inventory: { title: 'Inventory Value', value: '₹4,50,000', trend: 2.3, icon: TrendingUp, color: 'purple' },
  }

  const revenueData = [
    { month: 'Jan', revenue: 180000 },
    { month: 'Feb', revenue: 195000 },
    { month: 'Mar', revenue: 210000 },
    { month: 'Apr', revenue: 245000 },
  ]

  const expenseData = [
    { name: 'Raw Materials', value: 35 },
    { name: 'Labor', value: 25 },
    { name: 'Utilities', value: 15 },
    { name: 'Marketing', value: 15 },
    { name: 'Other', value: 10 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <PageHeader 
          title="Dashboard" 
          subtitle="Overview of your business health and performance"
        />

        {/* Top Row - Metrics */}
        <SectionHeader title="Key Metrics" />
        <ResponsiveGrid columns={4} gap={4} className="mb-8">
          <GridItem>
            <MetricCard {...metrics.revenue} />
          </GridItem>
          <GridItem>
            <MetricCard {...metrics.expenses} />
          </GridItem>
          <GridItem>
            <MetricCard {...metrics.profitMargin} />
          </GridItem>
          <GridItem>
            <MetricCard {...metrics.inventory} />
          </GridItem>
        </ResponsiveGrid>

        {/* Health Score & Progress */}
        <ResponsiveGrid columns={3} gap={4} className="mb-8">
          <GridItem>
            <HealthScore score={7.5} label="Business Health" />
          </GridItem>
          <GridItem>
            <ProgressBar label="Q1 Revenue Target" current={245} target={300} unit="K" color="blue" />
          </GridItem>
          <GridItem>
            <ProgressBar label="Inventory Turnover" current={75} target={100} unit="%" color="green" />
          </GridItem>
        </ResponsiveGrid>

        {/* Charts Row */}
        <SectionHeader title="Performance Trends" />
        <ResponsiveGrid columns={2} gap={4} className="mb-8">
          <GridItem>
            <LineChartWidget 
              title="Revenue Trend"
              data={revenueData}
              dataKey="revenue"
              xKey="month"
            />
          </GridItem>
          <GridItem>
            <BarChartWidget 
              title="Monthly Comparison"
              data={revenueData}
              dataKey="revenue"
              xKey="month"
            />
          </GridItem>
        </ResponsiveGrid>

        {/* Alerts & Recommendations */}
        <SectionHeader title="Alerts & Insights" />
        <ResponsiveGrid columns={1} gap={4} className="mb-8">
          <GridItem>
            <AlarmCardWidget 
              title="Low Inventory Alert"
              message="SKU-001 stock is below reorder threshold. Current stock: 45 units"
              severity="warning"
            />
          </GridItem>
          <GridItem>
            <RecommendWidget 
              title="Increase Marketing Spend"
              description="Your conversion rate improved by 15% this month"
              reasoning="Market trend analysis suggests high demand. Similar businesses increased spend by 20%"
            />
          </GridItem>
          <GridItem>
            <GoalCardWidget 
              title="₹10L Revenue Target"
              current={6.5}
              target={10}
              deadline="Mar 31, 2024"
              status="on-track"
            />
          </GridItem>
        </ResponsiveGrid>
      </Container>
    </div>
  )
}

export default DashboardPage
