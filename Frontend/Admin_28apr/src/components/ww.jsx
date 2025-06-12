

import { useState } from "react";

const policyTypes = [
  "Attendance Policy",
  "Leave Policy",
  "Shift Policy",
  "Overtime Policy",
  "Work From Home Policy",
  "Reimbursement Policy",
  "Exit Policy",
  "Document Upload Rules",
];

const companies = [
  { id: "C001", name: "TechNova Pvt Ltd" },
  { id: "C002", name: "AlphaCore Solutions" },
  { id: "C003", name: "QuantumWorks Inc" },
];

export default function PolicyManager() {
  const [selectedCompany, setSelectedCompany] = useState("C001");
  const [selectedPolicy, setSelectedPolicy] = useState(policyTypes[0]);

  const renderForm = () => {
    switch (selectedPolicy) {
      case "Attendance Policy":
        return (
          <div className="space-y-4">
            <Input label="Minimum Hours Per Day" />
            <Input label="Grace Time (minutes)" />
            <Input label="Late Mark Threshold" />
          </div>
        );
      case "Leave Policy":
        return (
          <div className="space-y-4">
            <Input label="Annual Casual Leaves" />
            <Input label="Leave Carry Forward (Yes/No)" />
            <Input label="Encashment Allowed (Yes/No)" />
          </div>
        );
      case "Shift Policy":
        return (
          <div className="space-y-4">
            <Input label="Number of Shifts" />
            <Input label="Shift Rotation (Yes/No)" />
            <Input label="Shift Allowance (if any)" />
          </div>
        );
      case "Overtime Policy":
        return (
          <div className="space-y-4">
            <Input label="OT Rate (per hour)" />
            <Input label="Max OT Hours/Month" />
            <Input label="Comp-Off Allowed (Yes/No)" />
          </div>
        );
      case "Work From Home Policy":
        return (
          <div className="space-y-4">
            <Input label="WFH Days Allowed/Month" />
            <Input label="Approval Required (Yes/No)" />
          </div>
        );
      case "Reimbursement Policy":
        return (
          <div className="space-y-4">
            <Input label="Daily Allowance Limit" />
            <Input label="Travel Reimbursement Cap" />
            <Input label="Receipt Mandatory (Yes/No)" />
          </div>
        );
      case "Exit Policy":
        return (
          <div className="space-y-4">
            <Input label="Notice Period (days)" />
            <Input label="Buyout Option (Yes/No)" />
            <Input label="Clearance Workflow Description" />
          </div>
        );
      case "Document Upload Rules":
        return (
          <div className="space-y-4">
            <Input label="List of Mandatory Docs (comma separated)" />
            <Input label="Max File Size (MB)" />
            <Input label="Allowed File Types (comma separated)" />
          </div>
        );
      default:
        return null;
    }
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
          className="w-full border rounded-lg p-2"
          value={selectedPolicy}
          onChange={(e) => setSelectedPolicy(e.target.value)}
        >
          {policyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Dynamic Form */}
      {renderForm()}

      {/* Save Button */}
      <button
        onClick={() =>
          alert(`Policy Saved for ${selectedCompany} - ${selectedPolicy}`)
        }
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Save Policy
      </button>
    </div>
  );
}

function Input({ label }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        className="w-full border rounded-lg p-2"
        placeholder={label}
      />
    </div>
  );
}
