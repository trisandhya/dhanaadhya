import React, { useState } from 'react'

/**
 * TableWidget - Displays tabular data
 * @component
 * @example
 * <TableWidget 
 *   title="Inventory"
 *   columns={['Item', 'Quantity', 'Value']}
 *   data={inventoryData}
 * />
 */
export const TableWidget = ({ title, columns = [], data = [] }) => {
  return (
    <div className="card fade-in overflow-hidden">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              {columns.map((col, idx) => (
                <th key={idx} className="px-4 py-3 text-left text-gray-700 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className="px-4 py-3 text-gray-900">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

/**
 * ListWidget - Displays a list of items
 * @component
 * @example
 * <ListWidget 
 *   title="Recent Orders"
 *   items={ordersList}
 * />
 */
export const ListWidget = ({ title, items = [] }) => {
  return (
    <div className="card fade-in">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100">
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{item.label}</p>
              {item.description && <p className="text-xs text-gray-500">{item.description}</p>}
            </div>
            {item.value && <p className="text-sm font-semibold text-gray-900">{item.value}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * CardGrid Widget - Grid of cards
 * @component
 * @example
 * <CardGridWidget 
 *   title="Products"
 *   cards={productCards}
 *   columns={3}
 * />
 */
export const CardGridWidget = ({ title, cards = [], columns = 3 }) => {
  return (
    <div className="card fade-in">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <div className={`grid grid-cols-${columns} gap-4`} style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {cards.map((card, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg hover:shadow-md transition-shadow">
            <p className="text-xs text-gray-600 mb-2">{card.label}</p>
            <p className="text-lg font-bold text-gray-900">{card.value}</p>
            {card.subtitle && <p className="text-xs text-gray-500 mt-2">{card.subtitle}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
