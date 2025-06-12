import React from 'react'
import { Link } from 'react-router'

export default function EditInformations2() {
    return (
        <div className="w-full mx-auto p-4 bg-white shadow-lg rounded-2xl">
            <h2 className="text-2xl font-semibold mb-4">Employee Information</h2>
            <div className="space-y-2 grid md:grid-cols-2 grid-cols-1 gap-3">
                <div className="">
                    <label className="font-medium block">Name:</label>
                    <input type="text" placeholder="Enter Name" className="border w-full px-2 py-2 my-2 border-gray-200 outline-none rounded" />
                </div>
                <div className="">
                    <label className="font-medium block">Position:</label>
                    <input type="text" placeholder="Enter Position" className="border w-full my-2 border-gray-200 p-2 px-2 outline-none rounded" />
                </div>
                <div className="">
                    <label className="font-medium block">Department:</label>
                    <input type="text" placeholder="Enter Department" className="border w-full my-2 border-gray-200 p-2 px-2 outline-none rounded" />
                </div>
                <div className="">
                    <label className="font-medium block">Email:</label>
                    <input type="email" placeholder="Enter Email" className="border w-full my-2 border-gray-200 p-2 px-2 outline-none rounded" />
                </div>
                <div className="">
                    <label className="font-medium block">Phone:</label>
                    <input type="tel" placeholder="Enter Phone" className="border w-full my-2 border-gray-200 p-2 px-2 outline-none rounded" />
                </div>

                <div className="">
                    <label className="font-medium block">Bank Name:</label>
                    <input type="text" placeholder="Enter Bank Name" className="border w-full my-2 border-gray-200 p-2 px-2 outline-none rounded" />
                </div>
                <div className="">
                    <label className="font-medium block">Account Number:</label>
                    <input type="text" placeholder="Enter Account Number" className="border w-full my-2 border-gray-200 p-2 px-2 outline-none rounded" />
                </div>
                <div className="">
                    <label className="font-medium block">IFSC Code:</label>
                    <input type="text" placeholder="Enter IFSC Code" className="border w-full my-2 border-gray-200 p-2 px-2 outline-none rounded" />
                </div>

            </div>
           
            <div className="bg-white rounded-lg p-6 my-4 w-full ">
                <h2 className="text-2xl font-semibold mb-4"> Job Details</h2>

                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500">Profile</span>
                    </div>
                    <h1 className="font-semibold text-[20px]">Name</h1>
                    <h1 className="font-semibold">Role</h1>
                    <button className="mt-2 px-4 relative py-1 w-[83px] bg-orange-500 text-white rounded overflow-hidden flex gap-4"> <span className='cursor-pointer'>Upload</span> <input type="file" className='absolute inset-0 opacity-0' /></button>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1 w-full">
                        <label htmlFor="jobtitle">Job Title *</label>
                        <input type="text" className="border outline-none border-gray-200 p-2 rounded w-full" />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <label htmlFor="">Job Description *</label>
                        <textarea className="border outline-none border-gray-200 p-2 rounded w-full h-24"></textarea>
                    </div>

                    <div>
                        <label htmlFor="">Job Category *</label>
                        <select className="border border-gray-200 outline-none p-2 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>IOS</option>
                            <option>Web & Application</option>
                            <option>Networking</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Job Type *</label>
                        <select className="border border-gray-200 outline-none p-2 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>Full Time</option>
                            <option>Part Time</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="">Job Level *</label>
                        <select className="border border-gray-200 outline-none p-2 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>Team Lead</option>
                            <option>Manager</option>
                            <option>Senior</option>
                            <option>Junior</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Experience *</label>
                        <select className="border border-gray-200 outline-none p-2 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>Entry Level</option>
                            <option>Mid Level</option>
                            <option>Expert</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Qualification *</label>
                        <select className="border border-gray-200 outline-none p-2 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>Bachler's Degree</option>
                            <option>Master Degree</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Gender *</label>
                        <select className="border border-gray-200 outline-none p-2 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Min. Salary *</label>
                        <select className="border border-gray-200 outline-none p-2 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>10K - 15K</option>
                            <option>15K - 20K</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Max. Salary *</label>
                        <select className="border border-gray-200 outline-none p-2 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>40K - 50K</option>
                            <option>50K - 60K</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Job Expired Date *</label>
                        <input type="date" className="border outline-none border-gray-200 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="">Required Skills</label>
                        <input type="text" className="border outline-none border-gray-200 p-2 rounded w-full" />
                    </div>

                    <div className="flex md:flex-row flex-col items-center gap-2">
                <button className="mt-4 md:w-[200px] cursor-pointer w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"><Link to={"/editpage"}>Submit Information</Link></button>
                <button className="mt-4 md:w-[100px] cursor-pointer w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"><Link to={"/editpage"}>Cancel </Link></button>
            </div>
                </form>
            </div>
        </div>
    )
}
