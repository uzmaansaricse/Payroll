import React, { useState } from 'react';

const factories = [
  { id: 1, name: 'Sunrise Paints Plant' },
  { id: 2, name: 'Ocean Plastics Ltd' },
  { id: 3, name: 'Mountain Cement Works' },
];

const defaultDepartments = [
  'Production',
  'Quality',
  'Maintenance',
  'HR',
  'Stores',
  'Safety',
];

export default function DepartmentManagement() {
  const [selectedFactoryId, setSelectedFactoryId] = useState(factories[0].id);
  const [departmentsData, setDepartmentsData] = useState({
    1: [...defaultDepartments],
    2: ['Production', 'HR'],
    3: ['Quality', 'Maintenance'],
  });
  const [newDepartment, setNewDepartment] = useState('');

  const handleAddDepartment = () => {
    if (!newDepartment.trim()) return;

    setDepartmentsData(prev => {
      const updated = { ...prev };
      updated[selectedFactoryId] = [...(updated[selectedFactoryId] || []), newDepartment];
      return updated;
    });
    setNewDepartment('');
  };

  const handleDeleteDepartment = (dept) => {
    setDepartmentsData(prev => {
      const updated = { ...prev };
      updated[selectedFactoryId] = updated[selectedFactoryId].filter(d => d !== dept);
      return updated;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">🏭 Department Management</h2>

      <div className="bg-white shadow rounded p-4">
        <label className="block mb-2 text-sm font-medium">Select Factory</label>
        <select
          value={selectedFactoryId}
          onChange={(e) => setSelectedFactoryId(Number(e.target.value))}
          className="border p-2 rounded w-full"
        >
          {factories.map(f => (
            <option key={f.id} value={f.id}>{f.name}</option>
          ))}
        </select>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h3 className="text-lg font-semibold mb-3">Departments</h3>

        <ul className="list-disc pl-5 space-y-1 mb-4">
          {(departmentsData[selectedFactoryId] || []).map((dept, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{dept}</span>
              <button
                onClick={() => handleDeleteDepartment(dept)}
                className="text-red-600 text-sm hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="Add custom department"
            value={newDepartment}
            onChange={(e) => setNewDepartment(e.target.value)}
            className="border rounded p-2 w-full"
          />
          <button
            onClick={handleAddDepartment}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
