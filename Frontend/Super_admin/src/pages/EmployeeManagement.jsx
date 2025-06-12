import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const BASE_URL = "http://localhost:5000";

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ Fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem("superAdminToken");

        if (!token) {
          setError("No token found, please login again.");
          return;
        }

        const response = await axios.get(`${BASE_URL}/api/superadmin/employees`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setEmployees(response.data);
      } catch (err) {
        setError("Error fetching employee data.");
        console.error("Fetch error:", err.response || err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  // ✅ Delete employee
  const handleDelete = async (employeeEmail) => {
    try {
      const token = localStorage.getItem("superAdminToken");

      if (!token) {
        setError("No token found, please login again.");
        return;
      }

      const response = await axios.delete(`${BASE_URL}/api/superadmin/employee`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: { employeeEmail },
      });

      if (response.status === 200) {
        setEmployees((prevEmployees) =>
          prevEmployees.filter((emp) => emp.email !== employeeEmail)
        );
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message || "Employee deleted successfully",
        });
      }
    } catch (err) {
      console.error("Error deleting employee:", err.response || err);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to delete employee",
      });
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-6">Employee Management</h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading employees...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : employees.length === 0 ? (
        <p className="text-center text-gray-600">No employees found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.email} className="border-b border-gray-200">
                  <td className="p-3 text-center">{employee.name}</td>
                  <td className="p-3 text-center">{employee.email}</td>
                  <td className="p-3 text-center">{employee.phone}</td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => handleDelete(employee.email)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EmployeeManagement;