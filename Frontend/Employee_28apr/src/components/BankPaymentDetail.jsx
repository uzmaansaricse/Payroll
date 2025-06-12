import { useState, useEffect } from "react";

const ConveyanceReimbursement = () => {
  const monthlyLimit = 2000; // Max allowed per month
  const [entries, setEntries] = useState([
    {
      billDate: "",
      billNo: "",
      amount: "",
      file: null,
    },
  ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dummyConveyance = [
      { month: "January", amount: 1240 },
      { month: "February", amount: 1420 },
      { month: "March", amount: 1800 },
      { month: "April", amount: 1600 },
      { month: "May", amount: 1700 },
      { month: "June", amount: 1200 },
      { month: "July", amount: 2000 },
      { month: "August", amount: 1950 },
      { month: "September", amount: 1600 },
      { month: "October", amount: 1800 },
      { month: "November", amount: 2100 }, // exceeding example
      { month: "December", amount: 1750 },
    ];
    setData(dummyConveyance);
  }, []);

  const handleChange = (idx, field, value) => {
    const updated = [...entries];
    updated[idx][field] = value;
    setEntries(updated);
  };

  const handleFileChange = (idx, file) => {
    const updated = [...entries];
    updated[idx].file = file;
    setEntries(updated);
  };

  const handleUpload = (idx) => {
    const entry = entries[idx];
    const { billDate, billNo, amount, file } = entry;

    if (!amount || !file) {
      alert("Please fill in the claim amount and select a file.");
      return;
    }

    alert(`Uploaded claim for ₹${amount}. Bill Date: ${billDate || "N/A"}, Bill No: ${billNo || "N/A"}`);
  };

  const addNewRow = () => {
    setEntries([...entries, { billDate: "", billNo: "", amount: "", file: null }]);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 my-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Conveyance Reimbursement</h2>

      {/* Table Section for Entries */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm">
            <th className="px-4 py-2 text-left">Bill Date (Optional)</th>
            <th className="px-4 py-2 text-left">Bill No. (Optional)</th>
            <th className="px-4 py-2 text-left">Claim Amount (₹)</th>
            <th className="px-4 py-2 text-left">Choose File</th>
            <th className="px-4 py-2 text-left">Upload</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, idx) => (
            <tr key={idx} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">
                <input
                  type="date"
                  value={entry.billDate}
                  onChange={(e) => handleChange(idx, "billDate", e.target.value)}
                  className="border rounded px-2 py-1 w-full text-sm"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Enter bill no."
                  value={entry.billNo}
                  onChange={(e) => handleChange(idx, "billNo", e.target.value)}
                  className="border rounded px-2 py-1 w-full text-sm"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="number"
                  placeholder="₹"
                  value={entry.amount}
                  onChange={(e) => handleChange(idx, "amount", e.target.value)}
                  className="border rounded px-2 py-1 w-full text-sm"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => handleFileChange(idx, e.target.files[0])}
                  className="text-sm file:py-1 file:px-4 file:border file:border-gray-300 file:rounded file:bg-gray-100 file:text-gray-600 file:hover:bg-gray-200"
                />
              </td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleUpload(idx)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md"
                >
                  Upload
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Row Button */}
      <div className="text-center mt-6">
        <button
          onClick={addNewRow}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-md"
        >
          Add New Entry
        </button>
      </div>

      {/* Monthly Limit Status Section */}
      <table className="min-w-full table-auto border-collapse mt-8">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm">
            <th className="px-6 py-3 text-left">Month</th>
            <th className="px-6 py-3 text-left">Claimed</th>
            <th className="px-6 py-3 text-left">Limit</th>
            <th className="px-6 py-3 text-left">Remaining</th>
            <th className="px-6 py-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => {
            const remaining = Math.max(0, monthlyLimit - item.amount);
            const exceeded = item.amount > monthlyLimit;

            return (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="px-6 py-2">{item.month}</td>
                <td className="px-6 py-2 text-gray-800">₹{item.amount}</td>
                <td className="px-6 py-2">₹{monthlyLimit}</td>
                <td
                  className={`px-6 py-2 ${exceeded ? "text-red-600 font-semibold" : "text-green-600"}`}
                >
                  {exceeded ? "Limit Exceeded" : `₹${remaining}`}
                </td>
                <td
                  className={`px-6 py-2 ${exceeded ? "text-red-600" : "text-green-600"}`}
                >
                  {exceeded ? "Action Required" : "Approved"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ConveyanceReimbursement;
