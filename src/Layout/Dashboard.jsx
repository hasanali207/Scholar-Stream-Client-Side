import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'
import Footer from '../Pages/Shared/Footer'

const Dashboard = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className='flex max-w-7xl mx-auto'>
        <div className='w-52 min-h-screen bg-slate-200'>
            <ul className="menu">
                <li><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                <li><NavLink to='/dashboard/applicaiton'>My Application</NavLink></li>
                <li><NavLink to='/dashboard/review'>My Reviews</NavLink></li>
            </ul>
        </div>
        <div className='flex-1'>
            <Outlet></Outlet>
        </div>

    </div>  
    <Footer></Footer>
    </>
  )
}

export default Dashboard