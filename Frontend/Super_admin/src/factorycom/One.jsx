import React, { useState, useEffect } from 'react';

// Set dummy employee count and static config
const EMPLOYEE_COUNT = 100;
const authorities = [
  { id: 'Factory Manager/Plant Head', email: 'factoryhead@example.com' },
  { id: 'Factory HR Executive', email: 'hr@example.com' },
  { id: 'Maintenance Lead', email: 'maintenancelead@example.com' },
  { id: 'QC Lead', email: 'qclead@example.com' },
  { id: 'Storekeeper', email: 'storekeeper@example.com' },
  { id: 'Safety Officer', email: 'safetyofficer@example.com' },
  { id: 'Shift Supervisors', email: 'shiftsupervisor@example.com' },
];
const departmentsList = ['HR', 'Production', 'Maintenance', 'Quality', 'Store'];
const shifts = [
  { id: 1, name: 'Morning Shift (9AM - 6PM)' },
  { id: 2, name: 'Evening Shift (1PM - 10PM)' },
  { id: 3, name: 'Night Shift (10PM - 6AM)' },
];

const ShiftAssignFactory1 = () => {
  const [selectedAuthority, setSelectedAuthority] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedShift, setSelectedShift] = useState('');
  const [numEmployees, setNumEmployees] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Generate dummy employees with department
  const employees = Array.from({ length: EMPLOYEE_COUNT }, (_, i) => ({
    id: i + 1,
    name: `Employee ${i + 1}`,
    department: departmentsList[i % departmentsList.length],
  }));

  // Filter employees by department & search
  const filteredEmployees = employees.filter(emp =>
    (!selectedDepartment || emp.department === selectedDepartment) &&
    emp.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Auto-select first N employees when numEmployees changes
  useEffect(() => {
    if (numEmployees) {
      const n = parseInt(numEmployees, 10);
      setSelectedEmployees(filteredEmployees.slice(0, n).map(emp => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  }, [numEmployees, filteredEmployees]);

  const toggleEmployee = id => {
    setSelectedEmployees(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = () => {
    if (!selectedAuthority || !selectedDepartment || !selectedShift || selectedEmployees.length === 0) {
      alert('Please fill all fields.');
      return;
    }
    const authority = authorities.find(a => a.email === selectedAuthority);
    const shiftObj = shifts.find(s => s.id === parseInt(selectedShift, 10));

    const assignment = {
      authority: authority.email,
      department: selectedDepartment,
      shift: shiftObj.name,
      employees: selectedEmployees.map(id => employees.find(e => e.id === id)),
    };

    if (editIndex !== null) {
      const updated = [...submittedData];
      updated[editIndex] = assignment;
      setSubmittedData(updated);
      setEditIndex(null);
    } else {
      setSubmittedData(prev => [...prev, assignment]);
    }

    // Reset form
    setSelectedAuthority('');
    setSelectedDepartment('');
    setSelectedShift('');
    setNumEmployees('');
    setSearchQuery('');
    setSelectedEmployees([]);
  };

  const handleEdit = idx => {
    const data = submittedData[idx];
    setSelectedAuthority(data.authority);
    setSelectedDepartment(data.department);
    const shiftOption = shifts.find(s => s.name === data.shift);
    setSelectedShift(shiftOption?.id.toString() || '');
    setSelectedEmployees(data.employees.map(e => e.id));
    setNumEmployees(data.employees.length.toString());
    setEditIndex(idx);
  };

  const handleDeleteAssignment = idx => {
    setSubmittedData(prev => prev.filter((_, i) => i !== idx));
  };

  const handleDeleteEmployee = (assignIdx, empId) => {
    const updated = [...submittedData];
    updated[assignIdx].employees = updated[assignIdx].employees.filter(e => e.id !== empId);
    setSubmittedData(updated);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="p-6 border rounded-lg shadow mb-6">
        <h2 className="text-xl font-bold mb-4">{editIndex !== null ? 'Edit Factory Shift Assignment' : 'Factory Shift Assignment'}</h2>

        {/* Authority */}
        <label className="block mb-2">Select Authority</label>
        <select
          value={selectedAuthority}
          onChange={e => setSelectedAuthority(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="">Select Authority</option>
          {authorities.map(a => <option key={a.id} value={a.email}>{a.email}</option>)}
        </select>

        {/* Department */}
        <label className="block mb-2">Select Department</label>
        <select
          value={selectedDepartment}
          onChange={e => setSelectedDepartment(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="">Select Department</option>
          {departmentsList.map(dep => <option key={dep} value={dep}>{dep}</option>)}
        </select>

        {/* Num & Search */}
        <div className="flex space-x-4 mb-4">
          <div className="flex-1">
            <label className="block mb-2">No of Employees</label>
            <input
              type="number"
              min="1"
              max={employees.length}
              value={numEmployees}
              onChange={e => setNumEmployees(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-2">Search Employees by name </label>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Employee List */}
        <div className="max-h-60 overflow-auto border p-2 rounded mb-4 grid grid-cols-2 gap-2">
          {filteredEmployees.map(emp => (
            <label key={emp.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedEmployees.includes(emp.id)}
                onChange={() => toggleEmployee(emp.id)}
                className="mr-2"
              />
              {emp.name}
            </label>
          ))}
        </div>

        {/* Shift */}
        <label className="block mb-2">Select Shift</label>
        <select
          value={selectedShift}
          onChange={e => setSelectedShift(e.target.value)}
          className="w-full mb-4 p-2 border rounded"
        >
          <option value="">Select Shift</option>
          {shifts.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
        </select>

        <button
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-600 text-white rounded"
        >{editIndex !== null ? 'Update Assignment' : 'Assign Shift'}</button>
      </div>

      {/* Assignments Table */}
      <div>
        <h2 className="text-xl font-bold mb-4">Assigned Shifts</h2>
        <table className="min-w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Authority</th>
              <th className="border px-2 py-1">Department</th>
              <th className="border px-2 py-1">Shift</th>
              <th className="border px-2 py-1">Employees</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.length === 0 ? (
              <tr><td colSpan="5" className="text-center py-2">No assignments</td></tr>
            ) : submittedData.map((a, idx) => (
              <tr key={idx}>
                <td className="border px-2 py-1">{a.authority}</td>
                <td className="border px-2 py-1">{a.department}</td>
                <td className="border px-2 py-1">{a.shift}</td>
                <td className="border px-2 py-1">
                  {a.employees.map(e => (
                    <div key={e.id} className="flex justify-between items-center">
                      <span>{e.name}</span>
                      <button onClick={() => handleDeleteEmployee(idx, e.id)} className="text-red-500">×</button>
                    </div>
                  ))}
                </td>
                <td className="border px-2 py-1 space-x-2">
                  <button onClick={() => handleEdit(idx)} className="bg-yellow-500 text-white px-2 py-1 rounded">Edit</button>
                  <button onClick={() => handleDeleteAssignment(idx)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShiftAssignFactory1;
