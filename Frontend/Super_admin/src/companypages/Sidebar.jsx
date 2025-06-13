import React, { useState } from "react";
import { AiOutlineCloud, AiOutlineFileText, AiOutlineLineChart } from "react-icons/ai";
import { BiChevronDown, BiHome } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { FaAddressBook, FaAngleDown, FaAngleUp, FaList, FaUserFriends } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { IoExit, IoHome, IoLogOut } from "react-icons/io5";
import { MdAccountBox } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar1({ closeSidebar }) {

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
    const [checkedItems, setCheckedItems] = useState({});

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };
    const toggleMenu1 = (menu1) => {
        setOpenMenu1(openMenu1 === menu1 ? null : menu1);
    };
    const toggleMenu2 = (menu2) => {
        setOpenMenu2(openMenu2 === menu2 ? null : menu2);
    };

    const handleCheckboxChange = (itemKey) => {
        setCheckedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey]
        }));
    };

    return (
        <div className="space-y-1 overflow-y-auto h-full overflow-hidden">
            <div className="overflow-hidden">
                <div className="cursor-pointer font-semibold flex items-center justify-between" onClick={() => toggleMenu2("AnujFirst")}>
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            checked={checkedItems["Company"] || false}
                            onChange={(e) => {
                                e.stopPropagation();
                                handleCheckboxChange("Company");
                            }}
                            className="mr-2"
                        />
                        <span>Company</span>
                    </div>
                    <span>{openMenu1 == "AnujFirst" ? <FaAngleDown /> : <FaAngleUp />}</span>
                </div>
                <div className={`space-y-1 overflow-y-auto ${openMenu2 == "AnujFirst" ? "h-auto" : "h-0"}`}>

                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("profile")}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checkedItems["Dashboard"] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange("Dashboard");
                                    }}
                                    className="mr-2"
                                />
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
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems["Admin Dashboard"] || false}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange("Admin Dashboard");
                                        }}
                                        className="mr-2"
                                    />
                                    <Link to="/admindashboard/" className="w-full text-left" onClick={closeSidebar}>
                                        Admin Dashboard
                                    </Link>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("profile1")}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checkedItems["List"] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange("List");
                                    }}
                                    className="mr-2"
                                />
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
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems["Company List"] || false}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange("Company List");
                                        }}
                                        className="mr-2"
                                    />
                                    <Link to="/admindashboard/aone" className="w-full text-left" onClick={closeSidebar}>
                                        Company List
                                    </Link>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("other")}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checkedItems["Add Manager"] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange("Add Manager");
                                    }}
                                    className="mr-2"
                                />
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
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems["Add Manager"] || false}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange("Add Manager");
                                        }}
                                        className="mr-2"
                                    />
                                    <Link to="/admindashboard/NewHire" className="w-full text-left" onClick={closeSidebar}>
                                        Add Manager
                                    </Link>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("others")}
                        >
                            <div className="flex gap-1 items-center">
                                <input
                                    type="checkbox"
                                    checked={checkedItems["Add/Edit Employee"] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange("Add/Edit Employee");
                                    }}
                                    className=""
                                />
                                <FaAddressBook size={20} />
                                <div className="text-[15px] whitespace-nowrap">Add/Edit Employee</div>
                            </div>
                            {openMenu === "others" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                        </button>

                        <div
                            className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-308 ease-in-out ${openMenu === "others" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <span onClick={() => setActive("twot")} className={`${active == "twot" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems["Add Employee"] || false}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange("Add Employee");
                                        }}
                                        className="mr-2"
                                    />
                                    <Link to="/admindashboard/add" className="w-full text-left" onClick={closeSidebar}>
                                        Add Employee
                                    </Link>
                                </div>
                            </span>
                            <span onClick={() => setActive("onon")} className={`${active == "onon" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems["Edit Employee"] || false}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange("Edit Employee");
                                        }}
                                        className="mr-2"
                                    />
                                    <Link to="/admindashboard/edit" className="w-full text-left" onClick={closeSidebar}>
                                        Edit Employee
                                    </Link>
                                </div>
                            </span>
                        </div>
                    </div>

                    <div className="rounded-lg">
                        <button
                            className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("management")}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checkedItems["Payroll Manage"] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange("Payroll Manage");
                                    }}
                                    className="mr-2"
                                />
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
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Employee master information"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Employee master information");
                                            }}
                                            className="mr-2"
                                        />
                                        Employee master information
                                    </div>
                                </span>
                            </Link>

                            <Link to="/admindashboard/ctcstracture" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("three")}
                                    className={`pl-5 text-left block w-full 
                                ${active === "three" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["CTC Structure"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("CTC Structure");
                                            }}
                                            className="mr-2"
                                        />
                                        CTC Structure
                                    </div>
                                </span>
                            </Link>

                            <Link to="/admindashboard/paymentsdeductions" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("four")}
                                    className={`pl-5 text-left block w-full 
                                ${active === "four" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Payments & Deductions"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Payments & Deductions");
                                            }}
                                            className="mr-2"
                                        />
                                        Payments & Deductions
                                    </div>
                                </span>
                            </Link>
                            <Link to="/admindashboard/perquisitesinvestment" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("five")}
                                    className={`pl-5 text-left block w-full 
                                ${active === "five" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Perquisites Investments"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Perquisites Investments");
                                            }}
                                            className="mr-2"
                                        />
                                        Perquisites Investments
                                    </div>
                                </span>
                            </Link>
                            <Link to="/admindashboard/taxcomputation" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("six")}
                                    className={`pl-5 text-left block w-full 
                                ${active === "six" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Tax Computation"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Tax Computation");
                                            }}
                                            className="mr-2"
                                        />
                                        Tax Computation
                                    </div>
                                </span>
                            </Link>
                            <Link to="/admindashboard/remembursementflexi" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("seven")}
                                    className={`pl-5 text-left block w-full 
                                ${active === "seven" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Reimbursement"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Reimbursement");
                                            }}
                                            className="mr-2"
                                        />
                                        Reimbursement
                                    </div>
                                </span>
                            </Link>
                            <Link to="/admindashboard/flexi" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("alag")}
                                    className={`pl-5 text-left block w-full 
                                ${active === "alag" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Flexi"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Flexi");
                                            }}
                                            className="mr-2"
                                        />
                                        Flexi
                                    </div>
                                </span>
                            </Link>
                            <Link to="/admindashboard/taxcomputationsheet" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("Deductions")}
                                    className={`pl-5 text-left block w-full 
                                ${active === "Deductions" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Tax computation sheet"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Tax computation sheet");
                                            }}
                                            className="mr-2"
                                        />
                                        Tax computation sheet
                                    </div>
                                </span>
                            </Link>
                            <Link to="/admindashboard/investments" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("Investments")}
                                    className={`pl-5 text-left block w-full text-[12px] 
                                ${active === "Investments" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Investments"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Investments");
                                            }}
                                            className="mr-2"
                                        />
                                        Investments (All sections: 80C, 80D, 24b, etc.)
                                    </div>
                                </span>
                            </Link>

                            <Link to="/admindashboard/payrollcalculation" className="w-full" onClick={closeSidebar}>
                                <span
                                    onClick={() => setActive("aalag")}
                                    className={`pl-5 text-left block w-full 
                                ${active === "aalag" ? "text-orange-600 border-l-2 border-orange-600 rounded" : ""}`}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Payroll Calculation"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Payroll Calculation");
                                            }}
                                            className="mr-2"
                                        />
                                        Payroll Calculation
                                    </div>
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
                                <input
                                    type="checkbox"
                                    checked={checkedItems["Leave Management"] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange("Leave Management");
                                    }}
                                    className="mr-2"
                                />
                                <BsCalendarCheck size={20} className="mr-2" />
                                <div className="text-[15px] whitespace-nowrap">Leave Manage.</div>
                            </div>
                            {openMenu === "leave" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                        </button>
                        <div
                            className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "leave" ? "h-auto opacity-100" : "h-0 opacity-0"
                                }`}
                        >
                            <div className="overflow-y-scroll">
                                <button
                                    className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"

                                >
                                    <div onClick={() => toggleMenu1("leave1")} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Attendance"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Attendance");
                                            }}
                                            className="mr-2"
                                        />
                                        <BsCalendarCheck size={20} className="mr-2" />
                                        Attendance
                                    </div>
                                    {openMenu1 === "leave1" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                                </button>
                                <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ${openMenu1 === "leave1" ? "h-auto opacity-100" : "h-0 opacity-0"}`}>
                                    <span onClick={() => setActive("twentyy101")} className={`${active == "twentyy101" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Shift Management"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Shift Management");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/shiftmanagement" className="w-full text-left" onClick={closeSidebar}>
                                                Shift Management
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyy10")} className={`${active == "twentyy10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Shift Assign"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Shift Assign");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/shiftassign" className="w-full text-left" onClick={closeSidebar}>
                                                Shift Assign
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyy100")} className={`${active == "twentyy100" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Attendance Assign"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Attendance Assign");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/TaxComputationAllinpage" className="w-full text-left" onClick={closeSidebar}>
                                                Attendance Assign
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyy11")} className={`${active == "twentyy11" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Working Days"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Working Days");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/workingdays" className="w-full text-left" onClick={closeSidebar}>
                                                Working Days
                                            </Link>
                                        </div>
                                    </span>

                                    <span onClick={() => setActive("twentyy13")} className={`${active == "twentyy13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Half Day Policy"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Half Day Policy");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/haffdaypolicy" className="w-full text-left" onClick={closeSidebar}>
                                                Half Day Policy
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyy14")} className={`${active == "twentyy14" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Late Arrival"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Late Arrival");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/latearrival" className="w-full text-left" onClick={closeSidebar}>
                                                Late Arrival
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyy15")} className={`${active == "twentyy15" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Company Holiday"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Company Holiday");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/companyholiday" className="w-full text-left" onClick={closeSidebar}>
                                                Company Holiday
                                            </Link>
                                        </div>
                                    </span>
                                </div>

                            </div>
                            <div>
                                <button
                                    className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                    onClick={() => toggleMenu1("leave2")}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Leave"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Leave");
                                            }}
                                            className="mr-2"
                                        />
                                        <BsCalendarCheck size={20} className="mr-2" />
                                        Leave
                                    </div>
                                    {openMenu1 === "leave2" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                                </button>
                                <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu1 === "leave2" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <span onClick={() => setActive("twentyyy4")} className={`${active == "twentyyy4" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Add Leave"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Add Leave");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/addleave" className="w-full text-left" onClick={closeSidebar}>
                                                Add Leave
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyy10")} className={`${active == "twentyy10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Leave Assign"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Leave Assign");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/AbsentTracking" className="w-full text-left" onClick={closeSidebar}>
                                                Leave Assign
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyyy5")} className={`${active == "twentyyy5" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Leave Approval"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Leave Approval");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/leaveapproval" className="w-full text-left" onClick={closeSidebar}>
                                                Leave Approval
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyyy55")} className={`${active == "twentyyy55" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Leave Balance"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Leave Balance");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/leavebalance" className="w-full text-left" onClick={closeSidebar}>
                                                Leave Balance
                                            </Link>
                                        </div>
                                    </span>
                                </div>

                            </div>
                            <div>
                                <button
                                    className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                    onClick={() => toggleMenu1("leave3")}
                                >
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={checkedItems["Overtime Tracking"] || false}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCheckboxChange("Overtime Tracking");
                                            }}
                                            className="mr-2"
                                        />
                                        <BsCalendarCheck size={20} className="mr-2" />
                                        <div className="text-[15px] whitespace-nowrap">Overtime Track.</div>
                                    </div>
                                    {openMenu1 === "leave3" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                                </button>
                                <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu1 === "leave3" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"}`}>
                                    <span onClick={() => setActive("twentyyy2")} className={`${active == "twentyyy2" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["Rule"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("Rule");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/role" className="w-full text-left" onClick={closeSidebar}>
                                                Rule
                                            </Link>
                                        </div>
                                    </span>
                                    <span onClick={() => setActive("twentyyy1")} className={`${active == "twentyyy1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                        <div className="flex items-center">
                                            <input
                                                type="checkbox"
                                                checked={checkedItems["History"] || false}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    handleCheckboxChange("History");
                                                }}
                                                className="mr-2"
                                            />
                                            <Link to="/admindashboard/histtory" className="w-full text-left" onClick={closeSidebar}>
                                                History
                                            </Link>
                                        </div>
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("Policies1")}  >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checkedItems["Policies"] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange("Policies");
                                    }}
                                    className="mr-2"
                                />
                                <FiUserPlus size={20} className="mr-2" />Policies
                            </div>
                            {openMenu === "Policies1" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                        </button>
                        <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "Policies1" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                            }`}   >
                            <span onClick={() => setActive("ten1")} className={`${active == "ten1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems["Policies"] || false}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange("Policies");
                                        }}
                                        className="mr-2"
                                    />
                                    <Link to="/admindashboard/leaves" className="w-full text-left" onClick={closeSidebar}>Policies </Link>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("boarding")}  >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={checkedItems["ON Boarding"] || false}
                                    onChange={(e) => {
                                        e.stopPropagation();
                                        handleCheckboxChange("ON Boarding");
                                    }}
                                    className="mr-2"
                                />
                                <FiUserPlus size={20} className="mr-2" />ON Boarding
                            </div>
                            {openMenu === "boarding" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                        </button>
                        <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "boarding" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                            }`}   >
                            <span onClick={() => setActive("ten")} className={`${active == "ten" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        checked={checkedItems["New Joiners Form"] || false}
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange("New Joiners Form");
                                        }}
                                        className="mr-2"
                                    />
                                    <Link to="/admindashboard/newjoinersform" className="w-full text-left" onClick={closeSidebar}>New Joiners Form</Link>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg">
                        <button className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                            onClick={() => toggleMenu("exit")}  >
                            <input type="checkbox" name="" id="" />
                            <div className="flex items-center"><FiLogOut size={20} className="mr-2" />Exit Formalities</div>
                            {openMenu === "exit" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                        </button>
                        <div className={` flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "exit" ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                            }`}   >
                            <span onClick={() => setActive("elevenw")} className={`${active == "elevenw" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <input type="checkbox" name="" id="" />
                                <Link to="/admindashboard/FlexiTab" className=" w-full pl-5 text-left" onClick={closeSidebar}>Resignation Setup</Link>
                            </span>
                            <span onClick={() => setActive("eleven")} className={`${active == "eleven" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} `}>
                                <input type="checkbox" name="" id="" />
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
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id="" />
                                <div className="flex items-center "><AiOutlineFileText size={20} />

                                </div>
                                <div>Reports</div>
                            </div>
                            {openMenu === "reports" ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />}
                        </button>
                        <div className={`flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === "reports" ? "h-auto opacity-100" : "max-h-0 opacity-0"}`}>

                            <Link to="/admindashboard/employmaster" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" name="" id="" />
                                <span onClick={() => setActive("rep1")} className={`${active === "rep1" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Employee Master Report</span>
                            </Link>
                            <Link to="/admindashboard/report/ctc-structure " className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" name="" id="" />
                                <span onClick={() => setActive("rep2")} className={`${active === "rep2" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>CTC Structure Report</span>
                            </Link>
                            <Link to="/admindashboard/report/payments-deductions" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep3")} className={`${active === "rep3" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Payments & Deductions Report</span>
                            </Link>
                            <Link to="/admindashboard/declaration" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep44")} className={`${active === "rep44" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Declaration</span>
                            </Link>
                            <Link to="/admindashboard/actuals" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep4")} className={`${active === "rep4" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Actuals</span>
                            </Link>
                            <Link to="/admindashboard/report/tax-computation" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep5")} className={`${active === "rep5" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Tax Computation Report</span>
                            </Link>
                            <Link to="/admindashboard/report/reimbursement" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep6")} className={`${active === "rep6" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Reimbursement Report</span>
                            </Link>
                            <Link to="/admindashboard/report/flexi" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep7")} className={`${active === "rep7" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Flexi Report</span>
                            </Link>
                            <Link to="/admindashboard/report/lic-deductions" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep8")} className={`${active === "rep8" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>LIC / Credit Society Deductions</span>
                            </Link>
                            <Link to="/admindashboard/report/investments" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep9")} className={`${active === "rep9" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Investments Report</span>
                            </Link>
                            <Link to="/admindashboard/report/payroll-calculation" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep10")} className={`${active === "rep10" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Payroll Calculation Report</span>
                            </Link>
                            <Link to="/admindashboard/report/attendance" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep11")} className={`${active === "rep11" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Attendance Report</span>
                            </Link>
                            <Link to="/admindashboard/report/leave" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep12")} className={`${active === "rep12" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Leave Report</span>
                            </Link>
                            <Link to="/admindashboard/report/overtime" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
                                <span onClick={() => setActive("rep13")} className={`${active === "rep13" ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5 text-left block`}>Overtime Report</span>
                            </Link>
                            <Link to="/admindashboard/individual" className="w-full flex" onClick={closeSidebar}>
                                <input type="checkbox" />
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
            <div className="flex"> <input type="checkbox" /><Link to={'/'}>Super Admin</Link></div>
            {/* <div className="flex"><input type="checkbox" /><Link to={'/factory'}>Factory</Link></div> */}

        </div>
    );
};


