import React from 'react'

/**
 * MetricCard Widget - Displays a key metric with value and trend
 * @component
 * @example
 * <MetricCard 
 *   title="Monthly Revenue"
 *   value="₹2,45,000"
 *   trend={+12.5}
 *   icon="TrendingUp"
 * />
 */
export const MetricCard = ({ title, value, trend, icon: Icon, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 border-blue-200 text-blue-600',
    green: 'bg-green-50 border-green-200 text-green-600',
    red: 'bg-red-50 border-red-200 text-red-600',
    purple: 'bg-purple-50 border-purple-200 text-purple-600',
    orange: 'bg-orange-50 border-orange-200 text-orange-600',
  }

  const isPositive = trend >= 0

  return (
    <div className={`card ${colorClasses[color]} fade-in`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-2">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          {trend !== undefined && (
            <p className={`text-xs mt-2 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
              {isPositive ? '↑' : '↓'} {Math.abs(trend)}% from last month
            </p>
          )}
        </div>
        {Icon && <Icon className="w-8 h-8 opacity-20" />}
      </div>
    </div>
  )
}

/**
 * HealthScore Widget - Circular health score indicator (1-10)
 * @component
 * @example
 * <HealthScore score={7.5} label="Business Health" />
 */
export const HealthScore = ({ score = 7.5, label = 'Health Score' }) => {
  const getScoreColor = (score) => {
    if (score >= 8) return 'text-green-600'
    if (score >= 6) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getScoreBg = (score) => {
    if (score >= 8) return 'bg-green-50'
    if (score >= 6) return 'bg-yellow-50'
    return 'bg-red-50'
  }

  return (
    <div className={`card ${getScoreBg(score)} flex flex-col items-center justify-center fade-in`}>
      <p className="text-sm text-gray-600 mb-4">{label}</p>
      <div className="relative w-24 h-24 rounded-full border-4 flex items-center justify-center" style={{
        borderColor: score >= 8 ? '#10b981' : score >= 6 ? '#f59e0b' : '#ef4444'
      }}>
        <div className="text-center">
          <p className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}</p>
          <p className="text-xs text-gray-500">/10</p>
        </div>
      </div>
    </div>
  )
}

/**
 * ProgressBar Widget - Shows progress towards a goal
 * @component
 * @example
 * <ProgressBar 
 *   label="Monthly Target"
 *   current={75}
 *   target={100}
 *   unit="%"
 * />
 */
export const ProgressBar = ({ label, current = 65, target = 100, unit = '%', color = 'blue' }) => {
  const percentage = (current / target) * 100
  
  const progressColors = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
  }

  return (
    <div className="card fade-in">
      <div className="flex justify-between mb-2">
        <p className="text-sm text-gray-600">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{current}/{target}{unit}</p>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={`h-3 rounded-full transition-all duration-300 ${progressColors[color]}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  )
}
