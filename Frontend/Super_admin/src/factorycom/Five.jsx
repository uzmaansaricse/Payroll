import React, { useState } from 'react';

const factories = [
  { id: 1, name: 'Sunrise Paints Plant' },
  { id: 2, name: 'Ocean Plastics Ltd' }, //ya
];

const defaultPermissions = {
  'Factory Manager / Plant Head': {
    'Approve Hires': true,
    'Edit Employees': true,
    'Approve Promotions': true,
    'Approve Shift Changes': true,
    'View Reports': false,
  },
};

export default function RolePermissionsManager1() {
  const [selectedFactory, setSelectedFactory] = useState(factories[0].id); //ya ha
  const [rolesData, setRolesData] = useState({
    1: { ...defaultPermissions },
    2: {
      'Factory Manager / Plant Head': {
        'Approve Hires': true,
        'Edit Employees': true,
        'Approve Promotions': true,
        'Approve Shift Changes': true,
        'View Reports': false,
      },
    },
  });

  const [newRole, setNewRole] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const [factoryHeads, setFactoryHeads] = useState({ 1: [], 2: [] });
  const [factoryHeadForm, setFactoryHeadForm] = useState({ name: '', email: '', phone: '' });

  const togglePermission = (role, permission) => {
    const updated = { ...rolesData };
    updated[selectedFactory][role][permission] = !updated[selectedFactory][role][permission];
    setRolesData(updated);
  };

  const handleAddRole = () => {
    if (!newRole.trim()) return;

    setRolesData(prev => ({
      ...prev,
      [selectedFactory]: {
        ...prev[selectedFactory],
        [newRole]: {
          'Approve Hires': false,
          'Edit Employees': false,
          'Approve Promotions': false,
          'Approve Shift Changes': false,
          'View Reports': false,
        },
      },
    }));
    setNewRole('');
  };

  const handleFactoryHeadChange = (e) => {
    setFactoryHeadForm({ ...factoryHeadForm, [e.target.name]: e.target.value });
  };

  const handleAddFactoryHead = () => {
    const { name, email, phone } = factoryHeadForm;
    if (!name || !email || !phone) return;

    setFactoryHeads(prev => ({
      ...prev,
      [selectedFactory]: [
        ...(prev[selectedFactory] || []),
        { name, email, phone },
      ],
    }));

    setFactoryHeadForm({ name: '', email: '', phone: '' });
  };

  const handleSubmit = () => {
    setSubmittedData({
      roles: rolesData,
    });
    console.log('Submitted Roles:', rolesData);
    alert('Data submitted! See table below.');
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
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

      {/* Role Permissions Table */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="text-lg font-semibold mb-4">Roles & Permissions</h3>

        {Object.entries(rolesData[selectedFactory] || {}).map(([role, permissions], i) => (
          <div key={i} className="mb-6">
            <h4 className="font-medium text-gray-700 mb-2">{role}</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(permissions).map(([perm, val], idx) => (
                <label key={idx} className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={val}
                    onChange={() => togglePermission(role, perm)}
                    className="form-checkbox h-4 w-4 text-blue-600"
                  />
                  {perm}
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Add Custom Role */}
        <div className="border-t pt-4 mt-4">
          <div className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Add new role"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="border rounded p-2 w-full"
            />
            <button
              onClick={handleAddRole}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Add Role
            </button>
          </div>
        </div>
      </div>

      {/* Add Factory Head */}
      <div className="bg-white shadow rounded p-6">
        <h3 className="text-lg font-semibold mb-4">Add Factory Head</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            name="name"
            value={factoryHeadForm.name}
            onChange={handleFactoryHeadChange}
            placeholder="Name"
            className="border rounded p-2"
          />
          <input
            type="email"
            name="email"
            value={factoryHeadForm.email}
            onChange={handleFactoryHeadChange}
            placeholder="Email"
            className="border rounded p-2"
          />
          <input
            type="text"
            name="phone"
            value={factoryHeadForm.phone}
            onChange={handleFactoryHeadChange}
            placeholder="Phone Number"
            className="border rounded p-2"
          />
        </div>
        <button
          onClick={handleAddFactoryHead}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Factory Head
        </button>

        {/* Display Added Factory Heads */}
        {factoryHeads[selectedFactory]?.length > 0 && (
          <div className="mt-6">
            <h4 className="font-medium text-gray-700 mb-2">Added Factory Heads:</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-800">
              {factoryHeads[selectedFactory].map((head, i) => (
                <li key={i}>{head.name} — {head.email} — {head.phone}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="text-right">
        <button
          onClick={handleSubmit}
          className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 mt-6"
        >
          Submit All
        </button>
      </div>

      {/* Submitted Data Display */}
      {submittedData && (
        <div className="bg-white shadow rounded p-6 mt-8 space-y-6">
          <h3 className="text-xl font-semibold">📋 Submitted Roles</h3>

          {factories.map(factory => (
            <div key={factory.id}>
              <h4 className="text-lg font-medium mb-2">{factory.name}</h4>

              {/* Roles Table */}
              <div className="overflow-auto mb-4">
                <table className="min-w-full border text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border px-3 py-2">Role</th>
                      {Object.keys(defaultPermissions['Factory Manager / Plant Head']).map((perm, i) => (
                        <th key={i} className="border px-3 py-2">{perm}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {submittedData.roles[factory.id] &&
                      Object.entries(submittedData.roles[factory.id]).map(([role, perms], i) => (
                        <tr key={i}>
                          <td className="border px-3 py-2">{role}</td>
                          {Object.keys(defaultPermissions['Factory Manager / Plant Head']).map((perm, j) => (
                            <td key={j} className="border px-3 py-2 text-center">
                              {perms[perm] ? '✅' : '❌'}
                            </td>
                          ))}
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
