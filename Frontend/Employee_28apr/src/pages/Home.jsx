

import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdHome } from 'react-icons/io';
import { FaUserTie, FaFileInvoice, FaRegCalendarCheck, FaRegCalendarTimes, FaSignOutAlt, FaRegFileAlt } from 'react-icons/fa';
import { MdAttachMoney } from 'react-icons/md';

export default function Sidebar() {
    return (
        <div className="bg-gray-100 h-screen p-2 lg:p-4 w-full">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
               
                {/* My Profile */}
                <Link to="/PersonalInformation" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaUserTie size={25} /> <span>My Profile</span>
                </Link>

                {/* CTC & Salary Structure */}
                <Link to="/SaleryBreakDown" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <MdAttachMoney size={25} /><span>CTC & Salary Structure</span>
                </Link>

                {/* Salary History */}
             

                {/* Pay Slip */}
                <Link to="/payslip" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <MdAttachMoney size={25} /><span>Pay Slip</span>
                </Link>

                {/* Investment */}
                <Link to="/investment" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaFileInvoice size={25} /><span>Investment</span>
                </Link>

                {/* Reimbursement */}
                <Link to="/remembursement" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaFileInvoice size={25} /><span>Reimbursements</span>
                </Link>

                {/* Tax Computation */}
                <Link to="/tancomputions" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaFileInvoice size={25} /><span>Tax Computation</span>
                </Link>

                {/* Attendance */}
                <Link to="/attendancepage" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaRegCalendarCheck size={25} /><span>Attendance</span>
                </Link>

                {/* OT Hours */}
                <Link to="/OtHourse" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaRegCalendarCheck size={25} /><span>OT Hours</span>
                </Link>

                {/* Leave Management */}
                <Link to="/addleavepage" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaRegCalendarTimes size={25} /><span>Leave Management</span>
                </Link>

                {/* Onboarding & Exit */}
                <Link to="/selfevulation" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaSignOutAlt size={25} /><span>Onboarding & Exit</span>
                </Link>

                {/* Performance & Reports */}
                <Link to="/performance" className="bg-white rounded shadow p-3 flex items-center gap-2">
                    <FaRegFileAlt size={25} /><span>Performance & Reports</span>
                </Link>
            </div>
        </div>
    );
}
