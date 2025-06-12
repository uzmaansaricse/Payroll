import React, { useState } from 'react';

const BulkUpdateForm1 = () => {
  const [shift, setShift] = useState('Morning');
  const [weeklyOff, setWeeklyOff] = useState('Sunday');
  const [department, setDepartment] = useState('Production');
  const [employees, setEmployees] = useState([
    { name: 'John Doe', id: 'E001' },
    { name: 'Jane Smith', id: 'E002' },
    { name: 'Alice Brown', id: 'E003' },
    { name: 'Bob Johnson', id: 'E004' },
  ]);

  const handleBulkUpdate = () => {
    alert(`Bulk Update for Department: ${department}\nShift: ${shift}\nWeekly Off: ${weeklyOff}`);
    // Normally here you would send a request to your backend for bulk update
    // For example: axios.post('/api/employee/update-bulk', { shift, weeklyOff, department })
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Bulk Shift and Weekly Off Assignment</h2>

      {/* Department Selection */}
      <div className="mb-6">
        <label className="block text-gray-700">Department</label>
        <select
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="Production">Production</option>
          <option value="Packaging">Packaging</option>
          <option value="Quality Control">Quality Control</option>
        </select>
      </div>

      {/* Shift Selection */}
      <div className="mb-6">
        <label className="block text-gray-700">Shift</label>
        <select
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
        >
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
        </select>
      </div>

      {/* Weekly Off Selection */}
      <div className="mb-6">
        <label className="block text-gray-700">Weekly Off</label>
        <select
          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
          value={weeklyOff}
          onChange={(e) => setWeeklyOff(e.target.value)}
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
      </div>

      {/* Employees List */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold">Employees in {department}:</h3>
        <ul className="list-disc ml-6">
          {employees.map((employee) => (
            <li key={employee.id}>
              {employee.name} (ID: {employee.id})
            </li>
          ))}
        </ul>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button
          onClick={handleBulkUpdate}
          className="w-full max-w-xs py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default BulkUpdateForm1;
