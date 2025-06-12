import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const EmployeeReport = () => {
    const [selectedCompany, setSelectedCompany] = useState('');

    // Generate 100+ dummy employee records
    const generateEmployees = () => {
        const employees = [];
        const startDate = new Date('2024-01-01');
        const endDate = new Date('2025-04-30');

        for (let i = 1; i <= 100; i++) {
            const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
            const dateJoined = randomDate.toISOString().split('T')[0];
            const date = `2025-04-${String(i % 30 + 1).padStart(2, '0')}; // Random April dates`

            employees.push({
                employeeId: `E${1000 + i}`,
                employeeName: ` Employee ${i}`,
                phone: `123456789${i}`,
                email: `employee${i}@example.com`,
                salary: `30000 + (i % 10) * 1000`,
                dateJoined,
                date,
            });
        }

        return employees;
    };

    const employeesData = generateEmployees();

    const companies = [
        { companyId: 'C001', name: 'Company A' },
        { companyId: 'C002', name: 'Company B' },
        { companyId: 'C003', name: 'Company C' },
    ];

    const handleCompanyChange = (e) => {
        setSelectedCompany(e.target.value);
    };

    const downloadReport = () => {
        if (!selectedCompany) {
            alert('Please select a company.');
            return;
        }

        // Filter dummy data for the selected company and the month of April 2025
        const filteredEmployees = employeesData.filter(employee => {
            return employee.date.startsWith('2025-04');
        });

        const excelData = filteredEmployees.map(employee => ({
            'Employee ID': employee.employeeId,
            'Employee Name': employee.employeeName,
            'Phone': employee.phone,
            'Email': employee.email,
            'Salary': employee.salary,
            'Date Joined': employee.dateJoined,
            'Date': employee.date
        }));

        // Create a worksheet from the employee data
        const ws = XLSX.utils.json_to_sheet(excelData);

        // Create a workbook and append the worksheet
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Employee Report');

        // Write the file to a binary string
        const fileBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

        // Create a Blob object from the binary string and trigger the download
        const blob = new Blob([fileBuffer], { type: 'application/octet-stream' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `employee_report_${selectedCompany}_April_2025.xlsx`;
        link.click();
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">Download Employee Report</h2>

            <div className="mb-6">
                <label className="block text-lg font-medium mb-2">Select Company</label>
                <select
                    className="w-full p-2 border border-gray-300 rounded"
                    value={selectedCompany}
                    onChange={handleCompanyChange}
                >
                    <option value="">--Select Company--</option>
                    {companies.map((company) => (
                        <option key={company.companyId} value={company.companyId}>
                            {company.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <button
                    onClick={downloadReport}
                    className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Download Employee Report (April 2025)
                </button>
            </div>
        </div>
    );
};

export default EmployeeReport;