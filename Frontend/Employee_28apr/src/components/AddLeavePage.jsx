import React, { useState } from 'react';

export default function AddLeavePage() {
    const [open, setOpen] = useState("Active");
    const [open1, setOpen1] = useState("InActive");
    const [leaveType, setLeaveType] = useState("");
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [showPopUp, setShowPopUp] = useState(false);

    const handleLeaveSubmit = () => {
        // Calculate the number of days between the from and to dates
        const from = new Date(fromDate);
        const to = new Date(toDate);
        const dayDifference = (to - from) / (1000 * 3600 * 24);

        if (leaveType === "Sick Leave" && dayDifference === 3) {
            setShowPopUp(true); // Show the pop-up for Sick Leave of 3 days
        } else {
            // Submit the form (can add more logic here)
            alert("Leave applied successfully!");
        }
    };

    return (
        <div className='w-full h-full p-2 lg:p-4 space-y-6'>
            {/* 🟦 Apply Leave Section */}
            <div className="flex w-full justify-center">
                <div className="bg-white p-6 rounded-lg lg:w-[900px] w-full">
                    <h2 className="text-xl font-semibold pb-4">Apply For Leave</h2>
                    <div className="space-y-3">

                        <label className="block text-sm font-medium">Leave Type</label>
                        <select
                            className="w-full border outline-none border-gray-200 p-2 rounded"
                            value={leaveType}
                            onChange={(e) => setLeaveType(e.target.value)}
                        >
                            <option>Select</option>
                            <option>Sick Leave</option>
                            <option>Casual Leave</option>
                            <option>Earned Leave</option>
                            <option>Maternity Leave</option>
                            <option>Paternity Leave</option>
                            <option>Bereavement Leave</option>
                        </select>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-sm font-medium">From</label>
                                <input
                                    type="date"
                                    className="w-full outline-none border-gray-200 border p-2 rounded"
                                    value={fromDate}
                                    onChange={(e) => setFromDate(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium">To</label>
                                <input
                                    type="date"
                                    className="w-full border outline-none border-gray-200 p-2 rounded"
                                    value={toDate}
                                    onChange={(e) => setToDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <label className="block text-sm font-medium">Reason</label>
                        <textarea className="w-full border p-2 rounded h-20 outline-none border-gray-200" placeholder="Enter reason"></textarea>

                        <label className="block text-sm font-medium">Upload File (optional)</label>
                        <input type="file" className="w-full border p-2 rounded outline-none border-gray-200" />

                        <div className="mt-4 flex justify-end gap-3">
                            <button className="bg-gray-400 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-500">
                                Cancel
                            </button>
                            <button
                                className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                onClick={handleLeaveSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* 🟨 Pop-up for Document Upload (for Sick Leave of 3 days) */}
            {showPopUp && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-[400px]">
                        <h3 className="text-lg font-semibold">Document Upload Required</h3>
                        <p className="text-sm py-2">Since you are applying for Sick Leave for 3 days, please upload the necessary document.</p>
                        <input type="file" className="w-full border p-2 rounded outline-none border-gray-200" />
                        <div className="mt-4 flex justify-end gap-3">
                            <button
                                className="bg-gray-400 text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-500"
                                onClick={() => setShowPopUp(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-blue-600 cursor-pointer text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                            >
                                Submit Document
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* 🟩 Leave History Section */}
            <div className="flex justify-center items-center w-full">
                <div className="w-full lg:w-[900px] h-full bg-white rounded p-3 lg:p-6">
                    <h2 className="text-xl font-semibold pb-4">Leave History</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full overflow-auto">
                            <thead>
                                <tr className="text-[12px] sm:text-[16px]">
                                    <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Type</th>
                                    <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">From</th>
                                    <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">To</th>
                                    <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Days</th>
                                    <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Status</th>
                                    <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Reason</th>
                                </tr>
                            </thead>
                            <tbody className="text-center text-[12px] sm:text-[16px]">
                                <tr>
                                    <td className="border px-4 py-2">Sick</td>
                                    <td className="border px-4 py-2">Apr 3</td>
                                    <td className="border px-4 py-2">Apr 5</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2 text-green-600">Approved</td>
                                    <td className="border px-4 py-2">Fever</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Casual</td>
                                    <td className="border px-4 py-2">Mar 12</td>
                                    <td className="border px-4 py-2">Mar 13</td>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2 text-yellow-600">Pending</td>
                                    <td className="border px-4 py-2">Personal Work</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Earned</td>
                                    <td className="border px-4 py-2">Feb 20</td>
                                    <td className="border px-4 py-2">Feb 25</td>
                                    <td className="border px-4 py-2">6</td>
                                    <td className="border px-4 py-2 text-red-600">Rejected</td>
                                    <td className="border px-4 py-2">Vacation</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">Maternity</td>
                                    <td className="border px-4 py-2">Jan 5</td>
                                    <td className="border px-4 py-2">Apr 5</td>
                                    <td className="border px-4 py-2">90</td>
                                    <td className="border px-4 py-2 text-green-600">Approved</td>
                                    <td className="border px-4 py-2">Maternity Leave</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* 🟨 Leave Balance Section */}
            <div className="flex justify-center items-center w-full">
                <div className="w-full lg:w-[900px] h-full bg-white rounded p-3 lg:p-6 space-y-3">
                    <h2 className="text-xl font-semibold">Leave Balance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <div className="bg-blue-100 p-4 rounded shadow">Casual Leave: <strong>6/12</strong> used</div>
                        <div className="bg-green-100 p-4 rounded shadow">Sick Leave: <strong>2/10</strong> used</div>
                        <div className="bg-yellow-100 p-4 rounded shadow">Earned Leave: <strong>4/15</strong> used</div>
                        <div className="bg-pink-100 p-4 rounded shadow">Maternity Leave: <strong>30/90</strong> used</div>
                        <div className="bg-purple-100 p-4 rounded shadow">Paternity Leave: <strong>5/10</strong> used</div>
                        <div className="bg-red-100 p-4 rounded shadow">Bereavement Leave: <strong>2/5</strong> used</div>
                    </div>
                </div>
            </div>

        </div>
    );
}





    /*Leave Type	File Upload Needed?	Why?
    Sick Leave	✅ Yes	Medical certificate might be required.
    Casual Leave	❌ No	Generally for personal errands; no proof needed.
    Earned Leave	❌ No	Usually planned in advance; no proof needed.
    Maternity Leave	✅ Yes	Supporting documents (medical report, pregnancy proof, etc.) might be asked.
    Paternity Leave	✅ Optional	Sometimes documentation is required, depending on company policy.
    Bereavement Leave
    
    💼 Common Practices Across Companies:

Leave Type	Days Allowed Without Document	Document Needed After
Sick Leave	1–2 days	After 2 or 3 days
Maternity	Always required	Right from application
Paternity	Sometimes optional	After 3–5 days, if at all
Bereavement	Sometimes optional	Usually after 2–3 days




✅ Example Logic (Sick Leave):
If someone applies for:

1 or 2 days sick leave → No file upload required.

3 or more days → File upload mandatory.


    
    
    */