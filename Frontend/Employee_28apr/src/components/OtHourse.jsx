import React, { useState, useEffect } from "react";

const OtTable = () => {
  const [otHours, setOtHours] = useState([]);

  useEffect(() => {
    setOtHours([
      { date: "2025-04-01", hours: 2, status: "Approved", pay: "$30" },
      { date: "2025-04-02", hours: 1.5, status: "Pending", pay: "$22.5" },
    ]);
  }, []);

  return (
    <div className="container mx-auto my-5 h-screen p-6">
      <section className="ot-hours mb-8">
        <h2 className="text-2xl font-bold mb-4">Overtime (OT) Hours</h2>
        <table className="min-w-full table-auto border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border p-2">Date</th>
              <th className="border p-2">OT Hours Worked</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">OT Pay</th>
            </tr>
          </thead>
          <tbody>
            {otHours.map((ot, index) => (
              <tr key={index}>
                <td className="border p-2">{ot.date}</td>
                <td className="border p-2">{ot.hours} Hours</td>
                <td className="border p-2">{ot.status}</td>
                <td className="border p-2">{ot.pay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default OtTable;
