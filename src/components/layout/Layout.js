import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../NavBar';

const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            {location.pathname !== '/login' && <NavBar />}
            {children}
        </>
    )
}

export default Layout;