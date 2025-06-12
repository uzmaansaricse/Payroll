import React, { useState } from 'react'
import { FaAddressBook, FaLongArrowAltLeft, FaUserFriends } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { LuLayoutGrid } from "react-icons/lu";
import { TbSettingsCog } from "react-icons/tb";
import { MdAccountBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuGrid2X2Plus } from "react-icons/lu";
import { AiFillMessage, AiOutlineCloud, AiOutlineFileText, AiOutlineLineChart } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { BsCalendarCheck, BsThreeDotsVertical } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";
import { IoHome, IoLogOut } from 'react-icons/io5';
import { Link } from 'react-router';
import { BiChevronDown, BiHome } from 'react-icons/bi';
import { FaChevronUp } from 'react-icons/fa6';
import { FiLogOut, FiUserPlus } from 'react-icons/fi';



export default function Header({ closeSidebar }) {
    const [open, setOpen] = useState(false);
    return (
        <>
            {/* {//lg:screen k liya } */}
            <header className='shadow py-2 px-3 hidden lg:flex bg-white w-full sticky top-0 left-0  z-40'>
                <div className='flex items-center gap-3 w-full'>
                    <span><a href={"/"}><FaLongArrowAltLeft /></a></span>
                    <span className=' flex p-1 items-center justify-center rounded gap-2'>
                        <span><IoMdSearch /></span>
                        <span className='w-full flex items-center'>
                            <input type="text" className='p-1 outline-none bg-transparent' placeholder='Search' />
                            <span className='ms-[150px] font-semibold text-[25px]'>Admin Panel</span>
                        </span>

                    </span>
                </div>
                {/* <div className='flex gap-3 items-center'>
                    <MdOutlineEmail />
                    <img className='rounded-full' width={30} height={30} src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-12.jpg" alt="" />
                </div> */}
            </header>
            {/* {//lg: sa nicha} */}
            <header className='lg:hidden  text-[#F5E7C6] bg-[#0a1f44] sticky top-0 left-0  z-50 text-[30px] flex justify-between items-center shadow py-1 px-2'>
                <span className='flex items-center justify-center'>
                    <TiThMenuOutline onClick={() => setOpen(true)} className={`${open == true ? "hidden" : "flex"}`} />
                    <MdDeleteForever onClick={() => setOpen(false)} className={`${open == true ? "flex" : "hidden"}`} />
                </span>
                <span><img width={70} src="https://masu-consultancy.vercel.app/images/payroll-logo.jpeg" alt="" /></span>
                <BsThreeDotsVertical />
            </header>
            <div className="relative z-50">
                <div className={`lg:hidden absolute top-0 left-0 duration-500 flex flex-col gap-4 w-full h-auto bg-white p-2 ${open == true ? "translate-x-0" : "-translate-x-full"}`}>
                    <Accordion setOpen={setOpen} closeSidebar={closeSidebar} />
                </div>
            </div>

        </>
    )
}

