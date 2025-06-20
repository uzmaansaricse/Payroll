import React, { useState } from 'react'
import Container from './Container'
import { IoMdMenu } from 'react-icons/io'
import { Link } from 'react-router'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { TiDeleteOutline } from 'react-icons/ti'

export default function Header() {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const toggles = (val) => {
        setOpen1(open == val ? null : val)
    }

    return (
        <div className='bg-[#152354] text-[#fad98e] z-40 sticky top-0 left-0 '>
            <div className="lg:block hidden font-semibold">
                <Container>
                    <div className="flex lg:w-[1200px] mx-auto w-full justify-between items-center">
                        <a href="/">
                            <div><img width={200} src="/images/logo.jpeg" alt="" /></div>
                        </a>
                        <div className='flex items-center gap-5'>
                            <a href="/"><div>Home</div></a>
                            <a href="/whyus"><div>Why Us</div></a>
                            <div className='group '>
                                <div>Solutions</div>
                                <div className="relative group-hover:block hidden">
                                    <div className="absolute top-0 rounded border-t-3 shadow shadow-white border-[#fad98e] left-0 p-3 bg-[#152354] text-[#fad98e] space-y-2">
                                        <a href="/forsmallbusiness"><div className='whitespace-nowrap my-3'>For Small Business</div></a>
                                        <a href="/forenterprices"><div className='whitespace-nowrap my-3'>For Enterprices</div></a>
                                        <a href="/forhrteams"><div className='whitespace-nowrap my-3'>For HR Teams</div></a>
                                    </div>
                                </div>
                            </div>
                            <div className='group '>
                                <div>Feature</div>
                                <div className="relative group-hover:block hidden">
                                    <div className="absolute top-0 rounded border-t-3 shadow shadow-white border-[#fad98e] left-0 p-3 bg-[#152354] text-[#fad98e] space-y-2">
                                        <a href="/payrollprocessing"><div className='whitespace-nowrap my-3'>Payroll Processing</div></a>
                                        <a href="/taxcomplance"><div className='whitespace-nowrap my-3'>Tax Compliance</div></a>
                                    </div>
                                </div>
                            </div>
                            <div className='group '>
                                <div>Login</div>
                                <div className="relative group-hover:block hidden">
                                    <div className="absolute top-0 rounded border-t-3 shadow shadow-white border-[#fad98e] left-0 p-3 bg-[#152354] text-[#fad98e] space-y-2">
                                        <a href="http://localhost:5173/login-as-subsuperadmin"><div className='whitespace-nowrap my-3'>Sub Superadmin</div></a>
                                        <a href="http://localhost:5173/loginsuperadmin"><div className='whitespace-nowrap my-3'>Login as Super Admin</div></a>
                                        <a href="/loginadmin"><div className='whitespace-nowrap my-3'>Login as Admin</div></a>
                                        <a href="/loginemploy"><div className='whitespace-nowrap my-3'>Login as Employee</div></a>
                                    </div>
                                </div>
                            </div>
                            <a href="/demo"><button className='whitespace-nowrap rounded border-t-3 shadow shadow-white border-[#fad98e] p-1 cursor-pointer'>Demo</button></a>
                            <a href="/contactus"><button className='whitespace-nowrap rounded border-t-3 shadow shadow-white border-[#fad98e] p-1 cursor-pointer'>Contact Us</button></a>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="lg:hidden block relative">
                <div className="flex items-center justify-between p-2">
                    <a href="/"><div><img width={100} src="/images/logo.jpeg" alt="Logo" /></div></a>
                    <IoMdMenu className={`${open == true ? "rotate-180" : 'rotate-0'} duration-500`} onClick={() => setOpen(!open)} size={30} />
                </div>

                <div className="relative">
                    <div className={`absolute w-full bg-[#152354] text-[#fad98e] top-0 h-screen transition-all duration-500 ease-in-out ${open ? "left-0" : "left-[-100%]"}`}>
                        <div className="space-y-4 p-4">
                            <div className="flex justify-between items-center">
                                <Link onClick={() => setOpen(false)} to="/"><div className='my-3'>Home</div></Link>
                                <TiDeleteOutline className='animate-spin' size={25} onClick={() => { setOpen(false), toggles('') }} />
                            </div>
                            <div>  <Link onClick={() => setOpen(false)} to="/whyus"><div className='my-3'>Why Us</div></Link></div>
                            <div className='w-full'>
                                <div onClick={() => toggles('one')} className="flex items-center gap-5">
                                    <FaLongArrowAltLeft />
                                    <div>Solutions</div>
                                </div>
                                <div className='relative z-40'>
                                    <div className={`absolute top-[-30px] duration-500 ease-in-out transition-all ${open1 == 'one' ? "right-0 opacity-100" : 'right-[100%] opacity-0'}`}>
                                        <Link onClick={() => { setOpen(false), toggles('') }} to="/forsmallbusiness"><div className='whitespace-nowrap my-3'>For Small Business</div></Link>
                                        <Link onClick={() => { setOpen(false), toggles('') }} to="/forenterprices"><div className='whitespace-nowrap my-3'>For Enterprices</div></Link>
                                        <Link onClick={() => { setOpen(false), toggles('') }} to="/forhrteams"><div className='whitespace-nowrap my-3'>For HR Teams</div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div onClick={() => toggles('two')} className="flex items-center gap-5">
                                    <FaLongArrowAltLeft />
                                    <div>Feature</div>
                                </div>
                                <div className='relative z-40'>
                                    <div className={`absolute top-[-30px] duration-500 ease-in-out transition-all ${open1 == 'two' ? "right-0 opacity-100" : 'right-[100%] opacity-0'}`}>
                                        <Link onClick={() => { setOpen(false), toggles('') }} to="/payrollprocessing"><div className='whitespace-nowrap my-3'>Payroll Processing</div></Link>
                                        <Link onClick={() => { setOpen(false), toggles('') }} to="/taxcomplance"><div className='whitespace-nowrap my-3'>Tax Compliance</div></Link>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <div onClick={() => toggles('three')} className="flex items-center gap-5">
                                    <FaLongArrowAltLeft />
                                    <div>Login</div>
                                </div>
                                <div className='relative z-40'>
                                    <div className={`absolute top-[-30px] duration-500 ease-in-out transition-all ${open1 == 'three' ? "right-0 opacity-100" : 'right-[100%] opacity-0'}`}>
                                        <Link onClick={() => { setOpen(false), toggles('') }} to="/loginsuperadmin"><div className='whitespace-nowrap my-3'>Login as Super Admin</div></Link>
                                        <Link onClick={() => { setOpen(false), toggles('') }} to="/loginadmin"><div className='whitespace-nowrap my-3'>Login as Admin</div></Link>
                                        <Link onClick={() => { setOpen(false), toggles('') }} to="/loginemploy"><div className='whitespace-nowrap my-3'>Login as Employee</div></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="grid mt-[100px] w-full  grid-cols-2 gap-2">
                                <a className='w-full' href="/demo"><button className='whitespace-nowrap rounded border-t-3 shadow w-full shadow-white bg-[#152354] text-[#fad98e] px-1 py-2 cursor-pointer'>Demo</button></a>
                                <a className='w-full' href="/contactus"><button className='whitespace-nowrap rounded border-t-3 shadow w-full shadow-white bg-[#152354] text-[#fad98e] px-1 py-2 cursor-pointer'>Contact Us</button></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
