import React from "react";
export default function PostJob({ setAct, setHideAll }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-start overflow-y-auto bg-[rgba(0,0,0,0.3)] p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <h2 className="text-xl font-semibold mb-4 flex justify-between cursor-pointer"><span>Post Job </span><span className="bg-gray-400 px-2 rounded-full text-white" onClick={() => setHideAll(true)}>X </span></h2>
                <div className="border-b border-gray-200 pb-2 mb-4">
                    <p className="text-orange-500 font-medium cursor-pointer ">
                        <span className="border-b-2 border-orange-500" onClick={() => { setAct(true) }}>Basic Information</span> <span onClick={() => { setAct(false) }}>Location</span></p>
                </div>
                <div className="flex flex-col items-center mb-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-gray-500"><img className="rounded-full" src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-30.jpg" alt="" /></span>
                    </div>
                    <h1 className="font-semibold text-[20px]">Anuj Saini</h1>
                    <h1 className="font-semibold">Web Developer</h1>
                    <button className="mt-2 px-4 py-1 bg-orange-500 text-white rounded">Upload</button>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid grid-cols-1">
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

                    <div className="col-span-1 md:col-span-2 flex justify-end gap-2">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded cursor-pointer">Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded cursor-pointer">Save & Next</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

