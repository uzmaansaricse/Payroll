import React, { useState, useEffect } from 'react';
import { FiUpload, FiDownload, FiEdit2, FiTrash2, FiUser, FiClock, FiChevronRight } from 'react-icons/fi';

const ShiftAssignFactory = () => {
  // Config data
  const authorities = [
  { id: 'HR1', email: 'hr1@example.com', name: 'HR Department', password: '12345', department: 'HR', isEditing: false },
  { id: 'HR2', email: 'hr2@example.com', name: 'HR Manager', password: '12345', department: 'HR', isEditing: false },
  { id: 'Manager1', email: 'manager1@example.com', name: 'Operations Manager', password: '12345', department: 'Operations', isEditing: false },
  { id: 'Manager2', email: 'manager2@example.com', name: 'Floor Manager', password: '12345', department: 'Operations', isEditing: false },
  { id: 'SuperAdmin1', email: 'superadmin1@example.com', name: 'Admin', password: 'adminpass', department: 'Admin', isEditing: false },
];


  const shifts = [
    { id: 1, name: 'Morning Shift (9AM - 6PM)' },
    { id: 2, name: 'Evening Shift (1PM - 10PM)' },
    { id: 3, name: 'Night Shift (10PM - 6AM)' },
  ];

  // Generate dummy employees
  const generateEmployees = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `EMP${1000 + i}`,
      name: `Employee ${i + 1}`,
      department: ['Production', 'QA', 'Logistics', 'Admin'][Math.floor(Math.random() * 4)],
    }));
  };

  // State
  const [activeTab, setActiveTab] = useState('authorities');
  const [selectedAuthority, setSelectedAuthority] = useState(null);
  const [selectedShift, setSelectedShift] = useState(null);
  const [employees, setEmployees] = useState(generateEmployees(50));
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [assignments, setAssignments] = useState([]);
  const [csvData, setCsvData] = useState(null);

  // Filter employees by search
  useEffect(() => {
    const filtered = employees.filter(emp =>
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.id.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEmployees(filtered);
  }, [searchQuery, employees]);

  // Handle CSV upload
  const handleCsvUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      const lines = content.split('\n');
      const headers = lines[0].split(',');
      
      const newEmployees = lines.slice(1).map(line => {
        const values = line.split(',');
        return {
          id: values[0] || `EMP${1000 + Math.floor(Math.random() * 9000)}`,
          name: values[1] || 'New Employee',
          department: values[2] || 'General'
        };
      }).filter(emp => emp.id && emp.name);
      
      setEmployees(prev => [...prev, ...newEmployees]);
      setCsvData(`Successfully imported ${newEmployees.length} employees`);
      setTimeout(() => setCsvData(null), 3000);
    };
    reader.readAsText(file);
  };

  // Employee selection
  const toggleEmployee = (id) => {
    setSelectedEmployees(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]
    );
  };

  // Assignment submission
  const handleAssignment = () => {
    if (!selectedAuthority || !selectedShift || selectedEmployees.length === 0) {
      alert('Please complete all selections');
      return;
    }

    const newAssignment = {
      authority: selectedAuthority,
      shift: selectedShift,
      employees: selectedEmployees.map(id => 
        employees.find(e => e.id === id)
      ),
      date: new Date().toLocaleDateString()
    };

    setAssignments(prev => [...prev, newAssignment]);
    setSelectedEmployees([]);
    setSelectedShift(null);
    setActiveTab('assignments');
  };

  // Delete assignment
  const deleteAssignment = (index) => {
    setAssignments(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Shift Management System</h1>
          {selectedAuthority && activeTab !== 'authorities' && (
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-full">
              <FiUser className="text-blue-600 mr-2" />
              <span className="font-medium">{selectedAuthority.name}</span>
              <button 
                onClick={() => {
                  setSelectedAuthority(null);
                  setSelectedShift(null);
                  setActiveTab('authorities');
                }}
                className="ml-4 text-blue-600 hover:text-blue-800"
              >
                Change
              </button>
            </div>
          )}
        </div>

        {/* Main Content */}
        {activeTab === 'authorities' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Select Authority</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {authorities.map(auth => (
                  <div 
                    key={auth.id}
                    onClick={() => {
                      setSelectedAuthority(auth);
                      setActiveTab('shifts');
                    }}
                    className="border rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-3 rounded-full mr-4">
                        <FiUser className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-medium">{auth.name}</h3>
                        <p className="text-sm text-gray-500">{auth.email}</p>
                      </div>
                      <div className='text-[10px] bg-blue-600 text-white p-2 rounded-md'>{auth.department}</div>
                      <FiChevronRight className="ml-auto text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'shifts' && selectedAuthority && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Available Shifts</h2>
                <button 
                  onClick={() => setActiveTab('authorities')}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <FiChevronRight className="transform rotate-180 mr-1" />
                  Back to Authorities
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {shifts.map(shift => (
                  <div 
                    key={shift.id}
                    onClick={() => {
                      setSelectedShift(shift);
                      setActiveTab('employees');
                    }}
                    className="border rounded-lg p-4 hover:bg-blue-50 hover:border-blue-200 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center">
                      <div className="bg-purple-100 p-3 rounded-full mr-4">
                        <FiClock className="text-purple-600 text-xl" />
                      </div>
                      <div>
                        <h3 className="font-medium">{shift.name}</h3>
                      </div>
                      <FiChevronRight className="ml-auto text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'employees' && selectedAuthority && selectedShift && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold">Assign Employees</h2>
                  <p className="text-gray-500">
                    {selectedAuthority.name} • {selectedShift.name}
                  </p>
                </div>
                <button 
                  onClick={() => setActiveTab('shifts')}
                  className="text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <FiChevronRight className="transform rotate-180 mr-1" />
                  Back to Shifts
                </button>
              </div>

              {/* CSV Upload */}
              <div className="mb-6 p-4 border border-dashed border-gray-300 rounded-lg bg-gray-50">
                <label className="flex items-center justify-center cursor-pointer">
                  <FiUpload className="mr-2 text-blue-600" />
                  <span className="text-blue-600 font-medium">Upload Employee CSV</span>
                  <input 
                    type="file" 
                    accept=".csv"
                    onChange={handleCsvUpload}
                    className="hidden"
                  />
                </label>
                {csvData && (
                  <p className="mt-2 text-sm text-green-600 text-center">{csvData}</p>
                )}
                <p className="text-xs text-gray-500 mt-2 text-center">
                  CSV format: EmployeeID,Name,Department
                </p>
              </div>

              {/* Employee Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search employees by name, ID or department..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <div className="absolute left-3 top-3.5 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Employee List */}
              <div className="mb-6 max-h-96 overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filteredEmployees.map(emp => (
                    <div 
                      key={emp.id}
                      onClick={() => toggleEmployee(emp.id)}
                      className={`p-3 border rounded-lg flex items-center justify-between cursor-pointer transition-colors ${selectedEmployees.includes(emp.id) ? 'bg-blue-50 border-blue-300' : 'hover:bg-gray-50'}`}
                    >
                      <div>
                        <h3 className="font-medium">{emp.name}</h3>
                        <div className="flex text-sm text-gray-500 mt-1">
                          <span className="mr-3">ID: {emp.id}</span>
                          <span>Dept: {emp.department}</span>
                        </div>
                      </div>
                      {selectedEmployees.includes(emp.id) && (
                        <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={() => setActiveTab('shifts')}
                  className="px-6 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  onClick={handleAssignment}
                  disabled={selectedEmployees.length === 0}
                  className={`px-6 py-2 rounded-lg text-white ${selectedEmployees.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                  Assign {selectedEmployees.length} Employee{selectedEmployees.length !== 1 ? 's' : ''}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Assignments Table */}
        {(activeTab === 'assignments' || assignments.length > 0) && (
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Current Assignments</h2>
                {activeTab !== 'authorities' && (
                  <button 
                    onClick={() => setActiveTab('authorities')}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <FiChevronRight className="transform rotate-180 mr-1" />
                    Back to Authorities
                  </button>
                )}
              </div>

              {assignments.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  No assignments yet. Start by selecting an authority.
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Authority</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shift</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employees</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {assignments.map((assignment, index) => (
                        <tr key={index}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <FiUser className="text-blue-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{assignment.authority.name}</div>
                                <div className="text-sm text-gray-500">{assignment.authority.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <FiClock className="text-purple-500 mr-2" />
                              <span>{assignment.shift.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-wrap gap-2">
                              {assignment.employees.slice(0, 3).map(emp => (
                                <span key={emp.id} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {emp.name}
                                </span>
                              ))}
                              {assignment.employees.length > 3 && (
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                  +{assignment.employees.length - 3} more
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {assignment.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button
                              onClick={() => {
                                setSelectedAuthority(assignment.authority);
                                setSelectedShift(assignment.shift);
                                setSelectedEmployees(assignment.employees.map(e => e.id));
                                setActiveTab('employees');
                              }}
                              className="text-blue-600 hover:text-blue-900 mr-3"
                            >
                              <FiEdit2 className="inline mr-1" /> Edit
                            </button>
                            <button
                              onClick={() => deleteAssignment(index)}
                              className="text-red-600 hover:text-red-900"
                            >
                              <FiTrash2 className="inline mr-1" /> Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShiftAssignFactory;