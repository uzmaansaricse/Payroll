import React from 'react'
import Container from '../components/Container'
import { FaCloud, FaRobot, FaXbox } from 'react-icons/fa'

export default function ForEnterprices() {
  return (
    <>
      <div className='w-full bg-gray-100 ' style={{ backgroundImage: 'url("/images/payroll-background.jpg")', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="w-full h-[80vh] p-3   ">
          <Container>
            <div className="flex flex-col w-full h-[80vh] items-center justify-center gap-5">
              <h1 className='font-bold md:text-[40px] text-[25px] text-white text-center'>Enterprise Payroll, Simplified</h1>
              <div className='text-center text-white font-semibold max-w-xl'>Managing payroll for thousands of employees shouldn't be a challenge. Masu Payroll automates complex payroll workflows, reduces compliance risks, and saves time for enterprises.</div>
              <div> <button className='bg-yellow-400 font-semibold cursor-pointer p-2 rounded'>Get an Enterprise Demo</button></div>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="my-5">
          <div className="flex flex-col items-center gap-3">
            <h1 className='md:text-[28px] font-semibold'>Why Enterprise Payroll is Complex?</h1>
            <span className='text-center w-20 border-b-4 rounded border-yellow-500'></span>
            <div className='md:text-[18px] text-gray-500 text-center'>Enterprises face challenges like multi-country compliance, high payroll costs, and scalability issues.</div>
          </div>
        </div>
        <div className="my-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-5">
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <h1 className='md:text-[28px] font-semibold'>📑 Multi-Country Compliance</h1>
              <div className='md:text-[18px] text-gray-500'>Each country has unique tax laws that enterprises must comply with.</div>
            </div>
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <h1 className='md:text-[28px] font-semibold'>💰 High Payroll Costs</h1>
              <div className='md:text-[18px] text-gray-500'>Manual payroll processing leads to massive operational costs.</div>
            </div>
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <h1 className='md:text-[28px] font-semibold'>🚀 Scalability Challenges</h1>
              <div className='md:text-[18px] text-gray-500'>Traditional payroll systems fail when employee count grows exponentially.</div>
            </div>
          </div>
        </div>

      </Container>
      <div className="bg-gray-100 my-5 p-8 h-64 w-full flex flex-col justify-center items-center gap-3">
        <h1 className='md:text-[28px] font-semibold'>Tailored Payroll Solutions for Enterprises</h1>
        <span className='text-center w-20 border-b-4 rounded border-yellow-500'></span>
      </div>
      <Container>
        <div className="my-5">
          <div className="flex flex-col items-center gap-3">
            <h1 className='md:text-[28px] font-semibold'>The Future of Payroll Automation in Enterprises</h1>
            <span className='text-center w-20 border-b-4 rounded border-yellow-500'></span>
            <div className='md:text-[18px] text-gray-500 text-center'>AI-driven payroll automation is the future. Enterprises can leverage AI to optimize tax calculations, predictive payroll forecasting, and real-time financial analytics.</div>
          </div>
        </div>
        <div className="my-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-5">
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <div className="flex items-center gap-3">
                <FaRobot size={25} />
                <h1 className='md:text-[18px] font-semibold'> AI-Driven Tax Optimization</h1>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <div className="flex items-center gap-3">
                <FaXbox size={25} />
                <h1 className='md:text-[18px] font-semibold'>  Predictive Payroll Analytics</h1>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <div className="flex items-center gap-3">
                <FaCloud size={25} />
                <h1 className='md:text-[18px] font-semibold'> Cloud-Based Security & Compliance</h1>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
