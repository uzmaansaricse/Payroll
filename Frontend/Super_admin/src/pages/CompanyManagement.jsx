import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchCompanies = async () => {
    try {
      const res = await axios.get('/api/superadmin/companies');
      setCompanies(res.data);
      setFilteredCompanies(res.data); // Initialize filtered list
    } catch (err) {
      console.error('Error fetching companies:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id) => {
    try {
      await axios.put(`/api/superadmin/companies/${id}/toggle-status`);
      fetchCompanies();
    } catch (err) {
      console.error('Failed to toggle status', err);
    }
  };

  const deleteCompany = async (id) => {
    if (window.confirm("Are you sure you want to delete this company?")) {
      try {
        await axios.delete(`/api/superadmin/companies/${id}`);
        fetchCompanies();
      } catch (err) {
        console.error('Error deleting company:', err);
      }
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = companies.filter(company =>
      company.companyName.toLowerCase().includes(value) ||
      company.companyId.toLowerCase().includes(value) ||
      company.email.toLowerCase().includes(value)
    );
    setFilteredCompanies(filtered);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Company Management</h1>

      <input
        type="text"
        placeholder="Search by name, ID, or email"
        value={searchTerm}
        onChange={handleSearch}
        className="mb-6 px-4 py-2 border rounded w-full max-w-md"
      />

      {loading ? (
        <p>Loading companies...</p>
      ) : filteredCompanies.length === 0 ? (
        <p>No companies found.</p>
      ) : (
        <div className="grid gap-4">
          {filteredCompanies.map((company) => (
            <div key={company._id} className="bg-white p-4 rounded-xl shadow border">
              <div className="flex justify-between items-center">
                <div>
                  <p><strong>Company Name:</strong> {company.companyName}</p>
                  <p><strong>Company ID:</strong> {company.companyId}</p>
                  <p><strong>Email:</strong> {company.email}</p>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <button
                    onClick={() => toggleStatus(company._id)}
                    className={`px-3 py-1 rounded text-white text-sm ${
                      company.status === 'Active' ? 'bg-green-600' : 'bg-gray-500'
                    }`}
                  >
                    {company.status}
                  </button>

                  <button
                    onClick={() => navigate(`/superadmin/companies/${company._id}/admins`)}
                    className="text-blue-600 text-sm underline"
                  >
                    View Admins
                  </button>

                  <button
                    onClick={() => deleteCompany(company._id)}
                    className="text-red-600 text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyManagement;
