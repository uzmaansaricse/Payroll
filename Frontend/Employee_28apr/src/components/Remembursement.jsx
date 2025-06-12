import { useState, useEffect } from "react";

const MealReimbursement = () => {
  const monthlyLimit = 1500; // Max allowed per month for meal reimbursement
  const [entries, setEntries] = useState([
    {
      mealDate: "",
      restaurantName: "",
      amount: "",
      file: null,
    },
  ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dummyMeal = [
      { month: "January", amount: 1200 },
      { month: "February", amount: 1350 },
      { month: "March", amount: 1400 },
      { month: "April", amount: 1250 },
      { month: "May", amount: 1450 },
      { month: "June", amount: 1300 },
      { month: "July", amount: 1500 },
      { month: "August", amount: 1400 },
      { month: "September", amount: 1350 },
      { month: "October", amount: 1450 },
      { month: "November", amount: 1550 }, // exceeding example
      { month: "December", amount: 1300 },
    ];
    setData(dummyMeal);
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
    const { mealDate, restaurantName, amount, file } = entry;

    if (!amount || !file) {
      alert("Please fill in the claim amount and select a file.");
      return;
    }

    alert(`Uploaded meal claim for ₹${amount}. Meal Date: ${mealDate || "N/A"}, Restaurant: ${restaurantName || "N/A"}`);
  };

  const addNewRow = () => {
    setEntries([...entries, { mealDate: "", restaurantName: "", amount: "", file: null }]);
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-8 my-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Meal Reimbursement</h2>

      {/* Table Section for Entries */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-600 text-sm">
            <th className="px-4 py-2 text-left">Meal Date (Optional)</th>
            <th className="px-4 py-2 text-left">Restaurant Name (Optional)</th>
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
                  value={entry.mealDate}
                  onChange={(e) => handleChange(idx, "mealDate", e.target.value)}
                  className="border rounded px-2 py-1 w-full text-sm"
                />
              </td>
              <td className="px-4 py-2">
                <input
                  type="text"
                  placeholder="Enter restaurant name"
                  value={entry.restaurantName}
                  onChange={(e) => handleChange(idx, "restaurantName", e.target.value)}
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

export default MealReimbursement;
