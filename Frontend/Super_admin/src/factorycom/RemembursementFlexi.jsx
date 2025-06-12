import { useState } from "react";

export default function ReimbursementTab2() {
  const [tab, setTab] = useState("types");
  const [types, setTypes] = useState([
    {
      id: 1,
      name: "Travel",
      description: "Business travel reimbursements",
      eligibility: "All employees",
      maxAmount: 5000,
      isActive: true,
    },
    {
      id: 2,
      name: "Food",
      description: "Meals during official work",
      eligibility: "Only field staff",
      maxAmount: 2000,
      isActive: true,
    },
  ]);

  const [claims, setClaims] = useState([
    {
      id: 101,
      employee: "Amit Sharma",
      employeeId: "EMP001",
      type: "Travel",
      amount: 3000,
      status: "Pending",
      date: "2025-04-15",
      proof: "invoice.pdf",
    },
    {
      id: 102,
      employee: "Riya Patel",
      employeeId: "EMP002",
      type: "Food",
      amount: 800,
      status: "Approved",
      date: "2025-04-12",
      proof: "receipt.jpg",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    description: "",
    eligibility: "",
    maxAmount: "",
  });

  const handleAddType = () => {
    setTypes([
      ...types,
      {
        id: Date.now(),
        ...form,
        maxAmount: parseFloat(form.maxAmount),
        isActive: true,
      },
    ]);
    setForm({ name: "", description: "", eligibility: "", maxAmount: "" });
  };

  const updateClaimStatus = (id, status) => {
    setClaims((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status } : c))
    );
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setTab("types")}
          className={`px-4 py-2 rounded-xl ${
            tab === "types" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Reimbursement Types
        </button>
        <button
          onClick={() => setTab("claims")}
          className={`px-4 py-2 rounded-xl ${
            tab === "claims" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Employee Claims
        </button>
      </div>

      {tab === "types" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Add New Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <input
              type="text"
              placeholder="Type Name"
              className="border rounded px-3 py-2"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="border rounded px-3 py-2"
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Eligibility"
              className="border rounded px-3 py-2"
              value={form.eligibility}
              onChange={(e) => setForm({ ...form, eligibility: e.target.value })}
            />
            <input
              type="number"
              placeholder="Max Amount"
              className="border rounded px-3 py-2"
              value={form.maxAmount}
              onChange={(e) => setForm({ ...form, maxAmount: e.target.value })}
            />
          </div>
          <button
            onClick={handleAddType}
            className="bg-green-600 text-white px-4 py-2 rounded-xl mb-6"
          >
            Add Type
          </button>

          <h2 className="text-xl font-semibold mb-2">Existing Reimbursement Types</h2>
          <table className="w-full border mt-2">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Description</th>
                <th className="p-2 border">Eligibility</th>
                <th className="p-2 border">Max Amount</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              {types.map((type) => (
                <tr key={type.id}>
                  <td className="p-2 border">{type.name}</td>
                  <td className="p-2 border">{type.description}</td>
                  <td className="p-2 border">{type.eligibility}</td>
                  <td className="p-2 border">₹{type.maxAmount}</td>
                  <td className="p-2 border">
                    {type.isActive ? "Active" : "Inactive"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {tab === "claims" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Employee Reimbursement Claims</h2>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Employee</th>
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {claims.map((claim) => (
                <tr key={claim.id}>
                  <td className="p-2 border">{claim.employee}</td>
                  <td className="p-2 border">{claim.type}</td>
                  <td className="p-2 border">₹{claim.amount}</td>
                  <td className="p-2 border">{claim.date}</td>
                  <td className="p-2 border">{claim.status}</td>
                  <td className="p-2 border flex gap-2 justify-center">
                    {claim.status === "Pending" && (
                      <>
                        <button
                          onClick={() => updateClaimStatus(claim.id, "Approved")}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Approve
                        </button>
                        <button
                          onClick={() => updateClaimStatus(claim.id, "Rejected")}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Reject
                        </button>
                      </>
                    )}
                    <button className="underline text-blue-500">
                      Download Proof
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}