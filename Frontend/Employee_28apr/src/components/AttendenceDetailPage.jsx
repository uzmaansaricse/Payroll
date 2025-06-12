import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const medicalLimits = {
  self: 25000,
  parents: 50000,
  senior: 75000,
};

const investmentLabels = [
  { label: "Life Insurance Premium", max: "As per actuals" },
  { label: "Post Office Deposit (10/15 years)", max: "As per actuals" },
  { label: "Public Provident Fund (PPF)", max: "As per ₹1.5 Lakh limit under Section 80C" },
  { label: "Unit Linked Insurance Plan (ULIP) / Dhanraksha", max: "As per ₹1.5 Lakh limit under Section 80C" },
  { label: "National Savings Certificate (NSC) - VIII Issue", max: "As per ₹1.5 Lakh limit under Section 80C" },
  { label: "5-Year Fixed Deposit (FD)", max: "As per ₹1.5 Lakh limit under Section 80C" },
  { label: "Equity Linked Savings Scheme (ELSS)", max: "As per ₹1.5 Lakh limit under Section 80C" },
  { label: "Tuition Fees for 2 Children", max: "₹1.5 Lakh under Section 80C" },
  { label: "Housing Loan Principal & Stamp Duty", max: "₹1.5 Lakh under Section 80C" },
  { label: "Housing Loan Interest - Section 24", max: "₹2 Lakh for self-occupied property" },
  { label: "Interest on Loan for Affordable Housing - Section 80EEA", max: "₹1.5 Lakh" },
  { label: "Interest on Loan for Electric Vehicle - Section 80EEB", max: "₹1.5 Lakh" },
  { label: "Income from Previous Employer", max: "Mandatory, if applicable" },
  { label: "Mutual Funds - 80C(in ELSS but now optional )", max: "₹1.5 Lakh under Section 80C" },
  { label: "Pension Scheme - 80CCC", max: "₹1.5 Lakh including Section 80C" },
  { label: "Consult a Tax Expert for Savings", max: "Not Applicable" },
  { label: "Treatment of Handicapped Dependents - Section 80DD", max: "₹75,000 for normal, ₹1,25,000 for senior citizens" },
  { label: "Section 80DDB – Deduction for Medical Treatment", max: "₹40,000 (₹1,00,000 for senior citizens)" },
  { label: "Loan Interest for Higher Education - Section 80E", max: "As per actual interest paid" },
  { label: "Section 80EE – Interest on Home Loan for First-Time Homeowners", max: "₹50,000" },
  { label: "Section 80G – Income Tax Benefits for Donations", max: "100% or 50% of the donated amount (depending on the charity)" },
  { label: "Section 80GG – Income Tax Deduction on Rent", max: "₹5,000 per month" },
  { label: "Section 80GGB – Corporate Donations to Political Parties", max: "100% of the donated amount" },
  { label: "Section 80GGC – Donations by an Individual to Political Parties", max: "100% of the donated amount" },
  { label: "Section 80QQB – Deduction on Royalty Income", max: "₹3,00,000" },
  { label: "Section 80RRB – Deduction on Income from Royalty", max: "₹3,00,000" },
  { label: "Section 80TTA – Interest on Savings Accounts", max: "₹10,000" },
  { label: "Section 80TTB – Interest from Deposits for Senior Citizens", max: "₹50,000" },
  { label: "Disability Deduction - Section 80U", max: "₹75,000 for normal, ₹1,25,000 for severe disability" },
  { label: "Employee Contribution to NPS – Section 80CCD(1)", max: "As per actuals" },
  //{ label: "Employer Contribution to NPS – Section 80CCD(2)", max: "As per actuals" },
  { label: "Additional NPS Contribution – Section 80CCD(1B)", max: "₹50,000" },
  { label: "Leave Travel Allowance (LTA)(Optional)", max: "As per actuals & company policy" }


];

const months = [
  "April", "May", "June", "July", "August", "September",
  "October", "November", "December", "January", "February", "March"
];

