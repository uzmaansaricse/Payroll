import React from 'react'
import { Link } from 'react-router'

export default function CompanyDetails() {
    return (
        <div className="w-full mx-auto min-h-screen mt-10 md:p-4 p-1 bg-white border border-gray-300">
        <div className="flex justify-end items-center mb-4 border-b pb-2 border-gray-200">
            <button className='bg-gray-400 px-3 py-1 rounded hover:bg-gray-300'>
                <Link to="/companymanagement">Back</Link>
            </button>
        </div>
        <div className="space-y-2">
            <h2 className="text-2xl text-center font-bold text-gray-800">Company Details</h2>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>Company Name</h1>
                <span className='font-semibold text-gray-800'>Tech Bro24</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>Official Email</h1>
                <span className='font-semibold text-gray-800'>techbro24@gmail.com</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>Phone</h1>
                <span className='font-semibold text-gray-800'>91+ 0987654321</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>Company Address</h1>
                <span className='font-semibold text-gray-800'>Jaipur, (Raj.)</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>Company Registration No.</h1>
                <span className='font-semibold text-gray-800'>0987</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>GST No.</h1>
                <span className='font-semibold text-gray-800'>098765432</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>PAN No.</h1>
                <span className='font-semibold text-gray-800'>NHJP09876</span>
            </div>
            <h1 className='font-bold my-4 text-center md:font-semibold  md:text-2xl'>Payroll & Banking</h1>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>Bank Name</h1>
                <span className='font-semibold text-gray-800'>HDFC</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>Bank Account No.</h1>
                <span className='font-semibold text-gray-800'>56789098765</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>IFSC Code</h1>
                <span className='font-semibold text-gray-800'>GEKA567</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>Payroll Cycle</h1>
                <span className='font-semibold text-gray-800'>Monthly</span>
            </div>
            <h1 className='font-bold my-4 text-center md:font-semibold  md:text-2xl'>HR & Admin Detail</h1>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>HR Manager Name</h1>
                <span className='font-semibold text-gray-800'>Anuj Saini</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>HR Manager Email</h1>
                <span className='font-semibold text-gray-800'>xyz@gmail.com</span>
            </div>
            <div className='flex justify-between items-center p-2 border-b border-gray-200'>
                <h1 className='font-medium text-gray-700'>HR Manager Phone No.</h1>
                <span className='font-semibold text-gray-800'>0987654321</span>
            </div>
        </div>
    </div>
    )
}

