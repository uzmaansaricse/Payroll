import React, { useState, useEffect } from 'react';

const ShiftAssignAdvance = () => {
  const [selectedAuthority, setSelectedAuthority] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedShift, setSelectedShift] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const authorities = [
    { id: 'HR1', email: 'hr1@example.com' },
    { id: 'HR2', email: 'hr2@example.com' },
    { id: 'Manager1', email: 'manager1@example.com' },
    { id: 'Manager2', email: 'manager2@example.com' },
    { id: 'SuperAdmin1', email: 'superadmin1@example.com' },
  ];

  const employees = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
  }));

  const shifts = [
    { id: 1, name: 'Morning Shift (9AM - 6PM)' },
    { id: 2, name: 'Evening Shift (1PM - 10PM)' },
    { id: 3, name: 'Night Shift (10PM - 6AM)' },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (numEmployees) {
      const number = parseInt(numEmployees);
      const autoSelect = employees.slice(0, number).map((emp) => emp.id);
      setSelectedEmployees(autoSelect);
    } else {
      setSelectedEmployees([]);
    }
  }, [numEmployees]);

  const handleCheckboxChange = (id) => {
    setSelectedEmployees((prev) =>
      prev.includes(id) ? prev.filter((empId) => empId !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (!selectedAuthority || !selectedShift || selectedEmployees.length === 0) {
      alert('Please fill all fields.');
      return;
    }

    const authority = authorities.find((a) => a.email === selectedAuthority);
    const shift = shifts.find((s) => s.id === parseInt(selectedShift));

    const assignment = {
      authority: authority.email,
      shift: shift.name,
      employees: selectedEmployees.map((id) => employees.find((e) => e.id === id)),
    };

    if (editIndex !== null) {
      const updated = [...submittedData];
      updated[editIndex] = assignment;
      setSubmittedData(updated);
      setEditIndex(null);
    } else {
      setSubmittedData((prev) => [...prev, assignment]);
    }

    setSelectedAuthority('');
    setSelectedEmployees([]);
    setSelectedShift('');
    setNumEmployees('');
  };

  const handleEdit = (index) => {
    const data = submittedData[index];
    setSelectedAuthority(data.authority);
    const shiftId = shifts.find((s) => s.name === data.shift)?.id || '';
    setSelectedShift(shiftId);
    setSelectedEmployees(data.employees.map((e) => e.id));
    setNumEmployees(data.employees.length);
    setEditIndex(index);
  };

  const handleDeleteAssignment = (index) => {
    const updated = submittedData.filter((_, i) => i !== index);
    setSubmittedData(updated);
  };

  const handleDeleteEmployee = (index, empId) => {
    const updated = [...submittedData];
    updated[index].employees = updated[index].employees.filter((e) => e.id !== empId);
    setSubmittedData(updated);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="p-5 mb-6 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">{editIndex !== null ? 'Edit Shift Assignment' : 'Shift Assignment'}</h2>

        <div className="my-4">
          <label className="block mb-2">Select Authority</label>
          <select
            value={selectedAuthority}
            onChange={(e) => setSelectedAuthority(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Authority</option>
            {authorities.map((auth) => (
              <option key={auth.id} value={auth.email}>
                {auth.email}
              </option>
            ))}
          </select>
        </div>

        <div className="my-4">
          <label className="block mb-2">Number of Employees to Assign</label>
          <input
            type="number"
            value={numEmployees}
            onChange={(e) => setNumEmployees(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            min="1"
            max={employees.length}
            placeholder="Enter number"
          />
        </div>

        {numEmployees && (
          <div className="my-4">
            <label className="block mb-2">Search Employees</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md mb-2"
              placeholder="Search by name"
            />

            <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-scroll p-2 border rounded-md">
              {filteredEmployees.map((emp) => (
                <div key={emp.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedEmployees.includes(emp.id)}
                    onChange={() => handleCheckboxChange(emp.id)}
                  />
                  <span className="ml-2">{emp.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="my-4">
          <label className="block mb-2">Select Shift</label>
          <select
            value={selectedShift}
            onChange={(e) => setSelectedShift(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Shift</option>
            {shifts.map((shift) => (
              <option key={shift.id} value={shift.id}>
                {shift.name}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg"
        >
          {editIndex !== null ? 'Update Assignment' : 'Assign Shift'}
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Assigned Shifts</h2>

        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Authority</th>
              <th className="px-4 py-2 border-b">Shift</th>
              <th className="px-4 py-2 border-b">Employees</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center px-4 py-2">
                  No data to display
                </td>
              </tr>
            ) : (
              submittedData.map((assignment, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{assignment.authority}</td>
                  <td className="px-4 py-2 border-b">{assignment.shift}</td>
                  <td className="px-4 py-2 border-b">
                    {assignment.employees.map((e) => (
                      <div key={e.id} className="flex justify-between items-center">
                        <span>{e.name}</span>
                        <button
                          onClick={() => handleDeleteEmployee(index, e.id)}
                          className="text-red-500 ml-2"
                        >
                          ❌
                        </button>
                      </div>
                    ))}
                  </td>
                  <td className="px-4 py-2 border-b space-x-2">
                    <button
                      onClick={() => handleEdit(index)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteAssignment(index)}
                      className="bg-red-600 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShiftAssignAdvance;
