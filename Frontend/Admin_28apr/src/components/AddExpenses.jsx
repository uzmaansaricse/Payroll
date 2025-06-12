import React, { useState } from 'react'
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CiCalendarDate } from "react-icons/ci";


export default function AddExpenses({ setAct }) {
    const [showCalendar, setShowCalendar] = useState(false);
    const [date, setDate] = useState(new Date());
    return (
        <div className='w-screen h-screen bg-[rgba(0,0,0,0.5)] fixed inset-0 z-50 flex justify-center items-center' >
            <div className='w-[500px] bg-white p-5 rounded shadow'>
                <div className='flex justify-between items-center pb-5 border-b border-gray-200'><h1>Add Expenses</h1><span  className='px-3 cursor-pointer py-1 bg-gray-400 rounded-full text-white' onClick={() => setAct(false)}>X</span></div>
                <div className='my-2'>
                    <label htmlFor="expenses">Expenses</label><br />
                    <input type="text" className='rounded outline-none border border-gray-200 p-2 mt-2 w-full' />
                </div>
                <div className='my-2'>
                    <label htmlFor="date">Date</label><br />
                    <div className=" border border-gray-200 mt-2 rounded">
                        <button
                            className="px-4 py-2 rounded-lg"
                            onClick={() => setShowCalendar(!showCalendar)}
                        >
                            {showCalendar ? "Hide Calendar" : `Show Calendar`}
                        </button>
                        {showCalendar && (
                            <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
                                <Calendar onChange={setDate} value={date} />
                                <p className="mt-2 text-center">Selected Date: {date.toDateString()}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className='my-2'>
                    <label htmlFor="amount">Amount</label><br />
                    <input type="text" className='rounded outline-none border border-gray-200 p-2 mt-2 w-full' />
                </div>
                <div className='my-2'>
                    <label htmlFor="amount">Payment Method </label><br />
                   <select className='rounded border outline-none border-gray-200 p-2 mt-2 w-full'>
                    <option>Select</option>
                    <option>Sr Accountant</option>
                    <option>Sr App Developer</option>
                    <option>Sr SEO Analyst</option>
                   </select>
                </div>
                <div className='flex justify-end gap-3 items-center my-3 p-4 border-t border-gray-200'><button className='border shadow border-gray-200 cursor-pointer px-3 py-2 rounded' onClick={() => setAct(false)}>Cancil</button><button className='bg-orange-500 rounded cursor-pointer px-3 py-2 text-white'>Add Expense</button></div>
            </div>
        </div>
    )
}
