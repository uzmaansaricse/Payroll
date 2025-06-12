import React from 'react'
import { Link } from 'react-router'

export default function PaymentDeducationAllin() {
    return (
        <div className=" bg-gray-100 p-2 min-h-screen w-full flex justify-center">
            <div className='w-full'>
                <div className="flex justify-center w-full">
                    <div className="flex justify-between items-center  w-full lg:w-[900px]">
                        <h2 className="md:text-2xl font-semibold text-[20px] mb-4 text-gray-800 ">Payments & Deductions</h2>
                        <span><button className='bg-gray-300 hover:bg-gray-400 rounded md:px-2 text-[12px] mb-4 md:text-[16px] p-1 md:py-1 cursor-pointer'> <Link to={"/paymentsdeductions"}>View Page</Link></button></span>
                    </div>
                </div>

                <div className="flex justify-center">
                    <div className="bg-white shadow rounded p-4 w-full lg:w-[900px]">
                        <div className="mb-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-medium text-green-600 mb-2 p-1">Payments</h3>
                                <select className='mb-2 outline-none border border-gray-400 p-1 rounded cursor-pointer'>
                                    <option>Export</option>
                                    <option>PDF Export</option>
                                    <option>XL Export</option>
                                </select>
                            </div>
                            <ul className="space-y-2">
                                <li className="flex justify-between p-3 bg-green-50 rounded-lg">
                                    <span>Basic Salary</span>
                                    <span className="font-semibold">रु 30,000</span>
                                </li>
                                <li className="flex justify-between p-3 bg-green-50 rounded-lg">
                                    <span>HRA</span>
                                    <span className="font-semibold">रु 10,000</span>
                                </li>
                                <li className="flex justify-between p-3 bg-green-50 rounded-lg">
                                    <span>Medical Allowance</span>
                                    <span className="font-semibold">र 5,000</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium text-red-600 mb-2">Deductions</h3>
                            <ul className="space-y-2">
                                <li className="flex justify-between p-3 bg-red-50 rounded-lg">
                                    <span>Income Tax</span>
                                    <span className="font-semibold">रु 5,000</span>
                                </li>
                                <li className="flex justify-between p-3 bg-red-50 rounded-lg">
                                    <span>Provident Fund (PF)</span>
                                    <span className="font-semibold">रु 2,000</span>
                                </li>
                                <li className="flex justify-between p-3 bg-red-50 rounded-lg">
                                    <span>Professional Tax</span>
                                    <span className="font-semibold">रु 1,000</span>
                                </li>
                            </ul>
                        </div>

                        <div className="mt-6 border-t border-gray-200 pt-4">
                            <div className="flex justify-between text-lg font-semibold">
                                <span>Net Salary</span>
                                <span className="text-blue-600">रु 37,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
