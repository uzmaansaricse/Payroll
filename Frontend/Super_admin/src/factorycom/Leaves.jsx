import { useState } from "react";

const policyTypes = [
  "Attendance Policy",
  "Leave Policy",
  "Shift Policy",
  "Overtime Policy",
  "Safety and Health Policy",
  "Reimbursement Policy",
  "Exit Policy",
  "Break Time Policy",
  "Workplace Safety Protocols",
  "Equipment Handling Policy",
];

const companies = [
  { id: "C001", name: "TechNova Pvt Ltd" },
  { id: "C002", name: "AlphaCore Solutions" },
  { id: "C003", name: "QuantumWorks Inc" },
];

export default function FactoryPolicyManager2() {
  const [selectedCompany, setSelectedCompany] = useState("C001");
  const [selectedPolicy, setSelectedPolicy] = useState(policyTypes[0]);

  const renderForm = () => {
    switch (selectedPolicy) {
      case "Attendance Policy":
        return (
          <div className="space-y-4">
            <Input label="Punctuality for Shift (e.g., 5 minutes grace period)" />
            <Input label="Late Arrival Consequences" />
            <Input label="Attendance Tracking Method (e.g., biometric)" />
          </div>
        );
      case "Leave Policy":
        return (
          <div className="space-y-4">
            <Input label="Casual Leave Entitlement (days)" />
            <Input label="Sick Leave Entitlement (days)" />
            <Input label="Leave Approval Process" />
          </div>
        );
      case "Shift Policy":
        return (
          <div className="space-y-4">
            <Input label="Shift Duration (hours)" />
            <Input label="Shift Rotation (Yes/No)" />
            <Input label="Overtime Allowance (per hour)" />
          </div>
        );
      case "Overtime Policy":
        return (
          <div className="space-y-4">
            <Input label="Max Overtime Hours per Month" />
            <Input label="Overtime Compensation Rate (e.g., time and a half)" />
            <Input label="Overtime Approval Process" />
          </div>
        );
      case "Safety and Health Policy":
        return (
          <div className="space-y-4">
            <Input label="Safety Protocols (e.g., PPE required)" />
            <Input label="Emergency Contact Information" />
            <Input label="First Aid Availability" />
          </div>
        );
      case "Reimbursement Policy":
        return (
          <div className="space-y-4">
            <Input label="Travel Reimbursement Process" />
            <Input label="Medical Reimbursement Guidelines" />
            <Input label="Receipt Submission Process" />
          </div>
        );
      case "Exit Policy":
        return (
          <div className="space-y-4">
            <Input label="Notice Period (days)" />
            <Input label="Exit Interview Process" />
            <Input label="Work Handover Process" />
          </div>
        );
      case "Break Time Policy":
        return (
          <div className="space-y-4">
            <Input label="Break Duration (minutes)" />
            <Input label="Mandatory Rest Periods Between Shifts" />
            <Input label="Meal Breaks (timing and duration)" />
          </div>
        );
      case "Workplace Safety Protocols":
        return (
          <div className="space-y-4">
            <Input label="Workplace Safety Measures" />
            <Input label="Accident Reporting Process" />
            <Input label="Compliance with Safety Regulations" />
          </div>
        );
      case "Equipment Handling Policy":
        return (
          <div className="space-y-4">
            <Input label="Equipment Usage Guidelines" />
            <Input label="Machine Maintenance Schedule" />
            <Input label="Safety Measures During Equipment Operation" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-6">Factory Policy Manager</h2>

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
