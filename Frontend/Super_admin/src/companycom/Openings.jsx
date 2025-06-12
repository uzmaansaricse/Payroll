import React from 'react'
import { FaEdit } from 'react-icons/fa'

export default function Openings({ setData }) {
    return (
        <div className='flex flex-col md:flex-row  w-full max-w-7xl mx-auto mt-4 rounded-lg shadow-lg bg-white'>
            {/* Left Section */}
            <div className='flex-1 bg-white p-6 rounded'>
                <div className='flex justify-between items-center mb-4'>
                    <div className='text-xl font-bold'>Job Applicants</div>
                    <div className='bg-gray-100 px-4 py-2 rounded text-sm cursor-pointer hover:bg-gray-200 transition-all'>
                        View All
                    </div>
                </div>

                {/* Tabs for Openings and Applications */}
                <div className='flex mb-4 '>
                    <div onClick={() => setData(false)} className='flex-1 bg-gray-200 p-0.5 text-[12px] md:text-[16px] text-black font-semibold text-center rounded hover:bg-amber-400 cursor-pointer transition-all'>
                        Openings
                    </div>
                    <div onClick={() => setData(true)} className='flex-1 bg-amber-500 p-0.5 text-[12px] md:text-[16px] text-white font-semibold text-center rounded     hover:bg-amber-600 cursor-pointer transition-all'>
                        Applications
                    </div>
                </div>

                {/* Applicant 1 */}
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <div className='bg-gray-200 p-1 rounded'>
                            <img width={30}
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/apple.svg'
                                alt='User 1'
                                className='rounded-full'
                            />
                        </div>
                        <div className='ml-4'>
                            <div className='font-semibold md:text-[16px] text-[12px]'>Brian Villalobos</div>
                            <div className='text-sm text-gray-600'>
                                Exp: 5+ Years
                                <span className='text-amber-600 font-bold'>•</span> USA
                            </div>
                        </div>
                    </div>
                    <div>
                        <span className='bg-gray-200 p-1 flex justify-center items-center rounded'>
                            <FaEdit />
                        </span>
                    </div>
                </div>

                {/* Applicant 2 */}
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <div className='bg-gray-200 p-1 rounded'>
                            <img width={30}
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/php.svg'
                                alt='User 2'
                                className='rounded-full'
                            />
                        </div>
                        <div className='ml-4'>
                            <div className='font-semibold md:text-[16px] text-[12px]'>Brian Villalobos</div>
                            <div className='text-sm text-gray-600'>
                                Exp: 4+ Years{' '}
                                <span className='text-amber-600 font-bold'>•</span> USA
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <span className='bg-gray-200 p-1 flex justify-center items-center rounded'>
                            <FaEdit />
                        </span>
                    </div>
                </div>

                {/* Applicant 3 */}
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <div className='bg-gray-200 p-1 rounded'>
                            <img width={30}
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/react.svg'
                                alt='User 3'
                                className='rounded-full'
                            />
                        </div>
                        <div className='ml-4'>
                            <div className='font-semibold md:text-[16px] text-[12px]'>Brian Villalobos</div>
                            <div className='text-sm text-gray-600'>
                                Exp: 3+ Years{' '}
                                <span className='text-amber-600 font-bold'>•</span> USA
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <span className='bg-gray-200 p-1 flex justify-center items-center rounded'>
                            <FaEdit />
                        </span>
                    </div>
                </div>

                {/* Applicant 4 */}
                <div className='flex justify-between items-center mb-4'>
                    <div className='flex items-center'>
                        <div className=' bg-gray-200 p-1 rounded'>
                            <img width={30}
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/icons/laravel-icon.svg'
                                alt='User 4'
                                className='rounded-full'
                            />
                        </div>
                        <div className='ml-4'>
                            <div className='font-semibold md:text-[16px] text-[12px]'>Brian Villalobos</div>
                            <div className='text-sm text-gray-600'>
                                Exp: 2+ Years{' '}
                                <span className='text-amber-600 font-bold'>•</span> USA
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <span className='bg-gray-200 p-1 flex justify-center items-center rounded'>
                            <FaEdit />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


