import React from 'react'
import { Link } from 'react-router'

export default function RemembursementTabPage() {
    return (
        <div className="p-2 bg-gray-100 min-h-screen flex justify-center">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full lg:w-[900px]">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">Reimbursement Type</h2>

                <div className="overflow-x-auto">
                    <table className="w-full overflow-auto">
                        <thead>
                            <tr>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Reimbursement</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2 whitespace-nowrap">Claim Amount</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Approved</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Status</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2 whitespace-nowrap">Approved Date</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2 whitespace-nowrap">View Bill</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Anuj</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center">Baki</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Amount</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center"><button className="bg-blue-600 hover:bg-blue-800 cursor-pointer md:px-3 px-2 py-1 rounded font-bold text-white"><Link to={"/remembursementbillpage"}>Click</Link></button></td>
                            </tr>
                            <tr>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Prince</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center">Baki</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Amount</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center"><button className="bg-blue-600 hover:bg-blue-800 cursor-pointer md:px-3 px-2 py-1 rounded font-bold text-white"><Link to={"/remembursementbillpage"}>Click</Link></button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
