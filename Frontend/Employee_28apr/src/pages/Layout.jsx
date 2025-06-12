import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'
import Container from '../components/Container'
import Footer from '../components/Footer'

export default function Layout() {
    return (
        <>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-5 ">
                    <div className='lg:flex hidden text-[#F5E7C6] bg-[#152354]'>
                        <Sidebar />
                    </div>
                    <div className='lg:col-span-4'>
                        <Header />
                        <Outlet />
                        <Footer /> 
                    </div>
                </div>
            </Container>
        </>
    )
}
