import React from "react";
import { TiDelete } from "react-icons/ti";
export default function AddLeave({ leave, setLeave }) {
    return (
        <div className={`fixed inset-0 bg-gray-800 z-50 bg-opacity-50 overflow-y-auto  justify-center items-center ${leave == false ? "hidden" : "flex"}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mt-[50px]">
                <div className="flex justify-between items-center"><h2 className="text-2xl font-semibold mb-4">Add Leave</h2><span className="text-[30px] cursor-pointer" onClick={() => setLeave(false)}><TiDelete /></span></div>
                <form className="space-y-4 overflow-hidden">
                    <div>
                        <label className="block mb-1 text-gray-600">Employee Name</label>
                        <select className="w-full p-2 outline-none border border-gray-200 rounded-lg">
                            <option>Select</option>
                            <option>Anthony Lewis</option>
                            <option>Brian Villalobes</option>
                            <option>Harvey Smith</option>
                        </select>
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-600">Leave Type</label>
                        <select className="w-full outline-none p-2 border border-gray-200 rounded-lg">
                            <option>Select</option>
                            <option>Medical Leave</option>
                            <option>Casual Leave</option>
                            <option>Annual Leave</option>
                        </select>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block mb-1 text-gray-600">From</label>
                            <input type="date" className="w-full outline-none p-2 border border-gray-200 rounded-lg" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 text-gray-600">To</label>
                            <input type="date" className="w-full outline-none p-2 border border-gray-200 rounded-lg" />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <label className="block mb-1 text-gray-600">No of Days</label>
                            <input type="number" className="w-full outline-none p-2 border border-gray-200 rounded-lg" />
                        </div>
                        <div className="flex-1">
                            <label className="block mb-1 text-gray-600">Remaining Days</label>
                            <input type="number" className="w-full p-2 border border-gray-200 outline-none rounded-lg" />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-1 text-gray-600">Reason</label>
                        <textarea className="w-full p-2 border rounded-lg outline-none border-gray-200" rows="3"></textarea>
                    </div>
                    <div className="flex justify-end space-x-2">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded-lg">Add Leave</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

