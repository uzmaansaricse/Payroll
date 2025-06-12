import React, { useState, useEffect } from 'react';

// Dummy data for companies (replace this with a real API call to fetch companies)
const companies = [
  { id: '1', name: 'Tech Solutions' },
  { id: '2', name: 'Business Corp' },
  { id: '3', name: 'Innovative Solutions' },
];

const AdminPanel = () => {
  // State to hold the selected company and its working days
  const [selectedCompanyId, setSelectedCompanyId] = useState('');
  const [selectedCompanyName, setSelectedCompanyName] = useState('');
  const [workingDays, setWorkingDays] = useState([
    { day: 'Monday', isSelected: false },
    { day: 'Tuesday', isSelected: false },
    { day: 'Wednesday', isSelected: false },
    { day: 'Thursday', isSelected: false },
    { day: 'Friday', isSelected: false },
    { day: 'Saturday', isSelected: false },
    { day: 'Sunday', isSelected: false },
  ]);
  const [isEditing, setIsEditing] = useState(false);

  // Effect to update working days when a new company is selected
  useEffect(() => {
    if (selectedCompanyId) {
      // Here you would fetch the working days for the selected company from the backend
      console.log(`Fetching working days for company ID: ${ selectedCompanyId }`);
}
  }, [selectedCompanyId]);

// Handle selection of a company from the dropdown
const handleCompanyChange = (e) => {
  const selectedCompany = companies.find(c => c.id === e.target.value);
  setSelectedCompanyId(selectedCompany.id);
  setSelectedCompanyName(selectedCompany.name);

  // Reset the working days or fetch them from the server
  setWorkingDays([
    { day: 'Monday', isSelected: false },
    { day: 'Tuesday', isSelected: false },
    { day: 'Wednesday', isSelected: false },
    { day: 'Thursday', isSelected: false },
    { day: 'Friday', isSelected: false },
    { day: 'Saturday', isSelected: false },
    { day: 'Sunday', isSelected: false },
  ]);
};

// Toggle working day selection
const handleDayToggle = (day) => {
  setWorkingDays(workingDays.map(d =>
    d.day === day ? { ...d, isSelected: !d.isSelected } : d
  ));
};

// Save working days (send data to backend)
const handleSaveWorkingDays = () => {
  const selectedDays = workingDays.filter(d => d.isSelected).map(d => d.day);

  if (selectedDays.length === 0) {
    alert('Please select at least one working day.');
    return;
  }

  // Send selectedDays to the backend for the selected company
  console.log(`Saving working days for ${selectedCompanyName}:, selectedDays`);
  alert('Working days saved successfully!');
};

// Enable editing of working days
const handleEditWorkingDays = () => {
  setIsEditing(true);
};

// Cancel editing and reset to initial state
const handleCancelEdit = () => {
  setIsEditing(false);
  setWorkingDays([
    { day: 'Monday', isSelected: false },
    { day: 'Tuesday', isSelected: false },
    { day: 'Wednesday', isSelected: false },
    { day: 'Thursday', isSelected: false },
    { day: 'Friday', isSelected: false },
    { day: 'Saturday', isSelected: false },
    { day: 'Sunday', isSelected: false },
  ]);
};

// Handle delete of working days
const handleDeleteWorkingDay = (day) => {
  setWorkingDays(workingDays.filter(d => d.day !== day));
};

return (
  <div className="max-w-4xl mx-auto p-8 h-screen">
    <h1 className="text-2xl font-bold mb-6">Admin Panel - Manage Working Days</h1>


    <div className="my-4">
      <label htmlFor="companyId" className="block mb-2 text-gray-700">Select Company</label>
      <select
        id="companyId"
        value={selectedCompanyId}
        onChange={handleCompanyChange}
        className="w-full px-4 py-2 border rounded-md"
      >
        <option value="">Select Company</option>
        {companies.map((company) => (
          <option key={company.id} value={company.id}>
            {company.name}
          </option>
        ))}
      </select>
    </div>


    {selectedCompanyId && (
      <div className="my-6">
        <h2 className="text-xl font-bold mb-4">Select Working Days for {selectedCompanyName}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {workingDays.map((day) => (
            <div key={day.day} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={day.isSelected}
                onChange={() => handleDayToggle(day.day)}
                id={day.day}
                className="form-checkbox h-5 w-5 text-blue-500"
              />
              <label htmlFor={day.day} className="text-gray-700">{day.day}</label>
              {isEditing && (
                <button
                  onClick={() => handleDeleteWorkingDay(day.day)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    )}


    <div className="my-4 flex space-x-4">
      <button
        onClick={isEditing ? handleSaveWorkingDays : handleEditWorkingDays}
        className="px-6 py-2 bg-green-500 text-white rounded-md"
      >
        {isEditing ? 'Save Changes' : 'Edit Working Days'}
      </button>

      {isEditing && (
        <button
          onClick={handleCancelEdit}
          className="px-6 py-2 bg-red-500 text-white rounded-md"
        >
          Cancel Edit
        </button>
      )}
    </div>
  </div>
);
};

export default AdminPanel;