import React, { useState } from 'react'
import { CiHome } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaAnglesUp } from "react-icons/fa6";
import { FaCloudscale } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { TbFileReport } from "react-icons/tb";
import AttendanceModal from './AttendanceModal';
import { FaArrowCircleUp } from "react-icons/fa";
import { LuClockArrowUp } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";


export default function ViewDetailspage() {
    const [act, setAct] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Today");
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("Sort By : Last 7 Days");

    const options = [
        "Today",
        "Yesterday",
        "Last 7 Days",
        "Last 30 Days",
        "This Year",
        "Next Year",
        "Custom Range",
    ];
    const options1 = [
        "Sort By : Last 7 Days",
        "Recently Added",
        "Ascending",
        "Descending",
        "Last Month",
        "Last 7 Days",
       
    ];
    const attendanceData = [
        { date: "02 Sep 2024", checkIn: "09:00 AM", status: "Present", checkOut: "09:17 PM", late: "12 Min", overtime: "-", productionHours: "8.35 Hrs", color: "green" },
        { date: "06 Jul 2024", checkIn: "09:00 AM", status: "Present", checkOut: "07:13 PM", late: "-", overtime: "-", productionHours: "9.15 Hrs", color: "blue" },
        { date: "10 Dec 2024", checkIn: "09:00 AM", status: "Absent", checkOut: "09:23 PM", late: "-", overtime: "45 Min", productionHours: "9.25 Hrs", color: "green" },
        { date: "12 Apr 2024", checkIn: "09:00 AM", status: "Present", checkOut: "06:43 PM", late: "-", overtime: "10 Min", productionHours: "8.22 Hrs", color: "green" },
        { date: "14 Jan 2024", checkIn: "09:00 AM", status: "Present", checkOut: "06:45 PM", late: "32 Min", overtime: "20 Min", productionHours: "8.55 Hrs", color: "green" },
        { date: "15 Mar 2024", checkIn: "09:00 AM", status: "Present", checkOut: "06:23 PM", late: "-", overtime: "50 Min", productionHours: "8.35 Hrs", color: "green" },
        { date: "15 Nov 2024", checkIn: "09:00 AM", status: "Present", checkOut: "08:15 PM", late: "-", overtime: "-", productionHours: "8.35 Hrs", color: "green" },
        { date: "20 Apr 2024", checkIn: "09:00 AM", status: "Present", checkOut: "07:15 PM", late: "-", overtime: "-", productionHours: "8.32 Hrs", color: "green" },
        { date: "20 Feb 2024", checkIn: "09:00 AM", status: "Present", checkOut: "06:13 PM", late: "-", overtime: "33 Min", productionHours: "8.45 Hrs", color: "green" },
        { date: "21 Jan 2024", checkIn: "09:00 AM", status: "Present", checkOut: "06:12 PM", late: "-", overtime: "45 Min", productionHours: "7.54 Hrs", color: "red" },
    ];
    return (
        <>
            <div className='bg-gray-100 p-4 overflow-x-auto'>
                <div className='md:flex items-center overflow-hidden md:justify-between'>
                    <div><h1 className="font-bold text-[20px] lg:text-[24px]">Employee Attendance</h1><div className="flex items-center gap-2"><CiHome /><span>/ Employee / Employee Attendance</span></div></div>
                    <div className='flex gap-3  lg:my-0 my-3'>
                        <span className='bg-white border border-gray-200 rounded'>
                            <span className='p-2 flex gap-2 justify-center items-center'><FaCloudscale /><FaCalendarAlt /></span>
                        </span>
                        <span className='bg-white'>
                            <select className="outline-none border border-gray-300 p-2 rounded">
                                <option>Export</option>
                                <option>Export as PDF</option>
                                <option>Export as Excel</option>
                            </select>
                        </span>
                        <span className='text-[#F5E7C6] bg-[#0a1f44]  rounded border border-gray-200'>
                            <span onClick={() => setAct(true)} className='p-2 cursor-pointer flex gap-2 justify-center items-center'><TbFileReport /><span>Report</span></span>
                        </span>
                        <span className='hidden md:flex p-2 bg-white rounded justify-center items-center'><FaAnglesUp /></span>
                    </div>
                </div>
                <div className='mt-3 grid grid-cols-1 lg:grid-cols-4 gap-3'>
                    <div className='bg-white px-4 py-6 rounded shadow gap-3 flex flex-col justify-center items-center'>
                        <div><strong className='text-gray-400'>Good Morning, Adrian</strong></div>
                        <div className='text-center'><strong className='text-[20px] '>08:35 AM, 11 Mar 2025</strong></div>
                        <img width={100} className='rounded-full' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-31.jpg" alt="" />
                        <div className='text-[#F5E7C6] bg-[#0a1f44] px-2 py-1 rounded '>Production : 3:45 hrs</div>
                        <div className='font-semibold'>Punch In at 10.00 AM</div>
                        <div className='w-full flex justify-center'><button className='bg-black w-[30%] px-3 py-2 rounded text-white'>Punch Out</button></div>
                    </div>
                    <div className='lg:col-span-3 grid lg:grid-cols-4 md:grid-cols-2 gap-3 grid-cols-1'>
                        <div className='bg-white p-2 rounded shadow flex flex-col gap-3'>
                            <div className='bg-orange-500 rounded w-[30px] h-[30px] p-1 text-white flex justify-center items-center'><LuClockArrowUp /></div>
                            <div className='font-bold text-[20px]'>8.36 / 9</div>
                            <div className='font-semibold text-gray-400 border-b border-gray-200 pb-3'>Total Hours Today</div>
                            <div className='flex gap-2 items-center'><FaArrowCircleUp className='bg-green-500 h-[10px] w-[10px] text-white p-3 rounded-full' /><span>5% This Week</span></div>
                        </div>
                        <div className='bg-white p-2 rounded shadow flex flex-col gap-3'>
                            <div className='bg-black rounded w-[30px] h-[30px] p-1 text-white flex justify-center items-center'><LuClockArrowUp /></div>
                            <div className='font-bold text-[20px]'>10 / 40</div>
                            <div className='font-semibold text-gray-400 border-b border-gray-200 pb-3'>Total Hours Week</div>
                            <div className='flex gap-2 items-center'><FaArrowCircleUp className='bg-green-500 h-[10px] w-[10px] text-white p-3 rounded-full' /><span>7% Last Week</span></div>
                        </div>
                        <div className='bg-white p-2 rounded shadow flex flex-col gap-3'>
                            <div className='bg-blue-500 rounded w-[30px] h-[30px] p-1 text-white flex justify-center items-center'><LuCalendar /></div>
                            <div className='font-bold text-[20px]'>75 / 98</div>
                            <div className='font-semibold text-gray-400 border-b border-gray-200 pb-3'>Total Hours Month</div>
                            <div className='flex gap-2 items-center'><FaArrowCircleUp className='bg-red-600 h-[10px] w-[10px] text-white p-3 rounded-full' /><span>8% Last Month</span></div>
                        </div>
                        <div className='bg-white p-2 rounded shadow flex flex-col gap-3'>
                            <div className='bg-pink-500 rounded w-[30px] h-[30px] p-1 text-white flex justify-center items-center'><LuCalendar /></div>
                            <div className='font-bold text-[20px]'>16 / 28</div>
                            <div className='font-semibold text-gray-400 border-b border-gray-200 pb-3'>Overtime this Month...</div>
                            <div className='flex gap-2 items-center'><FaArrowCircleUp className='bg-red-600 h-[10px] w-[10px] text-white p-3 rounded-full' /><span>6% Last Month</span></div>
                        </div>
                        <div className='lg:col-span-4 md:col-span-2 bg-white p-2 rounded shadow overflow-x-auto'>
                            <div>
                                <div className='grid items-center justify-center gap-2 grid-cols-2 my-3 md:grid-cols-4'>
                                    <span className='flex justify-center  items-center gap-2'><FaArrowCircleUp className='bg-gray-300 text-gray-300 rounded-full' /><span>Total Working hours</span></span>
                                    <span className='flex  justify-center items-center gap-2'> <FaArrowCircleUp className='bg-green-500 text-green-500 rounded-full' /><span>Productive Hours</span></span>
                                    <span className='flex justify-center  items-center gap-2'><FaArrowCircleUp className='bg-yellow-500 text-yellow-500 rounded-full' /><span>Break hours</span></span>
                                    <span className='flex justify-center  items-center gap-2'><FaArrowCircleUp className='bg-blue-500 text-blue-500 rounded-full' /><span>Overtime</span></span>
                                </div>
                                <div className='grid items-center justify-center gap-2 grid-cols-2 my-3 md:grid-cols-4 font-bold lg:text-[20px]'>
                                    <h1 className='text-center'>12h 36m</h1>
                                    <h1 className='text-center'>08h 36m</h1>
                                    <h1 className='text-center'>22m 15s</h1>
                                    <h1 className='text-center'>02h 15m</h1>
                                </div>
                                <div className='flex justify-center rounded my-3  w-full'>
                                    <div className='w-[100%]  bg-gray-100 flex justify-center gap-2 overflow-hidden'>
                                        <div className='bg-green-500 p-3 rounded w-[10%]'></div>
                                        <div className='bg-yellow-500 p-3 rounded w-[5%]'></div>
                                        <div className='bg-green-500 p-3 rounded w-[20%]'></div>
                                        <div className='bg-yellow-500 p-3 rounded w-[10%]'></div>
                                        <div className='bg-green-500 p-3 rounded w-[15%]'></div>
                                        <div className='bg-yellow-500 p-3 rounded w-[5%]'></div>
                                        <div className='bg-blue-500 p-3 rounded w-[3%]'></div>
                                        <div className='bg-blue-500 p-3 rounded w-[1%]'></div>
                                    </div>
                                </div>
                                <div className='grid items-center justify-center gap-2 grid-cols-4 md:grid-cols-18 my-3 text-[12px]'>
                                    <span>06:00</span><span>07:00</span><span>08:00</span><span>09:00</span><span>10:00</span>
                                    <span>11:00</span><span>12:00</span><span>01:00</span><span>02:00</span><span>03:00</span>
                                    <span>04:00</span><span>05:00</span><span>06:00</span><span>07:00</span><span>08:00</span>
                                    <span>09:00</span><span>10:00</span><span>11:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='my-4 bg-white p-2 rounded border border-gray-100 shadow'>
                    <div className="p-6">
                        <div className='grid my-3 py-4 border-b border-gray-200 md:grid-cols-4 grid-cols-2 gap-3'>
                            <h2 className="text-xl  font-bold mb-4">Employee Attendance</h2>
                            <div>
                                <div className="relative ">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="w-full px-4 py-2 border border-gray-100 rounded-lg flex justify-between items-center bg-white shadow-md">
                                        <span>{selectedOption}</span>
                                        <span className="text-gray-500">&#9662;</span>
                                    </button>
                                    {isOpen && (
                                        <div className="absolute w-full bg-white border border-gray-100 rounded-lg shadow-lg mt-1 z-10">
                                            {options.map((option, index) => (
                                                <div
                                                    key={index}
                                                    className={`px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-white ${selectedOption === option ? "bg-orange-500 text-white" : ""
                                                        }`}
                                                    onClick={() => {
                                                        setSelectedOption(option);
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <select className='px-4 py-2 rounded outline-none border border-gray-100'>
                                    <option>Select Status</option>
                                    <option>Present</option>
                                    <option>Absent</option>
                                </select>
                            </div>
                            <div>
                                <div className="relative w-full">
                                    <button
                                        onClick={() => setIsOpen1(!isOpen1)}
                                        className="w-full px-4 py-2 border border-gray-100 rounded-lg flex justify-between items-center bg-white shadow-md">
                                        <span>{selectedOption1}</span>
                                        <span className="text-gray-500">&#9662;</span>
                                    </button>
                                    {isOpen1 && (
                                        <div className="absolute w-full bg-white border border-gray-100 rounded-lg shadow-lg mt-1 z-10">
                                            {options1.map((option, index) => (
                                                <div
                                                    key={index}
                                                    className={`px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-white ${selectedOption1 === option ? "bg-orange-500 text-white" : ""
                                                        }`}
                                                    onClick={() => {
                                                        setSelectedOption1(option);
                                                        setIsOpen1(false);
                                                    }}
                                                >
                                                    {option}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 justify-between my-4 items-center'>
                                <div><span>Row Per Page</span> <span><select className='border rounded'><option>10</option><option>25</option><option>50</option><option>100</option></select></span> <span>Entries</span></div>
                                <div className='md:text-end'>
                                    <input type="text" placeholder='Search' className='outline-none border rounded border-gray-100 shadow p-1' />
                                </div>
                            </div>
                            <table className="min-w-full bg-whit shadow-md">
                                <thead>
                                    
                                    <tr className="bg-gray-100 text-[12px] md:text-[16px]">
                                        {["Date", "Check In", "Status", "Check Out", "Late", "Overtime", "Production Hours"].map((header) => (
                                            <th key={header} className="py-2 px-4  text-left font-semibold">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendanceData.map((entry, index) => (
                                        <tr key={index} className="border-b hover:bg-gray-50 border-gray-200 text-[12px] lg:text-[16px]">
                                            <td className="py-2 px-4">{entry.date}</td>
                                            <td className="py-2 px-4">{entry.checkIn}</td>
                                            <td className="py-2 px-4">
                                                <span className={`px-2 py-1 rounded text-white ${entry.status === "Present" ? "bg-green-500" : "bg-red-500"}`}>
                                                    {entry.status}
                                                </span>
                                            </td>
                                            <td className="py-2 px-4">{entry.checkOut}</td>
                                            <td className="py-2 px-4">{entry.late}</td>
                                            <td className="py-2 px-4">{entry.overtime}</td>
                                            <td className="py-2 px-4 flex justify-center"><span className={`px-2 py-1 rounded text-white ${entry.status === "Present" ? "bg-green-500" : "bg-red-500"}`}>
                                                {entry.productionHours}</span></td>
                                        </tr>
                                    ))}
                                   
                                </tbody>
                            </table>
                            
                        </div>
                        <td className="py-2  w-full flex px-4 justify-between text-[12px] md:text-[16px] font-semibold">
                                        <span>Showing 1 - 10 of 10 entries</span>
                                        <span className="flex items-center gap-2">
                                            <button className="p-2 rounded-full hover:bg-gray-200">
                                                <FaAngleLeft />
                                            </button>
                                            <span className="bg-orange-500 py-1 px-3 text-white font-bold rounded-full">1</span>
                                            <button className="p-2 rounded-full hover:bg-gray-200">
                                                <FaAngleRight />
                                            </button>
                                        </span>
                                    </td>
                    </div>
                </div>
            </div>
            <div className={` ${act == true ? "flex" : "hidden"}`}><AttendanceModal setAct={setAct} /></div>
        </>
    )
}

