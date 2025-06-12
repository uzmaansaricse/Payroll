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
import { IoMdSave } from 'react-icons/io';
import { GoDownload } from 'react-icons/go';
import { RiDeleteBin6Fill } from 'react-icons/ri';


export default function ProfileThispage1() {
    const [act, setAct] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Today");
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("Sort By : Last 7 Days");
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState("Payment Method");

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
    const options2 = [
        "Payment Method",
        "Credit Card",
        "Paypal",
        "Debit Card"

    ];

    const transactionData = [
        { invoiceID: "INV001", customer: "BrightWave Innovations", email: "michael@example.com", createdDate: "12 Sep 2024", amount: "$200", paymentMethod: "Credit Card", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-01.svg"},
        { invoiceID: "INV002", customer: "Stellar Dynamics", email: "sophie@example.com", createdDate: "24 Oct 2024", amount: "$600", paymentMethod: "Paypal", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-02.svg"},
        { invoiceID: "INV003", customer: "Quantum Nexus", email: "cameron@example.com", createdDate: "18 Feb 2024", amount: "$200", paymentMethod: "Debit Card", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-03.svg"},
        { invoiceID: "INV004", customer: "EcoVision Enterprises", email: "doris@example.com", createdDate: "17 Oct 2024", amount: "$200", paymentMethod: "Paypal", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-04.svg"},
        { invoiceID: "INV005", customer: "Aurora Technologies", email: "thomas@example.com", createdDate: "20 Jul 2024", amount: "$400", paymentMethod: "Credit Card", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-05.svg"},
        { invoiceID: "INV006", customer: "BlueSky Ventures", email: "kathleen@example.com", createdDate: "10 Apr 2024", amount: "$200", paymentMethod: "Paypal", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-06.svg"},
        { invoiceID: "INV007", customer: "TerraFusion Energy", email: "bruce@example.com", createdDate: "29 Aug 2024", amount: "$4800", paymentMethod: "Credit Card", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-07.svg"},
        { invoiceID: "INV008", customer: "UrbanPulse Design", email: "estelle@example.com", createdDate: "22 Feb 2024", amount: "$50", paymentMethod: "Credit Card", status: "Unpaid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-08.svg"},
        { invoiceID: "INV009", customer: "Nimbus Networks", email: "stephen@example.com", createdDate: "03 Nov 2024", amount: "$600", paymentMethod: "Paypal", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-09.svg"},
        { invoiceID: "INV010", customer: "Epicurean Delights", email: "angela@example.com", createdDate: "17 Dec 2024", amount: "$200", paymentMethod: "Credit Card", status: "Paid" ,image:"https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/company/company-10.svg"},
    ];
    return (
        <>
            <div className='bg-gray-100 p-4 overflow-x-auto'>
                <div className='md:flex items-center overflow-hidden md:justify-between'>
                    <div><h1 className="font-bold text-[20px] lg:text-[24px]">Purchase Transaction</h1><div className="flex items-center gap-2"><CiHome /><span>/ Superadmin / Purchase Transaction List</span></div></div>
                    <div className='flex gap-3  lg:my-0 my-3'>

                        <span className='bg-white'>
                            <select className="outline-none border border-gray-300 p-2 rounded">
                                <option>Export</option>
                                <option>Export as PDF</option>
                                <option>Export as Excel</option>
                            </select>
                        </span>

                        <span className='hidden md:flex p-2 bg-white rounded justify-center items-center'><FaAnglesUp /></span>
                    </div>
                </div>

                <div className='my-4 bg-white p-2 rounded border border-gray-100 shadow'>
                    <div className="p-6">
                        <div className='grid my-3 py-4 border-b border-gray-200 md:grid-cols-3 grid-cols-1 gap-3'>
                            <h2 className="text-xl  font-bold mb-4">Transaction List</h2>
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
                                <div className="relative ">
                                    <button
                                        onClick={() => setIsOpen2(!isOpen2)}
                                        className="w-full px-4 py-2 border border-gray-100 rounded-lg flex justify-between items-center bg-white shadow-md">
                                        <span>{selectedOption2}</span>
                                        <span className="text-gray-500">&#9662;</span>
                                    </button>
                                    {isOpen2 && (
                                        <div className="absolute w-full bg-white border border-gray-100 rounded-lg shadow-lg mt-1 z-10">
                                            {options2.map((option, index) => (
                                                <div
                                                    key={index}
                                                    className={`px-4 py-2 cursor-pointer hover:bg-orange-500 hover:text-white ${selectedOption2 === option ? "bg-orange-500 text-white" : ""
                                                        }`}
                                                    onClick={() => {
                                                        setSelectedOption2(option);
                                                        setIsOpen2(false);
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
                                <select className='px-4 py-2 rounded outline-none w-full border border-gray-100'>
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
                        <div className="overflow-x-auto p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between my-4 items-center">
                                <div>
                                    <span>Row Per Page </span>
                                    <select className='border border-gray-200 outline-none rounded p-1 mx-2'>
                                        <option>10</option>
                                        <option>25</option>
                                        <option>50</option>
                                        <option>100</option>
                                    </select>
                                    <span>Entries</span>
                                </div>
                                <div className='md:text-end'>
                                    <input type="text" placeholder='Search' className='outline-none border border-gray-200 rounded p-1' />
                                </div>
                            </div>
                            <table className="min-w-full bg-white shadow-md">
                                <thead>
                                    <tr className="bg-gray-100 text-[12px] ">
                                    <th className="py-2 px-4 text-left font-semibold"><input type="checkbox"  /> </th>
                                        {["Invoice ID", "Customer", "Email", "Created Date", "Amount", "Payment Method", "Status",""].map((header) => (
                                            <th key={header} className="py-2 px-4 text-left font-semibold">{header}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {transactionData.map((entry, index) => (
                                        <tr key={index} className="border-b border-gray-200 text-[12px] hover:bg-gray-50">
                                            <td className="py-2 px-4"><input type="checkbox" /></td>
                                            <td className="py-2 px-4">{entry.invoiceID}</td>
                                            <td className="py-2 px-4 flex gap-2"><img src={entry.image} alt="" /><span>{entry.customer}</span></td>
                                            <td className="py-2 px-4">{entry.email}</td>
                                            <td className="py-2 px-4">{entry.createdDate}</td>
                                            <td className="py-2 px-4">{entry.amount}</td>
                                            <td className="py-2 px-4">{entry.paymentMethod}</td>
                                            <td className="py-2 px-4">
                                                <span className={`px-2 py-1 rounded text-white ${entry.status === "Paid" ? "bg-green-500" : "bg-red-500"}`}>
                                                    {entry.status}
                                                </span>
                                            </td>
                                            <td className="py-2 px-4 flex gap-2"><IoMdSave /><GoDownload /><RiDeleteBin6Fill /></td>
                                        </tr>
                                    ))}
                    

                    </tbody>
                            </table>
                            <div className="flex justify-between items-center py-4">
                                <span>Showing 1 - {transactionData.length} of {transactionData.length} entries</span>
                                <div className="flex items-center gap-2">
                                    <button className="p-2 rounded-full hover:bg-gray-200">
                                        <FaAngleLeft />
                                    </button>
                                    <span className="bg-orange-500 py-1 px-3 text-white font-bold rounded-full">1</span>
                                    <button className="p-2 rounded-full hover:bg-gray-200">
                                        <FaAngleRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

