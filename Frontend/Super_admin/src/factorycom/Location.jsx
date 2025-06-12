import React from "react";
import { Link } from "react-router";
export default function Location({ setAct1, setAct, setHideAll,act }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-start overflow-y-auto bg-[rgba(0,0,0,0.3)] p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mt-10">
                <h2 className="text-xl font-semibold mb-4 flex justify-between"><span>Post Job</span><span onClick={() => setHideAll(true)} className="bg-gray-400 rounded-full px-2 text-white cursor-pointer">X</span></h2>

                <div className="border-b outline-none border-gray-200 pb-2 mb-4 flex">
                    <p className={`text-orange-500 font-medium  cursor-pointer`} onClick={() => { setAct(true) }}>Basic Information</p>
                    <p className={`text-orange-500 font-medium ml-4 cursor-pointer  border-b-2 border-orange-500}`} onClick={() => { setAct(false) }}>Location</p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <div className="w-full">
                        <label htmlFor="address">Address *</label>
                        <input
                            type="text"
                            placeholder="Address *"
                            className="border mt-2 outline-none border-gray-200 p-2 rounded w-full"
                        />
                    </div>

                    <div className="w-full">
                        <label htmlFor="city">City *</label>
                        <select className="border mt-2 p-2 outline-none border-gray-200 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>Indon City</option>
                            <option>Jaipur City</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor="state">State *</label>
                        <select className="border mt-2 p-2 outline-none border-gray-200 rounded w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>Rajasthan</option>
                            <option>Delhi</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor="country">Country *</label>
                        <select className="border mt-2 p-2 rounded outline-none border-gray-200 w-full">
                            <option className="bg-gray-300">Select</option>
                            <option>India</option>
                            <option>Dubai</option>
                        </select>
                    </div>

                    <div className="w-full">
                        <label htmlFor="zip">Zip Code *</label>
                        <input
                            type="text"
                            placeholder="Zip Code *"
                            className="border mt-2 outline-none border-gray-200 p-2 rounded w-full"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <div className="w-full h-40 md:h-60 bg-blue-200 flex items-center justify-center">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.124297084391!2d67.03452117508237!3d24.861462877876814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dc6f6c6f0e3%3A0x2b7eaf83b9e86d34!2sKarachi!5e0!3m2!1sen!2s!4v1710818821506"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row justify-end gap-2">
                        <button type="button" className="px-4 py-2 bg-gray-300 rounded w-full md:w-auto">
                            Cancel
                        </button>
                        <button type="submit" className="px-4 py-2 bg-orange-500 text-white rounded w-full md:w-auto">
                            Post
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

