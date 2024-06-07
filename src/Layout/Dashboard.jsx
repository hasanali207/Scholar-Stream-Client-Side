import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar'
import Footer from '../Pages/Shared/Footer'

const Dashboard = () => {
  const isAdmin = true

  return (
    <>
    <Navbar></Navbar>
    <div className='flex max-w-7xl mx-auto'>
        <div className='w-52 min-h-screen bg-slate-200'>
            <ul className="menu">
                {
                  isAdmin? <><li><NavLink to='/dashboard/profile'>Admin Profile</NavLink></li>
                  <li><NavLink to='/dashboard/addscholarship'>Add Scholarship</NavLink></li>
                  <li><NavLink to='/dashboard/allapplyscholarship'>Manage Apply ScholarShip</NavLink></li>
                  <li><NavLink to='/dashboard/allusers'>Manage Users</NavLink></li>
                  <li><NavLink to='/dashboard/allreview'>Manage Reviews</NavLink></li>
                  
                  </>
                  : 
                  <><li><NavLink to='/dashboard/profile'>My Profile</NavLink></li>
                  <li><NavLink to='/dashboard/applicaiton'>My Application</NavLink></li>
                  <li><NavLink to='/dashboard/review'>My Reviews</NavLink></li></>
                }
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