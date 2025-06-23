import React, { useState } from 'react';
import Container from './Container';
import { IoMdMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(null);

  const toggles = (val) => {
    setOpen1(open1 === val ? null : val);
  };

  return (
    <div className='bg-[#152354] text-[#fad98e] z-40 sticky top-0 left-0'>
      {/* Desktop Header */}
      <div className="lg:block hidden font-semibold">
        <Container>
          <div className="flex lg:w-[1200px] mx-auto w-full justify-between items-center">
            <a href="/">
              <img width={200} src="/images/logo.jpeg" alt="Logo" />
            </a>
            <div className='flex items-center gap-5'>
              <a href="/">Home</a>
              <a href="/whyus">Why Us</a>
              <div className='group relative'>
                <div>Solutions</div>
                <div className="absolute hidden group-hover:block">
                  <div className="rounded border-t-3 shadow shadow-white border-[#fad98e] left-0 p-3 bg-[#152354] text-[#fad98e] space-y-2">
                    <a href="/forsmallbusiness">For Small Business</a>
                    <a href="/forenterprices">For Enterprices</a>
                    <a href="/forhrteams">For HR Teams</a>
                  </div>
                </div>
              </div>
              <div className='group relative'>
                <div>Feature</div>
                <div className="absolute hidden group-hover:block">
                  <div className="rounded border-t-3 shadow shadow-white border-[#fad98e] left-0 p-3 bg-[#152354] text-[#fad98e] space-y-2">
                    <a href="/payrollprocessing">Payroll Processing</a>
                    <a href="/taxcomplance">Tax Compliance</a>
                  </div>
                </div>
              </div>
              <div className='group relative'>
                <div>Login</div>
                <div className="absolute hidden group-hover:block">
                  <div className="rounded border-t-3 shadow shadow-white border-[#fad98e] left-0 p-3 bg-[#152354] text-[#fad98e] space-y-2">
                    <a href="https://superadminpanelmasu.netlify.app">Login as Super Admin</a>
                    <a href="https://superadminpanelmasu.netlify.app/login-as-subsuperadmin">Sub Superadmin</a>
                    <a href="https://adminpanelmasu.netlify.app">Login as Admin</a>
                    <a href="https://employeepanelmasu.netlify.app">Login as Employee</a>
                  </div>
                </div>
              </div>
              <a href="/demo">
                <button className='rounded border-t-3 shadow shadow-white border-[#fad98e] p-1 cursor-pointer'>Demo</button>
              </a>
              <a href="/contactus">
                <button className='rounded border-t-3 shadow shadow-white border-[#fad98e] p-1 cursor-pointer'>Contact Us</button>
              </a>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden block relative">
        <div className="flex items-center justify-between p-2">
          <a href="/"><img width={100} src="/images/logo.jpeg" alt="Logo" /></a>
          <IoMdMenu
            className={`${open ? "rotate-180" : "rotate-0"} transition duration-500`}
            onClick={() => setOpen(!open)}
            size={30}
          />
        </div>

        <div className={`absolute w-full bg-[#152354] text-[#fad98e] top-0 h-screen transition-all duration-500 ease-in-out ${open ? "left-0" : "left-[-100%]"}`}>
          <div className="space-y-4 p-4">
            <div className="flex justify-between items-center">
              <Link to="/" onClick={() => setOpen(false)}>Home</Link>
              <TiDeleteOutline size={25} className='cursor-pointer' onClick={() => { setOpen(false); toggles(null); }} />
            </div>

            <Link to="/whyus" onClick={() => setOpen(false)}>Why Us</Link>

            {/* Solutions */}
            <div>
              <div onClick={() => toggles('one')} className="flex items-center gap-3 cursor-pointer">
                <FaLongArrowAltLeft />
                <div>Solutions</div>
              </div>
              <div className={`absolute top-0 bg-[#152354] transition-all duration-500 ease-in-out ${open1 === 'one' ? "right-0 opacity-100" : "right-full opacity-0"}`}>
                <Link to="/forsmallbusiness" onClick={() => { setOpen(false); toggles(null); }}>For Small Business</Link>
                <Link to="/forenterprices" onClick={() => { setOpen(false); toggles(null); }}>For Enterprices</Link>
                <Link to="/forhrteams" onClick={() => { setOpen(false); toggles(null); }}>For HR Teams</Link>
              </div>
            </div>

            {/* Feature */}
            <div>
              <div onClick={() => toggles('two')} className="flex items-center gap-3 cursor-pointer">
                <FaLongArrowAltLeft />
                <div>Feature</div>
              </div>
              <div className={`absolute top-0 bg-[#152354] transition-all duration-500 ease-in-out ${open1 === 'two' ? "right-0 opacity-100" : "right-full opacity-0"}`}>
                <Link to="/payrollprocessing" onClick={() => { setOpen(false); toggles(null); }}>Payroll Processing</Link>
                <Link to="/taxcomplance" onClick={() => { setOpen(false); toggles(null); }}>Tax Compliance</Link>
              </div>
            </div>

            {/* Login */}
            <div>
              <div onClick={() => toggles('three')} className="flex items-center gap-3 cursor-pointer">
                <FaLongArrowAltLeft />
                <div>Login</div>
              </div>
              <div className={`absolute top-0 bg-[#152354] transition-all duration-500 ease-in-out ${open1 === 'three' ? "right-0 opacity-100" : "right-full opacity-0"}`}>
                <a href="https://superadminpanelmasu.netlify.app" onClick={() => { setOpen(false); toggles(null); }}>Super Admin</a>
                <a href="https://superadminpanelmasu.netlify.app/login-as-subsuperadmin" onClick={() => { setOpen(false); toggles(null); }}>Sub Superadmin</a>
                <a href="https://adminpanelmasu.netlify.app" onClick={() => { setOpen(false); toggles(null); }}>Admin</a>
                <a href="https://employeepanelmasu.netlify.app" onClick={() => { setOpen(false); toggles(null); }}>Employee</a>
              </div>
            </div>

            {/* Buttons */}
            <div className="grid mt-36 w-full grid-cols-2 gap-2">
              <a href="/demo">
                <button className='rounded border-t-3 shadow w-full shadow-white bg-[#152354] text-[#fad98e] px-1 py-2'>Demo</button>
              </a>
              <a href="/contactus">
                <button className='rounded border-t-3 shadow w-full shadow-white bg-[#152354] text-[#fad98e] px-1 py-2'>Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
