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
import AddExpenses from './AddExpenses';
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";






export default function EarningDetailspage() {
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
    const expensesData = [
        { name: "Online Course", date: "14 Jan 2024", method: "Cash", amount: "$3000" },
        { name: "Employee Benefits", date: "21 Jan 2024", method: "Cash", amount: "$2500" },
        { name: "Travel", date: "20 Feb 2024", method: "Cheque", amount: "$2800" },
        { name: "Office Supplies", date: "15 Mar 2024", method: "Cash", amount: "$3300" },
        { name: "Welcome Kit", date: "12 Apr 2024", method: "Cheque", amount: "$3600" },
        { name: "Equipment", date: "20 May 2024", method: "Cheque", amount: "$2000" },
        { name: "Miscellaneous", date: "06 Jul 2024", method: "Cash", amount: "$3400" },
        { name: "Payroll", date: "02 Sep 2024", method: "Cheque", amount: "$4000" },
        { name: "Cafeteria", date: "15 Nov 2024", method: "Cash", amount: "$4500" },
        { name: "Cleaning Supplies", date: "10 Dec 2024", method: "Cheque", amount: "$3800" },
    ];
    return (
        <>
            <div className='bg-gray-100 p-4 overflow-x-auto'>
                <div className='md:flex items-center overflow-hidden md:justify-between'>
                    <div><h1 className="font-bold text-[20px] lg:text-[24px]">Expenses</h1><div className="flex items-center gap-2"><CiHome /><span>/ HR / Expenses</span></div></div>
                    <div className='flex gap-3  lg:my-0 my-3'>
                        <span className='bg-white'>
                            <select className="outline-none border border-gray-300 p-2 rounded">
                                <option>Export</option>
                                <option>Export as PDF</option>
                                <option>Export as Excel</option>
                            </select>
                        </span>
                        <span className='bg-orange-600 text-white rounded border border-gray-200'>
                            <span onClick={() => setAct(true)} className='p-2 cursor-pointer flex gap-2 justify-center items-center'><span>+ Add Expenses</span></span>
                        </span>
                        <span className='hidden md:flex p-2 bg-white rounded justify-center items-center'><FaAnglesUp /></span>
                    </div>
                </div>
                <div className='my-4 bg-white p-2 rounded border border-gray-100 shadow'>
                    <div className="p-6">
                        <div className='grid my-3 py-4 border-b border-gray-200 md:grid-cols-4 grid-cols-1 gap-3'>
                            <h2 className="text-xl  font-bold mb-4">Expenses List</h2>
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
                                <select className='px-4 py-2 rounded w-full outline-none border border-gray-100'>
                                    <option>$0.00-$00</option>
                                    <option>$3000</option>
                                    <option>$2500</option>
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
                        <div className="overflow-x-auto p-4">
                            <div className="flex gap-10 justify-between my-4">
                                <div className="flex items-center justify-between gap-2">
                                    <span className='hidden md:flex'>Row Per Page</span>
                                    <select className="border rounded px-2 py-1">
                                        <option>10</option>
                                        <option>25</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                    <span>Entries</span>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="outline-none border rounded border-gray-300 shadow px-2 py-1"
                                    />
                                </div>
                            </div>

                            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                                <thead>
                                    <tr className="bg-gray-100 text-left">
                                        <th className="py-2 px-4">
                                            <input type="checkbox" />
                                        </th>
                                        {["Expense Name", "Date", "Payment Method", "Amount", "Actions"].map((header) => (
                                            <th key={header} className="py-2 px-4 font-semibold">
                                                {header}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {expensesData.map((entry, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="py-2 px-4">
                                                <input type="checkbox" className='cursor-pointer' />
                                            </td>
                                            <td className="py-2 px-4">{entry.name}</td>
                                            <td className="py-2 px-4">{entry.date}</td>
                                            <td className="py-2 px-4">{entry.method}</td>
                                            <td className="py-2 px-4">{entry.amount}</td>
                                            <td className="py-2 px-4 flex gap-2">
                                                <button className='cursor-pointer'>
                                                    <FaEdit />
                                                </button>
                                                <button className='cursor-pointer'>
                                                    <MdDeleteForever />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="flex justify-between items-center mt-4 p-2 text-gray-700">
                                <span>Showing 1 - 10 of 10 entries</span>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 rounded-full hover:bg-gray-200">
                                        &lt;
                                    </button>
                                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full font-bold">1</span>
                                    <button className="p-2 rounded-full hover:bg-gray-200">
                                        &gt;
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className={` ${act == true ? "flex" : "hidden"}`}><AddExpenses setAct={setAct} /></div>
        </>
    )
}



















