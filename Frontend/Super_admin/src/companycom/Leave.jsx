import React, { useState, useEffect } from 'react';

export default function Leave1() {
  const [companies, setCompanies] = useState(['Company A', 'Company B', 'Company C']); // Dummy company names
  const [selectedCompany, setSelectedCompany] = useState('');
  const [leaveTypes, setLeaveTypes] = useState([]);
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [leaveBalanceReports, setLeaveBalanceReports] = useState([]);
  const [leaveConfig, setLeaveConfig] = useState({
    PL: { quota: 0, carryForward: false, encashment: false, lapsePolicy: false },
    SL: { quota: 0, carryForward: false, encashment: false, lapsePolicy: false },
    CL: { quota: 0, carryForward: false, encashment: false, lapsePolicy: false },
    customLeave: { quota: 0, carryForward: false, encashment: false, lapsePolicy: false }
  });

  useEffect(() => {
    // Fetch dummy data for leave applications and balance reports
    setLeaveApplications([
      { employeeId: 'E1001', employeeName: 'Anuj Saini', leaveType: 'PL', leaveStartDate: '2025-04-01', leaveEndDate: '2025-04-03', status: 'Approved', days: 3 },
      { employeeId: 'E1002', employeeName: 'Amit Jain', leaveType: 'SL', leaveStartDate: '2025-04-05', leaveEndDate: '2025-04-05', status: 'Pending', days: 1 },
      { employeeId: 'E1003', employeeName: 'Sanjay Yadav', leaveType: 'CL', leaveStartDate: '2025-04-10', leaveEndDate: '2025-04-10', status: 'Rejected', days: 1 },
      { employeeId: 'E1004', employeeName: 'Rohit Kumar', leaveType: 'PL', leaveStartDate: '2025-04-15', leaveEndDate: '2025-04-18', status: 'Approved', days: 4 },
      { employeeId: 'E1005', employeeName: 'Nisha Verma', leaveType: 'SL', leaveStartDate: '2025-04-17', leaveEndDate: '2025-04-18', status: 'Approved', days: 2 },
      { employeeId: 'E1006', employeeName: 'Priya Sharma', leaveType: 'PL', leaveStartDate: '2025-04-20', leaveEndDate: '2025-04-21', status: 'Pending', days: 2 },
      { employeeId: 'E1007', employeeName: 'Vikram Singh', leaveType: 'CL', leaveStartDate: '2025-04-22', leaveEndDate: '2025-04-22', status: 'Approved', days: 1 },
      { employeeId: 'E1008', employeeName: 'Neha Gupta', leaveType: 'PL', leaveStartDate: '2025-04-25', leaveEndDate: '2025-04-26', status: 'Rejected', days: 2 },
      { employeeId: 'E1009', employeeName: 'Karan Reddy', leaveType: 'SL', leaveStartDate: '2025-04-28', leaveEndDate: '2025-04-29', status: 'Approved', days: 2 },
      { employeeId: 'E1010', employeeName: 'Anjali Mehta', leaveType: 'PL', leaveStartDate: '2025-04-30', leaveEndDate: '2025-05-02', status: 'Approved', days: 3 },
    ]);

    setLeaveBalanceReports([
      { employeeId: 'E1001', employeeName: 'Anuj Saini', leaveType: 'PL', totalQuota: 20, usedLeaves: 5, remainingLeaves: 15 },
      { employeeId: 'E1002', employeeName: 'Amit Jain', leaveType: 'SL', totalQuota: 10, usedLeaves: 2, remainingLeaves: 8 },
      { employeeId: 'E1003', employeeName: 'Sanjay Yadav', leaveType: 'CL', totalQuota: 12, usedLeaves: 3, remainingLeaves: 9 },
      { employeeId: 'E1004', employeeName: 'Rohit Kumar', leaveType: 'PL', totalQuota: 20, usedLeaves: 8, remainingLeaves: 12 },
      { employeeId: 'E1005', employeeName: 'Nisha Verma', leaveType: 'SL', totalQuota: 10, usedLeaves: 5, remainingLeaves: 5 },
      { employeeId: 'E1006', employeeName: 'Priya Sharma', leaveType: 'PL', totalQuota: 20, usedLeaves: 4, remainingLeaves: 16 },
      { employeeId: 'E1007', employeeName: 'Vikram Singh', leaveType: 'CL', totalQuota: 12, usedLeaves: 7, remainingLeaves: 5 },
      { employeeId: 'E1008', employeeName: 'Neha Gupta', leaveType: 'PL', totalQuota: 20, usedLeaves: 6, remainingLeaves: 14 },
      { employeeId: 'E1009', employeeName: 'Karan Reddy', leaveType: 'SL', totalQuota: 10, usedLeaves: 3, remainingLeaves: 7 },
      { employeeId: 'E1010', employeeName: 'Anjali Mehta', leaveType: 'PL', totalQuota: 20, usedLeaves: 9, remainingLeaves: 11 },
    ]);
  }, []);

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleLeaveConfigChange = (leaveType, field, value) => {
    setLeaveConfig({
      ...leaveConfig,
      [leaveType]: {
        ...leaveConfig[leaveType],
        [field]: value
      }
    });
  };

  const handleLeaveApplicationStatusChange = (index, status) => {
    const updatedLeaveApplications = leaveApplications.map((application, i) =>
      i === index ? { ...application, status } : application
    );
    setLeaveApplications(updatedLeaveApplications);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Leave Management</h2>

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

      {/* Leave Types Configuration */}
      {selectedCompany && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Leave Types Configuration</h3>
          {['PL', 'SL', 'CL', 'customLeave'].map((leaveType) => (
            <div key={leaveType} className="mb-4">
              <h4 className="text-lg font-medium">{leaveType} Configuration</h4>
              <label className="block mb-2">Leave Quota:</label>
              <input
                type="number"
                className="w-full p-2 border border-gray-300 rounded"
                value={leaveConfig[leaveType].quota}
                onChange={(e) => handleLeaveConfigChange(leaveType, 'quota', e.target.value)}
              />
              <div className="mt-2">
                <label className="mr-4">Carry Forward:</label>
                <input
                  type="checkbox"
                  checked={leaveConfig[leaveType].carryForward}
                  onChange={(e) => handleLeaveConfigChange(leaveType, 'carryForward', e.target.checked)}
                />
              </div>
              <div className="mt-2">
                <label className="mr-4">Encashment:</label>
                <input
                  type="checkbox"
                  checked={leaveConfig[leaveType].encashment}
                  onChange={(e) => handleLeaveConfigChange(leaveType, 'encashment', e.target.checked)}
                />
              </div>
              <div className="mt-2">
                <label className="mr-4">Lapse Policy:</label>
                <input
                  type="checkbox"
                  checked={leaveConfig[leaveType].lapsePolicy}
                  onChange={(e) => handleLeaveConfigChange(leaveType, 'lapsePolicy', e.target.checked)}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Leave Applications */}
      {selectedCompany && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Leave Applications</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Employee ID</th>
                <th className="border p-2">Employee Name</th>
                <th className="border p-2">Leave Type</th>
                <th className="border p-2">Leave Duration</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leaveApplications.map((application, index) => (
                <tr key={index}>
                  <td className="border p-2">{application.employeeId}</td>
                  <td className="border p-2">{application.employeeName}</td>
                  <td className="border p-2">{application.leaveType}</td>
                  <td className="border p-2">{application.days} days</td>
                  <td className="border p-2">{application.status}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleLeaveApplicationStatusChange(index, 'Approved')}
                      className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleLeaveApplicationStatusChange(index, 'Rejected')}
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

      {/* Leave Balance Reports */}
      {selectedCompany && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Leave Balance Reports</h3>
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Employee ID</th>
                <th className="border p-2">Employee Name</th>
                <th className="border p-2">Leave Type</th>
                <th className="border p-2">Total Quota</th>
                <th className="border p-2">Used Leaves</th>
                <th className="border p-2">Remaining Leaves</th>
              </tr>
            </thead>
            <tbody>
              {leaveBalanceReports.map((report, index) => (
                <tr key={index}>
                  <td className="border p-2">{report.employeeId}</td>
                  <td className="border p-2">{report.employeeName}</td>
                  <td className="border p-2">{report.leaveType}</td>
                  <td className="border p-2">{report.totalQuota}</td>
                  <td className="border p-2">{report.usedLeaves}</td>
                  <td className="border p-2">{report.remainingLeaves}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}