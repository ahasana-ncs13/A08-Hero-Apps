import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../component/Footer/Footer';
import { ToastContainer} from 'react-toastify';

const Root = () => {
    return (
        <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

         <ToastContainer />

        </>
    );
};

export default Root;