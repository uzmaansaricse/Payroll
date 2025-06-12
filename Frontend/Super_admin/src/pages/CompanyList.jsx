import { useEffect, useState } from "react";
import axios from "axios";
import CompanyViewModal from "./CompanyViewModel";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/superadmin/companies");
      console.log("Company Data:", res.data);
      const formattedCompanies = res.data.map((company) => ({
        ...company,
        adminEmail: company.admin?.email || company.adminEmail,
        adminPassword: company.admin?.password || company.adminPassword,
      }));
      setCompanies(formattedCompanies);
      setFilteredCompanies(formattedCompanies);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  useEffect(() => {
    const filtered = companies.filter((company) =>
      company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCompanies(filtered);
  }, [searchTerm, companies]);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Registered Companies</h2>

      <div className="mb-4">
        <input
          type="text"
          placeholder="🔍 Search by company name..."
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <p className="text-gray-600">Loading companies...</p>
      ) : filteredCompanies.length === 0 ? (
        <p className="text-red-500">No companies found.</p>
      ) : (
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="border p-2">Company Name</th>
              <th className="border p-2">Registration Date</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredCompanies.map((company) => (
              <tr key={company._id}>
                <td className="border p-2">{company.companyName}</td>
                <td className="border p-2">
                  {new Date(
                    company.registrationDate || company.createdAt
                  ).toLocaleDateString()}
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => setSelectedCompany(company)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {selectedCompany && (
        <CompanyViewModal
          company={selectedCompany}
          onClose={() => setSelectedCompany(null)}
          onUpdate={fetchCompanies}
        />
      )}
    </div>
  );
};

export default CompanyList;
