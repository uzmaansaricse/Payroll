import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function LeaveApproval() {
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() => {
    fetchLeaveApplications();
  }, []);

  const fetchLeaveApplications = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/leave/history');
      setLeaveApplications(response.data);
    } catch (error) {
      console.error('Error fetching leave applications:', error);
    }
  };

  const handleLeaveApplicationStatusChange = async (index, status) => {
    try {
      const leaveId = leaveApplications[index]._id;
      await axios.put(`http://localhost:5000/api/leave/update-status/${leaveId}`, { status });
      const updatedLeaveApplications = [...leaveApplications];
      updatedLeaveApplications[index].status = status;
      setLeaveApplications(updatedLeaveApplications);
    } catch (error) {
      console.error('Error updating leave status:', error);
    }
  };

  const handleViewFile = (fileUrl) => {
    window.open(fileUrl, '_blank');
  };

  return (
    <div className="w-full h-auto p-3">
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
              <th className="border p-2">View</th> {/* 👈 View Column */}
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(leaveApplications) && leaveApplications.length > 0 ? (
              leaveApplications.map((application, index) => (
                <tr key={index}>
                  <td className="border p-2">{application.employeeId}</td>
                  <td className="border p-2">{application.employeeName}</td>
                  <td className="border p-2">{application.leaveType}</td>
                  <td className="border p-2">{application.days} days</td>
                  <td className="border p-2">{application.status || 'Pending'}</td>

                  {/* View File */}
                  <td className="border p-2 text-center">
                    {application.fileUrl ? (
                      <button
                        onClick={() => handleViewFile(application.fileUrl)}
                        className="text-blue-600 underline"
                      >
                        View File
                      </button>
                    ) : (
                      <span className="text-gray-400">No File</span>
                    )}
                  </td>

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
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center p-2">No leave applications available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
