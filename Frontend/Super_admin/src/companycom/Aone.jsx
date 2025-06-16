import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCompanyName } from "../slices/companySlice";
import { fetchCompaniesList, updateCompanyPermissions} from '../services/operations/companyAPI';
import { toast } from 'react-toastify';

export default function Aone() {
  const [factories, setFactories] = useState([]);
  const [selectedFactory, setSelectedFactory] = useState('');
  const dispatch = useDispatch();

  const { companyName, company } = useSelector((state) => state.company);

  useEffect(() => {
    const fetchFactories = async () => {
      try {
        const res = await fetchCompaniesList();
        setFactories(res.data);
        if (res.data.length > 0) {
          setSelectedFactory(res.data[0].companyName);
          dispatch(addCompanyName({ obj: res.data[0].companyName }));
        }
      } catch (err) {
        console.error('Error fetching factories:', err);
      }
    };
    fetchFactories();
  }, [dispatch]);

  const handleSelectionOfCompany = (e) => {
    const factoryName = e.target.value;
    setSelectedFactory(factoryName);
    dispatch(addCompanyName({ obj: factoryName }));
  };

  const handleUpdatePermissions = async () => {
    try {
   //   console.log(company);
      const res = await updateCompanyPermissions(companyName, company);
      toast.success(res.message);
    } catch (error) {
      console.error('Failed to update permissions:', error);
      //alert('Error updating permissions');
    }
  };

  return (
    <div className='p-5 w-full h-screen'>
      <h2 className="text-2xl font-bold">🔐 Company Set Up</h2>

      <div className="bg-white shadow rounded p-4">
        <label className="block mb-2 font-medium text-sm">Select Company</label>
        <select
          value={selectedFactory}
          onChange={(e) => handleSelectionOfCompany(e)}
          className="border rounded p-2 w-full"
        >
          {factories.map(f => (
            <option key={f._id} value={f.companyName}>{f.companyName}</option>
          ))}
        </select>

        <button
          onClick={handleUpdatePermissions}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Update Permissions
        </button>
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