import React from 'react'
import { Link } from 'react-router'

export default function AttensenceTab() {
    return (
        <div className="lg:p-4 p-2 bg-gray-50 min-h-screen">
            <div className="flex justify-center items-center mb-4">
                <div className="lg:w-[900px] w-full flex items-center justify-between bg-white p-2 rounded shadow">
                    <h1 className="font-bold text-3xl text-gray-800">Employee ID</h1>
                    <Link to="/attendence">
                        <button className="bg-gray-300 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-200 transition-all whitespace-nowrap">View Page</button>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="bg-white rounded p-2 lg:p-4 shadow lg:w-[900px] w-full space-y-6">
                   
                    <div className="flex justify-end">
                        <select className="border border-gray-300 rounded px-2 py-1 cursor-pointer outline-none">
                            <option>Export</option>
                            <option>PDF Export</option>
                            <option>XL Export</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl text-gray-700">Employee ID</h1>
                        <h2 className="font-bold text-lg text-gray-900">8765</h2>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl text-gray-700">Department</h1>
                        <h2 className="font-bold text-lg text-gray-900">IT</h2>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl text-gray-700">Position</h1>
                        <h2 className="font-bold text-lg text-gray-900">Web Developer</h2>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl text-gray-700">Date</h1>
                        <h2 className="font-bold text-lg text-gray-900">10:10:2024</h2>
                    </div>

                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl text-gray-700">Check In</h1>
                        <h2 className="font-bold text-lg text-gray-900">Other</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl text-gray-700">Check Out</h1>
                        <h2 className="font-bold text-lg text-gray-900">Other</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl text-gray-700">Status</h1>
                        <h2 className="font-bold text-lg text-gray-900">Active</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold text-xl text-gray-700">Late / Absent On Leave</h1>
                        <h2 className="font-bold text-lg text-gray-900">Other</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
