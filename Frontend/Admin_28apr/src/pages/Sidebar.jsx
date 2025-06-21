import React, { useState } from "react";
import { BiHome, BiChevronDown } from "react-icons/bi";
import { FiUserPlus } from "react-icons/fi";
import { FaAddressBook, FaChevronUp, FaUserFriends } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsCalendarCheck } from "react-icons/bs";
import { AiOutlineLineChart, AiOutlineFileText } from "react-icons/ai";

const Sidebar = ({ closeSidebar }) => {
  const { permissions } = useSelector((state) => state.user);
  console.log("Sidebar permissions:", permissions);

  return (
    <div className="w-64 h-screen fixed p-4 flex flex-col text-[#F5E7C6] bg-[#152354]">
      <div className="mb-6 flex gap-4 justify-center items-center">
        <img src="/images/logo.jpeg" alt="Logo" className="h-20" />
      </div>
      <AccordionMenu closeSidebar={closeSidebar} permissions={permissions} />
    </div>
  );
};

const AccordionMenu = ({ closeSidebar, permissions = [] }) => {
  const [openMenus, setOpenMenus] = useState({});
  const [activeItem, setActiveItem] = useState("");

  const toggleMenu = (menuId) => {
    setOpenMenus((prev) => ({ ...prev, [menuId]: !prev[menuId] }));
  };

  const hasPermission = (requiredPermission) => {
    if (requiredPermission === null || requiredPermission === undefined) return false;
    return permissions.includes(requiredPermission);
  };

  
const sidebarConfig = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: <BiHome size={20} className="mr-2" />,
    permission: "Dashboard",
    items: [
      { id: "admin-dashboard", title: "Admin Dashboard", path: "/", permission: null },
    ],
  },
  {
    id: "add-manager",
    title: "Add Manager",
    icon: <FaAddressBook size={20} className="mr-2" />,
    permission: "Add Manager",
    items: [
      { id: "add-manager", title: "Add Manager", path: "/NewHire", permission: "Add Manager" },

    ],
  },
  {
    id: "employee",
    title: "Add/Edit Employee",
    icon: <FaAddressBook size={20} className="mr-2" />,
    permission: "Add/Edit Employee",
    items: [
      { id: "add-employee", title: "Add Employee", path: "/add", permission: "Add Employee" },
      { id: "edit-employee", title: "Edit Employee", path: "/edit", permission: "Edit Employee" },
    ],
  },
  {
    id: "payroll",
    title: "Payroll Manage",
    icon: <FaUserFriends size={20} className="mr-2" />,
    permission: "Payroll Manage",
    items: [
      { id: "employee-master", title: "Employee master information", path: "/personaldetailtable", permission: "Employee master information" },
      { id: "ctc-structure", title: "CTC Structure", path: "/ctcstracture", permission: "CTC Structure" },
      { id: "payments-deductions", title: "Payments & Deductions", path: "/paymentsdeductions", permission: "Payments & Deductions" },
      { id: "perquisites", title: "Perquisites Investments", path: "/perquisitesinvestment", permission: "Perquisites Investments" },
      { id: "tax-computation", title: "Tax Computation", path: "/taxcomputation", permission: "Tax Computation" },
      { id: "reimbursement", title: "Reimbursement", path: "/remembursementflexi", permission: "Reimbursement" },
      { id: "flexi", title: "Flexi", path: "/flexi", permission: "Flexi" },
      { id: "tax-sheet", title: "Tax computation sheet", path: "/taxcomputationsheet", permission: "Tax computation sheet" },
      { id: "investments", title: "Investments (All sections: 80C, 80D, 24b, etc.)", path: "/investments", permission: "Investments" },
      { id: "payroll-calc", title: "Payroll Calculation", path: "/payrollcalculation", permission: "Payroll Calculation" },
    ],
  },
  {
    id: "attendance",
    title: "Leave Management",
    icon: <BsCalendarCheck size={20} className="mr-2" />,
    permission: "Leave Management",
    items: [
      { id: "shift", title: "Shift Management", path: "/shiftmanagement", permission: "Shift Management" },
      { id: "shift-assign", title: "Shift Assign", path: "/shiftassign", permission: "Shift Assign" },
      { id: "attendance-assign", title: "Attendance Assign", path: "/TaxComputationAllinpage", permission: "Attendance Assign" },
      { id: "working", title: "Working Days", path: "/workingdays", permission: "Working Days" },
      { id: "half-day", title: "Half Day Policy", path: "/haffdaypolicy", permission: "Half Day Policy" },
      { id: "late-arrival", title: "Late Arrival", path: "/latearrival", permission: "Late Arrival" },
      { id: "holiday", title: "Company Holiday", path: "/companyholiday", permission: "Company Holiday" },
      { id: "add-leave", title: "Add Leave", path: "/addleave", permission: "Add Leave" },
      { id: "leave-assign", title: "Leave Assign", path: "/AbsentTracking", permission: "Leave Assign" },
      { id: "leave-approval", title: "Leave Approval", path: "/leaveapproval", permission: "Leave Approval" },
      { id: "leave-balance", title: "Leave Balance", path: "/leavebalance", permission: "Leave Balance" },
      { id: "overtime-rule", title: "Rule", path: "/role", permission: "Rule" },
      { id: "overtime-history", title: "History", path: "/histtory", permission: "History" },
    ],
  },
  {
    id: "policies",
    title: "Policies",
    icon: <FiUserPlus size={20} className="mr-2" />,
    permission: "Policies",
    items: [
      { id: "policy-page", title: "Policies", path: "/leaves", permission: "Policies" },
    ],
  },
  {
    id: "onboarding",
    title: "ON Boarding",
    icon: <FiUserPlus size={20} className="mr-2" />,
    permission: "ON Boarding",
    items: [
      { id: "new-joiner", title: "New Joiners Form", path: "/newjoinersform", permission: "New Joiners Form" },
    ],
  },
  {
    id: "exit",
    title: "Exit Formalities",
    icon: <IoLogOut size={20} className="mr-2" />,
    permission: "Exit Formalities",
    items: [
      { id: "resignation", title: "Resignation Setup", path: "/FlexiTab", permission: "Flexi" },
      { id: "resignation", title: "Resignation Approval", path: "/registrationman", permission: "Resignation Approval" }
    ],
  },
  {
    id: "performance",
    title: "Performance",
    icon: <AiOutlineLineChart size={20} className="mr-2" />,
    permission: "Performance",
    items: [
      { id: "self-eval", title: "Self Evalution (KRA)", path: "/selfEvalution", permission: "Self Evalution (KRA)" },
    ],
  },
  {
    id: "reports",
    title: "Reports",
    icon: <AiOutlineFileText size={20} className="mr-2" />,
    permission: "Reports",
    items: [
      { id: "rep1", title: "Employee Master Report", path: "/employmaster", permission: "Employee Master Report" },
      { id: "rep2", title: "CTC Structure Report", path: "/report/ctc-structure", permission: "CTC Structure Report" },
      { id: "rep3", title: "Payments & Deductions Report", path: "/report/payments-deductions", permission: "Payments & Deductions Report" },
      { id: "rep4", title: "Declaration", path: "/declaration", permission: "Declaration" },
      { id: "rep5", title: "Actuals", path: "/actuals", permission: "Actuals" },
      { id: "rep6", title: "Tax Computation Report", path: "/report/tax-computation", permission: "Tax Computation Report" },
      { id: "rep7", title: "Reimbursement Report", path: "/report/reimbursement", permission: "Reimbursement Report" },
      { id: "rep8", title: "Flexi Report", path: "/report/flexi", permission: "Flexi Report" },
      { id: "rep9", title: "LIC / Credit Society Deductions", path: "/report/lic-deductions", permission: "LIC / Credit Society Deductions" },
      { id: "rep10", title: "Investments Report", path: "/report/investments", permission: "Investments Report" },
      { id: "rep11", title: "Payroll Calculation Report", path: "/report/payroll-calculation", permission: "Payroll Calculation Report" },
      { id: "rep12", title: "Attendance Report", path: "/report/attendance", permission: "Attendance Report" },
      { id: "rep13", title: "Leave Report", path: "/report/leave", permission: "Leave Report" },
      { id: "rep14", title: "Overtime Report", path: "/report/overtime", permission: "Overtime Report" },
      { id: "rep15", title: "Individual", path: "/individual", permission: "Individual" },
    ],
  },
  {
    id: "logout",
    title: "Logout",
    icon: <IoLogOut size={20} className="mr-2" />,
    permission: null,
    items: [],
  },
];

