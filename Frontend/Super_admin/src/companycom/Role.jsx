import React, { useState } from 'react';

const otSetupSteps = [
  {
    step: 'Define working hours policy',
    details: 'Regular: 9 AM – 6 PM (9h, incl. 1h break); Effective: 8h/day; Weekly cap: 48h/week',
  },
  {
    step: 'Capture actual working hours',
    details: 'Biometric, timesheets, swipe cards, ESS portal',
  },
  {
    step: 'Calculate daily OT',
    details: 'Daily OT = Actual hours - Regular hours; e.g., 11h - 8h = 3h OT',
  },
  {
    step: 'Apply approval policy',
    details: 'Only if approved by manager or pre-approved task/project',
  },
  {
    step: 'Calculate at company level',
    details: 'Sum all approved OT; e.g., 3+2+0 = 5h',
  },
  {
    step: 'Consider weekly/monthly caps',
    details: 'Max 12h/week, 50h/month per employee',
  },
  {
    step: 'Apply OT rate for payout',
    details: 'Normal OT: 1.5x wage; Sunday/Holiday OT: 2x wage',
  },
];

export default function OTSetup1() {
  const [selectedCompany, setSelectedCompany] = useState('COMP001');
  const [expandedStep, setExpandedStep] = useState(null);

  const handleToggle = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Overtime Setup</h1>

      <select
        value={selectedCompany}
        onChange={handleCompanyChange}
        className="mb-6 p-2 border rounded w-full"
      >
        <option value="COMP001">ABC Pvt Ltd</option>
        <option value="COMP002">XYZ Solutions</option>
        <option value="COMP003">TechSoft India</option>
      </select>

      <div className="space-y-4">
        {otSetupSteps.map((step, index) => (
          <div key={index} className="border rounded p-4 shadow">
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left flex justify-between items-center"
            >
              <span className="font-medium">{step.step}</span>
              <span>{expandedStep === index ? '▲' : '▼'}</span>
            </button>
            {expandedStep === index && (
              <div className="mt-2 text-sm text-gray-600">{step.details}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
