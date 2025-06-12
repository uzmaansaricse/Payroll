import React, { useState } from 'react';

const dummyProfile = {
  name: "Super Admin",
  email: "superadmin@masu.com",
};

const dummyModules = [
  { id: 1, company: "TechWave", modules: { payroll: true, attendance: true, tax: false } },
  { id: 2, company: "PixelCore", modules: { payroll: true, attendance: false, tax: false } },
  { id: 3, company: "CloudNest", modules: { payroll: true, attendance: true, tax: true } },
  { id: 4, company: "DataHive", modules: { payroll: false, attendance: true, tax: true } },
];

const Settings = () => {
  const [profile, setProfile] = useState(dummyProfile);
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [emailTemplate, setEmailTemplate] = useState('Dear User,\n\nYour action was successful.\n\nRegards,\nTeam MASU');

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const toggleModule = (companyId, moduleName) => {
    const updatedModules = dummyModules.map((item) =>
      item.id === companyId
        ? {
            ...item,
            modules: {
              ...item.modules,
              [moduleName]: !item.modules[moduleName],
            },
          }
        : item
    );
    console.log("Updated modules (dummy):", updatedModules);
  };

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">⚙️ Settings</h1>

      {/* Super Admin Profile */}
      <section className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Edit Super Admin Profile</h2>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleProfileChange}
          className="border p-2 rounded mr-4"
        />
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleProfileChange}
          className="border p-2 rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded ml-4">Save</button>
      </section>

      {/* Broadcast Message */}
      <section className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Broadcast Message</h2>
        <textarea
          rows="3"
          value={broadcastMessage}
          onChange={(e) => setBroadcastMessage(e.target.value)}
          className="w-full border p-2 rounded mb-3"
          placeholder="Enter your announcement..."
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Broadcast</button>
      </section>

      {/* Module Toggle */}
      <section className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Enable/Disable Modules Per Company</h2>
        <table className="w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Company</th>
              <th className="p-3 border">Payroll</th>
              <th className="p-3 border">Attendance</th>
              <th className="p-3 border">Tax</th>
            </tr>
          </thead>
          <tbody>
            {dummyModules.map((company) => (
              <tr key={company.id}>
                <td className="p-3 border">{company.company}</td>
                <td className="p-3 border text-center">
                  <input
                    type="checkbox"
                    checked={company.modules.payroll}
                    onChange={() => toggleModule(company.id, "payroll")}
                  />
                </td>
                <td className="p-3 border text-center">
                  <input
                    type="checkbox"
                    checked={company.modules.attendance}
                    onChange={() => toggleModule(company.id, "attendance")}
                  />
                </td>
                <td className="p-3 border text-center">
                  <input
                    type="checkbox"
                    checked={company.modules.tax}
                    onChange={() => toggleModule(company.id, "tax")}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Email Template Config */}
      <section className="bg-white p-5 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Email Template Config (Coming Soon)</h2>
        <textarea
          rows="6"
          value={emailTemplate}
          onChange={(e) => setEmailTemplate(e.target.value)}
          className="w-full border p-2 rounded"
          disabled
        />
        <p className="text-gray-500 text-sm mt-1">Note: Template editing is currently disabled (Future Scope).</p>
      </section>
    </div>
  );
};

export default Settings;
