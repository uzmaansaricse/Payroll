import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const AdminManagement = () => {
  const [groupedAdmins, setGroupedAdmins] = useState({});
  const [filteredAdmins, setFilteredAdmins] = useState({});
  const [search, setSearch] = useState("");
  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    fetchAdmins();
  }, []);

  useEffect(() => {
    handleSearch(search);
  }, [search, groupedAdmins]);

  const fetchAdmins = async () => {
    try {
      const token = localStorage.getItem("superAdminToken");
      const res = await axios.get(`${BASE_URL}/api/superadmin/admins`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const grouped = {};
      res.data.forEach((admin) => {
        const key = admin.companyName || admin.companyId;
        if (!grouped[key]) grouped[key] = [];
        grouped[key].push(admin);
      });

      setGroupedAdmins(grouped);
      setFilteredAdmins(grouped);
    } catch (error) {
      console.error("Error fetching admins:", error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Could not fetch admins.",
        background: "#fef2f2",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  const handleSearch = (text) => {
    const filtered = {};
    const searchLower = text.toLowerCase();

    Object.entries(groupedAdmins).forEach(([company, admins]) => {
      const matchCompany = company.toLowerCase().includes(searchLower);
      const matchedAdmins = admins.filter((admin) =>
        admin.name.toLowerCase().includes(searchLower)
      );

      if (matchCompany || matchedAdmins.length > 0) {
        filtered[company] = matchCompany ? admins : matchedAdmins;
      }
    });

    setFilteredAdmins(filtered);
  };

  const deleteAdmin = async (email) => {
    const confirm = await Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: `Delete admin ${email}?`,
      showCancelButton: true,
      confirmButtonColor: "#dc2626",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
      background: "#fff7ed",
    });

    if (confirm.isConfirmed) {
      try {
        const token = localStorage.getItem("superAdminToken");
        const response = await axios.delete(`${BASE_URL}/api/superadmin/admin`, {
          headers: { Authorization: `Bearer ${token}` },
          data: { adminEmail: email },
        });

        if (response.status === 200) {
          fetchAdmins();
          Swal.fire({
            icon: "success",
            title: "Deleted",
            text: "Admin deleted successfully",
            background: "#ecfdf5",
            confirmButtonColor: "#10b981",
          });
        }
      } catch (error) {
        console.error("Error deleting admin:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to delete admin",
          background: "#fef2f2",
          confirmButtonColor: "#ef4444",
        });
      }
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-4">Admin Management</h1>

      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by Company or Admin Name"
          className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {Object.keys(filteredAdmins).length === 0 ? (
        <p className="text-center text-gray-600">No admins found.</p>
      ) : (
        Object.entries(filteredAdmins).map(([company, admins]) => (
          <div key={company} className="mb-10">
            <h2 className="text-xl font-semibold text-blue-700 mb-3 border-b pb-1">{company}</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white shadow-sm rounded-md text-sm">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Company ID</th>
                    <th className="p-3">Access Code</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin) => (
                    <tr key={admin._id} className="border-b text-center">
                      <td className="p-3">{admin.name}</td>
                      <td className="p-3">{admin.email}</td>
                      <td className="p-3">{admin.phone}</td>
                      <td className="p-3">{admin.companyId}</td>
                      <td className="p-3">{admin.accessCode}</td>
                      <td className="p-3">
                        <button
                          onClick={() => deleteAdmin(admin.email)}
                          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AdminManagement;
