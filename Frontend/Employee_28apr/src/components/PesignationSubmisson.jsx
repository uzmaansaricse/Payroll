import { useState } from "react";

export default function PesignationSubmisson() {
  const [formData, setFormData] = useState({
    name: "",
    empId: "",
    department: "",
    designation: "",
    resignationDate: new Date().toISOString().split("T")[0],
    preferredLWD: "",
    reason: "",
    comments: "",
    letter: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit logic here (API call)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-2xl my-5 mx-auto mt-10 p-4 shadow-md border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Resignation Form</h2>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Employee ID</label>
            <input
              name="empId"
              value={formData.empId}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Department</label>
            <input
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Designation</label>
            <input
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Resignation Date</label>
            <input
              type="date"
              name="resignationDate"
              value={formData.resignationDate}
              onChange={handleChange}
              readOnly
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label>Preferred Last Working Day</label>
            <input
              type="date"
              name="preferredLWD"
              value={formData.preferredLWD}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <div>
          <label>Reason for Resignation</label>
          <select
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
            value={formData.reason}
            className="w-full p-2 border rounded-md"
          >
            <option value="">Select a reason</option>
            <option value="Personal">Personal</option>
            <option value="Career Growth">Career Growth</option>
            <option value="Health Reasons">Health Reasons</option>
            <option value="Relocation">Relocation</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Additional Comments</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label>Upload Resignation Letter (optional)</label>
          <input
            type="file"
            name="letter"
            onChange={handleChange}
            accept=".pdf,.doc,.docx"
            className="w-full p-2 border rounded-md"
          />
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded-md">
          Submit Resignation
        </button>
      </form>
    </div>
  );
}