import React, { useState } from 'react'
import { Container, PageHeader, SectionHeader, ResponsiveGrid, GridItem } from '@components/Layout'
import { TabsWidget, ChecklistWidget } from '@components/widgets/InteractionWidgets'
import { LineChartWidget } from '@components/widgets/ChartWidgets'
import { ListWidget } from '@components/widgets/DataWidgets'

/**
 * Focus Guide Page - Daily/Weekly/Monthly guidance and tracking
 */
export const FocusGuidePage = () => {
  const dailyTasks = [
    { id: 1, label: 'Review cash flow', description: 'Check daily transactions' },
    { id: 2, label: 'Follow up with clients', description: 'Pending payments' },
    { id: 3, label: 'Check inventory levels', description: 'Reorder if needed' },
    { id: 4, label: 'Update sales log', description: 'Record daily sales' },
  ]

  const weeklyGoals = [
    { id: 1, label: 'Analyze weekly sales trend', description: 'Compare with last week' },
    { id: 2, label: 'Plan marketing campaign', description: 'Next week promotion' },
    { id: 3, label: 'Staff meeting', description: 'Review KPIs and goals' },
    { id: 4, label: 'Supplier review', description: 'Quality and pricing check' },
  ]

  const trendData = [
    { month: 'Week 1', score: 6.5 },
    { month: 'Week 2', score: 7.0 },
    { month: 'Week 3', score: 7.2 },
    { month: 'Week 4', score: 7.5 },
  ]

  const tabs = [
    {
      label: 'Daily',
      content: (
        <div className="space-y-4">
          <ChecklistWidget title="Daily Tasks" items={dailyTasks} />
        </div>
      )
    },
    {
      label: 'Weekly',
      content: (
        <div className="space-y-4">
          <ChecklistWidget title="Weekly Goals" items={weeklyGoals} />
        </div>
      )
    },
    {
      label: 'Monthly',
      content: (
        <div className="space-y-4">
          <ListWidget 
            title="Monthly Priorities"
            items={[
              { label: 'Financial Review', description: 'Monthly P&L', value: 'Due: 3rd' },
              { label: 'Tax Planning', description: 'Quarterly compliance', value: 'Due: 15th' },
              { label: 'Growth Planning', description: 'Next quarter strategy', value: 'Due: 20th' },
            ]}
          />
        </div>
      )
    },
    {
      label: 'Habits',
      content: (
        <div className="space-y-4">
          <LineChartWidget 
            title="Business Health Trend"
            data={trendData}
            dataKey="score"
            xKey="month"
          />
        </div>
      )
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <PageHeader 
          title="Focus Guide" 
          subtitle="Daily, weekly, and monthly actions to improve your business"
        />

        <SectionHeader title="Guidance by Time Period" />
        <ResponsiveGrid columns={1} gap={4} className="mb-8">
          <GridItem>
            <TabsWidget tabs={tabs} />
          </GridItem>
        </ResponsiveGrid>
      </Container>
    </div>
  )
}

export default FocusGuidePage
