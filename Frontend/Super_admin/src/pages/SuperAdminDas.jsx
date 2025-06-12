import React from "react";
import { Link } from "react-router-dom";
import {
  Building,
  Users,
  Sliders,
  User,
  Shield,
  Bell,
  FileText,
  Settings,
  Home,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const SuperAdminDas = () => {
  const cardList = [
    { title: "Dashboard", icon: <Home size={24} />, path: "/" },
    { title: "Register Company", icon: <Building size={24} />, path: "/registercompany" },
    { title: "Companies List", icon: <Users size={24} />, path: "/registercompanylist" },
    { title: "Approval Config", icon: <Sliders size={24} />, path: "/approvalconfig" },
    { title: "Company Management", icon: <User size={24} />, path: "/companymanagement" },
    { title: "Admin Management", icon: <Shield size={24} />, path: "/adminmanagement" },
    { title: "Employee Management", icon: <Users size={24} />, path: "/employeemanagement" },
    { title: "Company Data Panel", icon: <Users size={24} />, path: "/companydata" },
    { title: "Notifications", icon: <Bell size={24} />, path: "/notifications" },
    { title: "Audit Logs", icon: <FileText size={24} />, path: "/auditlogs" },
    { title: "Reports", icon: <FileText size={24} />, path: "/reports" },
    { title: "Settings", icon: <Settings size={24} />, path: "/settings" },
  ];

  const barData = [
    { name: "Companies", value: 12 },
    { name: "Admins", value: 28 },
    { name: "Employees", value: 135 },
  ];

  const pieData = [
    { name: "Active", value: 9 },
    { name: "Inactive", value: 3 },
  ];

  const pieColors = ["#00C49F", "#FF8042"];

  return (
    <div className="p-6 bg-[#f4f6fb] min-h-screen">
      {/* Top Heading */}
      <h2 className="text-3xl font-bold mb-6 text-[#152354] flex items-center gap-2">
        🏠 DASHBOARD
      </h2>

      {/* Charts and Notifications (Moved to Top) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {/* Total Count Bar Chart */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="font-semibold mb-2 text-[#152354]">✅ Total Count</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#0a1f44" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Company Status Pie Chart */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="font-semibold mb-2 text-[#152354]">✅ Company Status</h3>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={60}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl shadow-md p-4">
          <h3 className="font-semibold mb-2 text-[#152354]">✅ Notifications / Alerts</h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>🔔 3 new companies registered</li>
            <li>🔔 Admin password reset requested</li>
            <li>🔔 2 companies marked inactive</li>
          </ul>
        </div>
      </div>

      {/* Dashboard Cards (Moved Below) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardList.map((card, idx) => (
          <Link
            to={card.path}
            key={idx}
            className="bg-white rounded-2xl shadow-md p-4 flex items-center gap-4 hover:bg-[#e5ecfa] transition"
          >
            <div className="text-[#152354]">{card.icon}</div>
            <div className="text-[#152354] font-medium">{card.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SuperAdminDas;
