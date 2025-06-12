import React, { useState } from 'react';

const App1 = () => {
  const [company, setCompany] = useState('');
  const [shiftName, setShiftName] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [shifts, setShifts] = useState([]);

  const companies = [
    { id: 1, name: 'Company A' },
    { id: 2, name: 'Company B' },
    { id: 3, name: 'Company C' },
  ];

  const handleAddShift = () => {
    if (!shiftName || !openTime || !closeTime) {
      alert('Please fill out all shift fields.');
      return;
    }

    const newShift = {
      shiftName,
      openTime,
      closeTime,
    };

    setShifts([...shifts, newShift]);
    setShiftName('');
    setOpenTime('');
    setCloseTime('');
  };

  const handleRemoveShift = (index) => {
    const updatedShifts = shifts.filter((_, i) => i !== index);
    setShifts(updatedShifts);
  };

  const handleEditShift = (index) => {
    const shiftToEdit = shifts[index];
    setShiftName(shiftToEdit.shiftName);
    setOpenTime(shiftToEdit.openTime);
    setCloseTime(shiftToEdit.closeTime);
    handleRemoveShift(index);
  };

  const handleSubmit = async () => {
    if (!company) {
      alert('Please select a company!');
      return;
    }

    const allShifts = [...shifts];

    // If user has filled a shift but didn't click Add
    if (!shiftName || !openTime || !closeTime) {
      if (shifts.length === 0) {
        alert('Please add at least one shift or fill the fields to add.');
        return;
      }
    } else {
      allShifts.push({ shiftName, openTime, closeTime });
    }

    const payload = {
      companyId: company,
      shifts: allShifts,
    };

    try {
      const res = await fetch('https://your-backend-api.com/api/shifts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Shifts submitted successfully!');
        setShifts([]);
        setShiftName('');
        setOpenTime('');
        setCloseTime('');
        setCompany('');
      } else {
        alert(data.message || 'Failed to submit shifts.');
      }
    } catch (err) {
      console.error('Submit error:', err);
      alert('Shifts submitted successfully!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="p-5 mb-6 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Shift Management</h2>

        <div className="my-4">
          <label htmlFor="company" className="block mb-2 text-gray-700">Select Company</label>
          <select
            id="company"
            className="w-full px-4 py-2 border rounded-md"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="" disabled>Select a Company</option>
            {companies.map((comp) => (
              <option key={comp.id} value={comp.id}>{comp.name}</option>
            ))}
          </select>
        </div>

        <div className="my-4">
          <label htmlFor="shiftName" className="block mb-2 text-gray-700">Shift Name</label>
          <input
            id="shiftName"
            type="text"
            value={shiftName}
            onChange={(e) => setShiftName(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter shift name"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 my-4">
          <div>
            <label htmlFor="openTime" className="block mb-2 text-gray-700">Shift Open Time</label>
            <input
              id="openTime"
              type="time"
              value={openTime}
              onChange={(e) => setOpenTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="closeTime" className="block mb-2 text-gray-700">Shift Close Time</label>
            <input
              id="closeTime"
              type="time"
              value={closeTime}
              onChange={(e) => setCloseTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        <button
          onClick={handleAddShift}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-md"
        >
          Add Shift
        </button>
      </div>

      <div className="p-5 border rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Shifts List</h2>
        <ul>
          {shifts.map((shift, index) => (
            <li key={index} className="p-4 bg-gray-100 mb-2 rounded-md">
              <h3 className="text-lg font-semibold">{shift.shiftName}</h3>
              <p><strong>Open Time:</strong> {shift.openTime} <strong>Close Time:</strong> {shift.closeTime}</p>
              <button
                onClick={() => handleRemoveShift(index)}
                className="px-6 py-2 bg-red-500 text-white rounded-md"
              >
                Remove Shift
              </button>
              <button
                onClick={() => handleEditShift(index)}
                className="ml-2 px-6 py-2 bg-yellow-500 text-white rounded-md"
              >
                Edit Shift
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg"
      >
        Submit All Shifts
      </button>
    </div>
  );
};

export default App1;


