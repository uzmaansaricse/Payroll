import React from 'react'
import { Link } from 'react-router'

export default function SelfEvalutionTab2() {
    return (
        <div className="lg:p-4 p-2 bg-gray-50 min-h-screen">
            <div className="flex justify-center items-center mb-4">
                <div className="lg:w-[900px] w-full flex items-center justify-between bg-white p-2 rounded shadow">
                    <h1 className="font-bold text-3xl text-gray-800">Details (KRA)</h1>
                    <Link to="/selfEvalution">
                        <button className="bg-gray-300 cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-200 transition-all whitespace-nowrap">View Page</button>
                    </Link>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="bg-white rounded p-2 lg:p-4 shadow lg:w-[900px] w-full space-y-6">
                    <div className="flex justify-center items-center">
                        <div className='flex flex-col items-center'>
                            <img width={70} className='rounded-full' src="https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/profiles/avatar-31.jpg" alt="" />
                            <h1 className='font-bold'>Anuj Saini</h1>
                            <h1 className='font-semibold'>Web Developer</h1>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl text-gray-700">Employee Name</h1>
                        <h2 className="font-bold text-lg text-gray-900">Anuj</h2>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl text-gray-700">Review Period</h1>
                        <h2 className="font-bold text-lg text-gray-900">Baki</h2>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl text-gray-700">Self Evalution Score</h1>
                        <h2 className="font-bold text-lg text-gray-900">Baki</h2>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl text-gray-700">Manager Score</h1>
                        <h2 className="font-bold text-lg text-gray-900">Baki</h2>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center my-4">
                <div className="lg:w-[900px] w-full flex items-center justify-between bg-white p-2 rounded shadow">
                    <h1 className="font-bold text-3xl text-purple-700"> KRA Breakdown</h1>

                </div>
            </div>
            <div className="flex justify-center items-center my-5 text-purple-400">
                <div className="bg-white rounded p-2 lg:p-4 shadow lg:w-[900px]  w-full space-y-6">


                    <div className="flex justify-between items-center border-b  border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl ">Project Completion</h1>
                        <h2 className="font-bold text-lg  ">90%</h2>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl  ">Collaboration </h1>
                        <h2 className="font-bold text-lg  ">Baki</h2>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl  ">Problem Solving</h1>
                        <h2 className="font-bold text-lg  ">Baki</h2>
                    </div>

                    <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <h1 className="font-semibold text-xl  "> Puvetiality  </h1>
                        <h2 className="font-bold text-lg  ">Baki</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
