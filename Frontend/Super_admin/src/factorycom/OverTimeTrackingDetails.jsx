import React, { useState } from 'react'
import { Link } from 'react-router'

export default function OverTimeTrackingDetails2() {
    const [open, setOpen] = useState("Active")
    return (
        <div className='p-2 w-full lg:w-[900px] mx-auto min-h-screen'>
            <h1 className="text-2xl lg:text-3xl font-bold mb-4">Add Overtime Tracking</h1>
            <div className="bg-white p-4  rounded">
                <div className="flex justify-between items-center">
                    <h2 className="md:text-2xl md:font-semibold font-bold mb-3">Add Employee Overtime</h2>
                    <span><button className='bg-gray-300 px-4  py-2 rounded hover:bg-gray-200 cursor-pointer mb-4 whitespace-nowrap'><Link to={"/overtimetracking"}>View Page</Link></button></span>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mb-4">
                    <div>
                        <label className="block font-medium">Employee Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Date</label>
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
                        />
                    </div>

                    <div>
                        <label className="block font-medium">Total Working</label>
                        <input
                            type="number"
                            placeholder="Enter hours"
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Overtime Hours</label>
                        <input
                            type="number"
                            placeholder="Enter hours"
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">OT Pay</label>
                        <input
                            type="number"
                            placeholder="Enter hours"
                            className="w-full p-2 border border-gray-200 rounded-lg outline-none"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Status</label>
                        <span onClick={() => setOpen("InActive")}> <button className={`${open == "Active" ? "bg-blue-500" : "hidden"} p-2 text-white cursor-pointer rounded-lg outline-none w-full md:w-[100px]`}>Active</button></span>
                        <span onClick={() => setOpen("Active")}><button className={`${open == "InActive" ? "bg-red-500" : "hidden"} p-2 text-white cursor-pointer rounded-lg outline-none w-full md:w-[100px]`}>InActive</button></span>
                    </div>

                </div>


                <button className="w-full md:w-[100px] px-4 cursor-pointer bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Submit
                </button>

            </div>
        </div>
    )
}
