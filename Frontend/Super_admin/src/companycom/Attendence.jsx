import React, { useState, useEffect } from 'react';

export default function Attendance() {
  const [companies, setCompanies] = useState(['Company A', 'Company B', 'Company C']);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [employeeSummaries, setEmployeeSummaries] = useState([]);

  useEffect(() => {
    // Dummy attendance records
    setAttendanceRecords([
      { employeeId: 'E1001', employeeName: 'Anuj Saini', date: '2025-04-01', status: 'Present' },
      { employeeId: 'E1002', employeeName: 'Amit Jain', date: '2025-04-01', status: 'Absent' },
      { employeeId: 'E1003', employeeName: 'Sanjay Yadav', date: '2025-04-01', status: 'Leave' },
      { employeeId: 'E1001', employeeName: 'Anuj Saini', date: '2025-04-02', status: 'Present' },
      { employeeId: 'E1002', employeeName: 'Amit Jain', date: '2025-04-02', status: 'Leave' },
      { employeeId: 'E1003', employeeName: 'Sanjay Yadav', date: '2025-04-02', status: 'Present' },
      { employeeId: 'E1001', employeeName: 'Anuj Saini', date: '2025-04-03', status: 'Present' },
      { employeeId: 'E1002', employeeName: 'Amit Jain', date: '2025-04-03', status: 'Present' },
      { employeeId: 'E1003', employeeName: 'Sanjay Yadav', date: '2025-04-03', status: 'Present' },
      { employeeId: 'E1001', employeeName: 'Anuj Saini', date: '2025-04-04', status: 'Absent' },
      // Add more as needed...
    ]);
  }, []);

  useEffect(() => {
    // Group and summarize attendance when company is selected
    if (!selectedCompany) return;

    const summaryMap = {};

    attendanceRecords.forEach((record) => {
      const { employeeId, employeeName, status } = record;

      if (!summaryMap[employeeId]) {
        summaryMap[employeeId] = {
          employeeId,
          employeeName,
          present: 0,
          absent: 0,
          leave: 0,
        };
      }

      if (status === 'Present') summaryMap[employeeId].present++;
      if (status === 'Absent') summaryMap[employeeId].absent++;
      if (status === 'Leave') summaryMap[employeeId].leave++;
    });

    setEmployeeSummaries(Object.values(summaryMap));
  }, [selectedCompany, attendanceRecords]);

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  return (
    <div className="container mx-auto p-6 bg-white min-h-screen shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Monthly Attendance Report</h2>

      {/* Company Selection */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2 text-gray-700">Select Company</label>
        <select
          className="w-full p-3 border border-gray-300 rounded-md"
          value={selectedCompany}
          onChange={handleCompanyChange}
        >
          <option value="">-- Select Company --</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {/* Attendance Table */}
      {selectedCompany && (
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-700">April 2025 Summary</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-white shadow-md rounded">
              <thead>
                <tr className="bg-gray-100 text-gray-700 text-left">
                  <th className="px-4 py-2 border">Employee ID</th>
                  <th className="px-4 py-2 border">Name</th>
                  <th className="px-4 py-2 border text-green-600">Present</th>
                  <th className="px-4 py-2 border text-red-600">Absent</th>
                  <th className="px-4 py-2 border text-yellow-600">Leave</th>
                </tr>
              </thead>
              <tbody>
                {employeeSummaries.map((emp, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{emp.employeeId}</td>
                    <td className="px-4 py-2 border">{emp.employeeName}</td>
                    <td className="px-4 py-2 border text-green-700 font-semibold">{emp.present}</td>
                    <td className="px-4 py-2 border text-red-700 font-semibold">{emp.absent}</td>
                    <td className="px-4 py-2 border text-yellow-700 font-semibold">{emp.leave}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Export Button */}
          <div className="mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
              Export Report (CSV/Excel)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
