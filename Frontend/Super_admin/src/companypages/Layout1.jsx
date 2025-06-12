import React from 'react' 
import { Outlet } from 'react-router' 
import Sidebar1 from './Sidebar'
import Container from '../companycom/Container'
import Header from '../companycom/Header'
import Footer from '../companycom/Footer'

export default function Layout1() {
    return (
        <>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-5 ">
                    <div className='lg:flex hidden text-[#F5E7C6] bg-[#0a1f44] '>
                        <Sidebar1 />
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
