import React, { useState, useEffect } from 'react';

export default function ExitFormalities2() {
  const [exitRequests, setExitRequests] = useState([]);
  const [selectedExitRequest, setSelectedExitRequest] = useState(null);
  const [noticePeriod, setNoticePeriod] = useState(30);  // Default Notice Period (can be set per company)

  useEffect(() => {
    // Simulate fetching exit requests from an API (Replace with actual API call)
    const fetchedExitRequests = [
      {
        id: 1,
        employeeName: 'Anuj Saini',
        employeeId: 'E1001',
        department: 'IT',
        designation: 'Software Engineer',
        resignationDate: '2025-04-01',
        preferredLastWorkingDay: '2025-04-30',
        resignationReason: 'Resigned',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter.pdf',
      },
      {
        id: 2,
        employeeName: 'Amit Jain',
        employeeId: 'E1002',
        department: 'HR',
        designation: 'HR Manager',
        resignationDate: '2025-04-05',
        preferredLastWorkingDay: '2025-05-05',
        resignationReason: 'Relocation',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter2.pdf',
      },
      {
        id: 3,
        employeeName: 'Sanjay Yadav',
        employeeId: 'E1003',
        department: 'Sales',
        designation: 'Sales Manager',
        resignationDate: '2025-04-10',
        preferredLastWorkingDay: '2025-05-10',
        resignationReason: 'Personal Reasons',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter3.pdf',
      },
      {
        id: 4,
        employeeName: 'Rohit Kumar',
        employeeId: 'E1004',
        department: 'Marketing',
        designation: 'Marketing Executive',
        resignationDate: '2025-04-15',
        preferredLastWorkingDay: '2025-05-15',
        resignationReason: 'Career Growth',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter4.pdf',
      },
      {
        id: 5,
        employeeName: 'Nisha Verma',
        employeeId: 'E1005',
        department: 'Finance',
        designation: 'Accountant',
        resignationDate: '2025-04-17',
        preferredLastWorkingDay: '2025-05-17',
        resignationReason: 'Health Issues',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter5.pdf',
      },
      {
        id: 6,
        employeeName: 'Priya Sharma',
        employeeId: 'E1006',
        department: 'Operations',
        designation: 'Operations Manager',
        resignationDate: '2025-04-20',
        preferredLastWorkingDay: '2025-05-20',
        resignationReason: 'Personal Reasons',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter6.pdf',
      },
      {
        id: 7,
        employeeName: 'Vikram Singh',
        employeeId: 'E1007',
        department: 'IT',
        designation: 'System Analyst',
        resignationDate: '2025-04-22',
        preferredLastWorkingDay: '2025-05-22',
        resignationReason: 'Career Change',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter7.pdf',
      },
      {
        id: 8,
        employeeName: 'Neha Gupta',
        employeeId: 'E1008',
        department: 'Customer Support',
        designation: 'Customer Support Lead',
        resignationDate: '2025-04-25',
        preferredLastWorkingDay: '2025-05-25',
        resignationReason: 'Relocation',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter8.pdf',
      },
      {
        id: 9,
        employeeName: 'Karan Reddy',
        employeeId: 'E1009',
        department: 'Product Development',
        designation: 'Software Tester',
        resignationDate: '2025-04-28',
        preferredLastWorkingDay: '2025-05-28',
        resignationReason: 'New Job Opportunity',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter9.pdf',
      },
      {
        id: 10,
        employeeName: 'Anjali Mehta',
        employeeId: 'E1010',
        department: 'Legal',
        designation: 'Legal Advisor',
        resignationDate: '2025-05-01',
        preferredLastWorkingDay: '2025-06-01',
        resignationReason: 'Personal Reasons',
        status: 'Pending Approval',
        noticePeriod: 30,
        remainingNoticePeriod: 30,
        comments: '',
        resignationLetter: 'https://example.com/resignation-letter10.pdf',
      },
    ];

    setExitRequests(fetchedExitRequests);
  }, []);

  const handleStatusChange = (id, status) => {
    // Simulate API call to update the status of the resignation
    const updatedRequests = exitRequests.map((request) =>
      request.id === id ? { ...request, status } : request
    );
    setExitRequests(updatedRequests);
  };

  const handleViewResignationLetter = (url) => {
    window.open(url, '_blank');
  };

  const handleFinalWorkingDayChange = (id, finalWorkingDay) => {
    const updatedRequests = exitRequests.map((request) =>
      request.id === id ? { ...request, preferredLastWorkingDay: finalWorkingDay } : request
    );
    setExitRequests(updatedRequests);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Exit Formalities</h2>

      <div className="overflow-x-auto bg-white p-4 rounded shadow">
        <h3 className="text-xl mb-4">Resignation Requests</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2">Employee Name</th>
              <th className="border border-gray-200 p-2">Department</th>
              <th className="border border-gray-200 p-2">Resignation Date</th>
              <th className="border border-gray-200 p-2">Last Working Day</th>
              <th className="border border-gray-200 p-2">Status</th>
              <th className="border border-gray-200 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {exitRequests.length > 0 ? (
              exitRequests.map((request) => (
                <tr key={request.id}>
                  <td className="border border-gray-200 p-2">{request.employeeName}</td>
                  <td className="border border-gray-200 p-2">{request.department}</td>
                  <td className="border border-gray-200 p-2">{request.resignationDate}</td>
                  <td className="border border-gray-200 p-2">{request.preferredLastWorkingDay}</td>
                  <td className="border border-gray-200 p-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        request.status === 'Pending Approval'
                          ? 'bg-yellow-500 text-white'
                          : request.status === 'Approved'
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="border border-gray-200 p-2">
                    <button
                      className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                      onClick={() => setSelectedExitRequest(request)}
                    >
                      View Details
                    </button>
                    <button
                      className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                      onClick={() => handleStatusChange(request.id, 'Approved')}
                    >
                      Approve
                    </button>
                    <button
                      className="bg-red-600 text-white px-3 py-1 rounded"
                      onClick={() => handleStatusChange(request.id, 'Rejected')}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No resignation requests found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {selectedExitRequest && (
        <div className="mt-6 bg-white p-4 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Resignation Details</h3>
          <div>
            <div className="mb-2">
              <strong>Employee Name: </strong>
              {selectedExitRequest.employeeName}
            </div>
            <div className="mb-2">
              <strong>Department: </strong>
              {selectedExitRequest.department}
            </div>
            <div className="mb-2">
              <strong>Resignation Date: </strong>
              {selectedExitRequest.resignationDate}
            </div>
            <div className="mb-2">
              <strong>Preferred Last Working Day: </strong>
              <input
                type="date"
                value={selectedExitRequest.preferredLastWorkingDay}
                onChange={(e) =>
                  handleFinalWorkingDayChange(request.id, e.target.value)
                }
                className="border px-2 py-1 rounded"
              />
            </div>
            <div className="mb-2">
              <strong>Resignation Letter: </strong>
              <button
                className="text-blue-600"
                onClick={() => handleViewResignationLetter(selectedExitRequest.resignationLetter)}
              >
                View Resignation Letter
              </button>
            </div>
            <div className="mb-2">
              <strong>Status: </strong>
              {selectedExitRequest.status}
            </div>
            <div className="mb-2">
              <strong>Comments: </strong>
              <textarea
                value={selectedExitRequest.comments}
                onChange={(e) =>
                  setExitRequests(
                    exitRequests.map((request) =>
                      request.id === selectedExitRequest.id
                        ? { ...request, comments: e.target.value }
                        : request
                    )
                  )
                }
                className="border w-full px-2 py-1 rounded"
              />
            </div>
            <button
              className="bg-yellow-600 text-white px-4 py-2 rounded"
              onClick={() => setSelectedExitRequest(null)}
            >
              Close Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
