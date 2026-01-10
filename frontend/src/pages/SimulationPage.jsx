import React from 'react'
import { Container, PageHeader, SectionHeader, ResponsiveGrid, GridItem } from '@components/Layout'
import { TabsWidget } from '@components/widgets/InteractionWidgets'
import { LineChartWidget, BarChartWidget } from '@components/widgets/ChartWidgets'
import { TableWidget, ListWidget } from '@components/widgets/DataWidgets'

/**
 * Simulation Page - Business scenario simulator
 * Allows users to adjust parameters and see outcomes
 */
export const SimulationPage = () => {
  const operationsData = [
    { month: 'Jan', production: 500, waste: 50, efficiency: 90 },
    { month: 'Feb', production: 520, waste: 45, efficiency: 92 },
    { month: 'Mar', production: 550, waste: 40, efficiency: 93 },
  ]

  const tabs = [
    {
      label: 'Operations',
      content: (
        <div className="space-y-4">
          <LineChartWidget 
            title="Production vs Waste"
            data={operationsData}
            dataKey="production"
          />
        </div>
      )
    },
    {
      label: 'Market',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Market simulation scenarios</p>
        </div>
      )
    },
    {
      label: 'Finance',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Financial forecasting and scenarios</p>
        </div>
      )
    },
    {
      label: 'Tax',
      content: (
        <div className="space-y-4">
          <p className="text-gray-600">Tax planning and compliance scenarios</p>
        </div>
      )
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <PageHeader 
          title="Business Simulator" 
          subtitle="Simulate different business scenarios and see outcomes"
        />

        <SectionHeader title="Simulation Scenarios" />
        <ResponsiveGrid columns={1} gap={4} className="mb-8">
          <GridItem>
            <TabsWidget tabs={tabs} />
          </GridItem>
        </ResponsiveGrid>
      </Container>
    </div>
  )
}

export default SimulationPage
