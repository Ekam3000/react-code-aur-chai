import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet /> 
    {/* Dynamic page changing keeping Header and Footer same */}
    <Footer />
    </>
  )
}

export default Layout