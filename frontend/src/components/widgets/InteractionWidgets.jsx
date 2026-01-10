import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

/**
 * ChecklistWidget - Task/checklist management
 * @component
 * @example
 * <ChecklistWidget 
 *   title="Daily Tasks"
 *   items={taskList}
 * />
 */
export const ChecklistWidget = ({ title, items = [] }) => {
  const [checkedItems, setCheckedItems] = useState({})

  const toggleCheck = (id) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="card fade-in">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item.id} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-pointer">
            <input 
              type="checkbox" 
              checked={checkedItems[item.id] || false}
              onChange={() => toggleCheck(item.id)}
              className="w-4 h-4 text-blue-500 rounded"
            />
            <span className={`ml-3 text-sm ${checkedItems[item.id] ? 'line-through text-gray-400' : 'text-gray-900'}`}>
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}

/**
 * FormWidget - Simple form input
 * @component
 * @example
 * <FormWidget 
 *   title="Expense Entry"
 *   fields={expenseFields}
 * />
 */
export const FormWidget = ({ title, fields = [], onSubmit = () => {} }) => {
  const [formData, setFormData] = useState({})

  const handleChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({})
  }

  return (
    <div className="card fade-in">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">{title}</h3>
      <form onSubmit={handleSubmit} className="space-y-3">
        {fields.map((field) => (
          <div key={field.id}>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              {field.label}
            </label>
            <input
              type={field.type || 'text'}
              placeholder={field.placeholder}
              value={formData[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
          </div>
        ))}
        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

/**
 * TabsWidget - Tab navigation
 * @component
 * @example
 * <TabsWidget 
 *   tabs={[
 *     { label: 'Overview', content: <div>Overview content</div> },
 *     { label: 'Details', content: <div>Details content</div> }
 *   ]}
 * />
 */
export const TabsWidget = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="card fade-in">
      <div className="flex gap-2 border-b border-gray-200 mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === idx 
                ? 'text-blue-600 border-blue-500' 
                : 'text-gray-600 border-transparent hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}

/**
 * ButtonGroup Widget - Group of action buttons
 * @component
 * @example
 * <ButtonGroupWidget 
 *   buttons={[
 *     { label: 'Save', onClick: handleSave, variant: 'primary' },
 *     { label: 'Cancel', onClick: handleCancel }
 *   ]}
 * />
 */
export const ButtonGroupWidget = ({ buttons = [], layout = 'horizontal' }) => {
  const layoutClass = layout === 'vertical' ? 'flex-col' : 'flex-row'

  return (
    <div className={`flex gap-2 ${layoutClass}`}>
      {buttons.map((btn, idx) => (
        <button
          key={idx}
          onClick={btn.onClick}
          className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
            btn.variant === 'primary' 
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : btn.variant === 'danger'
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  )
}
