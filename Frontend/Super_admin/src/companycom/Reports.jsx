import React, { useState } from "react";

const dummyData = {
    employees: [
        {
            id: "E001",
            name: "Ravi Kumar",
            department: "HR",
            designation: "Manager",
            salary: { basic: 40000, allowances: 10000, deductions: 5000, net: 45000, date: "2025-03-31" },
            tax: { oldRegime: 15000, newRegime: 13000, investments: 3000 },
            reimbursements: [
                { category: "Travel", amount: 1200, approved: true, date: "2025-03-20" },
                { category: "Internet", amount: 800, approved: true, date: "2025-03-15" }
            ],
            attendance: { present: 22, absent: 2, otHours: 5, leave: { PL: 1, CL: 1, SL: 0 } },
            performance: { KRA: 85, selfEval: "Very Good", managerComment: "Consistent performer" }
        },
        {
            id: "E002",
            name: "Priya Mehta",
            department: "Finance",
            designation: "Accountant",
            salary: { basic: 35000, allowances: 8000, deductions: 3000, net: 40000, date: "2025-03-31" },
            tax: { oldRegime: 14000, newRegime: 12500, investments: 2500 },
            reimbursements: [{ category: "Stationery", amount: 600, approved: true, date: "2025-03-18" }],
            attendance: { present: 21, absent: 3, otHours: 2, leave: { PL: 2, CL: 1, SL: 0 } },
            performance: { KRA: 78, selfEval: "Good", managerComment: "Reliable work" }
        },
        {
            id: "E003",
            name: "Aman Joshi",
            department: "IT",
            designation: "Developer",
            salary: { basic: 50000, allowances: 12000, deductions: 6000, net: 56000, date: "2025-03-31" },
            tax: { oldRegime: 17000, newRegime: 15500, investments: 4000 },
            reimbursements: [{ category: "Laptop", amount: 3000, approved: true, date: "2025-03-10" }],
            attendance: { present: 23, absent: 1, otHours: 6, leave: { PL: 1, CL: 0, SL: 0 } },
            performance: { KRA: 91, selfEval: "Excellent", managerComment: "Top performer" }
        },
        {
            id: "E004",
            name: "Sneha Rao",
            department: "Sales",
            designation: "Executive",
            salary: { basic: 30000, allowances: 7000, deductions: 2000, net: 35000, date: "2025-03-31" },
            tax: { oldRegime: 13000, newRegime: 11500, investments: 2000 },
            reimbursements: [],
            attendance: { present: 20, absent: 4, otHours: 3, leave: { PL: 1, CL: 1, SL: 2 } },
            performance: { KRA: 72, selfEval: "Satisfactory", managerComment: "Needs improvement" }
        },
        {
            id: "E005",
            name: "Karan Singh",
            department: "Marketing",
            designation: "Analyst",
            salary: { basic: 42000, allowances: 9000, deductions: 4000, net: 47000, date: "2025-03-31" },
            tax: { oldRegime: 16000, newRegime: 14000, investments: 3500 },
            reimbursements: [{ category: "Client Meeting", amount: 1500, approved: true, date: "2025-03-22" }],
            attendance: { present: 22, absent: 2, otHours: 4, leave: { PL: 0, CL: 2, SL: 0 } },
            performance: { KRA: 80, selfEval: "Good", managerComment: "Meets expectations" }
        },
        {
            id: "E006",
            name: "Neha Jain",
            department: "Operations",
            designation: "Coordinator",
            salary: { basic: 36000, allowances: 6000, deductions: 3000, net: 39000, date: "2025-03-31" },
            tax: { oldRegime: 14500, newRegime: 13000, investments: 2800 },
            reimbursements: [],
            attendance: { present: 21, absent: 3, otHours: 2, leave: { PL: 2, CL: 0, SL: 1 } },
            performance: { KRA: 76, selfEval: "Above Average", managerComment: "Good coordination" }
        },
        {
            id: "E007",
            name: "Rajesh Verma",
            department: "Support",
            designation: "Engineer",
            salary: { basic: 38000, allowances: 8500, deductions: 4500, net: 42000, date: "2025-03-31" },
            tax: { oldRegime: 14800, newRegime: 13200, investments: 3200 },
            reimbursements: [{ category: "Tools", amount: 1100, approved: true, date: "2025-03-25" }],
            attendance: { present: 24, absent: 0, otHours: 7, leave: { PL: 0, CL: 0, SL: 0 } },
            performance: { KRA: 88, selfEval: "Very Good", managerComment: "Highly dependable" }
        },
        {
            id: "E008",
            name: "Divya Sharma",
            department: "Admin",
            designation: "Assistant",
            salary: { basic: 28000, allowances: 5000, deductions: 1500, net: 31500, date: "2025-03-31" },
            tax: { oldRegime: 11000, newRegime: 10000, investments: 1800 },
            reimbursements: [],
            attendance: { present: 20, absent: 4, otHours: 1, leave: { PL: 1, CL: 2, SL: 1 } },
            performance: { KRA: 70, selfEval: "Average", managerComment: "Can do better" }
        },
        {
            id: "E009",
            name: "Harshit Malik",
            department: "Legal",
            designation: "Advisor",
            salary: { basic: 60000, allowances: 10000, deductions: 8000, net: 62000, date: "2025-03-31" },
            tax: { oldRegime: 19000, newRegime: 16500, investments: 5000 },
            reimbursements: [{ category: "Court Visit", amount: 2000, approved: true, date: "2025-03-28" }],
            attendance: { present: 22, absent: 2, otHours: 3, leave: { PL: 0, CL: 1, SL: 1 } },
            performance: { KRA: 89, selfEval: "Excellent", managerComment: "Very professional" }
        },
        {
            id: "E010",
            name: "Tanvi Desai",
            department: "Design",
            designation: "UI/UX Designer",
            salary: { basic: 45000, allowances: 9500, deductions: 3500, net: 51000, date: "2025-03-31" },
            tax: { oldRegime: 16000, newRegime: 14000, investments: 3000 },
            reimbursements: [{ category: "Fonts & Tools", amount: 900, approved: true, date: "2025-03-19" }],
            attendance: { present: 23, absent: 1, otHours: 4, leave: { PL: 1, CL: 0, SL: 0 } },
            performance: { KRA: 87, selfEval: "Very Good", managerComment: "Creative and punctual" }
        }
    ]
};

