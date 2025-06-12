import React from 'react';
import { TiDelete } from 'react-icons/ti';

export default function SaleryDetail({ setSalery, salery }) {
    return (
        <div className={`p-6 bg-[rgba(0,0,0,0.9)] min-h-screen fixed inset-0 overflow-y-auto z-50 ${salery == false ? "hidden" : "flex"}`}>
            <div className='w-full'>
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6">
                    <div className='flex items-center justify-between'><h2 className="text-2xl font-bold text-gray-800">Salary Slip</h2><span onClick={() => setSalery(false)} className='cursor-pointer text-[30px]'><TiDelete /></span></div>
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
