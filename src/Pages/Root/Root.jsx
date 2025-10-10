import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../component/Footer/Footer';
import { ToastContainer} from 'react-toastify';

const Root = () => {
    const navigation = useNavigation()
    return (
        <>
        <Navbar></Navbar>
        {
            navigation.state === "loading" &&(
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-50 z-50 ">
             <span className="loading loading-bars loading-xl"></span>
             </div>
            )
        }
        <Outlet></Outlet>
        <Footer></Footer>

         <ToastContainer />

        </>
    );
};

export default Root;