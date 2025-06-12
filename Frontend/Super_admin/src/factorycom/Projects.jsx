import React, { useState, useEffect } from 'react';

// Sample data
const departments = ['Production', 'Quality', 'Maintenance', 'Logistics'];

const employees = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
  department: departments[i % departments.length],
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
  ],
};

const statuses = {
  pending: 'Pending',
  approvedByHR: 'Approved by HR',
  approvedByManager: 'Approved by Manager',
  approvedBySuperAdmin: 'Approved by Super Admin',
};

const FactoryAttendanceAssign = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [attendanceRequest, setAttendanceRequest] = useState('');
  const [assignedHR, setAssignedHR] = useState('');
  const [assignedManager, setAssignedManager] = useState('');
  const [attendanceRequests, setAttendanceRequests] = useState([]);
  const [userRole, setUserRole] = useState('superAdmin'); // Change based on role

  useEffect(() => {
    if (selectedDepartment) {
      const filtered = employees.filter(emp => emp.department === selectedDepartment);
      setFilteredEmployees(filtered);
      setSelectedEmployees([]);
    }
  }, [selectedDepartment]);

  const handleSubmit = () => {
    if (!selectedEmployees.length || !assignedHR || (userRole !== 'superAdmin' && !attendanceRequest)) {
      alert('Please fill all fields.');
      return;
    }

    const request = {
      department: selectedDepartment,
      employees: selectedEmployees,
      request: userRole === 'superAdmin' ? '' : attendanceRequest,
      status: statuses.pending,
      hrAssigned: assignedHR,
      managerAssigned: assignedManager || null,
      superAdminAssigned: authorities.superAdmin[0].email,
    };

    setAttendanceRequests(prev => [...prev, request]);

    // Reset form
    setSelectedDepartment('');
    setFilteredEmployees([]);
    setSelectedEmployees([]);
    setAttendanceRequest('');
    setAssignedHR('');
    setAssignedManager('');
  };

  const updateStatus = (index, level) => {
    const newStatus =
      level === 'hr' ? statuses.approvedByHR :
      level === 'manager' ? statuses.approvedByManager :
      statuses.approvedBySuperAdmin;

    setAttendanceRequests(prev => {
      const updated = [...prev];
      updated[index].status = newStatus;
      return updated;
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Factory Level Attendance Assignment</h2>

      <div className="my-4">
        <label className="block mb-2">Select Department</label>
        <select
          value={selectedDepartment}
          onChange={(e) => setSelectedDepartment(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        >
          <option value="">Select Department</option>
          {departments.map((dept) => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      {selectedDepartment && (
        <div className="my-4">
          <label className="block mb-2">Select Employees</label>
          <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-scroll border p-2 rounded-md">
            {filteredEmployees.map(emp => (
              <div key={emp.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedEmployees.includes(emp.id)}
                  onChange={() => setSelectedEmployees(prev =>
                    prev.includes(emp.id)
                      ? prev.filter(id => id !== emp.id)
                      : [...prev, emp.id]
                  )}
                  className="mr-2"
                />
                <span>{emp.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
          {authorities.hr.map(hr => (
            <option key={hr.id} value={hr.email}>{hr.email}</option>
          ))}
        </select>
      </div>

      {(userRole === 'hr' || userRole === 'superAdmin') && (
        <div className="my-4">
          <label className="block mb-2">Assign Manager (Optional)</label>
          <select
            value={assignedManager}
            onChange={(e) => setAssignedManager(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="">Select Manager (Optional)</option>
            {authorities.manager.map(mgr => (
              <option key={mgr.id} value={mgr.email}>{mgr.email}</option>
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

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Attendance Requests</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Department</th>
              <th className="px-4 py-2 border-b">Employees</th>
              <th className="px-4 py-2 border-b">Request</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRequests.map((req, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border-b">{req.department}</td>
                <td className="px-4 py-2 border-b">
                  {req.employees.map(id => employees.find(e => e.id === id).name).join(', ')}
                </td>
                <td className="px-4 py-2 border-b">{req.request}</td>
                <td className="px-4 py-2 border-b">{req.status}</td>
                <td className="px-4 py-2 border-b space-x-1">
                  {req.status === statuses.pending && (
                    <>
                      <button onClick={() => updateStatus(index, 'hr')} className="bg-green-600 text-white px-2 py-1 rounded">
                        HR Approve
                      </button>
                      <button onClick={() => updateStatus(index, 'manager')} className="bg-yellow-600 text-white px-2 py-1 rounded">
                        Manager Approve
                      </button>
                      <button onClick={() => updateStatus(index, 'superadmin')} className="bg-blue-600 text-white px-2 py-1 rounded">
                        SuperAdmin Approve
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

export default FactoryAttendanceAssign;
