import React, { useState } from "react";
import { ChevronDown, ChevronUp, Home } from "lucide-react";
import { Link } from "react-router-dom";
import { FaChartLine, FaFileInvoice, FaFileInvoiceDollar, FaRegCalendarCheck, FaRegCalendarTimes, FaRegFileAlt, FaSignOutAlt, FaUserPlus, FaUserTie } from "react-icons/fa";
import { MdAttachMoney, MdJoinFull } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const Sidebar = ({ isOpen, closeSidebar, setSalery, salery }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [active, setActive] = useState("one");

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    return (
        <div className="bg-[#152354] scrollbar-hide">
            {/* Sidebar */}
            <div
                className={`fixed top-0 left-0 lg:w-64 w-full h-full text-[#F5E7C6] bg-[#152354] p-4 z-[9999] transition-transform duration-300 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative lg:h-screen`}
            >
                {/* logo & close button mobile only */}
                <div className="flex justify-center items-center mb-4">
                    <div className="flex items-center  gap-3">
                        <img
                            src="/images/logo.jpeg"
                            alt="Logo"
                            className="h-30"
                        /> 
                    </div>
                    <button className="lg:hidden p-2 cursor-pointer" onClick={closeSidebar}>
                        &#10006;
                    </button>
                </div>

                {/* menu item */}
                <div className="space-y-2 scrollbar-hide">

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
                            <span onClick={() => setActive("one")} className={`${active == "one" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Employee Dashboard
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
                            <span onClick={() => setActive("two")} className={`${active == "two" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
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
                                <span className="text-[12px]">CTC & Salary Structure</span>
                            </div>
                            {openMenu === "stracture" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "stracture" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setActive("five")} className={`${active == "five" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
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
                            <span onClick={() => setActive("afive")} className={`${active == "afive" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/payslip" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Select MM/YY
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("aastracture")}
                        >
                            <div className="flex items-center">
                                <FaChartLine size={20} className="mr-2" />

                                <span>Investment</span>
                            </div>
                            {openMenu === "aastracture" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "aastracture" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setActive("aafive")} className={`${active == "aafive" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/investment" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Declaration
                                </Link>
                            </span>
                            <span onClick={() => setActive("aaafive")} className={`${active == "aaafive" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/AttendenceDetailPage" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Actuals
                                </Link>
                            </span>
                            <span onClick={() => setActive("aaafour")} className={`${active === "aaafour" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""}`}>
                                <Link to="/Perks" className="w-full p-2 text-left" onClick={closeSidebar}>
                                    Regime Selection
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
                            <span onClick={() => setActive("eleven")} className={`${active == "eleven" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/BankPaymentDetail" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Travel/Transport expenses
                                </Link>
                            </span>
                            <span onClick={() => setActive("thiss")} className={`${active == "thiss" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/remembursement" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Meal / Food Reimbursement
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
                                Tax Computation
                            </div>
                            {openMenu === "Complance" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Complance" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setActive("thirteen")} className={`${active == "thirteen" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
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
                                Attendance
                            </div>
                            {openMenu === "Attendence" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Attendence" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setActive("fiften")} className={`${active == "fiften" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/attendancepage" className=" w-full text-[14px] p-2 text-left" onClick={closeSidebar}>
                                    Daily Attendance Records
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
                            <span onClick={() => setActive("sixten")} className={`${active == "sixten" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/addleavepage" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Apply For Leave
                                </Link>
                            </span>
                            <span onClick={() => setActive("seventy")} className={`${active == "seventy" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/othourse" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    OT Hours & Adjustment
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("newjoin")}
                        >
                            <div className="flex items-center">
                                <FaUserPlus size={20} className="mr-2" />
                             Policies

                            </div>
                            {openMenu === "newjoin" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "newjoin" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >

                            <span onClick={() => setActive("ninty15")} className={`${active == "ninty15" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/selfevulation" className=" w-full  p-2 text-left" onClick={closeSidebar}>
                                     Policy
                                </Link>
                            </span>
                        </div>
                    </div>

                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("newjoin")}
                        >
                            <div className="flex items-center">
                                <FaUserPlus size={20} className="mr-2" />
                                On Boarding

                            </div>
                            {openMenu === "newjoin" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "newjoin" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >

                            <span onClick={() => setActive("ninty1")} className={`${active == "ninty1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/newjoiners" className=" w-full  p-2 text-left" onClick={closeSidebar}>
                                    New Joiners
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
                                Exit
                            </div>
                            {openMenu === "Leave" ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>
                        <div
                            className={`pl- flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Boarding" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >

                            <span onClick={() => setActive("ninty")} className={`${active == "ninty" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/pesignationsubmisson" className=" w-full text-[10px] p-2 text-left" onClick={closeSidebar}>
                                    Resignation Submission
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
                            <span onClick={() => setActive("twenty")} className={`${active == "twenty" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/selfevulation" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    Self Evaluation
                                </Link>
                            </span>
                            <span onClick={() => setActive("abtwenty")} className={`${active == "abtwenty" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/kra" className=" w-full p-2 text-left" onClick={closeSidebar}>
                                    KRA
                                </Link>
                            </span>
                            <span onClick={() => setActive("atwenty")} className={`${active == "atwenty" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
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

export default Sidebar;