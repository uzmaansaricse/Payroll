import React, { useState } from 'react'
import { CiHome } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaAnglesUp, FaChartColumn, FaFile } from "react-icons/fa6";
import { TbFileReport } from "react-icons/tb";
import AttendanceModal from './AttendanceModal';
import { FaArrowCircleUp, FaEdit, FaFileAlt } from "react-icons/fa";
import { LuChartNoAxesColumnIncreasing, LuClockArrowUp } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { IoMdSave } from 'react-icons/io';
import { GoDownload } from 'react-icons/go';
import { RiDeleteBin6Fill, RiDeleteBin6Line } from 'react-icons/ri';
import PostJob from './PostJob';
import Location from './Location';
import { IoGrid } from 'react-icons/io5';
import { MdSaveAlt } from 'react-icons/md';



export default function NewHire() {
    const [act, setAct] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Today");
    const [isOpen1, setIsOpen1] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState("Sort By : Last 7 Days");
    const [isOpen2, setIsOpen2] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState("Role");
    const [hideAll, setHideAll] = useState(false);

    const options = ["Today", "Yesterday", "Last 7 Days", "Last 30 Days", "This Year", "Next Year", "Custom Range",];
    const options1 = ["Sort By : Last 7 Days", "Recently Added", "Ascending", "Descending", "Last Month", "Last 7 Days",];
    const options2 = ["Role", "Senior IOS Developer", "Junior PHP Developer", "Network Engineer",];

    const jobData = [
        { CandID: "Cand-001", candidate: "Harold Gaynor", email: "harold@example.com", appliedrole: 'Accountant', phone: '(146) 8964 278', applieddate: '12 Sep 2024', status: 'Sent', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-01.jpg" },
        { CandID: "Cand-002", candidate: "Sandra Ornellas", email: "sandra@example.com", appliedrole: 'App Developer', phone: '(148) 9648 218', applieddate: '24 Oct 2024', status: 'Scheduled', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-34.jpg" },
        { CandID: "Cand-003", candidate: "John Harris", email: "john@example.com", appliedrole: 'Technician', phone: '(196) 2348 947', applieddate: '18 Feb 2024', status: 'Interviewed', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-09.jpg" },
        { CandID: "Cand-004", candidate: "Carole Langan", email: "carole@example.com", appliedrole: 'JWeb Developer', phone: '(138) 6487 295', applieddate: '17 Oct 2024', status: 'Offered', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-26.jpg" },
        { CandID: "Cand-005", candidate: "Charles Marks", email: "charles@example.com", appliedrole: 'Sales Executive Officer', phone: '(154) 6485 218', applieddate: '20 Jul 2024', status: 'Hired', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-39.jpg" },
        { CandID: "Cand-006", candidate: "Kerry Drake", email: "kerry@example.com", appliedrole: 'Designer', phone: '(185) 5947 097', applieddate: '20 Jul 2024', status: 'Rejected', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-24.jpg" },
        { CandID: "Cand-007", candidate: "David Carmona", email: "david@example.com", appliedrole: 'Account Manager', phone: '(106) 3485 978', applieddate: '29 Aug 2024', status: 'Hired', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-33.jpg" },
        { CandID: "Cand-008", candidate: "Margaret Soto", email: "margaret@example.com", appliedrole: 'SEO Analyst', phone: '(174) 3795 107', applieddate: '22 Feb 2024', status: 'Scheduled', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-10.jpg" },
        { CandID: "Cand-009", candidate: "Jeffrey Thaler", email: "jeffrey@example.com", appliedrole: 'Admin', phone: '(128) 0975 348', applieddate: '03 Nov 2024', status: 'AppReceived', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-11.jpg" },
        { CandID: "Cand-010", candidate: "Joyce Golston", email: "joyce@example.com", appliedrole: 'Business Analyst', phone: '(132) 1876 304', applieddate: '17 Dec 2024', status: 'Hired', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-57.jpg" },
    ];
    return (
        <>
            <div className='bg-gray-100 p-4 overflow-x-auto'>


                <div className='md:flex items-center overflow-hidden md:justify-between'>
                    <div><h1 className="font-bold text-[20px] lg:text-[24px]">Candidates List</h1><div className="flex items-center gap-2"><CiHome /><span>/ Administration / Candidates List</span></div></div>
                    <div className='flex gap-3  lg:my-0 my-3'>
                        <span className='bg-white border border-gray-200 rounded'>
                            <span className='p-2 flex gap-2 justify-center items-center text-[12px] lg:text-[16px]'><FaChartColumn /><LuChartNoAxesColumnIncreasing /><IoGrid /></span>
                        </span>
                        <span className='bg-white'>
                            <select className="outline-none border text-[12px] lg:text-[16px] border-gray-300 md:p-2 p-1 rounded">
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
                            <h2 className="text-xl  font-bold mb-4">Candidates List</h2>
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
                        <div className="overflow-x-auto w-full p-4">
                            <div className="md:flex md:flex-row flex flex-col gap-5 justify-between my-4 items-center">
                                <div>
                                    <span>Row Per Page </span>
                                    <select className='border border-gray-200 outline-none rounded p-1 mx-2'>
                                        <option>10</option>
                                        <option >25</option>
                                        <option>50</option>
                                        <option >100</option>
                                    </select>
                                    <span> Entries</span>
                                </div>
                                <div><input type="text" className='border border-gray-200 shadow outline-none p-1 rounded' placeholder='Search' /></div>
                            </div>
                            <table className="min-w-full bg-white shadow-md rounded-md">
                                <thead>
                                    <tr className="bg-gray-100 text-left text-sm text-[10px]">
                                        <th className="py-2 px-4"><input type="checkbox" /></th>
                                        <th className="py-2 px-4">Cand ID</th>
                                        <th className="py-2 px-4">Candidate</th>
                                        <th className="py-2 px-4">Applied Role</th>
                                        <th className="py-2 px-4">Phone</th>
                                        <th className="py-2 px-4">AppliedDate</th>
                                        <th className="py-2 px-4">Resume</th>
                                        <th className="py-2 px-4">Status</th>
                                        <th className="py-2 px-4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobData.map((job, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 text-sm text-[10px]">
                                            <td className="py-2 px-4"><input type="checkbox" /></td>
                                            <td className="py-2 px-4">{job.CandID}</td>
                                            <td className="py-2 px-4 flex items-center gap-2  cursor-pointer"><img className='rounded-full' width={30} src={job.image} alt="" /><span><span className='hover:text-orange-500 duration-500 font-semibold'>{job.candidate}</span><br /> <span>{job.email}</span></span></td>
                                            <td className="py-2 px-4">{job.appliedrole}</td>
                                            <td className="py-2 px-4">{job.phone}</td>
                                            <td className="py-2 px-4">{job.applieddate}</td>
                                            <td className="py-2 px-4 flex gap-2 items-center"><FaFile /><MdSaveAlt /></td>
                                            <td className="py-2 px-4"><span className='border rounded border-gray-200 px-2 py-1'>{job.status}</span></td>
                                            <td className="py-2 px-4 flex gap-2 items-center"><FaEdit /><RiDeleteBin6Line /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex justify-between items-center py-4">
                            <span>Showing 1 - {jobData.length} entries</span>
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

        </>
    )
}


