import React, { useState } from 'react';

const CTCStructureAdminPanel2 = () => {
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

  const handleTemplateSubmit = () => {
    setCtcTemplates([...ctcTemplates, newTemplate]);
    setNewTemplate({ name: '', components: [] });
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

  const SalaryBreakdown = () => {
    const employeeSalary = employeeData[selectedEmployee];
    const template = ctcTemplates.find((template) => template.name === employeeSalary?.ctcTemplate);

    if (!employeeSalary) return null;

    const getOverriddenValue = (componentName) => {
      const componentIndex = template?.components.findIndex((comp) => comp.componentName === componentName);
      return overriddenComponents[componentIndex] || template?.components[componentIndex]?.monthlyValue;
    };

    return (
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Salary Breakdown for {employeeSalary.name}</h2>
        <table className="w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Component</th>
              <th className="p-2 border">Monthly</th>
              <th className="p-2 border">Annual</th>
              <th className="p-2 border">Type</th>
            </tr>
          </thead>
          <tbody>
            {template?.components.map((component, index) => {
              const overriddenValue = getOverriddenValue(component.componentName);
              return (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-2 border">{component.componentName}</td>
                  <td className="p-2 border">{overriddenValue}</td>
                  <td className="p-2 border">{overriddenValue * 12}</td>
                  <td className="p-2 border">{component.taxable ? 'Taxable' : 'Non-Taxable'}</td>
                </tr>
              );
            })}
            <tr className="font-semibold">
              <td className="p-2 border">Net Pay</td>
              <td className="p-2 border">{employeeSalary.netPay}</td>
              <td className="p-2 border">{employeeSalary.netPay * 12}</td>
              <td className="p-2 border"></td>
            </tr>
            <tr className="font-semibold">
              <td className="p-2 border">Annual CTC</td>
              <td className="p-2 border"></td>
              <td className="p-2 border">{employeeSalary.annualCTC}</td>
              <td className="p-2 border"></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="p-6 space-y-10 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800">Admin Panel - CTC Structure</h1>

      {/* CTC Template Creation */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Create CTC Template</h2>
        <input
          type="text"
          className="border p-2 rounded w-full mb-4"
          value={newTemplate.name}
          onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
          placeholder="Template Name"
        />
        <h3 className="font-semibold mb-2">Components</h3>
        {newTemplate.components.map((component, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-2">
            <input
              type="text"
              className="border p-2 rounded"
              value={component.componentName}
              onChange={(e) => handleComponentChange(index, 'componentName', e.target.value)}
              placeholder="Component Name"
            />
            <input
              type="number"
              className="border p-2 rounded"
              value={component.monthlyValue}
              onChange={(e) => handleComponentChange(index, 'monthlyValue', parseInt(e.target.value))}
              placeholder="Monthly Value"
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
        <button
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleTemplateSubmit}
        >
          Create Template
        </button>

        {ctcTemplates.length > 0 && (
          <>
            <h3 className="mt-6 font-semibold">Existing Templates</h3>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
              {ctcTemplates.map((template, index) => (
                <li key={index}>{template.name}</li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* CTC Assignment Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Assign CTC Template to Employee</h2>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <select
            className="border p-2 rounded"
            onChange={(e) => setSelectedEmployee(e.target.value)}
            value={selectedEmployee}
          >
            <option value="">Select Employee</option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>

          <select
            className="border p-2 rounded"
            onChange={(e) => setSelectedTemplate(e.target.value)}
            value={selectedTemplate}
          >
            <option value="">Select CTC Template</option>
            {ctcTemplates.map((template, index) => (
              <option key={index} value={template.name}>
                {template.name}
              </option>
            ))}
          </select>
        </div>

        {selectedTemplate && (
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Override CTC Components</h3>
            {ctcTemplates
              .find((template) => template.name === selectedTemplate)
              ?.components.map((component, index) => (
                <div key={index} className="mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {component.componentName}
                  </label>
                  <input
                    type="number"
                    className="border p-2 rounded w-full"
                    value={overriddenComponents[index] || component.monthlyValue}
                    onChange={(e) => handleComponentOverride(index, parseInt(e.target.value))}
                    placeholder={`Override ${component.componentName}`}
                  />
                </div>
              ))}
          </div>
        )}

        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          onClick={handleAssignCTC}
        >
          Assign CTC to Employee
        </button>
      </div>

      {/* Salary Breakdown */}
      {selectedEmployee && <SalaryBreakdown />}
    </div>
  );
};

export default CTCStructureAdminPanel2;
