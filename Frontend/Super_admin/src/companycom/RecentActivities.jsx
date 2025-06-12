import React from 'react'
import { MdOutlineCake } from 'react-icons/md'

export default function RecentActivities() {
    return (
        <>
            <div className='flex flex-col lg:flex-row  w-full mx-auto mt-4 gap-2'>
                {/* Recent Activities Section */}
                <div className='w-full bg-white p-6 rounded-lg shadow-lg'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='text-xl font-semibold'>Recent Activities</div>
                        <div className='bg-gray-100 px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-gray-200 transition-all'>
                            View All
                        </div>
                    </div>

                    {/* Activity 1 */}
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex gap-4 items-center'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-38.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Matt Morgan</div>
                                <div className='text-sm'>
                                    Added New Project{' '}
                                    <span className='text-red-400'>HRMS Dashboard</span>
                                </div>
                            </div>
                        </div>
                        <div className='text-sm text-gray-500'>07:30 PM</div>
                    </div>

                    {/* Activity 2 */}
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex gap-4 items-center'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-01.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Jay Ze</div>
                                <div className='text-sm'>Commented on Uploaded Document</div>
                            </div>
                        </div>
                        <div className='text-sm text-gray-500'>06:30 PM</div>
                    </div>

                    {/* Activity 3 */}
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex gap-4 items-center'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-19.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Mary Donald</div>
                                <div className='text-sm'>Approved Task Projects</div>
                            </div>
                        </div>
                        <div className='text-sm text-gray-500'>05:10 PM</div>
                    </div>

                    {/* Activity 4 */}
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex gap-4 items-center'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-11.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>George David</div>
                                <div className='text-sm'>
                                    Requesting Access to Module Tickets
                                </div>
                            </div>
                        </div>
                        <div className='text-sm text-gray-500'>05:40 PM</div>
                    </div>

                    {/* Activity 5 */}
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex gap-4 items-center'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-20.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Aaron Zeen</div>
                                <div className='text-sm'>Downloaded App Reports</div>
                            </div>
                        </div>
                        <div className='text-sm text-gray-500'>05:00 PM</div>
                    </div>

                    {/* Activity 6 */}
                    <div className='flex justify-between items-center mb-4'>
                        <div className='flex gap-4 items-center'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-08.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Hendry Daniel</div>
                                <div className='text-sm'>Completed New Project HMS</div>
                            </div>
                        </div>
                        <div className='text-sm text-gray-500'>05:30 PM</div>
                    </div>
                </div>

                {/* Birthdays Section */}
                <div className='w-full  bg-white p-6 rounded-lg shadow-lg'>
                    <div className='flex justify-between items-center mb-4'>
                        <div className='text-xl font-semibold'>Birthdays</div>
                        <div className='bg-gray-100 px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-gray-200 transition-all'>
                            View All
                        </div>
                    </div>

                    {/* Birthday Today */}
                    <div className='font-semibold p-2 text-lg'>Today</div>
                    <div className='flex justify-between items-center bg-gray-100 rounded-lg p-2 '>
                        <div className='flex items-center gap-4'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-38.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Andrew Jermia</div>
                                <div className='text-sm'>IOS Developer</div>
                            </div>
                        </div>
                        <div className='flex items-center bg-blue-950 text-white rounded p-1 gap-2'>
                            <div className='text-xs'>
                                <MdOutlineCake />
                            </div>
                            <div className='text-xs'>Send</div>
                        </div>
                    </div>

                    {/* Birthday Tomorrow */}
                    <div className='font-semibold text-lg'>Tomorrow</div>
                    <div className='flex justify-between items-center bg-gray-100 rounded-lg p-2 mb-2'>
                        <div className='flex items-center gap-4'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-10.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Mary Zeen</div>
                                <div className='text-sm'>UI/UX Designer</div>
                            </div>
                        </div>
                        <div className='flex items-center rounded p-1 bg-blue-950 text-white gap-2'>
                            <div className='text-xs'>
                                <MdOutlineCake />
                            </div>
                            <div className='text-xs'>Send</div>
                        </div>
                    </div>
                    <div className='flex justify-between items-center bg-gray-100 rounded-lg p-2 mb-4'>
                        <div className='flex items-center gap-4'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-09.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Antony Lewis</div>
                                <div className='text-sm'>Android Developer</div>
                            </div>
                        </div>
                        <div className='flex items-center rounded p-1 bg-blue-950 text-white gap-2'>
                            <div className='text-xs'>
                                <MdOutlineCake />
                            </div>
                            <div className='text-xs'>Send</div>
                        </div>
                    </div>

                    {/* Birthday 25 Jan 2025 */}
                    <div className='font-semibold text-lg'>25 Jan 2025</div>
                    <div className='flex justify-between items-center bg-gray-100 rounded-lg p-2 mb-4'>
                        <div className='flex items-center gap-4'>
                            <img
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-12.jpg'
                                className='w-10 h-10 rounded-full object-cover'
                            />
                            <div>
                                <div className='font-semibold'>Doglas Martini</div>
                                <div className='text-sm'>.Net Developer</div>
                            </div>
                        </div>
                        <div className='flex items-center text-white rounded p-1 bg-blue-950 gap-2'>
                            <div className='text-xs'>
                                <MdOutlineCake />
                            </div>
                            <div className='text-xs'>Send</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
