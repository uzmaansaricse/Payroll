import React, { useState } from 'react'
import Container from '../components/Container'
import { MdWatchLater } from 'react-icons/md'
import { IoIosWarning } from 'react-icons/io'
import { FaAngleDown } from 'react-icons/fa'

export default function Forsmallbusiness() {
  const [open, setOpen] = useState('');
  const toggles = (val) => {
    setOpen(open == val ? null : val)
  }
  return (
    <>
      <div className='w-full bg-gray-100 ' style={{ backgroundImage: 'url("/images/2147707816.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="w-full h-screen p-3  bg-[rgba(0,0,0,0.5)]">
          <Container>
            <div className="flex flex-col w-full h-screen items-center justify-center gap-5">
              <h1 className='font-bold md:text-[40px] text-[25px] text-white text-center'>Payroll Solutions for Small Businesses</h1>
              <div className='text-center text-yellow-400 font-semibold'>Smart, affordable & automated payroll for startups & SMEs.</div>
              <div> <button className='bg-yellow-400 font-semibold cursor-pointer p-2 rounded'>Get Started Now</button></div>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="my-5">
          <div className="flex flex-col items-center gap-5">
            <h1 className='md:text-[28px] font-semibold'>Key Payroll Challenges for Small Businesses</h1>

          </div>
        </div>
        <div className="my-5">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 p-5 grid-cols-1 gap-5">
            <div className="flex gap-2 items-center shadow rounded p-2">
              <MdWatchLater size={40} />
              <div className="flex flex-col ">
                <h1 className='md:text-[28px] font-semibold'>Time-Consuming Processes</h1>
                <div className='md:text-[18px] text-gray-500'>Manual payroll takes too much time every month.</div>
              </div>
            </div>
            <div className="flex gap-2 items-center shadow rounded p-2">
              <IoIosWarning size={40} />
              <div className="flex flex-col ">
                <h1 className='md:text-[28px] font-semibold'>Compliance Risks</h1>
                <div className='md:text-[18px] text-gray-500'>Small errors in tax filing can lead to penalties.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 my-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="flex flex-col gap-4">
              <h1 className='font-bold md:text-[40px] text-[22px]'>Empowering Small Businesses with Smart Payroll Solutions</h1>
              <div className='text-gray-400'>Managing payroll manually can be overwhelming, especially for small businesses with limited resources. Masu Payroll takes the complexity out of salary processing, tax deductions, and compliance, allowing business owners to focus on growth.</div>
              <div className='text-gray-400'>Our automated system ensures that your employees are paid accurately and on time while staying compliant with tax regulations. Whether you're a startup or a growing business, our user-friendly payroll solution adapts to your needs. Experience **error-free salary processing, automated tax filings, and a seamless employee experience** with Masu Payroll.</div>
            </div>
            <div>
              <img src="/images/16728.jpg" className='rounded' alt="" />
            </div>
          </div>
        </div>

        <div className="my-5">
          <div className="flex flex-col items-center gap-5">
            <h1 className='md:text-[28px] font-semibold'>Frequently Asked Questions</h1>

          </div>
        </div>
        <div className="">
          <div className="p-5 ">
            <div className='max-w-xl mx-auto shadow cursor-pointer p-3 space-y-3 rounded'>
              <div onClick={() => toggles('one')} className="flex items-center justify-between">
                <div className='font-semibold'>How does Masu Payroll save time? </div>
                <FaAngleDown className={`duration-500 ${open == 'one' ? 'rotate-180' : 'rotate-0'}`} size={25} />
              </div>
              <div className={` duration-500 transition-all overflow-hidden ${open == 'one' ? 'h-15 opacity-100' : 'h-0 opacity-0'}`}>
                Masu Payroll automates salary calculations, tax deductions, and payments, reducing hours of manual work.
              </div>

            </div>
          </div>
        </div>
        <div className="">
          <div className="p-5 ">
            <div className='max-w-xl mx-auto shadow cursor-pointer p-3 space-y-3 rounded'>

              <div onClick={() => toggles('two')} className="flex items-center justify-between">
                <div className='font-semibold'>Is my data secure?  </div>
                <FaAngleDown className={`duration-500 ${open == 'two' ? 'rotate-180' : 'rotate-0'}`} size={25} />
              </div>
              <div className={` duration-500 transition-all overflow-hidden ${open == 'two' ? 'h-15 opacity-100' : 'h-0 opacity-0'}`}>
                Yes, we use bank-grade encryption and compliance measures to ensure 100% security.
              </div>
            </div>
          </div>
        </div>
        <div className="w-full my-5 md:h-64 h-55 items-center grid   grid-cols-1 p-2">
          <div className="flex flex-col items-center">
            <h1 className='text-[28px] font-bold text-blue-900'>Take control of all your HR operations and experience the difference!</h1>
            <span className='whitespace-nowrap rounded border-t-3 my-3 shadow shadow-white bg-[#152354] text-[#fad98e] px-1 py-2 cursor-pointer'>Get a demo</span>
          </div>
        </div>
        <div className="p-3 my-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div>
              <img src="/images/2150377157.jpg" className='rounded' alt="" />
            </div>
            <div className="flex flex-col gap-4">
              <h1 className='font-bold md:text-[40px] text-[22px]'>Why Small Businesses Need Smart Payroll?</h1>
              <div className='text-gray-400'>Payroll is one of the most critical yet time-consuming tasks for small businesses. Manually handling salaries, tax deductions, and compliance takes hours every month.</div>
              <div className='text-gray-400'>With an automated payroll system, you can process salaries in minutes, ensure accurate tax calculations, and eliminate compliance risks. No more delays, no more errors – just seamless payroll management.</div>
              <div className='text-gray-400'>Whether you're a startup or a growing company, investing in a smart payroll solution saves time, reduces costs, and keeps your business legally compliant.</div>
            </div>

          </div>
        </div>

      </Container>
    </>
  )
}
