import { useState } from "react";
import dayjs from "dayjs";

const dummyCompanies = [
  { id: "C001", name: "TechNova Pvt Ltd" },
  { id: "C002", name: "AlphaCore Solutions" },
  { id: "C003", name: "QuantumWorks Inc" },
];

const real2025Holidays = [
  { date: "2025-01-01", name: "New Year's Day" },
  { date: "2025-01-14", name: "Makar Sankranti" },
  { date: "2025-01-26", name: "Republic Day" },
  { date: "2025-03-17", name: "Holi" },
  { date: "2025-04-14", name: "Ambedkar Jayanti" },
  { date: "2025-04-18", name: "Good Friday" },
  { date: "2025-05-01", name: "Labour Day" },
  { date: "2025-08-15", name: "Independence Day" },
  { date: "2025-10-02", name: "Gandhi Jayanti" },
  { date: "2025-10-20", name: "Diwali" },
  { date: "2025-11-02", name: "Bhai Dooj" },
  { date: "2025-12-25", name: "Christmas" },
];

const dummyHolidays = {
  C001: [
    { id: 1, date: "2025-01-26", name: "Republic Day" },
    { id: 2, date: "2025-08-15", name: "Independence Day" },
  ],
  C002: [{ id: 1, date: "2025-12-25", name: "Christmas" }],
  C003: [],
};

// Merge real holidays with company holidays
for (const company of dummyCompanies) {
  if (!dummyHolidays[company.id] || dummyHolidays[company.id].length === 0) {
    dummyHolidays[company.id] = real2025Holidays.map((h, index) => ({
      id: Date.now() + index,
      date: h.date,
      name: h.name,
    }));
  }
}

const months = Array.from({ length: 12 }, (_, i) =>
  dayjs().year(2025).month(i)
);

export default function CompanyHolidays() {
  const [selectedCompany, setSelectedCompany] = useState("C001");
  const [holidayData, setHolidayData] = useState(dummyHolidays);

  const handleChange = (index, field, value) => {
    const updated = [...holidayData[selectedCompany]];
    updated[index][field] = value;
    setHolidayData({ ...holidayData, [selectedCompany]: updated });
  };

  const handleAdd = () => {
    const updated = [
      ...holidayData[selectedCompany],
      { id: Date.now(), date: "", name: "" },
    ];
    setHolidayData({ ...holidayData, [selectedCompany]: updated });
  };

  const handleDelete = (id) => {
    const updated = holidayData[selectedCompany].filter((h) => h.id !== id);
    setHolidayData({ ...holidayData, [selectedCompany]: updated });
  };

  const handleSave = () => {
    alert("Holidays saved successfully (dummy)");
  };

  const isHoliday = (date) => {
    const formatted = date.format("YYYY-MM-DD");
    return holidayData[selectedCompany].some((h) => h.date === formatted);
  };

  const getHolidayName = (date) => {
    const formatted = date.format("YYYY-MM-DD");
    const holiday = holidayData[selectedCompany].find(
      (h) => h.date === formatted
    );
    return holiday?.name || "";
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow space-y-8">
      <h2 className="text-2xl font-semibold">Company Holidays</h2>

      <div>
        <label className="block text-sm font-medium mb-1">Select Company</label>
        <select
          className="w-full border rounded-lg p-2"
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
        >
          {dummyCompanies.map((company) => (
            <option key={company.id} value={company.id}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border mb-4">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Holiday Name</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {holidayData[selectedCompany]?.map((holiday, index) => (
              <tr key={holiday.id} className="border-t">
                <td className="px-4 py-2">
                  <input
                    type="date"
                    className="border rounded px-2 py-1"
                    value={holiday.date}
                    onChange={(e) =>
                      handleChange(index, "date", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    className="border rounded px-2 py-1 w-full"
                    value={holiday.name}
                    onChange={(e) =>
                      handleChange(index, "name", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(holiday.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {holidayData[selectedCompany].length === 0 && (
              <tr>
                <td className="px-4 py-4 text-center" colSpan="3">
                  No holidays added yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between">
        <button
          onClick={handleAdd}
          className="bg-gray-100 border px-4 py-2 rounded hover:bg-gray-200"
        >
          Add Holiday
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>

      {/* CALENDAR VIEW */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {months.map((month) => {
          const daysInMonth = month.daysInMonth();
          const firstDay = month.startOf("month").day();

          return (
            <div key={month.format("MMMM")} className="border rounded-xl p-4">
              <h3 className="text-lg font-semibold mb-2 text-center">
                {month.format("MMMM YYYY")}
              </h3>
              <div className="grid grid-cols-7 gap-1 text-sm text-center font-medium text-gray-500 mb-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1 text-sm text-center">
                {Array.from({ length: firstDay }).map((_, i) => (
                  <div key={`blank-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => {
                  const date = month.date(i + 1);
                  const holiday = isHoliday(date);
                  return (
                    <div
                      key={date.format("YYYY-MM-DD")}
                      className={`p-1 rounded ${holiday ? "bg-red-500 text-white font-semibold" : ""
                        }`}
                      title={getHolidayName(date)}
                    >
                      {i + 1}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}