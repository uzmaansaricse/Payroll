import React, { useState, useEffect } from 'react';

const App = () => {
  const [company, setCompany] = useState('');
  const [shiftName, setShiftName] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [shifts, setShifts] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/superadmin/companies');
        const data = await res.json();
        console.log("Companies fetched:", data);

        // ✅ Sirf companyName aur _id rakh rahe hain
        const formattedCompanies = data.map((company) => ({
          _id: company._id,
          companyName: company.companyName,
        }));

        setCompanies(formattedCompanies);
      } catch (error) {
        console.error('Error fetching companies:', error);
        alert('Failed to fetch companies.');
      }
    };

    fetchCompanies();
  }, []);

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
    if (shiftName && openTime && closeTime) {
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
      alert('Something went wrong while submitting shifts.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Add Shifts</h1>

      <div className="mb-4">
        <label className="block mb-1">Select Company</label>
        <select
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="">Select a company</option>
          {companies.map((c) => (
            <option key={c._id} value={c._id}>
              {c.companyName}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Shift Name</label>
        <input
          type="text"
          value={shiftName}
          onChange={(e) => setShiftName(e.target.value)}
          className="border p-2 rounded w-full"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block mb-1">Open Time</label>
          <input
            type="time"
            value={openTime}
            onChange={(e) => setOpenTime(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block mb-1">Close Time</label>
          <input
            type="time"
            value={closeTime}
            onChange={(e) => setCloseTime(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </div>
      </div>

      <button
        onClick={handleAddShift}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Add Shift
      </button>

      <ul className="mb-6">
        {shifts.map((shift, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>
              {shift.shiftName}: {shift.openTime} - {shift.closeTime}
            </span>
            <div>
              <button
                onClick={() => handleEditShift(index)}
                className="text-blue-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleRemoveShift(index)}
                className="text-red-600"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Submit All Shifts
      </button>
    </div>
  );
};

export default App;











// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [company, setCompany] = useState('');
//   const [shiftName, setShiftName] = useState('');
//   const [openTime, setOpenTime] = useState('');
//   const [closeTime, setCloseTime] = useState('');
//   const [shifts, setShifts] = useState([]);
//   const [companies, setCompanies] = useState([]);

//   useEffect(() => {
//     const fetchCompanies = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/superadmin/companies');
//         const data = await res.json();
//         console.log("Companies fetched:", data);

//         // ✅ Sirf companyName aur _id rakh rahe hain
//         const formattedCompanies = data.map((company) => ({
//           _id: company._id,
//           companyName: company.companyName,
//         }));

//         setCompanies(formattedCompanies);
//       } catch (error) {
//         console.error('Error fetching companies:', error);
//         alert('Failed to fetch companies.');
//       }
//     };

//     fetchCompanies();
//   }, []);

//   const handleAddShift = () => {
//     if (!shiftName || !openTime || !closeTime) {
//       alert('Please fill out all shift fields.');
//       return;
//     }

//     const newShift = {
//       shiftName,
//       openTime,
//       closeTime,
//     };

//     setShifts([...shifts, newShift]);
//     setShiftName('');
//     setOpenTime('');
//     setCloseTime('');
//   };

//   const handleRemoveShift = (index) => {
//     const updatedShifts = shifts.filter((_, i) => i !== index);
//     setShifts(updatedShifts);
//   };

//   const handleEditShift = (index) => {
//     const shiftToEdit = shifts[index];
//     setShiftName(shiftToEdit.shiftName);
//     setOpenTime(shiftToEdit.openTime);
//     setCloseTime(shiftToEdit.closeTime);
//     handleRemoveShift(index);
//   };

//   const handleSubmit = async () => {
//     if (!company) {
//       alert('Please select a company!');
//       return;
//     }

//     const selectedCompany = companies.find((c) => c._id === company);
//     if (!selectedCompany) {
//       alert('Selected company not found!');
//       return;
//     }

//     const allShifts = [...shifts];
//     if (shiftName && openTime && closeTime) {
//       allShifts.push({ shiftName, openTime, closeTime });
//     }

//     const payload = {
//       companyId: company,
//       companyName: selectedCompany.companyName,  // Add company name to the payload
//       shifts: allShifts,
//     };

//     try {
//       const res = await fetch('http://localhost:5000/api/shift/submitShiftData', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert('Shifts submitted successfully!');
//         setShifts([]);
//         setShiftName('');
//         setOpenTime('');
//         setCloseTime('');
//         setCompany('');
//       } else {
//         alert(data.message || 'Failed to submit shifts.');
//       }
//     } catch (err) {
//       console.error('Submit error:', err);
//       alert('Something went wrong while submitting shifts.');
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-8">
//       <h1 className="text-2xl font-bold mb-6">Add Shifts</h1>

//       <div className="mb-4">
//         <label className="block mb-1">Select Company</label>
//         <select
//           value={company}
//           onChange={(e) => setCompany(e.target.value)}
//           className="border p-2 rounded w-full"
//         >
//           <option value="">Select a company</option>
//           {companies.map((c) => (
//             <option key={c._id} value={c._id}>
//               {c.companyName}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block mb-1">Shift Name</label>
//         <input
//           type="text"
//           value={shiftName}
//           onChange={(e) => setShiftName(e.target.value)}
//           className="border p-2 rounded w-full"
//         />
//       </div>

//       <div className="mb-4 grid grid-cols-2 gap-4">
//         <div>
//           <label className="block mb-1">Open Time</label>
//           <input
//             type="time"
//             value={openTime}
//             onChange={(e) => setOpenTime(e.target.value)}
//             className="border p-2 rounded w-full"
//           />
//         </div>

//         <div>
//           <label className="block mb-1">Close Time</label>
//           <input
//             type="time"
//             value={closeTime}
//             onChange={(e) => setCloseTime(e.target.value)}
//             className="border p-2 rounded w-full"
//           />
//         </div>
//       </div>

//       <button
//         onClick={handleAddShift}
//         className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
//       >
//         Add Shift
//       </button>

//       <ul className="mb-6">
//         {shifts.map((shift, index) => (
//           <li key={index} className="flex justify-between items-center mb-2">
//             <span>
//               {shift.shiftName}: {shift.openTime} - {shift.closeTime}
//             </span>
//             <div>
//               <button
//                 onClick={() => handleEditShift(index)}
//                 className="text-blue-600 mr-2"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleRemoveShift(index)}
//                 className="text-red-600"
//               >
//                 Remove
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <button
//         onClick={handleSubmit}
//         className="bg-green-600 text-white px-6 py-2 rounded"
//       >
//         Submit All Shifts
//       </button>
//     </div>
//   );
// };

// export default App;
