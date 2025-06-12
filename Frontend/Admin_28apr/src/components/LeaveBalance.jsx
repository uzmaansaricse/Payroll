import React, { useEffect, useState } from 'react'

export default function LeaveBalance() {
    const [selectedCompany, setSelectedCompany] = useState('');
    const [leaveBalanceReports, setLeaveBalanceReports] = useState([]);
    const [leaveApplications, setLeaveApplications] = useState([]); 
    useEffect(() => {
        // Fetch dummy data for leave applications and balance reports
        setLeaveApplications([
            { employeeId: 'E1001', employeeName: 'Anuj Saini', leaveType: 'PL', leaveStartDate: '2025-04-01', leaveEndDate: '2025-04-03', status: 'Approved', days: 3 },
            { employeeId: 'E1002', employeeName: 'Amit Jain', leaveType: 'SL', leaveStartDate: '2025-04-05', leaveEndDate: '2025-04-05', status: 'Pending', days: 1 },
            { employeeId: 'E1003', employeeName: 'Sanjay Yadav', leaveType: 'CL', leaveStartDate: '2025-04-10', leaveEndDate: '2025-04-10', status: 'Rejected', days: 1 },
            { employeeId: 'E1004', employeeName: 'Rohit Kumar', leaveType: 'PL', leaveStartDate: '2025-04-15', leaveEndDate: '2025-04-18', status: 'Approved', days: 4 },
            { employeeId: 'E1005', employeeName: 'Nisha Verma', leaveType: 'SL', leaveStartDate: '2025-04-17', leaveEndDate: '2025-04-18', status: 'Approved', days: 2 },
            { employeeId: 'E1006', employeeName: 'Priya Sharma', leaveType: 'PL', leaveStartDate: '2025-04-20', leaveEndDate: '2025-04-21', status: 'Pending', days: 2 },
            { employeeId: 'E1007', employeeName: 'Vikram Singh', leaveType: 'CL', leaveStartDate: '2025-04-22', leaveEndDate: '2025-04-22', status: 'Approved', days: 1 },
            { employeeId: 'E1008', employeeName: 'Neha Gupta', leaveType: 'PL', leaveStartDate: '2025-04-25', leaveEndDate: '2025-04-26', status: 'Rejected', days: 2 },
            { employeeId: 'E1009', employeeName: 'Karan Reddy', leaveType: 'SL', leaveStartDate: '2025-04-28', leaveEndDate: '2025-04-29', status: 'Approved', days: 2 },
            { employeeId: 'E1010', employeeName: 'Anjali Mehta', leaveType: 'PL', leaveStartDate: '2025-04-30', leaveEndDate: '2025-05-02', status: 'Approved', days: 3 },
        ]);


    }, []);
    return (
        <div className='p-3'>

            <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Leave Balance Reports</h3>
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            <th className="border p-2">Employee ID</th>
                            <th className="border p-2">Employee Name</th>
                            <th className="border p-2">Leave Type</th>
                            <th className="border p-2">Total Quota</th>
                            <th className="border p-2">Used Leaves</th>
                            <th className="border p-2">Remaining Leaves</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaveApplications.map((report, index) => (
                            <tr key={index}>
                                <td className="border p-2">{report.employeeId}</td>
                                <td className="border p-2">{report.employeeName}</td>
                                <td className="border p-2">{report.leaveType}</td>
                                <td className="border p-2">{report.totalQuota}</td>
                                <td className="border p-2">{report.usedLeaves}</td>
                                <td className="border p-2">{report.remainingLeaves}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
