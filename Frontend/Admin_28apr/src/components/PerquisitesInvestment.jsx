import React, { useState } from "react";

const AdminPanel = ({ companyId }) => {
    const [perks, setPerks] = useState([
        { perkName: "HRA", perkType: "Allowance", taxable: true, taxRule: "Section 10(13A)", calculationMethod: "Fixed" },
        { perkName: "Company Car", perkType: "Motor Perk", taxable: true, taxRule: "₹1800/month as per IT act", calculationMethod: "% of CTC" },
        { perkName: "Loan Perk", perkType: "Loan Perk", taxable: true, taxRule: "Interest diff > 5%", calculationMethod: "Fixed" },
    ]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [perkName, setPerkName] = useState("");
    const [perkType, setPerkType] = useState("");
    const [taxable, setTaxable] = useState(false);
    const [taxRule, setTaxRule] = useState("");
    const [calculationMethod, setCalculationMethod] = useState("Fixed");
    const [assignedPerks, setAssignedPerks] = useState([]);

    // Handle Adding New Perk
    const handleAddPerk = (e) => {
        e.preventDefault();
        const newPerk = { perkName, perkType, taxable, taxRule, calculationMethod };
        setPerks([...perks, newPerk]);
        setPerkName("");
        setPerkType("");
        setTaxable(false);
        setTaxRule("");
        setCalculationMethod("Fixed");
    };

    // Handle Assigning Perk to Employee
    const handleAssignPerk = (e) => {
        e.preventDefault();
        if (!selectedEmployee) return;
        const perkAssignment = {
            employeeId: selectedEmployee,
            perkType,
            taxable,
        };
        setAssignedPerks([...assignedPerks, perkAssignment]);
    };

    // Handle Selecting Employee
    const handleSelectEmployee = (employeeId) => {
        setSelectedEmployee(employeeId);
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">Admin Panel - Perquisites Management</h2>

            {/* Configure Company Perks */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Configure Company Perks</h3>
                <form onSubmit={handleAddPerk} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Perk Name</label>
                            <input
                                type="text"
                                value={perkName}
                                onChange={(e) => setPerkName(e.target.value)}
                                placeholder="Enter perk name"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Perk Type</label>
                            <input
                                type="text"
                                value={perkType}
                                onChange={(e) => setPerkType(e.target.value)}
                                placeholder="Enter perk type"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Taxable</label>
                            <input
                                type="checkbox"
                                checked={taxable}
                                onChange={(e) => setTaxable(e.target.checked)}
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Tax Rule</label>
                            <input
                                type="text"
                                value={taxRule}
                                onChange={(e) => setTaxRule(e.target.value)}
                                placeholder="Tax rule or section"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Calculation Method</label>
                        <select
                            value={calculationMethod}
                            onChange={(e) => setCalculationMethod(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="Fixed">Fixed</option>
                            <option value="% of CTC">% of CTC</option>
                            <option value="Rule-based">Rule-based</option>
                        </select>
                    </div>

                    <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                        Add Perk
                    </button>
                </form>
            </div>

            {/* List of Defined Perks */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Defined Perks</h3>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Perk Name</th>
                            <th className="px-4 py-2 border">Perk Type</th>
                            <th className="px-4 py-2 border">Taxable</th>
                            <th className="px-4 py-2 border">Tax Rule</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {perks.map((perk, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border">{perk.perkName}</td>
                                <td className="px-4 py-2 border">{perk.perkType}</td>
                                <td className="px-4 py-2 border">{perk.taxable ? "Yes" : "No"}</td>
                                <td className="px-4 py-2 border">{perk.taxRule}</td>
                                <td className="px-4 py-2 border">
                                    <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">Edit</button>
                                    <button className="bg-red-600 text-white px-4 py-2 rounded-md ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Assign Perk to Employee */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h3 className="text-xl font-semibold mb-4">Assign Perk to Employee</h3>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Employee</label>
                    <select onChange={(e) => handleSelectEmployee(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
                        <option value="">Select Employee</option>
                        <option value="EMP001">Priya Sharma</option>
                        <option value="EMP102">Anil Kumar</option>
                        <option value="EMP103">Rita Singh</option>
                    </select>
                </div>

                {selectedEmployee && (
                    <form onSubmit={handleAssignPerk} className="mt-4 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Perk Type</label>
                            <input
                                type="text"
                                value={perkType}
                                onChange={(e) => setPerkType(e.target.value)}
                                placeholder="Enter perk type (e.g., HRA)"
                                required
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Taxable</label>
                            <input
                                type="checkbox"
                                checked={taxable}
                                onChange={(e) => setTaxable(e.target.checked)}
                                className="mt-1"
                            />
                        </div>

                        <button type="submit" className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
                            Assign Perk
                        </button>
                    </form>
                )}
            </div>

            {/* Assigned Perks List */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Assigned Perks</h3>
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">Employee ID</th>
                            <th className="px-4 py-2 border">Perk Type</th>
                            <th className="px-4 py-2 border">Taxable</th>
                            <th className="px-4 py-2 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignedPerks.map((assignment, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border">{assignment.employeeId}</td>
                                <td className="px-4 py-2 border">{assignment.perkType}</td>
                                <td className="px-4 py-2 border">{assignment.taxable ? "Yes" : "No"}</td>
                                <td className="px-4 py-2 border">
                                    <button className="bg-yellow-400 text-white px-4 py-2 rounded-md">Edit</button>
                                    <button className="bg-red-600 text-white px-4 py-2 rounded-md ml-2">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPanel;