import React from 'react';

// Sample data - replace with data from your backend
const salaryHistory = [
    { month: 'January', year: '2025', netPay: 50000, status: 'Paid' },
    { month: 'February', year: '2025', netPay: 51000, status: 'Paid' },
    { month: 'March', year: '2025', netPay: 52000, status: 'Pending' },
];

const SalaryHistory = () => {
    return (
        <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow h-screen">
            <h2 className="text-xl font-semibold mb-4">Salary History</h2>

            <div className="overflow-x-auto">
                <table className="min-w-full border divide-y divide-gray-200">
                    <thead className="bg-gray-100 text-left">
                        <tr>
                            <th className="px-4 py-2 text-sm font-medium text-gray-600">Month</th>
                            <th className="px-4 py-2 text-sm font-medium text-gray-600">Year</th>
                            <th className="px-4 py-2 text-sm font-medium text-gray-600">Net Pay</th>
                            <th className="px-4 py-2 text-sm font-medium text-gray-600">Status</th>
                            <th className="px-4 py-2 text-sm font-medium text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {salaryHistory.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2">{item.month}</td>
                                <td className="px-4 py-2">{item.year}</td>
                                <td className="px-4 py-2 font-medium text-green-600">₹{item.netPay.toLocaleString()}</td>
                                <td className="px-4 py-2">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${item.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="px-4 py-2">
                                    <button
                                        className="text-blue-500 hover:underline text-sm"
                                        onClick={() => alert(`Download payslip for ${item.month} ${item.year}`)}
                                    >
                                        View / Download
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SalaryHistory;
