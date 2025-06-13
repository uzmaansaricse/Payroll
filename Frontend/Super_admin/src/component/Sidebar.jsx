import React, { useState } from "react";
import {
  Home, Shield, User, Users, LogOut, Settings, FileText, Building, Sliders, Bell, PlusCircle
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const menuItems = [
    { label: "Dashboard", icon: <Home size={20} />, to: "/" },
    { label: "Register Company", icon: <Building size={20} />, to: "/registercompany" },
    { label: "Company List", icon: <Users size={20} />, to: "/registercompanylist" },
    {
      label: "Company Setup",
      icon: <Sliders size={20} />,
      subItems: [{ label: "Company level", to: "/admindashboard" }]
    },
    { label: "Company Management", icon: <User size={20} />, to: "/companymanagement" },
    { label: "Admin Management", icon: <Shield size={20} />, to: "/adminmanagement" },
    { label: "Employee Management", icon: <Users size={20} />, to: "/employeemanagement" },
    { label: "Company Data Panel", icon: <Users size={20} />, to: "/companydata" },
    { label: "Notifications", icon: <Bell size={20} />, to: "/notifications" },
      { label: "Sub Super Admin", icon: <Bell size={20} />, to: "/sub-super-admin" },
    { label: "Audit Logs", icon: <FileText size={20} />, to: "/auditlogs" },
    { label: "Reports", icon: <FileText size={20} />, to: "/reports" },
    { label: "Settings", icon: <Settings size={20} />, to: "/settings" },
  ];

  return (
    <div className="bg-[#152354] sticky top-0">
      <div
        className={`fixed top-0 left-0 lg:w-64 w-full h-full text-[#F5E7C6] bg-[#152354] p-4 z-[9999] transition-transform duration-300 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative lg:h-screen`}
      >
        {/* Logo and Close Button */}
        <div className="flex justify-between items-center mb-4">
          <img src="/images/logo.jpeg" alt="Logo" className="h-14" />
          <button className="lg:hidden p-2 text-white" onClick={closeSidebar}>✖</button>
        </div>

        {/* Menu Items */}
        <div className="space-y-2">
          <div className="font-semibold text-lg mb-2">Super Admin</div>
          {menuItems.map((item, index) => (
            item.subItems ? (
              <div key={index}>
                <div
                  onClick={() => toggleMenu(item.label)}
                  className="flex items-center p-3 cursor-pointer hover:bg-[#1b2e5a] rounded-lg transition"
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </div>
                {openMenu === item.label && (
                  <div className="ml-5 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link key={subIndex} to={subItem.to} onClick={closeSidebar} className="block p-2 hover:text-white">
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link to={item.to} key={index} onClick={closeSidebar}>
                <div className="flex items-center p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                </div>
              </Link>
            )
          ))}

          {/* Manage Sub Super Admin */}
          {/* <div className="mt-4">
            <div className="flex justify-between items-center px-3 text-white">
              <span className="font-semibold">Manage Sub Super Admin</span>
              <button onClick={() => setShowModal(true)} className="hover:text-green-400">
                <PlusCircle size={20} />
              </button>
            </div>
            <div className="ml-3 mt-2 text-sm italic text-gray-300">List of Sub Super Admins...</div>
          </div> */}

          {/* Logout Button */}
          <div className="mt-6">
            <button
              onClick={handleLogout}
              className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition"
            >
              <LogOut size={20} className="mr-2" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[10000] bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-[90%] max-w-md p-6 relative">
            <button onClick={() => setShowModal(false)} className="absolute top-2 right-3 text-black">✖</button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Sub Super Admin</h2>
            <form className="space-y-3">
              <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" />
              <input type="password" placeholder="Password" className="w-full p-2 border rounded" />
              <div>
                <label className="block mb-1 font-medium">Permissions</label>
                <div className="space-y-1 text-sm text-gray-700">
                  <label><input type="checkbox" className="mr-2" /> View Companies</label><br />
                  <label><input type="checkbox" className="mr-2" /> Manage Employees</label><br />
                  <label><input type="checkbox" className="mr-2" /> Access Reports</label><br />
                  <label><input type="checkbox" className="mr-2" /> Send Notifications</label>
                </div>
              </div>
              <button type="submit" className="bg-[#152354] text-white w-full py-2 rounded hover:bg-[#1b2e5a]">
                Add Admin
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
