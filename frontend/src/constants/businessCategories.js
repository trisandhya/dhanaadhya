/**
 * MSME Business Categories
 * Comprehensive list of business types for Indian MSMEs
 */

export const MSME_CATEGORIES = [
  // Manufacturing
  { id: 'textiles', name: 'Textiles & Apparel', category: 'Manufacturing', icon: '👗' },
  { id: 'metals', name: 'Metals & Metal Products', category: 'Manufacturing', icon: '⚙️' },
  { id: 'electronics', name: 'Electronics & Electrical', category: 'Manufacturing', icon: '⚡' },
  { id: 'chemicals', name: 'Chemicals & Pharma', category: 'Manufacturing', icon: '🧪' },
  { id: 'food', name: 'Food & Beverages', category: 'Manufacturing', icon: '🍲' },
  { id: 'agri', name: 'Agri & Food Processing', category: 'Manufacturing', icon: '🌾' },
  { id: 'leather', name: 'Leather & Leather Products', category: 'Manufacturing', icon: '👜' },
  { id: 'plastics', name: 'Plastics & Rubber', category: 'Manufacturing', icon: '♻️' },
  { id: 'ceramics', name: 'Ceramics & Glass', category: 'Manufacturing', icon: '🏺' },
  
  // Services
  { id: 'retail', name: 'Retail & E-commerce', category: 'Services', icon: '🛍️' },
  { id: 'healthcare', name: 'Healthcare & Wellness', category: 'Services', icon: '⚕️' },
  { id: 'education', name: 'Education & Training', category: 'Services', icon: '📚' },
  { id: 'hospitality', name: 'Hospitality & Tourism', category: 'Services', icon: '🏨' },
  { id: 'logistics', name: 'Logistics & Transport', category: 'Services', icon: '🚚' },
  { id: 'it_services', name: 'IT & Software Services', category: 'Services', icon: '💻' },
  { id: 'consulting', name: 'Consulting & Advisory', category: 'Services', icon: '📊' },
  { id: 'realestate', name: 'Real Estate & Construction', category: 'Services', icon: '🏗️' },
  
  // Trading & Distribution
  { id: 'wholesale', name: 'Wholesale & Distribution', category: 'Trading', icon: '📦' },
  { id: 'export', name: 'Import & Export', category: 'Trading', icon: '🌍' },
  { id: 'trading', name: 'General Trading', category: 'Trading', icon: '💼' },
  
  // Professional Services
  { id: 'accounting', name: 'Accounting & Finance', category: 'Professional', icon: '💰' },
  { id: 'legal', name: 'Legal Services', category: 'Professional', icon: '⚖️' },
  { id: 'insurance', name: 'Insurance & Broking', category: 'Professional', icon: '🛡️' },
  
  // Other
  { id: 'agriculture', name: 'Agriculture & Farming', category: 'Agriculture', icon: '🚜' },
  { id: 'beauty', name: 'Beauty & Wellness', category: 'Services', icon: '💅' },
  { id: 'automotive', name: 'Automotive & Repairs', category: 'Manufacturing', icon: '🚗' },
]

export const BUSINESS_CATEGORIES_GROUPED = {
  Manufacturing: MSME_CATEGORIES.filter(b => b.category === 'Manufacturing'),
  Services: MSME_CATEGORIES.filter(b => b.category === 'Services'),
  Trading: MSME_CATEGORIES.filter(b => b.category === 'Trading'),
  Professional: MSME_CATEGORIES.filter(b => b.category === 'Professional'),
  Agriculture: MSME_CATEGORIES.filter(b => b.category === 'Agriculture'),
}

export const getBusinessById = (id) => {
  return MSME_CATEGORIES.find(b => b.id === id)
}

export const getBusinessCategory = (id) => {
  const business = getBusinessById(id)
  return business?.category || null
}
