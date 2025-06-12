import { FaEdit } from 'react-icons/fa';
import { FaDeleteLeft } from 'react-icons/fa6';

export default function Information() {
    return (
        <div className='p-2 grid-cols-1'>
            <div className='md:col-span-3 border bg-white rounded border-gray-200 shadow'>
                <div className='w-full py-4 px-4 bg-black rounded-t flex justify-between text-white'>
                    <div className='flex gap-2 items-center text-white'>
                        <span className='bg-white p-1 rounded-full'>
                            <img
                                width={50}
                                className='rounded-full'
                                src='https://smarthr.dreamstechnologies.com/laravel/template/public/build/img/users/user-01.jpg'
                                alt='User Avatar'
                            />
                        </span>
                        <span>
                            <strong>Anuj Saini</strong>
                            <br />
                            <span className='text-[12px]'> ReactJS <br /> Developer</span>
                        </span>
                    </div>
                    <div className='flex gap-2'>
                        <div className='flex items-end'>UI/UX <br /> Design</div>
                        <div><FaEdit /></div>
                    </div>
                </div>

                <div className='bg-white rounded-b flex flex-col gap-5 py-4 px-4'>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>Phone Number</span>
                        <span>+91 987654321</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>Email Address</span>
                        <span>anujsaini@example.com</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>Report Office</span>
                        <span>Doglas Martini</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-gray-500'>Joined on</span>
                        <span>15 Jan 2024</span>
                    </div>

                    <div className='bg-gray-100 p-2 rounded mt-2'>
                        <div className='flex justify-between items-center'>
                            <h4 className='font-semibold'>Additional Details (1)</h4>
                            <FaDeleteLeft className='cursor-pointer' />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-500'>Department</span>
                            <span>TechBro24</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-500'>Location</span>
                            <span>Jaipur</span>
                        </div>
                    </div>

                    <div className='bg-gray-100 p-2 rounded mt-2'>
                        <div className='flex justify-between items-center'>
                            <h4 className='font-semibold'>Additional Details (2)</h4>
                            <FaDeleteLeft className='cursor-pointer' />
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-500'>Project</span>
                            <span> Payroll</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-gray-500'>Manager</span>
                            <span>Anuj Saini</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}
