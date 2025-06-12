import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

const reports = [
  { id: 1, company: "TechWave", module: "Payroll", month: "March 2025" },
  { id: 2, company: "PixelCore", module: "Attendance", month: "March 2025" },
  { id: 3, company: "CloudNest", module: "Tax", month: "March 2025" },
  { id: 4, company: "DataHive", module: "Payroll", month: "February 2025" },
  { id: 5, company: "NexaCorp", module: "Attendance", month: "February 2025" },
  { id: 6, company: "InnoSoft", module: "Tax", month: "February 2025" },
  { id: 7, company: "ByteLink", module: "Payroll", month: "January 2025" },
  { id: 8, company: "QuantumX", module: "Attendance", month: "January 2025" },
];

const Reports = () => {
  const [filter, setFilter] = useState("");

  const filtered = filter
    ? reports.filter((r) => r.company.toLowerCase().includes(filter.toLowerCase()))
    : reports;

  const downloadPDF = (report) => {
    const doc = new jsPDF();
    doc.text("Payroll Report", 14, 10);
    autoTable(doc, {
      head: [["Company", "Module", "Month"]],
      body: [[report.company, report.module, report.month]],
    });
    doc.save(`${report.company}_${report.module}_${report.month}.pdf`);
  };

  const downloadExcel = (report) => {
    const ws = XLSX.utils.json_to_sheet([report]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Report");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const file = new Blob([excelBuffer], { type: "application/octet-stream" });
    saveAs(file, `${report.company}_${report.module}_${report.month}.xlsx`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📄 Reports</h1>
      <input
        type="text"
        placeholder="Filter by Company"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 rounded mb-4 w-full max-w-sm"
      />
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Company</th>
            <th className="p-3 border">Module</th>
            <th className="p-3 border">Month</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((report) => (
            <tr key={report.id}>
              <td className="p-3 border">{report.company}</td>
              <td className="p-3 border">{report.module}</td>
              <td className="p-3 border">{report.month}</td>
              <td className="p-3 border space-x-2">
                <button
                  onClick={() => downloadPDF(report)}
                  className="bg-blue-600 text-white px-3 py-1 rounded"
                >
                  Download PDF
                </button>
                <button
                  onClick={() => downloadExcel(report)}
                  className="bg-green-600 text-white px-3 py-1 rounded"
                >
                  Download Excel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
