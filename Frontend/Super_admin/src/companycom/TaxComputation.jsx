import React, { useState } from "react";

const TaxRegimePanel = () => {
  const [companyRegime, setCompanyRegime] = useState("Old"); // Default tax regime for company
  const [canChangeRegime, setCanChangeRegime] = useState(true); // Can employee change regime
  const [employees, setEmployees] = useState([
    {
      id: "EMP001",
      name: "Priya Sharma",
      selectedRegime: "Old",
      canChange: true,
      approvalStatus: "Pending", // Approval status added
    },
    {
      id: "EMP002",
      name: "Aman Gupta",
      selectedRegime: "New",
      canChange: false,
      approvalStatus: "Approved", // Approval status added
    },
    {
      id: "EMP003",
      name: "Rita Singh",
      selectedRegime: "Old",
      canChange: true,
      approvalStatus: "Pending", // Approval status added
    },
  ]);

  const handleChangeRegime = (employeeId) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === employeeId
        ? { ...emp, selectedRegime: emp.selectedRegime === "Old" ? "New" : "Old" }
        : emp
    );
    setEmployees(updatedEmployees);
  };

  const handleApproval = (employeeId, status) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === employeeId
        ? { ...emp, approvalStatus: status }
        : emp
    );
    setEmployees(updatedEmployees);
  };

  const calculateTaxImpact = (employee) => {
    const grossSalary = 600000; // Dummy gross salary
    let oldRegimeTax = 9360; // Dummy tax calculation for old regime
    let newRegimeTax = 22500; // Dummy tax calculation for new regime

    const oldTaxableIncome = grossSalary - 150000; // Example: Deduction for Old Regime
    const newTaxableIncome = grossSalary; // No deductions for New Regime

    // Tax payables based on regime
    oldRegimeTax = oldTaxableIncome > 0 ? oldTaxableIncome * 0.02 : 0; // Dummy calculation
    newRegimeTax = newTaxableIncome * 0.05; // Dummy calculation

    return {
      oldRegimeTax,
      newRegimeTax,
      oldTaxableIncome,
      newTaxableIncome,
    };
  };

  const renderTaxImpact = (employee) => {
    const { oldRegimeTax, newRegimeTax, oldTaxableIncome, newTaxableIncome } = calculateTaxImpact(employee);
    return (
      <div className="mt-6 bg-white shadow-md rounded-lg p-4">
        <h4 className="text-lg font-semibold text-gray-800">Tax Impact Comparison for {employee.name}</h4>
        <table className="min-w-full mt-4 table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left text-gray-600">Regime</th>
              <th className="py-2 px-4 text-left text-gray-600">Gross Salary</th>
              <th className="py-2 px-4 text-left text-gray-600">Deductions</th>
              <th className="py-2 px-4 text-left text-gray-600">Taxable Income</th>
              <th className="py-2 px-4 text-left text-gray-600">Tax Payable</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2 px-4">Old Regime</td>
              <td className="py-2 px-4">₹600,000</td>
              <td className="py-2 px-4">₹150,000</td>
              <td className="py-2 px-4">₹{oldTaxableIncome}</td>
              <td className="py-2 px-4">₹{oldRegimeTax}</td>
            </tr>
            <tr>
              <td className="py-2 px-4">New Regime</td>
              <td className="py-2 px-4">₹600,000</td>
              <td className="py-2 px-4">₹0</td>
              <td className="py-2 px-4">₹{newTaxableIncome}</td>
              <td className="py-2 px-4">₹{newRegimeTax}</td>
            </tr>
          </tbody>
        </table>
        <p className="mt-4 text-sm text-gray-500">Suggested: {oldRegimeTax < newRegimeTax ? "Old Regime" : "New Regime"}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Tax Regime Management</h2>

      {/* Set Default Regime for Company */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <h3 className="text-xl font-semibold text-gray-700">Set Default Tax Regime for Company</h3>
        <div className="flex items-center mt-4">
          <label className="mr-4">Default Regime:</label>
          <label className="flex items-center mr-4">
            <input
              type="radio"
              name="regime"
              value="Old"
              checked={companyRegime === "Old"}
              onChange={() => setCompanyRegime("Old")}
              className="mr-2"
            />
            Old Regime
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="regime"
              value="New"
              checked={companyRegime === "New"}
              onChange={() => setCompanyRegime("New")}
              className="mr-2"
            />
            New Regime
          </label>
        </div>
        <div className="mt-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={canChangeRegime}
              onChange={() => setCanChangeRegime(!canChangeRegime)}
              className="mr-2"
            />
            Can Employee Change Regime?
          </label>
        </div>
      </div>

      {/* Employee Regime Table */}
      <h3 className="text-xl font-semibold text-gray-700 mb-4">Employee Regime Management</h3>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full table-auto border-collapse border border-gray-300 mb-6">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left text-gray-600">Employee Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Selected Regime</th>
              <th className="py-2 px-4 text-left text-gray-600">Can Change?</th>
              <th className="py-2 px-4 text-left text-gray-600">Approval Status</th> {/* Added column */}
              <th className="py-2 px-4 text-left text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="border-b">
                <td className="py-2 px-4">{employee.name}</td>
                <td className="py-2 px-4">{employee.selectedRegime}</td>
                <td className="py-2 px-4">{employee.canChange ? "Yes" : "No"}</td>
                <td className="py-2 px-4">{employee.approvalStatus}</td> {/* Display approval status */}
                <td className="py-2 px-4">
                  {employee.canChange && (
                    <button
                      onClick={() => handleChangeRegime(employee.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Switch Regime
                    </button>
                  )}
                  <div className="mt-2">
                    {employee.approvalStatus === "Pending" && (
                      <div>
                        <button
                          onClick={() => handleApproval(employee.id, "Approved")}
                          className="text-green-500 hover:text-green-700 mr-2"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => handleApproval(employee.id, "Rejected")}
                          className="text-red-500 hover:text-red-700"
                        >
                          Reject
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tax Impact View */}
      <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-4">Tax Impact View</h3>
      {employees.map((employee) => renderTaxImpact(employee))}
    </div>
  );
};

export default TaxRegimePanel;