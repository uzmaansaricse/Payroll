import React from "react";

export default function SelfEvaluation() {
  const policyData = {
    leavePolicy: "Employees are allowed 18 leaves annually including casual and sick leaves.",
    performanceCriteria: "Quarterly self and manager reviews based on task completion and initiative.",
    workingHours: "9:30 AM - 6:30 PM (Monday to Friday)",
    remoteWork: "Allowed up to 2 days/week with prior approval.",
    additionalNotes: "Refer to the HR handbook for updated travel and reimbursement policies."
  };

  return (
    <div className="my-5 p-5 border rounded grid gap-4">
      <h2 className="text-xl font-semibold text-gray-800">Company Policy Overview</h2>

      <div>
        <label className="block font-medium">Leave Policy</label>
        <p className="border p-2 rounded bg-gray-100">{policyData.leavePolicy}</p>
      </div>

      <div>
        <label className="block font-medium">Performance Review Criteria</label>
        <p className="border p-2 rounded bg-gray-100">{policyData.performanceCriteria}</p>
      </div>

      <div>
        <label className="block font-medium">Working Hours</label>
        <p className="border p-2 rounded bg-gray-100">{policyData.workingHours}</p>
      </div>

      <div>
        <label className="block font-medium">Remote Work Guidelines</label>
        <p className="border p-2 rounded bg-gray-100">{policyData.remoteWork}</p>
      </div>

      <div>
        <label className="block font-medium">Other Notes</label>
        <p className="border p-2 rounded bg-gray-100 whitespace-pre-wrap">
          {policyData.additionalNotes}
        </p>
      </div>
    </div>
  );
}
