import React from 'react'
//  only the changes made in outlet not header and footer or above or below
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'





// header and footer are fixed 
// only changes were made in outlet

function Layout() {
    return (

        <>
        <Header/>
        <Outlet/>        
        <Footer/>
        
        </>
        
    )
}

export default Layout
