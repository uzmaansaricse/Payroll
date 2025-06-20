import React, { useState } from "react";
import { AiOutlineFileText, AiOutlineLineChart } from "react-icons/ai";
import { BiChevronDown, BiHome } from "react-icons/bi";
import { BsCalendarCheck } from "react-icons/bs";
import { FaAddressBook, FaUserFriends } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router";
import { useSelector } from "react-redux";

// Helper function to check permissions
const hasPermission = (permissions, requiredPermission) => {
  return permissions?.includes(requiredPermission);
};

export default function AdminDashboard({ closeSidebar }) {
    const { permissions } = useSelector((state) => state.user);
    return (
        <div className="w-full h-full p-4 flex flex-col">
            <Accordion closeSidebar={closeSidebar} permissions={permissions} />
        </div>
    );
}

const Accordion = ({ closeSidebar, permissions }) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [active, setActive] = useState("one");

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const toggleSubMenu = (menu) => {
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    // Dashboard tabs configuration
    const dashboardTabs = [
        {
            id: "dashboard",
            title: "Dashboard",
            icon: <BiHome size={20} className="mr-2" />,
            permission: null, // Always visible
            items: [
                {
                    id: "admin-dashboard",
                    title: "Admin Dashboard",
                    path: "/",
                    permission: null,
                }
            ]
        },
        {
            id: "employee",
            title: "Add/Edit Employee",
            icon: <FaAddressBook size={20} className="mr-2" />,
            permission: "Add/Edit Employee",
            items: [
                {
                    id: "add-employee",
                    title: "Add Employee",
                    path: "/add",
                    permission: "Add Employee"
                },
                {
                    id: "edit-employee",
                    title: "Edit Employee",
                    path: "/edit",
                    permission: "Edit Employee"
                }
            ]
        },
        {
            id: "payroll",
            title: "Payroll Manage",
            icon: <FaUserFriends size={20} className="mr-2" />,
            permission: "Payroll Management",
            items: [
                {
                    id: "employee-master",
                    title: "Employee master information",
                    path: "/personaldetailtable",
                    permission: "View Employee Master"
                },
                {
                    id: "ctc-structure",
                    title: "CTC Structure",
                    path: "/ctcstracture",
                    permission: "View CTC Structure"
                },
                // Add other payroll items here...
            ]
        },
        {
            id: "leave",
            title: "Leave Management",
            icon: <BsCalendarCheck size={20} className="mr-2" />,
            permission: "Leave Management",
            subMenus: [
                {
                    id: "attendance",
                    title: "Attendance",
                    permission: "View Attendance",
                    items: [
                        {
                            id: "shift-management",
                            title: "Shift Management",
                            path: "/shiftmanagement",
                            permission: "Manage Shifts"
                        },
                        {
                            id: "working-days",
                            title: "Working Days",
                            path: "/workingdays",
                            permission: "Manage Working Days"
                        },
                        // Add other attendance items...
                    ]
                },
                // Add other leave submenus...
            ]
        },
        {
            id: "onboarding",
            title: "ON Boarding",
            icon: <FiUserPlus size={20} className="mr-2" />,
            permission: "Onboarding Management",
            items: [
                {
                    id: "new-joiners",
                    title: "New Joiners Form",
                    path: "/newjoinersform",
                    permission: "Manage Onboarding"
                }
            ]
        },
        {
            id: "exit",
            title: "Exit Formalities",
            icon: <FiLogOut size={20} className="mr-2" />,
            permission: "Exit Management",
            items: [
                {
                    id: "resignation",
                    title: "Resignation Management",
                    path: "/registrationman",
                    permission: "Manage Resignations"
                }
            ]
        },
        {
            id: "performance",
            title: "Performance",
            icon: <AiOutlineLineChart size={20} className="mr-2" />,
            permission: "Performance Management",
            items: [
                {
                    id: "self-evaluation",
                    title: "Self Evaluation (KRA)",
                    path: "/selfEvalution",
                    permission: "View Performance"
                }
            ]
        },
        {
            id: "reports",
            title: "Reports",
            icon: <AiOutlineFileText size={20} className="mr-2" />,
            permission: "View Reports",
            items: [
                {
                    id: "employee-master-report",
                    title: "Employee Master Report",
                    path: "/employmaster",
                    permission: "View Employee Reports"
                },
                // Add other report items...
            ]
        },
        {
            id: "logout",
            title: "Logout",
            icon: <IoLogOut size={20} className="mr-2" />,
            permission: null, // Always visible
            items: []
        }
    ];

    // Filter tabs based on permissions
    const filteredTabs = dashboardTabs.filter(tab => 
        tab.permission === null || hasPermission(permissions, tab.permission)
    ).map(tab => ({
        ...tab,
        // Filter items if they exist
        items: tab.items ? tab.items.filter(item => 
            item.permission === null || hasPermission(permissions, item.permission)
        ) : [],
        // Filter submenus if they exist
        subMenus: tab.subMenus ? tab.subMenus.filter(subMenu => 
            subMenu.permission === null || hasPermission(permissions, subMenu.permission)
        ).map(subMenu => ({
            ...subMenu,
            // Filter submenu items
            items: subMenu.items.filter(item => 
                item.permission === null || hasPermission(permissions, item.permission))
        })) : []
    }));

    return (
        <div className="h-screen w-full">
            <div className="w-full grid gap-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                {filteredTabs.map((tab) => (
                    <div key={tab.id} className="rounded-lg">
                        {tab.items.length > 0 || tab.subMenus?.length > 0 ? (
                            <>
                                <button
                                    className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                    onClick={() => toggleMenu(tab.id)}
                                >
                                    <div className="flex items-center">
                                        {tab.icon}
                                        {tab.title}
                                    </div>
                                    {(tab.items.length > 0 || tab.subMenus?.length > 0) && 
                                        (openMenu === tab.id ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />)
                                    }
                                </button>

                                {/* Render regular items */}
                                {tab.items.length > 0 && (
                                    <div
                                        className={`flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === tab.id ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {tab.items.map((item) => (
                                            <span 
                                                key={item.id}
                                                onClick={() => setActive(item.id)} 
                                                className={`${active === item.id ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""}`}
                                            >
                                                <Link to={item.path} className="w-full pl-5 text-left" onClick={closeSidebar}>
                                                    {item.title}
                                                </Link>
                                            </span>
                                        ))}
                                    </div>
                                )}

                                {/* Render submenus */}
                                {tab.subMenus?.length > 0 && (
                                    <div
                                        className={`flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openMenu === tab.id ? "max-h-full opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        {tab.subMenus.map((subMenu) => (
                                            <div key={subMenu.id}>
                                                <button
                                                    className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                                    onClick={() => toggleSubMenu(subMenu.id)}
                                                >
                                                    <div className="flex items-center">
                                                        {subMenu.icon || <BsCalendarCheck size={20} className="mr-2" />}
                                                        {subMenu.title}
                                                    </div>
                                                    {subMenu.items.length > 0 && 
                                                        (openSubMenu === subMenu.id ? <FaChevronUp size={18} /> : <BiChevronDown size={18} />)
                                                    }
                                                </button>

                                                {subMenu.items.length > 0 && (
                                                    <div
                                                        className={`flex flex-col gap-3 border-s rounded overflow-hidden transition-all duration-300 ease-in-out ${openSubMenu === subMenu.id ? "max-h-70 opacity-100" : "max-h-0 opacity-0"
                                                            }`}
                                                    >
                                                        {subMenu.items.map((item) => (
                                                            <span 
                                                                key={item.id}
                                                                onClick={() => setActive(item.id)} 
                                                                className={`${active === item.id ? "text-orange-600 border-s-2 border-orange-600 rounded" : ""} pl-5`}
                                                            >
                                                                <Link to={item.path} className="w-full text-left" onClick={closeSidebar}>
                                                                    {item.title}
                                                                </Link>
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            // For tabs with no items/submenus (like Logout)
                            <button
                                className="flex justify-between items-center w-full cursor-pointer p-3 rounded-lg transition-all duration-300 ease-in-out"
                                onClick={() => toggleMenu(tab.id)}
                            >
                                <div className="flex items-center">
                                    {tab.icon}
                                    {tab.title}
                                </div>
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}