export default function Reports1() {
    const [selectedEmployee, setSelectedEmployee] = useState("All");

    const filtered =
        selectedEmployee === "All"
            ? dummyData.employees
            : dummyData.employees.filter((emp) => emp.name === selectedEmployee);

    return (
        <div className="grid gap-4 p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Admin Panel – Reports</h1>
                <select
                    className="border p-2 rounded"
                    value={selectedEmployee}
                    onChange={(e) => setSelectedEmployee(e.target.value)}
                >
                    <option value="All">All Employees</option>
                    {dummyData.employees.map((e) => (
                        <option key={e.id} value={e.name}>
                            {e.name}
                        </option>
                    ))}
                </select>
            </div>

            {filtered.map((emp) => (
                <div
                    key={emp.id}
                    className="bg-white shadow-md rounded-xl p-4 space-y-4"
                >
                    <h2 className="text-lg font-semibold">
                        {emp.name} ({emp.id})
                    </h2>

                    <div>
                        <h3 className="font-semibold">Payroll Report</h3>
                        <p>Basic: ₹{emp.salary.basic}</p>
                        <p>Allowances: ₹{emp.salary.allowances}</p>
                        <p>Deductions: ₹{emp.salary.deductions}</p>
                        <p>Net Salary: ₹{emp.salary.net}</p>
                        <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
                            Download Payslip
                        </button>
                    </div>

                    <div>
                        <h3 className="font-semibold">Tax Computation</h3>
                        <p>Old Regime Tax: ₹{emp.tax.oldRegime}</p>
                        <p>New Regime Tax: ₹{emp.tax.newRegime}</p>
                        <p>Investments: ₹{emp.tax.investments}</p>
                        <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
                            Download Tax Sheet
                        </button>
                    </div>

                    <div>
                        <h3 className="font-semibold">Reimbursements</h3>
                        {emp.reimbursements.map((r, idx) => (
                            <p key={idx}>
                                {r.category}: ₹{r.amount} ({r.approved ? "Approved" : "Pending"})
                            </p>
                        ))}
                        <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
                            Download Reimbursements
                        </button>
                    </div>

                    <div>
                        <h3 className="font-semibold">Attendance & Leave</h3>
                        <p>Present: {emp.attendance.present} days</p>
                        <p>Absent: {emp.attendance.absent} days</p>
                        <p>OT Hours: {emp.attendance.otHours}</p>
                        <p>
                            PL: {emp.attendance.leave.PL}, CL: {emp.attendance.leave.CL}, SL: {emp.attendance.leave.SL}
                        </p>
                        <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
                            Download Attendance
                        </button>
                    </div>

                    <div>
                        <h3 className="font-semibold">Performance Summary</h3>
                        <p>KRA Score: {emp.performance.KRA}%</p>
                        <p>Self Evaluation: {emp.performance.selfEval}</p>
                        <p>Manager Comment: {emp.performance.managerComment}</p>
                        <button className="mt-2 px-4 py-1 border rounded hover:bg-gray-100">
                            Download Performance Report
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}