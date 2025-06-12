import React from 'react' 
import { Outlet } from 'react-router' 
import Container from '../factorycom/Container'
import Sidebar from './Sidebar'
import Header from '../factorycom/Header'
import Footer from '../factorycom/Footer'

export default function Layout2() {
    return (
        <>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-5 ">
                    <div className='lg:flex hidden text-[#F5E7C6] bg-[#0a1f44] '>
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
