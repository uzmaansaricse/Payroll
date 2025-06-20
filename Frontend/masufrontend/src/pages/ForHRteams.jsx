import React from 'react'
import Container from '../components/Container'
import { MdWatchLater } from 'react-icons/md'
import { FaBook, FaBox, FaUsers, FaUserTie } from 'react-icons/fa'
import { RiLayoutHorizontalLine } from 'react-icons/ri'
import { FaMobileRetro } from 'react-icons/fa6'
import Slider3 from './Slider3'

export default function ForHRteams() {
  return (
    <>
      <div className='w-full bg-gray-100 ' style={{ backgroundImage: 'url("/images/HR_pAYROLL.avif")', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="w-full h-[60vh] p-3  bg-[rgba(0,0,0,0.5)]">
          <Container>
            <div className="flex flex-col w-full h-[60vh] items-center justify-center gap-5">
              <h1 className='font-bold md:text-[40px] text-[25px] text-white text-center'>HR Payroll Management, Simplified</h1>
              <span className='text-center w-20 border-b-4 border-yellow-500'></span>
              <div className='text-center text-yellow-400 font-semibold'>A powerful tool for HR teams to manage salaries, benefits, & compliance effortlessly.</div>
              <div> <button className='bg-yellow-400 font-semibold cursor-pointer p-2 rounded'>Try Masu Payroll</button></div>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <div className="my-5">
          <div className="flex flex-col items-center gap-3">
            <h1 className='md:text-[28px] font-semibold'>HR Challenges & How We Solve Them</h1>
            <span className='text-center w-20 border-b-4 rounded border-yellow-500'></span>
          </div>
        </div>
        <div className="my-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-5">
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <div className="flex items-center gap-2">
                <MdWatchLater size={25} />
                <h1 className='md:text-[22px] font-semibold'> Time-Consuming Payroll</h1>
              </div>
              <div className='md:text-[18px] text-gray-500'>Automated payroll processing saves 80% of manual work.</div>
            </div>
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <div className="flex items-center gap-2">
                <FaBook size={25} />
                <h1 className='md:text-[22px] font-semibold'> Compliance Risks</h1>
              </div>
              <div className='md:text-[18px] text-gray-500'>Auto-tax filing & compliance tracking ensures 100% legal adherence.</div>
            </div>
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <div className="flex items-center gap-2">
                <FaUsers size={25} />
                <h1 className='md:text-[22px] font-semibold'> Employee Data Management</h1>
              </div>
              <div className='md:text-[18px] text-gray-500'>HR teams can manage employee records in a single dashboard.</div>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="flex flex-col items-center gap-3">
            <h1 className='md:text-[28px] font-semibold'>HR’s Role in Modern Payroll Management</h1>
            <span className='text-center w-20 border-b-4 rounded border-yellow-500'></span>
          </div>
        </div>
        <div className="p-3 my-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="flex flex-col gap-4">
              {/* <h1 className='font-bold md:text-[40px] text-[22px]'>Empowering Small Businesses with Smart Payroll Solutions</h1> */}
              <div className='text-gray-400'>Human Resource (HR) teams are the backbone of an organization, responsible for managing employees' salaries, benefits, tax compliance, and legal regulations. With evolving workplace dynamics and remote workforces, payroll management has become more complex than ever.</div>
              <div className='text-gray-400'>Traditional payroll systems often involve **manual calculations, delayed payments, and compliance risks**, making it challenging for HR teams to ensure accuracy. **Automation-driven payroll solutions** not only simplify salary disbursements but also empower HR professionals with real-time insights, customizable workflows, and seamless compliance tracking.</div>
              <div className='text-gray-400'>By integrating modern payroll software like **Masu Payroll**, HR teams can eliminate administrative burdens and focus more on employee engagement, retention, and organizational growth.</div>
            </div>
            <div>
              <img src="/images/hr-corporate.jpg" className='rounded' alt="" />
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="flex flex-col items-center gap-5">
            <h1 className='md:text-[28px] font-semibold'>Seamless Integrations with HR & Finance Tools</h1>
            <span className='border-b-4 border-yellow-500 w-20 text-center'></span>
          </div>
        </div>
        <div className="my-5">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 p-5 grid-cols-1 gap-5">
            <div className="flex flex-col gap-2 p-2 shadow items-center rounded">
              <RiLayoutHorizontalLine size={30} />
              <h1 className='md:text-[28px] font-semibold'>Tally</h1>
            </div>
            <div className="flex flex-col gap-2 p-2 shadow items-center rounded">
              <FaMobileRetro size={30} />
              <h1 className='md:text-[28px] font-semibold'>QuickBooks</h1>
            </div>
            <div className="flex flex-col gap-2 p-2 shadow items-center rounded">
              <FaBox size={30} />
              <h1 className='md:text-[28px] font-semibold'>Razorpay</h1>
            </div>
            <div className="flex flex-col gap-2 p-2 shadow items-center rounded">
              <FaUserTie size={30} />
              <h1 className='md:text-[28px] font-semibold'>Zoho HR</h1>
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="flex flex-col items-center gap-5">
            <h1 className='md:text-[28px] font-semibold'>What HR Teams Say About Us</h1>
            <span className='border-b-4 border-yellow-500 w-20 text-center'></span>
          </div>
        </div>
      </Container>
      <div className="w-full flex justify-center items-center bg-gray-100">
        <Slider3 />
      </div>
    </>
  )
}
