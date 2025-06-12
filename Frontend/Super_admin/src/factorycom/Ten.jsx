import React, { useState, useMemo } from 'react';

// Static configuration avoids re-creating arrays on each render
const authorities = [
  { id: 'Factory Manager/Plant Head', email: 'factoryhead@example.com' },
  { id: 'Factory HR Executive', email: 'hr@example.com' },
  { id: 'Maintenance Lead', email: 'maintenancelead@example.com' },
  { id: 'QC Lead', email: 'qclead@example.com' },
  { id: 'Storekeeper', email: 'storekeeper@example.com' },
  { id: 'Safety Officer', email: 'safetyofficer@example.com' },
  { id: 'Shift Supervisors', email: 'shiftsupervisor@example.com' },
];
const departmentsList = ['HR', 'Production', 'Maintenance', 'Quality', 'Store'];
const shiftsList = ['Morning', 'Evening', 'Night'];
const leaveTypesList = ['PL', 'SL', 'CL'];

const LeaveAssignment1 = () => {
  // Form state
  const [selectedAuthority, setSelectedAuthority] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedShift, setSelectedShift] = useState('');
  const [numEmployees, setNumEmployees] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [selectedLeaveTypes, setSelectedLeaveTypes] = useState([]);
  const [submittedData, setSubmittedData] = useState([]);

  // Dummy employees
  const [employees] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      id: `E${i + 1}`,
      name: `Employee ${i + 1}`,
      department: departmentsList[i % departmentsList.length],
      shift: shiftsList[i % shiftsList.length],
    }))
  );

  // Memoized filter
  const filteredEmployees = useMemo(
    () =>
      employees
        .filter(e => !selectedDepartment || e.department === selectedDepartment)
        .filter(e => !selectedShift || e.shift === selectedShift)
        .filter(e => e.name.toLowerCase().includes(searchQuery.toLowerCase())),
    [employees, selectedDepartment, selectedShift, searchQuery]
  );

  // Handlers
  const handleDepartmentChange = e => setSelectedDepartment(e.target.value);
  const handleShiftChange = e => setSelectedShift(e.target.value);
  const handleNumEmployeesChange = e => {
    const num = parseInt(e.target.value, 10) || 0;
    setNumEmployees(num);
    if (num > 0 && num <= filteredEmployees.length) {
      setSelectedEmployees(filteredEmployees.slice(0, num).map(emp => emp.id));
    }
  };
  const handleEmployeeSelection = e => {
    const { value, checked } = e.target;
    setSelectedEmployees(prev =>
      checked ? [...prev, value] : prev.filter(id => id !== value)
    );
  };
  const handleSelectAll = () => {
    setSelectedEmployees(prev =>
      prev.length === filteredEmployees.length
        ? []
        : filteredEmployees.map(e => e.id)
    );
  };
  const handleLeaveTypeSelection = e => {
    const { value, checked } = e.target;
    setSelectedLeaveTypes(prev =>
      checked ? [...prev, value] : prev.filter(lt => lt !== value)
    );
  };

  const handleSubmit = () => {
    if (!selectedAuthority || !selectedEmployees.length || !selectedLeaveTypes.length) {
      alert('Please fill out all fields.');
      return;
    }
    const assignment = {
      id: Date.now(),
      authority: selectedAuthority,
      department: selectedDepartment,
      shift: selectedShift,
      leaveTypes: selectedLeaveTypes,
      employees: selectedEmployees.map(id => employees.find(emp => emp.id === id)),
      approvals: { supervisor: false, shiftLead: false, hr: false },
      approvalStatus: 'Pending Supervisor Approval',
    };
    setSubmittedData(prev => [...prev, assignment]);
    // Reset form
    setSelectedAuthority('');
    setSelectedDepartment('');
    setSelectedShift('');
    setNumEmployees(0);
    setSearchQuery('');
    setSelectedEmployees([]);
    setSelectedLeaveTypes([]);
  };

  const handleApproval = (idx, role) => {
    setSubmittedData(prev => {
      const list = [...prev];
      const item = list[idx];
      if (role === 'supervisor' && !item.approvals.supervisor) {
        item.approvals.supervisor = true;
        item.approvalStatus = 'Pending Shift Lead Approval';
      } else if (role === 'shiftLead') {
        if (!item.approvals.supervisor) alert('Awaiting Supervisor approval');
        else if (!item.approvals.shiftLead) {
          item.approvals.shiftLead = true;
          item.approvalStatus = 'Pending HR Approval';
        }
      } else if (role === 'hr') {
        if (!item.approvals.shiftLead) alert('Awaiting Shift Lead approval');
        else if (!item.approvals.hr) {
          item.approvals.hr = true;
          item.approvalStatus = 'Fully Approved';
        }
      }
      return list;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="p-6 mb-6 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Leave Assignment</h2>
        <div className="mb-4">
          <label htmlFor="authority" className="block mb-2">Authority</label>
          <select
            id="authority"
            value={selectedAuthority}
            onChange={e => setSelectedAuthority(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="" disabled>Select</option>
            {authorities.map(a => (
              <option key={a.id} value={a.id}>{a.id}</option>
            ))}
          </select>
        </div>
        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label htmlFor="department" className="block mb-2">Department</label>
            <select
              id="department"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              {departmentsList.map(dep => (
                <option key={dep} value={dep}>{dep}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="shift" className="block mb-2">Shift</label>
            <select
              id="shift"
              value={selectedShift}
              onChange={handleShiftChange}
              className="w-full p-2 border rounded"
            >
              <option value="">All</option>
              {shiftsList.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-4 flex space-x-4 items-end">
          <div className="flex-1">
            <label htmlFor="numEmployees" className="block mb-2">No of Employees</label>
            <input
              id="numEmployees"
              type="number"
              min="0"
              max={filteredEmployees.length}
              value={numEmployees}
              onChange={handleNumEmployeesChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="search" className="block mb-2">Search by name</label>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedEmployees.length === filteredEmployees.length}
              onChange={handleSelectAll}
              className="mr-2"
            />
            Select All
          </div>
          <div className="max-h-48 overflow-y-auto border p-2 rounded">
            {filteredEmployees.map(emp => (
              <div key={emp.id} className="flex items-center mb-1">
                <input
                  type="checkbox"
                  value={emp.id}
                  checked={selectedEmployees.includes(emp.id)}
                  onChange={handleEmployeeSelection}
                  className="mr-2"
                />
                {emp.name}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Leave Types</label>
          <div className="flex space-x-4">
            {leaveTypesList.map(lt => (
              <label key={lt} className="flex items-center">
                <input
                  type="checkbox"
                  value={lt}
                  checked={selectedLeaveTypes.includes(lt)}
                  onChange={handleLeaveTypeSelection}
                  className="mr-1"
                />
                {lt}
              </label>
            ))}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >Assign Leaves</button>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Assigned Leaves</h2>
        <table className="min-w-full border-collapse border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Authority</th>
              <th className="border px-2 py-1">Dept</th>
              <th className="border px-2 py-1">Shift</th>
              <th className="border px-2 py-1">Leave Type(s)</th>
              <th className="border px-2 py-1">Employees</th>
              <th className="border px-2 py-1">Status</th>
              <th className="border px-2 py-1">Actions</th>
            </tr>
          </thead>
          <tbody>
            {submittedData.length === 0 ? (
              <tr><td colSpan="7" className="text-center py-2">No data</td></tr>
            ) : (
              submittedData.map((item, idx) => (
                <tr key={item.id}>
                  <td className="border px-2 py-1">{item.authority}</td>
                  <td className="border px-2 py-1">{item.department || '-'}</td>
                  <td className="border px-2 py-1">{item.shift || '-'}</td>
                  <td className="border px-2 py-1">{item.leaveTypes.join(', ')}</td>
                  <td className="border px-2 py-1">{item.employees.map(e => e.name).join(', ')}</td>
                  <td className="border px-2 py-1">{item.approvalStatus}</td>
                  <td className="border px-2 py-1 space-x-1">
                    {!item.approvals.supervisor && (
                      <button onClick={() => handleApproval(idx, 'supervisor')} className="px-2 py-1 bg-green-600 text-white rounded">Sup Appr</button>
                    )}
                    {item.approvals.supervisor && !item.approvals.shiftLead && (
                      <button onClick={() => handleApproval(idx, 'shiftLead')} className="px-2 py-1 bg-yellow-600 text-white rounded">Shift Appr</button>
                    )}
                    {item.approvals.shiftLead && !item.approvals.hr && (
                      <button onClick={() => handleApproval(idx, 'hr')} className="px-2 py-1 bg-blue-600 text-white rounded">HR Appr</button>
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

export default LeaveAssignment1;

