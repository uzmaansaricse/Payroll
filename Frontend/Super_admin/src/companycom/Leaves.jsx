import { useState } from "react";

const initialPolicyTypes = [
  "Attendance Policy",
  "Leave Policy",
  "Shift Policy",
  "Overtime Policy",
  "Work From Home Policy",
  "Reimbursement Policy",
  "Exit Policy",
  "Add Custom Policy",
];

const companies = [
  { id: "C001", name: "TechNova Pvt Ltd" },
  { id: "C002", name: "AlphaCore Solutions" },
  { id: "C003", name: "QuantumWorks Inc" },
];

export default function PolicyManager() {
  const [selectedCompany, setSelectedCompany] = useState("C001");
  const [policyTypes, setPolicyTypes] = useState(initialPolicyTypes);
  const [selectedPolicy, setSelectedPolicy] = useState(initialPolicyTypes[0]);
  const [customPolicyName, setCustomPolicyName] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState("");

  const handlePolicyChange = (value) => {
    setSelectedPolicy(value);
    setShowCustomInput(value === "Add Custom Policy");
  };

  const handleCustomPolicySubmit = () => {
    if (!customPolicyName.trim()) return;

    const newPolicy = customPolicyName.trim();
    if (!policyTypes.includes(newPolicy)) {
      const updated = [
        ...policyTypes.slice(0, -1),
        newPolicy,
        "Add Custom Policy",
      ];
      setPolicyTypes(updated);
    }
    setSelectedPolicy(newPolicy);
    setShowCustomInput(false);
    setCustomPolicyName("");
  };

  const handleDeletePolicy = (typeToDelete) => {
    const updated = policyTypes.filter((type) => type !== typeToDelete && type !== "Add Custom Policy");
    setPolicyTypes([...updated, "Add Custom Policy"]);

    if (selectedPolicy === typeToDelete) {
      setSelectedPolicy(updated[0] || "");
    }
  };

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.type !== "text/csv") {
      alert("Please upload a valid CSV file.");
      return;
    }
    setUploadedFileName(file.name);
    alert(`CSV uploaded: ${file.name}`);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6">Policy Manager</h2>

      {/* Company Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Company</label>
        <select
          className="w-full border rounded-lg p-2"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {companies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      {/* Policy Selection */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Policy</label>
        <select
          className="w-full border rounded-lg p-2 mb-2"
          value={selectedPolicy}
          onChange={(e) => handlePolicyChange(e.target.value)}
        >
          {policyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        {/* List of policies with delete option */}
        <div className="border p-3 rounded-lg bg-gray-50">
          <p className="text-sm font-medium mb-2">Available Policies:</p>
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {policyTypes
              .filter((type) => type !== "Add Custom Policy")
              .map((type) => (
                <li
                  key={type}
                  className="flex justify-between items-center bg-white px-3 py-1 rounded shadow-sm"
                >
                  <span>{type}</span>
                  <button
                    onClick={() => handleDeletePolicy(type)}
                    className="text-red-500 hover:text-red-700"
                  >
                    ❌
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>

      {/* Custom Policy Input */}
      {showCustomInput && (
        <div className="mb-4 flex items-center gap-2">
          <input
            type="text"
            value={customPolicyName}
            onChange={(e) => setCustomPolicyName(e.target.value)}
            className="flex-1 border rounded-lg p-2"
            placeholder="Enter custom policy name"
          />
          <button
            onClick={handleCustomPolicySubmit}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Add
          </button>
        </div>
      )}

      {/* Upload CSV Section */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Upload Policy Document (CSV)
        </label>
        <input
          type="file"
          accept=".csv"
          onChange={handleCSVUpload}
          className="w-full border p-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />
        {uploadedFileName && (
          <p className="text-sm text-gray-600 mt-2">Uploaded: {uploadedFileName}</p>
        )}
      </div>

      {/* Save Button */}
      <button
        onClick={() =>
          alert(`Policy Saved for ${selectedCompany} - ${selectedPolicy}`)
        }
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Save Policy
      </button>
    </div>
  );
}
