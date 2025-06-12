import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { Link } from 'react-router'

export default function Edit2() {
    return (
        <div className="lg:p-4 p-1 bg-gray-100 min-h-screen">

            <div className="bg-white p-4 rounded shadow w-full lg:w-[900px] mx-auto">
                <h1 className="text-2xl font-semibold mb-4">Edit Employee Details</h1>

                <div className="overflow-x-auto">
                    <table className="w-full overflow-auto">
                        <thead>
                            <tr>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Name</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Email</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">ID</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Role</th>
                                <th className="border border-gray-200 text-[12px] md:text-[16px] p-1 md:p-2">Edit </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Anuj</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">anujsaini@gmail.com</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center">01</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center whitespace-nowrap">Web Developer</td>
                                <td className="border border-gray-200 text-[10px] md:text-[16px] p-1 md:p-2 text-center"><button className=" cursor-pointer md:px-3 px-2 py-1 rounded font-bold  "><Link to={"/factory/editpage"}><FaEdit /></Link></button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
