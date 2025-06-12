// src/pages/NotificationDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const dummyNotifications = [
  { id: 1, company: "TechWave", action: "Account deletion - Admin", date: "2025-04-09" },
  { id: 2, company: "PixelCore", action: "Password reset - Employee", date: "2025-04-08" },
  { id: 3, company: "CloudNest", action: "Approval config updated", date: "2025-04-08" },
  { id: 4, company: "DataHive", action: "Error - Payroll submission failed", date: "2025-04-07" },
  { id: 5, company: "NexaCorp", action: "Access code changed", date: "2025-04-06" },
  { id: 6, company: "InnoSoft", action: "Account deletion - Employee", date: "2025-04-05" },
  { id: 7, company: "ByteLink", action: "OTP failure detected", date: "2025-04-04" },
  { id: 8, company: "QuantumX", action: "Approval config updated", date: "2025-04-03" },
];

const NotificationDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const notification = dummyNotifications.find((n) => n.id === parseInt(id));

  if (!notification) {
    return <div className="p-6 text-red-600">Notification not found.</div>;
  }

  const isApproval = notification.action.toLowerCase().includes("approval");

  const handleApprove = () => {
    alert("✅ Approved! (Later connect to API)");
    navigate("/notifications");
  };

  const handleReject = () => {
    alert("❌ Rejected! (Later connect to API)");
    navigate("/notifications");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">🔔 Notification Details</h2>

      <div className="bg-white rounded shadow p-6 border">
        <p><strong>Company:</strong> {notification.company}</p>
        <p><strong>Action:</strong> {notification.action}</p>
        <p><strong>Date:</strong> {notification.date}</p>

        {isApproval && (
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleApprove}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Approve
            </button>
            <button
              onClick={handleReject}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Reject
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationDetails;
