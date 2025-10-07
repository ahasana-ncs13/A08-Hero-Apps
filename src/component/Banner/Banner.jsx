import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import heroImg from '../../assets/hero.png'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-[#d2d2d230] ">
  <div className="hero-content text-center p-0">
    <div className="pt-25">
      <h1 className="text-5xl font-bold max-w-md mx-auto ">We Build <span className=' text-[#9F62F2]'> Productive</span> Apps</h1>
      <p className="py-6  max-w-2xl mx-auto">
       At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
     <div className="pb-6">
         <button className="btn  mr-5"><IoLogoGooglePlaystore /> <a href='https://play.google.com/store/games' target="_blank">Google Play</a></button>
      <button className="btn "><FaAppStore /> <a href='https://www.apple.com/app-store/' target="_blank"> App Store </a> </button>
     </div>
     <img src={heroImg} alt="" />
    </div>
    
  </div>
</div>

<div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white p-15">
    <h1 className='text-5xl font-bold text-center mb-5'>Trusted by Millions, Built for You</h1>
<div className="stats stats-vertical lg:stats-horizontal   w-full text-center">
  <div className="stat">
    <div className="stat-title text-white">Total Downloads</div>
    <div className="stat-value">29.6M</div>
    <div className="stat-desc text-white">21% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-title text-white">Total Reviews</div>
    <div className="stat-value">906K</div>
    <div className="stat-desc text-white">46% more than last month</div>
  </div>

  <div className="stat">
    <div className="stat-title text-white">Active Apps</div>
    <div className="stat-value text-white">132+</div>
    <div className="stat-desc text-white">31 more will Launch</div>
  </div>
</div>
</div>
        </div>
    );
};

export default Banner;