import React from "react";
import { Link } from "react-router";
export default function PersonalDetail2() {
  return (
    <div className="  w-full h-full z-50  overflow-y-auto  p-2">
            <div className="lg:w-[900px] mx-auto w-full p-4 bg-white rounded">
                {/* Personal Information start */}
                <div className="flex justify-between items-center"><h2 className="text-2xl font-semibold mb-4">Employee Information</h2> <button className="bg-gray-500 p-1 rounded text-white cursor-pointer"><Link to="/personaldetailtable">View Page</Link></button></div>
                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500"><img className="rounded-full" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-30.jpg" alt="" /></span>
                    </div>
                    <h1 className="font-semibold text-[20px]">Anuj Saini</h1>
                    <h1 className="font-semibold">Web Developer</h1>
                    <button className="mt-2 px-4 py-1 relative bg-orange-500 text-white rounded"><span className='cursor-pointer'>Upload</span><input type="file" className='absolute inset-0 opacity-0' /></button>
                </div>
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
                    <div className="flex justify-between">
                        <span className="font-medium">District:</span>
                        <span>Jaipur</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">State:</span>
                        <span>Rajasthan</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Nation:</span>
                        <span>India</span>
                    </div>
                </div>
                {/* Personal Information end */}
                {/* Bank Account details start */}
                <h2 className="text-2xl font-semibold my-4">Bank Account Details</h2>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="font-medium">Bank Name:</span>
                        <span>HDFC Bank</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">Account Number:</span>
                        <span>******6789</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="font-medium">IFSC Code:</span>
                        <span>ANUJ*****</span>
                    </div>
                    <h3 className="text-xl font-semibold mt-4">Recent Transactions</h3>
                    <div className="space-y-2 mt-2">
                        <div className="border-b border-gray-200 py-2 flex justify-between">
                            <span className="font-medium">Date:</span>
                            <span>25 Mar 2025</span>
                        </div>
                        <div className="border-b border-gray-200 py-2 flex justify-between">
                            <span className="font-medium">Amount:</span>
                            <span>₹10,000</span>
                        </div>
                        <div className="border-b border-gray-200 py-2 flex justify-between">
                            <span className="font-medium">Transaction Type:</span>
                            <span>Credit</span>
                        </div>
                        <div className="border-b border-gray-200 py-2 flex justify-between">
                            <span className="font-medium">Transaction ID:</span>
                            <span>#TXN123456</span>
                        </div>
                    </div>
                </div>
                {/* Bank Account details end */}
                {/* Emergency Contact Information start */}
                <h3 className="text-2xl font-semibold my-4">Emergency Contact Information</h3>
                <div className="space-y-2 mt-2">
                    <div className="border-b border-gray-200 py-2 flex justify-between">
                        <span className="font-medium">Name:</span>
                        <span>Anuj Saini</span>
                    </div>
                    <div className="border-b border-gray-200 py-2 flex justify-between">
                        <span className="font-medium">Relationship:</span>
                        <span>Brother</span>
                    </div>
                    <div className="border-b border-gray-200 py-2 flex justify-between">
                        <span className="font-medium">Phone Number:</span>
                        <span>+91 098765432</span>
                    </div>
                    <div className="border-b border-gray-200 py-2 flex justify-between">
                        <span className="font-medium">Alternate Number:</span>
                        <span>+91 1234567890</span>
                    </div>
                    <div className="border-b border-gray-200 py-2 flex justify-between">
                        <span className="font-medium">Email Address:</span>
                        <span>anujsaini@email.com</span>
                    </div>
                    <div className="border-b border-gray-200 py-2 flex justify-between">
                        <span className="font-medium">Address:</span>
                        <span>Jaipur (Raj.) India</span>
                    </div>
                    <div className="border-b border-gray-200 py-2 flex justify-between">
                        <span className="font-medium">Medical Information:</span>
                        <span>No known allergies</span>
                    </div>
                </div>

                {/* Emergency Contact Information end */}

            </div>
        </div>
  );
};



