import React, { useState } from 'react'

export default function Bone() {
  const factories = [
    { id: 1, name: 'Sunrise Paints Plant' },
    { id: 2, name: 'Ocean Plastics Ltd' }, //ya
  ];
  const [selectedFactory, setSelectedFactory] = useState(factories[0].id);
  return (
    <div className='p-5 w-full h-screen'>
      <h2 className="text-2xl font-bold">🔐 Configure Roles & Permissions</h2>

      {/* Factory Selection */}
      <div className="bg-white shadow rounded p-4">
        <label className="block mb-2 font-medium text-sm">Select Factory</label>
        <select
          value={selectedFactory}
          onChange={(e) => setSelectedFactory(Number(e.target.value))}
          className="border rounded p-2 w-full"
        >
          {factories.map(f => (
            <option key={f.id} value={f.id}>{f.name}</option>
          ))}
        </select>
      </div>
    </div>
  )
}
