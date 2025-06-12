import React from "react";
export default function AttendanceModal({ setAct }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-auto bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] overflow-hidden">
                <div className="flex justify-between items-center border-b pb-3">
                    <h2 className="text-xl font-semibold">Attendance</h2>
                    <button onClick={() => setAct(false)} className="text-gray-500 cursor-pointer hover:text-gray-800">&times;</button>
                </div>
                <div className="mt-4">
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <p><strong>Date:</strong> 15/05/2025</p>
                        <p><strong>Status:</strong> <span className="text-green-500">Present</span></p>
                        <p><strong>Punch in at:</strong> 09:00 AM</p>
                        <p><strong>Punch out at:</strong> 06:45 PM</p>
                    </div>
                </div>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <div className="grid grid-cols-2 gap-4 text-gray-900">
                        <p><span className="text-gray-500">Total Working Hours:</span> <strong>12h 36m</strong></p>
                        <p><span className="text-gray-500">Productive Hours:</span> <strong>08h 36m</strong></p>
                        <p><span className="text-gray-500">Break Hours:</span> <strong>22m 15s</strong></p>
                        <p><span className="text-gray-500">Overtime:</span> <strong>02h 15m</strong></p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex space-x-1">
                        <div className="bg-green-500 h-2 flex-1 rounded"></div>
                        <div className="bg-yellow-500 h-2 w-6 rounded"></div>
                        <div className="bg-green-500 h-2 flex-1 rounded"></div>
                        <div className="bg-blue-500 h-2 w-8 rounded"></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-600 mt-2">
                        <span>06:00</span> <span>07:00</span> <span>08:00</span> <span>09:00</span> <span>10:00</span> <span>11:00</span> <span>12:00</span> <span>01:00</span> <span>02:00</span><span>03:00</span>
                    </div>
                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Close</button>
                    <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">Report</button>
                </div>
            </div>
        </div>
    );
};