import React from "react";
export default function AddLeaveRequest({ addrequest, setAddRequest }) {

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-start overflow-y-auto bg-[rgba(0,0,0,0.3)] p-4 ${addrequest == true ? "flex" : "hidden"}`}>
            <div className="w-screen h-screen flex items-center justify-center">
                <div className="bg-white p-6 rounded-lg w-[500px] shadow-lg">

                    <div className="flex justify-between items-center border-gray-200 border-b pb-2">
                        <h2 className="text-xl font-semibold">Add Leave Approv</h2>
                        <button onClick={() => setAddRequest(false)} className="text-gray-500 cursor-pointer hover:text-red-500 text-xl">
                            &times;
                        </button>
                    </div>

                    <div className="mt-4 space-y-3">
                        <label className="block text-sm font-medium">Employee Name</label>
                        <select className="w-full border outline-none border-gray-200 p-2 rounded">
                            <option>Select</option>
                            <option>Employee 1</option>
                            <option>Employee 2</option>
                        </select>

                        <label className="block text-sm font-medium">Leave Type</label>
                        <select className="w-full border outline-none border-gray-200 p-2 rounded">
                            <option>Select</option>
                            <option>Sick Leave</option>
                            <option>Casual Leave</option>
                        </select>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium">From</label>
                                <input type="date" className="w-full outline-none border-gray-200 border p-2 rounded" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">To</label>
                                <input type="date" className="w-full border outline-none border-gray-200 p-2 rounded" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium">No of Days</label>
                                <input type="number" disabled className="w-full border outline-none border-gray-200 p-2 rounded" placeholder="Enter days" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Remaining Days</label>
                                <input type="number" disabled className="w-full border outline-none border-gray-200 p-2 rounded" placeholder="Remaining" />
                            </div>
                        </div>

                        <label className="block text-sm font-medium">Reason</label>
                        <textarea className="w-full border p-2 rounded h-20 outline-none border-gray-200" placeholder="Enter reason"></textarea>
                    </div>

                    <div className="mt-4 flex justify-end gap-3">
                        <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
                            Cancel
                        </button>
                        <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700">
                            Add Leaves
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};