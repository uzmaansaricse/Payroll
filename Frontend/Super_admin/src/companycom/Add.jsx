import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'

export default function Add() {
    return (
  

        <div className="w-full h-full overflow-y-auto lg:w-[900px] mx-auto p-2">
            <div className="w-full p-4 bg-white rounded">
                <div className="md:text-end text-center flex gap-1 justify-end"><button className='bg-gray-500 p-1 rounded text-white hover:bg-gray-600 cursor-pointer duration-500'>Edit Page</button><button className='bg-blue-500 p-1 rounded text-white hover:bg-blue-600 cursor-pointer duration-500'>Upload CSV</button></div>

                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>1️⃣ Basic Details (Login + Identification)</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor="">Employ ID</label><br />
                            <span className='flex items-center gap-1'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='ID' /><input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /> </span>
                        </div>
                        <div>
                            <label htmlFor="">Gender</label><br />
                            <span className='flex items-center gap-1'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='Male & Female' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Date of Birth</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='dd/mm/yy' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Nationality</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Marital Status</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Email (official + personal)</label><br />
                            <span className='flex items-center gap-1'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='Email' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Mobile Number (primary + emergency)</label><br />
                            <span className='flex items-center gap-1'> <input type="number" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='Number' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Passport Number (optional)</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='Number' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>2️⃣ Employment Details Employee ID / Code</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor="">Designation</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Grade / Level (e.g., L3, Analyst, SDE 1, Band 5)</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Business Unit / Department</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Work Location</label><br />
                            <span className='flex items-center gap-1' > <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='Location' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Reporting Manager</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Joining Date </label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='dd/mm/yy' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Conformation Date</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='dd/mm/yy' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Employee Type</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>3️⃣ Salary & Financial Info Total CTC</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor="">Total CTC</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Fixed & Variable Breakdown</label><br />
                            <span className='flex gap-1 items-center'>  <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Bonus Structure</label><br />
                            <span className='flex items-center gap-1'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">PAN Number</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Tax Regime (Old)</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline /></span>
                        </div>
                        <div>
                            <label htmlFor="">Tax Regime (New)</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">UAN (Provident Fund)</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline /></span>
                        </div>
                        <div>
                            <label htmlFor="">ESIC Number</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='Number' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Gratuity Eligibility</label><br />
                            <span className='flex items-center gap-1'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">LWF Details (Labour Welfare Fund)</label><br />
                            <span className='flex gap-1 items-center'> <textarea className='border border-gray-200 rounded outline-none p-1 w-full' name="" id=""></textarea> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                    </div>
                    <h1 className='font-semibold text-[25px] my-4'>Bank Account Details </h1>
                    <div className=" w-full my-5 grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-1">
                        <div>
                            <label htmlFor="">Name</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Account No</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">IFSC Code</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Bank Name</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4"><input type="checkbox" />
                    <h1 className='font-semibold text-[25px] my-4'>4️⃣ Educational Background</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor="">Highest Qualification</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Institute/University</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Year of Passing</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='dd/mm/yy' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Percentage / CGPA</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Stream/Specialization</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Certifications </label><br />
                            <span className='flex gap-1 items-center'>
                                <select className='w-full p-1 my-2 outline-none border border-gray-200 rounded' name="" id="">
                                    <option value="">Select</option>
                                    <option value="">AWS</option>
                                    <option value="">PMP</option>
                                    <option value="">GCP</option>
                                    <option value="">Web Developer</option>
                                    <option value="">Digital Marketing</option>
                                    <option value="">Data Science</option>
                                    <option value="">Data Analatic</option>
                                    <option value="">etc.</option>
                                </select>
                                <input type="checkbox" />
                                <MdDeleteOutline className='cursor-pointer' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>5️⃣ Work Experience</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor="">Previous Companies  Joining Date</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='dd/mm/yy' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Previous Companies  Exit Date</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='dd/mm/yy' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Designations held</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Previous Salary</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='Location' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Relieving Letter Copy</label><br />
                            <span className='flex gap-1 items-center'><div className="border border-gray-200 rounded my-2 p-1 text-gray-400 cursor-pointer relative w-full">Letter Copy<input type="file" className='w-full my-2 opacity-0 absolute top-0 left-0 p-1 outline-none border border-gray-200 rounded' /></div> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Experience Letter Upload</label><br />
                            <span className='flex gap-1 items-center'>  <div className="border w-full border-gray-200 rounded my-2 p-1 relative text-gray-400 cursor-pointer"> Upload <input type="file" className='w-full absolute top-0 left-0 p-1 outline-none opacity-0 border border-gray-200 rounded' placeholder='dd/mm/yy' /></div><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>

                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>6️⃣ Compliance & ID Proofs</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor=""> Aadhar Card</label><br />
                            <span className='flex gap-1 items-center'><div className="border w-full border-gray-200 rounded my-2 p-1 relative text-gray-400 cursor-pointer"> Upload Aadhar <input type="file" className='w-full absolute top-0 left-0 p-1 outline-none opacity-0 border border-gray-200 rounded' placeholder='dd/mm/yy' /></div><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">PAN Card</label><br />
                            <span className='flex gap-1 items-center'> <div className="border w-full border-gray-200 rounded my-2 p-1 relative text-gray-400 cursor-pointer"> Upload Pan <input type="file" className='w-full absolute top-0 left-0 p-1 outline-none opacity-0 border border-gray-200 rounded' placeholder='dd/mm/yy' /></div><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Passport (for international projects)</label><br />
                            <span className='flex gap-1 items-center'> <div className="border w-full border-gray-200 rounded my-2 p-1 relative text-gray-400 cursor-pointer"> Upload Passport <input type="file" className='w-full absolute top-0 left-0 p-1 outline-none opacity-0 border border-gray-200 rounded' placeholder='dd/mm/yy' /></div> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Voter ID / Driving License</label><br />
                            <span className='flex gap-1 items-center'>  <div className="border w-full border-gray-200 rounded my-2 p-1 relative text-gray-400 cursor-pointer"> Upload <input type="file" className='w-full absolute top-0 left-0 p-1 outline-none opacity-0 border border-gray-200 rounded' placeholder='dd/mm/yy' /></div> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Signed NDA</label><br />
                            <span className='flex gap-1 items-center'> <div className="border w-full border-gray-200 rounded my-2 p-1 relative text-gray-400 cursor-pointer"> Upload Signed NDA<input type="file" className='w-full absolute top-0 left-0 p-1 outline-none opacity-0 border border-gray-200 rounded' placeholder='dd/mm/yy' /></div><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Background Verification Status</label><br />
                            <span className='flex gap-1 items-center'><div className="border w-full border-gray-200 rounded my-2 p-1 relative text-gray-400 cursor-pointer"> Upload Verification<input type="file" className='w-full absolute top-0 left-0 p-1 outline-none opacity-0 border border-gray-200 rounded' placeholder='dd/mm/yy' /></div><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>

                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>7️⃣ Family / Emergency Contact Info</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor="">Father's Name</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Mother's Name</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Spouse Name</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Emergency Name</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Emergency Number</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Relationship</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Emergency Address</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline /></span>
                        </div>

                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>8️⃣ Health & Insurance</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor="">Blood Group</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Medical History (for health insurance)</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Nominee Details</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Insurance Type (ESI / Corporate Policy)</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Dependents Details (for health insurance)</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>9️⃣ IT & Asset Allocation</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor="">Laptop / Desktop ID</label><br />
                            <span className='flex gap-1 items-center'><input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Email ID (official)</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Access Card Number</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' /><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Asset Issued Date</label><br />
                            <span className='flex gap-1 items-center'> <input type="text" className='w-full my-2 p-1 outline-none border border-gray-200 rounded' placeholder='dd/mm/yy' /> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Software Access Provided</label><br />
                            <span className='flex gap-1 items-center'>
                                <select className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id="">
                                    <option value="">Select</option>
                                    <option value="">VPN</option>
                                    <option value="">GitHub</option>
                                    <option value="">JIRA</option>
                                    <option value="">etc.</option>
                                </select>
                                <input type="checkbox" />
                                <MdDeleteOutline className='cursor-pointer' />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className="my-4">
                    <h1 className='font-semibold text-[25px] my-4'>🔟 Employee Self-Service Preferences</h1>
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor=""> Preferred Shift Timing</label><br />
                            <span className='flex gap-1 items-center'>
                                <select className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id="">
                                    <option value="">Select</option>
                                    <option value="">08:00 AM 04:00 PM</option>
                                    <option value="">04:00 PM 12:00 AM</option>
                                    <option value="">12:00 PM 08:00 AM</option>
                                </select>
                                <input type="checkbox" />
                                <MdDeleteOutline className='cursor-pointer' />
                            </span>
                        </div>
                        <div>
                            <label htmlFor="">Transport Required (yes/no)</label><br />
                            <span className='flex gap-1 items-center'>
                                <select className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id="">
                                    <option value="">Select</option>
                                    <option value="">Yes</option>
                                    <option value="">No</option>
                                </select>
                                <input type="checkbox" />
                                <MdDeleteOutline className='cursor-pointer' />
                            </span>
                        </div>
                    </div>
                </div>
               
                <div className="my-4">
                    <div className='grid md:grid-cols-2 md:gap-5 gap-1 grid-cols-1 space-y-2 w-full'>
                        <div>
                            <label htmlFor=""> Exit Reason</label><br />
                            <span className='flex gap-1 items-center'> <textarea className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id=""></textarea><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Appraisal Cycle</label><br />
                            <span className='flex gap-1 items-center'> <textarea className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id=""></textarea><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Promotion History</label><br />
                            <span className='flex gap-1 items-center'> <textarea className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id=""></textarea><input type="checkbox" /> <MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Transfer / Location Change Logs</label><br />
                            <span className='flex gap-1 items-center'><textarea className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id=""></textarea> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Leaves Summary</label><br />
                            <span className='flex gap-1 items-center'> <textarea className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id=""></textarea> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                        <div>
                            <label htmlFor="">Timesheet History</label><br />
                            <span className='flex gap-1 items-center'><textarea className='w-full my-2 p-1 outline-none border border-gray-200 rounded' name="" id=""></textarea> <input type="checkbox" /><MdDeleteOutline className='cursor-pointer' /></span>
                        </div>
                    </div>
                </div>
                <div className="my-4 space-y-3">
                    <h1 className='font-semibold lg:text-3xl'>Custom Field</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Name' />
                        <input type="text" className='outline-none border border-gray-200 rounded p-1' placeholder='Field Value' />
                    </div>
                    <div className='text-blue-600'>+ Add Custom Field</div>
                </div>
                <div className=' justify-center lg:hidden flex'><button className='bg-blue-600 w-full hover:bg-blue-700 cursor-pointer text-white rounded py-1 px-3'>Submit</button></div>
                <div className='justify-end lg:flex hidden'><button className='bg-blue-600  hover:bg-blue-700 cursor-pointer text-white rounded py-1 px-3'>Submit</button></div>
            </div>
        </div>

    )
}
