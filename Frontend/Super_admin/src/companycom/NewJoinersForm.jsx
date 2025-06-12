import React, { useState } from 'react';

const companies = ['Company A', 'Company B', 'Company C'];
const onboardingStatuses = ['Not Started', 'In Progress', 'Completed'];

const documentFields = [
  { name: 'aadhar', label: 'Aadhar Card' },
  { name: 'panCard', label: 'PAN Card' },
  { name: 'resume', label: 'Resume' },
  { name: 'offerLetter', label: 'Offer Letter' },
  { name: 'educationCert', label: 'Education Certificate' },
  { name: 'photo', label: 'Photo' },
  { name: 'experienceLetters', label: 'Experience Letters' },
];

const NewJoinerForm = () => {
  const [employeeData, setEmployeeData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    doj: '',
    designation: '',
    department: '',
    employeeId: '',
    employeeType: '',
    workLocation: '',
    reportingManager: '',
    shiftTimings: '',
    grade: '',
    officeEmail: '',
    bankDetails: {
      accountHolderName: '',
      bankName: '',
      accountNumber: '',
      ifscCode: '',
      branch: ''
    },
    governmentIds: {
      pan: '',
      aadhar: '',
      uan: '',
      esic: ''
    },
    documents: {},
    verificationStatus: {},
    loginEnabled: false,
  });

  const [company, setCompany] = useState(companies[0]);
  const [onboardingStatus, setOnboardingStatus] = useState(onboardingStatuses[0]);
  const [customBasicFields, setCustomBasicFields] = useState([]);
  const [customBankFields, setCustomBankFields] = useState([]);
  const [customGovtFields, setCustomGovtFields] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prev => ({ ...prev, [name]: value }));
  };

  const handleNestedChange = (section, key, value) => {
    setEmployeeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  const handleFileUpload = (e) => {
    const { name, files } = e.target;
    setEmployeeData(prev => ({
      ...prev,
      documents: { ...prev.documents, [name]: files[0] }
    }));
  };

  const handleVerificationStatusChange = (field, status) => {
    setEmployeeData(prev => ({
      ...prev,
      verificationStatus: { ...prev.verificationStatus, [field]: status }
    }));
  };

  const addCustomField = (sectionSetter, sectionState) => {
    const key = prompt('Enter custom field name (use camelCase, no spaces):');
    if (key && !sectionState.includes(key)) {
      sectionSetter(prev => [...prev, key]);
      if (sectionSetter === setCustomBasicFields) {
        setEmployeeData(prev => ({ ...prev, [key]: '' }));
      } else {
        const section = sectionSetter === setCustomBankFields ? 'bankDetails' : 'governmentIds';
        setEmployeeData(prev => ({
          ...prev,
          [section]: {
            ...prev[section],
            [key]: ''
          }
        }));
      }
    }
  };

  const activateLogin = () => {
    setEmployeeData(prev => ({ ...prev, loginEnabled: true }));
    alert('Employee login has been activated!');
  };

  const exportOnboardingData = () => {
    alert('Exporting onboarding data...');
  };

  const calculateProgress = () => {
    let progress = 0;
    if (employeeData.fullName && employeeData.email && employeeData.phoneNumber) progress += 25;
    if (employeeData.workLocation && employeeData.reportingManager) progress += 25;
    if (Object.keys(employeeData.documents).length > 0) progress += 25;
    if (
      Object.keys(employeeData.documents).length > 0 &&
      Object.keys(employeeData.verificationStatus).length === Object.keys(employeeData.documents).length
    ) progress += 25;
    return progress;
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-xl max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Onboarding - New Joiner Form</h2>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="text-sm font-medium text-gray-600">Select Company</label>
          <select
            className="mt-1 w-full p-2 border rounded"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            {companies.map((c, idx) => (
              <option key={idx} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">Onboarding Status</label>
          <select
            className="mt-1 w-full p-2 border rounded"
            value={onboardingStatus}
            onChange={(e) => setOnboardingStatus(e.target.value)}
          >
            {onboardingStatuses.map((status, idx) => (
              <option key={idx} value={status}>{status}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Basic Details */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-700">Basic Details</h3>
          <button className="text-blue-600 text-sm" onClick={() => addCustomField(setCustomBasicFields, customBasicFields)}>+ Add Field</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...['employeeId','fullName','dob','doj','email','phoneNumber','designation','department','employeeType','officeEmail','shiftTimings','grade'], ...customBasicFields].map((field, idx) => (
            <input
              key={idx}
              type={field.includes('date') ? 'date' : 'text'}
              name={field}
              placeholder={field.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              value={employeeData[field] || ''}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          ))}

          <select
            name="gender"
            value={employeeData.gender}
            onChange={handleChange}
            className="p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Work Info */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Work Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="workLocation"
            placeholder="Work Location"
            value={employeeData.workLocation}
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="reportingManager"
            placeholder="Reporting Manager"
            value={employeeData.reportingManager}
            onChange={handleChange}
            className="p-2 border rounded"
          />
        </div>
      </div>

      {/* Bank Details */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-700">Bank Details</h3>
          <button className="text-blue-600 text-sm" onClick={() => addCustomField(setCustomBankFields, customBankFields)}>+ Add Field</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Object.keys(employeeData.bankDetails), ...customBankFields].map((key) => (
            <input
              key={key}
              type="text"
              placeholder={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              value={employeeData.bankDetails[key] || ''}
              onChange={(e) => handleNestedChange('bankDetails', key, e.target.value)}
              className="p-2 border rounded"
            />
          ))}
        </div>
      </div>

      {/* Government IDs */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-gray-700">Government IDs</h3>
          <button className="text-blue-600 text-sm" onClick={() => addCustomField(setCustomGovtFields, customGovtFields)}>+ Add Field</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Object.keys(employeeData.governmentIds), ...customGovtFields].map((key) => (
            <input
              key={key}
              type="text"
              placeholder={key.toUpperCase()}
              value={employeeData.governmentIds[key] || ''}
              onChange={(e) => handleNestedChange('governmentIds', key, e.target.value)}
              className="p-2 border rounded"
            />
          ))}
        </div>
      </div>

      {/* Documents */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Document Uploads</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documentFields.map(({ name, label }) => (
            <div key={name}>
              <label className="block text-sm text-gray-600 mb-1">{label}</label>
              <input
                type="file"
                name={name}
                onChange={handleFileUpload}
                className="w-full p-2 border rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex gap-4">
       <button
    onClick={activateLogin}
    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded shadow-md"
  >
    Activate Login
  </button>
          
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => alert('Viewing onboarding record...')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            View
          </button>
          <button
            onClick={() => alert('Downloading record...')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Download
          </button>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => alert('Viewing onboarding record...')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={() => alert('Downloading record...')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewJoinerForm;