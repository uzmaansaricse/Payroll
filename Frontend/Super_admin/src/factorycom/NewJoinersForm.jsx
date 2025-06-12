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

const NewJoinerForm2 = () => {
  const [employeeData, setEmployeeData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    gender: '',
    dob: '',
    doj: '',
    designation: '',
    department: '',
    employeeCode: '',
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData(prev => ({ ...prev, [name]: value }));
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

  const activateLogin = () => {
    setEmployeeData(prev => ({ ...prev, loginEnabled: true }));
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

  const exportOnboardingData = () => {
    alert('Exporting onboarding data...');
    // Future: Trigger export to Excel or PDF
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
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Basic Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['fullName', 'email', 'phoneNumber', 'dob', 'doj', 'designation', 'department'].map((field, idx) => (
            <input
              key={idx}
              type={field.includes('date') ? 'date' : 'text'}
              name={field}
              placeholder={field
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase())}
              value={employeeData[field]}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          ))}
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

      {/* Documents */}
      <div className="mb-6">
        <div className="flex gap-2 items-center"><h3 className="text-xl font-semibold text-gray-700 mb-4">Document Uploads</h3>
        <input type="checkbox" />
        </div>
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

      {/* Verification */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Verification Status</h3>
        <div className="flex flex-wrap gap-4">
          {Object.keys(employeeData.documents).map((doc) => (
            <div key={doc} className="flex items-center gap-2">
              <span className="text-sm font-medium capitalize">{doc}</span>
              <button
                className="bg-green-600 text-white px-2 py-1 rounded text-xs"
                onClick={() => handleVerificationStatusChange(doc, 'Verified')}
              >
                Verify
              </button>
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded text-xs"
                onClick={() => handleVerificationStatusChange(doc, 'Pending')}
              >
                Pending
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Onboarding Progress</h3>
        <progress value={calculateProgress()} max="100" className="w-full h-4 rounded-lg"></progress>
        <p className="text-sm text-gray-500 mt-1">{calculateProgress()}% completed</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between">
      <div className="flex flex-wrap gap-4 justify-end">
        <button
          onClick={activateLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Activate Employee Login
        </button>
        <button
          onClick={exportOnboardingData}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        >
          Export Onboarding Data
        </button>
      </div>
      <div className="flex flex-wrap gap-4 my-5 justify-end">
        <button
          onClick={activateLogin}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          View
        </button>
        <button
          onClick={exportOnboardingData}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        >
          Download
        </button>
      </div>
      </div>
    </div>
  );
};

export default NewJoinerForm2;
