import { useState } from "react";
import { Switch } from "@headlessui/react";

const dummyCompanies = [
  { id: "C001", name: "TechNova Pvt Ltd" },
  { id: "C002", name: "AlphaCore Solutions" },
];

const dummyFactories = {
  C001: [
    { id: "F001", name: "Jaipur Plant" },
    { id: "F002", name: "Delhi Plant" },
  ],
  C002: [
    { id: "F003", name: "Mumbai Unit" },
    { id: "F004", name: "Bangalore Unit" },
  ],
};

const initialFactoryLateArrivalPolicies = {
  F001: { isEnabled: true, lateArrivalThreshold: "09:00", deductionPercent: 10 },
  F002: { isEnabled: false, lateArrivalThreshold: "09:30", deductionPercent: 5 },
  F003: { isEnabled: true, lateArrivalThreshold: "08:45", deductionPercent: 15 },
  F004: { isEnabled: true, lateArrivalThreshold: "09:15", deductionPercent: 12 },
};

export default function LateArrivalPolicyFactory() {
  const [selectedCompany, setSelectedCompany] = useState("C001");
  const [selectedFactory, setSelectedFactory] = useState("F001");
  const [policies, setPolicies] = useState(initialFactoryLateArrivalPolicies);

  const factories = dummyFactories[selectedCompany];
  const policy = policies[selectedFactory];

  const handleToggle = () => {
    setPolicies((prev) => ({
      ...prev,
      [selectedFactory]: {
        ...prev[selectedFactory],
        isEnabled: !prev[selectedFactory].isEnabled,
      },
    }));
  };

  const handleChange = (field, value) => {
    setPolicies((prev) => ({
      ...prev,
      [selectedFactory]: {
        ...prev[selectedFactory],
        [field]: value,
      },
    }));
  };

  const handleCompanyChange = (companyId) => {
    setSelectedCompany(companyId);
    const firstFactoryId = dummyFactories[companyId][0]?.id;
    setSelectedFactory(firstFactoryId);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow">
      <h2 className="text-2xl font-semibold mb-4">Late Arrival Policy (Factory Level)</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Company</label>
        <select
          className="w-full border rounded-lg p-2"
          value={selectedCompany}
          onChange={(e) => handleCompanyChange(e.target.value)}
        >
          {dummyCompanies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Select Factory</label>
        <select
          className="w-full border rounded-lg p-2"
          value={selectedFactory}
          onChange={(e) => setSelectedFactory(e.target.value)}
        >
          {factories.map((factory) => (
            <option key={factory.id} value={factory.id}>
              {factory.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium">Enable Late Arrival Policy</span>
        <Switch
          checked={policy.isEnabled}
          onChange={handleToggle}
          className={`${policy.isEnabled ? "bg-blue-600" : "bg-gray-300"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${policy.isEnabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Late Arrival Threshold (HH:MM)</label>
        <input
          type="time"
          className="w-full border rounded-lg p-2"
          value={policy.lateArrivalThreshold}
          onChange={(e) => handleChange("lateArrivalThreshold", e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Deduction Percentage (%)
        </label>
        <input
          type="number"
          className="w-full border rounded-lg p-2"
          value={policy.deductionPercent}
          onChange={(e) => handleChange("deductionPercent", e.target.value)}
        />
      </div>

      <button
        className="w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition"
        onClick={() => alert("Saved (Dummy Action)")}
      >
        Save Policy
      </button>
    </div>
  );
}
