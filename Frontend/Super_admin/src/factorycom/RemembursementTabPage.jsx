import React, { useState, useEffect } from 'react';

const ResignationAssignment2 = () => {
  const [selectedAuthority, setSelectedAuthority] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedResignationTypes, setSelectedResignationTypes] = useState([]);
  const [resignationTypes] = useState(['Immediate', 'Future']);
  const [employees] = useState(
    Array.from({ length: 100 }, (_, index) => ({
      id: `E${index + 1}`,
      name: `Employee ${index + 1}`,
    }))
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [numEmployees, setNumEmployees] = useState(0); // Number of employees to select
  
  const [selectedFactory, setSelectedFactory] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');

  // Dummy data for authorities and departments
  const [authorities] = useState([
    { id: 'Factory Manager/Plant Head', email: 'factoryhead@example.com' },
    { id: 'Factory HR Executive', email: 'hr@example.com' },
    { id: 'Maintenance Lead', email: 'maintenancelead@example.com' },
    { id: 'QC Lead', email: 'qclead@example.com' },
    { id: 'Storekeeper', email: 'storekeeper@example.com' },
    { id: 'Safety Officer', email: 'safetyofficer@example.com' },
    { id: 'Shift Supervisors', email: 'shiftsupervisor@example.com' },
  ]);

  const [factories] = useState([
    { id: 'Factory1', name: 'Factory 1' },
    { id: 'Factory2', name: 'Factory 2' },
    { id: 'Factory3', name: 'Factory 3' },
  ]);

  const [departments] = useState({
    Factory1: ['HR', 'Maintenance', 'QC', 'Store', 'Safety'],
    Factory2: ['HR', 'Operations', 'Logistics'],
    Factory3: ['HR', 'Manufacturing', 'Quality Assurance'],
  });

  const handleFactoryChange = (e) => {
    const factoryId = e.target.value;
    setSelectedFactory(factoryId);
    setSelectedDepartment(''); // Reset department on factory change
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const handleEmployeeSelection = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedEmployees((prev) => [...prev, value]);
    } else {
      setSelectedEmployees((prev) => prev.filter((id) => id !== value));
    }
  };

  // Auto-select employees based on numEmployees
  useEffect(() => {
    if (numEmployees > 0 && numEmployees <= employees.length) {
      setSelectedEmployees(employees.slice(0, numEmployees).map((e) => e.id));
    } else {
      setSelectedEmployees([]); // Reset if the number is invalid
    }
  }, [numEmployees, employees]);

  const handleSubmit = () => {
    if (!selectedAuthority || selectedEmployees.length === 0 || selectedResignationTypes.length === 0) {
      alert('Please fill out all fields.');
      return;
    }

    const payload = {
      authority: selectedAuthority,
      employees: selectedEmployees,
      resignationTypes: selectedResignationTypes,
      factory: selectedFactory,
      department: selectedDepartment,
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
    setSelectedFactory('');
    setSelectedDepartment('');
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="p-5 mb-6 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Resignation Assignment</h2>

        {/* Factory Selection */}
        <div className="my-4">
          <label htmlFor="factory" className="block mb-2 text-gray-700">
            Select Factory
          </label>
          <select
            id="factory"
            className="w-full px-4 py-2 border rounded-md"
            value={selectedFactory}
            onChange={handleFactoryChange}
          >
            <option value="" disabled>Select a factory</option>
            {factories.map((factory) => (
              <option key={factory.id} value={factory.id}>
                {factory.name}
              </option>
            ))}
          </select>
        </div>

        {/* Department Selection */}
        {selectedFactory && (
          <div className="my-4">
            <label htmlFor="department" className="block mb-2 text-gray-700">
              Select Department
            </label>
            <select
              id="department"
              className="w-full px-4 py-2 border rounded-md"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="" disabled>Select a department</option>
              {departments[selectedFactory]?.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Authority Selection */}
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
            <option value="" disabled>Select an authority</option>
            {authorities.map((auth) => (
              <option key={auth.id} value={auth.id}>
                {auth.id} - {auth.email}
              </option>
            ))}
          </select>
        </div>

        {/* Number of Employees to Select */}
        <div className="my-4">
          <label htmlFor="numEmployees" className="block mb-2 text-gray-700">
            Number of Employees to Select
          </label>
          <input
            type="number"
            id="numEmployees"
            className="w-full px-4 py-2 border rounded-md"
            value={numEmployees}
            onChange={(e) => setNumEmployees(parseInt(e.target.value) || 0)}
            min="0"
            max={employees.length}
          />
        </div>

        {/* Employee Selection */}
        <div className="my-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={selectedEmployees.length === filteredEmployees.length}
              onChange={() => setSelectedEmployees(selectedEmployees.length === filteredEmployees.length ? [] : filteredEmployees.map((e) => e.id))}
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

        {/* Resignation Type Selection */}
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
                  onChange={(e) => {
                    const { value, checked } = e.target;
                    if (checked) {
                      setSelectedResignationTypes((prev) => [...prev, value]);
                    } else {
                      setSelectedResignationTypes((prev) => prev.filter((type) => type !== value));
                    }
                  }}
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

      {/* Display submitted resignation assignments */}
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
                              Approve by Super Admin
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

export default ResignationAssignment2;
