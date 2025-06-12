import React, { useState, useEffect } from 'react';

export default function OvertimeTracking2() {
  const [companies, setCompanies] = useState(['Company A', 'Company B', 'Company C']);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [overtimeRequests, setOvertimeRequests] = useState([]);
  const [selectedRequests, setSelectedRequests] = useState([]);

  useEffect(() => {
    setOvertimeRequests([
      { employeeId: 'E1001', employeeName: 'Anuj Saini', overtimeHours: 3, date: '2025-04-01', status: 'Pending' },
      { employeeId: 'E1002', employeeName: 'Amit Jain', overtimeHours: 2, date: '2025-04-05', status: 'Approved' },
      { employeeId: 'E1003', employeeName: 'Sanjay Yadav', overtimeHours: 4, date: '2025-04-10', status: 'Rejected' },
      { employeeId: 'E1004', employeeName: 'Rohit Kumar', overtimeHours: 5, date: '2025-04-12', status: 'Pending' },
      { employeeId: 'E1005', employeeName: 'Nisha Verma', overtimeHours: 3, date: '2025-04-15', status: 'Approved' },
      { employeeId: 'E1006', employeeName: 'Priya Sharma', overtimeHours: 6, date: '2025-04-17', status: 'Pending' },
      { employeeId: 'E1007', employeeName: 'Vikram Singh', overtimeHours: 2, date: '2025-04-20', status: 'Approved' },
      { employeeId: 'E1008', employeeName: 'Neha Gupta', overtimeHours: 3, date: '2025-04-22', status: 'Rejected' },
      { employeeId: 'E1009', employeeName: 'Karan Reddy', overtimeHours: 4, date: '2025-04-25', status: 'Pending' },
      { employeeId: 'E1010', employeeName: 'Anjali Mehta', overtimeHours: 5, date: '2025-04-28', status: 'Approved' },
    ]);
  }, []);

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleOvertimeStatusChange = (index, status) => {
    const updatedOvertimeRequests = overtimeRequests.map((request, i) =>
      i === index ? { ...request, status } : request
    );
    setOvertimeRequests(updatedOvertimeRequests);
  };

  const handleBatchApproval = (status) => {
    const updatedOvertimeRequests = overtimeRequests.map((request, index) =>
      selectedRequests.includes(index) ? { ...request, status } : request
    );
    setOvertimeRequests(updatedOvertimeRequests);
  };

  const handleRequestSelection = (index) => {
    const updatedSelection = [...selectedRequests];
    if (updatedSelection.includes(index)) {
      updatedSelection.splice(updatedSelection.indexOf(index), 1);
    } else {
      updatedSelection.push(index);
    }
    setSelectedRequests(updatedSelection);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Overtime Tracking</h2>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Company</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedCompany}
          onChange={handleCompanyChange}
        >
          <option value="">--Select Company--</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {selectedCompany && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Overtime Requests</h3>

          {/* Batch Approval Button */}
          <div className="mb-4">
            <button
              onClick={() => handleBatchApproval('Approved')}
              className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
            >
              Approve Selected
            </button>
            <button
              onClick={() => handleBatchApproval('Rejected')}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Reject Selected
            </button>
          </div>

          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Select</th>
                <th className="border p-2">Employee ID</th>
                <th className="border p-2">Employee Name</th>
                <th className="border p-2">Overtime Hours</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {overtimeRequests.map((request, index) => (
                <tr key={index}>
                  <td className="border p-2">
                    <input
                      type="checkbox"
                      checked={selectedRequests.includes(index)}
                      onChange={() => handleRequestSelection(index)}
                    />
                  </td>
                  <td className="border p-2">{request.employeeId}</td>
                  <td className="border p-2">{request.employeeName}</td>
                  <td className="border p-2">{request.overtimeHours}</td>
                  <td className="border p-2">{request.date}</td>
                  <td className="border p-2">{request.status}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleOvertimeStatusChange(index, 'Approved')}
                      className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleOvertimeStatusChange(index, 'Rejected')}
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}