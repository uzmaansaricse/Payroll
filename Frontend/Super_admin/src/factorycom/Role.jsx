import React, { useState } from 'react';

// Dummy company data with initial OT methods
const companiesDummy = [
  { id: 1, name: 'ABC Textiles', otMethod: 'standardLegal' },
  { id: 2, name: 'XYZ Garments', otMethod: 'pieceRate' },
  { id: 3, name: 'PQR Steel', otMethod: 'shiftAllowance' },
  { id: 4, name: 'LMN Factory', otMethod: 'weeklyAverage' },
  { id: 5, name: 'DEF Chemicals', otMethod: 'compOff' },
  { id: 6, name: 'GHI Contracting', otMethod: 'contractWorker' },
];

/**
 * SuperAdminOtSetup
 * Panel for selecting OT methods per company and calculating OT
 */
function SuperAdminOtSetup() {
  const [companies, setCompanies] = useState(companiesDummy);
  const [results, setResults] = useState(null);

  const handleMethodChange = (id, method) => {
    setCompanies(comps => comps.map(c => c.id === id ? { ...c, otMethod: method } : c));
  };

  const calculateOT = method => {
    const hourlyRate = 100;
    const otHours = 5;
    const piecesDone = 60;
    const quota = 50;
    const perPieceRate = 20;
    const shift = 'night';
    const weeklyHoursAllowed = 48;
    const actualWeeklyHours = 54;
    const otRate = 2 * hourlyRate;
    const otHoursForCompOff = 6;
    const otHoursContract = 3;

    switch (method) {
      case 'standardLegal':
        return 2 * hourlyRate * otHours;
      case 'pieceRate':
        return (piecesDone - quota) * perPieceRate;
      case 'shiftAllowance': {
        const multiplier = shift === 'day' ? 2 : shift === 'night' ? 2.5 : 3;
        return multiplier * hourlyRate * otHours;
      }
      case 'weeklyAverage':
        return (actualWeeklyHours - weeklyHoursAllowed) * otRate;
      case 'compOff':
        return otHoursForCompOff >= 6 ? '1 day off' : 'No comp off';
      case 'contractWorker':
        return otHoursContract <= 2
          ? otHoursContract * 100
          : 2 * 100 + (otHoursContract - 2) * 150;
      default:
        return 0;
    }
  };

  const handleCalculateAll = () => {
    const calcs = companies.map(c => ({
      company: c.name,
      method: c.otMethod,
      result: calculateOT(c.otMethod)
    }));
    setResults(calcs);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 shadow rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">⚙️ Super Admin OT Setup Panel</h1>
      <table className="w-full mb-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Company</th>
            <th className="p-2">OT Method</th>
            <th className="p-2">Select Method</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(comp => (
            <tr key={comp.id} className="border-b">
              <td className="p-2">{comp.name}</td>
              <td className="p-2 capitalize">{comp.otMethod}</td>
              <td className="p-2">
                <select
                  value={comp.otMethod}
                  onChange={e => handleMethodChange(comp.id, e.target.value)}
                  className="border p-1 rounded"
                >
                  <option value="standardLegal">Standard Legal</option>
                  <option value="pieceRate">Piece Rate</option>
                  <option value="shiftAllowance">Shift Allowance</option>
                  <option value="weeklyAverage">Weekly Average</option>
                  <option value="compOff">Comp Off</option>
                  <option value="contractWorker">Contract Worker</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleCalculateAll}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Calculate All OT
      </button>

      {results && (
        <div>
          <h2 className="text-xl font-semibold mb-2">🔧 Calculation Results</h2>
          <ul className="space-y-2">
            {results.map((res, idx) => (
              <li key={idx} className="bg-white p-3 rounded shadow flex justify-between">
                <span>{res.company} ({res.method}):</span>
                <span className="font-bold">
                  {typeof res.result === 'number' ? `₹ ${res.result}` : res.result}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// Cheat sheet data for OT methods
const otMethodsInfo = [
  {
    name: 'Standard Legal',
    key: 'standardLegal',
    description: '2 × hourly rate × OT hours',
    example: '₹100 hourly, 5 OT hrs → 2 × 100 × 5 = ₹1000',
  },
  {
    name: 'Piece Rate',
    key: 'pieceRate',
    description: '(pieces done - quota) × per-piece rate',
    example: '60 made, quota 50, ₹20 per piece → 200',
  },
  {
    name: 'Shift Allowance',
    key: 'shiftAllowance',
    description: 'multiplier × hourly rate × OT hours (Day=2×, Night=2.5×, Weekend=3×)',
    example: 'Night shift, 100/hr, 5 OT → 2.5 × 100 × 5 = 1250',
  },
  {
    name: 'Weekly Average',
    key: 'weeklyAverage',
    description: '(actual weekly hrs - allowed hrs) × OT rate',
    example: '54 actual, 48 allowed, ₹200 OT rate → 1200',
  },
  {
    name: 'Comp Off',
    key: 'compOff',
    description: '6+ OT hrs → 1 day off; else none',
    example: '6 OT hrs → 1 day off',
  },
  {
    name: 'Contract Worker',
    key: 'contractWorker',
    description: '0–2 hrs → ₹100/hr; 2–4 hrs → ₹150/hr',
    example: '3 hrs → 2×100 + 1×150 = 350',
  },
];

/**
 * OtMethodCheatSheet
 * Displays formulas and examples for OT methods
 */
function OtMethodCheatSheet() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-4">📄 OT Methods Cheat Sheet</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {otMethodsInfo.map(method => (
          <div key={method.key} className="bg-white p-4 rounded shadow">
            <h2 className="text-lg font-semibold mb-2">{method.name}</h2>
            <p className="text-sm mb-1"><span className="font-medium">Formula:</span> {method.description}</p>
            <p className="text-sm"><span className="font-medium">Example:</span> {method.example}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * SuperAdminOtPage
 * Combines the OT setup panel and cheat sheet
 */
export default function SuperAdminOtPage() {
  return (
    <div className="space-y-12">
      <OtMethodCheatSheet />
      <SuperAdminOtSetup />
    </div>
  );
}
