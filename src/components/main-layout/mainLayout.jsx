import React from 'react'
import Navbar from '../navbar/navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Navbar/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default MainLayout 