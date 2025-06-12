import { useEffect, useState } from "react";

export default function EmployeeDetails() {
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        fetch("http://localhost:5000/api/employees/emp")
            .then((res) => res.json())
            .then((data) => setEmployee(data[0]))
            .catch((err) => {
                console.error("Error fetching employee data:", err);
            });
    }, []);

    const formatDate = (dateStr) =>
        dateStr ? new Date(dateStr).toLocaleDateString() : "N/A";

    const sectionMap = {
        "Basic Details": "basicDetails",
        "Employment Details": "employmentDetails",
        "Salary Details": "salaryDetails",
        "Education Details": "educationDetails",
        "Compliance and ID Documents": "complianceAndID",
        "Family & Emergency Contacts": "familyAndEmergencyContacts",
        "Health and Insurance": "healthAndInsurance",
        "IT Asset Allocation": "itAssetAllocation",
        "Employee Self Service Preferences": "employeeSelfServicePreferences",
        "Exit Information": "exitInfo",
    };

    const handleDelete = (fieldName, sectionTitle) => {
        if (fieldName.toLowerCase().includes("image")) {
            alert("Image deletion is not allowed.");
            return;
        }

        const employeeId = employee._id;
        let fieldPath = "";

        if (sectionMap[sectionTitle]) {
            fieldPath = `${sectionMap[sectionTitle]}.${fieldName}`;
        } else {
            const match = sectionTitle.match(/#(\d+)/);
            if (match) {
                const index = parseInt(match[1], 10) - 1;
                fieldPath = `workExperience.${index}.${fieldName}`;
            }
        }

        fetch(`http://localhost:5000/api/employees/delete-field/${employeeId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fieldPath }),
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.message || "Field deleted.");
                window.location.reload();
            })
            .catch(() => alert("Error deleting field"));
    };

    const handleEdit = (fieldName, currentValue, sectionTitle) => {
        const newValue = prompt(`Edit value for "${fieldName}"`, currentValue);
        if (newValue === null || newValue.trim() === "") return;

        const employeeId = employee._id;
        let fieldPath = "";

        if (sectionMap[sectionTitle]) {
            fieldPath = `${sectionMap[sectionTitle]}.${fieldName}`;
        } else {
            const match = sectionTitle.match(/#(\d+)/);
            if (match) {
                const index = parseInt(match[1], 10) - 1;
                fieldPath = `workExperience.${index}.${fieldName}`;
            }
        }

        fetch(`http://localhost:5000/api/employees/employ/${employeeId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ fieldPath, newValue }),
        })
            .then((res) => res.json())
            .then((data) => {
                alert(data.message || "Field updated.");
                window.location.reload();
            })
            .catch(() => alert("Error updating field"));
    };

    const renderSection = (title, data, isImage = false) => {
        if (!data) return null;

        return (
            <div key={title} className="mb-10 h-screen">
                <h2 className="text-xl font-semibold mt-10 mb-4">{title}</h2>
                <table className="w-full border border-collapse border-gray-400">
                    <tbody>
                        {Object.entries(data).map(([key, value]) => {
                            if (key === "_id") return null;
                            return (
                                <tr key={key} className="border border-gray-300">
                                    <td className="p-2 font-medium">{key}</td>
                                    <td className="p-2">
                                        {isImage && value ? (
                                            <img src={value} alt={key} className="w-24 h-auto" />
                                        ) : Array.isArray(value) ? (
                                            value.join(", ")
                                        ) : (
                                            value || "N/A"
                                        )}
                                    </td>
                                    <td className="p-2 space-x-2">
                                        <button
                                            className="bg-blue-600 text-white px-3 py-1 rounded"
                                            onClick={() => handleEdit(key, value, title)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="bg-red-600 text-white px-3 py-1 rounded"
                                            onClick={() => handleDelete(key, title)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    if (!employee) {
        return <p className="text-center mt-10 text-gray-600">Loading...</p>;
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Employee Details</h1>
            {renderSection("Basic Details", employee.basicDetails)}
            {renderSection("Employment Details", employee.employmentDetails)}
            {renderSection("Salary Details", employee.salaryDetails)}
            {renderSection("Education Details", employee.educationDetails)}

            {employee.workExperience?.map((exp, index) =>
                renderSection(`Work Experience #${index + 1}`, {
                    Company: exp.company,
                    JoiningDate: formatDate(exp.joiningDate),
                    ExitDate: formatDate(exp.exitDate),
                    Designation: exp.designation,
                    PreviousSalary: exp.previousSalary,
                    RelievingLetter: exp.relievingLetter,
                    ExperienceLetter: exp.experienceLetter,
                })
            )}

            {renderSection("Compliance and ID Documents", employee.complianceAndID, true)}
            {renderSection("Family & Emergency Contacts", employee.familyAndEmergencyContacts)}
            {renderSection("Health and Insurance", employee.healthAndInsurance)}
            {renderSection("IT Asset Allocation", {
                LaptopID: employee.itAssetAllocation?.laptopId,
                OfficialEmail: employee.itAssetAllocation?.officialEmail,
                AccessCardNumber: employee.itAssetAllocation?.accessCardNumber,
                AssetIssuedDate: formatDate(employee.itAssetAllocation?.assetIssuedDate),
                SoftwareAccess: employee.itAssetAllocation?.softwareAccess?.join(", "),
            })}
            {renderSection("Employee Self Service Preferences", {
                PreferredShiftTiming: employee.employeeSelfServicePreferences?.preferredShiftTiming,
                TransportRequired: employee.employeeSelfServicePreferences?.transportRequired ? "Yes" : "No",
            })}
            {renderSection("Exit Information", {
                ExitReason: employee.exitInfo?.exitReason,
                AppraisalCycle: employee.exitInfo?.appraisalCycle,
                PromotionHistory: employee.exitInfo?.promotionHistory,
                TransferLogs: employee.exitInfo?.transferLogs,
                LeavesSummary: employee.exitInfo?.leavesSummary,
            })}
        </div>
    );
}
