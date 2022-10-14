import React from 'react';
import { Header, HeaderSupport } from './';

const Layout = ({ children }) => {
  return (
    <>  
        
        <Header />
        <HeaderSupport />
        {children}
    </>
  )
}

export default Layout