import React, { useState } from "react";
import { AiOutlineCloud, AiOutlineFileText, AiOutlineLineChart } from "react-icons/ai";
import { BiChevronDown, BiHome } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { FaAddressBook, FaAngleDown, FaAngleUp, FaList, FaUserFriends } from "react-icons/fa";
import { FaChevronUp, FaLeftRight } from "react-icons/fa6";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { IoExit, IoHome, IoLogOut } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router";

export default function Sidebar({ closeSidebar }) {

    return (
        <div className="w-64 h-screen fixed p-4 flex flex-col text-[#F5E7C6] bg-[#152354]">
            <div className="mb-6 flex gap-4 justify-center items-center">
                <img
                    src="/images/logo.jpeg"
                    alt="Logo"
                    className="h-30"
                />
                {/* <h1 className="font-bold">MASU</h1> */}
            </div>

            <Accordion closeSidebar={closeSidebar} />
        </div>
    );
}

const Accordion = ({ closeSidebar }) => {
    const [openMenu1, setOpenMenu1] = useState(null);
    const [openMenu, setOpenMenu] = useState(null);
    const [openMenu2, setOpenMenu2] = useState(null);
    const [active, setActive] = useState("one");

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    const toggleMenu1 = (menu) => {
        setOpenMenu1(openMenu1 === menu ? null : menu);
    };
    const toggleMenu2 = (menu) => {
        setOpenMenu2(openMenu2 === menu ? null : menu);
    };



    return (
        <div className="space-y-1 overflow-y-auto h-full">

            <div className="space-y-2">

                <div className="overflow-hidden">
                    <div className="cursor-pointer font-semibold flex items-center justify-between" onClick={() => toggleMenu2("AnujSaini")}><span>Factory</span>{openMenu1 == "AnujSaini" ? <FaAngleDown /> : <FaAngleUp />}</div>
                    <div className={`space-y-2 ${openMenu2 == "AnujSaini" ? "h-auto" : "h-0"}`}>

                        <div className="rounded-lg">
                            <button
                                className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("profile")}
                            >
                                <div className="flex items-center">
                                    <BiHome size={20} className="mr-2" />
                                    Dashboard
                                </div>
                                {openMenu === "profile" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>

                            <div
                                className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "profile" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <span onClick={() => setActive("one")} className={`${active == "one" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Admin Dashboard
                                    </Link>
                                </span>

                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button
                                className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("profile1")}
                            >
                                <div className="flex items-center">
                                    <FaList size={20} className="mr-2" />
                                    List
                                </div>
                                {openMenu === "profile1" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>

                            <div
                                className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "profile1" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <span onClick={() => setActive("oneBy")} className={`${active == "oneBy" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/bone" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Factory List
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
                                    <FaAddressBook size={20} className="mr-2" />
                                    Add/Edit Factory
                                </div>
                                {openMenu === "other" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>

                            <div
                                className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "other" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >

                                <span onClick={() => setActive("onono")} className={`${active == "onono" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/two" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Add Factory
                                    </Link>
                                </span>
                                <span onClick={() => setActive("ononi")} className={`${active == "ononi" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/three" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Add Departments
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button
                                className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("others")}
                            >
                                <div className="flex items-center">
                                    <FaAddressBook size={20} className="mr-2" />
                                    Configure Roles
                                </div>
                                {openMenu === "others" ? <FaChevronUp size={17} /> : <BiChevronDown size={17} />}
                            </button>

                            <div
                                className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "others" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >

                                <span onClick={() => setActive("ononoo")} className={`${active == "ononoo" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/four" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Add Factory HR Executive
                                    </Link>
                                </span>
                                <span onClick={() => setActive("ononiy")} className={`${active == "ononiy" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/five" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Add Factory Manager / Plant Head
                                    </Link>
                                </span>
                                <span onClick={() => setActive("ononiu")} className={`${active == "ononiu" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/six" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Add Shift Supervisors
                                    </Link>
                                </span>
                                <span onClick={() => setActive("ononia")} className={`${active == "ononia" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/seven" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Add Maintenance Lead, QC Lead, Storekeeper, Safety Officer
                                    </Link>
                                </span>
                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button
                                className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("other1")}
                            >
                                <div className="flex items-center">
                                    <FaAddressBook size={20} className="mr-2" />
                                    Add/Edit Employee
                                </div>
                                {openMenu === "other1" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>

                            <div
                                className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "other1" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <span onClick={() => setActive("twot")} className={`${active == "twot" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/add" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Add Employee
                                    </Link>
                                </span>
                                <span onClick={() => setActive("onon")} className={`${active == "onon" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/edit" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Edit Employee
                                    </Link>
                                </span>

                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button
                                className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("management")}
                            >
                                <div className="flex items-center">
                                    <FaUserFriends size={20} className="mr-2" />
                                    Payroll Manage
                                </div>
                                {openMenu === "management" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>

                            <div
                                className={`pl- flex flex-col gap-3 rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "management" ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >

                                <Link to="/factory/personaldetailtable" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("two")}
                                        className={`pl-5 text-left block w-full 
            ${active === "two" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Employee master information
                                    </span>
                                </Link>

                                <Link to="/factory/ctcstracture" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("three")}
                                        className={`pl-5 text-left block w-full 
            ${active === "three" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        CTC Structure
                                    </span>
                                </Link>

                                <Link to="/factory/paymentsdeductions" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("four")}
                                        className={`pl-5 text-left block w-full 
            ${active === "four" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Payments & Deductions
                                    </span>
                                </Link>
                                <Link to="/factory/perquisitesinvestment" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("five")}
                                        className={`pl-5 text-left block w-full 
            ${active === "five" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Perquisites Investments
                                    </span>
                                </Link>
                                <Link to="/factory/taxcomputation" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("six")}
                                        className={`pl-5 text-left block w-full 
            ${active === "six" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Tax Computation
                                    </span>
                                </Link>
                                <Link to="/factory/remembursementflexi" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("seven")}
                                        className={`pl-5 text-left block w-full 
            ${active === "seven" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Reimbursement
                                    </span>
                                </Link>
                                <Link to="/factory/flexi" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("alag")}
                                        className={`pl-5 text-left block w-full 
            ${active === "alag" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Flexi
                                    </span>
                                </Link>
                                <Link to="/factory/taxcomputationsheet" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("Deductions")}
                                        className={`pl-5 text-left block w-full 
            ${active === "Deductions" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Tax computation sheet
                                    </span>
                                </Link>
                                <Link to="/factory/investments" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("Investments")}
                                        className={`pl-5 text-left block w-full text-[12px] 
            ${active === "Investments" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Investments (All sections: 80C, 80D, 24b, etc.)
                                    </span>
                                </Link>

                                <Link to="/factory/payrollcalculation" className="w-full" onClick={closeSidebar}>
                                    <span
                                        onClick={() => setActive("aalag")}
                                        className={`pl-5 text-left block w-full 
            ${active === "aalag" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                    >
                                        Payroll Calculation
                                    </span>
                                </Link>


                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button
                                className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("leave")}
                            >
                                <div className="flex items-center">
                                    <BsCalendarCheck size={20} className="mr-2" />

                                    Leave Management
                                </div>
                                {openMenu === "leave" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>
                            <div
                                className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "leave" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="overflow-y-scroll">
                                    <button
                                        className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                        onClick={() => toggleMenu1("leave1")}
                                    >
                                        <div className="flex items-center">
                                            <BsCalendarCheck size={20} className="mr-2" />

                                            Attendance
                                        </div>
                                        {openMenu1 === "leave1" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                                    </button>
                                    <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu1 === "leave1" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"}`}>
                                        <span onClick={() => setActive("twentyy100")} className={`${active == "twentyy100" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/shiftmanagement" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Shift Management
                                            </Link>
                                        </span>
                                        <span onClick={() => setActive("twentyy1009")} className={`${active == "twentyy1009" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/one" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Shift Assign
                                            </Link>
                                        </span>
                                        <span onClick={() => setActive("twentyy1010")} className={`${active == "twentyy1010" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/registrationtab" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Attendance Assign
                                            </Link>
                                        </span>

                                        <span onClick={() => setActive("twentyy11")} className={`${active == "twentyy11" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/workingdays" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Working Days
                                            </Link>
                                        </span>

                                        <span onClick={() => setActive("twentyy13")} className={`${active == "twentyy13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/haffdaypolicy" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Half Day Policy
                                            </Link>
                                        </span>
                                        <span onClick={() => setActive("twentyy14")} className={`${active == "twentyy14" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/latearrival" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Late Arrival
                                            </Link>
                                        </span>
                                        <span onClick={() => setActive("twentyy15")} className={`${active == "twentyy15" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/companyholiday" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Company Holiday
                                            </Link>
                                        </span>
                                    </div>

                                </div>
                                <div>
                                    <button
                                        className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                        onClick={() => toggleMenu1("leave2")}
                                    >
                                        <div className="flex items-center">
                                            <BsCalendarCheck size={20} className="mr-2" />

                                            Leave
                                        </div>
                                        {openMenu1 === "leave2" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                                    </button>
                                    <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu1 === "leave2" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"}`}>
                                        <span onClick={() => setActive("twentyyy4")} className={`${active == "twentyyy4" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/addleave" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Add Leave
                                            </Link>
                                        </span>
                                        <span onClick={() => setActive("twentyyy41")} className={`${active == "twentyyy41" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/ten" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Leave Assign
                                            </Link>
                                        </span>
                                        <span onClick={() => setActive("twentyyy5")} className={`${active == "twentyyy5" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/leaveapproval" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Leave Approval
                                            </Link>
                                        </span>
                                        <span onClick={() => setActive("twentyyy55")} className={`${active == "twentyyy55" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/leavebalance" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Leave Balance
                                            </Link>
                                        </span>
                                    </div>

                                </div>
                                <div>
                                    <button
                                        className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                        onClick={() => toggleMenu1("leave3")}
                                    >
                                        <div className="flex items-center">
                                            <BsCalendarCheck size={20} className="mr-2" />

                                            Overtime Tracking
                                        </div>
                                        {openMenu1 === "leave3" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                                    </button>
                                    <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu1 === "leave3" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"}`}>
                                        <span onClick={() => setActive("twentyyy2")} className={`${active == "twentyyy2" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/role" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                Rule
                                            </Link>
                                        </span>
                                        <span onClick={() => setActive("twentyyy1")} className={`${active == "twentyyy1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                            <Link to="/factory/histtory" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                                History
                                            </Link>
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("Policies1")}  >
                                <div className="flex items-center"><FiUserPlus size={20} className="mr-2" />Policies </div>
                                {openMenu === "Policies1" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>
                            <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Policies1" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}   >
                                <span onClick={() => setActive("ten1")} className={`${active == "ten1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/leaves" className=" w-full pl-5 text-left" onClick={closeSidebar}>Policies </Link>
                                </span>
                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("boarding")}  >
                                <div className="flex items-center"><FiUserPlus size={20} className="mr-2" />ON Boarding</div>
                                {openMenu === "boarding" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>
                            <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "boarding" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}   >
                                <span onClick={() => setActive("ten")} className={`${active == "ten" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/newjoinersform" className=" w-full pl-5 text-left" onClick={closeSidebar}>New Joiners Form</Link>
                                </span>
                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("exit")}  >
                                <div className="flex items-center"><FiLogOut size={20} className="mr-2" />Exit Formalities</div>
                                {openMenu === "exit" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>
                            <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "exit" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}   >
                                <span onClick={() => setActive("eleven")} className={`${active == "eleven" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/remembursementtabpage" className=" w-full pl-5 text-left" onClick={closeSidebar}>Resignation Set-Up</Link>
                                </span>
                                <span onClick={() => setActive("elevend")} className={`${active == "elevend" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/registrationman" className=" w-full pl-5 text-left" onClick={closeSidebar}>Resignation Management</Link>
                                </span>
                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("performence")}  >
                                <div className="flex items-center"><AiOutlineLineChart size={20} className="mr-2" />Performance</div>
                                {openMenu === "performence" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>
                            <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "performence" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}   >
                                <span onClick={() => setActive("twel")} className={`${active == "twel" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/factory/selfEvalution" className=" w-full pl-5 text-left" onClick={closeSidebar}>Self Evalution (KRA)</Link>
                                </span>
                            </div>
                        </div>
                        <div className="rounded-lg">
                            <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("reports")}  >
                                <div className="flex items-center "><AiOutlineFileText size={20} className="mr-2" />Reports</div>
                                {openMenu === "reports" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                            </button>

                        </div>
                        <div className={`flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "reports" ? "h-auto opacity-100" : "max-h-0 opacity-0"}`}>
                            <Link to="/factory/employmaster" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep1")} className={`${active === "rep1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Employee Master Report</span>
                            </Link>
                            <Link to="/factory/ctc-structure" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep2")} className={`${active === "rep2" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>CTC Structure Report</span>
                            </Link>
                            <Link to="/factory/payments-deductions" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep3")} className={`${active === "rep3" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Payments & Deductions Report</span>
                            </Link>
                            <Link to="/factory/declaration" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep44")} className={`${active === "rep44" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Declaration</span>
                            </Link>
                            <Link to="/factory/actuals" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep4")} className={`${active === "rep4" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Actuals</span>
                            </Link>
                            <Link to="/factory/tax-computation" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep5")} className={`${active === "rep5" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Tax Computation Report</span>
                            </Link>
                            <Link to="/factory/reimbursement" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep6")} className={`${active === "rep6" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Reimbursement Report</span>
                            </Link>
                            <Link to="/factory/flexi" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep7")} className={`${active === "rep7" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Flexi Report</span>
                            </Link>
                            <Link to="/factory/lic-deductions" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep8")} className={`${active === "rep8" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>LIC / Credit Society Deductions</span>
                            </Link>
                            <Link to="/factory/investments" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep9")} className={`${active === "rep9" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Investments Report</span>
                            </Link>
                            <Link to="/factory/payroll-calculation" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep10")} className={`${active === "rep10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Payroll Calculation Report</span>
                            </Link>
                            <Link to="/factory/attendance" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep11")} className={`${active === "rep11" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Attendance Report</span>
                            </Link>
                            <Link to="/factory/leave" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep12")} className={`${active === "rep12" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Leave Report</span>
                            </Link>
                            <Link to="/factory/overtime" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep13")} className={`${active === "rep13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Overtime Report</span>
                            </Link>
                            <Link to="/factory/individual" className="w-full" onClick={closeSidebar}>
                                <span onClick={() => setActive("rep14")} className={`${active === "rep13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Individual</span>
                            </Link>
                        </div>
                        <div className="rounded-lg">
                            <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu("logout")}  >
                                <div className="flex items-center"><IoLogOut size={20} className="mr-2" />Logout</div>
                            </button>
                        </div>
                    </div>
                </div>
                <div><Link to={'/'}>Super Admin</Link></div>
                <div><Link to={'/admindashboard'}>Company</Link></div>
            </div>

        </div>
    );
};


