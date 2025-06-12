import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const approvalRoles = {
  level1: "Admin",
  level2: "Manager",
  level3: "Super Admin",
};

const modules = {
  "Add Employee": null,
  Payroll: [
    "CTC Structure",
    "Payments & Deductions",
    "Perquisites Investments",
    "Tax Computation",
    "Reimbursement",
    "Flexi",
  ],
  "Leave Manage": ["Attendance", "Leave Requests", "Overtime Tracking"],
  Onboarding: ["New Joiners Form"],
  "Exit Formality": ["Resignation"],
};

export default function ApprovalForm({ company, goBack }) {
  const [approvals, setApprovals] = useState({});
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function

  // Handle the selection of approval role for each module
  const handleSelect = (key, value) => {
    setApprovals((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Get the approval value for a given module
  const getApprovalValue = (key) => approvals[key] || "Admin";

  // Save the approval configuration and handle the redirect
  const handleSave = async () => {
    try {
      setSaving(true);
      await axios.post("http://localhost:5000/api/superadmin/approval-config", {
        companyId: company._id,  // Send the company ID along with the approval settings
        approvals,
      });
      alert("Approval config saved successfully!");

      // Redirect to the Admin Dashboard after saving approval settings
      navigate(`/admin/dashboard/${company._id}`); // Redirect to the Admin Dashboard
    } catch (err) {
      console.error(err);
      alert("Failed to save approval settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-4 border rounded shadow">
      <h3 className="text-lg font-bold mb-4">
        Approval Setup for {company.companyName}
      </h3>

      {/* Loop through modules and render them */}
      {Object.entries(modules).map(([mainModule, subModules]) => (
        <div key={mainModule} className="mb-4">
          <h4 className="font-medium mb-2">{mainModule}</h4>
          {subModules ? (
            subModules.map((sub) => (
              <div key={sub} className="flex items-center gap-4 mb-2">
                <label className="w-64">{sub}</label>
                <select
                  value={getApprovalValue(sub)}
                  onChange={(e) => handleSelect(sub, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {Object.values(approvalRoles).map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            ))
          ) : (
            <div className="flex items-center gap-4 mb-2">
              <label className="w-64">{mainModule}</label>
              <select
                value={getApprovalValue(mainModule)}
                onChange={(e) => handleSelect(mainModule, e.target.value)}
                className="border rounded px-2 py-1"
              >
                {Object.values(approvalRoles).map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      ))}

      {/* Save and Back buttons */}
      <div className="mt-6 flex gap-3">
        <button
          onClick={handleSave}
          disabled={saving}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {saving ? "Saving..." : "Save"}
        </button>
        <button onClick={goBack} className="bg-gray-400 text-white px-4 py-2 rounded">
          Back
        </button>
      </div>
    </div>
  );
}
