import React from 'react'

/**
 * AlarmCard Widget - Alert with action
 * @component
 * @example
 * <AlarmCardWidget 
 *   title="Low Inventory Alert"
 *   message="Item SKU-001 stock below threshold"
 *   severity="warning"
 * />
 */
export const AlarmCardWidget = ({ title, message, severity = 'info', onAction = () => {} }) => {
  const severityStyles = {
    info: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    success: 'bg-green-50 border-green-200 text-green-800',
  }

  const severityIconBg = {
    info: 'bg-blue-500',
    warning: 'bg-yellow-500',
    error: 'bg-red-500',
    success: 'bg-green-500',
  }

  return (
    <div className={`card ${severityStyles[severity]} border-l-4 fade-in`}>
      <div className="flex items-start gap-3">
        <div className={`w-2 h-2 ${severityIconBg[severity]} rounded-full mt-2 flex-shrink-0`} />
        <div className="flex-1">
          <p className="font-semibold text-sm">{title}</p>
          <p className="text-sm mt-1 opacity-90">{message}</p>
          <button
            onClick={onAction}
            className="text-sm font-medium mt-2 underline hover:opacity-70 transition-opacity"
          >
            Take Action
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * RecommendWidget - Recommendation with rationale and action
 * @component
 * @example
 * <RecommendWidgetWidget 
 *   title="Increase Marketing Spend"
 *   description="Your conversion rate improved by 15%"
 *   reasoning="Market trend analysis suggests high demand"
 * />
 */
export const RecommendWidget = ({ title, description, reasoning, action = 'Learn More' }) => {
  return (
    <div className="card bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200 fade-in">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-semibold text-sm text-gray-900">{title}</p>
          <p className="text-xs text-gray-600 mt-1">{description}</p>
        </div>
        <span className="px-2 py-1 bg-purple-200 text-purple-800 text-xs rounded font-medium">
          AI Recommendation
        </span>
      </div>
      <div className="bg-white/50 p-3 rounded-lg mt-3">
        <p className="text-xs text-gray-700">
          <span className="font-medium">Why?</span> {reasoning}
        </p>
      </div>
      <button className="mt-3 text-sm font-medium text-purple-600 hover:text-purple-700">
        {action} →
      </button>
    </div>
  )
}

/**
 * GoalCard Widget - Goal with progress and timeline
 * @component
 * @example
 * <GoalCardWidget 
 *   title="₹10L Revenue Target"
 *   current={6.5}
 *   target={10}
 *   deadline="Mar 31, 2024"
 *   status="on-track"
 * />
 */
export const GoalCardWidget = ({ title, current, target, deadline, status = 'on-track' }) => {
  const percentage = (current / target) * 100
  
  const statusStyles = {
    'on-track': { color: 'green', bg: 'bg-green-50', border: 'border-green-200' },
    'at-risk': { color: 'yellow', bg: 'bg-yellow-50', border: 'border-yellow-200' },
    'off-track': { color: 'red', bg: 'bg-red-50', border: 'border-red-200' },
  }

  const style = statusStyles[status]
  const statusBadgeColor = {
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
    red: 'bg-red-500',
  }

  return (
    <div className={`card ${style.bg} ${style.border} fade-in`}>
      <div className="flex items-start justify-between mb-3">
        <p className="font-semibold text-sm text-gray-900">{title}</p>
        <span className={`px-2 py-1 ${statusBadgeColor[style.color]} text-white text-xs rounded font-medium capitalize`}>
          {status}
        </span>
      </div>
      
      <div className="mb-3">
        <div className="flex justify-between text-xs mb-2">
          <span className="text-gray-600">Progress</span>
          <span className="font-semibold text-gray-900">₹{current}L / ₹{target}L</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 bg-${style.color}-500`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-gray-600">
        Deadline: <span className="font-medium">{deadline}</span>
      </p>
    </div>
  )
}
