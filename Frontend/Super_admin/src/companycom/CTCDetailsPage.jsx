import React from 'react'
import { Link } from 'react-router'

export default function CTCDetailsPage() {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center">
                <h1 className="md:text-2xl font-bold mb-4"> CTC Structure Details</h1>
                <span><button className='bg-gray-300 md:px-3 px-1 py-1 rounded hover:bg-gray-200 cursor-pointer mb-4 whitespace-nowrap'><Link to={"/ctcstracture"}>View Page</Link></button></span>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-lg w-full lg:w-[800px] mx-auto">
                <div className="flex justify-between">
                    <h1 className=" font-semibold mb-4">Employ Anuj</h1>
                    <span>
                        <select className="border p-1 outline-none rounded mb-2 border-gray-400">
                            <option> Export</option>
                            <option>PDF Export</option>
                            <option>XL Export</option>
                        </select>
                    </span>
                </div>
                <div className="mb-2 flex justify-between">
                    <span>Basic Salary:</span>
                    <span>₹ 30000</span>
                </div>
                <div className="mb-2 flex justify-between">
                    <span>HRA:</span>
                    <span>₹ 12000</span>
                </div>
                <div className="mb-2 flex justify-between">
                    <span>Transport Allowance:</span>
                    <span>₹ 3000</span>
                </div>
                <div className="mb-2 flex justify-between">
                    <span>Medical Allowance:</span>
                    <span>₹ 2000</span>
                </div>
                <div className="mb-2 flex justify-between">
                    <span>Bonus:</span>
                    <span>₹ 10000</span>
                </div>
                <div className="mb-2 flex justify-between">
                    <span>Employer PF Contribution:</span>
                    <span>₹ 2500</span>
                </div>
                <div className="my-2 border-b border-gray-200" ></div>
                <div className="mb-2 flex justify-between font-semibold">
                    <span>Gross Salary:</span>
                    <span>₹ {30000 + 12000 + 3000 + 2000}</span>
                </div>
                <div className="mb-2 flex justify-between">
                    <span>PF Deduction:</span>
                    <span>₹ 2500</span>
                </div>
                <div className="mb-2 flex justify-between">
                    <span>TDS Deduction:</span>
                    <span>₹ 4000</span>
                </div>
                <div className="my-2 border-b border-gray-200" ></div>
                <div className="mb-2 flex justify-between font-bold text-lg">
                    <span>Net Salary:</span>
                    <span>₹{30000 + 12000 + 3000 + 2000 - (2500 + 4000)}</span>
                </div>
                <div className="my-2 border-b border-gray-200" ></div>
                <div className="mb-2 flex justify-between font-bold text-lg text-green-600">
                    <span>Total CTC:</span>
                    <span>₹{30000 + 12000 + 3000 + 2000 + 10000 + 2500}</span>
                </div>
            </div>
        </div>
    )
}
