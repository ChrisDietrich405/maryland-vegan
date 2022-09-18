import React from 'react'
import Header from '../Header'

interface LayoutProps {
    children?: JSX.Element
}

const Layout = ({children} : LayoutProps) => {
  return (
    <main>
        <Header/>
        {children}
    </main>
  )
}

export default Layout