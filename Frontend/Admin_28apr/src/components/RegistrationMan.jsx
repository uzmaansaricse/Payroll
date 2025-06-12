import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ExitFormalities() {
  const [latestResignation, setLatestResignation] = useState(null);

  useEffect(() => {
    const fetchLatestResignation = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/resignation/latest");
        setLatestResignation(response.data);
      } catch (error) {
        console.error("Error fetching latest resignation:", error);
      }
    };

    fetchLatestResignation();
  }, []);

  const handleViewResignationLetter = (url) => {
    window.open(url, "_blank");
  };

  const handleStatusUpdate = async (status) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/resignation/status/${latestResignation._id}`, { status });
      setLatestResignation(response.data); // Update the resignation status in the state
    } catch (error) {
      console.error("Error updating resignation status:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Exit Formalities</h2>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-xl mb-4">Latest Resignation Request</h3>

        {!latestResignation ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="border p-2">Employee Name</th>
                <th className="border p-2">Emp ID</th>
                <th className="border p-2">Department</th>
                <th className="border p-2">Designation</th>
                <th className="border p-2">Resignation Date</th>
                <th className="border p-2">Preferred Last Working Day</th>
                <th className="border p-2">Reason</th>
                <th className="border p-2">Comments</th>
                <th className="border p-2">Resignation Letter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">{latestResignation.name}</td>
                <td className="border p-2">{latestResignation.empId}</td>
                <td className="border p-2">{latestResignation.department}</td>
                <td className="border p-2">{latestResignation.designation}</td>
                <td className="border p-2">{new Date(latestResignation.resignationDate).toLocaleDateString()}</td>
                <td className="border p-2">{new Date(latestResignation.preferredLWD).toLocaleDateString()}</td>
                <td className="border p-2">{latestResignation.reason}</td>
                <td className="border p-2">{latestResignation.comments}</td>
                <td className="border p-2 text-center">
                  {latestResignation.letterPath ? (
                    <button
                      onClick={() => handleViewResignationLetter(latestResignation.letterPath)}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      View
                    </button>
                  ) : (
                    "N/A"
                  )}
                </td>
              </tr>
              {/* Extra Row for Status */}
              <tr>
                <td colSpan="9" className="border-t p-2">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold">Status:</span>{' '}
                      <span className={`px-2 py-1 rounded ${latestResignation.status === 'Pending' ? 'bg-yellow-400 text-white' : latestResignation.status === 'Approved' ? 'bg-green-400 text-white' : 'bg-red-600 text-white'}`}>
                        {latestResignation.status}
                      </span>
                    </div>
                    <div>
                      {latestResignation.status === 'Pending' && (
                        <>
                          <button
                            onClick={() => handleStatusUpdate('Approved')}
                            className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleStatusUpdate('Rejected')}
                            className="bg-red-600 text-white px-3 py-1 rounded"
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
