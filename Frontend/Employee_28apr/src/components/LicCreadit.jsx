import React from 'react'

export default function LicCredit() {
    return (
        <div className='w-full h-screen p-2 lg:p-4'>
            <div className='my-3'>
                <div className='flex justify-center items-center w-full'>
                    <div className="w-full lg:w-[900px] h-full bg-white shadow-md rounded p-3 lg:p-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">LIC Credit Society, Tax Deductions</h1>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full overflow-auto">
                                <thead>
                                    <tr className="text-[12px] sm:text-[16px]">
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Deduction Type</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Amount</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Applicable Month</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-[12px] sm:text-[16px]">
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">Provident Fund (PF)</td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">₹3,000</td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">March 2025</td>
                                        <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">Employee Contribution</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='text-end'>
                            <button className='bg-blue-500 w-full md:w-[100px] my-3 text-white hover:bg-blue-600 rounded p-1 duration-500 cursor-pointer'>
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
