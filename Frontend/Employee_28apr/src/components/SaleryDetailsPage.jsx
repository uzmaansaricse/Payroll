import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { Link } from 'react-router';

export default function SaleryDetailsPage() {
    return (
        <div className={`p-2 bg-gray-50 my-3`}>
            <div className='w-full h-screen'>
                <div className="w-full mx-auto bg-white shadow-lg h-full rounded-2xl p-6 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800">Salary Slip</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Employee Name:</span>
                            <span className="font-medium">Anuj Saini</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Basic Salary:</span>
                            <span className="font-medium">$4000</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Deductions:</span>
                            <span className="font-medium">$200</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Net Salary:</span>
                            <span className="font-semibold text-green-500">$3800</span>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800 mt-8">Reimbursement Status</h2>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Reimbursement Type:</span>
                            <span className="font-medium">Travel</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Amount:</span>
                            <span className="font-medium">$300</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-600">Status:</span>
                            <span className="font-semibold text-blue-500">Pending</span>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-orange-500 text-white py-2 rounded-xl shadow-md hover:bg-orange-600">
                        Download Salary Slip
                    </button>
                </div>
            </div>
        </div>
    );
};

