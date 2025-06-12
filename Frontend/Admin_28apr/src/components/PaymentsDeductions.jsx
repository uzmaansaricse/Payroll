import React, { useState, useEffect } from 'react';

// Dummy Data
const dummyEmployees = [
  { employeeId: 'E1001', name: 'Anuj Saini', companyId: 'C001' },
  { employeeId: 'E1002', name: 'Amit Jain', companyId: 'C001' },
  { employeeId: 'E1003', name: 'Sanjay Yadav', companyId: 'C002' },
  { employeeId: 'E1004', name: 'Nisha Rani', companyId: 'C002' },
];

const dummyCompanies = [
  { companyId: 'C001', companyName: 'Company A' },
  { companyId: 'C002', companyName: 'Company B' },
];

export default function PaymentDeductionManagement() {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [paymentType, setPaymentType] = useState('Bonus');
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentMonth, setPaymentMonth] = useState('');
  const [deductionType, setDeductionType] = useState('Penalty');
  const [deductionAmount, setDeductionAmount] = useState('');
  const [deductionMonth, setDeductionMonth] = useState('');
  const [recurringDeductionData, setRecurringDeductionData] = useState([]);
  const [oneTimePayments, setOneTimePayments] = useState([]);
  const [oneTimeDeductions, setOneTimeDeductions] = useState([]);

  const handleAddOneTimePayment = () => {
    setOneTimePayments([
      ...oneTimePayments,
      {
        employeeId: selectedEmployee,
        type: paymentType,
        amount: paymentAmount,
        month: paymentMonth,
      },
    ]);
  };

  const handleAddOneTimeDeduction = () => {
    setOneTimeDeductions([
      ...oneTimeDeductions,
      {
        employeeId: selectedEmployee,
        type: deductionType,
        amount: deductionAmount,
        month: deductionMonth,
      },
    ]);
  };

  const handleAddRecurringDeduction = (employeeId, deductionType, amount, startMonth, endMonth) => {
    setRecurringDeductionData([
      ...recurringDeductionData,
      {
        employeeId,
        deductionType,
        amount,
        startMonth,
        endMonth,
        status: 'Active',
      },
    ]);
  };

  useEffect(() => {
    // Automatically update payroll summary when new data is added.
    // Normally this would combine with other payroll generation logic.
  }, [oneTimePayments, oneTimeDeductions, recurringDeductionData]);

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold mb-4">Payment and Deduction Management</h2>

      {/* Company Selection */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Select Company</label>
        <select
          className="w-full p-2 border border-gray-300 rounded"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          <option value="">--Select Company--</option>
          {dummyCompanies.map((company) => (
            <option key={company.companyId} value={company.companyId}>
              {company.companyName}
            </option>
          ))}
        </select>
      </div>

      {/* Employee Selection */}
      {selectedCompany && (
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2">Select Employee</label>
          <select
            className="w-full p-2 border border-gray-300 rounded"
            value={selectedEmployee}
            onChange={(e) => setSelectedEmployee(e.target.value)}
          >
            <option value="">--Select Employee--</option>
            {dummyEmployees
              .filter((employee) => employee.companyId === selectedCompany)
              .map((employee) => (
                <option key={employee.employeeId} value={employee.employeeId}>
                  {employee.name}
                </option>
              ))}
          </select>
        </div>
      )}

      {/* Add One-Time Payment */}
      {selectedEmployee && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Add One-time Payment</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleAddOneTimePayment(); }}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block">Payment Type</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded"
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                >
                  <option value="Bonus">Bonus</option>
                  <option value="Incentive">Incentive</option>
                  <option value="Arrear">Arrear</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div>
                <label className="block">Amount</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block">Applicable Month</label>
              <input
                type="month"
                className="w-full p-2 border border-gray-300 rounded"
                value={paymentMonth}
                onChange={(e) => setPaymentMonth(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block">Taxable</label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Payment</button>
          </form>
        </div>
      )}

      {/* Add One-Time Deduction */}
      {selectedEmployee && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Add One-time Deduction</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleAddOneTimeDeduction(); }}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block">Deduction Type</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded"
                  value={deductionType}
                  onChange={(e) => setDeductionType(e.target.value)}
                >
                  <option value="Penalty">Penalty</option>
                  <option value="Loan EMI">Loan EMI</option>
                  <option value="Recovery">Recovery</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>
              <div>
                <label className="block">Amount</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  value={deductionAmount}
                  onChange={(e) => setDeductionAmount(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block">Month of Deduction</label>
              <input
                type="month"
                className="w-full p-2 border border-gray-300 rounded"
                value={deductionMonth}
                onChange={(e) => setDeductionMonth(e.target.value)}
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Deduction</button>
          </form>
        </div>
      )}

      {/* Recurring Deductions Section */}
      {selectedEmployee && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Recurring Deductions (LIC/Credit Society)</h3>
          <form onSubmit={(e) => { e.preventDefault(); handleAddRecurringDeduction(selectedEmployee, 'LIC', 1500, '2025-04', '2025-12'); }}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block">Deduction Type</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue="LIC"
                >
                  <option value="LIC">LIC</option>
                  <option value="Credit Society">Credit Society</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block">Amount</label>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded"
                  defaultValue="1500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block">Start Month</label>
              <input
                type="month"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="2025-04"
              />
            </div>

            <div className="mb-4">
              <label className="block">End Month</label>
              <input
                type="month"
                className="w-full p-2 border border-gray-300 rounded"
                defaultValue="2025-12"
              />
            </div>

            <button className="bg-blue-600 text-white px-4 py-2 rounded">Add Recurring Deduction</button>
          </form>
        </div>
      )}
    </div>
  );
}