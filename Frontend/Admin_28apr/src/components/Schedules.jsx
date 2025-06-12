import React from 'react'
import { CiCalendarDate, CiClock1 } from 'react-icons/ci'
import { Link } from 'react-router'

export default function Schedules() {
    return (
        <>
            <div className='w-full mx-auto shadow-xl bg-white m-3 p-2'>
                <div className='flex justify-between items-center p-3 border-b border-gray-400'>
                    <div className=' font-bold text-gray-700 text-lg'>Schedules</div>
                    <div className='bg-gray-100 px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-gray-200 transition-all'>
                        <a href={"/newhire"}>View All</a>
                    </div>
                </div>
                {/* box-ui 1 */}

                <div className='m-4 bg-gray-100 rounded p-2'>
                    <div className='border-b p-3 border-gray-300'>
                        <span className='bg-[#3B7080] text-white rounded p-0.5 text-sm'>
                            UI/ UX Designer{' '}
                        </span>
                        <h3 className='font-bold p-1'>
                            Interview Candidates - UI/UX Designer{' '}
                        </h3>

                        <div className='flex gap-2'>
                            <span className='pt-1 text-gray-500'>
                                <CiCalendarDate />
                            </span>
                            <span className='text-gray-600'>Thu, 15 Feb 2025</span>
                            <span className='text-gray-600 pt-1.5'>
                                <CiClock1 />
                            </span>
                            <span className='text-gray-600'>01:00 PM - 02:20 PM</span>
                        </div>
                    </div>

                    <div className='flex justify-between p-4 '>
                        <div className='flex relative p-1'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-49.jpg' alt=''
                                className='w-8 h-8 rounded-full absolute top-0 left-0  hover:z-30  duration-200 hover:top-[-6px]' />
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-50.jpg'
                                alt=''
                                className='w-8 h-8 rounded-full absolute top-0 left-[20px]  hover:z-30  duration-200 hover:top-[-6px]'
                            />
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-51.jpg'
                                alt=''
                                className='w-8 h-8 rounded-full absolute top-0 left-[40px]  hover:z-30  duration-200 hover:top-[-6px]'
                            />
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-52.jpg'
                                alt=''
                                className='w-8 h-8 rounded-full absolute top-0 left-[60px]  hover:z-30  duration-200 hover:top-[-6px]'
                            />
                            <span className='w-8 h-8 rounded-full'>
                                <img
                                    src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-53.jpg'
                                    alt=''
                                    className='w-8 h-8 rounded-full absolute top-0 left-[80px]  hover:z-30  duration-500 hover:top-[-6px]'
                                />
                            </span>
                            <span className='w-8 h-8 border rounded-full bg-amber-500 text-white absolute top-0 left-[100px] flex items-center justify-center  hover:z-30 object-cover duration-500 hover:top-[-6px]'>
                                +3
                            </span>
                        </div>

                        <span className='text-sm  text-[#F5E7C6] bg-[#0a1f44] m-2 p-1  rounded cursor-pointer '>
                           <a href="/"> Join Meeting</a>
                        </span>
                    </div>
                </div>

                {/* box-ui-2 */}

                <div className='m-4 bg-gray-100 rounded p-2'>
                    <div className='border-b p-3 border-gray-300'>
                        <span className='bg-[#3B7080] text-white rounded p-0.5 text-sm'>
                            IOS Developer
                        </span>
                        <h3 className='font-bold p-1'>
                            Interview Candidates - IOS Developer
                        </h3>

                        <div className='flex gap-2'>
                            <span className='pt-1 text-gray-500'>
                                <CiCalendarDate />
                            </span>
                            <span className='text-gray-600'>Thu, 28 Feb 2024</span>
                            <span className='text-gray-600 pt-1.5'>
                                <CiClock1 />{' '}
                            </span>
                            <span className='text-gray-600'>03:00 PM - 08:20 PM</span>
                        </div>
                    </div>

                    <div className='flex justify-between p-4 '>
                        <div className='flex relative p-1'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-49.jpg'
                                alt=''
                                className='w-8 h-8 rounded-full absolute top-0 left-0 hover:scale-105 hover:z-30 object-cover duration-200 hover:top-[-6px]'
                            />
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-50.jpg'
                                alt=''
                                className='w-8 h-8 rounded-full absolute top-0 left-[20px] hover:scale-105 hover:z-30 object-cover duration-200 hover:top-[-6px]'
                            />
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-51.jpg'
                                alt=''
                                className='w-8 h-8 rounded-full absolute top-0 left-[40px] hover:scale-105 hover:z-30 object-cover duration-200 hover:top-[-6px]'
                            />
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-52.jpg'
                                alt=''
                                className='w-8 h-8 rounded-full absolute top-0 left-[60px] hover:scale-105 hover:z-30 object-cover duration-200 hover:top-[-6px]'
                            />
                            <span className='w-8 h-8 rounded-full'>
                                <img
                                    src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-53.jpg'
                                    alt=''
                                    className='w-8 h-8 rounded-full absolute top-0 left-[80px] hover:scale-105 hover:z-30 object-cover duration-500 hover:top-[-6px]'
                                />
                            </span>
                            <span className='w-8 h-8 border rounded-full bg-amber-500 text-white absolute top-0 left-[100px] flex items-center justify-center hover:scale-105 hover:z-30 object-cover duration-500 hover:top-[-6px]'>
                                +3
                            </span>
                        </div>

                        <span className='text-sm  text-[#F5E7C6] bg-[#0a1f44] m-2 p-1  rounded cursor-pointer'>
                        <a href="/"> Join Meeting</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
