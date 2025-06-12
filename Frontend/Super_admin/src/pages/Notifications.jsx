import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const notifications = [
  { id: 1, company: "TechWave", action: "Account deletion - Admin", date: "2025-04-09" },
  { id: 2, company: "PixelCore", action: "Password reset - Employee", date: "2025-04-08" },
  { id: 3, company: "CloudNest", action: "Approval config updated", date: "2025-04-08" },
  { id: 4, company: "DataHive", action: "Error - Payroll submission failed", date: "2025-04-07" },
  { id: 5, company: "NexaCorp", action: "Access code changed", date: "2025-04-06" },
  { id: 6, company: "InnoSoft", action: "Account deletion - Employee", date: "2025-04-05" },
  { id: 7, company: "ByteLink", action: "OTP failure detected", date: "2025-04-04" },
  { id: 8, company: "QuantumX", action: "Approval config updated", date: "2025-04-03" },
];

const Notifications = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleClick = (notificationId) => {
    navigate(`/notifications/${notificationId}`);
  };

  const filtered = notifications.filter(
    (n) =>
      n.company.toLowerCase().includes(search.toLowerCase()) ||
      n.action.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🔔 Notifications</h1>

      <input
        type="text"
        placeholder="Search by company or action..."
        className="mb-4 px-4 py-2 w-full border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="space-y-3">
        {filtered.length > 0 ? (
          filtered.map((note) => (
            <li
              key={note.id}
              onClick={() => handleClick(note.id)}
              className="bg-white rounded shadow p-4 border cursor-pointer hover:bg-blue-50 transition"
            >
              <div className="flex justify-between items-center">
                <div className="font-semibold text-blue-700">{note.company}</div>
                {note.action.toLowerCase().includes("approval") && (
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Approval</span>
                )}
              </div>
              <div>{note.action}</div>
              <div className="text-sm text-gray-500">{note.date}</div>
            </li>
          ))
        ) : (
          <p className="text-gray-500">No matching notifications found.</p>
        )}
      </ul>
    </div>
  );
};

export default Notifications;
