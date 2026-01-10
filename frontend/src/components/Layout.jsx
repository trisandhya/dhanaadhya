import React from 'react'

/**
 * Layout component for responsive grid
 * Supports 12-column layout with responsive breakpoints
 */
export const ResponsiveGrid = ({ children, columns = 3, gap = 4, className = '' }) => {
  return (
    <div 
      className={`grid gap-${gap} ${className}`}
      style={{ 
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
      }}
    >
      {children}
    </div>
  )
}

/**
 * Grid item with customizable span
 */
export const GridItem = ({ children, colSpan = 1, rowSpan = 1, className = '' }) => {
  return (
    <div 
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`
      }}
      className={className}
    >
      {children}
    </div>
  )
}

/**
 * Container for page sections
 */
export const Container = ({ children, maxWidth = 'max-w-7xl', className = '' }) => {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidth} ${className}`}>
      {children}
    </div>
  )
}

/**
 * Page header component
 */
export const PageHeader = ({ title, subtitle, action = null }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
        </div>
        {action && <div>{action}</div>}
      </div>
    </div>
  )
}

/**
 * Section header component
 */
export const SectionHeader = ({ title, description = null }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
    </div>
  )
}

export default {
  ResponsiveGrid,
  GridItem,
  Container,
  PageHeader,
  SectionHeader
}
