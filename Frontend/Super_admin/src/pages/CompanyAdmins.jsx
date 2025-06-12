// src/pages/superadmin/CompanyAdmins.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CompanyAdmins = () => {
  const { id } = useParams();
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAdmins = async () => {
    try {
      const res = await axios.get(`/api/superadmin/companies/${id}/admins`);
      setAdmins(res.data);
    } catch (err) {
      console.error('Error fetching admins:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmins();
  }, [id]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Company Admins</h1>
      {loading ? (
        <p>Loading admins...</p>
      ) : admins.length === 0 ? (
        <p>No admins found for this company.</p>
      ) : (
        <div className="grid gap-4">
          {admins.map((admin) => (
            <div key={admin._id} className="bg-white p-4 rounded-xl shadow border">
              <p><strong>Name:</strong> {admin.name}</p>
              <p><strong>Email:</strong> {admin.email}</p>
              <p><strong>Phone:</strong> {admin.phone}</p>
              <p><strong>Status:</strong> {admin.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyAdmins;
