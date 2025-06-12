import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function RegisterCompany() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    registrationNumber: "",
    website: "",
    contactDetails: {
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        pincode: "",
      },
    },
    taxInfo: {
      gstNumber: "",
      panNumber: "",
      tanNumber: "",
    },
    bankDetails: {
      bankName: "",
      accountNumber: "",
      ifscCode: "",
      accountHolderName: "",
    },
    hrDetails: {
      name: "",
      email: "",
      phone: "",
      designation: "",
    },
    customFields: [], // Will store custom fields based on user input
  });

  const [optionalFields, setOptionalFields] = useState([]); // Fields that can be optional
  const [removedFields, setRemovedFields] = useState([]); // Fields that are removed
  const [customFields, setCustomFields] = useState([{ fieldName: "", fieldValue: "" }]); // Custom fields for additional input
  const [loading, setLoading] = useState(false);

  const staticFields = [
    { label: "Company Name", name: "companyName" },
    { label: "Email", name: "email" },
    { label: "Registration Number", name: "registrationNumber" },
    { label: "Website", name: "website" },
    { label: "Contact Email", name: "contactDetails.email" },
    { label: "Contact Phone", name: "contactDetails.phone" },
    { label: "Street", name: "contactDetails.address.street" },
    { label: "City", name: "contactDetails.address.city" },
    { label: "State", name: "contactDetails.address.state" },
    { label: "Pincode", name: "contactDetails.address.pincode" },
    { label: "GST Number", name: "taxInfo.gstNumber" },
    { label: "PAN Number", name: "taxInfo.panNumber" },
    { label: "TAN Number", name: "taxInfo.tanNumber" },
    { label: "Bank Name", name: "bankDetails.bankName" },
    { label: "Account Number", name: "bankDetails.accountNumber" },
    { label: "IFSC Code", name: "bankDetails.ifscCode" },
    { label: "Account Holder Name", name: "bankDetails.accountHolderName" },
    { label: "HR Name", name: "hrDetails.name" },
    { label: "HR Email", name: "hrDetails.email" },
    { label: "HR Phone", name: "hrDetails.phone" },
    { label: "HR Designation", name: "hrDetails.designation" },
  ];

  const handleFieldChange = (e, path) => {
    const keys = path.split(".");
    const updatedFormData = { ...formData };
    let nested = updatedFormData;
    for (let i = 0; i < keys.length - 1; i++) {
      nested = nested[keys[i]];
    }
    nested[keys[keys.length - 1]] = e.target.value;
    setFormData(updatedFormData);
  };

  const toggleOptional = (field) => {
    setOptionalFields((prev) =>
      prev.includes(field) ? prev.filter((f) => f !== field) : [...prev, field]
    );
  };

  const removeField = (field) => {
    setRemovedFields((prev) => [...prev, field]);
  };

  const handleCustomChange = (index, key, value) => {
    const updated = [...customFields];
    updated[index][key] = value;
    setCustomFields(updated);
  };

  const addCustomField = () => {
    setCustomFields([...customFields, { fieldName: "", fieldValue: "" }]);
  };

  const removeCustomField = (index) => {
    const updated = [...customFields];
    updated.splice(index, 1);
    setCustomFields(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullForm = {
      ...formData,
      customFields: customFields.filter((f) => f.fieldName.trim() !== "" && f.fieldValue.trim() !== ""),
      optionalFields,
      removedFields,
    };

    try {
      const res = await axios.post("http://localhost:5000/api/company/register", fullForm);
      const data = res.data;
      Swal.fire({
        icon: "success",
        title: "Success",
        html: `
          <p><strong>${data.message || "Company registered successfully!"}</strong></p>
          <hr/>
          <p><strong>Company ID:</strong> ${data.companyId}</p>
          <p><strong>Admin Email:</strong> ${data.adminEmail}</p>
          <p><strong>Temp Password:</strong> ${data.adminPassword}</p>
        `,
        confirmButtonText: "Continue",
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response?.data?.message || "Failed to register company.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Register Company</h2>
      <form onSubmit={handleSubmit}>
        {staticFields.map(({ label, name }) => {
          if (removedFields.includes(name)) return null;
          const isOptional = optionalFields.includes(name);
          const value = name.split(".").reduce((acc, key) => acc?.[key], formData) || "";

          return (
            <div key={name} className="flex items-center justify-between border p-2 mb-2 rounded">
              <input
                className="w-full p-2 border rounded"
                placeholder={label}
                value={value}
                required={!isOptional}
                onChange={(e) => handleFieldChange(e, name)}
              />
              <div className="flex items-center gap-2 ml-2">
                <label className="flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    checked={isOptional}
                    onChange={() => toggleOptional(name)}
                  />
                  Optional
                </label>
                <button
                  type="button"
                  className="text-red-500 text-lg"
                  onClick={() => removeField(name)}
                >
                  ❌
                </button>
              </div>
            </div>
          );
        })}

        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Custom Fields</h3>
          {customFields.map((field, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                placeholder="Field Name"
                value={field.fieldName}
                onChange={(e) => handleCustomChange(index, "fieldName", e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Field Value"
                value={field.fieldValue}
                onChange={(e) => handleCustomChange(index, "fieldValue", e.target.value)}
                className="flex-1 p-2 border rounded"
              />
              {customFields.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeCustomField(index)}
                  className="text-red-500 text-xl"
                >
                  ×
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={addCustomField}
            className="text-blue-600 text-sm hover:underline mt-1"
          >
            + Add Custom Field
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-6"
        >
          {loading ? "Registering..." : "Register Company"}
        </button>
      </form>
    </div>
  );
}

export default RegisterCompany;
