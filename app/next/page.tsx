import React from 'react'

const Page = () => {
  // Demi (small) data
  const demiData = [
    { id: 1, name: 'John Doe', role: 'Developer' },
    { id: 2, name: 'Jane Smith', role: 'Designer' },
  ]

  // Large data example (can be generated dynamically)
  const largeData = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    role: `Role ${index + 1}`,
  }))

  return (
    <div className="p-4">
      {/* Small Data Section */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Demi Data</h2>
        <ul className="space-y-2">
          {demiData.map(item => (
            <li key={item.id} className="p-3 bg-gray-900 rounded-lg shadow-sm">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.role}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Large Data Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Large Data (100 Items)</h2>
        <ul className="space-y-2">
          {largeData.map(item => (
            <li key={item.id} className="p-3 bg-gray-900 rounded-lg shadow-sm">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-600">{item.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Page
