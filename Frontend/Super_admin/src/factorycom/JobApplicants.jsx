import React, { useState } from 'react'
import { CiHome } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight, FaAnglesUp } from "react-icons/fa6";
import { FaCloudscale } from "react-icons/fa6";
import { FaCalendarAlt, FaEdit } from "react-icons/fa";
import { TbFileReport } from "react-icons/tb";
import AttendanceModal from './AttendanceModal';
import { FaArrowCircleUp } from "react-icons/fa";
import { LuClockArrowUp } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { IoMdSave } from 'react-icons/io';
import { GoDownload } from 'react-icons/go';
import { RiDeleteBin6Fill, RiDeleteBin6Line } from 'react-icons/ri';
import PostJob from './PostJob';
import Location from './Location';


export default function JobApplicants1() {
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
        { id: 'Job-001', title: 'Senior IOS Developer', category: 'Software', location: 'New York, USA', salary: '30,000 - 35,000 / month', date: '12 Sep 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/apple.svg" },
        { id: 'Job-002', title: 'Junior PHP Developer', category: 'Software', location: 'Los Angeles, USA', salary: '20,000 - 25,000 / month', date: '24 Oct 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/php.svg" },
        { id: 'Job-003', title: 'Junior PHP Developer', category: 'Software', location: 'Los Angeles, USA', salary: '20,000 - 25,000 / month', date: '24 Oct 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/black.svg" },
        { id: 'Job-004', title: 'Junior React Developer', category: 'Software', location: 'Bristol, UK', salary: '30,000 - 35,000 / month', date: '18 Feb 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/react.svg" },
        { id: 'Job-005', title: 'Senior Laravel Developer', category: 'Software', location: 'Washington, USA', salary: '32,000 - 36,000 / month', date: '20 Jul 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/laravel.svg" },
        { id: 'Job-006', title: 'DevOps Engineer', category: 'Software', location: 'Coventry, UK', salary: '25,000 / month', date: '10 Apr 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/devops.svg" },
        { id: 'Job-007', title: 'Junior Android Developer', category: 'Software', location: 'Chicago, USA', salary: '28,000 - 32,000 / month', date: '29 Aug 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/android.svg" },
        { id: 'Job-008', title: 'Senior HTML Developer', category: 'Software', location: 'Carlisle, UK', salary: '25,000 - 28,000 / month', date: '22 Feb 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/html.svg" },
        { id: 'Job-009', title: 'Junior UI/UX Designer', category: 'Software', location: 'Lancaster, UK', salary: '20,000 - 25,000 / month', date: '03 Nov 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/ui.svg" },
        { id: 'Job-010', title: 'Senior Graphic Designer', category: 'Software', location: 'San Diego, USA', salary: '22,000 - 28,000 / month', date: '17 Dec 2024', image: "https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/grafic.svg" },
    ];
    return (
        <>
            <div className='bg-gray-100 p-4 overflow-x-auto'>


                <div className='md:flex items-center overflow-hidden md:justify-between'>
                    <div><h1 className="font-bold text-[20px] lg:text-[24px]">Jobs</h1><div className="flex items-center gap-2"><CiHome /><span>/ Administration / Jobs</span></div></div>
                    <div className='flex gap-3  lg:my-0 my-3'>
                        <span className='bg-white border border-gray-200 rounded'>
                            <span className='p-2 flex gap-2 justify-center items-center text-[12px] lg:text-[16px]'><FaCloudscale /><FaCalendarAlt /></span>
                        </span>
                        <span className='bg-white'>
                            <select className="outline-none border text-[12px] lg:text-[16px] border-gray-300 md:p-2 p-1 rounded">
                                <option>Export</option>
                                <option>Export as PDF</option>
                                <option>Export as Excel</option>
                            </select>
                        </span>
                        <span className='bg-orange-600 text-white rounded border border-gray-200'>
                            <span onClick={() => { setAct(true), setHideAll(false) }} className='md:p-2 p-1  cursor-pointer flex gap-2 justify-center items-center text-[12px] lg:text-[16px] md:font-semibold'><TbFileReport /><span>Post New Job</span></span>
                        </span>
                        <span className='hidden md:flex p-2 bg-white rounded justify-center items-center'><FaAnglesUp /></span>
                    </div>
                </div>

                <div className='my-4 bg-white p-2 rounded border border-gray-100 shadow'>
                    <div className="p-6">
                        <div className='grid my-3 py-4 border-b border-gray-200 md:grid-cols-3 grid-cols-1 gap-3'>
                            <h2 className="text-xl  font-bold mb-4">Job List</h2>
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
                                    <tr className="bg-gray-100 text-left text-sm text-[12px] lg:text-[14px]">
                                        <th className="py-2 px-4"><input type="checkbox" /></th>
                                        <th className="py-2 px-4">Job ID</th>
                                        <th className="py-2 px-4">Job Title</th>
                                        <th className="py-2 px-4">Category</th>
                                        <th className="py-2 px-4">Location</th>
                                        <th className="py-2 px-4">Salary Range</th>
                                        <th className="py-2 px-4">Posted Date</th>
                                        <th className="py-2 px-4"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobData.map((job, index) => (
                                        <tr key={index} className="border-b border-gray-200 text-[12px] lg:text-[14px] hover:bg-gray-50 text-sm">
                                            <td className="py-2 px-4"><input type="checkbox" /></td>
                                            <td className="py-2 px-4">{job.id}</td>
                                            <td className="py-2 px-4 flex items-center gap-2 hover:text-orange-500 duration-500 font-semibold cursor-pointer"><img src={job.image} alt="" /><span>{job.title}</span></td>
                                            <td className="py-2 px-4">{job.category}</td>
                                            <td className="py-2 px-4">{job.location}</td>
                                            <td className="py-2 px-4">{job.salary}</td>
                                            <td className="py-2 px-4">{job.date}</td>
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
            <div>
                {
                    !hideAll && (
                        <>
                            <div className={` ${act == true ? "flex" : "hidden"}`}><PostJob setHideAll={setHideAll} act={act} setAct={setAct} /></div>
                        </>
                    )
                }
                {
                    !hideAll && (
                        <>

                            <div className={` ${act == false ? "flex" : "hidden"}`}><Location setHideAll={setHideAll} setAct={setAct} /></div>
                        </>
                    )
                }

            </div>
        </>
    )
}

