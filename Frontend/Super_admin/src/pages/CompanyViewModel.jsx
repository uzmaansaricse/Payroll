import { useState } from "react";
import axios from "axios";

const CompanyViewModal = ({ company, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    ...company,
    contactDetails: {
      ...company.contactDetails,
      address: { ...company.contactDetails?.address },
    },
    taxInfo: { ...company.taxInfo },
    bankDetails: { ...company.bankDetails },
    hrDetails: { ...company.hrDetails },
    customFields: company.customFields || [],
  });

  const [editMode, setEditMode] = useState(false);

  const handleNestedChange = (path, value) => {
    const keys = path.split(".");
    const updated = { ...formData };
    let nested = updated;
    for (let i = 0; i < keys.length - 1; i++) {
      if (!nested[keys[i]]) nested[keys[i]] = {};
      nested = nested[keys[i]];
    }
    nested[keys[keys.length - 1]] = value;
    setFormData(updated);
  };

  const handleCustomChange = (index, key, value) => {
    const updated = [...formData.customFields];
    updated[index][key] = value;
    setFormData({ ...formData, customFields: updated });
  };

  const handleSave = async () => {
    try {
      await axios.put(`/api/superadmin/updateCompany/${formData._id}`, formData);
      onUpdate();
      setEditMode(false);
    } catch (error) {
      console.error("Error saving company details", error);
    }
  };

  const renderInput = (label, path) => {
    const value = path.split(".").reduce((acc, key) => acc?.[key], formData) || "";
    return (
      <div className="flex flex-col">
        <label className="text-sm font-medium mb-1">{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => handleNestedChange(path, e.target.value)}
          disabled={!editMode}
          className="border p-2 rounded"
          placeholder={label}
        />
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start pt-20 z-50">
      <div className="bg-white w-[700px] p-6 rounded shadow max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Company Details</h3>
          <button onClick={onClose} className="text-red-500 text-lg">✖</button>
        </div>

        {/* Static Admin Info Section */}
        <div className="mb-6 bg-gray-100 p-4 rounded">
          <h4 className="text-md font-semibold mb-2">Admin Credentials (Read-only)</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Company ID</label>
              <input
                type="text"
                value={company.companyId || ""}
                disabled
                className="border p-2 rounded bg-gray-200"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Admin Email</label>
              <input
                type="text"
                value={company.adminEmail || ""}
                disabled
                className="border p-2 rounded bg-gray-200"
              />
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-sm font-medium mb-1">Admin Password</label>
              <input
                type="text"
                value={company.adminPassword || ""}
                disabled
                className="border p-2 rounded bg-gray-200"
              />
            </div>
          </div>
        </div>

        {/* Company Form Inputs */}
        <div className="grid grid-cols-2 gap-4">
          {renderInput("Company Name", "companyName")}
          {renderInput("Email", "email")}
          {renderInput("Registration Number", "registrationNumber")}
          {renderInput("Website", "website")}

          {/* Contact Details */}
          {renderInput("Contact Email", "contactDetails.email")}
          {renderInput("Contact Phone", "contactDetails.phone")}
          {renderInput("Street", "contactDetails.address.street")}
          {renderInput("City", "contactDetails.address.city")}
          {renderInput("State", "contactDetails.address.state")}
          {renderInput("Pincode", "contactDetails.address.pincode")}

          {/* Tax Info */}
          {renderInput("GST Number", "taxInfo.gstNumber")}
          {renderInput("PAN Number", "taxInfo.panNumber")}
          {renderInput("TAN Number", "taxInfo.tanNumber")}

          {/* Bank Details */}
          {renderInput("Bank Name", "bankDetails.bankName")}
          {renderInput("Account Number", "bankDetails.accountNumber")}
          {renderInput("IFSC Code", "bankDetails.ifscCode")}
          {renderInput("Account Holder Name", "bankDetails.accountHolderName")}

          {/* HR Details */}
          {renderInput("HR Name", "hrDetails.name")}
          {renderInput("HR Email", "hrDetails.email")}
          {renderInput("HR Phone", "hrDetails.phone")}
          {renderInput("HR Designation", "hrDetails.designation")}
        </div>

        {/* Custom Fields Section */}
        <div className="mt-6">
          <h4 className="text-md font-semibold mb-2">Custom Fields</h4>

          {formData.customFields.length === 0 && !editMode && (
            <p className="text-gray-500 text-sm">No custom fields added.</p>
          )}

          {formData.customFields.map((field, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={field.fieldName}
                onChange={(e) => handleCustomChange(index, "fieldName", e.target.value)}
                disabled={!editMode}
                className="flex-1 p-2 border rounded"
                placeholder="Field Name"
              />
              <input
                type="text"
                value={field.fieldValue}
                onChange={(e) => handleCustomChange(index, "fieldValue", e.target.value)}
                disabled={!editMode}
                className="flex-1 p-2 border rounded"
                placeholder="Field Value"
              />
              {editMode && (
                <button
                  onClick={() => {
                    const updated = [...formData.customFields];
                    updated.splice(index, 1);
                    setFormData({ ...formData, customFields: updated });
                  }}
                  className="text-red-500 px-2"
                  title="Remove Field"
                >
                  ✖
                </button>
              )}
            </div>
          ))}

          {editMode && (
            <button
              onClick={() =>
                setFormData({
                  ...formData,
                  customFields: [
                    ...(formData.customFields || []),
                    { fieldName: "", fieldValue: "" },
                  ],
                })
              }
              className="text-blue-600 text-sm mt-1"
            >
              + Add Custom Field
            </button>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setEditMode(!editMode)}
            className="bg-yellow-500 text-white px-4 py-2 rounded"
          >
            {editMode ? "Cancel Edit" : "Edit"}
          </button>
          {editMode && (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save Changes
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompanyViewModal;
