import React from 'react'
import Container from '../components/Container'

export default function WhyUs() {
  return (
    <>
      <div className='w-full bg-gray-100 h-[80vh] p-3  ' style={{ backgroundImage: 'url("/images/2148761322.jpg")', backgroundPosition: ' top', backgroundRepeat: 'no-repeat' }}>
        <Container>
          <div className="flex flex-col w-full h-screen items-center justify-center gap-5">
            <h1 className='font-bold md:text-[40px] text-[25px] text-white text-center'>Why Choose MASU <br /> CONSULTANCY?</h1>
            <div className='text-center text-[#152354] font-semibold'>Elevate your payroll experience with automated salary processing, tax compliance, and seamless <br /> integrations – designed for businesses of all sizes.</div>
            <div> <button className='bg-[#152354] font-semibold text-[#fad98e] p-2 rounded'>Start Your Free Trial</button></div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="p-3 my-5">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            <div className="flex flex-col gap-4">
              <h1 className='font-bold md:text-[40px] text-[22px]'>About Masu Payroll</h1>
              <div className='text-gray-400'>Masu Payroll is a revolutionary payroll management platform built to simplify salary processing, tax compliance, and employee benefits. Since our inception, we have empowered thousands of businesses to automate their payroll operations with 100% accuracy. </div>
              <div className='text-gray-400'>Our mission is to create a hassle-free, efficient, and secure payroll experience for companies of all sizes, ensuring every employee gets paid correctly and on time.</div>
            </div>
            <div>
              <img src="/images/2147656717.jpg" className='rounded' alt="" />
            </div>
          </div>
        </div>
        <div className="my-5">
          <div className="flex flex-col items-center gap-5">
            <h1 className='md:text-[28px] font-semibold'>How Masu Payroll Works?</h1>

          </div>
        </div>
        <div className="my-5">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-5">
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <h1 className='md:text-[28px] font-semibold'>Step 1: Add Employees</h1>
              <div className='md:text-[18px] text-gray-500'>Easily onboard employees and set up salary structures in minutes.</div>
            </div>
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <h1 className='md:text-[28px] font-semibold'>Step 2: Process Payroll</h1>
              <div className='md:text-[18px] text-gray-500'>Automated payroll calculations ensure accurate tax deductions.</div>
            </div>
            <div className="flex flex-col gap-5 p-2 shadow rounded">
              <h1 className='md:text-[28px] font-semibold'>Step 3: Payout & Compliance</h1>
              <div className='md:text-[18px] text-gray-500'>Salary disbursement & tax compliance handled with one click.</div>
            </div>
          </div>
        </div>

      </Container>
      <div className="bg-gray-100 py-8">
        <Container>
          <div className="my-5">
            <div className="flex flex-col p-2 items-center gap-5">
              <h1 className='md:text-[28px] font-semibold'>Why Businesses Love Masu Payroll</h1>
              <div className='md:text-[18px] text-gray-500 md:text-center text-justify'>In today’s fast-paced world, businesses cannot afford payroll delays or compliance errors. Masu Payroll provides an **automated, cloud-based, and highly secure** payroll solution that integrates with accounting, HR, and taxation systems. Our system is designed to help **startups, SMBs, and enterprises** manage their payroll efficiently without worrying about complex calculations, tax deductions, or data security.</div>
              <div className='md:text-[18px] text-gray-500 md:text-center text-justify'>With **real-time analytics, multi-currency support, and seamless banking integrations**, Masu Payroll ensures you save time and reduce errors while providing a great payroll experience to your employees.</div>
            </div>
          </div>
          <div className="my-5">
            <div className="flex flex-col items-center gap-5">
              <h1 className='md:text-[28px] font-semibold'>Who Can Use Masu Payroll?</h1>

            </div>
          </div>
          <div className="my-5">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 p-5 grid-cols-1 gap-5">
              <div className="flex flex-col gap-5 p-2 shadow rounded">
                <h1 className='md:text-[28px] font-semibold'>🏢 Small Businesses</h1>
                <div className='md:text-[18px] text-gray-500'>Ideal for startups & SMBs managing limited staff payroll.</div>
              </div>
              <div className="flex flex-col gap-5 p-2 shadow rounded">
                <h1 className='md:text-[28px] font-semibold'>🏦Enterprises</h1>
                <div className='md:text-[18px] text-gray-500'>Scalable payroll management for large organizations.</div>
              </div>
              <div className="flex flex-col gap-5 p-2 shadow rounded">
                <h1 className='md:text-[28px] font-semibold'>📈 Freelancers</h1>
                <div className='md:text-[18px] text-gray-500'>Easily manage invoices, payments & deductions.</div>
              </div>
              <div className="flex flex-col gap-5 p-2 shadow rounded">
                <h1 className='md:text-[28px] font-semibold'>🌎 Global Companies</h1>
                <div className='md:text-[18px] text-gray-500'>Multi-currency & remote payroll processing.</div>
              </div>
            </div>
          </div>
        </Container>
        <div className="bg-yellow-200 py-8">
          <div className="my-5">
            <div className="flex flex-col items-center gap-5">
              <h1 className='md:text-[28px] font-semibold'>Payroll Statistics & Achievements</h1>

            </div>
          </div>
          <div className="my-5">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-5">
              <div className="flex flex-col gap-5 bg-yellow-500 text-[#152354] items-center p-2 shadow rounded">
                <h1 className='md:text-[28px] font-semibold'>1M+</h1>
                <div className='md:text-[18px] font-semibold'>Payrolls Processed</div>
              </div>
              <div className="flex flex-col gap-5 bg-yellow-500 text-[#152354] items-center p-2 shadow rounded">
                <h1 className='md:text-[28px] font-semibold'>99.9%</h1>
                <div className='md:text-[18px] font-semibold'>Accuracy in Payouts</div>
              </div>
              <div className="flex flex-col gap-5 bg-yellow-500 text-[#152354] items-center p-2 shadow rounded">
                <h1 className='md:text-[28px] font-semibold'>10,000+</h1>
                <div className='md:text-[18px] font-semibold'>Businesses Trust Us</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}
