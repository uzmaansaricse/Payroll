import React from "react";
export default function AddProjectModal({ active, setActive }) {

    return (
        <div className={`fixed top-0 left-0 w-full h-full z-50 flex justify-center items-start overflow-y-auto bg-[rgba(0,0,0,0.3)] p-4 ${active == true ? "flex" : "hidden"}`}>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl  flex items-center justify-center">
                <div className="bg-white p-6 w-full">
                    <div className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <h2><span className="text-xl font-semibold">Add Project</span> <span>Project ID : PRO-0004</span></h2>
                        <button onClick={() => setActive(false)} className="text-gray-500 cursor-pointer hover:text-red-500 text-xl">
                            &times;
                        </button>
                    </div>

                    <div className="mt-4 space-y-3">
                        <label className="block text-sm font-medium">Upload Project Logo</label>
                        <input type="file" className="w-full border border-gray-200 p-2 rounded" />

                        <label className="block text-sm font-medium">Project Name</label>
                        <input type="text" className="w-full border border-gray-200 p-2 rounded" placeholder="Enter project name" />

                        <label className="block text-sm font-medium">Client</label>
                        <select className="w-full border border-gray-200 p-2 rounded">
                            <option>Select</option>
                            <option>Client 1</option>
                            <option>Client 2</option>
                        </select>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium">Start Date</label>
                                <input type="date" className="w-full border outline-none border-gray-200 p-2 rounded" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">End Date</label>
                                <input type="date" className="w-full border outline-none border-gray-200 p-2 rounded" />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium">Priority</label>
                                <select className="w-full border border-gray-200 outline-none p-2 rounded">
                                    <option>Select</option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium">Project Value ($)</label>
                                <input type="number" className="w-full border outline-none border-gray-200 p-2 rounded" placeholder="Enter value" />
                            </div>
                        </div>

                        <label className="block text-sm font-medium">Total Working Hours</label>
                        <input type="text" className="w-full border outline-none border-gray-200 p-2 rounded" placeholder="02:05 AM" />

                        <label className="block text-sm font-medium">Extra Time</label>
                        <input type="text" className="w-full border outline-none border-gray-200 p-2 rounded" placeholder="Enter extra time" />

                        <label className="block text-sm font-medium">Description</label>
                        <textarea className="w-full border border-gray-200 outline-none p-2 rounded h-20" placeholder="Enter project details"></textarea>
                    </div>

                    {/* Modal Footer */}
                    <div className="mt-4 flex justify-between">
                        <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500">
                            Cancel
                        </button>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                            Add Team Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};