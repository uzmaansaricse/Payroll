import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const SalaryPrint = React.forwardRef((props, ref) => {
  const month = 'March';
  const year = '2025';

  // Earnings
  const basicSalary = 40000;
  const hraPercent = 37.5;
  const hra = Math.round(basicSalary * hraPercent / 100);
  const specialAllowance = 5000;
  const conveyanceAllowance = 1600;
  const medicalAllowance = 1250;
  const reimbursements = 2000;
  const flexiBenefits = 3000;

  const totalEarnings = basicSalary + hra + specialAllowance + conveyanceAllowance + medicalAllowance + reimbursements + flexiBenefits;

  // Deductions
  const pf = 3000;
  const professionalTax = 200;
  const incomeTax = 2000;
  const loanRepayment = 1000;
  const otherDeductions = 500;
  const insurancePremium = 1200;
  const advanceSalaryRecovery = 1500;

  const totalDeductions = pf + professionalTax + incomeTax + loanRepayment + otherDeductions + insurancePremium + advanceSalaryRecovery;

  const netPay = totalEarnings - totalDeductions;

  return (
    <div ref={ref} className="bg-white p-8 max-w-4xl w-full mx-auto text-sm text-black border border-gray-300">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold uppercase">Payslip for the month of {month} - {year}</h2>
        <p className="text-gray-500 text-sm">Generated on: {new Date().toLocaleDateString()}</p>
      </div>

      {/* Employee Info */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p><strong>Employee Name:</strong> Anuj Sharma</p>
          <p><strong>Employee ID:</strong> EMP001</p>
          <p><strong>Designation:</strong> Web Developer</p>
        </div>
        <div>
          <p><strong>Department:</strong> Web Development</p>
          <p><strong>Payment Mode:</strong> Bank Transfer</p>
          <p><strong>PAN Number:</strong> XXXX1234X</p>
        </div>
      </div>

      {/* Attendance */}
      <div className="mb-6 border border-gray-200 p-4 rounded-md">
        <h3 className="font-semibold text-lg mb-2">Attendance Details</h3>
        <div className="grid grid-cols-4 gap-4">
          <p><strong>Total Days:</strong> 31</p>
          <p><strong>Days Worked:</strong> 26</p>
          <p><strong>Leaves:</strong> 2 (CL), 1 (SL)</p>
          <p><strong>Paid Days:</strong> 29</p>
        </div>
      </div>

      {/* Salary Table */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b pb-1">Earnings</h3>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 border-b pb-1">Deductions</h3>
        </div>

        {/* Earnings Section */}
        <div className="space-y-2">
          <div className="flex justify-between"><span>Basic Salary</span><span>₹{basicSalary.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>House Rent Allowance (HRA)</span><span>₹{hra.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Special Allowance</span><span>₹{specialAllowance.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Conveyance Allowance</span><span>₹{conveyanceAllowance.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Medical Allowance</span><span>₹{medicalAllowance.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Reimbursements</span><span>₹{reimbursements.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Flexi Benefits</span><span>₹{flexiBenefits.toLocaleString()}</span></div>
          <div className="flex justify-between font-semibold border-t pt-2"><span>Total Earnings</span><span>₹{totalEarnings.toLocaleString()}</span></div>
        </div>

        {/* Deductions Section */}
        <div className="space-y-2 text-red-700">
          <div className="flex justify-between"><span>Provident Fund (PF)</span><span>₹{pf.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Professional Tax (PT)</span><span>₹{professionalTax.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Income Tax (TDS)</span><span>₹{incomeTax.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Loan Repayment</span><span>₹{loanRepayment.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Other Deductions</span><span>₹{otherDeductions.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Insurance Premium</span><span>₹{insurancePremium.toLocaleString()}</span></div>
          <div className="flex justify-between"><span>Advance Salary Recovery</span><span>₹{advanceSalaryRecovery.toLocaleString()}</span></div>
          <div className="flex justify-between font-semibold text-black border-t pt-2"><span>Total Deductions</span><span>₹{totalDeductions.toLocaleString()}</span></div>
        </div>
      </div>

      {/* Summary */}
      <div className="text-right border-t pt-4">
        <p className="text-lg font-bold text-green-700">Net Payable : ₹{netPay.toLocaleString()}</p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-xs text-gray-500 text-center">
        <p>This is a computer-generated payslip and does not require a signature.</p>
      </div>
    </div>
  );
});

export default function SalaryBreakdown() {
  const printRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Payslip_March_2025',
  });

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex flex-col items-center">
      <SalaryPrint ref={printRef} />
      <button
        onClick={handlePrint}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md shadow-md"
      >
        Download PDF
      </button>
    </div>
  );
}
