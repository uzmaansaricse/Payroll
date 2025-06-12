import React, { useEffect, useState } from "react";
import axios from "axios";
import ApprovalForm from "./ApprovalForm";

export default function ApprovalConfig() {
  const [companyData, setCompanyData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/superadmin/companies");
        setCompanyData(res.data);
        setFilteredData(res.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  useEffect(() => {
    const filtered = companyData.filter((company) =>
      company.companyName?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, companyData]);

  if (loading) return <p className="p-4">Loading companies...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Company Approval Table</h2>

      {!selectedCompany ? (
        <>
          <input
            type="text"
            placeholder="🔍 Search company name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 w-full max-w-md px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          />

          {filteredData.length === 0 ? (
            <p className="text-red-500">No companies found.</p>
          ) : (
            <table className="w-full border border-gray-300">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 border">Company Name</th>
                  <th className="p-2 border">Registered On</th>
                  <th className="p-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((company) => (
                  <tr key={company._id}>
                    <td className="p-2 border">{company.companyName}</td>
                    <td className="p-2 border">
                      {company.registrationDate
                        ? new Date(company.registrationDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="p-2 border">
                      <button
                        onClick={() => setSelectedCompany(company)}
                        className="bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Set Approval Levels
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </>
      ) : (
        <ApprovalForm
          company={selectedCompany}
          goBack={() => setSelectedCompany(null)}
        />
      )}
    </div>
  );
}
