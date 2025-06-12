import React, { useState, useEffect } from 'react';

export default function Leave2() {
  const [companies, setCompanies] = useState(['Factory A', 'Factory B', 'Factory C']);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [leaveConfig, setLeaveConfig] = useState({
    PL: { active: true, quota: 0, carryForward: false, encashment: false, lapsePolicy: false },
    SL: { active: true, quota: 0, carryForward: false, encashment: false, lapsePolicy: false },
    CL: { active: true, quota: 0, carryForward: false, encashment: false, lapsePolicy: false },
  });
  const [newLeaveType, setNewLeaveType] = useState('');

  useEffect(() => {
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
  }, []);

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleLeaveConfigChange = (leaveType, field, value) => {
    setLeaveConfig(prev => ({
      ...prev,
      [leaveType]: {
        ...prev[leaveType],
        [field]: value
      }
    }));
  };

  const handleAddNewLeaveType = () => {
    const trimmedLeaveType = newLeaveType.trim();
    if (trimmedLeaveType && !leaveConfig[trimmedLeaveType]) {
      setLeaveConfig(prev => ({
        ...prev,
        [trimmedLeaveType]: { active: true, quota: 0, carryForward: false, encashment: false, lapsePolicy: false }
      }));
      setNewLeaveType('');
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Leave Management</h2>

      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Factory</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedCompany}
          onChange={handleCompanyChange}
        >
          <option value="">--Select Factory--</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>
      </div>

      {selectedCompany && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Leave Types Configuration</h3>

          {/* Add New Leave */}
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter new leave type"
              className="p-2 border border-gray-300 rounded mr-2"
              value={newLeaveType}
              onChange={(e) => setNewLeaveType(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleAddNewLeaveType}
            >
              Add Leave Type
            </button>
          </div>

          {/* Show Leave Configs */}
          {Object.keys(leaveConfig).map((leaveType) => (
            <div key={leaveType} className="mb-4 p-4 bg-white shadow rounded">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-medium">{leaveType} Configuration</h4>
                <div className="flex items-center">
                  <label className="mr-2">Active:</label>
                  <input
                    type="checkbox"
                    checked={leaveConfig[leaveType].active}
                    onChange={(e) => handleLeaveConfigChange(leaveType, 'active', e.target.checked)}
                  />
                </div>
              </div>
              
              {leaveConfig[leaveType].active && (
                <>
                  <label className="block mb-2">Leave Quota:</label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded mb-2"
                    value={leaveConfig[leaveType].quota}
                    onChange={(e) => handleLeaveConfigChange(leaveType, 'quota', e.target.value)}
                  />
                  <div className="flex items-center mb-2">
                    <label className="mr-2">Carry Forward:</label>
                    <input
                      type="checkbox"
                      checked={leaveConfig[leaveType].carryForward}
                      onChange={(e) => handleLeaveConfigChange(leaveType, 'carryForward', e.target.checked)}
                    />
                  </div>
                  <div className="flex items-center mb-2">
                    <label className="mr-2">Encashment:</label>
                    <input
                      type="checkbox"
                      checked={leaveConfig[leaveType].encashment}
                      onChange={(e) => handleLeaveConfigChange(leaveType, 'encashment', e.target.checked)}
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="mr-2">Lapse Policy:</label>
                    <input
                      type="checkbox"
                      checked={leaveConfig[leaveType].lapsePolicy}
                      onChange={(e) => handleLeaveConfigChange(leaveType, 'lapsePolicy', e.target.checked)}
                    />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
