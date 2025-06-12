import React from 'react';

function Performance() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Performance Management System</h1>
      
      <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Self Evaluation</h2>
        <p className="text-gray-600">Evaluate your own performance and highlight key achievements.</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">KRA (Key Result Areas)</h2>
        <p className="text-gray-600">Track your goals and objectives for the performance cycle.</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Salary and Attendance</h2>
        <p className="text-gray-600">Monthly Salary: $5000</p>
        <p className="text-gray-600">Attendance: 95%</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="text-gray-600">Total Experience: 5 Years</p>
        <p className="text-gray-600">Current Role: Senior Developer</p>
      </div>

      <div className="bg-white p-4 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Progress Overview</h2>
        <p className="text-gray-600">Overall Progress: 85%</p>
      </div>
    </div>
  );
}

export default Performance;
 