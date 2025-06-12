import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function PersonalDetailTable() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedEmployees = [
      { id: 1, name: 'Anuj', department: 'IT', email: 'anujsaini@gmail.com' },
      { id: 2, name: 'Amit', department: 'HR', email: 'amitjain@gmail.com' },
      { id: 3, name: 'Priya', department: 'Finance', email: 'priyasharma@gmail.com' },
      { id: 4, name: 'Suresh', department: 'Marketing', email: 'sureshkumar@gmail.com' },
      { id: 5, name: 'Ravi', department: 'IT', email: 'ravikumar@gmail.com' },
      { id: 6, name: 'Neha', department: 'Finance', email: 'nehasingh@gmail.com' },
      { id: 7, name: 'Rajesh', department: 'Operations', email: 'rajeshrawat@gmail.com' },
      { id: 8, name: 'Vishal', department: 'HR', email: 'vishaldwivedi@gmail.com' },
      { id: 9, name: 'Simran', department: 'Sales', email: 'simranmishra@gmail.com' },
      { id: 10, name: 'Karan', department: 'Admin', email: 'karanverma@gmail.com' },
    ];
    setEmployees(fetchedEmployees);
  }, []);

  const handleSelectEmployee = (id) => {
    setSelectedEmployeeId(id);
  };

  const handleProceed = () => {
    if (selectedEmployeeId) {
      navigate(`/ctcstracture/${selectedEmployeeId}`);
    }
  };

  return (
    <div className="lg:p-4 p-1 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow w-full lg:w-[900px] mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Employee Master Information</h1>

        <div className="overflow-x-auto">
          <table className="w-full overflow-auto">
            <thead>
              <tr>
                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2 whitespace-nowrap">Employee Name</th>
                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Department</th>
                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2 whitespace-nowrap">Email</th>
                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">
                      {employee.name}
                    </td>
                    <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">
                      {employee.department}
                    </td>
                    <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">
                      {employee.email}
                    </td>
                    <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center">
                      <button
                        className={`bg-blue-600 hover:bg-blue-800 cursor-pointer md:px-3 px-2 py-1 rounded font-bold text-white ${selectedEmployeeId === employee.id ? 'bg-green-600' : ''
                          }`}
                        onClick={() => handleSelectEmployee(employee.id)}
                      >
                        {selectedEmployeeId === employee.id ? 'Selected' : 'Select'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center text-[16px] p-4">
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selectedEmployeeId && (
          <div className="mt-4">
            <button
              onClick={handleProceed}
              className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded text-white"
            >
              Proceed to CTC Structure
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