const Accordion = ({ closeSidebar, setOpen }) => {
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
        <div className="space-y-1 overflow-y-auto h-full">

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
                        <Link to="/" className=" w-full pl-5 text-left" onClick={closeSidebar}>
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
                    className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "other" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <span onClick={() => setActive("twot")} className={`${active == "twot" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                        <Link to="/add" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                            Add Employee
                        </Link>
                    </span>
                    <span onClick={() => setActive("onon")} className={`${active == "onon" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                        <Link to="/edit" className=" w-full pl-5 text-left" onClick={closeSidebar}>
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

                    <Link to="/personaldetailtable" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("two")}
                            className={`pl-5 text-left block w-full 
                        ${active === "two" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            Employee master information
                        </span>
                    </Link>

                    <Link to="/ctcstracture" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("three")}
                            className={`pl-5 text-left block w-full 
                        ${active === "three" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            CTC Structure
                        </span>
                    </Link>

                    <Link to="/paymentsdeductions" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("four")}
                            className={`pl-5 text-left block w-full 
                        ${active === "four" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            Payments & Deductions
                        </span>
                    </Link>
                    <Link to="/perquisitesinvestment" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("five")}
                            className={`pl-5 text-left block w-full 
                        ${active === "five" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            Perquisites Investments
                        </span>
                    </Link>
                    <Link to="/taxcomputation" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("six")}
                            className={`pl-5 text-left block w-full 
                        ${active === "six" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            Tax Computation
                        </span>
                    </Link>
                    <Link to="/remembursementflexi" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("seven")}
                            className={`pl-5 text-left block w-full 
                        ${active === "seven" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            Reimbursement
                        </span>
                    </Link>
                    <Link to="/flexi" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("alag")}
                            className={`pl-5 text-left block w-full 
                        ${active === "alag" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            Flexi
                        </span>
                    </Link>
                    <Link to="/taxcomputationsheet" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("Deductions")}
                            className={`pl-5 text-left block w-full 
                        ${active === "Deductions" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            Tax computation sheet
                        </span>
                    </Link>
                    <Link to="/investments" className="w-full" onClick={closeSidebar}>
                        <span
                            onClick={() => setActive("Investments")}
                            className={`pl-5 text-left block w-full text-[12px] 
                        ${active === "Investments" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                        >
                            Investments (All sections: 80C, 80D, 24b, etc.)
                        </span>
                    </Link>

                    <Link to="/payrollcalculation" className="w-full" onClick={closeSidebar}>
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

                                Attendence
                            </div>
                            {openMenu1 === "leave1" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                        </button>
                        <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu1 === "leave1" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"}`}>
                            <span onClick={() => setActive("twentyy10")} className={`${active == "twentyy10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/shiftmanagement" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Shift Management
                                </Link>
                            </span>
                            <span onClick={() => setActive("twentyy11")} className={`${active == "twentyy11" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/workingdays" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Working Days
                                </Link>
                            </span>
                            <span onClick={() => setActive("twentyy12")} className={`${active == "twentyy12" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/overtimeleavemanagement" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Absence Tracking
                                </Link>
                            </span>
                            <span onClick={() => setActive("twentyy13")} className={`${active == "twentyy13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/haffdaypolicy" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Half Day Policy
                                </Link>
                            </span>
                            <span onClick={() => setActive("twentyy14")} className={`${active == "twentyy14" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/latearrival" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Late Arrival
                                </Link>
                            </span>
                            <span onClick={() => setActive("twentyy15")} className={`${active == "twentyy15" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/companyholiday" className=" w-full pl-5 text-left" onClick={closeSidebar}>
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
                                <Link to="/addleave" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Add Leave
                                </Link>
                            </span>
                            <span onClick={() => setActive("twentyyy5")} className={`${active == "twentyyy5" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/leaveapproval" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Leave Approval
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
                                <Link to="/role" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Rule
                                </Link>
                            </span>
                            <span onClick={() => setActive("twentyyy1")} className={`${active == "twentyyy1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <Link to="/histtory" className=" w-full pl-5 text-left" onClick={closeSidebar}>
                                    Histtory
                                </Link>
                            </span>
                        </div>

                    </div>

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
                        <Link to="/newjoinersform" className=" w-full pl-5 text-left" onClick={closeSidebar}>New Joiners Form</Link>
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
                        <Link to="/registrationman" className=" w-full pl-5 text-left" onClick={closeSidebar}>Resignation Management</Link>
                    </span>
                </div>
            </div>
            <div className="rounded-lg">
                <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                    onClick={() => toggleMenu("performence")}  >
                    <div className="flex items-center"><AiOutlineLineChart size={20} className="mr-2" />Performence</div>
                    {openMenu === "performence" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                </button>
                <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "performence" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                    }`}   >
                    <span onClick={() => setActive("twel")} className={`${active == "twel" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                        <Link to="/selfEvalution" className=" w-full pl-5 text-left" onClick={closeSidebar}>Self Evalution (KRA)</Link>
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
                    <Link to="/employmaster" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep1")} className={`${active === "rep1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Employee Master Report</span>
                    </Link>
                    <Link to="/report/ctc-structure" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep2")} className={`${active === "rep2" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>CTC Structure Report</span>
                    </Link>
                    <Link to="/report/payments-deductions" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep3")} className={`${active === "rep3" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Payments & Deductions Report</span>
                    </Link>
                    <Link to="/report/perquisites-investments" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep4")} className={`${active === "rep4" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Perquisites Investments Report</span>
                    </Link>
                    <Link to="/report/tax-computation" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep5")} className={`${active === "rep5" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Tax Computation Report</span>
                    </Link>
                    <Link to="/report/reimbursement" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep6")} className={`${active === "rep6" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Reimbursement Report</span>
                    </Link>
                    <Link to="/report/flexi" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep7")} className={`${active === "rep7" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Flexi Report</span>
                    </Link>
                    <Link to="/report/lic-deductions" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep8")} className={`${active === "rep8" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>LIC / Credit Society Deductions</span>
                    </Link>
                    <Link to="/report/investments" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep9")} className={`${active === "rep9" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Investments Report</span>
                    </Link>
                    <Link to="/report/payroll-calculation" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep10")} className={`${active === "rep10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Payroll Calculation Report</span>
                    </Link>
                    <Link to="/report/attendance" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep11")} className={`${active === "rep11" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Attendance Report</span>
                    </Link>
                    <Link to="/report/leave" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep12")} className={`${active === "rep12" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Leave Report</span>
                    </Link>
                    <Link to="/report/overtime" className="w-full" onClick={closeSidebar}>
                        <span onClick={() => setActive("rep13")} className={`${active === "rep13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Overtime Report</span>
                    </Link>
                    <Link to="/individual" className="w-full" onClick={closeSidebar}>
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
    );
};
