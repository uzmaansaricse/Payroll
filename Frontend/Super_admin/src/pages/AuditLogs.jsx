import React from 'react';

const auditLogs = [
  { id: 1, company: "TechWave", type: "Login - Super Admin", date: "2025-04-09" },
  { id: 2, company: "PixelCore", type: "Login - Admin", date: "2025-04-09" },
  { id: 3, company: "CloudNest", type: "OTP Failure", date: "2025-04-08" },
  { id: 4, company: "DataHive", type: "Employee status changed", date: "2025-04-07" },
  { id: 5, company: "NexaCorp", type: "Company data updated", date: "2025-04-06" },
  { id: 6, company: "InnoSoft", type: "Login - Employee", date: "2025-04-05" },
  { id: 7, company: "ByteLink", type: "Password reset", date: "2025-04-04" },
  { id: 8, company: "QuantumX", type: "Admin status updated", date: "2025-04-03" },
];

const AuditLogs = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🧾 Audit Logs</h1>
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Company</th>
            <th className="p-3 border">Log Type</th>
            <th className="p-3 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {auditLogs.map((log) => (
            <tr key={log.id}>
              <td className="p-3 border">{log.company}</td>
              <td className="p-3 border">{log.type}</td>
              <td className="p-3 border">{log.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogs;
