import { useState } from 'react';

export default function TaxRegion() {
    const [selectedRegime, setSelectedRegime] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="p-6 bg-white h-screen rounded-xl shadow-md max-w-xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4">Choose Your Tax Regime</h2>

            <div className="mb-6">
                <p className="mb-2 font-medium">🟢 Old Tax Regime:</p>
                <p className="text-sm text-gray-600 mb-4">
                    Offers various exemptions and deductions (like HRA, 80C, etc.). Suitable if you make tax-saving investments.
                </p>

                <p className="mb-2 font-medium">🔵 New Tax Regime:</p>
                <p className="text-sm text-gray-600">
                    Lower tax rates but no major exemptions or deductions. Suitable if you prefer a simplified structure.
                </p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="flex items-center mb-4">
                    <input
                        type="radio"
                        id="old"
                        name="regime"
                        value="Old Regime"
                        checked={selectedRegime === 'Old Regime'}
                        onChange={(e) => setSelectedRegime(e.target.value)}
                        className="mr-2"
                    />
                    <label htmlFor="old" className="text-sm font-medium">Old Tax Regime</label>
                </div>

                <div className="flex items-center mb-6">
                    <input
                        type="radio"
                        id="new"
                        name="regime"
                        value="New Regime"
                        checked={selectedRegime === 'New Regime'}
                        onChange={(e) => setSelectedRegime(e.target.value)}
                        className="mr-2"
                    />
                    <label htmlFor="new" className="text-sm font-medium">New Tax Regime</label>
                </div>

                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    disabled={!selectedRegime}
                >
                    Submit
                </button>
            </form>

            {submitted && selectedRegime && (
                <div className="mt-6 text-green-600 font-medium">
                    ✅ You have selected: {selectedRegime}
                </div>
            )}
        </div>
    );
}