export default function DeclarationForm() {

  const [form, setForm] = useState({
    landlordPan: "",
    medicalSelf: "",
    medicalParents: "",
    medicalSenior: "",
    declarations: Array(investmentLabels.length).fill(""),
    previousIncome: "",
    hra: months.map(() => ({ city: "", cityType: "", amount: "" }))
  });

  const rentOverLimit = form.hra.some((entry) => parseInt(entry.amount || 0) > 100000);

  useEffect(() => {
    if (rentOverLimit && !form.landlordPan) {
      toast.warn("Landlord PAN is required as rent exceeds ₹1,00,000/year.");
    }
  }, [form.hra, form.landlordPan]);

  const handleChange = (e, monthIndex = null, field = null) => {
    const { name, value } = e.target;

    if (monthIndex !== null && field) {
      const updatedHRA = [...form.hra];
      updatedHRA[monthIndex][field] = value;
      setForm({ ...form, hra: updatedHRA });
      return;
    }

    if (name.startsWith("medical")) {
      const fieldType = name.replace("medical", "").toLowerCase();
      const limit = medicalLimits[fieldType];

      if (parseInt(value) > limit) {
        toast.warn(`${fieldType.charAt(0).toUpperCase() + fieldType.slice(1)} limit exceeded (Max ₹${limit})`);
      } else {
        toast.success(`${fieldType.charAt(0).toUpperCase() + fieldType.slice(1)} value is within limit`);
      }
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (rentOverLimit && !form.landlordPan.trim()) {
      toast.error("Please provide Landlord PAN as rent exceeds ₹1,00,000/year.");
      return;
    }

    const incomplete = Object.entries(form).some(([key, val]) =>
      typeof val === "string" && val.trim() === ""
    );

    if (incomplete) {
      toast.error("Please fill in all required fields before submitting.");
      return;
    }

    console.log(form);
    toast.success("Declaration submitted successfully.");
    // Backend integration here
  };

  // Separate arrays
  const housingLoanLabels = investmentLabels.filter(item =>
    item.label.toLowerCase().includes("housing loan")
  );

  const otherInvestmentLabels = investmentLabels.filter(item =>
    !item.label.toLowerCase().includes("housing loan")
  );



  const handleDownload = async () => {
    const input = document.getElementById("declaration-pdf");
    if (!input) {
      toast.error("Failed to generate PDF");
      return;
    }

    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Form-12BB-Declaration.pdf");
  };

  return (
    <>
      <div id="declaration-pdf" className="p-6 my-5 max-w-6xl mx-auto bg-white shadow-lg rounded-xl space-y-6">
        <form onSubmit={handleSubmit}>
          <h1 className="text-2xl font-semibold text-center mb-6">Form 12BB - Declaration</h1>

          {/* HRA Section */}
          <h2 className="text-xl font-semibold mt-6">House Rent Allowance (HRA) Details</h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-3 py-2">Month</th>
                  <th className="border px-3 py-2">City Name</th>
                  <th className="border px-3 py-2">City Type</th>
                  <th className="border px-3 py-2">Rent Amount</th>
                </tr>
              </thead>
              <tbody>
                {months.map((month, index) => (
                  <tr key={index}>
                    <td className="border px-3 py-1">{month}</td>
                    <td className="border px-3 py-1">
                      <input
                        type="text"
                        value={form.hra[index].city}
                        onChange={(e) => handleChange(e, index, "city")}
                        className="input w-full"
                      />
                    </td>
                    <td className="border px-3 py-1">
                      <select
                        value={form.hra[index].cityType}
                        onChange={(e) => handleChange(e, index, "cityType")}
                        className="input w-full"
                      >
                        <option value="">Select</option>
                        <option value="Metro">Metro</option>
                        <option value="Non-Metro">Non-Metro</option>
                      </select>
                    </td>
                    <td className="border px-3 py-1">
                      <input
                        type="number"
                        value={form.hra[index].amount}
                        onChange={(e) => handleChange(e, index, "amount")}
                        className="input w-full"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Single File Upload for Entire HRA Section */}
            <div className="mt-4">
              <label className="block mb-2 font-medium text-gray-700">Upload Rent Proof (Single File)</label>
              <input
                type="file"
                onChange={(e) => setForm({ ...form, rentProof: e.target.files[0] })}
                className="input w-full"
              />
            </div>
          </div>

          {/* PAN Input */}
          {/* PAN Input Section */}
          <div className="mt-6 flex flex-col md:flex-row gap-3 items-start">
            <label className="text-sm text-gray-700">Landlord PAN (Required if rent exceeds ₹1,00,000/year)</label>
            <div className="flex items-center gap-3 w-full">
              <input
                name="landlordPan"
                value={form.landlordPan}
                onChange={handleChange}
                placeholder="Enter Landlord PAN"
                className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onClick={() => {
                  // Update PAN logic here (Customize with actual business logic)
                  setForm({ ...form, landlordPan: "UPDATED1234P" });  // Dummy PAN value for now
                  toast.success("Landlord PAN updated successfully!");
                }}
              >
                Update PAN
              </button>
            </div>
          </div>



          {/* Medical Insurance */}
          <div className="p-6 max-w-6xl mx-auto bg-white shadow-lg rounded-xl space-y-6">
            <form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-semibold text-center mb-6">Medical Insurance Declaration (80D)</h1>

              <h2 className="text-xl font-semibold mt-6 text-gray-700">Insurance Coverage</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Combined Self, Spouse, Children */}
                <div className="md:col-span-2">
                  <label className="block font-medium text-gray-600 mb-2">Self + Spouse + Children</label>
                  <input
                    type="number"
                    name="medicalCombined"
                    value={form.medicalCombined}
                    onChange={handleChange}
                    placeholder="Enter total amount (Max ₹25,000)"
                    className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />

                  {/* File Input for Self + Spouse + Children */}
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'medicalCombined')}
                    className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                  />
                </div>

                {/* Parents Section */}
                <div>
                  <label className="block font-medium text-gray-600 mb-2">Parents' Insurance</label>
                  <select
                    name="isSeniorParents"
                    value={form.isSeniorParents}
                    onChange={handleChange}
                    className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Parent Type</option>
                    <option value="yes">Senior Citizen (Max ₹50,000)</option>
                    <option value="no">Non-Senior (Max ₹25,000)</option>
                  </select>

                  {/* File Input for Parent Insurance */}
                  <input
                    type="file"
                    onChange={(e) => handleFileChange(e, 'isSeniorParents')}
                    className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                  />

                  {form.isSeniorParents && (
                    <div className="mt-2">
                      <label className="block font-medium text-gray-600 mb-2">Enter amount</label>
                      <input
                        type="number"
                        name="medicalParents"
                        value={form.medicalParents}
                        onChange={handleChange}
                        placeholder={`Max ₹${form.isSeniorParents === "yes" ? "50,000" : "25,000"}`}
                        className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />

                      {/* File Input for Parent's Insurance Amount */}
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, 'medicalParents')}
                        className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
                      />
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Investment Declarations */}
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-4">💼 Investment & Deduction Declarations</h2>

            {otherInvestmentLabels.map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 mb-3">
                <label className="w-2/5 text-sm font-medium">
                  {idx + 1}. {item.label}
                  <span className="block text-gray-500 text-xs font-normal">
                    Max: {item.max}
                  </span>
                </label>
                <input
                  type="number"
                  className="input flex-1"
                  value={form.declarations[idx]}
                  onChange={(e) => {
                    const updated = [...form.declarations];
                    updated[idx] = e.target.value;
                    setForm({ ...form, declarations: updated });
                  }}
                  placeholder="Enter amount"
                />

                {/* Choose File Input */}
                <input
                  type="file"
                  onChange={(e) => handleFileChange(e, `declaration-${idx}`)} // You can update the handler as per your needs
                  className="input flex-1"
                />
              </div>
            ))}
          </section>
          {/* Housing Loan Declarations */}
          <section className="mt-10">
            <h3 className="text-lg font-semibold mb-6">🏠 Housing Loan Deductions</h3>

            {housingLoanLabels.map((item, index) => {
              const actualIndex = investmentLabels.findIndex(i => i.label === item.label);

              return (
                <div
                  key={index}
                  className="mb-8 border border-gray-200 p-6 rounded-xl shadow-sm bg-white"
                >
                  {/* Title row */}
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-gray-800">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-500">
                      Applicable under: {item.section} | Max Claim: ₹{item.max}
                    </p>
                  </div>

                  {/* Amount row */}
                  <div className="grid grid-cols-12 gap-4 items-center mb-5">
                    <div className="col-span-3 text-sm font-medium">Claimed Amount</div>
                    <div className="col-span-9">
                      <input
                        type="number"
                        className="input w-full"
                        placeholder="Enter claimed amount"
                        value={form.declarations[actualIndex]}
                        onChange={(e) => {
                          const updated = [...form.declarations];
                          updated[actualIndex] = e.target.value;
                          setForm({ ...form, declarations: updated });
                        }}
                      />
                    </div>
                  </div>

                  {/* Choose File Input for Claimed Amount */}
                  <div className="grid grid-cols-12 gap-4 items-center mb-4">
                    <div className="col-span-3 text-sm font-medium">Choose File</div>
                    <div className="col-span-9">
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(e, `housing-loan-${index}`)} // You can adjust the handler as per your needs
                        className="input w-full"
                      />
                    </div>
                  </div>

                  {/* Lender details */}
                  <div className="grid grid-cols-12 gap-4 items-center mb-4">
                    <div className="col-span-3 text-sm font-medium">Lender Name</div>
                    <div className="col-span-9">
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="e.g., SBI, HDFC"
                        value={form.housingDetails?.[actualIndex]?.lender || ""}
                        onChange={(e) => {
                          const updated = [...(form.housingDetails || [])];
                          updated[actualIndex] = {
                            ...updated[actualIndex],
                            lender: e.target.value,
                          };
                          setForm({ ...form, housingDetails: updated });
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 items-center mb-4">
                    <div className="col-span-3 text-sm font-medium">Loan Account Number</div>
                    <div className="col-span-9">
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="Enter loan account number"
                        value={form.housingDetails?.[actualIndex]?.account || ""}
                        onChange={(e) => {
                          const updated = [...(form.housingDetails || [])];
                          updated[actualIndex] = {
                            ...updated[actualIndex],
                            account: e.target.value,
                          };
                          setForm({ ...form, housingDetails: updated });
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 items-center mb-4">
                    <div className="col-span-3 text-sm font-medium">Property Address</div>
                    <div className="col-span-9">
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="Enter property address"
                        value={form.housingDetails?.[actualIndex]?.address || ""}
                        onChange={(e) => {
                          const updated = [...(form.housingDetails || [])];
                          updated[actualIndex] = {
                            ...updated[actualIndex],
                            address: e.target.value,
                          };
                          setForm({ ...form, housingDetails: updated });
                        }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-12 gap-4 items-center">
                    <div className="col-span-3 text-sm font-medium">Lender PAN Number</div>
                    <div className="col-span-9">
                      <input
                        type="text"
                        className="input w-full"
                        placeholder="Enter PAN of bank/institution"
                        value={form.housingDetails?.[actualIndex]?.pan || ""}
                        onChange={(e) => {
                          const updated = [...(form.housingDetails || [])];
                          updated[actualIndex] = {
                            ...updated[actualIndex],
                            pan: e.target.value,
                          };
                          setForm({ ...form, housingDetails: updated });
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </section>



          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 w-full">
            Submit Declaration
          </button>
        </form>
      </div>

      <div className="max-w-6xl my-5 mx-auto px-6 mt-4">
        <button
          type="button"
          onClick={handleDownload}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded w-full"
        >
          Download Declaration
        </button>
      </div>
    </>
  );
}



















