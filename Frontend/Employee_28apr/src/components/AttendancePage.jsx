import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default function AttendancePage() {
    const [open, setOpen] = useState("Inactive");
    const [punchStatus, setPunchStatus] = useState("Punch In");
    const [shift, setShift] = useState("Morning");
    const [currentTime, setCurrentTime] = useState(new Date());
    const [startTime, setStartTime] = useState(null);
    const [workingTime, setWorkingTime] = useState("00:00:00");
    const [attendanceHistory, setAttendanceHistory] = useState([]);

    useEffect(() => {
        generateAttendanceData();
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());

            if (startTime) {
                const diff = new Date(new Date() - new Date(startTime));
                const hrs = String(diff.getUTCHours()).padStart(2, '0');
                const mins = String(diff.getUTCMinutes()).padStart(2, '0');
                const secs = String(diff.getUTCSeconds()).padStart(2, '0');
                setWorkingTime(`${hrs}:${mins}:${secs}`);
            }
        }, 1000);
        return () => clearInterval(timer);
    }, [startTime]);

    const generateAttendanceData = () => {
        const today = new Date();
        const data = [];

        for (let i = 0; i < 30; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() - i);

            const formattedDate = date.toLocaleDateString("en-GB", {
                day: '2-digit',
                month: 'short',
                year: 'numeric'
            });

            const shiftTypes = ["Morning", "Evening", "Night"];
            const selectedShift = shiftTypes[i % 3];
            const shiftTimes = {
                Morning: ["09:00 AM", "05:00 PM"],
                Evening: ["02:00 PM", "10:00 PM"],
                Night: ["10:00 PM", "06:00 AM"]
            };

            const [checkIn, checkOut] = shiftTimes[selectedShift];

            data.push({
                date: formattedDate,
                checkIn,
                checkOut,
                totalHours: "8:00",
                OTHours: "2",  // Example OT Hours, you can calculate this dynamically
                shift: selectedShift,
                shiftTime: `${checkIn} - ${checkOut}`
            });
        }

        setAttendanceHistory(data.reverse());
    };

    const handlePunch = () => {
        if (punchStatus === "Punch In") {
            setPunchStatus("Punch Out");
            setOpen("Active");
            setStartTime(new Date());
        } else {
            setPunchStatus("Punch In");
            setOpen("Inactive");
            setStartTime(null);
        }
    };

    const handleDownload = () => {
        const worksheet = XLSX.utils.json_to_sheet(attendanceHistory);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Attendance");

        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: "application/octet-stream" });

        const currentDate = new Date();
        const monthName = currentDate.toLocaleString("default", { month: "long" });
        const year = currentDate.getFullYear();
        const fileName = `Attendance_Report_${monthName}_${year}.xlsx`;

        saveAs(data, fileName);
    };

    return (
        <div className="w-full h-full p-2 lg:p-4">
            {/* Timecard + Punch Section */}
            <div className="p-2 grid grid-cols-1 md:grid-cols-2 gap-4 my-4 justify-center items-center">
                <div className="border px-3 bg-orange-50 border-orange-500 rounded flex flex-col items-center justify-center py-6 gap-4">
                    <div className="text-center">
                        <strong>{currentTime.toLocaleTimeString()}, {currentTime.toLocaleDateString()}</strong>
                    </div>
                    <div className="bg-white border-4 border-gray-200 flex flex-col justify-center items-center w-[150px] h-[150px] rounded-full">
                        <div>Total Hours</div>
                        <div><strong>{workingTime}</strong></div>
                    </div>
                    <div>
                        <button className="bg-[#F5E7C6] text-[#0a1f44] hover:text-[#F5E7C6] hover:bg-[#0a1f44] duration-300 font-semibold px-2 py-1 rounded">
                            Production: {workingTime}
                        </button>
                    </div>
                    <div className="font-semibold">
                        {punchStatus === "Punch In" ? "Expected Punch Out: 06:00 PM" : "Expected Punch In: Tomorrow"}
                    </div>
                    <div className="w-full text-center">
                        <button
                            onClick={handlePunch}
                            className="text-[#F5E7C6] cursor-pointer bg-[#0a1f44] hover:bg-[#F5E7C6] hover:text-[#0a1f44] duration-300 font-semibold px-8 py-1 rounded"
                        >
                            {punchStatus}
                        </button>
                    </div>
                    <div className="mt-4">
                        <select
                            value={shift}
                            onChange={(e) => setShift(e.target.value)}
                            className="bg-gray-100 border rounded p-2"
                        >
                            <option value="Morning">Morning Shift</option>
                            <option value="Evening">Evening Shift</option>
                            <option value="Night">Night Shift</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Attendance History Table */}
            <div className="my-3">
                <div className="flex justify-center items-center w-full">
                    <div className="w-full lg:w-[900px] h-full bg-white shadow-md rounded p-3 lg:p-6">
                        <div className="flex justify-between items-center">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">Attendance History</h1>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full overflow-auto">
                                <thead>
                                    <tr className="text-[12px] sm:text-[16px]">
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Date</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Check In</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Check Out</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Total Hours</th>
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">OT Hours</th> {/* Changed from Status to OT Hours */}
                                        <th className="px-4 py-2 bg-gray-200 whitespace-nowrap">Shift</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendanceHistory.map((entry, index) => (
                                        <tr key={index} className="text-[12px] sm:text-[16px]">
                                            <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">{entry.date}</td>
                                            <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">{entry.checkIn}</td>
                                            <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">{entry.checkOut}</td>
                                            <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">{entry.totalHours}</td>
                                            <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">{entry.OTHours || "0"}</td> {/* Display OT Hours */}
                                            <td className="border border-gray-200 text-center px-4 py-2 whitespace-nowrap">
                                                {entry.shift} ({entry.shiftTime})
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <div className="text-end">
                <button
                    onClick={handleDownload}
                    className="bg-blue-500 hover:bg-blue-600 duration-500 cursor-pointer text-white rounded p-1 my-3 w-full md:w-[160px]"
                >
                    Download Monthly Report
                </button>
            </div>
        </div>
    );
}
