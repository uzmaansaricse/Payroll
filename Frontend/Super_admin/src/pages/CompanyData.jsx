import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCompaniesList } from "../services/operations/companyAPI";

const CompanyData = () => {
  const navigate = useNavigate();

  // State to store companies data
  const [companies, setCompanies] = useState([]);

  // State to track selected view and company
  const [selectedView, setSelectedView] = useState("Admins");
  const [selectedCompanyId, setSelectedCompanyId] = useState("");


    // Fetch companies data from the updated API endpoint
   useEffect(() => {
  const fetchCompanies = async () => {
    try {
      const res = await fetchCompaniesList();
      console.log('COMPANIES:', res.data);
      setCompanies(res.data);
      if (res.data.length > 0) {
        setSelectedCompanyId(res.data[0].companyId);
      }
    } catch (err) {
      console.error('Error fetching companies:', err);
    }
  }
  fetchCompanies();
  }, []);
  


  // Get the selected company based on selectedCompanyId
  const selectedCompany = companies.find((c) => c.companyId === selectedCompanyId);

  const handleViewAsAdmin = (companyId) => {
    navigate(`/adminpanel?impersonate=${companyId}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#152354]">
        📊 COMPANY DATA PANEL
      </h2>

      {/* Tabs */}
      <div className="mb-6 flex justify-center gap-4 flex-wrap">
        <label className="font-medium text-[#152354]">→ Show:</label>
        {["Admins", "Employees", "Payroll", "Attendance", "Reports"].map((view) => (
          <button
            key={view}
            onClick={() => setSelectedView(view)}
            className={`px-3 py-1 rounded ${
              selectedView === view
                ? "bg-[#152354] text-white"
                : "bg-white border text-[#152354]"
            }`}
          >
            {view}
          </button>
        ))}
      </div>

      {/* Dropdown View */}
      <div className="mb-12">
        <div className="flex justify-center mb-4">
          <select
            onChange={(e) => setSelectedCompanyId(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md"
            value={selectedCompanyId}
          >
            {companies.map((company) => (
              <option key={company._id} value={company.companyId}>
                {company.companyName}
              </option>
            ))}
          </select>
        </div>

        {selectedCompany && (
          <div className="max-w-xl mx-auto bg-white shadow rounded-xl p-6 text-center">
            <h3 className="text-xl font-bold text-[#152354] mb-1">
              {selectedCompany.companyName}
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              ID: {selectedCompany.companyId}
            </p>
            <p className="text-sm mb-1">Email: {selectedCompany.email}</p>
            <div className="text-sm font-medium text-[#152354]">
              Showing: {selectedView}
            </div>

            <button
              onClick={() => handleViewAsAdmin(selectedCompany.companyId)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              👁️ View as Admin
            </button>

            {/* View Content */}
            <div className="mt-4 text-left text-sm bg-gray-50 p-4 rounded border">
              {selectedView === "Admins" && (
                <div>
                  <h4 className="font-semibold mb-2 text-[#152354]">👤 Admins:</h4>
                  <ul className="list-disc pl-5">
                    {selectedCompany.admins && selectedCompany.admins.map((admin) => (
                      <li key={admin._id}>
                        {admin.name} ({admin.email})
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedView === "Employees" && (
                <div>
                  <h4 className="font-semibold mb-2 text-[#152354]">👥 Employees:</h4>
                  <ul className="list-disc pl-5">
                    <li>Ankit Verma - Developer</li>
                    <li>Sneha Kapoor - HR Executive</li>
                  </ul>
                </div>
              )}
              {selectedView === "Payroll" && (
                <div>
                  <h4 className="font-semibold mb-2 text-[#152354]">💰 Payroll:</h4>
                  <p>March 2025 Payroll Processed</p>
                  <p>Total Employees Paid: 42</p>
                </div>
              )}
              {selectedView === "Attendance" && (
                <div>
                  <h4 className="font-semibold mb-2 text-[#152354]">📅 Attendance:</h4>
                  <p>Overall Attendance: 92%</p>
                </div>
              )}
              {selectedView === "Reports" && (
                <div>
                  <h4 className="font-semibold mb-2 text-[#152354]">📄 Reports:</h4>
                  <p>Payroll_March2025.xlsx</p>
                  <p>Leave_Report.pdf</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Cards View */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div key={company._id} className="bg-white rounded-xl shadow p-4">
            <h3 className="text-lg font-bold">{company.companyName}</h3>
            <p className="text-sm text-gray-600">ID: {company.companyId}</p>
            <p className="text-sm">Email: {company.email}</p>

            <div className="mt-3 text-sm text-[#152354] font-medium">
              Currently Viewing: {selectedView}
            </div>

            <div className="mt-4">
              <button
                onClick={() => handleViewAsAdmin(company.companyId)}
                className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
              >
                👁️ View as Admin
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyData;
