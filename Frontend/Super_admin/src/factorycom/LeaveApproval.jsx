// import { useState } from "react";

// const policyTypes = [
//   "Attendance Policy",
//   "Leave Policy",
//   "Shift Policy",
//   "Overtime Policy",
//   "Work From Home Policy",
//   "Reimbursement Policy",
//   "Exit Policy",
//   "Document Upload Rules",
// ];

// const companies = [
//   { id: "C001", name: "TechNova Pvt Ltd" },
//   { id: "C002", name: "AlphaCore Solutions" },
//   { id: "C003", name: "QuantumWorks Inc" },
// ];

// export default function PolicyManager() {
//   const [selectedCompany, setSelectedCompany] = useState("C001");
//   const [selectedPolicy, setSelectedPolicy] = useState(policyTypes[0]);

//   const renderForm = () => {
//     switch (selectedPolicy) {
//       case "Attendance Policy":
//         return (
//           <div className="space-y-4">
//             <Input label="Minimum Hours Per Day" />
//             <Input label="Grace Time (minutes)" />
//             <Input label="Late Mark Threshold" />
//           </div>
//         );
//       case "Leave Policy":
//         return (
//           <div className="space-y-4">
//             <Input label="Annual Casual Leaves" />
//             <Input label="Leave Carry Forward (Yes/No)" />
//             <Input label="Encashment Allowed (Yes/No)" />
//           </div>
//         );
//       case "Shift Policy":
//         return (
//           <div className="space-y-4">
//             <Input label="Number of Shifts" />
//             <Input label="Shift Rotation (Yes/No)" />
//             <Input label="Shift Allowance (if any)" />
//           </div>
//         );
//       case "Overtime Policy":
//         return (
//           <div className="space-y-4">
//             <Input label="OT Rate (per hour)" />
//             <Input label="Max OT Hours/Month" />
//             <Input label="Comp-Off Allowed (Yes/No)" />
//           </div>
//         );
//       case "Work From Home Policy":
//         return (
//           <div className="space-y-4">
//             <Input label="WFH Days Allowed/Month" />
//             <Input label="Approval Required (Yes/No)" />
//           </div>
//         );
//       case "Reimbursement Policy":
//         return (
//           <div className="space-y-4">
//             <Input label="Daily Allowance Limit" />
//             <Input label="Travel Reimbursement Cap" />
//             <Input label="Receipt Mandatory (Yes/No)" />
//           </div>
//         );
//       case "Exit Policy":
//         return (
//           <div className="space-y-4">
//             <Input label="Notice Period (days)" />
//             <Input label="Buyout Option (Yes/No)" />
//             <Input label="Clearance Workflow Description" />
//           </div>
//         );
//       case "Document Upload Rules":
//         return (
//           <div className="space-y-4">
//             <Input label="List of Mandatory Docs (comma separated)" />
//             <Input label="Max File Size (MB)" />
//             <Input label="Allowed File Types (comma separated)" />
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white shadow p-6 rounded-2xl">
//       <h2 className="text-2xl font-semibold mb-6">Policy Manager</h2>

//       {/* Company Selection */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Select Company</label>
//         <select
//           className="w-full border rounded-lg p-2"
//           value={selectedCompany}
//           onChange={(e) => setSelectedCompany(e.target.value)}
//         >
//           {companies.map((company) => (
//             <option key={company.id} value={company.id}>
//               {company.name}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Policy Selection */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium mb-1">Select Policy</label>
//         <select
//           className="w-full border rounded-lg p-2"
//           value={selectedPolicy}
//           onChange={(e) => setSelectedPolicy(e.target.value)}
//         >
//           {policyTypes.map((type) => (
//             <option key={type} value={type}>
//               {type}
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Dynamic Form */}
//       {renderForm()}

//       {/* Save Button */}
//       <button
//         onClick={() =>
//           alert(`Policy Saved for ${selectedCompany} - ${selectedPolicy}`)
//         }
//         className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//       >
//         Save Policy
//       </button>
//     </div>
//   );
// }

// function Input({ label }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-1">{label}</label>
//       <input
//         type="text"
//         className="w-full border rounded-lg p-2"
//         placeholder={label}
//       />
//     </div>
//   );
// }




import React, { useEffect, useState } from 'react'

export default function LeaveApproval2() {
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
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



  const handleLeaveApplicationStatusChange = (index, status) => {
    const updatedLeaveApplications = leaveApplications.map((application, i) =>
      i === index ? { ...application, status } : application
    );
    setLeaveApplications(updatedLeaveApplications);
  };
  return (
    <div className='w-full h-auto p-3' >

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Leave Applications</h3>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr>
              <th className="border p-2">Employee ID</th>
              <th className="border p-2">Employee Name</th>
              <th className="border p-2">Leave Type</th>
              <th className="border p-2">Leave Duration</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveApplications.map((application, index) => (
              <tr key={index}>
                <td className="border p-2">{application.employeeId}</td>
                <td className="border p-2">{application.employeeName}</td>
                <td className="border p-2">{application.leaveType}</td>
                <td className="border p-2">{application.days} days</td>
                <td className="border p-2">{application.status}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleLeaveApplicationStatusChange(index, 'Approved')}
                    className="bg-green-600 text-white px-4 py-2 rounded mr-2"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleLeaveApplicationStatusChange(index, 'Rejected')}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}
