import React from 'react'
import { Link } from 'react-router'

export default function FlexiBill2() {
    return (
        <div className="lg:p-4 p-2 bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-center">Bill Receipt</h1>

                <div className="mb-2">
                    <p className="text-gray-700 font-medium">Name: <span className="font-semibold">Anuj</span></p>
                    <p className="text-gray-700 font-medium">Date: <span className="font-semibold">26 March 2025</span></p>
                </div>

                <div className="border-t border-b border-gray-200 my-4 py-2">
                    <div className="flex justify-between py-1">
                        <span>Flexy type</span>
                        <span>Baki</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span>Claim</span>
                        <span>Baki</span>
                    </div>
                    <div className="flex justify-between py-1">
                        <span>Approve</span>
                        <span>Baki</span>
                    </div>
                </div>

                <div className="flex justify-between font-bold text-lg">
                    <span>Status</span>
                    <span>Baki</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                    <span>Approvel</span>
                    <span>Baki</span>
                </div>

                <div className="flex gap-3 items-center">
                    <button className=" bg-blue-600 text-white cursor-pointer p-2 rounded-lg mt-4 hover:bg-blue-800">Download Receipt</button>
                    <button className=" bg-gray-600 text-white cursor-pointer p-2 rounded-lg mt-4 hover:bg-gray-800"><Link to={"/flexi"}>Containu</Link></button>
                </div>
            </div>
        </div>
    )
}
