import { useState } from "react";

const companies = [
  { id: "c1", name: "Masu India Pvt Ltd" },
  { id: "c2", name: "Global Textiles Ltd" },
];

const factories = {
  c1: [
    { id: "f1", name: "Masu Plant 1" },
    { id: "f2", name: "Masu Plant 2" },
  ],
  c2: [
    { id: "f3", name: "Global Textile Mill 1" },
  ],
};

const dummyWorkers = [
  { id: "W001", name: "Ramesh", department: "Production" },
  { id: "W002", name: "Suresh", department: "Packaging" },
  { id: "W003", name: "Mahesh", department: "Production" },
  { id: "W004", name: "Dinesh", department: "Maintenance" },
];

export default function ShiftManagement1() {
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedFactory, setSelectedFactory] = useState("");
  const [shifts, setShifts] = useState([]);
  const [newShift, setNewShift] = useState({
    name: "",
    startTime: "",
    endTime: "",
    supervisors: [{ name: "", email: "" }],
    workers: [],
    status: "Active",
  });
  const [assignShiftId, setAssignShiftId] = useState("");
  const [selectedWorkers, setSelectedWorkers] = useState([]);

  const handleAddShift = () => {
    const shiftToAdd = { ...newShift, id: Date.now().toString(), workers: [] };
    setShifts([...shifts, shiftToAdd]);
    setNewShift({ name: "", startTime: "", endTime: "", supervisors: [{ name: "", email: "" }], workers: [], status: "Active" });
  };

  const handleAssignWorkers = () => {
    setShifts(
      shifts.map((shift) =>
        shift.id === assignShiftId ? { ...shift, workers: selectedWorkers } : shift
      )
    );
    setAssignShiftId("");
    setSelectedWorkers([]);
  };

  const toggleShiftStatus = (id) => {
    setShifts(
      shifts.map((shift) =>
        shift.id === id
          ? { ...shift, status: shift.status === "Active" ? "Inactive" : "Active" }
          : shift
      )
    );
  };

  const handleDeleteShift = (id) => {
    setShifts(shifts.filter((shift) => shift.id !== id));
  };

  const handleSubmit = () => {
    const finalData = {
      company: selectedCompany,
      factory: selectedFactory,
      shifts: shifts,
    };
    console.log("Submitted Data:", finalData);
    alert("Data submitted! Check console.");
  };

  const handleSupervisorChange = (index, field, value) => {
    const updatedSupervisors = [...newShift.supervisors];
    updatedSupervisors[index][field] = value;
    setNewShift({ ...newShift, supervisors: updatedSupervisors });
  };

  const addSupervisorField = () => {
    setNewShift({ ...newShift, supervisors: [...newShift.supervisors, { name: "", email: "" }] });
  };

  const removeSupervisorField = (index) => {
    const updatedSupervisors = [...newShift.supervisors];
    updatedSupervisors.splice(index, 1);
    setNewShift({ ...newShift, supervisors: updatedSupervisors });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto h-screen">
      <h1 className="text-3xl font-bold mb-6">Shift Management</h1>

      {/* Select Company */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Select Company:</label>
        <select
          className="border rounded w-full p-2"
          value={selectedCompany}
          onChange={(e) => {
            setSelectedCompany(e.target.value);
            setSelectedFactory("");
            setShifts([]);
          }}
        >
          <option value="">-- Select Company --</option>
          {companies.map((comp) => (
            <option key={comp.id} value={comp.id}>{comp.name}</option>
          ))}
        </select>
      </div>

      {/* Select Factory */}
      {selectedCompany && (
        <div className="mb-6">
          <label className="block font-semibold mb-1">Select Factory:</label>
          <select
            className="border rounded w-full p-2"
            value={selectedFactory}
            onChange={(e) => setSelectedFactory(e.target.value)}
          >
            <option value="">-- Select Factory --</option>
            {factories[selectedCompany]?.map((fac) => (
              <option key={fac.id} value={fac.id}>{fac.name}</option>
            ))}
          </select>
        </div>
      )}

      {/* Shift Form */}
      {selectedFactory && (
        <>
          <div className="border p-4 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Shift</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Shift Name"
                className="border rounded p-2"
                value={newShift.name}
                onChange={(e) => setNewShift({ ...newShift, name: e.target.value })}
              />
              <input
                type="time"
                placeholder="Start Time"
                className="border rounded p-2"
                value={newShift.startTime}
                onChange={(e) => setNewShift({ ...newShift, startTime: e.target.value })}
              />
              <input
                type="time"
                placeholder="End Time"
                className="border rounded p-2"
                value={newShift.endTime}
                onChange={(e) => setNewShift({ ...newShift, endTime: e.target.value })}
              />
              
              {/* Multiple Supervisors Input with Email */}
              <div className="flex flex-col space-y-2">
                {newShift.supervisors.map((sup, index) => (
                  <div key={index} className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Supervisor Name"
                      className="border rounded p-2 flex-1"
                      value={sup.name}
                      onChange={(e) => handleSupervisorChange(index, "name", e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Supervisor Email"
                      className="border rounded p-2 flex-1"
                      value={sup.email}
                      onChange={(e) => handleSupervisorChange(index, "email", e.target.value)}
                    />
                    {newShift.supervisors.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSupervisorField(index)}
                        className="bg-red-500 text-white px-2 rounded"
                      >
                        X
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSupervisorField}
                  className="text-blue-500 font-semibold"
                >
                  + Add Supervisor
                </button>
              </div>
            </div>
            <button
              onClick={handleAddShift}
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            >
              Add Shift
            </button>
          </div>

          {/* Shift Table */}
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse mb-6">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Shift Name</th>
                  <th className="border p-2">Timing</th>
                  <th className="border p-2">Supervisors</th>
                  <th className="border p-2">Workers</th>
                  <th className="border p-2">Status</th>
                  <th className="border p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {shifts.map((shift) => (
                  <tr key={shift.id}>
                    <td className="border p-2">{shift.name}</td>
                    <td className="border p-2">{shift.startTime} - {shift.endTime}</td>
                    <td className="border p-2">{shift.supervisors.map(sup => `${sup.name} (${sup.email})`).join(", ")}</td>
                    <td className="border p-2">{shift.workers.length}</td>
                    <td className="border p-2">
                      <button
                        onClick={() => toggleShiftStatus(shift.id)}
                        className={`px-2 py-1 rounded text-white ${shift.status === "Active" ? "bg-green-500" : "bg-red-500"}`}
                      >
                        {shift.status}
                      </button>
                    </td>
                    <td className="border p-2 space-x-2">
                      <button
                        onClick={() => setAssignShiftId(shift.id)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded"
                      >
                        Assign Workers
                      </button>
                      <button
                        onClick={() => handleDeleteShift(shift.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded text-lg"
            >
              Submit
            </button>
          </div>

          {/* Assign Workers Modal */}
          {assignShiftId && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg w-[90%] max-w-md">
                <h3 className="text-lg font-semibold mb-4">Assign Workers</h3>
                <div className="grid grid-cols-1 gap-2 max-h-60 overflow-y-auto">
                  {dummyWorkers.map((worker) => (
                    <label key={worker.id} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedWorkers.includes(worker.id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedWorkers([...selectedWorkers, worker.id]);
                          } else {
                            setSelectedWorkers(selectedWorkers.filter((id) => id !== worker.id));
                          }
                        }}
                      />
                      <span>{worker.name} ({worker.department})</span>
                    </label>
                  ))}
                </div>
                <div className="flex justify-end mt-4 space-x-2">
                  <button
                    onClick={() => {
                      setAssignShiftId("");
                      setSelectedWorkers([]);
                    }}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAssignWorkers}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Assign
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
