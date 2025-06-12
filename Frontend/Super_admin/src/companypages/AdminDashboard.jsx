import React, { useState } from "react";
import { AiOutlineCloud, AiOutlineFileText, AiOutlineLineChart } from "react-icons/ai";
import { BiChevronDown, BiHome } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { FaAddressBook, FaUserFriends } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { IoExit, IoHome, IoLogOut } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router";

export default function AdminDashboard({ closeSidebar }) {

    return (
        <div className="w-full h-full p-4 flex flex-col ">

            <Accordion closeSidebar={closeSidebar} />
        </div>
    );
}

const Accordion = ({ closeSidebar }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [openMenu1, setOpenMenu1] = useState(null);
    const [active, setActive] = useState("one");

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    const toggleMenu1 = (menu) => {
        setOpenMenu1(openMenu1 === menu ? null : menu);
    };



    return (
        <div className="h-screen w-full">
            <div className="w-full   grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">

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
                            <Link to="/admindashboard/" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                Admin Dashboard
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
                            Add/Edit Employee
                        </div>
                        {openMenu === "other" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                    </button>

                    <div
                        className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-308 ease-in-out ${openMenu === "other" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <span onClick={() => setActive("twot")} className={`${active == "twot" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                            <Link to="/admindashboard/add" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                Add Employee
                            </Link>
                        </span>
                        <span onClick={() => setActive("onon")} className={`${active == "onon" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                            <Link to="/admindashboard/edit" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                Edit Employee
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
                            Add Manager
                        </div>
                        {openMenu === "other" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                    </button>

                    <div
                        className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "other" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <span onClick={() => setActive("twott")} className={`${active == "twott" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                            <Link to="/admindashboard/NewHire" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                Add Manager
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

                        <Link to="/admindashboard/personaldetailtable" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("two")}
                                className={`pl-5 text-left block w-full 
            ${active === "two" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                Employee master information
                            </span>
                        </Link>

                        <Link to="/admindashboard/ctcstracture" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("three")}
                                className={`pl-5 text-left block w-full 
            ${active === "three" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                CTC Structure
                            </span>
                        </Link>

                        <Link to="/admindashboard/paymentsdeductions" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("four")}
                                className={`pl-5 text-left block w-full 
            ${active === "four" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                Payments & Deductions
                            </span>
                        </Link>
                        <Link to="/admindashboard/perquisitesinvestment" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("five")}
                                className={`pl-5 text-left block w-full 
            ${active === "five" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                Perquisites Investments
                            </span>
                        </Link>
                        <Link to="/admindashboard/taxcomputation" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("six")}
                                className={`pl-5 text-left block w-full 
            ${active === "six" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                Tax Computation
                            </span>
                        </Link>
                        <Link to="/admindashboard/remembursementflexi" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("seven")}
                                className={`pl-5 text-left block w-full 
            ${active === "seven" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                Reimbursement
                            </span>
                        </Link>
                        <Link to="/admindashboard/flexi" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("alag")}
                                className={`pl-5 text-left block w-full 
            ${active === "alag" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                Flexi
                            </span>
                        </Link>
                        <Link to="/admindashboard/taxcomputationsheet" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("Deductions")}
                                className={`pl-5 text-left block w-full 
            ${active === "Deductions" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                Tax computation sheet
                            </span>
                        </Link>
                        <Link to="/admindashboard/investments" className="w-full" onClick={closeSidebar}>
                            <span
                                onClick={() => setActive("Investments")}
                                className={`pl-5 text-left block w-full text-[12px] 
            ${active === "Investments" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                            >
                                Investments (All sections: 80C, 80D, 24b, etc.)
                            </span>
                        </Link>

                        <Link to="/admindashboard/payrollcalculation" className="w-full" onClick={closeSidebar}>
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
                                <span onClick={() => setActive("twentyy101")} className={`${active == "twentyy101" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/shiftmanagement" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Shift Management
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyy10")} className={`${active == "twentyy10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/shiftassign" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Shift Assign
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyy100")} className={`${active == "twentyy100" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/TaxComputationAllinpage" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Attendance Assign
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyy11")} className={`${active == "twentyy11" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/workingdays" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Working Days
                                    </Link>
                                </span>

                                <span onClick={() => setActive("twentyy13")} className={`${active == "twentyy13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/haffdaypolicy" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Half Day Policy
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyy14")} className={`${active == "twentyy14" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/latearrival" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Late Arrival
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyy15")} className={`${active == "twentyy15" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/companyholiday" className=" w-full pl-5 text-left" onClick={closeSidebar}>
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
                                    <Link to="/admindashboard/addleave" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Add Leave
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyy10")} className={`${active == "twentyy10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/AbsentTracking" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Leave Assign
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyyy5")} className={`${active == "twentyyy5" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/leaveapproval" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Leave Approval
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyyy55")} className={`${active == "twentyyy55" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/leavebalance" className=" w-full pl-5 text-left" onClick={closeSidebar}>
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
                                    <Link to="/admindashboard/role" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                        Rule
                                    </Link>
                                </span>
                                <span onClick={() => setActive("twentyyy1")} className={`${active == "twentyyy1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                    <Link to="/admindashboard/histtory" className=" w-full pl-5 text-left" onClick={closeSidebar}>
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
                            <Link to="/admindashboard/leaves" className=" w-full pl-5 text-left" onClick={closeSidebar}>Policies </Link>
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
                            <Link to="/admindashboard/newjoinersform" className=" w-full pl-5 text-left" onClick={closeSidebar}>New Joiners Form</Link>
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
                        <span onClick={() => setActive("elevenw")} className={`${active == "elevenw" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                            <Link to="/admindashboard/FlexiTab" className=" w-full pl-5 text-left" onClick={closeSidebar}>Resignation Setup</Link>
                        </span>
                        <span onClick={() => setActive("eleven")} className={`${active == "eleven" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                            <Link to="/admindashboard/registrationman" className=" w-full pl-5 text-left" onClick={closeSidebar}>Resignation Approval</Link>
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
                            <Link to="/admindashboard/selfEvalution" className=" w-full pl-5 text-left" onClick={closeSidebar}>Self Evalution (KRA)</Link>
                        </span>
                    </div>
                </div>
                <div className="rounded-lg">
                    <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                        onClick={() => toggleMenu("reports")}  >
                        <div className="flex items-center "><AiOutlineFileText size={20} className="mr-2" />Reports</div>
                        {openMenu === "reports" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                    </button>
                    <div className={`flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "reports" ? "h-auto opacity-100" : "max-h-0 opacity-0"}`}>
                        <Link to="/admindashboard/employmaster" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep1")} className={`${active === "rep1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Employee Master Report</span>
                        </Link>
                        <Link to="/admindashboard/report/ctc-structure" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep2")} className={`${active === "rep2" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>CTC Structure Report</span>
                        </Link>
                        <Link to="/admindashboard/report/payments-deductions" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep3")} className={`${active === "rep3" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Payments & Deductions Report</span>
                        </Link>
                        <Link to="/admindashboard/declaration" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep44")} className={`${active === "rep44" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Declaration</span>
                        </Link>
                        <Link to="/admindashboard/actuals" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep4")} className={`${active === "rep4" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Actuals</span>
                        </Link>
                        <Link to="/admindashboard/report/tax-computation" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep5")} className={`${active === "rep5" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Tax Computation Report</span>
                        </Link>
                        <Link to="/admindashboard/report/reimbursement" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep6")} className={`${active === "rep6" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Reimbursement Report</span>
                        </Link>
                        <Link to="/admindashboard/report/flexi" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep7")} className={`${active === "rep7" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Flexi Report</span>
                        </Link>
                        <Link to="/admindashboard/report/lic-deductions" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep8")} className={`${active === "rep8" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>LIC / Credit Society Deductions</span>
                        </Link>
                        <Link to="/admindashboard/report/investments" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep9")} className={`${active === "rep9" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Investments Report</span>
                        </Link>
                        <Link to="/admindashboard/report/payroll-calculation" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep10")} className={`${active === "rep10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Payroll Calculation Report</span>
                        </Link>
                        <Link to="/admindashboard/report/attendance" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep11")} className={`${active === "rep11" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Attendance Report</span>
                        </Link>
                        <Link to="/admindashboard/report/leave" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep12")} className={`${active === "rep12" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Leave Report</span>
                        </Link>
                        <Link to="/admindashboard/report/overtime" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep13")} className={`${active === "rep13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Overtime Report</span>
                        </Link>
                        <Link to="/admindashboard/individual" className="w-full" onClick={closeSidebar}>
                            <span onClick={() => setActive("rep14")} className={`${active === "rep13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Individual</span>
                        </Link>
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
    );
};


