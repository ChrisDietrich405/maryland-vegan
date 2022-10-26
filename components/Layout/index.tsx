import React from 'react'
// import Header from '../Header'
import Navbar from "../Navbar"
interface LayoutProps {
    children?: JSX.Element
}

const Layout = ({children} : LayoutProps) => {
  return (
    <main>
        <Navbar/>
        {children}
    </main>
  )
}

export default Layout