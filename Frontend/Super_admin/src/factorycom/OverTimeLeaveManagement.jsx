import { useState } from "react";

const dummyCompanies = [
  { id: "C001", name: "TechNova Pvt Ltd" },
  { id: "C002", name: "AlphaCore Solutions" },
  { id: "C003", name: "QuantumWorks Inc" },
];

const dummyAbsenceData = {
  C001: [
    { id: 1, name: "Amit Sharma", date: "2025-04-10", reason: "Sick Leave", status: "Approved" },
    { id: 2, name: "Neha Verma", date: "2025-04-12", reason: "Personal", status: "Pending" },
  ],
  C002: [
    { id: 1, name: "Ravi Kumar", date: "2025-04-08", reason: "Family Emergency", status: "Approved" },
  ],
  C003: [],
};

export default function AbsenceTracking1() {
  const [selectedCompany, setSelectedCompany] = useState("C001");
  const [absenceData, setAbsenceData] = useState(dummyAbsenceData);

  const handleChange = (index, field, value) => {
    const updated = [...absenceData[selectedCompany]];
    updated[index][field] = value;
    setAbsenceData({
      ...absenceData,
      [selectedCompany]: updated,
    });
  };

  const handleSave = () => {
    alert("Changes saved successfully (dummy)");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-6">Absence Tracking</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Company</label>
        <select
          className="w-full border rounded-lg p-2"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {dummyCompanies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Employee</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Reason</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {absenceData[selectedCompany]?.length > 0 ? (
              absenceData[selectedCompany].map((entry, index) => (
                <tr key={entry.id} className="border-t">
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.date}</td>
                  <td className="px-4 py-2">
                    <input
                      className="w-full border rounded px-2 py-1"
                      value={entry.reason}
                      onChange={(e) => handleChange(index, "reason", e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-2">
                    <select
                      className="w-full border rounded px-2 py-1"
                      value={entry.status}
                      onChange={(e) => handleChange(index, "status", e.target.value)}
                    >
                      <option>Pending</option>
                      <option>Approved</option>
                      <option>Rejected</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-4 text-center" colSpan="4">
                  No absence records for this company.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
}