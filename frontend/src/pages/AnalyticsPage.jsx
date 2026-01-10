import React from 'react'
import { Container, PageHeader, SectionHeader, ResponsiveGrid, GridItem } from '@components/Layout'
import { LineChartWidget, BarChartWidget, PieChartWidget } from '@components/widgets/ChartWidgets'
import { TableWidget } from '@components/widgets/DataWidgets'

/**
 * Analytics Page - Business performance analytics
 */
export const AnalyticsPage = () => {
  const revenueData = [
    { month: 'Jan', revenue: 180000, expenses: 90000 },
    { month: 'Feb', revenue: 195000, expenses: 92000 },
    { month: 'Mar', revenue: 210000, expenses: 88000 },
    { month: 'Apr', revenue: 245000, expenses: 95000 },
  ]

  const categoryData = [
    { name: 'Category A', value: 35 },
    { name: 'Category B', value: 25 },
    { name: 'Category C', value: 20 },
    { name: 'Category D', value: 20 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <PageHeader 
          title="Analytics" 
          subtitle="Detailed business performance metrics and insights"
        />

        <SectionHeader title="Revenue Analysis" />
        <ResponsiveGrid columns={2} gap={4} className="mb-8">
          <GridItem>
            <LineChartWidget 
              title="Revenue & Expenses"
              data={revenueData}
              dataKey="revenue"
              height={300}
            />
          </GridItem>
          <GridItem>
            <BarChartWidget 
              title="Monthly Comparison"
              data={revenueData}
              dataKey="revenue"
              height={300}
            />
          </GridItem>
        </ResponsiveGrid>

        <SectionHeader title="Category Analysis" />
        <ResponsiveGrid columns={1} gap={4} className="mb-8">
          <GridItem>
            <PieChartWidget 
              title="Revenue by Category"
              data={categoryData}
              height={300}
            />
          </GridItem>
        </ResponsiveGrid>

        <SectionHeader title="Top Products" />
        <ResponsiveGrid columns={1} gap={4} className="mb-8">
          <GridItem>
            <TableWidget 
              title="Product Performance"
              columns={['Product', 'Sales', 'Revenue', 'Margin']}
              data={[
                { Product: 'Product A', Sales: '150 units', Revenue: '₹75,000', Margin: '45%' },
                { Product: 'Product B', Sales: '120 units', Revenue: '₹72,000', Margin: '50%' },
                { Product: 'Product C', Sales: '95 units', Revenue: '₹57,000', Margin: '48%' },
              ]}
            />
          </GridItem>
        </ResponsiveGrid>
      </Container>
    </div>
  )
}

export default AnalyticsPage
