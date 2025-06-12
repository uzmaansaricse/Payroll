import React, { useState } from 'react';

const Investments = () => {
    const [investments, setInvestments] = useState([
        {
            employeeName: 'John Doe',
            employeeId: 'E001',
            investmentType: 'PPF',
            investmentAmount: 50000,
            investmentStatus: 'Pending',
            proofStatus: 'Pending Verification',
            proofUrl: '/proofs/john_ppf.pdf',
        },
        {
            employeeName: 'Jane Smith',
            employeeId: 'E002',
            investmentType: 'EPF',
            investmentAmount: 20000,
            investmentStatus: 'Approved',
            proofStatus: 'Verified',
            proofUrl: '/proofs/jane_epf.pdf',
        },
    ]);

    const [newInvestment, setNewInvestment] = useState({
        employeeName: '',
        investmentType: '',
        investmentAmount: '',
        proofUrl: '',
    });

    const handleApproval = (investmentId) => {
        const updatedInvestments = investments.map((investment) =>
            investment.employeeId === investmentId
                ? { ...investment, investmentStatus: 'Approved' }
                : investment
        );
        setInvestments(updatedInvestments);
        alert('Investment approved');
    };

    const handleRejection = (investmentId) => {
        const updatedInvestments = investments.map((investment) =>
            investment.employeeId === investmentId
                ? { ...investment, investmentStatus: 'Rejected' }
                : investment
        );
        setInvestments(updatedInvestments);
        alert('Investment rejected');
    };

    const downloadProof = (proofUrl) => {
        window.open(proofUrl, '_blank');
    };

    const handleSubmitInvestment = (e) => {
        e.preventDefault();
        const newInvestmentData = {
            ...newInvestment,
            investmentStatus: 'Pending',
            proofStatus: 'Pending Verification',
            employeeId: `E00${investments.length + 1}`,
        };
        setInvestments([...investments, newInvestmentData]);
        setNewInvestment({
            employeeName: '',
            investmentType: '',
            investmentAmount: '',
            proofUrl: '',
        });
        alert('Investment submitted for approval');
    };

    return (
        <div className="p-6 min-h-screen bg-gray-100">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-blue-700">Employee Investment Declarations</h2>

                {/* Form */} 

                {/* Table */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">Investment List</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border rounded">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 border">Employee Name</th>
                                    <th className="px-4 py-2 border">Investment Type</th>
                                    <th className="px-4 py-2 border">Amount</th>
                                    <th className="px-4 py-2 border">Status</th>
                                    <th className="px-4 py-2 border">Proof Status</th>
                                    <th className="px-4 py-2 border">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {investments.map((inv) => (
                                    <tr key={inv.employeeId} className="text-center">
                                        <td className="px-4 py-2 border">{inv.employeeName}</td>
                                        <td className="px-4 py-2 border">{inv.investmentType}</td>
                                        <td className="px-4 py-2 border">₹{inv.investmentAmount}</td>
                                        <td className="px-4 py-2 border">{inv.investmentStatus}</td>
                                        <td className="px-4 py-2 border">{inv.proofStatus}</td>
                                        <td className="px-4 py-2 border space-x-2">
                                            {inv.investmentStatus === 'Pending' && (
                                                <>
                                                    <button
                                                        onClick={() => handleApproval(inv.employeeId)}
                                                        className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handleRejection(inv.employeeId)}
                                                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                                                    >
                                                        Reject
                                                    </button>
                                                </>
                                            )}
                                            <button
                                                onClick={() => downloadProof(inv.proofUrl)}
                                                className="bg-indigo-500 hover:bg-indigo-600 text-white px-2 py-1 rounded"
                                            >
                                                Download Proof
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {investments.length === 0 && (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4">
                                            No investments found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Investments;
