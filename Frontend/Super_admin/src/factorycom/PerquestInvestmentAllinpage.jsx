import React from 'react'
import { Link } from 'react-router'

export default function PerquestInvestmentAllinpage2() {
    return (
        <div className=" bg-gray-100 p-2 min-h-screen flex justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full lg:w-[800px]">
                <div className="flex justify-between">
                    <h2 className="md:text-2xl text-[20px] font-semibold mb-4 text-gray-800">Perquisites & Investments </h2><span><button  className='bg-gray-300 md:px-3 px-1 py-1 rounded hover:bg-gray-200 cursor-pointer mb-4 whitespace-nowrap'> <Link to={"/perquisitesinvestment"}>View Page</Link></button></span>
                </div>

                <div className="mb-6">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-medium text-purple-600 mb-2">Perquisites</h3>
                        <select className='mb-2 outline-none border p-1 border-gray-400 rounded'>
                            <option>Export</option>
                            <option>PDF Export</option>
                            <option>XL Export</option>
                        </select>
                        </div>
                    <ul className="space-y-2">
                        <li className="flex justify-between p-3 bg-purple-50 rounded-lg">
                            <span>Company Car</span>
                            <span className="font-semibold">Provided</span>
                        </li>
                        <li className="flex justify-between p-3 text-[12px] sm:text-[16px] bg-purple-50 rounded-lg">
                            <span>Accommodation</span>
                            <span className="font-semibold">Company Provided</span>
                        </li>
                        <li className="flex justify-between p-3 bg-purple-50 rounded-lg">
                            <span>Medical Facilities</span>
                            <span className="font-semibold">Covered</span>
                        </li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-xl font-medium text-blue-600 mb-2">Investments</h3>
                    <ul className="space-y-2">
                        <li className="flex justify-between p-3 bg-blue-50 rounded-lg">
                            <span>Provident Fund (PF)</span>
                            <span className="font-semibold">रु 5,000</span>
                        </li>
                        <li className="flex justify-between p-3 bg-blue-50 text-[12px] sm:text-[16px] rounded-lg">
                            <span>Public Provident Fund (PPF)</span>
                            <span className="font-semibold">रु 10,000</span>
                        </li>
                        <li className="flex justify-between p-3 bg-blue-50 rounded-lg">
                            <span>Mutual Funds</span>
                            <span className="font-semibold">रु 8,000</span>
                        </li>
                    </ul>
                </div>



                <div className="mt-6 border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                        <span>Net Salary</span>
                        <span className="text-blue-600">रु 23,000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
