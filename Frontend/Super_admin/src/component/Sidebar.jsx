import React, { useState } from "react";
import {
  Home,
  Shield,
  User,
  Users,
  LogOut,
  Settings,
  FileText,
  Building,
  Sliders,
  Bell,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ isOpen, closeSidebar }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="bg-[#152354] sticky top-0">
      <div
        className={`fixed top-0 left-0 lg:w-64 w-full h-full text-[#F5E7C6] bg-[#152354] p-4 z-[9999] transition-transform duration-300 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:relative lg:h-screen`}
      >
        {/* Logo & Close Button (Mobile Only) */}
        <div className="flex justify-center items-center mb-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.jpeg"
              alt="Logo"
              className="h-30"
            />
            {/* <div className="flex items-center gap-2">
              <span className="font-bold">MASU</span><span>Consultancy</span>
            </div> */}
          </div>
          <button className="lg:hidden p-2 cursor-pointer" onClick={closeSidebar}>
            ✖
          </button>
        </div>

        {/* Menu Items */}
        <div className="space-y-2 h-auto">
          <div>
            <div className="cursor-pointer h-auto" onClick={() => toggleMenu("Anuj1")}>Super Admin</div>
            <div className={`flex flex-col justify-between overflow-hidden h-auto`}>
              <div className="space-y-2">
                <Link to="/" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Home size={20} className="mr-2" />
                    Dashboard
                  </div>
                </Link>

                <Link to="/registercompany" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Building size={20} className="mr-2" />
                    Register Company
                  </div>
                </Link>

                <Link to="/registercompanylist" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Users size={20} className="mr-2" />
                    Company List
                  </div>
                </Link>


                {/* <Link to="/approvalconfig" onClick={closeSidebar}>
              <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                <Sliders size={20} className="mr-2" />
                Approval Config
              </div>
            </Link> */}
                <div className=" overflow-hidden">
                  <div onClick={() => toggleMenu("one1")} className="flex cursor-pointer items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Sliders size={20} className="mr-2" />
                    Company Setup
                  </div>
                  <div className={`duration-500 ${openMenu == 'one1' ? "h-auto" : "h-0"}`}>
                    <div className="space-y-1 ps-3">
                      <div> <Link to={'/admindashboard'}>Company level</Link> </div>
                      {/* <div><Link to={'/factory'}>Factory level</Link></div> */}
                    </div>
                  </div>
                </div>

                <Link to="/companymanagement" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <User size={20} className="mr-2" />
                    Company Management
                  </div>
                </Link>

                <Link to="/adminmanagement" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Shield size={20} className="mr-2" />
                    Admin Management
                  </div>
                </Link>

                <Link to="/employeemanagement" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Users size={20} className="mr-2" />
                    Employee Management
                  </div>
                </Link>

                <Link to="/companydata" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Users size={20} className="mr-2" />
                    Company Data Panel
                  </div>
                </Link>

                <Link to="/notifications" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Bell size={20} className="mr-2" />
                    Notifications
                  </div>
                </Link>

                <Link to="/auditlogs" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <FileText size={20} className="mr-2" />
                    Audit Logs
                  </div>
                </Link>

                <Link to="/reports" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <FileText size={20} className="mr-2" />
                    Reports
                  </div>
                </Link>

                <Link to="/settings" onClick={closeSidebar}>
                  <div className="flex items-center w-full p-3 rounded-lg hover:bg-[#1b2e5a] transition">
                    <Settings size={20} className="mr-2" />
                    Settings
                  </div>
                </Link>
              </div>

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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
