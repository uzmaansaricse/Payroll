 import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCompanyName } from "../slices/companySlice";
import { fetchCompaniesList } from '../services/operations/companyAPI';

export default function Aone() {
  const [factories, setFactories] = useState([]);
  const [selectedFactory, setSelectedFactory] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchFactories = async () => {
      try {
        const res = await fetchCompaniesList();
        console.log('FACTORIES:', res.data);
        setFactories(res.data);
        if (res.data.length > 0) {
          setSelectedFactory(res.data[0]._id);
        }
      } catch (err) {
        console.error('Error fetching factories:', err);
      }
    };
    fetchFactories();
  }, []);

  const handleSelectionOfCompany = (e) => {
    const factory = e.target.value; // Capture value directly
    setSelectedFactory(factory);
   
    dispatch(addCompanyName({ obj: factory })); // Use the latest value
};

  return (
    <div className='p-5 w-full h-screen'>
      <h2 className="text-2xl font-bold">🔐 Company Set Up</h2>

      <div className="bg-white shadow rounded p-4">
        <label className="block mb-2 font-medium text-sm">Select Company</label>
        <select
          value={selectedFactory}
          onChange={(e) =>{ handleSelectionOfCompany(e)}}
          className="border rounded p-2 w-full"
        >
          {factories.map(f => (
            <option key={f._id} value={f.name}>{f.companyName}</option>
          ))}
        </select>
      </div>
    </div>
  );
}


/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Aone() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/superadmin/companies');
        console.log('COMPANIES:', res.data);

        if (Array.isArray(res.data.companies)) {
          setCompanies(res.data.companies);
        } else {
          console.error('No companies found in response');
        }
      } catch (err) {
        console.error('Error fetching companies:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="p-5 w-full h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">🏢 Company Level Companies</h2>

      <div className="bg-white shadow rounded p-4 w-full max-w-full overflow-x-auto">
        <h3 className="text-xl mb-4">Company Level List</h3>

        {loading ? (
          <p className="text-sm text-gray-500">Loading companies...</p>
        ) : companies.length === 0 ? (
          <p className="text-sm text-red-500">No companies found.</p>
        ) : (
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr>
                <th className="border p-2 text-left">#</th>
                <th className="border p-2 text-left">Company Name</th>
                <th className="border p-2 text-left">Type</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={company._id}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{company.companyName}</td>
                  <td className="border p-2">{company.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
*/