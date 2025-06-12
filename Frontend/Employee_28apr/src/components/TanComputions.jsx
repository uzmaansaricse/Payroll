import { useState } from 'react';

export default function TaxComputations() {
    const [regime, setRegime] = useState('Old Regime');
    const [declarationConfirmed, setDeclarationConfirmed] = useState(false);
    const [fileName, setFileName] = useState('');
    const [submitted, setSubmitted] = useState(false); // Track submission status

    const dummyData = {
        ctc: 800000,
        deductions: {
            hra: 120000,
            section80C: 150000,
            section80D: 25000,
        },
        investments: 30000,
        tdsDeducted: 40000,
    };

    const totalDeductions =
        dummyData.deductions.hra +
        dummyData.deductions.section80C +
        dummyData.deductions.section80D +
        dummyData.investments;

    const taxableIncome = dummyData.ctc - totalDeductions;
    const taxRate = regime === 'Old Regime' ? 0.1 : 0.08; // just dummy logic
    const computedTax = Math.max(0, taxableIncome * taxRate);
    const finalTax = computedTax - dummyData.tdsDeducted;

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) setFileName(file.name);
    };

    const handleSubmit = () => {
        // Handle the submit logic here
        setSubmitted(true); // Mark as submitted
        alert('Form submitted successfully!'); // For demonstration
    };

    return (
        <div className="p-6 bg-white  shadow-md rounded-lg max-w-2xl mx-auto my-10">
            <h2 className="text-2xl font-bold mb-4">Tax Computation Summary</h2>

            {/* Tax Regime Selector */}
            <div className="mb-4">
                <label htmlFor="taxRegime" className="block text-sm font-medium">Select Tax Regime:</label>
                <select
                    id="taxRegime"
                    value={regime}
                    onChange={(e) => setRegime(e.target.value)}
                    className="mt-2 p-2 border rounded-md"
                >
                    <option value="Old Regime">Old Regime</option>
                    <option value="New Regime">New Regime</option>
                </select>
            </div>

            <ul className="mb-6 space-y-2 text-gray-800">
                <li>💸 <strong>Gross Salary (CTC):</strong> ₹{dummyData.ctc.toLocaleString()}</li>
                <li>🧾 <strong>HRA Deduction:</strong> ₹{dummyData.deductions.hra.toLocaleString()}</li>
                <li>🧾 <strong>Section 80C:</strong> ₹{dummyData.deductions.section80C.toLocaleString()}</li>
                <li>🧾 <strong>Section 80D:</strong> ₹{dummyData.deductions.section80D.toLocaleString()}</li>
                <li>💼 <strong>Investments Submitted:</strong> ₹{dummyData.investments.toLocaleString()}</li>
                <li>🧮 <strong>Computed Taxable Income:</strong> ₹{taxableIncome.toLocaleString()}</li>
                <li>🧾 <strong>Tax Slab Applied:</strong> {taxRate * 100}%</li>
                <li>🧾 <strong>Computed Tax:</strong> ₹{computedTax.toLocaleString()}</li>
                <li>✅ <strong>TDS Already Deducted:</strong> ₹{dummyData.tdsDeducted.toLocaleString()}</li>
                <li>
                    💰 <strong>Final Tax {finalTax >= 0 ? 'Payable' : 'Refundable'}:</strong>{' '}
                    ₹{Math.abs(finalTax).toLocaleString()}
                </li>
            </ul>

            {/* File Upload Section */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">📤 Upload Investment Proof (optional):</label>
                <input
                    type="file"
                    onChange={handleFileUpload}
                    className="text-sm"
                />
                {fileName && <p className="text-green-600 mt-1">Uploaded: {fileName}</p>}
            </div>

            {/* Declaration Checkbox */}
            <div className="mb-6 flex items-center">
                <input
                    type="checkbox"
                    id="confirm"
                    checked={declarationConfirmed}
                    onChange={(e) => setDeclarationConfirmed(e.target.checked)}
                    className="mr-2"
                />
                <label htmlFor="confirm" className="text-sm font-medium">📝 I confirm the above declaration is correct.</label>
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4">
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    disabled={!declarationConfirmed || submitted} // Disable if not confirmed or already submitted
                    onClick={handleSubmit}
                >
                    📤 Submit Tax Computation
                </button>
            </div>

            {submitted && (
                <div className="mt-4 text-green-600">
                    <p>Form has been successfully submitted! 🎉</p>
                </div>
            )}
        </div>
    );
}