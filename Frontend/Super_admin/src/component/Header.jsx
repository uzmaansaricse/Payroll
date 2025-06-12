import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FiMoreVertical } from "react-icons/fi";
import { TbUserCircle, TbSettings, TbLogin } from "react-icons/tb";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router";

const Header = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center text-[#F5E7C6] sticky top-0 z-50 justify-between bg-[#152354] px-4  w-full">
        <button className="p-2" onClick={toggleSidebar}>
          <IoMenu size={24} />
        </button>

        <div className="text-lg font-bold">
          <img
            width={100}
            src="/images/logo.jpeg"
            alt="Logo"
          />
        </div>

        <div className="relative">
          <button className="p-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <FiMoreVertical size={24} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
              <div className="p-2">
                <Link to="/" className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                  <TbUserCircle size={18} /> <span>Dashboard</span>
                </Link>
                <Link to="/company" className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                  <TbSettings size={18} /> <span>Company</span>
                </Link>
              </div>
              <div className="border-t p-2">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                  <TbLogin size={18} /> <span>Logout</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:flex items-center sticky top-0 z-50 justify-between w-full h-[40px] bg-gray-300 px-4">
        {/* Left Side - Settings */}
        <div className="flex gap-2 items-center">
          {/* <button className="p-2 bg-gray-200 rounded">
            <CiSettings size={14} />
          </button> */}
        </div>

        {/* Center - Title */}
        <div className="text-base font-semibold text-[#0a1f44]">
          MASU Super Admin Panel
        </div>

        {/* Right Side - Profile Dropdown */}
        <div className="relative">
          {/* <button className="flex items-center space-x-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <img
              src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-12.jpg"
              alt="Avatar"
              className="w-8 h-8 rounded-full"
            />
          </button> */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
              <div className="p-2">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                  <TbUserCircle size={12} /> <span>My Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                  <TbSettings size={12} /> <span>Settings</span>
                </a>
              </div>
              <div className="border-t p-2">
                <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-100">
                  <TbLogin size={12} /> <span>Logout</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
