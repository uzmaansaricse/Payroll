import React, { useState } from 'react'

export default function NewJoiners() {
    const [employeeData, setEmployeeData] = useState({
        documents: {}
    });

    const handleFileUpload = (e) => {
        const { name, files } = e.target;
        setEmployeeData(prev => ({
            ...prev,
            documents: { ...prev.documents, [name]: files[0] }
        }));
    };

    const handleView = () => {
        console.log("Uploaded Documents:", employeeData.documents);
        // Optional: Add modal or alert to preview file names
    };

    const handleSubmit = () => {
        console.log("Submitting data...", employeeData);
        // Optional: Call API or backend function here
    };

    const documentFields = [
        { name: 'aadhar', label: 'Aadhar Card' },
        { name: 'panCard', label: 'PAN Card' },
        { name: 'resume', label: 'Resume' },
        { name: 'offerLetter', label: 'Offer Letter' },
        { name: 'educationCert', label: 'Education Certificate' },
        { name: 'photo', label: 'Photo' },
        { name: 'experienceLetters', label: 'Experience Letters' },
    ];

    return (
        <div>
            <div className="mb-6 p-3 w-full h-screen">
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

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button
                        onClick={handleView}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        View
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}
