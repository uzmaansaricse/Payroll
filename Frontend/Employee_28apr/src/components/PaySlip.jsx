import React, { useState } from 'react';
import SalaryBreakdown from './March';

export default function PaySlip() {
    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [showPayslip, setShowPayslip] = useState(false);

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const years = ['2023', '2024', '2025'];

    const handleView = () => {
        if (selectedMonth && selectedYear) {
            setShowPayslip(true);
        }
    };

    return (
        <div className="min-h-screen my-5 bg-gray-50 p-6">
            <h2 className="text-2xl font-semibold mb-4">View Payslip</h2>

            {/* Month & Year Dropdowns */}
            <div className="flex gap-4 mb-6">
                <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                    className="border p-2 rounded-md"
                >
                    <option value="">Select Month</option>
                    {months.map((month) => (
                        <option key={month} value={month}>{month}</option>
                    ))}
                </select>

                <select
                    value={selectedYear}
                    onChange={(e) => setSelectedYear(e.target.value)}
                    className="border p-2 rounded-md"
                >
                    <option value="">Select Year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>

                <button
                    onClick={handleView}
                    className="bg-blue-600 text-white cursor-pointer px-4 py-2 rounded-md"
                >
                    View
                </button>
            </div>

            {/* Payslip Display */}
            {showPayslip && (
                <SalaryBreakdown month={selectedMonth} year={selectedYear} />
            )}
        </div>
    );
}
/*Bilkul sahi socha! 👏
Agar employee ne July me join kiya, to usse pehle ke months (January to June) ka payslip dikhana na hi logical hai na hi user-friendly — kyunki unka employment tab tha hi nahi.

✅ Ideal Behavior:
Dropdown me sirf joining month se lekar current month tak hi options honi chahiye.*/