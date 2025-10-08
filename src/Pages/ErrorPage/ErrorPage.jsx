import React from 'react';
import errorImg from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='text-center mt-50'>
            <img src={errorImg} alt="" className='mx-auto' />
            <h2 className='text-5xl font-bold'>Oops, page not found!</h2>
            <p className='my-5'>The page you are looking for is not available.</p>
            <Link to='/'>
            <button className="btn  text-white bg-linear-to-l from-[#632EE3] to-[#9F62F2] rounded-lg mb-10 w-[20%] ">Go Back!</button>
            </Link>

        </div>
    );
};

export default ErrorPage;