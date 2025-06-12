import React, { useState } from 'react';

const ResignationAssignment = () => {
  const [selectedAuthority, setSelectedAuthority] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedResignationTypes, setSelectedResignationTypes] = useState([]);
  const [resignationTypes] = useState(['Immediate', 'Future']);
  const [employees] = useState(
    Array.from({ length: 100 }, (_, index) => ({
      id: `E${index + 1}`,
      name: `Employee ${index + 1}`,
    })) // Creating 100 dummy employees
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [numEmployees, setNumEmployees] = useState(0); // Number of employees to select

  const [authorities] = useState([
    { id: 'HR1', email: 'hr1@example.com' },
    { id: 'HR2', email: 'hr2@example.com' },
    { id: 'Manager1', email: 'manager1@example.com' },
    { id: 'Manager2', email: 'manager2@example.com' },
    { id: 'SuperAdmin1', email: 'superadmin1@example.com' },

  ]);

  const handleEmployeeSelection = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedEmployees((prev) => [...prev, value]);
    } else {
      setSelectedEmployees((prev) => prev.filter((id) => id !== value));
    }
  };

  const handleSelectAll = () => {
    if (selectedEmployees.length === employees.length) {
      setSelectedEmployees([]);
    } else {
      setSelectedEmployees(employees.map((employee) => employee.id));
    }
  };

  const handleNumEmployeesChange = (e) => {
    const num = parseInt(e.target.value, 10);
    setNumEmployees(num);

    // Automatically select the number of employees
    if (num > 0 && num <= employees.length) {
      setSelectedEmployees(employees.slice(0, num).map((emp) => emp.id));
    }
  };

  const handleResignationTypeSelection = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedResignationTypes((prev) => [...prev, value]);
    } else {
      setSelectedResignationTypes((prev) => prev.filter((type) => type !== value));
    }
  };

  const handleSubmit = () => {
    if (!selectedAuthority || selectedEmployees.length === 0 || selectedResignationTypes.length === 0) {
      alert('Please fill out all fields.');
      return;
    }

    const payload = {
      authority: selectedAuthority,
      employees: selectedEmployees,
      resignationTypes: selectedResignationTypes,
    };

    // Simulate a response from the server
    const submittedResignation = {
      authority: selectedAuthority,
      resignationTypes: selectedResignationTypes,
      employees: selectedEmployees.map((id) =>
        employees.find((employee) => employee.id === id)
      ),
      approvalStatus: 'Pending', // Initial approval status
    };

    setSubmittedData((prevData) => [...prevData, submittedResignation]);

    // Reset the form
    setSelectedAuthority('');
    setSelectedEmployees([]);
    setSelectedResignationTypes([]);
  };

  const handleApproval = (index, authority) => {
    setSubmittedData((prevData) => {
      const updatedData = [...prevData];
      const resignation = updatedData[index];

      // Update the approval status based on the authority
      if (resignation.approvalStatus === 'Pending') {
        resignation.approvalStatus = `Approved by ${authority}`;
      } else {
        alert('This resignation request has already been approved.');
      }

      return updatedData;
    });
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="p-5 mb-6 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Resignation Assignment</h2>

        <div className="my-4">
          <label htmlFor="authority" className="block mb-2 text-gray-700">
            Select Authority (HR / Manager / Super Admin)
          </label>
          <select
            id="authority"
            className="w-full px-4 py-2 border rounded-md"
            value={selectedAuthority}
            onChange={(e) => setSelectedAuthority(e.target.value)}
          >
            <option value="" disabled>
              Select an authority
            </option>
            {authorities.map((auth) => (
              <option key={auth.id} value={auth.id}>
                {auth.id} - {auth.email}
              </option>
            ))}
          </select>
        </div>

        <div className="my-4">
          <label htmlFor="numEmployees" className="block mb-2 text-gray-700">
            Number of Employees to Select
          </label>
          <input
            id="numEmployees"
            type="number"
            className="w-full px-4 py-2 border rounded-md"
            value={numEmployees}
            onChange={handleNumEmployeesChange}
            placeholder="Enter number of employees"
            min="0"
            max={employees.length}
          />
        </div>

        <div className="my-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedEmployees.length === filteredEmployees.length}
              onChange={handleSelectAll}
              className="mr-2"
            />
            <label>Select All Employees</label>
          </div>

          <div className="max-h-60 overflow-y-auto mt-2">
            {filteredEmployees.map((employee) => (
              <div key={employee.id} className="flex items-center my-2">
                <input
                  type="checkbox"
                  value={employee.id}
                  checked={selectedEmployees.includes(employee.id)}
                  onChange={handleEmployeeSelection}
                  className="mr-2"
                />
                <label>{employee.name}</label>
              </div>
            ))}
          </div>
        </div>

        <div className="my-4">
          <label htmlFor="resignationTypes" className="block mb-2 text-gray-700">
            Select Resignation Types
          </label>
          <div className="flex flex-wrap">
            {resignationTypes.map((type) => (
              <div key={type} className="mr-4">
                <input
                  type="checkbox"
                  id={type}
                  value={type}
                  checked={selectedResignationTypes.includes(type)}
                  onChange={handleResignationTypeSelection}
                  className="mr-2"
                />
                <label htmlFor={type}>{type}</label>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg"
        >
          Assign Resignations
        </button>
      </div>

      {/* Display submitted resignation assignments in a table */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Assigned Resignations</h2>

        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Authority</th>
              <th className="px-4 py-2 border-b">Resignation Type</th>
              <th className="px-4 py-2 border-b">Employees</th>
              <th className="px-4 py-2 border-b">Status</th>
              <th className="px-4 py-2 border-b">Approve</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center px-4 py-2">
                  No data to display
                </td>
              </tr>
            ) : (
              submittedData.map((assignment, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border-b">{assignment.authority}</td>
                  <td className="px-4 py-2 border-b">
                    {assignment.resignationTypes.join(', ')}
                  </td>
                  <td className="px-4 py-2 border-b">
                    {assignment.employees.map((employee) => employee.name).join(', ')}
                  </td>
                  <td className="px-4 py-2 border-b">{assignment.approvalStatus}</td>
                  <td className="px-4 py-2 border-b">
                    {assignment.approvalStatus === 'Pending' && (
                      <>
                        <button
                          onClick={() => handleApproval(index, 'HR')}
                          className="bg-green-600 text-white py-1 px-3 rounded mr-2"
                        >
                          Approve by HR
                        </button>
                        <button
                          onClick={() => handleApproval(index, 'Manager')}
                          className="bg-yellow-600 text-white py-1 px-3 rounded mr-2"
                        >
                          Approve by Manager
                        </button>
                        <button
                          onClick={() => handleApproval(index, 'SuperAdmin')}
                          className="bg-blue-600 text-white py-1 px-3 rounded"
                        >
                          Approve by SuperAdmin
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResignationAssignment;

