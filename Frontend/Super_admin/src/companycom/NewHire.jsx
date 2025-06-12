import React, { useState } from 'react';

const AddManager = () => {
  const [managers, setManagers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddManager = () => {
    const { name, email, password } = formData;

    if (!email || !password) {
      alert('Email and password are required to add a manager');
      return;
    }

    const newManager = {
      id: Date.now(),
      name: name || 'No Name',
      email,
      password,
      isEditing: false,
    };

    setManagers((prev) => [...prev, newManager]);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleAddCustom = () => {
    const newManager = {
      id: Date.now(),
      name: '',
      email: '',
      password: '',
      isEditing: true,
    };
    setManagers((prev) => [...prev, newManager]);
  };

  const handleEdit = (id) => {
    setManagers((prev) =>
      prev.map((mgr) =>
        mgr.id === id ? { ...mgr, isEditing: true } : mgr
      )
    );
  };

  const handleSave = (id, updatedManager) => {
    if (!updatedManager.email || !updatedManager.password) {
      alert('Email and password are required');
      return;
    }
    setManagers((prev) =>
      prev.map((mgr) =>
        mgr.id === id ? { ...updatedManager, isEditing: false } : mgr
      )
    );
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this manager?')) {
      setManagers((prev) => prev.filter((mgr) => mgr.id !== id));
    }
  };

  const handleInputChange = (id, field, value) => {
    setManagers((prev) =>
      prev.map((mgr) =>
        mgr.id === id ? { ...mgr, [field]: value } : mgr
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Optional: Add Managers</h2>
      <p className="text-sm text-gray-600 mb-6">
        As Super Admin, you can assign managers for this company to approve leaves, attendance, etc.
        This step is optional. You may skip or add custom managers manually.
      </p>

      {/* Manager Form */}
      <div className="mb-4">
        <label className="block mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Manager Name"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Email *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Manager Email"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Password *</label>
        <input
          type="text"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Manager Password"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleAddManager}
          className="w-full bg-green-600 text-white py-2 rounded-md"
        >
          Add Manager
        </button>
        <button
          onClick={handleAddCustom}
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          Add Custom
        </button>
      </div>

      {/* Manager List */}
      {managers.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Managers List:</h3>
          <table className="w-full border text-left text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Password</th>
                <th className="p-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {managers.map((mgr) => (
                <tr key={mgr.id}>
                  {mgr.isEditing ? (
                    <>
                      <td className="p-2 border">
                        <input
                          type="text"
                          value={mgr.name}
                          onChange={(e) =>
                            handleInputChange(mgr.id, 'name', e.target.value)
                          }
                          className="border px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-2 border">
                        <input
                          type="email"
                          value={mgr.email}
                          onChange={(e) =>
                            handleInputChange(mgr.id, 'email', e.target.value)
                          }
                          className="border px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-2 border">
                        <input
                          type="text"
                          value={mgr.password}
                          onChange={(e) =>
                            handleInputChange(mgr.id, 'password', e.target.value)
                          }
                          className="border px-2 py-1 w-full"
                        />
                      </td>
                      <td className="p-2 border flex gap-2">
                        <button
                          onClick={() => handleSave(mgr.id, mgr)}
                          className="bg-green-500 text-white px-3 py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => handleDelete(mgr.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-2 border">{mgr.name}</td>
                      <td className="p-2 border">{mgr.email}</td>
                      <td className="p-2 border">{mgr.password}</td>
                      <td className="p-2 border flex gap-2">
                        <button
                          onClick={() => handleEdit(mgr.id)}
                          className="bg-yellow-500 text-white px-3 py-1 rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(mgr.id)}
                          className="bg-red-600 text-white px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AddManager;
