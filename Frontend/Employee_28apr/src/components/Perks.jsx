import React, { useState } from "react";

const RegimeSelectionPage = () => {
    const [selectedRegime, setSelectedRegime] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle regime selection
    const handleRegimeChange = (e) => {
        setSelectedRegime(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedRegime) {
            alert("Please select a regime.");
            return;
        }
        // Here you would normally save the selection to the backend or state management
        setIsSubmitted(true);
        console.log(`Employee selected: ${selectedRegime}`);
    };

    return (
        <div className="w-full my-5 h-full p-4">
            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Regime Selection</h2>
                <p className="text-lg text-gray-600 mb-4">Please select your preferred tax regime:</p>
                
                {/* Regime Selection Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-lg font-semibold text-gray-700 mb-2">Select Regime</label>
                        <div className="space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="Old Regime"
                                    checked={selectedRegime === "Old Regime"}
                                    onChange={handleRegimeChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">Old Regime</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="New Regime"
                                    checked={selectedRegime === "New Regime"}
                                    onChange={handleRegimeChange}
                                    className="form-radio"
                                />
                                <span className="ml-2">New Regime</span>
                            </label>
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
                        >
                            Submit Selection
                        </button>
                    </div>
                </form>

                {/* Confirmation Message */}
                {isSubmitted && (
                    <div className="mt-4 text-green-600">
                        <p>Your regime selection has been successfully submitted!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegimeSelectionPage;
