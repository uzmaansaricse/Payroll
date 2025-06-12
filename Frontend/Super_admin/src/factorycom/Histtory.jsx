import React, { useEffect, useState } from 'react'

export default function Histtory1() {
  const [selectedCompany, setSelectedCompany] = useState(''); 
    const [overtimeRequests, setOvertimeRequests] = useState([]); 
    const [selectedRequests, setSelectedRequests] = useState([]); 
    const [overtimeRates, setOvertimeRates] = useState({
        'Company A': 200,  // Example: ₹200 per hour for Company A
        'Company B': 250,  // Example: ₹250 per hour for Company B
        'Company C': 300,  // Example: ₹300 per hour for Company C
      }); 
  useEffect(() => {
    // Sample overtime requests with employee salaries and overtime hours
    setOvertimeRequests([
      { employeeId: 'E1001', employeeName: 'Anuj Saini', overtimeHours: 3, salary: 30000, date: '2025-04-01', status: 'Pending' },
      { employeeId: 'E1002', employeeName: 'Amit Jain', overtimeHours: 2, salary: 32000, date: '2025-04-05', status: 'Approved' },
      { employeeId: 'E1003', employeeName: 'Sanjay Yadav', overtimeHours: 4, salary: 28000, date: '2025-04-10', status: 'Rejected' },
      // Add more requests as needed...
    ]);
  }, []);
  const handleBatchApproval = (status) => {
    const updatedOvertimeRequests = overtimeRequests.map((request, index) =>
      selectedRequests.includes(index) ? { ...request, status } : request
    );
    setOvertimeRequests(updatedOvertimeRequests);
  }; //ya

  const handleRequestSelection = (index) => {
    const updatedSelection = [...selectedRequests];
    if (updatedSelection.includes(index)) {
      updatedSelection.splice(updatedSelection.indexOf(index), 1);
    } else {
      updatedSelection.push(index);
    }
    setSelectedRequests(updatedSelection);
  }; //ya

  const calculateOvertimePayment = (overtimeHours, company) => {
    return overtimeHours * (overtimeRates[company] || 200); // Default to ₹200 if company rate not set
  };//ya
  return (
    <div>

      <div className="mb-6 p-3">
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
              <th className="border p-2">Overtime Payment (₹)</th>
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
                    onChange={() => handleRequestSelection(index)}  //ya
                  />
                </td>
                <td className="border p-2">{request.employeeId}</td>
                <td className="border p-2">{request.employeeName}</td>
                <td className="border p-2">{request.overtimeHours}</td>
                <td className="border p-2">{request.date}</td>
                <td className="border p-2">{request.status}</td>
                <td className="border p-2">
                  ₹{calculateOvertimePayment(request.overtimeHours, selectedCompany)}
                </td>
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

    </div>
  )
}
