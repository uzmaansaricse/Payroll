import React from 'react'
import { Link } from 'react-router'

export default function EditPage() {
    return (
        <div className="  w-full lg:w-[900px] mx-auto h-full z-50  overflow-y-auto  p-2">
            <div className="full mx-auto p-4 bg-white  rounded">
                <h2 className="text-2xl font-semibold mb-4">Employee Information</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="font-medium">Name:</span>
                        <span>Anuj Saini</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Position:</span>
                        <span>Web Developer</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Department:</span>
                        <span>IT</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Email:</span>
                        <span>anujsaini@example.com</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Phone:</span>
                        <span>91+098765432</span>
                    </div>
                    <h3 className="text-xl font-semibold mt-4">Bank Information</h3>
                    <div className="space-y-2 mt-2">
                        <div className="flex justify-between">
                            <span className="font-medium">Bank Name:</span>
                            <span>HDFC Bank</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">Account Number:</span>
                            <span>123456789</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-medium">IFSC Code:</span>
                            <span>ANUJ12345</span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full mx-auto p-4 bg-white  my-2 rounded">
                <h2 className="text-2xl font-semibold mb-4">Job Details</h2>
                <div className="space-y-2">
                    <div className="flex flex-col items-center mb-4">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                            <span className="text-gray-500"><img className="rounded-full" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-30.jpg" alt="" /></span>
                        </div>
                        <h1 className="font-semibold text-[20px]">Anuj Saini</h1>
                        <h1 className="font-semibold">Web Developer</h1>
                        <button className="mt-2 px-4 py-1 relative bg-orange-500 text-white rounded"><span className='cursor-pointer'>Upload</span><input type="file" className='absolute inset-0 opacity-0' /></button>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Job Title:</span>
                        <span>Web Developer</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Job Description:</span>
                        <span>Responsible for developing and maintaining web applications.</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Job Category:</span>
                        <span>IT & Software</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Job Type:</span>
                        <span>Full Time</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Job Level:</span>
                        <span>Senior</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Experience:</span>
                        <span>5+ Years</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Qualification:</span>
                        <span>Bachelor's Degree in Computer Science</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Gender:</span>
                        <span>Male</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Min. Salary:</span>
                        <span>₹40,000</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Max. Salary:</span>
                        <span>₹60,000</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Job Expiry Date:</span>
                        <span>31st Dec 2025</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Required Skills:</span>
                        <span>React, JavaScript, HTML, CSS</span>
                    </div>
                </div>
                <div className="flex md:gap-2 gap-0 md:flex-row flex-col">
                    <button className=" my-2 md:w-[100px] cursor-pointer w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"> <Link to={"/editinformations"}>Edit</Link></button>
                    <button className=" my-2 md:w-[100px] cursor-pointer w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600"> <Link to={"/edit"}>Cancel </Link></button>
                </div>
            </div>
        </div>
    )
}
