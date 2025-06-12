import React, { useState } from 'react'

export default function UpLoadDocument() {
    const [open, setOpen] = useState("Active")
    const [open1, setOpen1] = useState("InActive")
    return (
        <div className='w-full h-screen p-2 lg:p-4'>
            <div className='my-3'>
                <div className={`flex justify-center items-center w-full`}>
                    <div className="w-full lg:w-[920px]  h-full bg-white shadow-md rounded p-3 lg:p-6">
                        <div className="flex justify-between items-center"><h1 className="text-2xl font-bold text-gray-800 mb-4">Upload Documents</h1></div>
                        <div className="overflow-x-auto">
                            <table className="w-full overflow-auto">
                                <thead>
                                    <tr className="text-[12px] sm:text-[16px]">
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Document ID</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Name</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Document Type</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Upload File</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Upload Date</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Verification Status</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[12px] sm:text-[16px]">
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">24-10-2024</td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap flex justify-center items-center">
                                            <button onClick={() => setOpen("InActive")} className={`p-1 rounded cursor-pointer ${open == "Active" ? "bg-blue-600 flex text-white" : "hidden"}`}>Active</button>
                                            <button onClick={() => setOpen("Active")} className={`p-1 rounded cursor-pointer ${open == "InActive" ? "bg-red-600 flex text-white" : "hidden"}`}>InActive</button>
                                        </td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                    </tr>
                                    <tr className="text-[12px] sm:text-[16px]">
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">24-10-2024</td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap flex items-center justify-center">
                                            <button onClick={() => setOpen1("InActive")} className={`p-1 rounded cursor-pointer ${open1 == "Active" ? "bg-blue-600 flex text-white" : "hidden"}`}>Active</button>
                                            <button onClick={() => setOpen1("Active")} className={`p-1 rounded cursor-pointer ${open1 == "InActive" ? "bg-red-600 flex text-white" : "hidden"}`}>InActive</button>
                                        </td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='text-end'><button className='bg-blue-500 hover:bg-blue-600 duration-500 cursor-pointer text-white rounded p-1 my-3 w-full md:w-[100px]'>Download</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
