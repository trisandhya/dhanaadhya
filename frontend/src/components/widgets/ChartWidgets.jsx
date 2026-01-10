import React from 'react'
import { LineChart as RechartLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { BarChart as RechartBar, Bar, Legend, PieChart as RechartPie, Pie, Cell } from 'recharts'

/**
 * LineChart Widget - Time series data visualization
 * @component
 * @example
 * <LineChartWidget 
 *   title="Revenue Trend"
 *   data={revenueData}
 *   dataKey="revenue"
 * />
 */
export const LineChartWidget = ({ title, data = [], dataKey = 'value', xKey = 'month', height = 300 }) => {
  return (
    <div className="card fade-in">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <RechartLine data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey={xKey} stroke="#9CA3AF" style={{ fontSize: '12px' }} />
          <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
            labelStyle={{ color: '#1f2937' }}
          />
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke="#0ea5e9" 
            dot={false}
            strokeWidth={2}
            isAnimationActive={true}
          />
        </RechartLine>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * BarChart Widget - Categorical comparison
 * @component
 * @example
 * <BarChartWidget 
 *   title="Sales by Category"
 *   data={categoryData}
 * />
 */
export const BarChartWidget = ({ title, data = [], dataKey = 'value', xKey = 'name', height = 300 }) => {
  return (
    <div className="card fade-in">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <RechartBar data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey={xKey} stroke="#9CA3AF" style={{ fontSize: '12px' }} />
          <YAxis stroke="#9CA3AF" style={{ fontSize: '12px' }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
          />
          <Bar dataKey={dataKey} fill="#0ea5e9" radius={[8, 8, 0, 0]} />
        </RechartBar>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * PieChart Widget - Proportion visualization
 * @component
 * @example
 * <PieChartWidget 
 *   title="Expense Breakdown"
 *   data={expenseData}
 * />
 */
export const PieChartWidget = ({ title, data = [], dataKey = 'value', nameKey = 'name', height = 300 }) => {
  const COLORS = ['#0ea5e9', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']

  return (
    <div className="card fade-in">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={height}>
        <RechartPie data={data} dataKey={dataKey} nameKey={nameKey} cx="50%" cy="50%" outerRadius={80}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </RechartPie>
      </ResponsiveContainer>
    </div>
  )
}

/**
 * TimelineChart Widget - Milestone and event visualization
 * @component
 * @example
 * <TimelineChartWidget 
 *   title="Business Milestones"
 *   events={milestones}
 * />
 */
export const TimelineChartWidget = ({ title, events = [] }) => {
  return (
    <div className="card fade-in">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{event.title}</p>
              <p className="text-xs text-gray-500 mt-1">{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
