import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewCompanyAdmins = () => {
  const { companyId } = useParams();
  const [admins, setAdmins] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAdmins = async () => {
    try {
      const res = await axios.get(`/api/superadmin/companies/${companyId}/admins`);
      setAdmins(res.data.admins || []);
      setCompanyName(res.data.companyName || "Unknown Company");
    } catch (err) {
      console.error("Error fetching admins:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, [companyId]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admins of {companyName}</h1>

      {loading ? (
        <p>Loading...</p>
      ) : admins.length === 0 ? (
        <p>No admins found for this company.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full bg-white border shadow-sm rounded-lg text-sm">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Access Code</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin) => (
                <tr key={admin._id} className="text-center border-t">
                  <td className="p-3">{admin.name}</td>
                  <td className="p-3">{admin.email}</td>
                  <td className="p-3">{admin.phone}</td>
                  <td className="p-3">{admin.accessCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewCompanyAdmins;
