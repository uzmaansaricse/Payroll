import React from 'react'
import { Link } from 'react-router'

export default function FlexiTab() {
  return (
    <div className="lg:p-4 p-1 bg-gray-100 min-h-screen">

    <div className="bg-white p-4 rounded shadow w-full lg:w-[800px] mx-auto">
        <h1 className="text-2xl font-semibold mb-4">Flexi Type</h1>

        <div className="overflow-x-auto">
            <table className="w-full overflow-auto">
                <thead>
                    <tr>
                        <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2 whitespace-nowrap">Flexy type</th>
                        <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Claim</th>
                        <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Approve</th>
                        <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Status</th>
                        <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2 whitespace-nowrap">Approvel</th>
                        <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">type</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center">Baki</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center"><button className="bg-blue-600 hover:bg-blue-800 cursor-pointer md:px-3 px-2 py-1 rounded font-bold text-white"><Link to={"/flexibill"}>Bill</Link></button></td>
                    </tr> 
                    <tr>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">type</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center">Baki</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Baki</td>
                        <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center"><button className="bg-blue-600 hover:bg-blue-800 cursor-pointer md:px-3 px-2 py-1 rounded font-bold text-white"><Link to={"/flexibill"}>Bill</Link></button></td>
                    </tr> 
                </tbody>
            </table>
        </div>
    </div>
</div>
  )
}
