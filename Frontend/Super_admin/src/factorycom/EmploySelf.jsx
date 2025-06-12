import React from 'react'

export default function EmploySelf2() {
    return (
        <div className="p-2 bg-white min-h-screen">
            <div className="lg:w-[900px] w-full mx-auto bg-white shadow rounded p-5 space-y-8">
                <h1 className="text-2xl font-bold">Employee Self-Service (ESS)</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="p-6 bg-blue-50 rounded shadow">
                        <h2 className="text-2xl font-bold text-blue-700">Personal Information</h2>
                        <p className="text-gray-600 mt-2">
                            Update personal details, contact information, and upload documents.
                        </p>
                    </section>

                    <section className="p-6 bg-purple-50 rounded shadow">
                        <h2 className="text-2xl font-bold text-purple-700">Salary & Payroll</h2>
                        <p className="text-gray-600 mt-2">
                            View pay slips, tax details, and download relevant documents.
                        </p>
                    </section>

                    <section className="p-6 bg-green-50 rounded shadow">
                        <h2 className="text-2xl font-bold text-green-700">Leave Management</h2>
                        <p className="text-gray-600 mt-2">
                            Apply for leaves, check balances, and review policies.
                        </p>
                    </section>

                    <section className="p-6 bg-yellow-50 rounded shadow">
                        <h2 className="text-2xl font-bold text-yellow-700">Training & Development</h2>
                        <p className="text-gray-600 mt-2">
                            Enroll in courses and access certifications.
                        </p>
                    </section>

                    <section className="p-6 bg-pink-50 rounded shadow">
                        <h2 className="text-2xl font-bold text-pink-700">Performance Management</h2>
                        <p className="text-gray-600 mt-2">
                            Track KRA, KPI, and submit self-evaluations.
                        </p>
                    </section>

                    <section className="p-6 bg-green-50 rounded shadow">
                        <h2 className="text-2xl font-bold text-green-700">Benefits & Perks</h2>
                        <p className="text-gray-600 mt-2">
                            View insurance details and apply for perks.
                        </p>
                    </section>

                    <section className="p-6 bg-red-50 rounded shadow">
                        <h2 className="text-2xl font-bold text-red-700">Time & Attendance</h2>
                        <p className="text-gray-600 mt-2">
                            Check login/logout times and track overtime.
                        </p>
                    </section>

                    <section className="p-6 bg-blue-50 rounded shadow">
                        <h2 className="text-2xl font-bold text-blue-700">Grievance & Feedback</h2>
                        <p className="text-gray-600 mt-2">
                            Submit grievances and track resolutions.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
