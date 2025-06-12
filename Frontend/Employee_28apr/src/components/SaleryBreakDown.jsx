import React from 'react';

const GistSalaryStructure = () => {
  const data = [
    { component: 'Basic', perAnnum: 450000, perMonth: 37500 },
    { component: 'HRA', perAnnum: 225000, perMonth: 18750 },
    { component: 'Medical', perAnnum: 15000, perMonth: 1250 },
    { component: 'Special Allow', perAnnum: 120000, perMonth: 10000 },
    { component: 'Telephone Reim.', perAnnum: 36000, perMonth: 3000 },
    { component: 'Conveyance Reim.', perAnnum: 75000, perMonth: 6250 },
    { component: 'Ex-Gratia', perAnnum: 25000, perMonth: 2083 },
    { component: 'PF Employer', perAnnum: 54000, perMonth: 4500 },
  ];

  const totalPerAnnum = data.reduce((acc, curr) => acc + curr.perAnnum, 0);
  const totalPerMonth = data.reduce((acc, curr) => acc + curr.perMonth, 0);

  return (
    <div className="max-w-4xl mx-auto my-5 bg-white border border-gray-400 rounded-md p-6 text-sm font-sans shadow-md">
      <h2 className="text-center text-xl font-bold mb-4 uppercase">Salary Structure Example Format</h2>

      <div className="text-center font-semibold text-lg mb-2">
        Global Information Systems Technology Pvt Ltd
      </div>

      <div className="grid grid-cols-2 gap-4 border border-gray-300 p-4 mb-4">
        <div>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Designation:</strong> Software Engineer</p>
        </div>
        <div>
          <p><strong>Location:</strong> Bengaluru</p>
          <p><strong>Date of Joining:</strong> 01-Jan-2024</p>
        </div>
      </div>

      <div className="border border-gray-300">
        <div className="bg-gray-100 font-semibold px-4 py-2 flex justify-between">
          <span>Salary Break-up</span>
          <span>Cost to Company: ₹{totalPerAnnum.toLocaleString()}</span>
        </div>

        <table className="w-full table-auto text-left border-t border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border-r">Component</th>
              <th className="px-4 py-2 border-r">Per Annum</th>
              <th className="px-4 py-2">Per Month</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="border-t">
                <td className="px-4 py-2 border-r">{item.component}</td>
                <td className="px-4 py-2 border-r">₹{item.perAnnum.toLocaleString()}</td>
                <td className="px-4 py-2">₹{item.perMonth.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="font-bold border-t bg-gray-100">
              <td className="px-4 py-2 border-r">Total</td>
              <td className="px-4 py-2 border-r">₹{totalPerAnnum.toLocaleString()}</td>
              <td className="px-4 py-2">₹{totalPerMonth.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GistSalaryStructure;

/*
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const SalaryStructure = () => {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Salary Structure - ₹10L CTC',
  });

  const salaryData = [
    { component: 'Basic Salary', annual: 450000, taxStatus: 'Taxable' },
    { component: 'HRA (50% of Basic)', annual: 225000, taxStatus: 'Tax-exempt (if rent paid)' },
    { component: 'Medical Reimbursement', annual: 15000, taxStatus: 'Non-Taxable' },
    { component: 'Telephone Reimbursement', annual: 24000, taxStatus: 'Non-Taxable' },
    { component: 'Conveyance', annual: 19200, taxStatus: 'Non-Taxable' },
    { component: 'Employer PF (12%)', annual: 54000, taxStatus: 'Tax-exempt' },
    { component: 'Special Allowance', annual: 112800, taxStatus: 'Taxable' },
  ];

  const totalAnnual = salaryData.reduce((sum, item) => sum + item.annual, 0);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Salary Structure - ₹10,00,000 CTC</h2>
        <button
          onClick={handlePrint}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 text-sm rounded"
        >
          Download as PDF
        </button>
      </div>

      <div ref={printRef} className="text-sm">
        <table className="w-full border border-gray-300 text-left">
          <thead className="bg-blue-100">
            <tr>
              <th className="p-2 border border-gray-300">Component</th>
              <th className="p-2 border border-gray-300 text-right">Annual (₹)</th>
              <th className="p-2 border border-gray-300 text-right">Monthly (₹)</th>
              <th className="p-2 border border-gray-300 text-center">Taxable / Exempt</th>
            </tr>
          </thead>
          <tbody>
            {salaryData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-2 border border-gray-200">{item.component}</td>
                <td className="p-2 border border-gray-200 text-right">{item.annual.toLocaleString()}</td>
                <td className="p-2 border border-gray-200 text-right">{(item.annual / 12).toFixed(0).toLocaleString()}</td>
                <td className="p-2 border border-gray-200 text-center">{item.taxStatus}</td>
              </tr>
            ))}
            <tr className="font-semibold bg-gray-100">
              <td className="p-2 border border-gray-300">Total</td>
              <td className="p-2 border border-gray-300 text-right">{totalAnnual.toLocaleString()}</td>
              <td className="p-2 border border-gray-300 text-right">{(totalAnnual / 12).toFixed(0).toLocaleString()}</td>
              <td className="p-2 border border-gray-300"></td>
            </tr>
          </tbody>
        </table>

        <p className="text-xs text-gray-500 mt-3">
          * HRA is tax-exempt only if rent is paid & conditions are met.
        </p>
      </div>
    </div>
  );
};

export default SalaryStructure;

*/