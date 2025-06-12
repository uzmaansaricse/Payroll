import React, { useState } from 'react'
import { FaChartLine, FaFileInvoice, FaFileInvoiceDollar, FaLongArrowAltLeft, FaRegCalendarCheck, FaRegCalendarTimes, FaRegFileAlt, FaSignOutAlt, FaUserTie } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { LuLayoutGrid } from "react-icons/lu";
import { TbSettingsCog } from "react-icons/tb";
import { MdAttachMoney, MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuGrid2X2Plus } from "react-icons/lu";
import { AiFillMessage } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { TiDelete, TiThMenuOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { IoHome, IoLogOut } from 'react-icons/io5';
import { Link } from 'react-router';
import { ChevronDown, ChevronUp, Home } from 'lucide-react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { GiHamburgerMenu } from 'react-icons/gi';



export default function Header({ closeSidebar }) {
    const [open, setOpen] = useState(false);
    const [profile, setProfile] = useState(false)
    const [profile1, setProfile1] = useState(false)
    return (
        <>
            {/* {//lg:screen k liya } */}
            <header className='shadow py-2 sticky top-0 left-0 px-3 hidden lg:flex bg-gray-100 justify-between z-40'>
                <div className='flex items-center justify-between w-full'>
                    <div className='flex items-center gap-3'>
                        <span><a href="/"><FaLongArrowAltLeft /></a></span>
                        <span><IoMdSearch /></span>
                        <input type="text" className='p-2 outline-none bg-transparent' placeholder='Search' />
                    </div>
                    <div className="flex items-center space-x-4 p-4 me-50 ">
                        <img src="https://www.pngkit.com/png/detail/198-1986371_accenture-logo-transparent-accenture-greater-than-logo.png" alt="Accenture Icon" class="h-10" />

                        <h1 className="text-2xl font-bold text-gray-800">Accenture</h1>
                    </div>
                    <h1 className='font-semibold text-[20px]'>Anuj Saini</h1>

                </div>
                {/* <div className='flex gap-3 items-center'>
                    <MdOutlineEmail className='cursor-pointer' onClick={() => { setProfile1(!profile1), setProfile(false) }} />

                    <img className='rounded-full cursor-pointer' onClick={() => { setProfile(!profile), setProfile1(false) }} width={30} height={30} src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-12.jpg" alt="" />
                </div> */}
            </header>
            {/* {//lg: sa nicha} */}
            <header className='lg:hidden  text-[#F5E7C6] bg-[#152354]  sticky top-0 left-0  z-50 text-[30px] flex justify-between items-center shadow py-1 px-2'>
                <span className='flex items-center justify-center'>
                    <GiHamburgerMenu onClick={() => setOpen(true)} className={`${open == true ? "hidden" : "flex"}`} />
                    <TiDelete onClick={() => setOpen(false)} className={`${open == true ? "flex" : "hidden"}`} />
                </span>
                <span><img width={70} src="/images/logo.jpeg" alt="" /></span>
                {/* <BsThreeDotsVertical /> */}
            </header>
            <div className="z-50 relative">
                <div className={`lg:hidden  duration-500 flex flex-col gap-4 w-full h-screen absolute bg-white p-2 ${open == true ? "left-0" : "left-[-100%]"}`}>
                    <Accordion closeSidebar={closeSidebar} setOpen={setOpen} />
                </div>
            </div>
            <div className={`fixed inset-0 top-[50px] pe-10  z-50  justify-end ${profile == true ? "flex" : "hidden"}`}>
                <div className="w-full p-3 rounded shadow lg:w-[400px] lg:h-[100px] bg-white flex flex-col gap-2" >
                    <div className="flex justify-between"><h1 className='font-bold'>Name: Anuj Saini</h1><span onClick={() => setProfile(false)}><FaDeleteLeft className='cursor-pointer' /></span></div>
                    <h1 className='font-semibold'>Professional Title: Web Developer</h1>
                </div>
            </div>
            <div className={`fixed inset-0 top-[50px] pe-10  z-50  justify-end ${profile1 == true ? "flex" : "hidden"}`}>
                <div className="w-full p-3 rounded shadow lg:w-[300px] lg:h-[50px] bg-white flex flex-col gap-2" >
                    <div className="flex justify-between"><h1 className='font-bold'>Email: anujsaini@gmail.com</h1><span onClick={() => setProfile1(false)}><FaDeleteLeft className='cursor-pointer' /></span></div>
                </div>
            </div>
        </>
    )
}

const Accordion = ({ closeSidebar, setOpen }) => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className='w-full h-screen flex'>
            <div className='w-full'>
                <div className="space-y-2 overflow-y-auto h-[85vh]">

                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("profile")}
                        >
                            <div className="flex items-center">
                                <Home size={20} className="mr-2" />
                                Dashboard
                            </div>
                            {openMenu === "profile" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "profile" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Employee Deshboard
                                </Link>
                            </span>



                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("other")}
                        >
                            <div className="flex items-center">
                                <FaUserTie size={20} className="mr-2" />
                                My Profile
                            </div>
                            {openMenu === "other" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "other" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/personalinformation" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Personal Information
                                </Link>
                            </span>



                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("stracture")}
                        >
                            <div className="flex items-center">
                                <MdAttachMoney size={20} className="mr-2" />
                                <span className="text-[12px]">CTC & Salary Stracture</span>
                            </div>
                            {openMenu === "stracture" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "stracture" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/salerybreakdown" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Salary Breakdown
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("astracture")}
                        >
                            <div className="flex items-center">
                                <MdAttachMoney size={20} className="mr-2" />

                                <span>Pay Slip</span>
                            </div>
                            {openMenu === "astracture" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "astracture" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/payslip" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Select MM/YY
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("aComplance")}
                        >
                            <div className="flex items-center">
                                <FaChartLine size={20} className="mr-2" />
                                Investment
                            </div>
                            {openMenu === "aComplance" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "aComplance" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="#" className=" w-full text-[14px] p-2 text-left" onClick={closeSidebar}>
                                    Declaration
                                </Link>
                            </span>
                            <span onClick={() => setOpen(false)} >
                                <Link to="#" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Approval Status
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("Benefits")}
                        >
                            <div className="flex items-center">
                                <FaFileInvoiceDollar size={20} className="mr-2" />
                                <span className="text-[14px]">Reimbursement</span>
                            </div>
                            {openMenu === "Benefits" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Benefits" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            {/* <span onClick={() => setActive("nine")} className={`${active == "nine" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                                   <Link to="/liccreadit" className=" w-full text-[14px] p-2 text-left" onClick={closeSidebar}>
                                                       LIC Credit Society, Tax Deductions
                                                   </Link>
                                               </span>
                                               <span onClick={() => setActive("ten")} className={`${active == "ten" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                                   <Link to="/perks" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                                       Perks & Benefits
                                                   </Link>
                                               </span> */}
                            <span onClick={() => setOpen(false)}>
                                <Link to="/investment" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Investment
                                </Link>
                            </span>
                            <span onClick={() => setOpen(false)}>
                                <Link to="/remembursement" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Reimbursements
                                </Link>
                            </span>
                        </div>
                    </div>


                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("Complance")}
                        >
                            <div className="flex items-center">
                                <FaFileInvoice size={20} className="mr-2" />
                                Tax Compliance
                            </div>
                            {openMenu === "Complance" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Complance" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/taxregion" className=" w-full text-[14px] p-2 text-left" onClick={closeSidebar}>
                                    Tax Regime Selection (old/new)
                                </Link>
                            </span>
                            <span onClick={() => setOpen(false)} >
                                <Link to="/tancomputions" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Tax Computation Sheet
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("Attendence")}
                        >
                            <div className="flex items-center">
                                <FaRegCalendarCheck size={20} className="mr-2" />
                                Attendence
                            </div>
                            {openMenu === "Attendence" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Attendence" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/attendancepage" className=" w-full text-[14px] p-2 text-left" onClick={closeSidebar}>
                                    Daily Attendence Records
                                </Link>
                            </span>

                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("Leave")}
                        >
                            <div className="flex items-center">
                                <FaRegCalendarTimes size={20} className="mr-2" />
                                Leave Management
                            </div>
                            {openMenu === "Leave" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Leave" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/addleavepage" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Apply For Leave
                                </Link>
                            </span>
                            <span onClick={() => setOpen(false)}>
                                <Link to="/othourse" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    OT Hours & Adjusment
                                </Link>
                            </span>

                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("Boarding")}
                        >
                            <div className="flex items-center">
                                <FaSignOutAlt size={20} className="mr-2" />
                                On Boarding & Exit
                            </div>
                            {openMenu === "Leave" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Boarding" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/pesignationsubmisson" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Resignation Submisson & Notice Period
                                </Link>
                            </span>

                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("Performance")}
                        >
                            <div className="flex items-center">
                                <FaRegFileAlt size={20} className="mr-2" />
                                <span className="text-[13px]">Performance & Reports</span>
                            </div>
                            {openMenu === "Performance" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Performance" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setOpen(false)}>
                                <Link to="/selfevulation" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Self Evalution & KRA
                                </Link>
                            </span>
                            <span onClick={() => setOpen(false)}>
                                <Link to="/ess" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    ESS
                                </Link>
                            </span>

                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("logout")}  >
                            <div className="flex items-center"><IoLogOut size={20} className="mr-2" />Logout</div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
