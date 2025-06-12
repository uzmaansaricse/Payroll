import React, { useState } from "react";

const dummyGroups = ["Managers", "Junior Employees", "Contractors"];

const FlexiTabAdmin2 = () => {
  const [components, setComponents] = useState([]);
  const [form, setForm] = useState({
    name: "",
    limit: "",
    frequency: "",
    group: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.limit || !form.frequency || !form.group) return;
    setComponents([...components, { ...form }]);
    setForm({ name: "", limit: "", frequency: "", group: "" });
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-2xl font-bold mb-6">Flexi Tab – Admin Panel</h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-8 border-b pb-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Component Name"
            className="border px-3 py-2 rounded"
          />
          <input
            type="number"
            name="limit"
            value={form.limit}
            onChange={handleChange}
            placeholder="Limit (₹)"
            className="border px-3 py-2 rounded"
          />
          <select
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          >
            <option value="">Select Frequency</option>
            <option>Monthly</option>
            <option>Quarterly</option>
            <option>Annually</option>
          </select>
          <select
            name="group"
            value={form.group}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          >
            <option value="">Select Group</option>
            {dummyGroups.map((grp) => (
              <option key={grp} value={grp}>
                {grp}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add Component
        </button>
      </form>

      {/* Table of Components */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Defined Components</h2>
        {components.length > 0 ? (
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border px-4 py-2">Component Name</th>
                <th className="border px-4 py-2">Limit (₹)</th>
                <th className="border px-4 py-2">Frequency</th>
                <th className="border px-4 py-2">Group</th>
              </tr>
            </thead>
            <tbody>
              {components.map((comp, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{comp.name}</td>
                  <td className="border px-4 py-2">₹{comp.limit}</td>
                  <td className="border px-4 py-2">{comp.frequency}</td>
                  <td className="border px-4 py-2">{comp.group}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No flexi components defined yet.</p>
        )}
      </div>
    </div>
  );
};

export default FlexiTabAdmin2;