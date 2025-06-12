import React from 'react'
import { Link } from 'react-router'

export default function TaxComputationAllinpage() {
    return (
        <div className="p-2 bg-gray-100 min-h-screen flex justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full lg:w-[800px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Tax Computation</h2>
                    <span><button className='bg-gray-300 md:px-3 px-1 py-1 rounded hover:bg-gray-200 cursor-pointer mb-4 whitespace-nowrap'><Link to={"/taxcomputation"}>View Page</Link></button></span>
                </div>

                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-medium text-green-600 mb-2">Cross Income</h3>
                        <span>
                            <select className="border p-1 outline-none rounded mb-2 border-gray-400">
                                <option> Export</option>
                                <option>PDF Export</option>
                                <option>XL Export</option>
                            </select>
                        </span>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex justify-between p-3 bg-green-50 rounded-lg">
                            <span>Basic Salary</span>
                            <span className="font-semibold">रु 50,000</span>
                        </li>
                        <li className="flex justify-between p-3 bg-green-50 rounded-lg">
                            <span>Rental Income</span>
                            <span className="font-semibold">रु 20,000</span>
                        </li>
                        <li className="flex justify-between p-3 bg-green-50 rounded-lg">
                            <span>Capital Gains</span>
                            <span className="font-semibold">रु 15,000</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-medium text-red-600 mb-2">Deductions</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between p-3 bg-red-50 rounded-lg">
                            <span>80C (Investments)</span>
                            <span className="font-semibold">रु 10,000</span>
                        </li>
                        <li className="flex justify-between p-3 bg-red-50 rounded-lg">
                            <span>80D (Health Insurance)</span>
                            <span className="font-semibold">रु 5,000</span>
                        </li>
                        <li className="flex justify-between p-3 bg-red-50 rounded-lg">
                            <span>Home Loan Interest</span>
                            <span className="font-semibold">रु 8,000</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-6 border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Taxable Income</span>
                        <span className="text-blue-600">रु 62,000</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mt-2">
                        <span>Tax Rate</span>
                        <span className="text-blue-600">20%</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mt-2">
                        <span>Tax Payable</span>
                        <span className="text-red-600">रु 12,400</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
