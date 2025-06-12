import { useState } from "react";
import { Switch } from "@headlessui/react";

const dummyCompanies = [
  { id: "C001", name: "TechNova Pvt Ltd" },
  { id: "C002", name: "AlphaCore Solutions" },
  { id: "C003", name: "QuantumWorks Inc" },
];

const initialLatePolicies = {
  C001: { isEnabled: true, allowedMinutes: 15, gracePerMonth: 3 },
  C002: { isEnabled: false, allowedMinutes: 10, gracePerMonth: 2 },
  C003: { isEnabled: true, allowedMinutes: 5, gracePerMonth: 1 },
};

export default function LateArrivalPolicy() {
  const [selectedCompany, setSelectedCompany] = useState("C001");
  const [latePolicies, setLatePolicies] = useState(initialLatePolicies);

  const policy = latePolicies[selectedCompany];

  const handleToggle = () => {
    setLatePolicies((prev) => ({
      ...prev,
      [selectedCompany]: {
        ...prev[selectedCompany],
        isEnabled: !prev[selectedCompany].isEnabled,
      },
    }));
  };

  const handleChange = (field, value) => {
    setLatePolicies((prev) => ({
      ...prev,
      [selectedCompany]: {
        ...prev[selectedCompany],
        [field]: value,
      },
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-6">Late Arrival Policy</h2>

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

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-medium">Enable Late Arrival Policy</span>
        <Switch
          checked={policy.isEnabled}
          onChange={handleToggle}
          className={`${
            policy.isEnabled ? "bg-blue-600" : "bg-gray-300"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              policy.isEnabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform bg-white rounded-full transition`}
          />
        </Switch>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Allowed Late Minutes
        </label>
        <input
          type="number"
          className="w-full border rounded-lg p-2"
          value={policy.allowedMinutes}
          onChange={(e) =>
            handleChange("allowedMinutes", parseInt(e.target.value))
          }
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Grace Entries Per Month
        </label>
        <input
          type="number"
          className="w-full border rounded-lg p-2"
          value={policy.gracePerMonth}
          onChange={(e) =>
            handleChange("gracePerMonth", parseInt(e.target.value))
          }
        />
      </div>

      <button
        onClick={() => alert("Policy Saved (Dummy)")}
        className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
      >
        Save Policy
      </button>
    </div>
  );
}
