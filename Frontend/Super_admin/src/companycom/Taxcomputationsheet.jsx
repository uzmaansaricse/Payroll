import React, { useState } from "react";

const dummyEmployees = [
    {
        id: 1,
        name: "John Doe",
        grossSalary: 600000,
        deductions: 150000,
        regime: "old",
    },
    {
        id: 2,
        name: "Jane Smith",
        grossSalary: 600000,
        deductions: 0,
        regime: "new",
    },
];

const calculateTax = (salary, deductions, regime) => {
    let taxableIncome = regime === "old" ? salary - deductions : salary;
    let tax = 0;

    if (taxableIncome <= 250000) {
        tax = 0;
    } else if (taxableIncome <= 500000) {
        tax = (taxableIncome - 250000) * 0.05;
    } else if (taxableIncome <= 1000000) {
        tax = 12500 + (taxableIncome - 500000) * 0.2;
    } else {
        tax = 112500 + (taxableIncome - 1000000) * 0.3;
    }

    return { taxableIncome, tax };
};

export default function TaxComputation() {
    const [employees] = useState(dummyEmployees);

    return (
        <div className="p-6 h-screen">
            <h2 className="text-2xl font-bold mb-6">Tax Computation Sheet</h2>
            <table className="w-full text-sm border border-gray-300">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border p-2">Employee</th>
                        <th className="border p-2">Regime</th>
                        <th className="border p-2">Gross Salary</th>
                        <th className="border p-2">Deductions</th>
                        <th className="border p-2">Taxable Income</th>
                        <th className="border p-2">Tax Payable</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp) => {
                        const { taxableIncome, tax } = calculateTax(
                            emp.grossSalary,
                            emp.deductions,
                            emp.regime
                        );
                        return (
                            <tr key={emp.id}>
                                <td className="border p-2">{emp.name}</td>
                                <td className="border p-2 capitalize">{emp.regime}</td>
                                <td className="border p-2">₹{emp.grossSalary.toLocaleString()}</td>
                                <td className="border p-2">₹{emp.deductions.toLocaleString()}</td>
                                <td className="border p-2">₹{taxableIncome.toLocaleString()}</td>
                                <td className="border p-2">₹{tax.toLocaleString()}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}