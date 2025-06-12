import React, { useState } from 'react';


const CTCStructureAdminPanel = () => {
  const [ctcTemplates, setCtcTemplates] = useState([]);
  const [newTemplate, setNewTemplate] = useState({
    name: '',
    components: [
      { componentName: 'Basic', monthlyValue: 0, taxable: true, includedInPayslip: true },
      { componentName: 'HRA', monthlyValue: 0, taxable: true, includedInPayslip: true },
    ],
  });

  const [employees] = useState([
    { id: 'E001', name: 'John Doe' },
    { id: 'E002', name: 'Jane Smith' },
  ]);

  const [employeeData, setEmployeeData] = useState({
    E001: {
      name: 'John Doe',
      ctcTemplate: 'Standard Executive',
      netPay: 36200,
      annualCTC: 434400,
    },
  });

  const handleComponentChange = (index, field, value) => {
    const updatedComponents = [...newTemplate.components];
    updatedComponents[index][field] = value;
    setNewTemplate({ ...newTemplate, components: updatedComponents });
  };

  const handleAddComponent = () => {
    setNewTemplate({
      ...newTemplate,
      components: [
        ...newTemplate.components,
        { componentName: '', monthlyValue: 0, taxable: true, includedInPayslip: true },
      ],
    });
  };

  const handleTemplateSubmit = () => {
    setCtcTemplates([...ctcTemplates, newTemplate]);
    setNewTemplate({
      name: '',
      components: [
        { componentName: 'Basic', monthlyValue: 0, taxable: true, includedInPayslip: true },
        { componentName: 'HRA', monthlyValue: 0, taxable: true, includedInPayslip: true },
      ],
    });
    alert('CTC Template Created');
  };

  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [overriddenComponents, setOverriddenComponents] = useState([]);

  const handleComponentOverride = (index, value) => {
    const updatedOverrides = [...overriddenComponents];
    updatedOverrides[index] = value;
    setOverriddenComponents(updatedOverrides);
  };

  const handleAssignCTC = () => {
    setEmployeeData({
      ...employeeData,
      [selectedEmployee]: {
        ...employeeData[selectedEmployee],
        ctcTemplate: selectedTemplate,
      },
    });
    alert('CTC Assigned to Employee');
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const uploadedData = {};
        results.data.forEach((row) => {
          if (row.employeeId && row.ctcTemplate) {
            uploadedData[row.employeeId] = {
              name: row.name,
              ctcTemplate: row.ctcTemplate,
              netPay: 0,
              annualCTC: 0,
            };
          }
        });
        setEmployeeData({ ...employeeData, ...uploadedData });
        alert('Bulk CTC Assigned');
      },
      error: (err) => alert('CSV Parse Error: ' + err.message),
    });
  };

  const SalaryBreakdown = () => {
    const employeeSalary = employeeData[selectedEmployee];
    const template = ctcTemplates.find((template) => template.name === employeeSalary?.ctcTemplate);
    if (!employeeSalary || !template) return null;

    const getOverriddenValue = (componentName) => {
      const componentIndex = template.components.findIndex((comp) => comp.componentName === componentName);
      return overriddenComponents[componentIndex] ?? template.components[componentIndex]?.monthlyValue;
    };

    const totalMonthly = template.components.reduce((acc, comp, idx) => {
      const val = overriddenComponents[idx] ?? comp.monthlyValue;
      return acc + val;
    }, 0);

    const totalAnnual = totalMonthly * 12;

    return (
      <div className="mt-10 bg-white rounded-lg shadow p-6 border border-gray-300">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-blue-700">Salary Payslip - {employeeSalary.name}</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border">
            <thead className="bg-gray-100 text-gray-800 uppercase">
              <tr>
                <th className="p-2 border">Component</th>
                <th className="p-2 border">Monthly</th>
                <th className="p-2 border">Annual</th>
                <th className="p-2 border">Tax Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {template.components.map((component, index) => {
                const overriddenValue = getOverriddenValue(component.componentName);
                return (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-2 border">{component.componentName}</td>
                    <td className="p-2 border">₹{overriddenValue}</td>
                    <td className="p-2 border">₹{overriddenValue * 12}</td>
                    <td className="p-2 border">{component.taxable ? 'Taxable' : 'Non-Taxable'}</td>
                  </tr>
                );
              })}
              <tr className="font-semibold bg-gray-50">
                <td className="p-2 border">Net Pay</td>
                <td className="p-2 border">₹{employeeSalary.netPay}</td>
                <td className="p-2 border">₹{employeeSalary.netPay * 12}</td>
                <td className="p-2 border"></td>
              </tr>
              <tr className="font-semibold bg-gray-100">
                <td className="p-2 border">Total Annual CTC</td>
                <td className="p-2 border"></td>
                <td className="p-2 border text-green-700 font-bold">₹{totalAnnual}</td>
                <td className="p-2 border"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🧾 CTC Structure Admin Panel</h1>

      {/* Template Creator */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Create CTC Template</h2>
        <input
          type="text"
          className="border p-2 rounded w-full mb-4"
          placeholder="Template Name"
          value={newTemplate.name}
          onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
        />
        <h3 className="font-semibold mb-2">Salary Components</h3>
        {newTemplate.components.map((component, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-2">
            <input
              className="border p-2 rounded"
              placeholder="Component"
              value={component.componentName}
              onChange={(e) => handleComponentChange(index, 'componentName', e.target.value)}
            />
            <input
              className="border p-2 rounded"
              type="number"
              placeholder="Monthly Value"
              value={component.monthlyValue}
              onChange={(e) => handleComponentChange(index, 'monthlyValue', parseInt(e.target.value))}
            />
            <select
              className="border p-2 rounded"
              value={component.taxable}
              onChange={(e) => handleComponentChange(index, 'taxable', e.target.value === 'true')}
            >
              <option value="true">Taxable</option>
              <option value="false">Non-Taxable</option>
            </select>
            <select
              className="border p-2 rounded"
              value={component.includedInPayslip}
              onChange={(e) => handleComponentChange(index, 'includedInPayslip', e.target.value === 'true')}
            >
              <option value="true">Included</option>
              <option value="false">Excluded</option>
            </select>
          </div>
        ))}
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleAddComponent}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            + Add Component
          </button>
          <button
            onClick={handleTemplateSubmit}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Save Template
          </button>
        </div>
      </div>

      {/* Assign CTC */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Assign Template to Employee</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            className="border p-2 rounded"
            onChange={(e) => setSelectedEmployee(e.target.value)}
            value={selectedEmployee}
          >
            <option value="">Select Employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>{emp.name}</option>
            ))}
          </select>
          <select
            className="border p-2 rounded"
            onChange={(e) => setSelectedTemplate(e.target.value)}
            value={selectedTemplate}
          >
            <option value="">Select Template</option>
            {ctcTemplates.map((tpl, i) => (
              <option key={i} value={tpl.name}>{tpl.name}</option>
            ))}
          </select>
        </div>

        {/* Component Overrides */}
        {selectedTemplate && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Override Component Amounts</h3>
            {ctcTemplates.find((tpl) => tpl.name === selectedTemplate)?.components.map((component, index) => (
              <div key={index} className="mb-2">
                <label className="block text-sm font-medium text-gray-700">{component.componentName}</label>
                <input
                  type="number"
                  className="border p-2 rounded w-full"
                  placeholder={`₹ ${component.componentName}`}
                  value={overriddenComponents[index] || component.monthlyValue}
                  onChange={(e) => handleComponentOverride(index, parseInt(e.target.value))}
                />
              </div>
            ))}
          </div>
        )}

        <button
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          onClick={handleAssignCTC}
        >
          Assign CTC
        </button>
      </div>

 

      {/* Show Salary Breakdown */}
      {selectedEmployee && <SalaryBreakdown />}
        {/* CSV Upload */}
      <div className="bg-white p-6 rounded-lg shadow mb-10">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Bulk Upload via CSV</h2>
        <input type="file" accept=".csv" onChange={handleCSVUpload} className="mb-4" />
        <p className="text-sm text-gray-600">CSV format: employeeId, name, ctcTemplate</p>
      </div>
    </div>
  );
};

export default CTCStructureAdminPanel;
