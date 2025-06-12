import React, { useState } from 'react';

export default function FactoryManagement() {
  const [factories, setFactories] = useState([
    {
      id: 1,
      code: 'FAC-001',
      name: 'Sunrise Paints Plant',
      address: '123 Industrial Ave, Springfield, IL 62704',
      businessUnit: 'Automotive Paints',
      contactPerson: 'Alice Johnson',
      contactPhone: '+1 (555) 123-4567',
      capacity: '10,000 tons/year',
      openingDate: '2015-06-01',
      status: 'Active',
      complianceRegion: 'EPA Region 5',
      employees: 250,
      latitude: '39.7817° N',
      longitude: '89.6501° W',
    },
    {
      id: 2,
      code: 'FAC-002',
      name: 'Evergreen Textiles Mill',
      address: '88 Cotton Ln, Dalton, GA',
      businessUnit: 'Home Furnishing',
      contactPerson: 'Rahul Mehta',
      contactPhone: '+1 (555) 654-7890',
      capacity: '25,000 spindles',
      openingDate: '2012-04-15',
      status: 'Active',
      complianceRegion: 'OSHA SouthEast',
      employees: 400,
      latitude: '34.7692° N',
      longitude: '84.9702° W',
    },
    {
      id: 3,
      code: 'FAC-003',
      name: 'SteelStrong Works',
      address: '400 Foundry St, Pittsburgh, PA',
      businessUnit: 'Heavy Engineering',
      contactPerson: 'Lisa Ray',
      contactPhone: '+1 (555) 987-3210',
      capacity: '5000 tons/month',
      openingDate: '2018-09-10',
      status: 'Inactive',
      complianceRegion: 'EPA Region 3',
      employees: 150,
      latitude: '40.4406° N',
      longitude: '79.9959° W',
    },
    {
      id: 4,
      code: 'FAC-004',
      name: 'AgroFresh Plant',
      address: '45 Greenbelt Road, Fresno, CA',
      businessUnit: 'Food Processing',
      contactPerson: 'Ramesh Iyer',
      contactPhone: '+1 (555) 456-1122',
      capacity: '3,000 tons/month',
      openingDate: '2020-01-01',
      status: 'Active',
      complianceRegion: 'FDA Western',
      employees: 180,
      latitude: '36.7378° N',
      longitude: '119.7871° W',
    },
    {
      id: 5,
      code: 'FAC-005',
      name: 'Quantum Circuit Lab',
      address: '17 Innovation Blvd, Austin, TX',
      businessUnit: 'Electronics R&D',
      contactPerson: 'Priya Desai',
      contactPhone: '+1 (555) 333-9090',
      capacity: 'Prototype-based',
      openingDate: '2023-07-25',
      status: 'Active',
      complianceRegion: 'FCC Central',
      employees: 90,
      latitude: '30.2672° N',
      longitude: '97.7431° W',
    }
  ]);

  const defaultForm = {
    code: '',
    name: '',
    address: '',
    businessUnit: '',
    contactPerson: '',
    contactPhone: '',
    capacity: '',
    openingDate: '',
    status: '',
    complianceRegion: '',
    employees: '',
    latitude: '',
    longitude: ''
  };

  const [formData, setFormData] = useState(defaultForm);
  const [editingId, setEditingId] = useState(null);
  const [customFields, setCustomFields] = useState([]);
  const [viewFactory, setViewFactory] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (editingId) {
      setFactories(prev => prev.map(f => f.id === editingId ? { ...formData, id: editingId } : f));
    } else {
      setFactories(prev => [...prev, { ...formData, id: Date.now() }]);
    }
    setFormData(defaultForm);
    setEditingId(null);
  };

  const handleEdit = (factory) => {
    setFormData(factory);
    setEditingId(factory.id);
  };

  const handleDelete = (id) => {
    setFactories(prev => prev.filter(f => f.id !== id));
  };

  const addCustomField = () => {
    const field = prompt("Enter custom field name:");
    if (field) {
      const fieldKey = field.replace(/\s+/g, '');
      setCustomFields(prev => [...prev, fieldKey]);
      setFormData(prev => ({ ...prev, [fieldKey]: '' }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">🏭 Add Factory</h1>

      {/* Form Section */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Register / Edit Factory</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(formData).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm font-medium mb-1 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </label>
              <input
                type={key.toLowerCase().includes('date') ? 'date' : 'text'}
                name={key}
                value={value || ''}
                onChange={handleChange}
                className="border rounded p-2 focus:outline-none focus:ring"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Add Custom Field Button */}
      <button
        onClick={addCustomField}
        className="mt-6 text-blue-600 hover:underline"
      >
        ➕ Add Custom Field
      </button>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 ml-4"
      >
        {editingId ? 'Update Factory' : 'Register Factory'}
      </button>

      {/* Table Section */}
      <section className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Registered Factories</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                {['Code', 'Name', 'Unit', 'Status', 'Contact', 'Phone', 'Employees', 'Actions'].map(h => (
                  <th key={h} className="border px-4 py-2 text-left text-sm font-medium">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {factories.map(f => (
                <tr key={f.id} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 text-sm">{f.code}</td>
                  <td className="border px-4 py-2 text-sm">{f.name}</td>
                  <td className="border px-4 py-2 text-sm">{f.businessUnit}</td>
                  <td className="border px-4 py-2 text-sm">{f.status}</td>
                  <td className="border px-4 py-2 text-sm">{f.contactPerson}</td>
                  <td className="border px-4 py-2 text-sm">{f.contactPhone}</td>
                  <td className="border px-4 py-2 text-sm">{f.employees}</td>
                  <td className="border px-4 py-2 text-sm">
                    <div className="flex justify-center items-center space-x-2">
                      <button
                        onClick={() => handleEdit(f)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(f.id)}
                        className="bg-red-600 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => setViewFactory(f)}
                        className="bg-blue-600 text-white px-2 py-1 rounded"
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* View Factory Modal */}
      {viewFactory && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full relative">
            <button
              className="absolute top-2 right-3 text-xl text-gray-600"
              onClick={() => setViewFactory(null)}
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4">Factory Details</h3>
            <ul className="space-y-2 text-sm">
              {Object.entries(viewFactory).map(([k, v]) => (
                <li key={k}>
                  <span className="font-medium capitalize">{k.replace(/([A-Z])/g, ' $1')}: </span>
                  <span>{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
