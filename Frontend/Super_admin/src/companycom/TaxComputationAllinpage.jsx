import React, { useState, useEffect } from 'react';

// Sample data for employees, HR, Managers, and Super Admin
const employees = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
}));

const authorities = {
  hr: [
    { id: 'HR1', email: 'hr1@example.com' },
    { id: 'HR2', email: 'hr2@example.com' },
  ],
  manager: [
    { id: 'Manager1', email: 'manager1@example.com' },
    { id: 'Manager2', email: 'manager2@example.com' },
  ],
  superAdmin: [
    { id: 'SuperAdmin1', email: 'superadmin1@example.com' },
  ]
};

const statuses = {
  pending: 'Pending',
  approvedByHR: 'Approved by HR',
  approvedByManager: 'Approved by Manager',
  approvedBySuperAdmin: 'Approved by Super Admin',
};

const AttendanceAssign = () => {
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [attendanceRequest, setAttendanceRequest] = useState('');
  const [assignedHR, setAssignedHR] = useState('');
  const [assignedManager, setAssignedManager] = useState('');
  const [status, setStatus] = useState(statuses.pending);
  const [attendanceRequests, setAttendanceRequests] = useState([]);
  const [userRole, setUserRole] = useState('superAdmin'); // Change this based on the user role (hr, manager, superAdmin)

  useEffect(() => {
    // Update selected employees when numberOfEmployees changes
    if (numberOfEmployees > 0) {
      const selected = employees.slice(0, numberOfEmployees).map(emp => emp.id);
      setSelectedEmployees(selected);
    } else {
      setSelectedEmployees([]);
    }
  }, [numberOfEmployees]);

  // Submit Attendance Request
  const handleSubmit = () => {
    if (!selectedEmployees.length || !assignedHR || (userRole !== 'superAdmin' && !attendanceRequest)) {
      alert('Please fill all fields.');
      return;
    }

    const request = {
      employees: selectedEmployees,
      request: userRole === 'superAdmin' ? '' : attendanceRequest,
      status: statuses.pending,
      hrAssigned: assignedHR,
      managerAssigned: assignedManager || null,  // Manager can be null if not assigned
      superAdminAssigned: authorities.superAdmin[0].email,  // Assume single Super Admin
    };

    // Add this request to the state (or backend)
    setAttendanceRequests((prevRequests) => [...prevRequests, request]);

    // Reset form fields
    setNumberOfEmployees(0);
    setAttendanceRequest('');
    setAssignedHR('');
    setAssignedManager('');
  };

  // Handle status updates (approving/rejecting by HR, Manager, Super Admin)
  const updateStatus = (requestIndex, level) => {
    const newStatus = level === 'hr' ? statuses.approvedByHR :
                      level === 'manager' ? statuses.approvedByManager :
                      statuses.approvedBySuperAdmin;

    setAttendanceRequests((prevRequests) => {
      const updatedRequests = [...prevRequests];
      updatedRequests[requestIndex].status = newStatus;
      return updatedRequests;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Attendance Assignment</h2>

      {/* Form to assign attendance request */}
      <div className="my-4">
        <label className="block mb-2">Number of Employees to Select</label>
        <input
          type="number"
          value={numberOfEmployees}
          onChange={(e) => setNumberOfEmployees(Number(e.target.value))}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Enter number of employees"
        />
      </div>

      {/* Display selected employees */}
      <div className="my-4">
        <label className="block mb-2">Selected Employees</label>
        <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-scroll p-2 border rounded-md">
          {employees.slice(0, numberOfEmployees).map((emp) => (
            <div key={emp.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedEmployees.includes(emp.id)}
                onChange={() => setSelectedEmployees((prev) =>
                  prev.includes(emp.id)
                    ? prev.filter((id) => id !== emp.id)
                    : [...prev, emp.id]
                )}
                className="mr-2"
              />
              <span>{emp.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Attendance Request Input only for HR and Managers */}
      {userRole !== 'superAdmin' && (
        <div className="my-4">
          <label className="block mb-2">Attendance Request</label>
          <input
            type="text"
            value={attendanceRequest}
            onChange={(e) => setAttendanceRequest(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter attendance request"
          />
        </div>
      )}

      <div className="my-4">
        <label className="block mb-2">Assign HR</label>
        <select
          value={assignedHR}
          onChange={(e) => setAssignedHR(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Select HR</option>
          {authorities.hr.map((hr) => (
            <option key={hr.id} value={hr.email}>
              {hr.email}
            </option>
          ))}
        </select>
      </div>

      {/* Conditionally render Assign Manager if userRole is HR or SuperAdmin */}
      {(userRole === 'hr' || userRole === 'superAdmin') && (
        <div className="my-4">
          <label className="block mb-2">Assign Manager (Optional)</label>
          <select
            value={assignedManager}
            onChange={(e) => setAssignedManager(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Manager (Optional)</option>
            {authorities.manager.map((mgr) => (
              <option key={mgr.id} value={mgr.email}>
                {mgr.email}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-lg"
      >
        Submit Attendance Request
      </button>

      {/* Display Submitted Requests and Status */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Attendance Requests</h2>

        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Employees</th>
              <th className="px-4 py-2 border-b">Request</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRequests.map((request, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{request.employees.map(empId => employees.find(emp => emp.id === empId).name).join(', ')}</td>
                <td className="px-4 py-2 border-b">{request.request}</td>
                <td className="px-4 py-2 border-b">{request.status}</td>
                <td className="px-4 py-2 border-b">
                  {request.status === statuses.pending && (
                    <>
                      <button
                        onClick={() => updateStatus(index, 'hr')}
                        className="bg-green-600 text-white px-4 py-2 rounded-md"
                      >
                        Approve by HR
                      </button>
                      <button
                        onClick={() => updateStatus(index, 'manager')}
                        className="bg-yellow-600 text-white px-4 py-2 rounded-md"
                      >
                        Approve by Manager
                      </button>
                      <button
                        onClick={() => updateStatus(index, 'superadmin')}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md"
                      >
                        Final Approve by Super Admin
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceAssign;
