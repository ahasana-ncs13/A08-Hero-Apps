import React from 'react';
import logoImg  from '../../assets/logo.png'
import { IoLogoGithub } from "react-icons/io";
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const links = <>
    <NavLink to='/' style={({ isActive, isPending }) => ({
  color:
    isActive ? "text-[#632EE3]" :
    isPending ? "blue" : "black"
})}  className='mr-5'>Home </NavLink> 
   <NavLink to='/allApps' style={({ isActive, isPending }) => ({
  color:
    isActive ? "text-[#632EE3]" :
    isPending ? "blue" : "black"
})}  className='mr-5'>Apps</NavLink>


    <li className='mr-5'>Installation</li>
    </>
   
    return (
        <div className='w-11/12 mx-auto'>
            <div className="navbar bg-base-100">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <div className=" flex items-center">
        <img src={logoImg} alt="" className='w-15' />
        <Link to='/' className="btn btn-ghost text-xl">HERO.IO</Link> 
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/ahasana-ncs13/A08-Hero-Apps' target="_blank" className="btn text-white bg-linear-to-l from-[#632EE3] to-[#9F62F2] rounded-lg "> <IoLogoGithub />Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;