//   const sidebarConfig = [
//     {
//       id: "dashboard",
//       title: "Dashboard",
//       icon: <BiHome size={20} className="mr-2" />,
//       permission: "Admin Dashboard",
//       items: [
//         { id: "admin-dashboard", title: "Admin Dashboard", path: "/", permission: "Admin Dashboard" },
//       ],
//     },
//     {
//       id: "add-manager",
//       title: "Add Manager",
//       icon: <FiUserPlus size={20} className="mr-2" />,
//       permission: "Add Manager",
//       items: [
//         { id: "add-manager-form", title: "Add Manager", path: "/add-manager", permission: "Add Manager" },
//       ],
//     },
//     {
//       id: "employee",
//       title: "Add/Edit Employee",
//       icon: <FaAddressBook size={20} className="mr-2" />,
//       permission: "Add/Edit Employee",
//       items: [
//         { id: "add-employee", title: "Add Employee", path: "/add", permission: "Add Employee" },
//         { id: "edit-employee", title: "Edit Employee", path: "/edit", permission: "Edit Employee" },
//       ],
//     },
//     {
//       id: "onboarding",
//       title: "ON Boarding",
//       icon: <FiUserPlus size={20} className="mr-2" />,
//       permission: "ON Boarding",
//       items: [
//         { id: "new-joiners", title: "New Joiners Form", path: "/newjoinersform", permission: "ON Boarding" },
//       ],
//     },
//     {
//       id: "policies",
//       title: "Policies",
//       icon: <FiUserPlus size={20} className="mr-2" />,
//       permission: "Policies",
//       items: [
//         { id: "policy-page", title: "Policies", path: "/policies", permission: "Policies" },
//       ],
//     },
//     {
//       id: "logout",
//       title: "Logout",
//       icon: <IoLogOut size={20} className="mr-2" />,
//       permission: null, // Always visible
//       items: [],
//     },
//   ];

  // Filter tabs and their items based on permissions
  const visibleTabs = sidebarConfig
    .filter(tab => {
      // Always show logout
      if (tab.permission === null) return true;
      // Check if tab has permission or has items with permissions
      return (
        hasPermission(tab.permission) ||
        tab.items?.some(item => hasPermission(item.permission))
      );
    })
    .map(tab => ({
      ...tab,
      items: tab.items?.filter(item => 
        item.permission === null || hasPermission(item.permission)
      ) || []
    }));

  return (
    <div className="space-y-1 overflow-y-auto h-full">
      {visibleTabs.map((tab) => {
        const isOpen = openMenus[tab.id];
        const hasItems = tab.items.length > 0;

        return (
          <div key={tab.id} className="rounded-lg">
            <button
              className={`flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out ${
                isOpen ? "bg-blue-900" : ""
              }`}
              onClick={() => hasItems && toggleMenu(tab.id)}
              disabled={!hasItems}
            >
              <div className="flex items-center">
                {tab.icon}
                <span>{tab.title}</span>
              </div>
              {hasItems && (
                isOpen ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />
              )}
            </button>

            {hasItems && (
              <div
                className={`flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {tab.items.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`w-full pl-5 py-2 text-left hover:bg-blue-800 rounded ${
                      activeItem === item.id
                        ? "text-orange-600 border-s-2 border-orange-600"
                        : ""
                    }`}
                    onClick={() => {
                      setActiveItem(item.id);
                      closeSidebar?.();
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;