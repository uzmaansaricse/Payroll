import React, { useState, useEffect } from 'react';

export default function PerformanceManagement() {
  const [employees, setEmployees] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  useEffect(() => {
    // Dummy employee data
    const dummyEmployees = [
      {
        id: 'E001',
        name: 'Anuj Saini',
        department: 'IT',
        designation: 'Software Engineer',
        kra: [
          { title: 'Code Quality', weight: 40, rating: 4 },
          { title: 'Timely Delivery', weight: 60, rating: 5 }
        ]
      },
      {
        id: 'E002',
        name: 'Amit Jain',
        department: 'HR',
        designation: 'HR Manager',
        kra: [
          { title: 'Hiring Speed', weight: 50, rating: 3 },
          { title: 'Employee Satisfaction', weight: 50, rating: 4 }
        ]
      }
    ];
    setEmployees(dummyEmployees);
  }, []);

  const filterEmployees = selectedDepartment === 'All'
    ? employees
    : employees.filter(e => e.department === selectedDepartment);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Performance Dashboard</h2>

      <div className="mb-4">
        <label className="mr-2">Filter by Department:</label>
        <select
          className="border p-2 rounded"
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
        >
          <option value="All">All</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
        </select>
      </div>

      <table className="w-full table-auto border-collapse bg-white rounded shadow">
        <thead>
          <tr>
            <th className="border p-2">Employee</th>
            <th className="border p-2">Department</th>
            <th className="border p-2">Designation</th>
            <th className="border p-2">KRA Summary</th>
            <th className="border p-2">Avg Score</th>
          </tr>
        </thead>
        <tbody>
          {filterEmployees.map(emp => {
            const totalWeight = emp.kra.reduce((sum, k) => sum + k.weight, 0);
            const weightedScore = emp.kra.reduce((sum, k) => sum + k.rating * (k.weight / 100), 0);

            return (
              <tr key={emp.id}>
                <td className="border p-2">{emp.name}</td>
                <td className="border p-2">{emp.department}</td>
                <td className="border p-2">{emp.designation}</td>
                <td className="border p-2">
                  {emp.kra.map((k, idx) => (
                    <div key={idx}>
                      {k.title}: {k.rating}/5 ({k.weight}%)
                    </div>
                  ))}
                </td>
                <td className="border p-2 font-semibold text-center">{weightedScore.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}