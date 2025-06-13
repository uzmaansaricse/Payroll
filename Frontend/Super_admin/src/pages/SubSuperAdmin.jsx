import React, { useState, useEffect } from "react";
import { PlusCircle, Search } from "lucide-react";
import axios from 'axios';

const SubSuperAdminComponent = () => {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [admins, setAdmins] = useState([]);
  const [editingAdmin, setEditingAdmin] = useState(null);

 

  useEffect(() => {
    const fetchlist = async()=>{
      try{
        const response = await axios.get("http://localhost:5000/api/sub-super-admin/getall");
        setAdmins(response?.data?.data)
      }catch(error){
        console.log("error in fetching",error);
      }
    }
    fetchlist();
    // Replace with fetch API in real implementation
  }, []);

  const filteredAdmins = admins.filter(
    (admin) =>
      admin.name.toLowerCase().includes(search.toLowerCase()) ||
      admin.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddOrUpdateAdmin = async (adminData) => {
    console.log(adminData);
    if (editingAdmin) {
        try{
      const response = await axios.post("http://localhost:5000/api/sub-super-admin/edit",editingAdmin);
      console.log(response);
      }catch(error){
        console.log(error);
      }
      setAdmins((prev) =>
        prev.map((admin) => (admin.id === editingAdmin.id ? { ...adminData, id: admin.id } : admin))
      );
    } else {
      try{
      const response = await axios.post("http://localhost:5000/api/sub-super-admin/register",adminData);
      console.log(response);
      }catch(error){
        console.log(error);
      }
    }
    setShowModal(false);
    setEditingAdmin(null);
  };

  const handleEdit = (admin) => {
    setEditingAdmin(admin);
    setShowModal(true);
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#152354]">Sub Super Admins</h2>
        <button
          onClick={() => {
            setEditingAdmin(null);
            setShowModal(true);
          }}
          className="flex items-center bg-[#152354] text-white px-3 py-2 rounded hover:bg-[#1b2e5a]"
        >
          <PlusCircle className="mr-2" size={18} />
          Add New
        </button>
      </div>

      <div className="relative mb-4">
        <Search className="absolute top-2.5 left-3 text-gray-500" size={18} />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name or email"
          className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {filteredAdmins.length > 0 ? (
        <ul className="divide-y">
          {filteredAdmins.map((admin) => (
            <li key={admin.id} className="py-2 px-1">
              <div className="flex justify-between items-center">
                <div>
                  <div className="font-medium">{admin.name}</div>
                  <div className="text-sm text-gray-500">{admin.email}</div>
                </div>
                <button
                  onClick={() => handleEdit(admin)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 text-center">No Sub Super Admins found.</p>
      )}

      {showModal && (
        <ModalForm
          onClose={() => {
            setShowModal(false);
            setEditingAdmin(null);
          }}
          onSubmit={handleAddOrUpdateAdmin}
          initialData={editingAdmin}
        />
      )}
    </div>
  );
};

const ModalForm = ({ onClose, onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    permissions: []
  });

  const allPermissions = [
    "Dashboard",
    "Register Company",
    "Reports",
    "Settings",
    "Manage Employees",
    "Notifications"
  ];

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        email: initialData.email,
        password: "",
        permissions: initialData.permissions || []
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePermissionToggle = (perm) => {
    setFormData((prev) => ({
      ...prev,
      permissions: prev.permissions.includes(perm)
        ? prev.permissions.filter((p) => p !== perm)
        : [...prev.permissions, perm]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10000]">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-700 hover:text-black"
        >
          ✖
        </button>
        <h2 className="text-lg font-semibold mb-4">
          {initialData ? "Edit Sub Super Admin" : "Add Sub Super Admin"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required={!initialData}
          />
          <div>
            <label className="block font-medium mb-1">Permissions</label>
            <div className="space-y-1">
              {allPermissions.map((perm) => (
                <label key={perm} className="block text-sm">
                  <input
                    type="checkbox"
                    checked={formData.permissions.includes(perm)}
                    onChange={() => handlePermissionToggle(perm)}
                    className="mr-2"
                  />
                  {perm}
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#152354] w-full py-2 text-white rounded hover:bg-[#1b2e5a]"
          >
            {initialData ? "Update Admin" : "Add Admin"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubSuperAdminComponent;
