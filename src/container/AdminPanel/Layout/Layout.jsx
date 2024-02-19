import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div className='flex' >
        <SideBar />
        <Outlet />
    </div>
  )
}
